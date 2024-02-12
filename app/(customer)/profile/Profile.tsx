'use client'
import { useAuth } from '@/hooks/useAuth'
import { UserService } from '@/services/user.service'
import Heading from '@/ui/Heading'
import ProductItem from '@/ui/catalog/product-item/ProductItem'
import { useQuery } from '@tanstack/react-query'
import Image from 'next/image'
import React, { FC } from 'react'

const Profile: FC = () => {
	const { data: profile } = useQuery(
		['profile'],
		() => UserService.getProfile(),
		{ select: ({ data }) => data }
	)
	const { user } = useAuth()

	return (
		<div className='flex flex-col items-center p-8'>
			<div className=''>
				<Image
					src={profile ? profile?.avatarPath : '/public/default-avatar.png'}
					width={200}
					height={200}
					alt='Avatar'
					className=' border-2 border-solid rounded-full border-primary p-4  shadow-md'
				/>
			</div>
			<div className='flex flex-col mt-6 ml-6 items-end justify-start text-2xl'>
				<div className='flex gap-3'>
					Hi, <b>{profile?.name}!</b>{' '}
					{user?.isAdmin && (
						<div>
							You are <b>Admin</b>
						</div>
					)}
				</div>

				<div className='mt-6'>
					<span style={{ fontSize: '20px' }} className=' text-input '>
						Email:
					</span>{' '}
					{profile?.email}
				</div>
				<div>
					<span style={{ fontSize: '20px' }} className='text-input '>
						Phone:
					</span>{' '}
					{profile?.phone}
				</div>
			</div>
			<div>
				<Heading className='mb-6 flex justify-center mt-6'>Favorites</Heading>
				<div
					style={{ maxWidth: 'calc(100vh)' }}
					className='flex overflow-x-scroll gap-4'
				>
					{profile?.favorites.map(item => (
						<ProductItem key={item.id} product={item} />
					))}
				</div>
			</div>
		</div>
	)
}

export default Profile
