import { useQuery } from "@tanstack/react-query";
import api from '../utils/api';

const fetchPopularMovies = () => {
    return api.get(`trending/all/day`)
}


export const usePopularMoviesQuery = () => {
    return useQuery({
        queryKey: ['popularMovies'],
        queryFn: fetchPopularMovies,
        select: (result) => result.data,
        staleTime: 1000 * 60 * 5, // 5 minutes
        refetchInterval: 1000 * 60 * 10 // 10 minutes
    })
}