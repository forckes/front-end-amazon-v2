'use client'

import React, { useState } from 'react'
import Register from './Register'
import Login from './Login'

const Auth = () => {
	const [toggle, setToggle] = useState(false)

	return (
		<div style={{ height: '100vh', width: '100wh' }}>
			{toggle ? (
				<Register toggle={toggle} setToggle={setToggle} />
			) : (
				<Login toggle={toggle} setToggle={setToggle} />
			)}
		</div>
	)
}

export default Auth
