import { getAdminUrl } from '@/config/url.config'
import { ProductService } from '@/services/product/product.service'
import { IListItem } from '@/ui/admin/admin-list/admin-list.interface'
import { useMutation, useQuery } from '@tanstack/react-query'

export const useAdminProducts = () => {
	const { data, isFetching, refetch } = useQuery(
		['get admin products'],
		() => ProductService.getAll(),
		{
			select: data =>
				data.products.map((product): IListItem => {
					return {
						id: product.id,
						viewUrl: `/product/${product.slug}`,
						editUrl: getAdminUrl(`/product/edit/${product.id}`),
						items: [product.name, product.category.name]
					}
				})
		}
	)

	const { mutate } = useMutation(
		['delete product'],
		(id: number) => ProductService.delete(id),
		{
			onSuccess() {
				refetch()
			}
		}
	)
	return { mutate, data, isFetching }
}
