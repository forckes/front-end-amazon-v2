'use client'
import Image from 'next/image'
import React, { FC, useState } from 'react'
import AmazonLogoLight from '/public/images/Amazon_logoLight.png'
import { AiOutlineHeart, AiOutlineMenuFold } from 'react-icons/ai'
import { IoMdNotificationsOutline, IoMdSettings } from 'react-icons/io'
import { MdOutlineAdminPanelSettings } from 'react-icons/md'
import { BiSolidUser } from 'react-icons/bi'
import HeaderButton from '../header-button/HeaderButton'
import Link from 'next/link'
import Search from '../search/Search'
import { useProfile } from '@/hooks/useProfile'
import HeaderCart from './cart/HeaderCart'
import { MdLogin } from 'react-icons/md'
import { useIsAdminPanel } from '@/hooks/useIsAdminPanel'
import { useAuth } from '@/hooks/useAuth'

const Header: FC = () => {
	const { profile } = useProfile()
	const { isAdminPanel } = useIsAdminPanel()
	const { user } = useAuth()
	const [isHover, setIsHover] = useState(false)
	return (
		<header>
			<div className='fixed bg-secondary grid grid-cols-[1fr_3fr_1fr] items-center w-screen py-4 justify-between px-4   z-50'>
				<Link href='/' className='ml-6 mt-2 flex '>
					<Image
						src={AmazonLogoLight}
						width={130}
						height={130}
						alt='Amazon Logo'
					/>
					{isAdminPanel && (
						<div className=' ml-4 -mt-1.5 font-bold text-white text-3xl'>
							Admin
						</div>
					)}
				</Link>
				<Search />
				<div className='flex gap-4 justify-end'>
					{user?.isAdmin && (
						<Link href='/admin'>
							<HeaderButton>
								<MdOutlineAdminPanelSettings
									className=' transition-color absolute'
									size={28}
								/>
							</HeaderButton>
						</Link>
					)}
					<Link href='/favorites'>
						<HeaderButton>
							<AiOutlineHeart
								className=' transition-color absolute'
								size={26}
							/>
						</HeaderButton>
					</Link>

					<HeaderCart />

					<HeaderButton onClick={() => console.log('3')}>
						<IoMdNotificationsOutline
							className=' transition-color absolute'
							size={28}
						/>
					</HeaderButton>
					{!!profile ? (
						<>
							<div
								onMouseEnter={() => {
									setIsHover(true)
								}}
								onMouseLeave={() => {
									setIsHover(false)
								}}
							>
								<Image
									className='flex relative border border-solid transition-all duration-75 border-primary p-1 hover:border-2 items-center rounded-full'
									src={profile?.avatarPath || '/default-avatar.png'}
									width={50}
									height={50}
									alt='User Avatar'
								/>
								{isHover && (
									<div
										style={{ width: '180px' }}
										className=' animate-rightAppears absolute top-0 mt-16 px-2 right-2 bg-secondary flex flex-col py-1 pb-4 rounded-xl text-white border-2 border-black'
									>
										<ul className='flex flex-col'>
											<h3 className='text-lg flex items-center gap-2 p-2'>
												<AiOutlineMenuFold size={22} />
												Menu
											</h3>
											<Link
												href='/profile'
												className='mt-1 flex border border-black py-2 gap-2 text-lg hover:bg-black px-2 rounded-xl text-white '
											>
												<BiSolidUser size={26} />
												Profile
											</Link>
											<Link
												className='mt-3 flex border border-black py-2 gap-2 text-lg hover:bg-black px-2 rounded-xl text-white mb-2'
												href='/settings'
											>
												<IoMdSettings size={26} />
												Settings
											</Link>
										</ul>
									</div>
								)}
							</div>
						</>
					) : (
						<Link
							className='flex mr-4 justify-center hover:text-opacity-80 items-center text-bg-color gap-2 font-semibold text-md'
							type='button'
							href='/auth'
						>
							Sign_in
							<MdLogin size={24} />
						</Link>
					)}
				</div>
			</div>
		</header>
	)
}

export default Header
