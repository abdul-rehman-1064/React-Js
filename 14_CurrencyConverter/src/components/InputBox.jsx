import React,{useId} from 'react'


function InputBox({
    label,
    amount,
    onAmountChange,
    currency ='',
    currencyList =[],
    onCurrencyChange,
    className = "",
    ...props
}) {

    const AmountId = useId();
   

    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className} `}>
            <div className="w-1/2">
                <label htmlFor={AmountId} className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    id={AmountId}
                    value={amount}
                    onChange={(e)=>onAmountChange && onAmountChange(Number(e.target.value))}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={currency}
                    {...props}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(Number(e.target.value))}
                >
                    
                        {
                            currencyList.map((item) => (
                                <option key={item} value={item}>
                                    {item.toUpperCase()}
                                </option>
                            ))
                        }
                
                </select>
            </div>
        </div>
    );
}

export default InputBox;
