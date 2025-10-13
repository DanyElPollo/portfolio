import { useEffect, useState } from "react"

const useFetchData = <T>(callback: () => Promise<T>) => {

  const [resState, setResState] = useState<T | null>(null)
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false)


  const fetchFunction = async () => {
    setIsLoading(true)
    setError(null)

    try {
      const response = await callback()
      setResState(response)
    } catch (error) {
      console.error("Falla" + error)
      setError(error instanceof Error ? error.message : String(error))
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchFunction()
  }, [])

  return { resState, error, isLoading }
}

export default useFetchData