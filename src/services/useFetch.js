import { useEffect, useState } from "react"

const useFetch = (URL) => {
    const [loading, setLoading] = useState(null);
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchData = async() => {
            try {
                const res = await fetch(URL);
                setLoading('loading...');
                if (res.status === 200) {
                    const data = await res.json();
                    setData(data);
                }
                else (
                    setError("oh, no! something went wrong")
                )
            }
            catch(error){
                console.error(error)
            }
        }
        fetchData();
    },[])
    return [loading, data, error]
}

export default useFetch