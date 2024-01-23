import axios from "axios";
import { useEffect, useState, useLayoutEffect } from "react"
import ManageListDebit from "../components/Manage/ManageListDebit";
import DistributeListCredit from "../components/Distribute/DistributeListCredit";
import { useDispatch } from "react-redux";
import { addManage } from "../features/manage/manageSlice";
import ManageNavBar from "../components/NavBar/UpperNavBar/ManageNavBar";
import ManageDownNavBar from "../components/NavBar/DownNavBar/ManageDownNavBar";
import { deleteAllManage } from "../features/manage/manageSlice";
import { addDistribute } from "../features/distribute/distributeSlice";
import { deleteAllDistribute } from "../features/distribute/distributeSlice";
import { addAvailaible } from "../features/Availaible/availaibleSlice";

export default function Manage() {
    const dispatch = useDispatch();
    const [isDebit , setIsDebit] = useState(localStorage.getItem("isDebit"));

    useEffect(() => {
        async function getData() {
            let data = await axios.get("http://localhost:8080/");
            let manageData = data.data[0].debit;
            let distributeData = data.data[0].credit;
            manageData.map((manage) => (dispatch(addManage(manage))));
            distributeData.map((distribute) => (dispatch(addDistribute(distribute))));
            dispatch(addAvailaible(data.data[0].amount));
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
            <ManageNavBar activeState={"Manage"}/>
            <ManageDownNavBar handleIsDebit={handleIsDebit} isDebit={isDebit}/>
            {isDebit ? <DistributeListCredit /> : <ManageListDebit/>}
        </>
    )
}