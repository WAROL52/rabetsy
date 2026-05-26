"use client"

import { useState, useCallback } from "react"

export interface ContributionDay {
	date: string
	count: number
	level: 0 | 1 | 2 | 3 | 4
}

interface GithubContributionsResponse {
	total: Record<string, number>
	contributions: ContributionDay[]
}

interface GitmapData {
	contributions: ContributionDay[]
	availableYears: number[]
}

const API_BASE = "https://github-contributions-api.jogruber.de/v4"

export async function fetchGithubContributions(username: string): Promise<GithubContributionsResponse> {
	const res = await fetch(`${API_BASE}/${username}`)
	if (!res.ok) {
		throw new Error(`Failed to fetch contributions for ${username}`)
	}
	return res.json()
}

export function useGithubContributions() {
	const [data, setData] = useState<GitmapData | null>(null)
	const [isLoading, setIsLoading] = useState(false)
	const [error, setError] = useState<string | null>(null)

	const load = useCallback(async (username: string) => {
		const normalizedUsername = username.trim().toLowerCase()
		if (!normalizedUsername) return

		setIsLoading(true)
		setError(null)

		try {
			const response = await fetchGithubContributions(normalizedUsername)
			const availableYears = Object.keys(response.total)
				.map(Number)
				.sort((a, b) => b - a)

			setData({
				contributions: response.contributions,
				availableYears,
			})
		} catch (err) {
			setError(err instanceof Error ? err.message : "Failed to load")
			setData(null)
		} finally {
			setIsLoading(false)
		}
	}, [])

	return { data, isLoading, error, load }
}
