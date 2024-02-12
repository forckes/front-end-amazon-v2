import { useCart } from '@/hooks/useCart'
import { IProduct } from '@/types/product.interface'
import Image from 'next/image'
import React, { FC } from 'react'

interface CheckoutItemProps {
	product: IProduct
}

const CheckoutItem: FC<CheckoutItemProps> = ({ product }) => {
	const { items } = useCart()

	// Calculate the quantity for the current product
	const quantity =
		items.find(item => item.product.id === product.id)?.quantity || 0

	return (
		<div className='flex rounded-md justify-between items-center mt-2 p-4 shadow mb-6'>
			<div style={{ maxWidth: '750px' }} className='flex gap-4'>
				<Image
					width={100}
					height={100}
					src={product.images[0]}
					alt={product.name}
				/>
				<div className='flex items-start justify-center flex-col'>
					<h3 className='font-semibold text-xl'>{product.name}</h3>
					<div className='text-grey text-lg'>{product.category.name}</div>
				</div>
			</div>
			<div className='flex items-center'>
				<div className='text-3xl mr-4 font-semibold'>{product.price} ₴</div>
				<div className='text-xl font-normal'>x {quantity}</div>
			</div>
		</div>
	)
}

export default CheckoutItem
