import type { Metadata } from 'next'

import { NO_INDEX_PAGE } from '@/constants/seo.constants'
import Confirmation from './Confirmation'

export const metadata: Metadata = {
	title: 'Confirmation',
	...NO_INDEX_PAGE
}

export default function ConfirmationPage() {
	return <Confirmation />
}
