import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function EditFormCredit({ id, data }) {
    let navigate = useNavigate();
    console.log(data , id);

    let [formData, setFormData] = useState({
        date: data.Date.slice(0, 10),
        name: data.Name,
        amount: data.Amount,
        needs: data.Needs,
        wants: data.Wants,
        investment: data.Investment
    })

    const handleFormData = (event) => {
        setFormData((currData) => {
            currData[event.target.name] = event.target.value;
            return { ...currData };
        })
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        await axios.put(`http://localhost:8080/distribute/${id}`, formData);
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
                <input onChange={handleFormData} type="text" name="needs" id="needs" placeholder="needs" value={formData.needs} />

                <label htmlFor="wants">Wants</label>
                <input onChange={handleFormData} type="text" name="wants" id="wants" placeholder="wants" value={formData.wants} />

                <label htmlFor="investment">Investment</label>
                <input onChange={handleFormData} type="text" name="investment" id="investment" placeholder="Investment" value={formData.investment} />

                <button type="Submit">Edit</button>
            </form>
        </>
    )
}