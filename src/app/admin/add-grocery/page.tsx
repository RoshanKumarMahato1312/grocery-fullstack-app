"use client"
import { ArrowLeft, Loader, PlusCircle } from 'lucide-react'
import Link from 'next/link'
import React, { useState } from 'react'
import {motion} from "motion/react"
import Image from "next/image"
import axios from 'axios'

const categories=[
        "Fruit & Vegetables",
        "Dairy & Eggs",
        "Rice, Atta & Grains",
        "Snacks & Biscuits",
        "Spices & Masalas",
        "Beverages & Drinks",
        "Personal Care",
        "Household Essentials",
        "Instant & Packaged Food",
        "Baby & Pet Care",
]
const units=[
  "kg","g","liter","ml","price","pack"
]

function AddGrocery() {
  const [name,setname]=useState("")
  const [category,setCategory] = useState("")
  const [unit,setUnit] = useState("")
  const [price,setPrice] = useState("")
  const [preview,setPreview] = useState<string | null>()
  const [loading,setLoading] = useState(false)
  const [backendImage, setBackendImage] = useState<Blob | null>()
  const handleImageChange=(e:ChangeEvent<HTMLInputElement>)=>{
    const files=e.target.files 
    if(!files || files.length==0) return 
    const file=files[0]
    setBackendImage(file)
    setPreview(URL.createObjectURL(file))
  } 
  const handleSubmit=async (e:FormEvent)=>{
    e.preventDefault()
    setLoading(true)
    try {
      const formData= new FormData()
      formData.append("name",name)
      formData.append("category",category)
      formData.append("price",price)
      formData.append("unit",unit)
      if(backendImage){
        formData.append("image",backendImage)
      }
      const result=await axios.post("/api/admin/add-grocery",formData)
      console.log(result.data)
      setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }

  return (
    <div className='min-h-screen flex items-center justify-center bg-linear-to-br grom-blue-50 to-white py-16 px-4 relative'>
      <Link href={"/"} className='absolute top-6 left-6 flex items-center gap-2 text-blue-700 font-semibold bg-white px-4 py-2 rounded-full shadow-md hover:bg-blue-100 hover:shadow-lg transition-all'>
      <ArrowLeft className='w-5 h-5'/>
      <span className='hidden md:flex'>Back to home</span>
      </Link>
      <motion.div
      initial={{y:20,opacity:0}}
      animate={{y:20,opacity:1}}
      className='bg-white w-full max-w-2xl shadow-3xl rounded-3xl border border-blue-100 p-8'
      >
        <div className='flex flex-col items-center mb-8'>
          <div className='flex itmes-center gap-3'>
            <PlusCircle className='text-blue-600 w-8 h-8'/>
            <h1>Add Your Grocery</h1>
          </div>
          <p className='text-gray-500 text-sm mt-2 text-center'>Fill out the details below to add a new grocery item.</p>

        </div>
        <form className='flex flex-col gap-6 w-full' onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className='block text-gray-700 font-medium mb-1'>
              Grocery Name 
              <span className='text-red-500'>*</span></label>
              <input type="text" id='name' placeholder='Sweets,Milk ...' className='w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-400 transition-all' onChange={(e)=>setname(e.target.value)} value={name}/>
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-3'>
            <div>
              <label className='block text-gray-700 font-medium mb-1'>Category<span className='text-red-500'>*</span></label>
              <select name="category" className='w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-400 transition-all bg-white' onChange={(e)=>setCategory(e.target.value)} value={category}>
                <option value="">Select Category</option>
                {categories.map(cat=>(
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>
            <div>
              <label className='block text-gray-700 font-medium mb-1'>Unit<span className='text-red-500'>*</span></label>
              <select name="category" className='w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-400 transition-all bg-white' onChange={(e)=>setUnit(e.target.value) } value={unit}>
                <option value="">Select Unit</option>
                {units.map(cat=>(
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>
          </div>
          <div>
            <label htmlFor="name" className='block text-gray-700 font-medium mb-1'>
              Price
              <span className='text-red-500'>*</span></label>
              <input type="text" id='name' placeholder='eg:120' className='w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-400 transition-all' onChange={(e)=>setPrice(e.target.value)} value={price}/>
          </div>
          <div className='flex flex-col sm:flex-row items-center gap-5'>
            <label htmlFor="image" className='cursor-pointer flex items-center justify-center gap-2 bg-blue-50 text-blue-700 font-semibold border border-blue-200 rounded-xl px-6 py-3 hover:bg-blue-100 transition-all w-full sm:w-auto'>
              Upload Image
              </label>
              <input type="file" id="image" accept="image/*" hidden onChange={handleImageChange}/>
                {preview && <Image src={preview} width={100} height={100} alt="image" className='rounded-xl shadow-md border border-gray-200 object-cover'/>}
          </div>
          <motion.button
          whileHover={{scale:1.02}}
          whileTap={{scale:0.9}}
          disabled={loading}
          className='mt-4 w-full bg-linear-to-r from-blue-500 to-blue-700 text-white font-semibold py-3 rounded-xl shadow-lg hover:shadow-xl disabled:opacity-60 transition-all flex items-center justify-center gap-2'
          >
            {loading?<Loader className='w-5 h-5 animate-spin '/>: "Add Grocery"}
           

          </motion.button>
        </form>
      </motion.div>
    </div>
  )
}

export default AddGrocery