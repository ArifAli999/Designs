import { useQuery, useQueryClient } from "react-query";

export const useGetFetchQuery = () =>


    useQuery('repoData', () =>
        fetch('https://dummyjson.com/products').then(res =>
            res.json()
        )
    )


    ;