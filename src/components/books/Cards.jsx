import React, { memo } from "react"
import book from "../../assets/book.jpg"

const Cards = ({ data, setData, setEdit, setOpen }) => {
  const handleDelete = (id) => {
    if (confirm("Are you sure?")) {
      setData(prev => prev.filter(item => item.id !== id))
    }
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {data.map(item => (
        <div key={item.id} className="bg-white rounded-lg shadow border p-4">
          <div className="w-full h-40 bg-gray-200 rounded mb-4 overflow-hidden">
          <img
            src={item.url}
            onError={(e) => (e.currentTarget.src = book)}
            alt="Book Cover"
            className="w-full h-full object-cover"/>
          </div>
          <h3 className="text-xl font-bold mb-1">{item.title}</h3>
          <p className="text-gray-700 mb-2">{item.desc}</p>
          <div className="text-sm text-gray-600 space-y-1 mb-3">
            <p><span className="font-semibold">Author:</span> {item.author}</p>
            <p><span className="font-semibold">Genre:</span> {item.genre}</p>
            <p><span className="font-semibold">Price:</span> ${item.price}</p>
            <p><span className="font-semibold">Stock:</span> {item.stockCount}</p>
          </div>
          <div className="flex justify-between">
            <button
              onClick={() => {
                setEdit(item)
                setOpen(true)
              }}
              className="bg-green-500 text-white px-4 py-1 rounded"
            >
              Edit
            </button>
            <button
              onClick={() => handleDelete(item.id)}
              className="bg-red-500 text-white px-4 py-1 rounded"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default memo(Cards)
