import React, { FC, MouseEventHandler, PropsWithChildren } from 'react'
import { RiShoppingCartLine } from 'react-icons/ri'

const CartButton: FC<{
	number: number
	onClick?: MouseEventHandler<HTMLButtonElement>
}> = ({ number, onClick }) => {
	return (
		<button
			onClick={onClick}
			className='hover:bg-primary transition-colors p-6 flex justify-center items-center hover:text-secondary relative text-white rounded-lg'
		>
			{!!number && (
				<span className='flex h-4 w-4 items-center justify-center rounded-full bg-white p-0.5 text-[0.75rem] text-secondary absolute -top-1 -right-1'>
					{number}
				</span>
			)}
			<RiShoppingCartLine className=' transition-color absolute' size={26} />
		</button>
	)
}

export default CartButton
