'use client'

import { IProduct } from '@/types/product.interface'
import Button from '@/ui/button/Button'
import FavoriteButton from '@/ui/catalog/product-item/FavoriteButton'
import Image from 'next/image'
import React, { FC, useState } from 'react'
import { Rating } from 'react-simple-star-rating'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { RiArrowRightUpLine } from 'react-icons/ri'
import { HiLockClosed } from 'react-icons/hi'
import { useActions } from '@/hooks/useActions'
import { useCart } from '@/hooks/useCart'
import { Modal } from '@mui/material'
import LeaveReview from './LeaveReview'
import ReviewItem from './ReviewItem'

const ItemPage: FC<{ product: IProduct }> = ({ product }) => {
	const [showModal, setShowModal] = useState(false)

	const [activeImage, setActiveImage] = useState(0)
	const images = product.images

	//cart
	const { items } = useCart()
	const { addToCart, removeFromCart } = useActions()
	const selectedElement = items.find(
		cartItem => cartItem.product.id === product.id
	)

	const [rating, setRating] = useState<number>(
		Math.round(
			product.reviews?.reduce((acc, review) => acc + review.rating, 0) /
				product.reviews?.length
		) || 0
	)

	//date
	const date = new Date()

	const options: {} = {
		weekday: 'long',
		month: 'long',
		day: 'numeric'
	}

	return (
		<div className='bg-white px-4 py-10'>
			<div className='mb-6'>
				<h1 className='text-4xl font-semibold text-black'>{product.name}</h1>
				<div className='flex mt-2  gap-8'>
					<div className='flex flex-col items-start justify-center -mt-1'>
						<span className='mr-1 flex items-center'>
							<Rating
								readonly
								initialValue={rating}
								SVGstyle={{ display: 'inline-block' }}
								size={18}
								allowFraction
								transition
								fillColor={'#FF9900'}
							/>
						</span>

						<span
							style={{ fontSize: '15px', cursor: 'pointer' }}
							className=' text-grey gap-1 font-medium flex items-center ml-1'
						>
							{product.reviews?.length}
							<span
								style={{ fontSize: '14px' }}
								className='  items-center flex'
							>
								<span>Reviews</span>
								<MdKeyboardArrowRight className='mt-px' size={20} />
							</span>
						</span>
					</div>
					<div className='flex relative flex-col items-start before:-ml-5 before:absolute before:w-px before:h-1/2 before:bg-grey before:opacity-40 before:top-3 before:left-0 after:-mr-3 after:absolute after:w-px after:h-1/2 after:bg-grey after:opacity-40 after:top-3 after:right-0'>
						<span className='text-primary font-semibold'>1000+</span>
						<span
							style={{ fontSize: '15px' }}
							className='text-grey flex items-center'
						>
							Answered questions
							<MdKeyboardArrowRight className='mt-px' size={20} />
						</span>
					</div>
					<button
						type='button'
						className='bg-input px-2 hover:opacity-95 active:opacity-90 transition-opacity text-white '
					>
						<div className='flex items-center '>
							<span>Visit the Official Store</span>
							<RiArrowRightUpLine size={20} />
						</div>
					</button>
				</div>
			</div>
			<div className='flex'>
				<div className='flex-[0_0_500px]'>
					<div>
						<Image
							src={images[activeImage]}
							width={500}
							height={500}
							alt={product.name}
							style={{
								objectFit: 'contain',
								zIndex: '1',
								height: '500px',
								width: '500px'
							}}
						/>
					</div>
					<div style={{ maxWidth: '500px' }} className='overflow-x-scroll'>
						<div className='flex flex-nowrap'>
							{images.map((image, idx) => (
								<button
									key={idx}
									onClick={() => setActiveImage(idx)}
									type='button'
								>
									<Image
										key={idx}
										src={image}
										width={100}
										height={100}
										alt={product.name}
										style={{
											objectFit: 'cover',
											height: '110px',
											minWidth: '110px'
										}}
										className={
											activeImage === idx
												? 'border-primary border-2'
												: 'border-white border-2'
										}
									/>
								</button>
							))}
						</div>
					</div>
				</div>
				<div className='flex flex-col'>
					<div className='flex'>
						<div
							className='px-6 leading-8	 text-xl tracking-wider
 flex-[1_0_27.5%]'
						>
							{product.description}
						</div>
						<div
							style={{
								maxHeight: '420px',
								boxShadow: '0px 0px 28px 0px rgba(0,0,0,0.09)'
							}}
							className='p-6 rounded-md flex-[1_0_27.5%]'
						>
							<div className='flex flex-col'>
								<span>
									<b className='text-4xl'>{product.price}.</b>
									<span className='font-semibold text-2xl'>00 </span>
									<span className='font-semibold text-3xl'>₴</span>
								</span>
								<span style={{ fontSize: '15px' }} className='text-grey mt-2 '>
									Sales taxes may apply at checkout
								</span>
								<div className='flex gap-4 mt-4 mb-4'>
									<span style={{ fontSize: '16px' }} className='text-grey'>
										Delivery
									</span>
									<span className='text-black text-md font-semibold'>
										{date.toLocaleString('en-IN', options)}
									</span>
								</div>
							</div>
							<div className=' flex flex-col'>
								<button
									onClick={() =>
										selectedElement
											? removeFromCart({ id: selectedElement.id })
											: addToCart({
													product,
													quantity: 1,
													price: product.price
											  })
									}
									type='button'
									className={
										selectedElement
											? 'rounded-md text-xl bg-primary text-white border-primary px-12 py-3 transition-colors ease-in-out duration-200 border-2 font-semibold'
											: 'rounded-md text-primary text-xl hover:bg-primary hover:text-white bg-white border-primary px-12 py-3 transition-colors ease-in-out duration-200 border-2 font-semibold'
									}
								>
									{selectedElement ? 'Already in cart' : 'Add to cart'}
								</button>
								<div className='flex mt-3 w-full'>
									<Button
										variant='dark'
										className='text-white flex-[0_1_80%]'
										type='button'
									>
										Buy now
									</Button>
									<div className='flex flex-[0_1_20%] items-center justify-center'>
										<FavoriteButton productId={product.id} iconSize={32} />
									</div>
								</div>
								<div className='flex mt-4 justify-between'>
									<span className='flex text-grey gap-2 font-semibold'>
										<HiLockClosed size={22} />
										<span> Secure transaction</span>
									</span>
									<span className='cursor-pointer hover:underline font-semibold text-aqua'>
										Return policy
									</span>
								</div>
								<div className='flex mt-8 relative before:-mt-4 before:absolute before:h-px before:w-full before:bg-grey before:opacity-40 before:top-0 before:right-0 gap-16'>
									<div className='flex flex-col'>
										<span
											style={{ fontSize: '16px' }}
											className='text-grey mb-2'
										>
											Ships from
										</span>
										<span style={{ fontSize: '16px' }} className='text-grey'>
											Sold by
										</span>
									</div>
									<div className='flex flex-col'>
										<span className='font-semibold mb-2'>Amazon</span>

										<span className='text-aqua font-semibold'>
											Official company
										</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='relative before:w-full before:absolute before:h-px before:bg-grey before:opacity-50 before:top-10 before:left-0 flex justify-between p-4'>
				<div className='flex-[0_0_400px] pt-12 flex flex-col text-secondary'>
					<h1 className='font-semibold text-4xl'>Customer reviews</h1>
					<div className='flex mt-2'>
						<div className='font-semibold text-8xl'>{rating}</div>
						<div className='flex justify-center ml-6 flex-col'>
							<span className='font-semibold text-lg'>{rating} out of 5</span>
							<Rating
								readonly
								initialValue={rating}
								SVGstyle={{ display: 'inline-block' }}
								size={22}
								allowFraction
								transition
								fillColor={'#FF9900'}
								className='-ml-1 -mt-2'
							/>
							<span className='text-md text-gray'>
								Based on{' '}
								<b className='text-secondary'> {product.reviews.length}</b>{' '}
								global ratings
							</span>
						</div>
					</div>
					<button
						className='text-white shadow rounded-md bg-primary hover:opacity-90 transition-opacity ease-in-out mt-4 duration-200 text-lg p-2 max-w-xs'
						onClick={() => setShowModal(!showModal)}
					>
						Write a customer review
					</button>
				</div>
				<div className='grid mt-12'>
					{product.reviews.map(review => (
						<ReviewItem key={review.id} review={review} />
					))}
				</div>
			</div>

			<Modal
				className='flex justify-center'
				open={showModal}
				onClose={() => setShowModal(!showModal)}
			>
				<LeaveReview setShowModal={setShowModal} product={product} />
			</Modal>
		</div>
	)
}

export default ItemPage
