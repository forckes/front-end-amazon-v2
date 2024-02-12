import React, { FC } from 'react'
import { IAdminListItem } from './admin-list.interface'
import AdminActions from './admin-actions/AdminActions'

const AdminListItem: FC<IAdminListItem> = ({ listItem, removeHandler }) => {
	return (
		<div className='flex justify-between items-center p-4 border border-solid border-gray rounded-lg mt-4'>
			{listItem.items.map(value => (
				<div className='text-lg font-semibold' key={value}>
					{value}
				</div>
			))}
			<AdminActions
				viewUrl={listItem.viewUrl}
				editUrl={listItem.editUrl}
				removeHandler={removeHandler}
			/>
		</div>
	)
}

export default AdminListItem
