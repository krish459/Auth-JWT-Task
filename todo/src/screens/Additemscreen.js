import React from 'react'
import { useState, useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { addItem } from '../actions/itemAction';
import '../index.css';
// import Error from '../components/Error';
// import Loading from '../components/Loading';
// import Success from '../components/Success';


export default function Additemscreen() {
    const [title, settitle] = useState('');
    const [date, setdate] = useState('');
    const [description, setdescription] = useState('');

    // const registerstate = useSelector(state => state.registerUserReducer)
    // const {error , loading , success}=registerstate
    const dispatch = useDispatch()

    function register(){
        
            const item={
                title,
                date,
                description
            }
            console.log(item);
            dispatch(addItem(item))
            settitle('');
            setdate("");
            setdescription("");
        }
    
    return (
        <div>
            <div className="row justify-content-center mt-5">
                <div className="col-md-5 mt-5 text-left shadow-lg p-3 mb-5 bg-white rounded">

                    {/* {loading && (<Loading/>)}
                    {success && (<Success success='User registered successfully'/>)}
                    {error && (<Error error='date already registered'/>)} */}


                    <h2 className='text-center mt-2' style={{ fontSize: '35px' }}>Add TODO</h2>
                    <div>
                        <input required type="text" placeholder='title' className='form-control'  value={title} onChange={(e)=>{settitle(e.target.value)}}/>
                        <input required type="text" placeholder='date' className='form-control' value={date} onChange={(e)=>{setdate(e.target.value)}}/>
                        <input required type="text" placeholder='description' className='form-control' value={description} onChange={(e)=>{setdescription(e.target.value)}} />
                       <button onClick={register} className="btn mt-3 mb-3">ADD</button>
                        <br></br>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}
