import { IUser } from './user.interface'

export interface IReview {
	user: IUser
	createdAt: string
	text: string
	rating: number
	id: number
}
