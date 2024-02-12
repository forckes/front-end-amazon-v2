'use client'
import { IProduct } from '@/types/product.interface'
import React, { FC, useState } from 'react'
import { Rating } from 'react-simple-star-rating'

const ProductRating: FC<{ product: IProduct; ratingSize?: number; isText?: boolean }> = ({
	product,
	ratingSize = 20,
	isText = false
}) => {
	const [rating, setRating] = useState<number>(
		Math.round(
			product.reviews?.reduce((acc, review) => acc + review.rating, 0) /
				product.reviews?.length
		) || 0
	)

	return (
		<div className='flex items-center -mt-1'>
			<span className='mr-1 -ml-1 flex items-center'>
				<Rating
					readonly
					initialValue={rating}
					SVGstyle={{ display: 'inline-block' }}
					size={ratingSize}
					allowFraction
					transition
				/>
			</span>
			<span
				className=' mt-1.5 text-lg font-medium'
				style={{ color: '#FFBC09' }}
			>
				{rating}
			</span>
			<span className='mt-1 ml-1 text-md'>
				({product.reviews?.length} reviews)
			</span>
		</div>
	)
}

export default ProductRating
