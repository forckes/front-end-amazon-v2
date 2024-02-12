'use client'
import { IProduct } from '@/types/product.interface'
import React, { FC } from 'react'
import ProductItem from './product-item/ProductItem'
import { Oval } from 'react-loader-spinner'
import Heading from '../Heading'

interface ICatalog {
	products: IProduct[]
	isLoading?: boolean
	title?: string
}

const Catalog: FC<ICatalog> = ({ products, isLoading, title }) => {
	if (isLoading)
		return (
			<Oval
				height={80}
				width={80}
				color='#FFB503'
				wrapperStyle={{ marginTop: '10px' }}
				wrapperClass=''
				visible={true}
				ariaLabel='oval-loading'
				secondaryColor='#ffb303f1'
				strokeWidth={3}
				strokeWidthSecondary={2}
			/>
		)

	return (
		<section className='ml-6 mt-6'>
			<div className='flex justify-between mb-8 items-center'>
				{title && <Heading className=''>{title}</Heading>}
			</div>
			<div className='grid gap-x-1 grid-cols-[repeat(auto-fit,_minmax(200px,_275px))]'>
				{products.length ? (
					products.map(product => (
						<ProductItem key={product.id} product={product} />
					))
				) : (
					<div>There are no products</div>
				)}
			</div>
		</section>
	)
}

export default Catalog
