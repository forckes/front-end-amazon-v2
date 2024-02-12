import { useAuth } from '@/hooks/useAuth'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

export const useAuthRedirect = () => {
	const { user } = useAuth()

	const { replace } = useRouter()
	useEffect(() => {
		if (user) replace('/')
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [user])
}
