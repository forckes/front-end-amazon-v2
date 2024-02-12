import { useActions } from '@/hooks/useActions'
import React, { FC } from 'react'
import { HiOutlineArrowSmLeft, HiOutlineArrowSmRight } from 'react-icons/hi'

const CarouselNavigation: FC = () => {
	const { nextSlide, prevSlide } = useActions()
	return (
		<div className='flex text-white gap-2'>
			<button
				className='rounded-lg hover:bg-white hover:text-primary transition-colors duration-100 border-2 border-solid border-white'
				onClick={() => prevSlide()}
				type='button'
			>
				<HiOutlineArrowSmLeft size={30} />
			</button>
			<button
				className='rounded-lg hover:bg-white hover:text-primary transition-colors duration-100 border-2 border-solid border-white'
				onClick={() => nextSlide({ carouselLength: 2 })}
				type='button'
			>
				<HiOutlineArrowSmRight size={30} />
			</button>
		</div>
	)
}

export default CarouselNavigation
