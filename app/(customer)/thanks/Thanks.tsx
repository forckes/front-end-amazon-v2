'use client'
import Heading from '@/ui/Heading'
import Button from '@/ui/button/Button'
import React, { FC } from 'react'
import { useRouter } from 'next/navigation'

const Thanks: FC = () => {
	const { push } = useRouter()

	return (
		<div className='flex justify-center mt-16 items-center flex-col'>
			<Heading className='mb-8'>Thanks for the order!</Heading>
			<Button variant='dark' onClick={() => push('/')}>
				Back to shopping
			</Button>
		</div>
	)
}

export default Thanks
