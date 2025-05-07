import React, { useEffect, useState, memo } from "react"
import Cards from "./Cards"
import Popup from "./Popup"

const Books = () => {
  const [data, setData] = useState(JSON.parse(localStorage.getItem("data")) || [])
  const [edit, setEdit] = useState(null)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(data))
  }, [data])

  return (
    <div className="container mx-auto py-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold">Books</h2>
        <button
          onClick={() => {
            setEdit(null)
            setOpen(true)
          }}
          className="bg-blue-600 text-white px-6 py-2 rounded"
        >
          Add a new book
        </button>
      </div>

      {data.length > 0 && (
        <Cards data={data} setData={setData} setEdit={setEdit} setOpen={setOpen} />
      )}

      {open && (
        <Popup
          setOpen={setOpen}
          setData={setData}
          edit={edit}
          setEdit={setEdit}
        />
      )}
    </div>
  )
}

export default memo(Books)
