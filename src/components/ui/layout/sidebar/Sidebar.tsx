'use client'

import { useActions } from '@/hooks/useActions'
import { useAuth } from '@/hooks/useAuth'
import Link from 'next/link'
import React, { FC } from 'react'
import { Oval } from 'react-loader-spinner'
import cn from 'clsx'
import { BiCategory, BiCategoryAlt } from 'react-icons/bi'
import { FiLogOut } from 'react-icons/fi'
import { useIsAdminPanel } from '@/hooks/useIsAdminPanel'
import useCategories from '@/hooks/queries/useCategories'
import { ADMIN_MENU } from './admin-menu.data'
import { convertToMenuItems } from './convert-to-menu-items'

const Sidebar: FC = () => {
	const { data, isLoading } = useCategories()
	const { user } = useAuth()
	const { logout } = useActions()

	const { isAdminPanel, pathname } = useIsAdminPanel()

	const logoutFunction = () => {
		logout()
		location.reload()
	}
	return (
		<aside>
			<div
				style={{ width: '280px' }}
				className='fixed bg-secondary h-full before:absolute  before:h-px before:w-full -mt-1 before:bg-black z-50'
			>
				<div className='flex flex-col pt-4'>
					{isLoading ? (
						<Oval
							height={80}
							width={80}
							color='#FF9900'
							wrapperStyle={{}}
							wrapperClass=''
							visible={true}
							ariaLabel='oval-loading'
							secondaryColor='#ff99009f'
							strokeWidth={2}
							strokeWidthSecondary={2}
						/>
					) : data ? (
						<div
							style={{ maxHeight: '650px' }}
							className=' overflow-y-scroll flex flex-col w-full items-center'
						>
							<div className='flex justify-start w-full text-white text-xl font-medium py-2 px-3'>
								<div className='text-lg flex gap-3 rounded-xl  justify-start py-2 px-6 w-full relative'>
									<BiCategoryAlt size={30} />
									<span className='text-xl font-semibold '>
										{isAdminPanel ? 'Menu' : 'Categories'}
									</span>
								</div>
							</div>
							<ul className='w-full flex flex-col px-3'>
								{(isAdminPanel ? ADMIN_MENU : convertToMenuItems(data)).map(
									item => (
										<li className='flex' key={item.href}>
											<Link
												className={cn(
													' text-lg rounded-xl w-full relative flex justify-start hover:bg-input py-2 gap-3 px-6',
													pathname === item.href
														? 'text-primary before:absolute before:h-full before:w-1 before:bg-primary before:top-0 before:left-0 before:-ml-2.5 before:rounded-tr before:rounded-br'
														: 'text-white'
												)}
												href={item.href}
											>
												{pathname === item.href && <BiCategory size={24} />}
												<span
													className={cn(pathname === item.href ? '' : 'ml-10')}
												>
													{item.label}
												</span>
											</Link>
										</li>
									)
								)}
							</ul>
						</div>
					) : (
						<div>Categories not found!</div>
					)}
				</div>
				{!!user && (
					<button
						className='gap-3 clamp flex-[0_1_100%] hover:text-primary mt-16 text-white flex items-center ml-10 '
						type='button'
						onClick={logoutFunction}
					>
						<FiLogOut size={24} />
						<span className='font-semibold text-md'>Logout</span>
					</button>
				)}
			</div>
		</aside>
	)
}

export default Sidebar
