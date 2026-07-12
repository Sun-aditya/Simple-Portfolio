import type { WritingArticle } from "@/types/portfolio";

// TEMPORARY DEVELOPMENT DATA — replace with real published writing before production deployment.
export const writing: readonly WritingArticle[] = [
	{
		id: "first-open-source-contribution",
		slug: "my-first-open-source-contribution",
		title: "My First Open-Source Contribution: What I Learned",
		summary:
			"Lessons from navigating an unfamiliar codebase, understanding contribution workflows, and submitting a meaningful first contribution.",
		publishedAt: null,
		readingTime: "6 min",
		tags: ["Open Source", "Git", "Software Engineering"],
		url: null,
		displayOrder: 1,
	},
	{
		id: "building-repojet",
		slug: "building-repojet-detecting-project-environments-automatically",
		title: "Building RepoJet: Detecting Project Environments Automatically",
		summary:
			"A look at the design decisions behind repository analysis, package-manager detection, and building developer tooling with Go.",
		publishedAt: null,
		readingTime: "8 min",
		tags: ["Go", "Developer Tools", "CLI"],
		url: null,
		displayOrder: 2,
	},
	{
		id: "what-i-learned-building-binmap-tracker",
		slug: "what-i-learned-building-binmap-tracker",
		title: "What I Learned Building BinMap Tracker",
		summary:
			"Notes on designing a location-based waste-management application using Next.js, Supabase, and interactive maps.",
		publishedAt: null,
		readingTime: "7 min",
		tags: ["Next.js", "Supabase", "Leaflet"],
		url: null,
		displayOrder: 3,
	},
];
