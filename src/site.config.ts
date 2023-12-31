// Interface specifying information about the website
interface SiteConfig {
	author: string;								// author of the website
	title: string;								// title of website
	description: string;						// website description
	lang: string;								// website language
	ogLocale: string;							// the locale (time)
	themeColorLight: string;					// the light theme hex code
	themeColorDark: string;						// dark theme hex code
	date: {
		locale: string | string[] | undefined;	// 
		options: Intl.DateTimeFormatOptions;	//
	};
}

export const siteConfig: SiteConfig = {
	// Used as both a meta property (src/components/BaseHead.astro L:31 + L:49) & the generated satori png (src/pages/og-image/[slug].png.ts)
	author: "Mohamed Belkhair",
	// Meta property used to construct the meta title property, found in src/components/BaseHead.astro L:11
	title: "Astro Theme Cactus",
	// Meta property used as a default description meta property
	description: "An opinionated starter theme for Astro",
	// HTML lang property, found in src/layouts/Base.astro L:18
	lang: "en-GB",
	// Meta property, found in src/components/BaseHead.astro L:42
	ogLocale: "en_GB",
	// Sets the meta data theme-color, found in src/components/BaseHead.astro L:34. Toggling the dark mode will update the meta content with either light/dark color, implementation in src/layouts/Base.astro L:41.
	themeColorLight: "#fafafa",
	themeColorDark: "#1d1f21",
	// Date.prototype.toLocaleDateString() parameters, found in src/utils/date.ts.
	date: {
		locale: "en-GB",
		options: {
			day: "numeric",
			month: "short",
			year: "numeric",
		},
	},
};
