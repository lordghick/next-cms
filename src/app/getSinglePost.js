import GetPathName from "./GetPathName"

async function getPosts() {
	const endpoint = '/posts'

	const url = `${process.env.WP_URL}${endpoint}`

	const res = await fetch(url)
	let data
	if (!res.ok) {
		console.log({ '----- FETCH ERROR': res })
		return (data = [])
	}

	data = await res.json()
	return data
}

async function getUsers() {
	const endpoint = '/users'

	const url = `${process.env.WP_URL}${endpoint}`

	const res = await fetch(url)
	let data
	if (!res.ok) {
		console.log({ '----- FETCH ERROR': res })
		return (data = [])
	}

	data = await res.json()
	return data
}

async function getCategories() {
	const endpoint = '/categories'

	const url = `${process.env.WP_URL}${endpoint}`

	const res = await fetch(url)

	let data
	if (!res.ok) {
		console.log({ '----- FETCH ERROR': res })
		return (data = [])
	}

	data = await res.json()
	return data
}

async function getTags(){
	const endpoint = '/tags'

	const url = `${process.env.WP_URL}${endpoint}`

	const res = await fetch(url)

	let data
	if (!res.ok) {
		console.log({ '----- FETCH ERROR': res })
		return (data = [])
	}

	data = await res.json()

	console.log(data)
	return data
}



export default async function loader(){
	const posts = await getPosts();
	const users = await getUsers();
	const categories = await getCategories();
	const tags = await getTags()
	const slug = GetPathName()
	

	let post = posts.findIndex((slug) => posts.slug == slug)
	let postId= posts[post].id

	let userArticule = users.findIndex((author) => author.id == postId.author)
	let userName = users[userArticule].name

	let articulo = {
		id: postId.id,
		title: postId.title.rendered,
		excerpt: postId.excerpt.rendered,
		user: userName,
		slug: postId.slug

}
	return articulo
}