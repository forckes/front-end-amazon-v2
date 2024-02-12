'use client'

import React, { FC } from 'react'
import { useAdminProducts } from './useAdminProduct'
import Heading from '@/ui/Heading'
import AdminList from '@/ui/admin/admin-list/AdminList'

const Products: FC = () => {
	const { mutate, isFetching, data } = useAdminProducts()
	return (
		<div className='p-8'>
			<Heading className='mb-7'>Products</Heading>
			<AdminList
				isLoading={isFetching}
				listItems={data}
				removeHandler={mutate}
			/>
		</div>
	)
}

export default Products
