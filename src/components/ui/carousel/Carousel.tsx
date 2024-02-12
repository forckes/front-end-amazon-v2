'use client'
import Image from 'next/image'
import React, { FC } from 'react'
import Button from '../button/Button'
import Link from 'next/link'
import { ICarouselItem } from './carousel.interface'
import cn from 'clsx'
import CarouselNavigation from './CarouselNavigation'
import { useTypedSelector } from '@/hooks/useTypedSelector'
import { TransitionGroup } from 'react-transition-group'
import DeliverySvg from '/public/images/undraw_deliveries_2r4y.svg'
import styles from './Carousel.module.scss'
import CSSTransition from '../CssTransition'

interface ICarousel {
	items: ICarouselItem[]
	className?: string
}

const Carousel: FC<ICarousel> = ({ items, className = '' }) => {
	const { selectedItemIndex } = useTypedSelector(state => state.carousel)
	const selectedItem = items[selectedItemIndex]
	return (
		<section
			className={cn(
				'h-56 justify-between flex rounded-3xl overflow-hidden m-6 p-10',
				className
			)}
			style={{
				background:
					'linear-gradient(180deg, rgba(255,163,23,1) 35%, rgba(243,141,4,1) 70%)'
			}}
		>
			<TransitionGroup>
				<CSSTransition
					key={selectedItem.title}
					timeout={500}
					classNames={{
						enter: styles['item-enter'],
						enterActive: styles['item-enter-active'],
						exit: styles['item-exit'],
						exitActive: styles['item-exit-active']
					}}
					unmountOnExit
					mountOnEnter
				>
					<div className='flex'>
						<div className='flex flex-[1_0_40%] flex-col items-start'>
							<h1
								style={{ fontSize: '42px' }}
								className='text-white flex font-semibold mb-6'
							>
								{selectedItem.title}
							</h1>
							<p
								style={{ maxWidth: '390px' }}
								className='text-white flex font-normal mb-6'
							>
								{selectedItem.description}
							</p>
							{selectedItem.link ? (
								<Link href={selectedItem.link}>
									<Button variant='light' type='button'>
										Read more
									</Button>
								</Link>
							) : (
								<Link href='/explorer'>
									<Button variant='light' type='button'>
										Browse products
									</Button>
								</Link>
							)}
						</div>
						<div className=' flex-[1_0_60%] ml-10 items-center flex justify-start w-72 h-72'>
							{selectedItem.image ? (
								<Image
									src={selectedItem?.image}
									className=''
									width={500}
									height={500}
									alt='Delivery 11'
								/>
							) : (
								<Image
									src={DeliverySvg}
									className=''
									width={500}
									height={500}
									alt='Delivery Svg'
								/>
							)}
						</div>
					</div>
				</CSSTransition>
			</TransitionGroup>

			<div className='flex items-start'>
				<CarouselNavigation />
			</div>
		</section>
	)
}

export default Carousel
