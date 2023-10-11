import { SetStateAction, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './components/Header'
import InputField from './components/InputField'
import{Todo} from "./model"
import TodoList from './components/TodoList'

function App() {
  const [todo, setTodo] = useState<string>("")
  const [todos,setTodos]=useState<Todo[]>([{id:1,todo:"read",isDone:false},{id:2,todo:"eat",isDone:true},{id:3,todo:"sleep",isDone:false}])

  const handleAdd= (e:React.FormEvent)=>{
    e.preventDefault();    
    if(todo){
      setTodos( [...todos,{id:Date.now(),todo:todo,isDone:false}])
      setTodo("")
    }
  }
  
  console.log(todos)


  return (
    <>
    <div className='app'>
      <Header/>
      <InputField todo={todo} settodo={setTodo} handleadd={handleAdd} />
      <TodoList todos={todos} setTodos={setTodos}  />

    </div>
    
    
    </>
     
  )
}

export default App
