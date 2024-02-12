import { CategoryService } from '@/services/category.service'
import { ProductService } from '@/services/product/product.service'
import { IPageSlugParams, TypeParamSlug } from '@/types/page-params'
import Catalog from '@/ui/catalog/Catalog'
import { Metadata } from 'next'

export const revalidate = 60


export async function getStaticPaths() {
	const categories = await CategoryService.getAll()

	const paths = categories.data.map(category => {
		return {
			params: { slug: category.slug }
		}
	})

	return { paths, fallback: 'blocking' }
}

async function getProducts(params: TypeParamSlug) {
	const { data: products } = await ProductService.getByCategory(
		params?.slug as string
	)
	const { data: category } = await CategoryService.getBySlug(
		params?.slug as string
	)

	return {
		products,
		category
	}
}

export async function generateMetadata({
	params
}: IPageSlugParams): Promise<Metadata> {
	const { category, products } = await getProducts(params)
	return {
		title: category.name,
		description: `Random description about ${category.name}`,
		openGraph: {
			images: products[0].images,
			description: `Random description about ${category.name}`
		}
	}
}

export default async function CategoryPage({ params }: IPageSlugParams) {
	const data = await getProducts(params)

	return <Catalog products={data.products || []} title={data.category.name} />
}
