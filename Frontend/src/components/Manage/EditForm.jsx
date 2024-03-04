import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

export default function EditForm({id , data}) {
    let navigate = useNavigate();
    let dispatch = useDispatch();
    const debcredId = useSelector((state) => state.availaible.id);

    let [formData, setFormData] = useState({
        date: data.Date.slice(0,10),
        category: data.Category,
        name: data.Name,
        used: data.Used,
        availaible: data.Availaible,
        invested: data.Invested,
        user: JSON.parse(localStorage.getItem('user'))._id || ""
    })

    const handleFormData = (event)=>{
        setFormData((currData)=>{
            currData[event.target.name] = event.target.value;
            return {...currData};
        })
    }

    const handleSubmit = async (event)=>{
        event.preventDefault();
        await axios.put(`http://localhost:8080/manage/${debcredId}/${id}` , formData);
        navigate('/manage');
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="date">Date</label>
                <input onChange={handleFormData} type="text" name="date" id="date" value={formData.date} disabled />

                <label htmlFor="category">Category</label>
                <select onChange={handleFormData} name="category" id="category" value={formData.category}>
                    <option value="">Select</option>
                    <option value="Needs">Needs</option>
                    <option value="Wants">Wants</option>
                    <option value="Investment">Investment</option>
                    <option value="Needs&Wants">Needs&Wants</option>
                </select>

                <label htmlFor="name">Name</label>
                <input onChange={handleFormData} type="text" name="name" id="name" placeholder="Expense" value={formData.name} />

                <label htmlFor="used">Used</label>
                <input onChange={handleFormData} type="text" name="used" id="used" placeholder="Used" value={formData.used} />

                <label htmlFor="availaible">Availaible</label>
                <input onChange={handleFormData} type="text" name="availaible" id="availaible" placeholder="Availaible" value={formData.availaible} />

                <label htmlFor="invested">Invested</label>
                <input onChange={handleFormData} type="text" name="invested" id="invested" placeholder="Invested" value={formData.invested} />

                <button type="Submit">Edit</button>
            </form>
        </>
    )
}