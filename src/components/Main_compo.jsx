import React,{useState} from 'react'
import axios from 'axios';

export default function Main_compo() {
    const [name,setname]= useState('');
    const [age,setage]= useState('');

    const submitAdd =()=>{
        axios.post("http://localhost:8080/add",{
            name:name,
            age:age,
        }).then(()=>{
            console.log("success insert")
        })
    }
    return (
        <div>
            <input
                type="text"
                placeholder="Enter Name"
                // className="question-container"
                value={name}
                onChange={(evt) => {
                setname(evt.target.value);
            }}
            />
            <input
                type="text"
                placeholder="Enter Age"
                // className="question-container"
                value={age}
                onChange={(evt) => {
                setage(evt.target.value);
            }}
            />
            <button onClick={submitAdd}>ADD</button>

            <div><button>UPDATE</button></div>
            
            <div><button>COUNT</button></div>
        </div>
    )
}
