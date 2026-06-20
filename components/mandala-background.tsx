import { sitePath } from "@/lib/utils"

export function MandalaBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <img
        src={sitePath("/images/mandala-wheel.png")}
        alt=""
        className="hidden md:block absolute -top-24 -left-24 w-64 h-64 lg:w-80 lg:h-80 opacity-10 mix-blend-multiply select-none"
      />
      <img
        src={sitePath("/images/mandala-wheel.png")}
        alt=""
        className="hidden md:block absolute -bottom-24 -right-24 w-64 h-64 lg:w-80 lg:h-80 opacity-10 mix-blend-multiply select-none"
      />
    </div>
  )
}
