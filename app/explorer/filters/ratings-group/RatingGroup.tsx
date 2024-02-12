import React, { FC } from 'react'
import FilterWrapper from '../FilterWrapper'
import { useFilters } from '../../useFilters'
import { RATING_VARIANTS } from './rartings-variants.data'
import Checkbox from '@/ui/checkbox/Checkbox'
import { updateRatingsQuery } from './update-ratings-query'
import { Rating } from 'react-simple-star-rating'

const RatingGroup: FC = () => {
	const { updateQueryParams, queryParams } = useFilters()

	return (
		<FilterWrapper value='ratings' title='By rating'>
			{RATING_VARIANTS.map(rating => (
				<Checkbox
					isChecked={queryParams.ratings?.includes(rating.toString())}
					key={rating}
					onClick={() =>
						updateQueryParams(
							'ratings',
							updateRatingsQuery(queryParams.ratings, rating.toString())
						)
					}
					className='mb-2'
				>
					<Rating
						readonly
						initialValue={rating}
						SVGstyle={{ display: 'inline-block' }}
						size={22}
						allowFraction
						transition
						fillColor={'#FF9900'}
					/>
				</Checkbox>
			))}
		</FilterWrapper>
	)
}

export default RatingGroup
