'use client'
import { ProductService } from '@/services/product/product.service'
import Catalog from '@/ui/catalog/Catalog'
// import Layout from '@/ui/layout/Layout'
import { useQuery } from '@tanstack/react-query'
import { NextPage } from 'next'
import { useSearchParams } from 'next/navigation'
import React from 'react'

const SearchPage: NextPage = () => {
	const searchParams = useSearchParams()
	const query = searchParams?.get('term')

	const { data } = useQuery(['search products', query], () =>
		ProductService.getAll({ searchTerm: query as string })
	)
	return (
		// <Layout>
		<Catalog
			products={data?.products || []}
			title={`Search by request "${query || ''}"`}
		/>
		// </Layout>
	)
}

export default SearchPage
