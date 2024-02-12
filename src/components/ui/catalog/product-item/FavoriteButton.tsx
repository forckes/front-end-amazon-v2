'use client'
import { useProfile } from '@/hooks/useProfile'
import { UserService } from '@/services/user.service'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { FC } from 'react'

import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'

const FavoriteButton: FC<{
	productId: number
	className?: string
	iconSize?: number
}> = ({ productId, iconSize = 20, className }) => {
	const { profile } = useProfile()

	const queryClient = useQueryClient()

	const { mutate } = useMutation(
		['toggle favorites'],
		() => UserService.toggleFavorite(productId),
		{
			onSuccess: () => {
				queryClient.invalidateQueries(['get profile'])
			}
		}
	)

	if (!profile) return null

	const isExists = profile.favorites.some(
		favorites => favorites.id === productId
	)

	return (
		<div className={className}>
			<button onClick={() => mutate()}>
				{isExists ? (
					<AiFillHeart className='text-primary' size={iconSize} />
				) : (
					<AiOutlineHeart className='text-primary' size={iconSize} />
				)}
			</button>
		</div>
	)
}

export default FavoriteButton
