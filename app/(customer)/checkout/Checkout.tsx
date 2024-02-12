'use client'
import { IProduct } from '@/types/product.interface'
import Heading from '@/ui/Heading'
import React, { FC } from 'react'
import CheckoutItem from './CheckoutItem'
import { useCart } from '@/hooks/useCart'
import { useActions } from '@/hooks/useActions'
import { useRouter } from 'next/navigation'
import { OrderService } from '@/services/order.service'
import { useMutation } from '@tanstack/react-query'
import Button from '@/ui/button/Button'
import ProductItem from '@/ui/catalog/product-item/ProductItem'

const Checkout: FC<{ products: IProduct[] }> = ({ products = [] }) => {
	const { items, total } = useCart()

	const { reset } = useActions()

	const { push } = useRouter()

	const { mutate } = useMutation(
		['create order and payment'],
		() =>
			OrderService.placeOrder({
				items: items.map(item => ({
					price: item.price,
					quantity: item.quantity,
					productId: item.product.id
				}))
			}),
		{
			onSuccess({ data }) {
				reset()
				// push(data.confirmation.confirmation_url) //url for payment
				push('/confirmation')
			}
		}
	)

	return (
		<>
			{items.length ? (
				<section
					style={{ gridTemplateColumns: '5fr 1fr' }}
					className='grid p-8'
				>
					<div className='flex flex-col'>
						<Heading>Checkout</Heading>
						<div className='mr-4'>
							{items.map(item => (
								<CheckoutItem key={item.id} product={item.product} />
							))}
						</div>
						<div className='flex mt-6 gap-4 justify-end mr-4'>
							<div className='flex items-start flex-col'>
								<div className='text-grey'>Total Cost</div>
								<div className='text-4xl font-semibold'>{total} ₴</div>
							</div>
							<Button onClick={() => mutate()} variant='bordered'>
								Place order
							</Button>
						</div>
					</div>
					<div>
						<div className='text-4xl text-center mb-4 font-semibold'>
							Recommended products
						</div>
						<div
							style={{ maxHeight: 'calc(100vh - 200px)' }}
							className='overflow-y-scroll'
						>
							{products
								.filter(
									product =>
										!items.map(item => item.product.id).includes(product.id)
								)
								.slice(0, 2)
								.map(product => (
									<ProductItem product={product} key={product.id} />
								))}
						</div>
					</div>
				</section>
			) : (
				<div>Fill your cart first!</div>
			)}
		</>
	)
}

export default Checkout
