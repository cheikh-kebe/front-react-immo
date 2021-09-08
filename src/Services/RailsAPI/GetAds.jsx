import { useEffect, useState } from "react"
import Cookies from "js-cookie";
const GetAds = (URL) => {
    const [data, setData] = useState(null);
    const token = Cookies.get('token')
    useEffect(() => {
      const fetchData = async() => {
        try {
            const res = await fetch(URL,{
              method: "GET",
              headers: {
                 'Content-Type': ' application/json',
                  Authorization: `Bearer ${token}`
                   }});

            console.log(res)
            console.log("hey")
            if (res.status === 200) {
                const data = await res.json();
                setData(data);
            }
        }
        catch(error){
            console.error(error);
        }
      }
      fetchData();
    },[URL])
    return { data }
}

export default GetAds