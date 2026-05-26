"use client"

export function GitmapSkeleton() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between gap-3">
        <div className="h-8 w-40 rounded-md bg-muted/60 animate-pulse" />
        <div className="h-8 w-28 rounded-md bg-muted/60 animate-pulse" />
      </div>
      <div className="grid grid-cols-53 gap-1 overflow-hidden rounded-md border p-3">
        {Array.from({ length: 53 * 7 }).map((_, index) => (
          <div key={index} className="size-2.5 rounded-[2px] bg-muted/60 animate-pulse" />
        ))}
      </div>
    </div>
  )
}

export function LegendSkeleton() {
  return <div className="h-5 w-40 rounded-md bg-muted/60 animate-pulse" />
}
