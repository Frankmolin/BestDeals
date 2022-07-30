import axios from "axios";
import { useState, useEffect } from "react";

const useFetch = (url: string,canceltoken?:any) => {
  
  const [data, setData] = useState<any>([]);
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setLoading(true)
    axios.get(url,canceltoken&&{cancelToken:canceltoken.token})
      .then((data) => {
        setData(data.data)
        setLoading(false)
      })
      .catch(error => console.error(error));;
  }, [url]);

  return [data, loading,setData];
};

export default useFetch;
