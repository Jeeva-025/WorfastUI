import React from 'react'

const Customer = ({item}) => {
  return (
    <div className="max-w-[350px] p-4 h-auto flex flex-col space-y-1 border border-white-100 rounded-lg shadow-md">
        <img src={item.photo}/>
        <h1 className="text-base font-semibold">{item.name}</h1>
        <h1>{item.destination}</h1>
        <p className="text-xs text-gray-600">{item.feedback}</p>
    </div>
  )
}

export default Customer