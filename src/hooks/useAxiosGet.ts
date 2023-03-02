import { useState, useEffect } from 'react'
import axios, { AxiosResponse } from 'axios'
import { IGeneralData } from '../interfaces'

type UseAxiosGetReturnType = {
	data: IGeneralData | null
	loading: boolean
	error: string | null
	loadingCount: number
}

function useAxiosGet<T extends IGeneralData>(
	url: string
): UseAxiosGetReturnType {
	const [data, setData] = useState<IGeneralData | null>(null)
	const [loading, setLoading] = useState<boolean>(true)
	const [error, setError] = useState<string | null>(null)
	const [loadingCount, setLoadingCount] = useState<number>(0)

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response: AxiosResponse<T> = await axios.get(url, {
					onDownloadProgress: (progressEvent: any) => {
						setLoadingCount(
							Math.round((progressEvent.loaded * 100) / progressEvent.total)
						)
					},
				})
				setData(response.data)
			} catch (err: any) {
				setError(err.message || 'Something went wrong!')
			} finally {
				setLoading(false)
			}
		}

		fetchData()
	}, [url])

	return { data, loading, error, loadingCount }
}

export default useAxiosGet
