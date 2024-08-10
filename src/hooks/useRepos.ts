import api from '../api/github';
import { useQuery } from "@tanstack/react-query";


async function fetchRepos() {
    const { data } = await api.get('/users/jossnc/repos')
    return data
}

export function useFetchRepositories() {
    return useQuery({
        queryKey: ['repos'],
        queryFn: fetchRepos,
    });
}

