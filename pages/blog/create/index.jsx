import React, {useState} from 'react'
import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import dynamic from "next/dynamic";
import * as commands from "@uiw/react-md-editor/commands"


const MDEditor = dynamic(
    () => import("@uiw/react-md-editor"),
    { ssr: false}
  );
  


import styles from '../../../styles/brand-bio.module.css'
export default function Create() {
  const [value, setValue] = useState("**Hello world!!!**");
  
  const submit = (e)=>{
    e.preventDefault()
    console.log('Article submit button clicked')
    console.log(value)
  }

    const inputChangeHandler = (e) => {
        const { name, value } = e.target
        setFormData((prevValue) => {
          return {
            ...prevValue,
            [name]: value
          }
        })
        console.log("Form Data: ", formData)
      }
    
  return (
    <>
    <section style={{padding:20}}>
      <form onSubmit={submit}>
      <div data-color-mode="light" className='p-5'>
        <div className="wmde-markdown-var"> </div>

        <MDEditor preview="edit" value={value}  onChange={setValue} />
      </div> 

      <button style={{backgroundColor:'black'}} className='ml-5 text-white p-3' type="submit">Submit Article</button>  
      </form> 
    </section> <br /><br />


    </>
  )
}
