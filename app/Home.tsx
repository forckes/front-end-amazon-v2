import { IProduct } from '@/types/product.interface'
import Carousel from '@/ui/carousel/Carousel'
import Catalog from '@/ui/catalog/Catalog'

import React, { FC } from 'react'
import { carouselItems } from './carousel.data'

const Home: FC<{ products: IProduct[] }> = ({ products }) => {
	return (
		<>
			<Carousel items={carouselItems} />
			<Catalog title='Hot deals🔥' products={products} />
		</>
	)
}

export default Home
