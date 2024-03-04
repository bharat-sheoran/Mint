import { useState } from "react"
import axios from "axios"
import { useDispatch } from "react-redux";
import { addManage } from "../../features/manage/manageSlice";
import "./AddForm.css";
import { useSelector } from "react-redux";
import { updateAvailaible } from "../../features/Availaible/availaibleSlice";

export default function AddForm() {
    const debcredId = useSelector((state) => state.availaible.id);
    const debcredAvailaible = useSelector((state) => state.availaible.availaible);
    let dispatch = useDispatch();
    
    let [formData, setFormData] = useState({
        date: "",
        category: "Select",
        name: "",
        used: "",
        availaible: "200",
        invested: "100",
        user: JSON.parse(localStorage.getItem('user'))._id || ""
    })

    const handleFormData = (event) => {
        setFormData((currData) => {
            currData[event.target.name] = event.target.value;
            return { ...currData };
        })
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        await axios.post("http://localhost:8080/manage", {formData, debcredId});
        dispatch(addManage(formData));
        dispatch(updateAvailaible(debcredAvailaible - formData.used));
        setFormData({
            date: "",
            category: "Select",
            name: "",
            used: "",
            availaible: "200",
            invested: "100",
            user: JSON.parse(localStorage.getItem('user'))._id || ""
        });
    }

    return (
        <div className="add-form-manage">
            <div>
                <input onChange={handleFormData} type="date" name="date" id="date" value={formData.date} /></div>

            <div>
                <select onChange={handleFormData} name="category" id="category" value={formData.category}>
                    <option value="">Select</option>
                    <option value="Needs">Needs</option>
                    <option value="Wants">Wants</option>
                    <option value="Needs&Wants">Needs&Wants</option>
                </select></div>

            <div>
                <input onChange={handleFormData} type="text" name="name" id="name" placeholder="Expense" value={formData.name} /></div>

            <div>
                <input onChange={handleFormData} type="text" name="used" id="used" placeholder="Used" value={formData.used} /></div>


            <div><button className="add" onClick={handleSubmit}>Add</button></div>

        </div>
    )
}