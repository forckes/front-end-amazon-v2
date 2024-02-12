'use client'
import { useProfile } from '@/hooks/useProfile'
import Catalog from '@/ui/catalog/Catalog'
// import Layout from '@/ui/layout/Layout'
import { NextPage } from 'next'
import React from 'react'

const Favorites: NextPage = () => {
	const { profile } = useProfile()
	return (
		// <Layout>
		<Catalog products={profile?.favorites || []} title='Favorites' />
		// </Layout>
	)
}

export default Favorites
