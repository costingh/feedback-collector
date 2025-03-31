import {
  Enabled,
  QueryFunction,
  QueryKey,
  useQuery,
} from '@tanstack/react-query'

export const useQueryData = (
  queryKey: QueryKey,
  queryFn: QueryFunction,
  enabled?: Enabled,
  refetchOnWindowFocus: boolean = true
) => {
  const { data, isPending, isFetched, refetch, isFetching } = useQuery({
    queryKey,
    queryFn,
    refetchOnWindowFocus
  })
  return { data, isPending, isFetched, refetch, isFetching }
}
