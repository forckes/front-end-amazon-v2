import ItemPage from '@/screens/product-page/ItemPage'
import { ProductService } from '@/services/product/product.service'
import { IPageSlugParams, TypeParamSlug } from '@/types/page-params'
// import Layout from '@/ui/layout/Layout'
import { Metadata } from 'next'
import React from 'react'

export async function getStaticPaths() {
	const { products } = await ProductService.getAll()
	const paths = products.map(product => {
		return {
			params: { slug: product.slug }
		}
	})
	return { paths, fallback: 'blocking' }
}

async function getProductBySlug(params: TypeParamSlug) {
	const slug = params?.slug as string
	const { data: product } = await ProductService.getBySlug(slug)

	return {
		product
	}
}

export async function generateMetadata({
	params
}: IPageSlugParams): Promise<Metadata> {
	const { product } = await getProductBySlug(params)

	return {
		title: product.name,
		description: `Random description about ${product.name}`,
		openGraph: {
			images: product.images[0], // Make sure this is valid
			description: `Random description about ${product.name}`
		}
	}
}

export default async function ProductPage({ params }: IPageSlugParams) {
	const data = await getProductBySlug(params)
	return (
		// <Layout>
		<ItemPage product={data.product} />
		/* </Layout> */
	)
}
