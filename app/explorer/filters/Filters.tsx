import React, { FC } from 'react'
import PriceGroup from './price-group/PriceGroup'
import RatingGroup from './ratings-group/RatingGroup'
import CategoryGroup from './category-group/CategoryGroup'
import { useActions } from '@/hooks/useActions'
import { useFilters } from '../useFilters'

const Filters: FC = () => {
	return (
		<div className='flex flex-col'>
			<PriceGroup />
			<CategoryGroup />
			<RatingGroup />
		</div>
	)
}

export default Filters
