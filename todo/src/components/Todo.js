import React, { useState, useEffect } from 'react'
import { Modal } from 'react-bootstrap';

import {useDispatch, useSelector} from 'react-redux'
import { editItem } from '../actions/itemAction';
import { deleteItem } from '../actions/itemAction';
// import { getAllItems } from '../actions/itemAction'
import '../index.css';
import Updateitemscreen from '../screens/Updateitemscreen';


export default function Todo( {todo} ) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const [showupdate, setShowupdate] = useState(false);
    const handleupdateClose = () => setShowupdate(false);
    const handleupdateShow = () => setShowupdate(true);

    const dispatch = useDispatch()

    
    


    function handleDelete(){
        var id = todo._id;
        
        dispatch(deleteItem(id,todo))
    }
    
    return (
        <div style={{ margin: '17px' }} className='shadow-lg p-3 mb-2 bg-white rounded border'>
            <div onClick={handleShow}>
                <h1 style={{ fontSize: '20px' }}>{todo.title}</h1>
            </div>


            <div className="flex-container">
                <div className='m-1 w-100'>
                    <h1 style={{ fontSize: '20px' }} className='mt-1'>
                    Date : {todo.date}
                    </h1>
                </div>
            </div>
                <div className='m-1 w-100'>
                    <button className="btn mx-2" onClick={()=>handleupdateShow()}>
                        <a>Edit</a>
                    </button>
                    <button className="btn mx-2" onClick={()=>handleDelete()}>
                    <a>Delete</a>
                    </button>

                </div>


            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{todo.title}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <p>{todo.description}</p>
                </Modal.Body>

                <Modal.Footer>
                    <button className='btn' onClick={handleClose}>Close</button>
                </Modal.Footer>
            </Modal>

            <Modal show={showupdate} onHide={handleupdateClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{todo.title}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Updateitemscreen todo={todo}/>
                </Modal.Body>

                <Modal.Footer>
                    <button className='btn' onClick={handleupdateClose}>Close</button>
                </Modal.Footer>
            </Modal>
        </div>    
    )}