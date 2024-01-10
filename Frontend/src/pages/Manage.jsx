import axios from "axios";
import { useEffect, useState, useLayoutEffect } from "react"
import ManageListDebit from "../components/ManageListDebit";
import ManageListCredit from "../components/ManageListCredit";
import { useDispatch, useSelector } from "react-redux";
import { addManage } from "../features/manage/manageSlice";
import ManageNavBar from "../components/ManageNavBar";
import Button from "react-bootstrap/esm/Button";
import ManageDownNavBar from "../components/ManageDownNavBar";
import { deleteAll } from "../features/manage/manageSlice";

export default function Manage() {
    const dispatch = useDispatch();
    const [isDebit , setIsDebit] = useState(false);

    useEffect(() => {
        async function getData() {
            let data = await axios.get("http://localhost:8080/manage");
            let arrData = data.data;
            arrData.map((manage) => (dispatch(addManage(manage))));
        }
        dispatch(deleteAll());
        getData();
    },[]);

    function handleIsDebit(isDebit){
        setIsDebit(isDebit);
    }

    return (
        <>
            <ManageNavBar />
            <ManageDownNavBar handleIsDebit={handleIsDebit} />
            {isDebit ? <ManageListCredit /> : <ManageListDebit/>}
        </>
    )
}