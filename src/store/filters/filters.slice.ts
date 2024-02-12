import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { IFilterActionsPayload, IFilterState } from './filter.types'
import { EnumProductSort } from '@/services/product/product.types'

const initialState: IFilterState = {
	isFilterUpdated: false,
	queryParams: {
		sort: EnumProductSort.NEWEST,
		searchTerm: '',
		page: 1,
		perPage: 20,
		ratings: ''
	}
}

export const filterSlice = createSlice({
	name: 'filters',
	initialState,
	reducers: {
		updateQueryParam: (state, action: PayloadAction<IFilterActionsPayload>) => {
			const { key, value } = action.payload
			;(state.queryParams[key] as string) = value

			state.isFilterUpdated = true
		},
		resetFilterUpdate: state => {
			state.isFilterUpdated = false
		},
		resetFilter: state => {
			state.queryParams.ratings = ''
			state.queryParams.categoryId = ''
		}
	}
})
