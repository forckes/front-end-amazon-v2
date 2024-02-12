import { useActions } from '@/hooks/useActions'
import { useTypedSelector } from '@/hooks/useTypedSelector'
import { TypeProductDataFilters } from '@/services/product/product.types'
import { usePathname, useSearchParams } from 'next/navigation'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export const useFilters = () => {
	const pathname = usePathname()
	const searchParams = useSearchParams()
	const { updateQueryParam } = useActions()
	const router = useRouter()

	const { queryParams, isFilterUpdated } = useTypedSelector(
		state => state.filters
	)
	useEffect(() => {
		searchParams?.forEach((value, key) => {
			updateQueryParam({ key: key as keyof TypeProductDataFilters, value })
		})
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])
	const updateQueryParams = (
		key: keyof TypeProductDataFilters,
		value: string
	) => {
		const newParams = new URLSearchParams(searchParams?.toString())
		if (value) {
			newParams.set(key, String(value))
		} else {
			newParams.delete(key)
		}
		router.replace(pathname + `?${newParams.toString()}`)
		updateQueryParam({ key, value })
	}

	return { updateQueryParams, queryParams, isFilterUpdated }
}
