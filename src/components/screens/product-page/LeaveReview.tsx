'use client'

import { useProfile } from '@/hooks/useProfile'
import { ReviewService } from '@/services/review.service'
import { IProduct } from '@/types/product.interface'
import Button from '@/ui/button/Button'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { FC, useState } from 'react'
import { Rating } from 'react-simple-star-rating'

const LeaveReview: FC<{
	product: IProduct
	setShowModal: React.Dispatch<React.SetStateAction<boolean>>
}> = ({ product, setShowModal }) => {
	const [userRating, setUserRating] = useState(0)
	const [text, setText] = useState('')
	const [isSuccess, setStatus] = useState(true)
	const [submitClicked, setSubmitClicked] = useState(false)

	const handleRating = (rate: number) => {
		setUserRating(rate)
	}

	const onTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
		setText(event.target.value)
	}

	const handleSubmit = async () => {
		const data = {
			rating: userRating,
			text: text
		}
		try {
			await ReviewService.leave(product.id, data)
			setStatus(true)
		} catch (error) {
			console.error('Error leaving review:', error)
			setStatus(false)
		} finally {
			setSubmitClicked(true)
		}
	}

	const router = useRouter()
	const { profile } = useProfile()
	if (!profile) router.push('/auth')
	return (
		<div className='flex justify-center items-center'>
			{submitClicked ? (
				<div className='flex flex-col p-8 justify-center items-center bg-white rounded-xl'>
					{isSuccess && (
						<div className='text-4xl py-10'>Thanks for your review!</div>
					)}
					{!isSuccess && (
						<div className='text-4xl py-10'>Sorry, something went wrong :(</div>
					)}
					<Button
						variant='dark'
						type='button'
						onClick={() => setShowModal(false)}
						className='text-secondary shadow rounded-md bg-primary hover:opacity-90 transition-opacity ease-in-out duration-200 text-xl px-12 py-3 '
					>
						Back to the shopping
					</Button>
				</div>
			) : (
				<div className='flex flex-col p-8 justify-center items-center bg-white rounded-xl'>
					<div className='flex flex-col'>
						<h1 className='text-2xl font-semibold'>
							What do u think about this good?
						</h1>
						<div className='flex items-center justify-center'>
							<Image
								src={product.images[0]}
								width={150}
								height={150}
								alt={product.name}
							/>
							<div className='flex ml-1 flex-col'>
								<h2 className='text-xl font-semibold'>{product.name}</h2>
								<h3 className='text-lg font-semibold text-cyan'>
									{product.category.name}
								</h3>
							</div>
						</div>
					</div>
					<div className='flex flex-col'>
						<div className='flex items-center justify-center mt-1 mb-4 gap-2'>
							<Rating
								onClick={handleRating}
								initialValue={0}
								SVGstyle={{ display: 'inline-block' }}
								size={32}
								transition
								fillColor={'#FF9900'}
							/>
							<span className='font-semibold text-2xl'>{userRating}</span>
						</div>
						<textarea
							placeholder='Write your review here..'
							style={{ width: '400px', height: '300px' }}
							className='border-2 mb-4 p-3 text-secondary focus-visible:border-primary rounded-md placeholder:text-gray border-solid border-grey text-lg bg-bg-color'
							id='leave'
							onChange={e => onTextChange(e)}
						/>
					</div>
					<Button
						disabled={userRating === 0}
						variant='dark'
						onClick={() => handleSubmit()}
					>
						Submit Review
					</Button>
				</div>
			)}
		</div>
	)
}

export default LeaveReview
