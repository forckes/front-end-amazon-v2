import {
	configureStore,
	combineReducers,
	CombinedState,
	AnyAction
} from '@reduxjs/toolkit'

import storage from 'redux-persist/lib/storage'

import {
	persistStore,
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER
} from 'redux-persist'
import { userSlice } from './user/user.slice'
import { cartSlice } from './cart/cart.slice'
import { carouselSlice } from './carousel/carousel.slice'
import { filterSlice } from './filters/filters.slice'

const isClient = typeof window !== 'undefined'

const combinedReducers = combineReducers({
	cart: cartSlice.reducer,
	carousel: carouselSlice.reducer,
	user: userSlice.reducer,
	filters: filterSlice.reducer
})

let mainReducer = combinedReducers

if (isClient) {
	const persistConfig = {
		key: 'amazon-v2',
		storage,
		whitelist: ['cart']
	}

	mainReducer = persistReducer(persistConfig, combinedReducers)
}

export const store = configureStore({
	reducer: mainReducer,
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
			}
		})
})

export const persistor = persistStore(store)

export type TypeRootState = ReturnType<typeof mainReducer>
