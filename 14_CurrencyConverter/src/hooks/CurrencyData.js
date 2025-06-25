import { useEffect,useState } from 'react';


function useCurrencyData(currency) {
    const [data, setData] = useState({});
    useEffect(() => {
            fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
            .then((response) => response.json())
            .then((res) => setData(res[currency])
                // console.log(data);   
            )
        // console.log(data);
    }, [currency])
        // console.log(data);
      return data;
      
      
}

export default useCurrencyData;

