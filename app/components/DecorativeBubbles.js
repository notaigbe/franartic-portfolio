"use client";

export default function DecorativeBubbles() {
  return (
    <>
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-white/10 rounded-full blur-lg animate-pulse delay-1000" />
    </>
  );
}
