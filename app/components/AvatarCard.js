import React from 'react'

const AvatarCard = ({ user }) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md flex flex-col items-center space-y-2 transition hover:scale-105 hover:shadow-lg duration-200">
      <img
        src={user.avatar}
        alt={`${user.first_name} ${user.last_name}`}
        className="w-24 h-24 rounded-full object-cover"
      />
      <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
        {user.first_name} {user.last_name}
      </h2>
      <button className="px-4 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
        Edit
      </button>
    </div>
  )
}

export default AvatarCard
