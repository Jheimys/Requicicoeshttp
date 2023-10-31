import { useEffect, useState } from "react"


const useDataFetching = (apiUrl) => {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        async function fetchData(){
            try {
                const response = await fetch(apiUrl)

                if(!response){
                    throw new Error('Network request failed')
                }

                const jsonData = await response.json()

                setData(jsonData)
                setLoading(false)

            } catch (error) {
                setError(error)
                setLoading(false)
            }
        } 

        fetchData()
    }, [apiUrl])

  return (
    {data, loading, error}
  )
}

export default useDataFetching