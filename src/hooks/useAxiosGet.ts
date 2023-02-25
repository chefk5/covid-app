import { useState, useEffect } from 'react'
import axios, { AxiosResponse } from 'axios'

type UseAxiosGetReturnType<T> = {
	data: T | null
	loading: boolean
	error: string | null
}

function useAxiosGet<T>(url: string): UseAxiosGetReturnType<T> {
	const [data, setData] = useState<T | null>(null)
	const [loading, setLoading] = useState<boolean>(true)
	const [error, setError] = useState<string | null>(null)

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response: AxiosResponse<T> = await axios.get(url)
				setData(response.data)
			} catch (err: any) {
				setError(err.message || 'Something went wrong!')
			} finally {
				setLoading(false)
			}
		}

		fetchData()
	}, [url])

	return { data, loading, error }
}

export default useAxiosGet
