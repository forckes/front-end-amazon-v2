export const PRODUCTS = 'products'

export type TypeProductData = {
	name: string
	price: number
	description: string
	images: string[]
	categoryId: number
	createdAt: string
}

export type TypeProductDataFilters = {
	sort?: EnumProductSort | string
	searchTerm?: string
	page?: string | number
	perPage: string | number
	ratings: string
	minPrice?: string
	maxPrice?: string
	categoryId?: number | string
}

export enum EnumProductSort {
	HIGH_PRICE = 'high-price',
	LOW_PRICE = 'low-price',
	NEWEST = 'newest',
	OLDEST = 'oldest'
}

export type TypeParamsFilters = { searchParams: TypeProductDataFilters }
