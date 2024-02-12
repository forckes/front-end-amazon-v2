import { FC, PropsWithChildren } from 'react'
import cn from 'clsx'

interface IHeading {
	className?: string
	titleSize?: string
}

const Heading: FC<PropsWithChildren<IHeading>> = ({ children, className }) => {
	return <h1 className={cn(`font-semibold text-4xl`, className)}>{children}</h1>
}

export default Heading
