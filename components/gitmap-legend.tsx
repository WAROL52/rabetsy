"use client"

type Props = {
  colors: {
    empty: string
    level1: string
    level2: string
    level3: string
    level4: string
  }
}

export function GitmapLegend({ colors }: Props) {
  const swatches = [colors.empty, colors.level1, colors.level2, colors.level3, colors.level4]

  return (
    <div className="flex items-center gap-2 text-xs text-muted-foreground">
      <span>Less</span>
      <div className="flex items-center gap-1">
        {swatches.map((color) => (
          <span
            key={color}
            className="size-2.5 rounded-[2px] border border-border/20"
            style={{ backgroundColor: color }}
          />
        ))}
      </div>
      <span>More</span>
    </div>
  )
}
