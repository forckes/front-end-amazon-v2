import Home from './Home'
import { ProductService } from '@/services/product/product.service'
import { Metadata } from 'next'

export const metadata: Metadata = {
	description:
		'Free shipping on millions of items. Get the best of Shopping and Entertainment with Prime'
}

export const revalidate = 60

async function getProducts() {
	const data = await ProductService.getAll({
		page: 1,
		perPage: 5,
		ratings: ''
	})

	return data
}

export default async function HomePage() {
	const data = await getProducts()
	return <Home products={data.products} />
}
