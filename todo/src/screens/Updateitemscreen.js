import React from 'react'
import { useState, useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { editItem } from '../actions/itemAction';

import '../index.css';
// import Error from '../components/Error';
// import Loading from '../components/Loading';
// import Success from '../components/Success';

export default function Updateitemscreen({todo}) {
    const [title, settitle] = useState(todo.title);
    const [date, setdate] = useState(todo.date);
    const [description, setdescription] = useState(todo.description);
    // const [title, settitle] = useState('');
    // const [date, setdate] = useState('');
    // const [description, setdescription] = useState('');

    // const registerstate = useSelector(state => state.registerUserReducer)
    // const {error , loading , success}=registerstate
    const dispatch = useDispatch()

    function handleupdate(){
        
            const item={
                title,
                date,
                description
            }
            console.log(item);
            dispatch(editItem(todo._id,item))
            
        }
    
    return (
        <div>
            <div className="row justify-content-center mt-5">
                <div className="col-md-10 mt-5 text-left shadow-lg p-3 mb-5 bg-white rounded">

                    {/* {loading && (<Loading/>)}
                    {success && (<Success success='User registered successfully'/>)}
                    {error && (<Error error='date already registered'/>)} */}

                    <h2 className='text-center mt-1' style={{ fontSize: '25px' }}>Update TODO</h2>
                    <div>
                        <input required type="text" placeholder='title' className='form-control'  value={title} onChange={(e)=>{settitle(e.target.value)}}/>
                        <input required type="text" placeholder='date' className='form-control' value={date} onChange={(e)=>{setdate(e.target.value)}}/>
                        <input required type="text" placeholder='description' className='form-control' value={description} onChange={(e)=>{setdescription(e.target.value)}} />
                       <button onClick={handleupdate} className="btn mt-2 mb-2">UPDATE</button>
                        <br></br>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}
