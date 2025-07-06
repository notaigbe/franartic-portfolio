"use client";
import Image from "next/image";
import { useState } from "react";

export default function ImageWithSkeleton({ src, alt, className, width, height, style }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative w-full h-full">
      {!loaded && (
        <div
          className="absolute inset-0 bg-gradient-to-br from-gray-300 via-gray-200 to-gray-100 animate-pulse rounded-2xl z-10"
          style={{ width, height }}
        />
      )}
      <Image
        src={src}
        alt={alt}
        className={`${className} ${loaded ? "" : "opacity-0"}`}
        width={width}
        height={height}
        style={style}
        onLoad={() => setLoaded(true)}
        onError={() => setLoaded(true)}
      />
    </div>
  );
}
