import Heading from '@/ui/Heading'
import Button from '@/ui/button/Button'
// import Layout from '@/ui/layout/Layout'
import Link from 'next/link'

export default function NotFound() {
	return (
		// <Layout>
		<div
			style={{ height: 'calc(100vh - 100px)' }}
			className='flex flex-col justify-center items-center'
		>
			<Heading className='text-8xl'>Not Found</Heading>
			<p className='text-2xl mt-6 mb-2'>Could not find requested resource</p>
			<Link className='text-primary' href='/'>
				<Button variant='dark'> Return Home</Button>
			</Link>
		</div>
		// </Layout>
	)
}
