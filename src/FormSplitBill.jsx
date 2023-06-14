import { useState } from "react";
import Button from "./Button"
import initialFriends from "./data";

const FromSplitBill = ({selectedFriend}) => {
    const [billValue, setBillValue] = useState(0);
    const [myExpense, setExpenseValue] = useState(0);
    const [friendExpense, setFriendExpenseValue] = useState(0);

    const handleBillValueChange = (e) => {
        const value = e.target.value;
        setExpenseValue(value);
        setFriendExpenseValue(billValue - value);
    }

    const handleSubmitSplit = (e) => {
        e.preventDefault();
        const friendData = initialFriends.filter((friend) => (friend.id === selectedFriend.id));
        console.log('friendData: ', friendData);
    }

    return (
        <form className="form-split-bill" onSubmit={(e) => handleSubmitSplit(e)}>
            <h2>Split a bill with {selectedFriend.name}</h2>

            <label>💰 Bill value</label>
            <input type="text" value={billValue} onChange={e => setBillValue(e.target.value)}/>

            <label>💴 Your expense</label>
            <input type="text" value={myExpense} onChange={e => handleBillValueChange(e)}/>

            <label>💴 {selectedFriend.name}'s expense</label>
            <input type="text" disabled value={friendExpense}/>
            
            <label>🤑 Who is paying the bill</label>
            <select>
                <option value="user">You</option>
                <option value="friend">{selectedFriend.name}</option>
            </select>

            <Button type="submit" onClick={handleSubmitSplit}>Split Bill</Button>
            {console.log(selectedFriend)}
        </form>
    )
}

export default FromSplitBill