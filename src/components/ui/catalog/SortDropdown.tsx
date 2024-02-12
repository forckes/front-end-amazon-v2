'use client'

import { EnumProductSort } from '@/services/product/product.types'
import { ClickAwayListener } from '@mui/base'
import { TiArrowSortedUp, TiArrowSortedDown } from 'react-icons/ti'
import { Dispatch, FC, SetStateAction, useState } from 'react'
import { useFilters } from '../../../../app/explorer/useFilters'

const SortDropdown: FC = () => {
	const [toggleSort, setToggleSort] = useState(false)

	const { updateQueryParams, queryParams } = useFilters()

	const onClickListItem = (property: EnumProductSort) => {
		setToggleSort(!toggleSort)
		updateQueryParams('sort', property)
	}

	return (
		<ClickAwayListener onClickAway={() => setToggleSort(false)}>
			<div className=' items-center w-72 text-md text-secondary  flex flex-col'>
				<button
					type='button'
					onClick={() => setToggleSort(!toggleSort)}
					className='relative flex w-64 bg-primary rounded-xl py-3 items-center justify-center '
				>
					{toggleSort ? (
						<TiArrowSortedDown size={20} />
					) : (
						<TiArrowSortedUp size={20} />
					)}

					<span className='ml-2 font-medium mr-1'>Sort by:</span>
					<b className='px-1'>{queryParams.sort}</b>
				</button>
				{toggleSort && (
					<div className='absolute bg-secondary t-0 l-0 overflow-hidden rounded p-4 text-md w-64 font-semibold z-50 mt-11'>
						<ul className='flex flex-col gap-2 items-center justify-center'>
							{Object.keys(EnumProductSort).map(key => {
								const sortProperty =
									EnumProductSort[key as keyof typeof EnumProductSort]
								return (
									<li
										onClick={() => onClickListItem(sortProperty)}
										key={key}
										className={
											queryParams.sort === sortProperty
												? ' cursor-text text-secondary bg-primary p-2 rounded-xl w-full flex justify-center'
												: ' cursor-pointer hover:text-white hover:bg-black p-2 rounded-xl text-white transition-colors  w-full flex justify-center'
										}
									>
										{sortProperty}
									</li>
								)
							})}
						</ul>
					</div>
				)}
			</div>
		</ClickAwayListener>
	)
}

export default SortDropdown
