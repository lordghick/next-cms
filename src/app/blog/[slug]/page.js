import BlogDisplay from '@/app/components/BlogDisplay'
import {getPosts} from '../../getposts'



async function page() {
  const post = await getPosts()
  console.log(`page ${post}`)
  return (
    <BlogDisplay item={post}/>
  )
}

export default page