import axios from "axios";
import { useEffect, useState } from "react"
import ManageList from "../components/ManageList";

export default function Manage() {
    let [manage, setManage] = useState([]);

    useEffect(() => {
        async function getData() {
            let data = await axios.get("http://localhost:8080/manage");
            setManage(data.data);
        }
        getData();
    }, []);


    return (
        <>
            <form action="http://localhost:5173/manage/add">
                <button>Add</button>
            </form>
            <ManageList manage={manage} />
        </>
    )
}