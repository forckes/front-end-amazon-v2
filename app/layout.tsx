import type { Metadata } from 'next'

import '@/assets/styles/globals.scss'
import Providers from '@/providers/Providers'
import { SITE_NAME } from '@/constants/seo.constants'
import { getSiteUrl } from '@/config/url.config'
import Header from '@/ui/layout/header/Header'
import Sidebar from '@/ui/layout/sidebar/Sidebar'
import Loading from './loading'
import { Suspense } from 'react'

export const metadata: Metadata = {
	icons: {
		icon: '/favicon.png'
	},
	title: {
		absolute: SITE_NAME,
		template: `%s | ${SITE_NAME}`
	},
	metadataBase: new URL(getSiteUrl()),
	openGraph: {
		type: 'website',
		siteName: SITE_NAME,
		emails: ['info@amazon.com']
	}
}

export default function RootLayout({
	children
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<body>
				<Providers>
					<div>
						<Header />
						<div
							className='grid'
							style={{ gridTemplateColumns: '1fr 5fr', paddingTop: '82px' }}
						>
							<Sidebar />
							<Suspense fallback={<Loading />}>
								<main>{children}</main>{' '}
							</Suspense>
						</div>
					</div>
				</Providers>
			</body>
		</html>
	)
}
