'use client'

import React, { FC, MouseEventHandler, PropsWithChildren } from 'react'

interface IButton {
	onClick?: MouseEventHandler<HTMLButtonElement>
}

const HeaderButton: FC<PropsWithChildren<IButton>> = ({
	children,
	onClick
}) => {
	return (
		<button
			onClick={onClick}
			className='hover:bg-primary transition-colors p-6 flex justify-center items-center hover:text-secondary text-white rounded-lg'
		>
			{children}
		</button>
	)
}

export default HeaderButton
