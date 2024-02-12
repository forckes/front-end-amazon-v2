'use client'

import { FC } from 'react'

import { MdOutlineMailOutline } from 'react-icons/md'
import { RiLockPasswordLine } from 'react-icons/ri'
import { BsTelephone } from 'react-icons/bs'
import { BiUser } from 'react-icons/bi'
import { Oval } from 'react-loader-spinner'

import Image from 'next/image'
import AmazonLogo from '/public/images/Amazon_logo.png'

import Button from '@/ui/button/Button'
import Heading from '@/ui/Heading'
import { useAuth } from '@/hooks/useAuth'
import { useActions } from '@/hooks/useActions'
import { IRegister } from '@/store/user/user.interface'
import { SubmitHandler, useForm } from 'react-hook-form'
import Field from '@/ui/input/Field'
import { validEmail } from './valid-email'
import { validMobile } from './valid-mobile'
import { useAuthRedirect } from './useAuthRedirect'

interface RegisterProps {
	setToggle: React.Dispatch<React.SetStateAction<boolean>>
	toggle: boolean
}

const Register: FC<RegisterProps> = ({ setToggle, toggle }) => {
	useAuthRedirect()

	const { isLoading } = useAuth()

	const { register } = useActions()

	const {
		register: formRegister,
		handleSubmit,
		formState: { errors },
		reset
	} = useForm<IRegister>({
		defaultValues: {
			phone: '+380'
		},
		mode: 'onChange'
	})

	const onSubmit: SubmitHandler<IRegister> = data => {
		register(data)
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
							Create account
						</Heading>

						<form onSubmit={handleSubmit(onSubmit)}>
							<Field
								{...formRegister('name', {
									required: 'Full name is required',
									minLength: {
										value: 4,
										message: 'Min length should be more than 4 symbols'
									}
								})}
								title='Full name'
								error={errors.name?.message}
								type='text'
								Icon={BiUser}
								className='mb-4'
							/>
							<Field
								{...formRegister('phone', {
									required: 'Mobile number is required',
									pattern: {
										value: validMobile,
										message: 'Please enter the right mobile number'
									}
								})}
								title='Mobile number'
								error={errors.phone?.message}
								type='tel'
								Icon={BsTelephone}
								className='mb-4'
							/>
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

							<Button className='mt-12 mx-auto flex' variant='dark'>
								Sign up
							</Button>
						</form>
					</div>
					<div className='flex-[1_1_50%]'>
						<div className='flex flex-col justify-center items-center'>
							<p className='text-lg'>
								Find everything you love at <b>Amazon</b>
								<br /> <b>the worlds largest online marketplace</b>
							</p>
							<span className='mt-6 mb-1'>Already have an account?</span>
							<Button onClick={() => setToggle(!toggle)} variant='dark'>
								Sign In
							</Button>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Register
