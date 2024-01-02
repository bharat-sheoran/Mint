import { useState } from 'react';
import axios from 'axios';

export default function Home() {
    const [res, setRes] = useState("");

    async function getData() {
        let data = await axios.get("http://localhost:8080/");
        setRes(data.data.ser + data.data.port);
    }
    return (
        <>
            <button onClick={getData}>Click this</button>
            <p>{res}</p>
            <form action="http://localhost:5173/manage">
                <button type='submit'>Manage</button>
            </form>
        </>
    )
}