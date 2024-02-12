import { instance } from '@/api/api.interceptor'
import { ICartItem } from '@/types/cart.interface'
import { IOrder } from '@/types/order.interface'

const ORDERS = 'orders'

interface OrderItemInput {
	price: number
	quantity: number
	productId: number
}

interface PlaceOrderInput {
	items: OrderItemInput[]
}

export const OrderService = {
	async getAll() {
		return instance<IOrder[]>({
			url: ORDERS,
			method: 'GET'
		})
	},
	async getByUserId() {
		return instance<IOrder[]>({
			url: `${ORDERS}/by-user`,
			method: 'GET'
		})
	},
	async placeOrder(data: PlaceOrderInput) {
		return instance<PlaceOrderInput>({
			url: ORDERS,
			method: 'POST',
			data
		})
	}
}
