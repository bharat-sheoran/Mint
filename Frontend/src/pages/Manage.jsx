import axios from "axios";
import { useEffect, useState, useLayoutEffect } from "react"
import ManageListDebit from "../components/ManageListDebit";
import DistributeListCredit from "../components/DistributeListCredit";
import { useDispatch, useSelector } from "react-redux";
import { addManage } from "../features/manage/manageSlice";
import ManageNavBar from "../components/ManageNavBar";
import Button from "react-bootstrap/esm/Button";
import ManageDownNavBar from "../components/ManageDownNavBar";
import { deleteAllManage } from "../features/manage/manageSlice";
import { addDistribute } from "../features/distribute/distributeSlice";
import { deleteAllDistribute } from "../features/distribute/distributeSlice";

export default function Manage() {
    const dispatch = useDispatch();
    const [isDebit , setIsDebit] = useState(false);

    useEffect(() => {
        async function getData() {
            let data = await axios.get("http://localhost:8080/manage");
            let res = await axios.get("http://localhost:8080/distribute");
            let manageData = data.data;
            let distributeData = res.data;
            manageData.map((manage) => (dispatch(addManage(manage))));
            distributeData.map((distribute) => (dispatch(addDistribute(distribute))));
        }
        dispatch(deleteAllManage());
        dispatch(deleteAllDistribute());
        getData();
    },[]);

    function handleIsDebit(isDebit){
        setIsDebit(isDebit);
    }

    return (
        <>
            <ManageNavBar />
            <ManageDownNavBar handleIsDebit={handleIsDebit} isDebit={isDebit}/>
            {isDebit ? <DistributeListCredit /> : <ManageListDebit/>}
        </>
    )
}