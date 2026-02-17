"use client";

export function BackgroundGradient() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute -top-40 -left-40 w-125 h-125 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-0 w-100 h-100 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
    </div>
  );
}
