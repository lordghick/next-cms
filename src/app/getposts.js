export default async function getPosts() {
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
