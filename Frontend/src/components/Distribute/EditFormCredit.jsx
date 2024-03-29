import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { updateAvailaible } from "../../features/Availaible/availaibleSlice";

export default function EditFormCredit({ id, data }) {
    let navigate = useNavigate();
    let dispatch = useDispatch();
    const debcredId = useSelector((state) => state.availaible.id);
    const debcredAvailaible = useSelector((state) => state.availaible.availaible);

    let [formData, setFormData] = useState({
        date: data.Date.slice(0, 10),
        name: data.Name,
        amount: data.Amount,
        needs: data.Needs,
        wants: data.Wants,
        investment: data.Investment,
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
        await axios.put(`http://localhost:8080/distribute/${debcredId}/${id}`, formData);
        dispatch(updateAvailaible(debcredAvailaible - data.Needs - data.Wants + formData.needs + formData.wants));
        navigate('/manage');
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="date">Date</label>
                <input onChange={handleFormData} type="text" name="date" id="date" value={formData.date} disabled />

                <label htmlFor="name">Credited From</label>
                <input onChange={handleFormData} type="text" name="name" id="name" placeholder="Credited From" value={formData.name} />

                <label htmlFor="amount">Amount</label>
                <input onChange={handleFormData} type="text" name="amount" id="amount" placeholder="amount" value={formData.amount} />

                <label htmlFor="needs">Needs</label>
                <input onChange={handleFormData} type="text" name="needs" id="needs" placeholder="needs" value={formData.needs = formData.amount/2} />

                <label htmlFor="wants">Wants</label>
                <input onChange={handleFormData} type="text" name="wants" id="wants" placeholder="wants" value={formData.wants = formData.amount*3/10} />

                <label htmlFor="investment">Investment</label>
                <input onChange={handleFormData} type="text" name="investment" id="investment" placeholder="Investment" value={formData.investment = formData.amount/5} />

                <button type="Submit">Edit</button>
            </form>
        </>
    )
}