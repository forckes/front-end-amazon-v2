'use client'

import React, { FC } from 'react'
import Heading from '@/ui/Heading'
import AdminList from '@/ui/admin/admin-list/AdminList'
import { useAdminReviews } from './useAdminReviews'

const Reviews: FC = () => {
	const { isFetching, data } = useAdminReviews()
	return (
		<div className='p-8'>
			<Heading className='mb-7'>Reviews</Heading>
			<AdminList isLoading={isFetching} listItems={data} />
		</div>
	)
}

export default Reviews
