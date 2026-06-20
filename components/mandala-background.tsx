import Image from "next/image"
import { sitePath } from "@/lib/utils"

export function MandalaBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <div className="hidden md:block absolute -top-24 -left-24 w-64 h-64 lg:w-80 lg:h-80 opacity-10 mix-blend-multiply select-none">
        <Image
          src={sitePath("/images/mandala-wheel.png")}
          alt=""
          fill
          sizes="320px"
          className="object-contain"
        />
      </div>
      <div className="hidden md:block absolute -bottom-24 -right-24 w-64 h-64 lg:w-80 lg:h-80 opacity-10 mix-blend-multiply select-none">
        <Image
          src={sitePath("/images/mandala-wheel.png")}
          alt=""
          fill
          sizes="320px"
          className="object-contain"
        />
      </div>
    </div>
  )
}
