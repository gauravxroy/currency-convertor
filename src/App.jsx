import Img from "./assets/coin.jpg";
import InputBox from "./InputBox";
import { useState, useEffect } from "react";
import useCurrencyinfo from "./hooks/useCurrencyinfo";
function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyinfo(from);

  const options = Object.keys(currencyInfo);

  // function swap() {
  //   setFrom(to);
  //   setTo(from);
  // }

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('${Img}')`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                currencyArray={options}
                label="From"
                amount={amount}
                onAmountChange={(amount) => {
                  setAmount(amount);
                }}
                onCurrencyChange={(currency) => {
                  setTo(currency);
                }}
                selectCurrency={from}
                amountDisable
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                //same as swap function , in events functions like onClick,onChange we don't use () , because if we do then it willl called immideate without click is triggered, but if not used it will triggered when the click event is called
                onClick={() => {
                  setFrom(to);
                  setTo(from);
                  setConvertedAmount(amount);
                  // convertedAmount(amount);
                }}
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                amount={convertedAmount}
                currencyArray={options}
                label="To"
                onAmountChange={(amount) => {
                  setAmount(amount);
                }}
                onCurrencyChange={(currency) => {
                  setTo(currency);
                }}
                selectCurrency={to}
              />
            </div>
            <button
              // onClick={convert}
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
            >
              Convert {from} to {to}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
