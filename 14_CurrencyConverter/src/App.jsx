import React , {useState} from 'react'
import InputBox from './components/InputBox'
import useCurrencyData from './hooks/CurrencyData';



function App() {
    const [fromCurrency, setFromCurrency] = useState('usd');
    const [toCurrency, setToCurrency] = useState('pkr');
    const [amount, setAmount] = useState("");
    const [convertedAmount, setConvertedAmount] = useState("");

    const currencyData = useCurrencyData(fromCurrency);

    const currencyList = Object.keys(currencyData);

    const dataChange = ()=>{
        setToCurrency(fromCurrency);
        setFromCurrency(toCurrency);
        setConvertedAmount(amount);
        setAmount(convertedAmount);
    }
  
    const totalConvertAmount = ()=>{
        setConvertedAmount(Math.ceil(amount * currencyData[toCurrency]));
        console.log(Math.ceil(amount*currencyData[toCurrency]));
        
    }

    return (
        <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat bg-[#212121]"
            
        >
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                           totalConvertAmount();
                        }}
                    >
                        <div className="w-full mb-1">
                            <InputBox
                                label="From"
                                amount={amount}
                                onAmountChange={(amount)=> setAmount(amount)}
                                onCurrencyChange={(currency)=> setAmount(amount)}
                                currency={fromCurrency}
                                currencyList={currencyList}
                                
                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                onClick={dataChange}
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <InputBox
                                label="To"
                                amount={convertedAmount }
                                // onAmountChange={(amount)=> setConvertedAmount(amount)}
                                onCurrencyChange={(currency)=>setToCurrency(currency)}
                                currency={fromCurrency}
                                currencyList={currencyList}
                                // value={toCurrency}
                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                            Convert {fromCurrency.toUpperCase()} to {toCurrency.toUpperCase()}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default App;