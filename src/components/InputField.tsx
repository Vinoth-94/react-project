import React, { useRef } from 'react'
import"./style.css"

interface Props{
    todo:string,
    settodo:React.Dispatch<React.SetStateAction<string>>
    handleadd:(e:React.FormEvent)=>void

}

const InputField = ({todo,settodo ,handleadd}:Props) => {
  const inputRef = useRef<HTMLInputElement>(null)
  return (
    <form className='input'>
        <input type="text" ref={inputRef} placeholder="Enter a Task " name="task_input" value={todo} onChange={(e)=> settodo(e.target.value)} className='input_box' />
        <input className="input_submit" type="submit" value=" Go" onClick={(e)=>{handleadd(e) ; inputRef.current?.blur()}}  />
    </form>
  )
}

export default InputField