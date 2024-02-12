import { ICategory } from './category.interface'
import { IReview } from './review.interface'

export interface IProduct {
	images: string[]
	description: string
	id: number
	name: string
	price: number
	reviews: IReview[]
	category: ICategory
	createdAt: string
	slug: string
}

export interface IProductDetails {
	product: IProduct
}

export type TypeProducts = {
	products: IProduct[]
}

export type TypePaginationProducts = {
	length: number
	products: IProduct[]
}
