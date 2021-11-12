import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";

const BankAccount = () =>{
    const account = useSelector((state) => state.account);
    const [balance, setBalance] = useState(account.balance);
    useEffect(() => {
        setBalance(account.balance)
    })
    const [amount, setAmount] = useState(0);
    const dispatch = useDispatch();

    const handleAmountChange = (event) => {
        setAmount(parseInt(event.target.value))
    };
    const depositHandler = () => {
        dispatch({
            type: 'deposit',
            amount: amount
        });
    };
    const withdrawHandler = () => {
        dispatch({
            type: 'withdraw',
            amount: amount
        });
    };
    return(
        <div>
            <h2>Bank Account for: {account.name}</h2>
            <h3>Balance: {balance}</h3>
            Amount: <input type='number' value={amount} onChange={handleAmountChange}/>
            <button onClick={depositHandler}>Deposit</button>
            <button onClick={withdrawHandler}>Withdraw</button>
        </div>
    )
}
export default BankAccount;