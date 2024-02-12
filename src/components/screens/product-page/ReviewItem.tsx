import { IReview } from '@/types/review.interface'
import Image from 'next/image'
import React, { FC } from 'react'
import { Rating } from 'react-simple-star-rating'

const ReviewItem: FC<{ review: IReview }> = ({ review }) => {
	const options: Intl.DateTimeFormatOptions = {
		month: 'long',
		day: 'numeric',
		year: 'numeric'
	}

	const createdAtDate = new Date(review.createdAt)

	return (
		<div className='mb-4 shadow-md p-4 flex items-start flex-col '>
			<div className='flex items-center gap-2'>
				<Image
					className='rounded-full'
					src={review.user.avatarPath}
					height={40}
					width={40}
					alt='User Avatar'
				/>
				<p className='text-md'>{review.user.name}</p>
				<div className='text-gray ml-3 font-normal text-opacity-70'>
					{createdAtDate.toLocaleString('en-IN', options)}
				</div>
			</div>
			<div className='my-2'>
				<Rating
					readonly
					initialValue={review.rating}
					SVGstyle={{ display: 'inline-block' }}
					size={22}
					allowFraction
					transition
					fillColor={'#FF9900'}
				/>
			</div>
			<div className=''>{review.text}</div>
		</div>
	)
}

export default ReviewItem
