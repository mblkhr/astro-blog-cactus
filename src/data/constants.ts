const base = import.meta.env.BASE_URL

export const MENU_LINKS = [
	{
		title: "Home",
		path: `${base}`,
	},
	{
		title: "About",
		path: `${base}about/`,
	},
	{
		title: "Blog",
		path: `${base}posts/`,
	},
];

// ! Remember to add your own socials
export const SOCIAL_LINKS = {
	github: "https://github.com/mblkhr",
	linkedin: "https://linkedin.com/in/mblkhr",
	discord: "https://github.com/mblkhr",
	email: "mohamed6190@gmail.com",
};
