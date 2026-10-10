import Image from "next/image";

// Kotak foto reusable. Jika file foto tidak ada, tampil latar navy.
export default function Foto({
  src,
  alt,
  className = "",
  sizes = "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw",
  priority = false,
}) {
  return (
    <div
      className={`relative overflow-hidden bg-gradient-to-br from-navy to-navy-light ${className}`}
    >
      {src && (
        <Image
          src={src.replace(/^\/public/, "")}
          alt={alt}
          fill
          unoptimized
          sizes={sizes}
          priority={priority}
          className="object-cover"
        />
      )}
    </div>
  );
}
