import { useState } from "react";
import Button from "./Button"

const FromSplitBill = ({selectedFriend, handleSubmitSplit}) => {
    const [billValue, setBillValue] = useState(0);
    const [myExpense, setExpenseValue] = useState(0);
    const [friendExpense, setFriendExpenseValue] = useState(0);

    return (
        <form className="form-split-bill" onSubmit={handleSubmitSplit}>
            <h2>Split a bill with {selectedFriend.name}</h2>

            <label>💰 Bill value</label>
            <input type="text" value={billValue} onChange={e => setBillValue(e.target.value)}/>

            <label>💴 Your expense</label>
            <input type="text" value={myExpense} onChange={e => setExpenseValue(e.target.value)}/>

            <label>💴 {selectedFriend.name}'s expense</label>
            <input type="text" disabled value={friendExpense}/>
            
            <label>🤑 Who is paying the bill</label>
            <select>
                <option value="user">You</option>
                <option value="friend">{selectedFriend.name}</option>
            </select>

            <Button>Split Bill</Button>
        </form>
    )
}

export default FromSplitBill