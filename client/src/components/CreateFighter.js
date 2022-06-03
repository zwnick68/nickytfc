
import React, {useState} from "react";
function CreateFighter ( ) {

    const [form, setForm] = useState({name: '', nickname: '', age: '', height: '', weight: '', reach: '', fight_record: ''})

    const handleSubmit = async (e) => {
        e.preventDefault()
        let req = await fetch('/fighters',{
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(form)
        })
        let res = await req.json()
    }

    return (
        <div>
            <form>
                <label for="name">Name:</label>
                <input 
                type="text"
                placeholder="Name"
                onChange={(e) => setForm({...form, name: e.target.value})}/>

                <label for="nickname">Nickname:</label>
                <input 
                type="text"
                placeholder="NickName"
                onChange={(e) => setForm({...form, nickname: e.target.value})}/>

                <label for="age">Age:</label>
                <input 
                type="text"
                placeholder="Age"
                onChange={(e) => setForm({...form, age: e.target.value})}/>

                <label for="height">Height:</label>
                <input 
                type="text"
                placeholder="Height"
                onChange={(e) => setForm({...form, height: e.target.value})}/>

                <label for="weight">Weight:</label>
                <input 
                type="text"
                placeholder="Weight"
                onChange={(e) => setForm({...form, weight: e.target.value})}/>

                <label for="reach">reach:</label>
                <input 
                type="text"
                placeholder="Reach"
                onChange={(e) => setForm({...form, reach: e.target.value})}/>

                <label for="fight-record">Fight Record:</label>
                <input 
                type="text"
                placeholder="Fight Record"
                onChange={(e) => setForm({...form, fight_record: e.target.value})}/>

                <div className="submit">
                    <button type="submit">Create A Fighter</button>
                </div>
            </form>
        </div>   

    )
}



export default CreateFighter;