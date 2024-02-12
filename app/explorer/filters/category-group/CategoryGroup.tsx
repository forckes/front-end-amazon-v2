import React, { FC } from 'react'
import { useFilters } from '../../useFilters'
import useCategories from '@/hooks/queries/useCategories'
import FilterWrapper from '../FilterWrapper'
import { Oval } from 'react-loader-spinner'
import Checkbox from '@/ui/checkbox/Checkbox'
import { RxCross1 } from 'react-icons/rx'

const CategoryGroup: FC = () => {
	const { updateQueryParams, queryParams } = useFilters()
	const { data, isLoading } = useCategories()
	const reset = () => {
		updateQueryParams('categoryId', '')
	}
	return (
		<FilterWrapper value='categoryId' title='By categories'>
			{isLoading ? (
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
			) : (
				data?.length &&
				data.map(category => {
					const isChecked = queryParams.categoryId === category.id.toString()
					return (
						<Checkbox
							isChecked={isChecked}
							key={category.id}
							onClick={() =>
								updateQueryParams('categoryId', category.id.toString())
							}
							className='mb-2'
						>
							{category.name}
						</Checkbox>
					)
				})
			)}
		</FilterWrapper>
	)
}

export default CategoryGroup
