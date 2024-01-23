import { useState } from "react"
import axios from "axios"
import { useDispatch } from "react-redux";
import { addDistribute } from "../../features/distribute/distributeSlice";

export default function AddFormCredit() {
    let dispatch = useDispatch();
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
        setFormData({
            date: "",
            name: "",
            amount: "",
            needs: "",
            wants: "",
            investment: ""
        });
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
                <input onChange={handleFormData} type="text" name="needs" id="needs" placeholder="needs" value={formData.needs = formData.amount/2} />
            </td>

            <td>
                <input onChange={handleFormData} type="text" name="wants" id="wants" placeholder="wants" value={formData.wants = formData.amount*3/10} />
            </td>

            <td>
                <input onChange={handleFormData} type="text" name="investment" id="investment" placeholder="Investment" value={formData.investment = formData.amount/5} />
            </td>

            <td>
                <button className="add" onClick={handleSubmit}>Add</button>
            </td>
        </tr>
    )
}