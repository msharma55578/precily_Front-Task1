import React,{useState} from 'react'
import axios from 'axios';

export default function Main_compo() {
    const [name,setname]= useState('');
    const [age,setage]= useState('');
    const [id,setid]= useState('');

    const submitAdd =()=>{
        if(name===''&&age===''){
            alert("Atleast 1 field Required")
        }else{
            axios.post("http://localhost:8080/add",{
            name:name,
            age:age,
        })
        .then( ()=>{
            alert("successfully inserted")     ///alert.......
            console.log("insert")
            setname('');
            setage('');
        })
        }
    }

    const submitUpdate =()=>{
        if(id==='')  alert("id required for update")
        else{
            axios.put("http://localhost:8080/update",{
            name:name,
            age:age,
            id:id
            }).then(()=>{
                alert("successfully updated")     ///alert.......
                setid('');
                setname('');
                setage('');
            })
        }
    }
    const countApi =()=>{
        axios.get("http://localhost:8080/count",{
        }).then((response)=>{
            console.log(response.data)
            let add_cnt=response.data[0].count;
            let update_cnt=response.data[1].count
            alert("Total Add hit "+add_cnt+" and Upadte API hit "+update_cnt)
        })
    
    }
    return (
        <div>
            <h2>Enter the value for add and update Field</h2>
            <input
                    type="text"
                    placeholder="Enter Id for Update"
                    // className="question-container"
                    value={id}
                    onChange={(evt) => {
                    setid(evt.target.value);
                }}
            />
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
            <button onClick={submitUpdate}>UPDATE</button>
            <h2>Total Api Count</h2>            
            <div><button onClick={countApi}>COUNT</button></div>
        </div>
    )
}
