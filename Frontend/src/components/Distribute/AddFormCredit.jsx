import { useState } from "react"
import axios from "axios"
import { useDispatch, useSelector } from "react-redux";
import { addDistribute } from "../../features/distribute/distributeSlice";
import { updateAvailaible } from "../../features/Availaible/availaibleSlice";
import "./AddFormCredit.css";

export default function AddFormCredit() {
    let dispatch = useDispatch();
    const debcredId = useSelector((state) => state.availaible.id);
    const debcredAvailaible = useSelector((state) => state.availaible.availaible);
    let [formData, setFormData] = useState({
        date: "",
        name: "",
        amount: "",
        needs: "",
        wants: "",
        investment: "",
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
        await axios.post("http://localhost:8080/distribute", {formData, debcredId});
        dispatch(addDistribute(formData));
        dispatch(updateAvailaible(debcredAvailaible + formData.needs + formData.wants));
        setFormData({
            date: "",
            name: "",
            amount: "",
            needs: "",
            wants: "",
            investment: "",
            user: JSON.parse(localStorage.getItem('user'))._id || ""
        });
    }

    return (
        <div className="add-form-distribute">
            <div><input onChange={handleFormData} type="date" name="date" id="date" value={formData.date} /></div>

            <div>
                <input onChange={handleFormData} type="text" name="name" id="name" placeholder="Credited" value={formData.name} />
            </div>

            <div>
                <input onChange={handleFormData} type="text" name="amount" id="amount" placeholder="Amount" value={formData.amount} />
            </div>

            <div>
                <input onChange={handleFormData} type="text" name="needs" id="needs" placeholder="needs" value={formData.needs = formData.amount/2} />
            </div>

            <div>
                <input onChange={handleFormData} type="text" name="wants" id="wants" placeholder="wants" value={formData.wants = formData.amount*3/10} />
            </div>

            <div>
                <input onChange={handleFormData} type="text" name="investment" id="investment" placeholder="Investment" value={formData.investment = formData.amount/5} />
            </div>

            <div>
                <button className="add" onClick={handleSubmit}>Add</button>
            </div>
        </div>
    )
}