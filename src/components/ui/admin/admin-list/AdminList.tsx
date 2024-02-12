'use client'
import React, { FC } from 'react'
import { IListItem } from './admin-list.interface'
import { Oval } from 'react-loader-spinner'
import AdminListItem from './AdminListItem'

interface IAdminList {
	listItems?: IListItem[]
	isLoading: boolean

	removeHandler?: (id: number) => void
}

const AdminList: FC<IAdminList> = ({ listItems, isLoading, removeHandler }) => {
	return (
		<div className='mt-5'>
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
			) : listItems?.length ? (
				listItems?.map(listItem => (
					<AdminListItem
						key={listItem.id}
						removeHandler={
							removeHandler ? () => removeHandler(listItem.id) : undefined
						}
						listItem={listItem}
					/>
				))
			) : (
				<div>Elements not found</div>
			)}
		</div>
	)
}

export default AdminList
