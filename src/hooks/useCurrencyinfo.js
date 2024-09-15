import { useEffect, useState } from "react";

function useCurrencyinfo(currency) {
  // const url = ;

  const [data, setData] = useState({});
  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
    )
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        // console.log(data);
        setData(res[currency]); //response is like where we are accessing inr key and // setdata {
        // "date": "2024-08-23",
        // "inr": {
        //   "1000sats": 37.74954679,
        //   "inr": 0.044533119,}
      })
      .catch((err) => {
        console.log(err);
      });
  }, [currency]);
  // console.log(data);
  return data;
}

export default useCurrencyinfo;
