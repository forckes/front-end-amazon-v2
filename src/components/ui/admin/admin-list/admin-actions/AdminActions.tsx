import React, { FC } from 'react'
import { IListItem } from '../admin-list.interface'
import { useRouter } from 'next/navigation'
import { RiDeleteRow, RiEdit2Line, RiExternalLinkLine } from 'react-icons/ri'

interface IAdminActions extends Pick<IListItem, 'editUrl' | 'viewUrl'> {
	removeHandler?: () => void
}

const AdminActions: FC<IAdminActions> = ({
	editUrl,
	removeHandler,
	viewUrl
}) => {
	const { push } = useRouter()
	return (
		<div className='flex justify-center gap-4  text-primary'>
			{viewUrl && (
				<button onClick={() => push(viewUrl)}>
					<RiExternalLinkLine size={24} />
				</button>
			)}
			{editUrl && (
				<button onClick={() => push(editUrl)}>
					<RiEdit2Line size={24} />
				</button>
			)}
			{removeHandler && (
				<button onClick={removeHandler}>
					<RiDeleteRow size={24} />
				</button>
			)}
		</div>
	)
}

export default AdminActions
