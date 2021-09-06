import { useEffect, useState } from "react"

const GetAds = (URL) => {
    //const [loading, setLoading] = useState(false);
    const [data, setData] = useState(null);
    //const [error, setError] = useState(null);
    useEffect(() => {
        const fetchData = async() => {
            try {
                const res = await fetch(URL);
                //setLoading(true);
                if (res.status === 200) {
                    const data = await res.json();
                    setData(data);
                    //setLoading(false);
                }
            }
            catch(error){
                console.error(error);
                //setError("oh, no! something went wrong");
                //setLoading(false);
            }
        }
        fetchData();
    },[URL])
    return { data} //loading, error
}

export default GetAds