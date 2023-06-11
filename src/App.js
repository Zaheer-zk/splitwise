import React from 'react'
import FriendsList from './FriendsList'
import FromAddFriend from './FromAddFriend'
import Button from './Button'
import FromSplitBill from './FormSplitBill'
import initialFriends from './data'
import { useState } from 'react'

const App = () => {
  const [showAddFriend, setShowAddFriend] = useState(false)
  const [friends, setFriends] = useState(initialFriends)

  const addNewFriend = (friend) => {
    setFriends((friends) => [...friends, friend])
    setShowAddFriend(false)
  }

  return (
    <div className='app'>
      <div className='sidebar'>
        <FriendsList friends={friends}/>
        {showAddFriend && <FromAddFriend onAddFriend={addNewFriend}/>}
        {
          <Button onClick={() => setShowAddFriend(!showAddFriend)}>{showAddFriend ? 'Close' : 'Add friend'}</Button>
        }
      </div>

      <FromSplitBill/>
    </div>
  )
}

export default App