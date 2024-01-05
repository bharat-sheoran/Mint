import axios from "axios";
import { useEffect, useState } from "react"
import ManageList from "../components/ManageList";
import { useDispatch } from "react-redux";
import { addManage } from "../features/manage/manageSlice";

export default function Manage() {
    const dispatch = useDispatch();

    useEffect(() => {
        async function getData() {
            let data = await axios.get("http://localhost:8080/manage");
            let arrData = data.data;
            arrData.map((manage) => (dispatch(addManage(manage))));
        }
        getData();
    },[]);


    return (
        <>
            <form action="http://localhost:5173/manage/add">
                <button>Add</button>
            </form>
            <ManageList />
        </>
    )
}