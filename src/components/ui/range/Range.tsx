import { useDebounce } from '@/hooks/useDebounce'
import React, { FC, useEffect, useState } from 'react'

interface IRange {
	min?: number
	max: number
	fromInitialValue?: string
	toInitialValue?: string
	onChangeFromValue: (value: any) => void
	onChangeToValue: (value: any) => void
}

const Range: FC<IRange> = ({
	min = 0,
	max,
	fromInitialValue,
	toInitialValue,
	onChangeFromValue,
	onChangeToValue
}) => {
	const [fromValue, setFromValue] = useState(fromInitialValue || '')
	const [toValue, setToValue] = useState(toInitialValue || '')

	const debouncedFromValue = useDebounce(fromValue, 500)
	const debouncedToValue = useDebounce(toValue, 500)

	useEffect(() => {
		onChangeFromValue(debouncedFromValue)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [debouncedFromValue])

	useEffect(() => {
		onChangeToValue(debouncedToValue)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [debouncedToValue])

	return (
		<div className='flex'>
			<input
				min={min}
				max={max}
				placeholder='From'
				value={fromValue}
				onChange={e => setFromValue(e.target.value)}
				type='number'
				className='rounded-md placeholder:text-grey border-gray border-2 text-center'
			/>
			<span className='flex px-2 items-center text-2xl'>-</span>
			<input
				min={min}
				max={max}
				placeholder='To'
				value={toValue}
				onChange={e => setToValue(e.target.value)}
				type='number'
				className='rounded-md placeholder:text-grey border-gray border-2 text-center'
			/>
		</div>
	)
}

export default Range
