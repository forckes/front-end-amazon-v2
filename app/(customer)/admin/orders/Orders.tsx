'use client'

import React, { FC } from 'react'
import { useAdminOrders } from './useAdminOrders'
import Heading from '@/ui/Heading'
import AdminList from '@/ui/admin/admin-list/AdminList'

const Orders: FC = () => {
	const { isFetching, data } = useAdminOrders()
	return (
		<div className='p-8'>
			<Heading className='mb-7'>Orders</Heading>
			<AdminList isLoading={isFetching} listItems={data} />
		</div>
	)
}

export default Orders
