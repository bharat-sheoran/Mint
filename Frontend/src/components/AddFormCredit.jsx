import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux";
import { addDistribute } from "../features/distribute/distributeSlice";

export default function AddFormCredit() {
    let dispatch = useDispatch();
    let navigate = useNavigate();
    let [formData, setFormData] = useState({
        date: "",
        name: "",
        amount: "",
        needs: "",
        wants: "",
        investment: ""
    })

    const handleFormData = (event) => {
        setFormData((currData) => {
            currData[event.target.name] = event.target.value;
            return { ...currData };
        })
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        await axios.post("http://localhost:8080/distribute", formData);
        dispatch(addDistribute(formData));
        navigate('/manage');
    }

    return (
        <tr>
            <td><input onChange={handleFormData} type="date" name="date" id="date" value={formData.date} /></td>

            <td>
                <input onChange={handleFormData} type="text" name="name" id="name" placeholder="Credited From" value={formData.name} />
            </td>

            <td>
                <input onChange={handleFormData} type="text" name="amount" id="amount" placeholder="Amount" value={formData.amount} />
            </td>

            <td>
                <input onChange={handleFormData} type="text" name="needs" id="needs" placeholder="needs" value={formData.needs} />
            </td>

            <td>
                <input onChange={handleFormData} type="text" name="wants" id="wants" placeholder="wants" value={formData.wants} />
            </td>

            <td>
                <input onChange={handleFormData} type="text" name="investment" id="investment" placeholder="Investment" value={formData.investment} />
            </td>

            <td>
                <button onClick={handleSubmit}>Add</button>
            </td>
        </tr>
    )
}