import useSWR from 'swr';

const fetcher = (...args) => fetch(...args).then(res => res.json())

export default function useApi(url) {
    const { data, error } = useSWR(`https://pokeapi.co/api/v2/pokemon${url}`, fetcher)
    return {
        data: data,
        isLoading: !error && !data,
        isError: error
    }
}