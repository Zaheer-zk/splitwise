import { useState } from "react";
import Button from "./Button"
import initialFriends from "./data";

const FromSplitBill = ({selectedFriend, onSplitValue}) => {
    const [billValue, setBillValue] = useState("");
    const [myExpense, setExpenseValue] = useState("");
    const friendExpense = billValue ? billValue - myExpense : "";
    const [whoIsPaying, setWhoIsPaying] = useState('user');

    const handleSubmitSplit = (e) => {
        e.preventDefault();
        if(!billValue || !myExpense) return;
        onSplitValue(whoIsPaying === 'user' ? friendExpense : -myExpense)
    }

    return (
        <form className="form-split-bill" onSubmit={(e) => handleSubmitSplit(e)}>
            <h2>Split a bill with {selectedFriend.name}</h2>

            <label>💰 Bill value</label>
            <input type="text" value={billValue} onChange={e => setBillValue(Number(e.target.value))}/>

            <label>💴 Your expense</label>
            <input type="text" value={myExpense} onChange={e => setExpenseValue(Number(e.target.value) > billValue ? myExpense : e.target.value)}/>

            <label>💴 {selectedFriend.name}'s expense</label>
            <input type="text" disabled value={friendExpense}/>
            
            <label>🤑 Who is paying the bill</label>
            <select value={whoIsPaying} onChange={e => setWhoIsPaying(e.target.value)}>
                <option value="user">You</option>
                <option value="friend">{selectedFriend.name}</option>
            </select>

            <Button>Split Bill</Button>
        </form>
    )
}

export default FromSplitBill