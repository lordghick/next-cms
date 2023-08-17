export default async function getUsers(user) {
	const endpoint = '/users'

	const url = `${process.env.WP_URL}${endpoint}`

	const res = await fetch(url)
	let data
	if (!res.ok) {
		console.log({ '----- FETCH ERROR': res })
		return (data = [])
	}

	data = await res.json()
	const indexUser = data.findIndex((type) => type.id == user)
	const userName = data[indexUser].name;
	return userName
}
