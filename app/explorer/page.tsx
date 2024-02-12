import type { Metadata } from 'next'

import { NO_INDEX_PAGE } from '@/constants/seo.constants'
import { ProductService } from '@/services/product/product.service'
import {
	TypeParamsFilters,
	TypeProductDataFilters
} from '@/services/product/product.types'
import ProductExplorer from './ProductExplorer'

export const metadata: Metadata = {
	title: 'Explorer',
	...NO_INDEX_PAGE
}

export const revalidate = 60

async function getProducts(searchParams: TypeProductDataFilters) {
	const data = await ProductService.getAll(searchParams)

	return data
}

export default async function ExplorerPage({
	searchParams
}: TypeParamsFilters) {
	const data = await getProducts(searchParams)

	return <ProductExplorer initialProducts={data} />
}
