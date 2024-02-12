import { useRouter } from 'next/navigation'
import React, { FC, useState } from 'react'
import { FiSearch } from 'react-icons/fi'

const Search: FC = () => {
	const [searchTerm, setSearchTerm] = useState('')
	const { push } = useRouter()
	return (
		<div className='flex'>
			<input
				className='text-bg-color placeholder:text-bg-color bg-input border-2 border-solid border-gray rounded-tl-xl rounded-bl-xl py-2 px-4 font-semibold text-base placeholder:text-opacity-70 w-3/6'
				placeholder='Search...'
				value={searchTerm}
				onChange={e => setSearchTerm(e.target.value)}
			/>
			<button
				className='text-white hover:bg-opacity-90 active:bg-opacity-80 transition-opacity bg-primary rounded-tr-xl rounded-br-xl p-3'
				type='button'
				onClick={() => push(`/explorer?searchTerm=${searchTerm}`)}
			>
				<FiSearch size={24} />
			</button>
		</div>
	)
}

export default Search
