export const siteName = 'Clean Post'
export const siteUrl = 'https://blog.x4de.repl.co'
export const siteTitle = `${siteName}`
export const siteDescription =
	'Digital collection of my blog, experience and more'
export const siteImage = `${siteUrl}social.png`
export const postImage = 'https://social-share-images.vercel.app/'

export const twitterHandle = '@xade'
export const twitter = ''
export const youtube = ''
export const reddit = ''
export const matrix = 'https://matrix.to/#/#owl:matrix.org'
export const codeberg = 'https://codeberg.org/xade'
export const github = 'https://github.com/imxade'
export const codechef = 'https://www.codechef.com/users/xade'
export const linkedin = 'https://www.linkedin.com/in/riturajbasak/'
export const replit = 'https://replit.com/@x4de'

export const api = 'https://api.github.com'
export const owner = 'imxade'
export const repo = 'blog'
export const path = 'posts'

export const categories = {
	game: 'Game',
	web: 'Web',
	os: 'OS',
	random: 'Random',
	javascript: 'JavaScript',
	general: 'General',
	design: 'Design',
	git: 'Git',
	next: 'Next.js',
	typescript: 'TypeScript',
	sveltekit: 'SvelteKit',
}

// https://api.github.com/repos/user/repo/contents/data/posts.json
export const postsDataUrl = `${api}/repos/${owner}/${repo}/contents/data/posts.json`

// https://api.github.com/repos/user/repo/contents/posts
export const postsUrl = `${api}/repos/${owner}/${repo}/contents/${path}`

// https://github.com/user/repo/blob/main/posts
export const fileUrl = `https://github.com/${owner}/${repo}/blob/main/posts`

// https://raw.githubusercontent.com/user/repo/main/posts/post-slug/images/image.webp
export const imagesUrl = `https://raw.githubusercontent.com/${owner}/${repo}/main/posts`
