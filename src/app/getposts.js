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

	let articules = [];
	
	posts.map((post) => {
	let userArticule = users.findIndex((author) => author.id == post.author)
	let userName = users[userArticule].name

	let categorieArticule = categories.findIndex((categorie) => categorie.id == post.categories)
	let categorieName = categories[categorieArticule].name

	let tagArticule = tags.findIndex((tag) => tag.id == post.tags)
	// let tagName = tags[tagArticule].name

	let articulo = {
		id: post.id,
		title: post.title.rendered,
		excerpt: post.excerpt.rendered,
		user: userName,
		categories: categorieName,
	}

	articules.push(articulo)
})

	console.log(articules)
	return articules
}