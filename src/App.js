import React from 'react'
import FriendsList from './FriendsList'
import FromAddFriend from './FromAddFriend'
import Button from './Button'
import FromSplitBill from './FormSplitBill'
import { useState } from 'react'

const App = () => {
  const [showAddFriend, setShowAddFriend] = useState(false)

  return (
    <div className='app'>
      <div className='sidebar'>
        <FriendsList/>
        {showAddFriend && <FromAddFriend/>}
        {
          <Button onClick={() => setShowAddFriend(!showAddFriend)}>{showAddFriend ? 'Close' : 'Add friend'}</Button>
        }
      </div>

      <FromSplitBill/>
    </div>
  )
}

export default App