import axios from "axios";
import { useEffect, useState, useLayoutEffect } from "react"
import ManageList from "../components/ManageList";
import { useDispatch, useSelector } from "react-redux";
import { addManage } from "../features/manage/manageSlice";
import ManageNavBar from "../components/ManageNavBar";
import Button from "react-bootstrap/esm/Button";
import ManageDownNavBar from "../components/ManageDownNavBar";
import { deleteAll } from "../features/manage/manageSlice";

export default function Manage() {
    const dispatch = useDispatch();

    useEffect(() => {
        async function getData() {
            let data = await axios.get("http://localhost:8080/manage");
            let arrData = data.data;
            arrData.map((manage) => (dispatch(addManage(manage))));
        }
        dispatch(deleteAll());
        getData();
    },[]);


    return (
        <>
            <ManageNavBar />
            <ManageDownNavBar />
            <ManageList />
        </>
    )
}