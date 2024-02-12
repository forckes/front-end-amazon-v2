'use client'

import React, { FC, useState } from 'react'
import CartButton from './CartButton'
import { ClickAwayListener } from '@mui/base'
import { useCart } from '@/hooks/useCart'
import CartItem from './CartItem'
import Button from '@/ui/button/Button'
import { useActions } from '@/hooks/useActions'
import { BsFillTrash3Fill } from 'react-icons/bs'
import { useRouter } from 'next/navigation'

const HeaderCart: FC = () => {
	const [isShow, setIsShow] = useState(false)
	const { items, total } = useCart()
	const { reset } = useActions()
	const { push } = useRouter()

	return (
		<ClickAwayListener onClickAway={() => setIsShow(false)}>
			<div>
				<CartButton number={items.length} onClick={() => setIsShow(!isShow)} />

				{isShow && (
					<div
						style={{ width: '400px' }}
						className='absolute animate-rightAppears top-50 px-6 right-2 bg-secondary flex flex-col py-4 rounded-xl text-white mt-5'
					>
						<div className='flex  items-start justify-between px-4'>
							<p className='text-2xl mb-6'>My cart</p>
							<button
								className='hover:text-primary transition-colors duration-200'
								type='button'
								onClick={() => reset()}
							>
								<BsFillTrash3Fill size={26} />
							</button>
						</div>
						<div className='w-full'>
							{items.length ? (
								items.map(item => <CartItem key={item.id} item={item} />)
							) : (
								<div className='text-2xl flex justify-center '>
									Cart is empty!
								</div>
							)}
						</div>
						<div className='flex my-4 gap-2 justify-center'>
							<p className='text-lg'> Total:</p>
							<div className='text-xl font-semibold flex'>{total} ₴</div>
						</div>
						<div className='flex justify-center'>
							<Button
								disabled={total === 0}
								className='  disabled:opacity-50 disabled:cursor-not-allowed'
								variant='dark'
								onClick={() => push('/checkout')}
							>
								Place order
							</Button>
						</div>
					</div>
				)}
			</div>
		</ClickAwayListener>
	)
}

export default HeaderCart
