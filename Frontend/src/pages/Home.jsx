import { useState } from 'react';
import axios from 'axios';
import ManageNavBar from '../components/ManageNavBar';

export default function Home() {
    const [res, setRes] = useState("");

    async function getData() {
        let data = await axios.get("http://localhost:8080/");
        setRes(data.data.ser + data.data.port);
    }
    return (
        <>
            <ManageNavBar activeState={"Home"}/>
            <button onClick={getData}>Click this</button>
            <p>{res}</p>
        </>
    )
}