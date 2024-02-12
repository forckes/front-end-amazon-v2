import React, { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react'

import cn from 'clsx'

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant: 'dark' | 'light' | 'bordered'
}

const Button: FC<PropsWithChildren<IButton>> = ({
	children,
	className,
	variant,
	onClick,
	disabled,
	...rest
}) => {
	return (
		<button
			disabled={disabled}
			onClick={onClick}
			{...rest}
			className={cn(
				' font-semibold disabled:opacity-70 disabled:cursor-not-allowed',
				{
					'text-secondary shadow rounded-md bg-primary hover:opacity-90 transition-opacity ease-in-out duration-200 text-xl px-12 py-3':
						variant === 'dark',
					'rounded-3xl text-primary px-6 py-2 hover:bg-bg-color transition-colors ease-in-out duration-200 bg-white text-sm':
						variant === 'light',
					'rounded-md text-primary text-xl hover:bg-primary hover:text-white bg-white border-primary px-12 py-3 transition-colors ease-in-out duration-200 border-2':
						variant === 'bordered'
				},
				className
			)}
		>
			{children}
		</button>
	)
}

export default Button
