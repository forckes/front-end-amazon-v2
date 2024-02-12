'use client'
import { useRouter } from 'next/navigation'
import React, { FC } from 'react'
import style from './Confirmation.module.scss' // Import module CSS

const Confirmation: FC = () => {
	const { push } = useRouter()

	return (
		<div
			className={style['credit-card-form']}
			style={{
				maxWidth: '400px',
				margin: 'auto',
				marginTop: '100px',
				padding: '1em',
				borderRadius: '10px',
				boxShadow: '0px 4px 10px rgba(232, 96, 12, 0.1)',
				backgroundColor: '#ff9900',
				textAlign: 'center',
				color: '#000000',
				alignContent: 'center'
			}}
		>
			<h2 style={{ marginBottom: '10%', fontSize: '24px' }}>
				Credit Card Payment
			</h2>
			<form>
				<div className={style['form-group']}>
					<label htmlFor='card-number'>Card Number</label>
					<input
						type='text'
						id='card-number'
						placeholder='Card number'
						style={{
							width: '100%',
							padding: '12px',
							border: '1px solid #ddd',
							borderRadius: '1rem',
							fontSize: '16px'
						}}
					/>
				</div>
				<div className={style['form-group']}>
					<label htmlFor='card-holder'>Card Holder</label>
					<input
						type='text'
						id='card-holder'
						placeholder="Card holder's name"
						style={{
							width: '100%',
							padding: '12px',
							border: '1px solid #ddd',
							borderRadius: '1rem',
							fontSize: '16px'
						}}
					/>
				</div>
				<div className={style['form-row']}>
					<div
						className={`${style['form-group']} ${style['form-column']}`}
						style={{ display: 'flex' }}
					>
						<label htmlFor='expiry-date'>Expiry Date</label>
						<input
							type='text'
							id='expiry-date'
							placeholder='MM/YY'
							style={{
								width: 'calc(50% - 5px)',
								padding: '12px',
								border: '1px solid #ddd',
								borderRadius: '1rem',
								fontSize: '16px',
								marginRight: '10px'
							}}
						/>
					</div>
					<div
						className={`${style['form-group']} ${style['form-column']}`}
						style={{ display: 'flex' }}
					>
						<label htmlFor='cvv'>CVV</label>
						<input
							type='text'
							id='cvv'
							placeholder='CVV'
							style={{
								width: 'calc(50% - 5px)',
								padding: '12px',
								border: '1px solid #ddd',
								borderRadius: '1rem',
								fontSize: '16px',
								marginLeft: '10px'
							}}
						/>
					</div>
				</div>
				<button
					type='button'
					className={style['click-button']}
					onClick={() => push('/thanks')}
					style={{
						width: '100%',
						padding: '14px',
						backgroundColor: '#191818',
						color: '#fff',
						border: 'none',
						borderRadius: '1rem',
						cursor: 'pointer',
						fontSize: '16px',
						transition: 'background-color 0.3s ease'
					}}
				>
					Pay Now
				</button>
			</form>
		</div>
	)
}

export default Confirmation
