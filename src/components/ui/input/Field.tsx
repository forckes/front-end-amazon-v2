import { forwardRef } from 'react'
import { IField } from './field.interface'
import cn from 'clsx'

const Field = forwardRef<HTMLInputElement, IField>(
	(
		{
			title,
			placeholder,
			error,
			iconSize = 24,
			className,
			type = 'text',
			Icon,
			style,
			...rest
		},
		ref
	) => {
		return (
			<div className={cn('', className)}>
				<label>
					<span className='flex items-center text-lg'>
						{Icon && <Icon size={iconSize} className='mr-3' />}
						{title}
					</span>
					<input
						className={cn(
							'border-gray text-lg outline-none transition-all	 focus:border-primary text-black py-6 px-8 h-10 w-full border-2 border-solid rounded-md',
							{
								'border-red': !!error
							}
						)}
						type={type}
						ref={ref}
						{...rest}
						placeholder={placeholder}
					/>
				</label>
				{error && <div className='text-red mt-1'>{error}</div>}
			</div>
		)
	}
)

Field.displayName = 'Field'

export default Field
