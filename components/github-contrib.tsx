"use client"

import React, { useEffect, useMemo, useState } from "react"
import Gitmap from "@/components/gitmap"
import { useGithubContributions } from "@/lib/github-api"
import { GitmapControls } from "@/components/gitmap-controls"
import { GitmapLegend } from "@/components/gitmap-legend"
import { GitmapSkeleton, LegendSkeleton } from "@/components/gitmap-skeleton"
import { GitmapThemeName, themes } from "@/lib/gitmap-themes"

interface Props {
  username?: string
}

export default function GithubContrib({ username }: Props) {
  const user = (username || "Warol52").toLowerCase()
  const { data, isLoading, error, load } = useGithubContributions()
  const [rangeValue, setRangeValue] = useState("last-year")
  const [themeName, setThemeName] = useState<GitmapThemeName>("github")

  useEffect(() => {
    load(user)
  }, [load, user])

  const from = useMemo(() => {
    if (rangeValue === "last-year") {
      return new Date(Date.now() - 1000 * 60 * 60 * 24 * 365)
    }

    return new Date(Number(rangeValue), 0, 1)
  }, [rangeValue])

  const to = useMemo(() => {
    if (rangeValue === "last-year") {
      return new Date()
    }

    return new Date(Number(rangeValue), 11, 31)
  }, [rangeValue])

  const colors = themes[themeName].colors

  return (
    <section className="mt-12  border border-border bg-card/70 p-4 shadow-sm  max-w-min" data-gitmap-theme={themeName}>
      <div className="mb-4 space-y-4">
        <GitmapControls
          availableYears={data?.availableYears || []}
          rangeValue={rangeValue}
          onRangeChange={setRangeValue}
          themeName={themeName}
          onThemeChange={setThemeName}
        />
      </div>

      {isLoading && <GitmapSkeleton />}
      {error && <div className="text-sm text-destructive">Erreur: {error}</div>}
      {!isLoading && !error && data && (
        <div className="space-y-4 overflow-x-auto">
          <Gitmap contributions={data.contributions} from={from} to={to} colors={colors} />
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <GitmapLegend colors={colors} />
          </div>
        </div>
      )}
      {isLoading && <div className="mt-4"><LegendSkeleton /></div>}
    </section>
  )
}
