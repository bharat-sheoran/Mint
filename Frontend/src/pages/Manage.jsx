import axios from "axios";
import { useState } from "react"
import ManageList from "../components/ManageList";

export default function Manage() {
    let [manage, setManage] = useState([]);

    const getData = async () => {
        let data = await axios.get("http://localhost:8080/manage");
        setManage(data.data);
    }

    return (
        <>
            <button onClick={getData}>Button</button>
            <ul>
                <ManageList manage={manage} />
            </ul>
        </>
    )
}