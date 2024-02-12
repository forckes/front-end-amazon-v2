'use client'
import { Oval } from 'react-loader-spinner'

export default function Loading() {
	return (
		<div className='mt-10'>
			<Oval
				height={200}
				width={200}
				color='#FF9900'
				wrapperStyle={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					marginTop: '300px'
				}}
				wrapperClass=''
				visible={true}
				ariaLabel='oval-loading'
				secondaryColor='#ff99009f'
				strokeWidth={3}
				strokeWidthSecondary={3}
			/>
		</div>
	)
}
