"use client"

import React, { useMemo, useState } from "react"
import { eachWeekOfInterval, addDays, format } from "date-fns"
import { cn } from "@/lib/utils"

export interface ContributionDay {
  date: string
  count: number
  level: 0 | 1 | 2 | 3 | 4
}

export interface GitmapColors {
  empty: string
  level1: string
  level2: string
  level3: string
  level4: string
}

interface Props {
  contributions: ContributionDay[]
  from: Date
  to: Date
  colors: GitmapColors
  cellSize?: number
  cellGap?: number
  className?: string
}

function getDayKey(d: Date) {
  return format(d, "yyyy-MM-dd")
}

export default function Gitmap({
  contributions,
  from,
  to,
  colors,
  cellSize = 10,
  cellGap = 3,
  className,
}: Props) {
  const [tooltip, setTooltip] = useState<{ x: number; y: number; date: string; count: number } | null>(null)

  const contribMap = useMemo(() => {
    const m = new Map<string, ContributionDay>()
    contributions.forEach((c) => m.set(c.date, c))
    return m
  }, [contributions])

  const weeks = useMemo(() => {
    const weekStarts = eachWeekOfInterval({ start: from, end: to }, { weekStartsOn: 1 })
    return weekStarts.map((ws) => {
      return Array.from({ length: 7 }).map((_, i) => addDays(ws, i))
    })
  }, [from, to])

  const levelToColor = (level: number) => {
    switch (level) {
      case 1:
        return colors.level1
      case 2:
        return colors.level2
      case 3:
        return colors.level3
      case 4:
        return colors.level4
      default:
        return colors.empty
    }
  }

  return (
    <div className={cn("relative overflow-x-auto pb-4", className)} style={{ paddingLeft: 8 }}>
      <div style={{ display: "flex", gap: cellGap }}>
        {weeks.map((week, wi) => (
          <div key={wi} style={{ display: "grid", gridTemplateRows: `repeat(7, ${cellSize}px)`, gap: cellGap }}>
            {week.map((day) => {
              const key = getDayKey(day)
              const c = contribMap.get(key)
              const color = c ? levelToColor(c.level) : colors.empty
              return (
                <div
                  key={key}
                  title={`${key} — ${c ? c.count : 0} contributions`}
                  onMouseEnter={(event) => {
                    const bounds = event.currentTarget.getBoundingClientRect()
                    setTooltip({
                      x: bounds.left + bounds.width / 2,
                      y: bounds.top,
                      date: key,
                      count: c?.count || 0,
                    })
                  }}
                  onMouseMove={(event) => {
                    const bounds = event.currentTarget.getBoundingClientRect()
                    setTooltip({
                      x: bounds.left + bounds.width / 2,
                      y: bounds.top,
                      date: key,
                      count: c?.count || 0,
                    })
                  }}
                  onMouseLeave={() => setTooltip(null)}
                  style={{ width: cellSize, height: cellSize, backgroundColor: color, borderRadius: 2 }}
                />
              )
            })}
          </div>
        ))}
      </div>

      {tooltip && (
        <div
          className="pointer-events-none fixed z-50 -translate-x-1/2 -translate-y-[calc(100%+10px)] rounded-md bg-foreground px-2 py-1 text-[10px] text-background shadow-lg"
          style={{ left: tooltip.x, top: tooltip.y }}
        >
          <div className="font-medium">{tooltip.count} contribution{tooltip.count !== 1 ? "s" : ""}</div>
          <div>{tooltip.date}</div>
        </div>
      )}
    </div>
  )
}
