export async function getPosts(extrapoint = "") {
  const endpoint = "/posts?per_page=6";

  const url = `${process.env.WP_URL}${endpoint}`;

  const res = await fetch(url);
  let data;
  if (!res.ok) {
    console.log({ "----- FETCH ERROR": res });
    return (data = []);
  }

  data = await res.json();
  return data;
}

async function getUsers() {
  const endpoint = "/users";

  const url = `${process.env.WP_URL}${endpoint}`;

  const res = await fetch(url);
  let data;
  if (!res.ok) {
    console.log({ "----- FETCH ERROR": res });
    return (data = []);
  }

  data = await res.json();
  return data;
}

async function getCategories() {
  const endpoint = "/categories";

  const url = `${process.env.WP_URL}${endpoint}`;

  const res = await fetch(url);

  let data;
  if (!res.ok) {
    console.log({ "----- FETCH ERROR": res });
    return (data = []);
  }

  data = await res.json();
  return data;
}

async function getTags() {
  const endpoint = "/tags";

  const url = `${process.env.WP_URL}${endpoint}`;

  const res = await fetch(url);

  let data;
  if (!res.ok) {
    console.log({ "----- FETCH ERROR": res });
    return (data = []);
  }

  data = await res.json();

  console.log(data);
  return data;
}

export default async function loader(extrapoint) {
  const posts = await getPosts(extrapoint);
  const users = await getUsers();
  // const categories = await getCategories();
  // const tags = await getTags()

  let articules = [];

  posts.map((post) => {
    let userArticule = users.findIndex((author) => author.id == post.author);
    let userName = users[userArticule].name;

    let articulo = {
      id: post.id,
      title: post.title.rendered,
      excerpt: post.excerpt.rendered,
      user: userName,
      slug: post.slug,
      content: post.content.rendered,
    };

    articules.push(articulo);
  });
  return articules;
}
