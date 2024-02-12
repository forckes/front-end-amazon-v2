import React from 'react'
import Button from '../button/Button'
import DeliverySvg from '/public/images/undraw_deliveries_2r4y.svg'
import DeliverySvg2 from '/public/images/undraw_order_delivered_re_v4ab.svg'

import Image from 'next/image'
import Link from 'next/link'

const Banner = () => {
	return (
		<div
			className=' h-56 flex rounded-3xl overflow-hidden m-6 p-10'
			style={{
				background:
					'linear-gradient(180deg, rgba(255,163,23,1) 35%, rgba(243,141,4,1) 70%)'
			}}
		>
			<div className='flex flex-[1_0_30%] flex-col items-start'>
				<h1
					style={{ fontSize: '42px' }}
					className='text-white font-semibold mb-6'
				>
					Free Delivery!
				</h1>
				<p className='text-white font-normal mb-6'>
					Don`t miss it out! Only today, get free Next Day <br /> delivery on
					all your orders
				</p>
				<Link href='catalog'>
					<Button variant='light' type='button'>
						Browse products
					</Button>
				</Link>
			</div>
			<div className=' flex-[1_0_70%] items-center flex justify-start w-72 h-72'>
				<Image
					src={DeliverySvg2}
					className=''
					width={450}
					height={450}
					alt='Delivery Svg'
				/>
				<Image
					src={DeliverySvg}
					className=''
					width={500}
					height={500}
					alt='Delivery Svg'
				/>
			</div>
		</div>
	)
}

export default Banner
