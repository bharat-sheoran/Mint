import { useState } from "react"
import axios from "axios"

export default function ManageAddForm() {
    let [formData, setFormData] = useState({
        date: "",
        category: "Select",
        name: "",
        used: "",
        availaible: "",
        invested: ""
    })

    const handleFormData = (event)=>{
        setFormData((currData)=>{
            currData[event.target.name] = event.target.value;
            return {...currData};
        })
    }

    const handleSubmit = async (event)=>{
        event.preventDefault();
        let res = await axios.post("http://localhost:8080/manage/add" , formData);
        console.log(res);
    }

    return (
        <>
            <h3>This is the Add Form</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor="date">Date</label>
                <input onChange={handleFormData} type="date" name="date" id="date" value={formData.date}/>

                <label htmlFor="category">Category</label>
                <select onChange={handleFormData} name="category" id="category" value={formData.category}>
                    <option value="">Select</option>
                    <option value="Needs">Needs</option>
                    <option value="Wants">Wants</option>
                    <option value="Investment">Investment</option>
                    <option value="Needs&Wants">Needs&Wants</option>
                </select>

                <label htmlFor="name">Name</label>
                <input onChange={handleFormData} type="text" name="name" id="name" placeholder="Expense" value={formData.name}/>

                <label htmlFor="used">Used</label>
                <input onChange={handleFormData} type="text" name="used" id="used" placeholder="Used" value={formData.used}/>

                <label htmlFor="availaible">Availaible</label>
                <input onChange={handleFormData} type="text" name="availaible" id="availaible" placeholder="Availaible" value={formData.availaible}/>

                <label htmlFor="invested">Invested</label>
                <input onChange={handleFormData} type="text" name="invested" id="invested" placeholder="Invested" value={formData.invested}/>

                <button type="Submit">Add</button>
            </form>
        </>
    )
}