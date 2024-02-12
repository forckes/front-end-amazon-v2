import React, { FC } from 'react'
import { useFilters } from '../../useFilters'
import Range from '@/ui/range/Range'
import FilterWrapper from '../FilterWrapper'

const PriceGroup: FC = () => {
	const { updateQueryParams, queryParams } = useFilters()

	return (
		<FilterWrapper value='maxPrice' title='Price range'>
			<Range
				max={100000}
				fromInitialValue={queryParams.minPrice}
				toInitialValue={queryParams.maxPrice}
				onChangeFromValue={value => updateQueryParams('minPrice', value)}
				onChangeToValue={value => updateQueryParams('maxPrice', value)}
			/>
		</FilterWrapper>
	)
}

export default PriceGroup
