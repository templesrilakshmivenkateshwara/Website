import { sitePath } from "@/lib/utils"

export function MandalaBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <img
        src={sitePath("/images/mandala-wheel.png")}
        alt=""
        className="hidden md:block absolute top-6 left-4 lg:left-8 w-40 h-40 lg:w-56 lg:h-56 opacity-15 mix-blend-multiply animate-spin-slow select-none"
      />
      <img
        src={sitePath("/images/mandala-wheel.png")}
        alt=""
        className="hidden md:block absolute bottom-6 right-4 lg:right-8 w-44 h-44 lg:w-64 lg:h-64 opacity-12 mix-blend-multiply animate-spin-reverse select-none"
      />
    </div>
  )
}
