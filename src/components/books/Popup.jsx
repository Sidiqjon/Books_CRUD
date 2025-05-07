import React, { useEffect, useRef, useState } from "react"

const Popup = ({ setOpen, setData, edit, setEdit }) => {
  const title = useRef(null)
  const [desc, setDesc] = useState("")
  const [price, setPrice] = useState("")
  const [author, setAuthor] = useState("")
  const [stockCount, setStockCount] = useState("")
  const [genre, setGenre] = useState("")
  const [url, setUrl] = useState("")

  useEffect(() => {
    if (edit) {
      title.current.value = edit.title
      setDesc(edit.desc)
      setPrice(edit.price)
      setAuthor(edit.author)
      setStockCount(edit.stockCount)
      setGenre(edit.genre)
      setUrl(edit.url)
    }
  }, [edit])

  const handleSubmit = (e) => {
    e.preventDefault()
    const book = {
      title: title.current.value,
      desc,
      price,
      author,
      stockCount,
      genre,
      url,
      id: edit ? edit.id : new Date().getTime()
    }

    if (edit) {
      setData(prev => prev.map(item => item.id === edit.id ? book : item))
    } else {
      setData(prev => [...prev, book])
    }

    setOpen(false)
    setEdit(null)
    setDesc("")
    setPrice("")
    setAuthor("")
    setStockCount("")
    setGenre("")
    setUrl("")
    title.current.value = ""
  }

  return (
    <>
      <div onClick={() => setOpen(false)} className="fixed top-0 left-0 w-full h-full bg-black opacity-40 z-40"></div>
      <div className="fixed top-1/2 left-1/2 bg-white z-50 p-6 rounded-lg shadow w-[95%] max-w-lg -translate-x-1/2 -translate-y-1/2">
        <button
          onClick={() => setOpen(false)}
          className="absolute top-[8px] right-[8px] text-[16px] bg-transparent border-none cursor-pointer transition-transform duration-200 ease-in-out hover:scale-125 hover:text-red-600">
          ❌
        </button>
        <h2 className="text-2xl font-bold mb-4">{edit ? "Update Book" : "Add New Book"}</h2>
        <form onSubmit={handleSubmit} className="grid gap-4">
          <input ref={title} required placeholder="Title" className="border rounded px-3 py-2 w-full" type="text" />
          <input value={desc} onChange={e => setDesc(e.target.value)} required placeholder="Description" className="border rounded px-3 py-2 w-full" type="text" />
          <input value={price} onChange={e => setPrice(e.target.value)} required placeholder="Price" className="border rounded px-3 py-2 w-full" type="number" />
          <input value={author} onChange={e => setAuthor(e.target.value)} required placeholder="Author" className="border rounded px-3 py-2 w-full" type="text" />
          <input value={stockCount} onChange={e => setStockCount(e.target.value)} required placeholder="Stock Count" className="border rounded px-3 py-2 w-full" type="number" />
          <input value={genre} onChange={e => setGenre(e.target.value)} required placeholder="Genre" className="border rounded px-3 py-2 w-full" type="text" />
          <input value={url} onChange={e => setUrl(e.target.value)} required placeholder="Image URL" className="border rounded px-3 py-2 w-full" type="text" />
          <button className="bg-blue-600 text-white px-4 py-2 rounded">{edit ? "Update" : "Submit"}</button>
        </form>
      </div>
    </>
  )
}

export default Popup
