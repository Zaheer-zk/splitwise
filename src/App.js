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
  const [selectedFriend, setSelectedFriend] = useState(null)

  const addNewFriend = (friend) => {
    setFriends((friends) => [...friends, friend])
    setShowAddFriend(false)
  }

  const handleSelection = (friend) => {
    setSelectedFriend(friend)
  }

  return (
    <div className='app'>
      <div className='sidebar'>
        <FriendsList friends={friends} onSelection={handleSelection} selectedFriend={selectedFriend}/>

        {showAddFriend && <FromAddFriend onAddFriend={addNewFriend}/>}
        {
          <Button onClick={() => setShowAddFriend(!showAddFriend)}>{showAddFriend ? 'Close' : 'Add friend'}</Button>
        }
      </div>
        
      {selectedFriend ? <FromSplitBill selectedFriend={selectedFriend}/> : ''}
    </div>
  )
}

export default App