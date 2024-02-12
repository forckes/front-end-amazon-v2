'use client'

import React, { FC } from 'react'
import { useAdminCategories } from './useAdminCategories'
import Heading from '@/ui/Heading'
import AdminList from '@/ui/admin/admin-list/AdminList'

const Categories: FC = () => {
	const { mutate, isFetching, data } = useAdminCategories()
	return (
		<div className='p-8'>
			<Heading className='mb-7'>Categories</Heading>
			<AdminList
				isLoading={isFetching}
				listItems={data}
				removeHandler={mutate}
			/>
		</div>
	)
}

export default Categories
