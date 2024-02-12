import { useActions } from '@/hooks/useActions'
import { useCart } from '@/hooks/useCart'
import { IProduct } from '@/types/product.interface'
import { FC } from 'react'

import { RiShoppingCartFill, RiShoppingCartLine } from 'react-icons/ri'

const AddToCartButton: FC<{
	product: IProduct
	className?: string
	iconSize?: number
}> = ({ product, className, iconSize = 20 }) => {
	const { addToCart, removeFromCart } = useActions()
	const { items } = useCart()
	const selectedElement = items.find(
		cartItem => cartItem.product.id === product.id
	)

	return (
		<div className={className}>
			<button
				onClick={() =>
					selectedElement
						? removeFromCart({ id: selectedElement.id })
						: addToCart({ product, quantity: 1, price: product.price })
				}
			>
				{selectedElement ? (
					<RiShoppingCartFill size={iconSize} />
				) : (
					<RiShoppingCartLine size={iconSize} />
				)}
			</button>
		</div>
	)
}

export default AddToCartButton
