import EditFormCredit from "../components/Distribute/EditFormCredit"
import ManageNavBar from "../components/NavBar/UpperNavBar/ManageNavBar"
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";


export default function DistributeEditForm(){
    let distribute = useSelector((state)=> state.distribute.distribute);
    console.log(distribute);
    const location = useLocation();
    const id = location.state?.id;

    let data;
    distribute.filter((d)=>{
        if(d.id === id){
            data = d;
            console.log(data);
        }
    })


    return (
        <>
            <ManageNavBar />
            <h3>This is Edit Form</h3>
            <EditFormCredit data={data} id={id}/>
        </>
    )
}