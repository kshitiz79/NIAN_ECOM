"use client";

import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
    const [cart, setCart] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    // 1. Safely load from localStorage ONLY on the client side
    useEffect(() => {
        try {
            const stored = localStorage.getItem("nian_cart");
            if (stored) {
                setCart(JSON.parse(stored));
            }
        } catch (error) {
            console.error("Failed to parse cart data", error);
        }
        setIsLoaded(true);
    }, []);

    // 2. Sync cart back to localStorage whenever it changes
    useEffect(() => {
        if (isLoaded) {
            localStorage.setItem("nian_cart", JSON.stringify(cart));
        }
    }, [cart, isLoaded]);

    const addToCart = (product, quantity = 1) => {
        setCart((prevCart) => {
            const exist = prevCart.find((item) => item._id === product._id);
            if (exist) {
                return prevCart.map((item) =>
                    item._id === product._id
                        ? { ...item, qty: item.qty + quantity }
                        : item
                );
            }
            return [...prevCart, { ...product, qty: quantity }];
        });
    };

    const removeFromCart = (id) => {
        setCart((prevCart) => prevCart.filter((item) => item._id !== id));
    };

    const updateQty = (id, newQty) => {
        // Prevent negative or zero quantity
        if (newQty < 1) return;

        setCart((prevCart) =>
            prevCart.map((item) =>
                item._id === id ? { ...item, qty: newQty } : item
            )
        );
    };

    const clearCart = () => setCart([]);

    return (
        <CartContext.Provider
            value={{ cart, isLoaded, addToCart, removeFromCart, updateQty, clearCart }}
        >
            {children}
        </CartContext.Provider>
    );
}

// Professional error handling for the hook
export const useCart = () => {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error("useCart must be used within a CartProvider");
    }
    return context;
};