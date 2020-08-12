import useSWR from 'swr';

const fetcher = (...args) => fetch(...args).then(res => res.json())

export default function useApi(pokemon) {
    const { data, error } = useSWR(`https://pokeapi.co/api/v2/pokemon/${pokemon}`, fetcher)
    return {
        data: data,
        isLoading: !error && !data,
        isError: error
    }
}