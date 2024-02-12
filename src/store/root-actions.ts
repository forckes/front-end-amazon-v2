import { carouselSlice } from './carousel/carousel.slice'
import { cartSlice } from './cart/cart.slice'
import { filterSlice } from './filters/filters.slice'
import * as userActions from './user/user.actions'

export const rootActions = {
	...cartSlice.actions,
	...carouselSlice.actions,
	...userActions,
	...filterSlice.actions
}
