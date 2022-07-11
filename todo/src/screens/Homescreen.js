import React, {useState,useEffect} from 'react'
import Todo from '../components/Todo'
// import todos from '../tododata'
import { useDispatch, useSelector } from 'react-redux'
import { getAllItems } from '../actions/itemAction'
// import { getAllItemsReducer } from '../reducers/itemReducer'


export default function Homescreen() {
    
    const dispatch = useDispatch()
    const itemsstate = useSelector(state => state.getAllItemsReducer)

    const { items , error ,loading } = itemsstate
    useEffect(() => {
        dispatch(getAllItems())
      
      }, [])

  return (
    <div>
        <div className="row">
            <h2> List of Your TODO's</h2>
            <h2> There are {items.length} tasks left </h2>
            
            {items.map(todo=>{
                return <div className="col-md-8">   
                    <div key={todo._id}>
                        <Todo todo={todo}/>
                    </div>
                </div>
            })}




        </div>
    </div>
  )
}
