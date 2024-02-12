'use client'
import { TypePaginationProducts } from '@/types/product.interface'
import React, { FC, useState } from 'react'
import { useFilters } from './useFilters'
import { useQuery } from '@tanstack/react-query'
import { ProductService } from '@/services/product/product.service'
import Heading from '@/ui/Heading'
import SortDropdown from '@/ui/catalog/SortDropdown'
import Button from '@/ui/button/Button'
import Catalog from '@/ui/catalog/Catalog'
import PaginationComponent from './pagination/PaginationComponent'
import Range from '@/ui/range/Range'
import Filters from './filters/Filters'

interface IProductExplorer {
	initialProducts: TypePaginationProducts
}

const ProductExplorer: FC<IProductExplorer> = ({ initialProducts }) => {
	const [isFilterOpen, setIsFilterOpen] = useState(false)

	const { updateQueryParams, queryParams, isFilterUpdated } = useFilters()
	const { data, isFetching } = useQuery(
		['product explorer', queryParams],
		() => ProductService.getAll(queryParams),
		{ initialData: initialProducts, enabled: isFilterUpdated }
	)
	const totalPages = Math.ceil(data.length / +queryParams.perPage)

	return (
		<>
			<div className='px-6'>
				<div className='flex mt-6 justify-between items-center'>
					<Heading>
						{queryParams.searchTerm
							? `Search by query "${queryParams.searchTerm}"`
							: 'Explorer'}
					</Heading>
					<SortDropdown />
				</div>
				<Button
					variant='bordered'
					className='mt-4'
					onClick={() => setIsFilterOpen(!isFilterOpen)}
				>
					{isFilterOpen ? 'Close' : 'Open'} filters
				</Button>
			</div>
			<div
				style={
					isFilterOpen
						? { display: 'grid', gridTemplateColumns: '1fr 5fr' }
						: { display: 'flex', flexDirection: 'column' }
				}
				className='grid'
			>
				{isFilterOpen && (
					<aside>
						<Filters />
					</aside>
				)}

				<section>
					<Catalog products={data.products} isLoading={isFetching} />
					<PaginationComponent
						handlePageChange={page =>
							updateQueryParams('page', page.toString())
						}
						currentPage={queryParams.page}
						numbersPages={totalPages}
					/>
				</section>
			</div>
		</>
	)
}

export default ProductExplorer
