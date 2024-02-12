import type { FC, PropsWithChildren } from 'react'
import cn from 'clsx'

interface ICheckbox {
	isChecked: boolean
	onClick: () => void
	className?: string
}

const Checkbox: FC<PropsWithChildren<ICheckbox>> = ({
	isChecked,
	onClick,
	className,
	children
}) => {
	return (
		<button className={cn(className, '')} onClick={onClick}>
			<span
				className={cn(
					'border-2 border-gray py-0.5 px-3 mr-2 border-solid rounded-md  ',
					{
						'bg-primary': isChecked
					}
				)}
			/>
			<span>{children}</span>
		</button>
	)
}

export default Checkbox
