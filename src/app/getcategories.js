export default async function getCategories(categoria) {
	const endpoint = '/categories'

	const url = `${process.env.WP_URL}${endpoint}`

	const res = await fetch(url)
	let data
	if (!res.ok) {
		console.log({ '----- FETCH ERROR': res })
		return (data = [])
	}

	data = await res.json()
	const indexCategoria = data.findIndex((type) => type.id == categoria)
	const nombreCategoria = data[indexCategoria].name;
	return nombreCategoria
}
