import { useCallback } from 'react'

export default function useHttp() {
  const request = useCallback(async (url, method="GET", body=null, headers={"Content-type": "application/json"}) => {
    try{
        const response = await fetch(url, {method, body, headers})
        if(!response){
            throw new Error(`Counld not fetch ${url}, status ${response.status}`)
        }
        const data = await response.json()
        return data
    }
    catch(e){
    }
  }, [])
  return {request}
}
