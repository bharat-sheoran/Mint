import { useState } from "react"
import axios from "axios"
import {useNavigate } from "react-router-dom"
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

    const handleFormData = (event)=>{
        setFormData((currData)=>{
            currData[event.target.name] = event.target.value;
            return {...currData};
        })
    }

    const handleSubmit = async (event)=>{
        event.preventDefault();
        await axios.post("http://localhost:8080/distribute" , formData);
        dispatch(addDistribute(formData));
        navigate('/manage');
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="date">Date</label>
            <input onChange={handleFormData} type="date" name="date" id="date" value={formData.date} />

            <label htmlFor="name">Credited From</label>
            <input onChange={handleFormData} type="text" name="name" id="name" placeholder="Credited From" value={formData.name} />

            <label htmlFor="amount">Amount</label>
            <input onChange={handleFormData} type="text" name="amount" id="amount" placeholder="Amount" value={formData.amount} />

            <label htmlFor="needs">Needs</label>
            <input onChange={handleFormData} type="text" name="needs" id="needs" placeholder="needs" value={formData.needs} />

            <label htmlFor="wants">Wants</label>
            <input onChange={handleFormData} type="text" name="wants" id="wants" placeholder="wants" value={formData.wants} />

            <label htmlFor="investment">Investment</label>
            <input onChange={handleFormData} type="text" name="investment" id="investment" placeholder="Investment" value={formData.investment} />

            <button type="Submit">Add</button>
        </form>
    )
}