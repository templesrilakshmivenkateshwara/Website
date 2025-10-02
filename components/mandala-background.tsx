export function MandalaBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Spinning mandala wheel on the right side (hidden on small screens to keep layout clean) */}
      <img
        src="/images/mandala-wheel.png"
        alt=""
        className="hidden md:block absolute top-1/2 -translate-y-1/2 right-4 lg:right-10 w-48 h-48 lg:w-72 lg:h-72 opacity-30 animate-spin-slow select-none"
      />
    </div>
  )
}
