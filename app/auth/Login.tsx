'use client'
import { FC } from 'react'

import { MdOutlineMailOutline } from 'react-icons/md'
import { RiLockPasswordLine } from 'react-icons/ri'
import Image from 'next/image'
import AmazonLogo from '/public/images/Amazon_logo.png'
import { Oval } from 'react-loader-spinner'

import Button from '@/ui/button/Button'
import Heading from '@/ui/Heading'
import { useAuth } from '@/hooks/useAuth'
import { useActions } from '@/hooks/useActions'
import { IEmailPassword } from '@/store/user/user.interface'
import { SubmitHandler, useForm } from 'react-hook-form'
import Field from '@/ui/input/Field'
import { validEmail } from './valid-email'
import { useAuthRedirect } from './useAuthRedirect'

interface LoginProps {
	setToggle: React.Dispatch<React.SetStateAction<boolean>>
	toggle: boolean
}

const Login: FC<LoginProps> = ({ setToggle, toggle }) => {
	useAuthRedirect()
	const { isLoading } = useAuth()

	const { login } = useActions()

	const {
		register: formRegister,
		handleSubmit,
		formState: { errors },
		reset
	} = useForm<IEmailPassword>({
		mode: 'onChange'
	})

	const onSubmit: SubmitHandler<IEmailPassword> = data => {
		login(data)
		reset()
	}

	return (
		<section className='flex w-full justify-center h-full items-center'>
			<div className='bg-white rounded-xl flex flex-col justify-center items-center px-8 py-10 '>
				<Image src={AmazonLogo} width={180} height={500} alt='Amazon Logo' />
				{isLoading && (
					<Oval
						height={80}
						width={80}
						color='#FFB503'
						wrapperStyle={{ marginTop: '10px' }}
						wrapperClass=''
						visible={true}
						ariaLabel='oval-loading'
						secondaryColor='#ffb303f1'
						strokeWidth={3}
						strokeWidthSecondary={2}
					/>
				)}
				<div
					style={{ gap: '70px' }}
					className='flex justify-between items-center mt-10'
				>
					<div style={{ width: '400px' }} className='flex flex-col '>
						<Heading className='text-3xl flex justify-center mb-8'>
							Sign in
						</Heading>

						<form onSubmit={handleSubmit(onSubmit)}>
							<Field
								{...formRegister('email', {
									required: 'Email is required',
									pattern: {
										value: validEmail,
										message: 'Please enter a valid email address'
									}
								})}
								title='Email ID'
								error={errors.email?.message}
								Icon={MdOutlineMailOutline}
								className='mb-4'
							/>
							<div>
								<Field
									{...formRegister('password', {
										required: 'Password is required',
										minLength: {
											value: 6,
											message: 'Min length should be more than 6 symbols'
										}
									})}
									title='Password'
									error={errors.password?.message}
									type='password'
									Icon={RiLockPasswordLine}
								/>
								<span className='text-cyan mt-2 cursor-pointer'>
									Forgot password?
								</span>
							</div>

							<Button className='mt-12 mx-auto flex' variant='dark'>
								Sign in
							</Button>
						</form>
					</div>
					<div className=''>
						<div className='flex flex-col justify-center items-center'>
							<p className='text-lg'>
								Find everything you love at <b>Amazon</b>
								<br /> <b>the worlds largest online marketplace</b>
							</p>
							<span className='mt-6 mb-1'>New at Amazon?</span>
							<Button onClick={() => setToggle(!toggle)} variant='dark'>
								Create your account here
							</Button>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Login
