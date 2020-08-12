import useSWR from 'swr';

const fetcher = (...args) => fetch(...args).then(res => res.json())

export default function useApi(url) {
    const { data, error } = useSWR(url, fetcher)
    return {
        data: data,
        isLoading: !error && !data,
        isError: error
    }
}