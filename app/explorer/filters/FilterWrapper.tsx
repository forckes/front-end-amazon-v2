import React, { FC, PropsWithChildren } from 'react'
import { FcClearFilters } from 'react-icons/fc'
import { useFilters } from '../useFilters'
import { TypeProductDataFilters } from '@/services/product/product.types'

interface IFilterWrapper {
	title: string
	value: keyof TypeProductDataFilters
}

const FilterWrapper: FC<PropsWithChildren<IFilterWrapper>> = ({
	title,
	children,
	value
}) => {
	const { updateQueryParams } = useFilters()
	const reset = () => {
		updateQueryParams(`${value}`, '')
	}
	return (
		<div className=' px-6 py-2	'>
			<div className='flex items-center'>
				<div className='mb-3 text-2xl font-semibold'>{title}</div>
				<button className='-mt-2 ml-2' onClick={() => reset()}>
					<FcClearFilters size={24} />
				</button>
			</div>

			<div className='flex flex-col items-start'>{children}</div>
		</div>
	)
}

export default FilterWrapper
