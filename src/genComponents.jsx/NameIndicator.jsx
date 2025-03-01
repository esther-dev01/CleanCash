import React from 'react'

function NameIndicator({ name }) {
  return (
    <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-lg shadow-md">
      <span className="text-black font-bold">Recycler</span>
      <span className="text-green-500 font-bold">{name || "User"}</span>
    </div>
  )
}

export default NameIndicator
