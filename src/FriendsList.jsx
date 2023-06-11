import React from 'react'
import initialFriends from './data'
import Friend from './Friend'

const FriendsList = () => {
  return (
    <ul>
    {initialFriends.map((friend) => (
        <Friend friend={friend} key={friend.id}/>
    ))}
    </ul>
  )
}

export default FriendsList