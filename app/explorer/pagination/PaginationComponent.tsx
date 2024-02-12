import { Pagination } from '@mui/material'
import React, { FC } from 'react'

interface IPagination {
	numbersPages: number
	handlePageChange: (page: any) => void
	currentPage?: number | string
}

const PaginationComponent: FC<IPagination> = ({
	numbersPages,
	currentPage,
	handlePageChange
}) => {
	const parsedPage =
		typeof currentPage === 'string' ? parseInt(currentPage) : currentPage

	return (
		<div>
			<Pagination
				onChange={(event, page) => handlePageChange(page)}
				count={numbersPages}
				shape='rounded'
				size='large'
				className='flex justify-center mr-12 mt-10'
				page={parsedPage !== undefined ? parsedPage : 1}
			/>
		</div>
	)
}

export default PaginationComponent
