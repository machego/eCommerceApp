import { useEffect, useState } from "react"
import { makeRequest } from "../makeRequest"

const useFetch = async (url) => {

    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true)
                const res = await makeRequest.get(url,
                    {
                        headers: {
                            Authorization: "bearer " + process.env.REACT_APP_API_TOKEN,
                        },
                    }
                );
                setData(res.data.data)
            } catch (err) {
                setError(true)
            }
            setLoading(false)
        }
    }, [url]);

    return { data, loading, error };
};

export default useFetch;