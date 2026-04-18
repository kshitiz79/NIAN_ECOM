export default function CategoryHero({ title, image, description }) {
  return (
    <div className="relative h-[40vh] md:h-[60vh] w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">
        <div className="fade-in">
          <h1 className="text-4xl md:text-6xl font-light mb-4 tracking-[4px]">
            {title}
          </h1>
          {description && (
            <p className="italic tracking-[2px] text-xs md:text-sm text-white/80 max-w-lg">
              {description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
