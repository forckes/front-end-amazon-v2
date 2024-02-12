import {
	IAuthResponse,
	IEmailPassword,
	IRegister
} from '@/store/user/user.interface'
import Cookies from 'js-cookie'
import { saveToStorage } from './auth.helper'
import { axiosClassic, instance } from '@/api/api.interceptor'
import { REFRESH_TOKEN } from '@/constants/token.constants'

export const AuthService = {
	async main(type: 'login' | 'register', data: IEmailPassword | IRegister) {
		try {
			const response = await axiosClassic<IAuthResponse>({
				url: `/auth/${type}`,
				method: 'POST',
				data
			})
			if (response.data.accessToken) {
				saveToStorage(response.data)
			}
			return response.data
		} catch (error: any) {
			// Handle error here, log it or show a user-friendly message
			throw new Error(error)
		}
	},
	async getNewTokens() {
		try {
			const refreshToken = Cookies.get(REFRESH_TOKEN)
			const response = await axiosClassic.post<IAuthResponse>(
				'/auth/login/access-token', // Use a more descriptive endpoint if possible
				{ refreshToken }
			)
			if (response.data.accessToken) {
				saveToStorage(response.data)
			}
			return response
		} catch (error: any) {
			// Handle error here, log it or show a user-friendly message
			throw new Error(error)
		}
	}
}

export default AuthService
