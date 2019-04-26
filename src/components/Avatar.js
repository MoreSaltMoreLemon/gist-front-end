import React from 'react'

const Avatar = ({user}) => {
  return (
    <div className='avatar'>
      <div className='avatar-name'>{user.username}</div>
      <div className='avatar-image'>{user.avatarImageUrl}</div>
    </div>
  )
}

export default Avatar