import { ICartItem } from '@/types/cart.interface'
import Image from 'next/image'
import React, { FC } from 'react'
import CartActions from './CartActions'

const CartItem: FC<{ item: ICartItem }> = ({ item }) => {
	return (
		<div className='flex mb-3'>
			<Image
				src={item.product.images[0]}
				width={120}
				height={120}
				alt={item.product.name}
				className='mr-4'
			/>
			<div className='flex flex-col h-full w-full'>
				<div>
					<p className='text-xl '>{item.product.name}</p>
					<div className='mt-1 text-xl font-semibold'>
						{item.product.price} ₴
					</div>
				</div>
				<div className=''>
					<CartActions item={item} />
				</div>
			</div>
		</div>
	)
}

export default CartItem
