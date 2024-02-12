'use client'

import { OrderService } from '@/services/order.service'
import Heading from '@/ui/Heading'
import { useQuery } from '@tanstack/react-query'

export default function MyOrders() {
	const { data: orders } = useQuery(
		['my orders'],
		() => OrderService.getByUserId(),
		{ select: ({ data }) => data }
	)
	return (
		<section>
			<Heading>My orders</Heading>
			{orders?.length ? (
				orders.map(order => (
					<div key={order.id}>
						<span>#{order.id}</span>
						<span>{order.status}</span>
						<span>{order.createdAt}</span>
						<span>{order.total}</span>
					</div>
				))
			) : (
				<div>There are no orders</div>
			)}
		</section>
	)
}
