// import React, { useRef, useState, memo, useEffect } from "react";

// const Form = ({setData, edit}) => {
//     const title = useRef(null)
//     const [desc, setDesc] = useState("")
   
//     useEffect(()=>{
//       if(edit){
//         setDesc(edit.desc)
//         title.current.value = edit.title
//        }
//     }, [edit])

//     const handleSubmit = (e) => {
//         e.preventDefault()

//         if(edit){
//           let updateBook = {
//             title: title.current.value,
//             desc,
//             id: edit.id
//           }
//           setData(prev => prev.map(item => item.id === edit.id ? updateBook : item))
//         }else{
//           const newBook = {
//               title: title.current.value,
//               desc,
//               id: new Date().getTime()
//           }
//           setData(prev => ([...prev, newBook]))
//         }
//         setDesc("")
//         title.current.value = ""
//     }
    
//   return (
//     <form
//       className="shadow p-5 border border-gray-100 rounded   flex gap-3 my-6"
//       action=""
//       onSubmit={handleSubmit}
//     >
//       <input
//         className="border border-gray-200 outline-0 indent-2.5 flex-1 h-10 rounded focus:border-gray-500 focus:shadow"
//         type="text"
//         ref={title}
//         required
//       />
//       <input
//         className="border border-gray-200 outline-0 indent-2.5 flex-1 h-10 rounded focus:border-gray-500 focus:shadow"
//         type="text"
//         value={desc}
//         onChange={(event)=> setDesc(event.target.value)}
//         required
//       />
//       <button className="h-10 bg-slate-800 text-white px-5 rounded">
//         {edit ? "Update" : "Submit"}
//       </button>
//     </form>
//   );
// };

// export default memo(Form);





