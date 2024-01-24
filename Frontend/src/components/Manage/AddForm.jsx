import { useState } from "react"
import axios from "axios"
import { useDispatch } from "react-redux";
import { addManage } from "../../features/manage/manageSlice";
import "./AddForm.css";
import { useSelector } from "react-redux";

export default function AddForm() {
    const debcredId = useSelector((state) => state.availaible.id);
    let dispatch = useDispatch();
    
    let [formData, setFormData] = useState({
        date: "",
        category: "Select",
        name: "",
        used: "",
        availaible: "200",
        invested: "100"
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
        setFormData({
            date: "",
            category: "Select",
            name: "",
            used: "",
            availaible: "200",
            invested: "100"
        });
    }

    return (
        <tr>
            <td>
                <input onChange={handleFormData} type="date" name="date" id="date" value={formData.date} /></td>

            <td>
                <select onChange={handleFormData} name="category" id="category" value={formData.category}>
                    <option value="">Select</option>
                    <option value="Needs">Needs</option>
                    <option value="Wants">Wants</option>
                    <option value="Needs&Wants">Needs&Wants</option>
                </select></td>

            <td>
                <input onChange={handleFormData} type="text" name="name" id="name" placeholder="Expense" value={formData.name} /></td>

            <td>
                <input onChange={handleFormData} type="text" name="used" id="used" placeholder="Used" value={formData.used} /></td>


            <td><button className="add" onClick={handleSubmit}>Add</button></td>

        </tr>
    )
}