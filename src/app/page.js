// import ImageSlider from "../components/ImageSlider";

import Link from 'next/link'

import Header from './components/Header'
import ImageSlider from './components/ImageSlider'
import { RiArrowRightSLine } from 'react-icons/ri'
import { RiFacebookCircleFill, RiTwitterFill, RiTiktokFill, RiRedditFill, RiSendPlaneFill } from 'react-icons/ri'
import BackToTopButton from './components/BackToTopButton'
import InfiniteScrollMain from './components/InfiniteScrollMain'

import getPosts from './getposts'

export const metadata = {
	title: 'Home',
	description: 'Home of the blog',
}

async function page() {
	const data = await getPosts()

	const articulo = data[0]	

	return (
		<div className='bg-gray-200 min-h-screen'>
			<Header />

			<div className='container max-w-sm md:max-w-2xl lg:max-w-6xl bg-white mx-auto my-8 shadow-lg min-h-[450px] rounded-lg p-2'>
				<ImageSlider articulo={articulo} />
			</div>

			<div className='container px-4 md:px-0 max-w-sm md:max-w-2xl lg:max-w-6xl mx-auto mb-8'>
				<p className='text-gray-400'>See my latest post</p>
				<p className='text-slate-900 font-bold text-2xl'>Latest Post</p>
			</div>

			{/* main */}

			<InfiniteScrollMain />

			<div className='container max-w-6xl mx-auto flex items-center justify-center pb-8'>
				<Link
					href='/'
					className='flex items-center gap-1 bg-black px-4 py-2 rounded-full hover:bg-yellow-500 hover:text-black transition-colors duration-300  text-yellow-500 uppercase font-bold'
				>
					Older Post <RiArrowRightSLine />
				</Link>
			</div>

			<div className='shadow-lg container max-w-6xl mx-auto min-h-[300px] mb-8 bg-[url(https://cdna.artstation.com/p/assets/images/images/029/181/430/4k/anthony-catillaz-untitled-2.jpg?1596708920)] bg-no-repeat bg-cover bg-bottom rounded-lg border-8 border-white flex flex-col items-center justify-center gap-6 text-yellow-500 uppercase font-bold'>
				<h4 className='text-2xl'>Stay in the Loop</h4>
				<p className='text-lg'>Subscribe to my newsletter for all the latest updates</p>

				<Link
					href='/'
					className='flex items-center gap-1 bg-black px-4 py-2 rounded-full hover:bg-yellow-500 hover:text-black transition-colors duration-300'
				>
					Subscribe <RiSendPlaneFill />
				</Link>
			</div>

			<footer className='bg-white min-h-[100px] w-full border-2 flex items-center justify-center'>
				<div className='container max-w-6xl mx-auto flex items-center justify-evenly text-sm text-slate-500'>
					<p className='text-sm'>© 2023 FrontEnd by Freddy S, BackEnd by Leonardo L</p>

					<div className='flex items-center gap-2'>
						<Link href='/' className='hover:text-slate-700 transition-all'>
							<RiFacebookCircleFill className='text-xl' />
						</Link>
						<Link href='/' className='hover:text-slate-700 transition-all'>
							<RiTwitterFill className='text-xl' />
						</Link>
						<Link href='/' className='hover:text-slate-700 transition-all'>
							<RiTiktokFill className='text-xl' />
						</Link>
						<Link href='/' className='hover:text-slate-700 transition-all'>
							<RiRedditFill className='text-xl' />
						</Link>
					</div>

					<BackToTopButton />
				</div>
			</footer>
		</div>
	)
}

export default page
