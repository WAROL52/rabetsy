const colors = {
	empty: "var(--gitmap-empty)",
	level1: "var(--gitmap-level-1)",
	level2: "var(--gitmap-level-2)",
	level3: "var(--gitmap-level-3)",
	level4: "var(--gitmap-level-4)",
} as const

export const themes = {
	github: { name: "GitHub", colors },
	halloween: { name: "Halloween", colors },
	winter: { name: "Winter", colors },
	ocean: { name: "Ocean", colors },
	sunset: { name: "Sunset", colors },
	forest: { name: "Forest", colors },
	lavender: { name: "Lavender", colors },
	cherry: { name: "Cherry", colors },
	mint: { name: "Mint", colors },
	coral: { name: "Coral", colors },
	slate: { name: "Slate", colors },
	gold: { name: "Gold", colors },
	neon: { name: "Neon", colors },
	rose: { name: "Rose", colors },
} as const

export type GitmapThemeName = keyof typeof themes
