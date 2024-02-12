'use client'
import { StatisticsService } from '@/services/statistic.service'
import Heading from '@/ui/Heading'
import { useQuery } from '@tanstack/react-query'
import React, { FC } from 'react'
import { Oval } from 'react-loader-spinner'

const Dashboard: FC = () => {
	const { data, isFetching } = useQuery(
		['statistics'],
		() => StatisticsService.getMain(),
		{ select: ({ data }) => data }
	)
	return (
		<div className='p-10'>
			<Heading>Dashboard</Heading>
			{isFetching ? (
				<Oval
					height={200}
					width={200}
					color='#FF9900'
					wrapperStyle={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						marginTop: '300px'
					}}
					wrapperClass=''
					visible={true}
					ariaLabel='oval-loading'
					secondaryColor='#ff99009f'
					strokeWidth={3}
					strokeWidthSecondary={3}
				/>
			) : data?.length ? (
				<div
					style={{
						display: 'grid',
						gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 300px))',
						placeContent: 'center',
						gap: '47px',
						marginTop: '20px'
					}}
				>
					{data.map(item => (
						<div
							className='flex flex-col items-start px-8 py-4 text-xl rounded-md shadow-md'
							key={item.name}
						>
							<div>{item.name}</div>
							<div className='mt-1 text-2xl font-semibold'>{item.value}</div>
						</div>
					))}
				</div>
			) : (
				<div>Statistics haven`t loaded :(</div>
			)}
		</div>
	)
}

export default Dashboard
