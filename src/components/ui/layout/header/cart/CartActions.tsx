import { useActions } from '@/hooks/useActions'
import { useCart } from '@/hooks/useCart'
import { ICartItem } from '@/types/cart.interface'
import React, { FC } from 'react'
import { FiMinus, FiPlus } from 'react-icons/fi'
import { RxCrossCircled } from 'react-icons/rx'

const CartActions: FC<{ item: ICartItem }> = ({ item }) => {
	const { removeFromCart, changeQuantity } = useActions()
	const { items } = useCart()
	const quantity = items.find(cartItem => cartItem.id === item.id)?.quantity
	return (
		<div className='mt-4 flex justify-start gap-4 w-full'>
			<div className='flex items-center gap-3'>
				<button
					className=' disabled:opacity-60 disabled:bg-gray flex bg-primary rounded-md p-1'
					onClick={() => changeQuantity({ id: item.id, type: 'minus' })}
					type='button'
					disabled={quantity === 1}
				>
					<FiMinus size={18} />
				</button>
				<span className='flex justify-center items-center text-xl'>
					{quantity}
				</span>
				<button
					className='disabled:opacity-80 disabled:bg-black flex bg-primary rounded-md p-1'
					onClick={() => changeQuantity({ id: item.id, type: 'plus' })}
					type='button'
					disabled={quantity === 10}
				>
					<FiPlus size={18} />
				</button>
			</div>
			<div className='flex items-center'>
				<button
					className='text-red transition-colors duration-200 hover:bg-input rounded-md p-1.5'
					type='button'
					onClick={() => removeFromCart({ id: item.id })}
				>
					<RxCrossCircled size={28} />
				</button>
			</div>
		</div>
	)
}

export default CartActions
