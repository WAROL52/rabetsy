export const portfolio = {
	personal: {
		firstName: "Rolio",
		lastName: "RABETSY",
		role: "Full-Stack Engineer",
		tagline:
			"Building scalable web architectures, low-level systems and high-performance digital experiences.",
		shortBio:
			"Full-Stack developer specialized in modern web applications, backend architecture and systems programming. Passionate about performance, clean architecture and advanced frontend experiences.",
		location: "Antananarivo, Madagascar",
		email: "rabetsyrolio@gmail.com",
		phone: "+261 32 80 715 12",
		website: "https://rabetsy.vercel.app",
		avatar: "/rrabetsy.jpg",
		resume: "/cv-rolio-rabetsy.pdf",
		available: true,
	},

	social: {
		github: "https://github.com/Warol52",
		linkedin: "#",
		email: "mailto:rabetsyrolio@gmail.com",
	},

	stats: {
		uptime: "99.9%",
		activeProjects: 6,
		experience: "5+ YEARS",
	},

	hero: {
		badge: "SYSTEM ONLINE // AVAILABLE FOR WORK",
		titleTop: "FULL",
		titleMiddle: "STACK",
		titleBottom: "ENGINEER_",
	},

	projects: [
		{
			title: "Pokédex Phantom",
			description:
				"Interactive Pokédex built with Next.js, featuring search, filtering, detailed Pokemon pages and a polished responsive UI.",
			tags: ["Next.js", "TypeScript", "TanStack Query", "Zustand", "PokéAPI"],
			image: "/project-placeholder-1.jpg",
			link: "https://pokedex-phantom.vercel.app/",
			repo: "https://github.com/WAROL52/pokedex",
		},
		{
			title: "ft_transcendence",
			description:
				"Real-time full-stack application with secure authentication, multiplayer interactions and Docker deployment.",
			tags: [
				"Next.js",
				"TypeScript",
				"Docker",
				"WebSocket",
				"PostgreSQL",
			],
			image: "/projects/transcendence.jpg",
			link: "https://axispace.vercel.app/",
			repo: "#",
		},
		{
			title: "Webserv",
			description:
				"HTTP server built from scratch in C++. Handles CGI, sockets, HTTP parsing and multiple client connections.",
			tags: ["C++", "HTTP", "CGI", "Sockets", "Linux"],
			image: "/projects/webserv.jpg",
			link: "https://warol52.github.io/42-webserv/",
			repo: "https://github.com/WAROL52/42-webserv",
		},
		{
			title: "Cub3D",
			description:
				"Raycasting engine inspired by Wolfenstein 3D with textures, collisions and optimized rendering.",
			tags: ["C", "Raycasting", "Graphics", "Game Engine"],
			image: "/projects/cub3d.jpg",
			link: "https://github.com/WAROL52/42-cub3d",
			repo: "https://github.com/WAROL52/42-cub3d",
		},
		{
			title: "Minishell",
			description:
				"Custom UNIX shell implementation with pipes, redirections and process management.",
			tags: ["C", "Shell", "UNIX", "Processes"],
			image: "/projects/minishell.jpg",
			link: "https://github.com/WAROL52/42-minishell",
			repo: "https://github.com/WAROL52/42-minishell",
		},
		{
			title: "SPAT",
			description:
				"SPAT Tamatave intern management",
			tags: ["React", "Next.js", "PostgreSQL"],
			image: "/projects/tsaratrans.jpg",
			link: "https://gestion-stagiaire52.vercel.app/",
			repo: "https://github.com/WAROL52/gestion-stagiaire",
		},
	],

	skills: [
		{
			category: "Frontend",
			items: [
				"React",
				"Next.js",
				"TypeScript",
				"Tailwind CSS",
				"Framer Motion",
			],
		},
		{
			category: "Backend",
			items: [
				"Node.js",
				"NestJS",
				"Express",
				"PostgreSQL",
				"MySQL",
			],
		},
		{
			category: "Systems",
			items: ["C", "C++", "Linux", "Bash", "Docker"],
		},
		{
			category: "Tools",
			items: ["Git", "Prisma", "React Native", "Flutter"],
		},
	],

	experience: [
		{
			company: "DevPhantom",
			role: "Lead Tech",
			period: "2025 - 2026",
			description:
				"Technical leadership, architecture supervision, code reviews and development standards management.",
		},
		{
			company: "Madagascar National Park",
			role: "Full-Stack Developer",
			period: "2022 - 2023",
			description:
				"Development and maintenance of a monitoring platform for natural resource protection.",
		},
		{
			company: "TsaraTrans",
			role: "Full-Stack Developer",
			period: "2022",
			description:
				"Built transport management tools and business workflows for road operations.",
		},
	],
};