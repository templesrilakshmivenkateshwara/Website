"use client"

import { useState } from "react"
import { Expand } from "lucide-react"

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { cn } from "@/lib/utils"

type ImagePreviewProps = {
  src: string
  alt: string
  title?: string
  description?: string
  className?: string
  imageClassName?: string
  previewClassName?: string
  aspectClassName?: string
}

export function ImagePreview({
  src,
  alt,
  title,
  description,
  className,
  imageClassName,
  previewClassName,
  aspectClassName,
}: ImagePreviewProps) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={cn(
          "group block w-full text-left focus:outline-none focus:ring-2 focus:ring-primary/60 focus:ring-offset-2 focus:ring-offset-background",
          className,
        )}
        aria-label={title ? `Preview ${title}` : "Preview image"}
        title="Tap to enlarge"
      >
        <div
          className={cn(
            "overflow-hidden rounded-xl bg-muted/30 p-3 sm:p-4",
            aspectClassName || "aspect-[4/3]",
            previewClassName,
          )}
        >
          <div className="flex h-full w-full items-center justify-center overflow-hidden rounded-lg">
            <img
              src={src}
              alt={alt}
              loading="lazy"
              decoding="async"
              className={cn(
                "h-full w-full object-contain transition-transform duration-300 ease-out group-hover:scale-[1.03]",
                imageClassName,
              )}
            />
          </div>
        </div>
      </button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-5xl border-border/70 bg-background p-4 sm:p-6">
          <DialogHeader className="sr-only">
            <DialogTitle>{title || alt}</DialogTitle>
            {description ? <DialogDescription>{description}</DialogDescription> : null}
          </DialogHeader>
          <div className="max-h-[80vh] overflow-hidden rounded-xl bg-muted/20 p-3 sm:p-4">
            <img
              src={src}
              alt={alt}
              className="h-full max-h-[76vh] w-full object-contain"
            />
          </div>
          {(title || description) && (
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Expand className="h-4 w-4" />
              <span>{title || alt}</span>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}
