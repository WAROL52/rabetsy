"use client"

import { GitmapThemeName, themes } from "@/lib/gitmap-themes"

type Props = {
  availableYears: number[]
  rangeValue: string
  onRangeChange: (value: string) => void
  themeName: GitmapThemeName
  onThemeChange: (value: GitmapThemeName) => void
}

export function GitmapControls({
  availableYears,
  rangeValue,
  onRangeChange,
  themeName,
  onThemeChange,
}: Props) {
  return (
    <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
      <div>
        <p className="text-sm font-medium">GitHub contributions</p>
        <p className="text-xs text-muted-foreground">Choose a year range and color theme.</p>
      </div>

      <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
        <label className="flex items-center gap-2 text-xs text-muted-foreground">
          Range
          <select
            value={rangeValue}
            onChange={(event) => onRangeChange(event.target.value)}
            className="h-8 rounded-md border border-border bg-background px-2 text-xs text-foreground outline-none"
          >
            <option value="last-year">Last 365 days</option>
            {availableYears.map((year) => (
              <option key={year} value={String(year)}>
                {year}
              </option>
            ))}
          </select>
        </label>

        <label className="flex items-center gap-2 text-xs text-muted-foreground">
          Theme
          <select
            value={themeName}
            onChange={(event) => onThemeChange(event.target.value as GitmapThemeName)}
            className="h-8 rounded-md border border-border bg-background px-2 text-xs text-foreground outline-none"
          >
            {Object.entries(themes).map(([key, value]) => (
              <option key={key} value={key}>
                {value.name}
              </option>
            ))}
          </select>
        </label>
        <div className="text-[11px] text-muted-foreground sm:pl-2">
          Active theme: <span className="gitmap-theme-name gitmap-theme-name-github">GitHub</span>
          <span className="gitmap-theme-name gitmap-theme-name-halloween">Halloween</span>
          <span className="gitmap-theme-name gitmap-theme-name-winter">Winter</span>
          <span className="gitmap-theme-name gitmap-theme-name-ocean">Ocean</span>
          <span className="gitmap-theme-name gitmap-theme-name-sunset">Sunset</span>
          <span className="gitmap-theme-name gitmap-theme-name-forest">Forest</span>
          <span className="gitmap-theme-name gitmap-theme-name-lavender">Lavender</span>
          <span className="gitmap-theme-name gitmap-theme-name-cherry">Cherry</span>
          <span className="gitmap-theme-name gitmap-theme-name-mint">Mint</span>
          <span className="gitmap-theme-name gitmap-theme-name-coral">Coral</span>
          <span className="gitmap-theme-name gitmap-theme-name-slate">Slate</span>
          <span className="gitmap-theme-name gitmap-theme-name-gold">Gold</span>
          <span className="gitmap-theme-name gitmap-theme-name-neon">Neon</span>
          <span className="gitmap-theme-name gitmap-theme-name-rose">Rose</span>
        </div>
      </div>
    </div>
  )
}
