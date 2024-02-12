import { IProduct } from '@/types/product.interface'
import Image from 'next/image'
import React, { FC } from 'react'
import AddToCartButton from './AddToCartButton'
import ProductRating from './ProductRating'
import Link from 'next/link'
import FavoriteButton from './FavoriteButton'

const ProductItem: FC<{ product: IProduct }> = ({ product }) => {
	return (
		<div className='mb-6 animate-opacity'>
			<div className='bg-white flex flex-col w-64 h-64 rounded-2xl overflow-hidden items-center justify-center relative'>
				<FavoriteButton
					className='bg-white w-5 h-5 flex justify-center items-center rounded-lg top-0 right-12 p-5 m-2 absolute z-10'
					iconSize={24}
					productId={product.id}
				/>
				<AddToCartButton
					className='bg-white w-5 h-5 flex justify-center items-center rounded-lg top-0 right-0 p-5 m-2 absolute z-10'
					iconSize={24}
					product={product}
				/>

				<Link href={`/product/${product.slug}`}>
					<Image
						width={256}
						height={256}
						src={product.images[0]}
						alt={product.name}
						style={{
							objectFit: 'cover',
							zIndex: '1'
						}}
					/>
				</Link>
			</div>

			<Link href={`/product/${product.slug}`}>
				<h3 className='mt-2 text-lg font-semibold'>{product.name}</h3>
			</Link>
			<Link
				href={`/category/${product.category?.slug}`}
				className='text-cyan -mt-1 text-base font-semibold'
			>
				{product.category?.name}
			</Link>

			<ProductRating ratingSize={20} product={product} />
			<div className='text-2xl font-extrabold mt-1'>
				{product.price}
				<span className='ml-1'>₴</span>
			</div>
		</div>
	)
}

export default ProductItem
