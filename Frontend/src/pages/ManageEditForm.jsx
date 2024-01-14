import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import EditForm from "../components/EditForm";
import ManageNavBar from "../components/ManageNavBar";

export default function ManageEditForm(props){
    let manages = useSelector((state)=> state.manage.manages);
    const location = useLocation();
    const id = location.state?.id;

    let data;
    manages.filter((d)=>{
        if(d.id === id){
            data = d;
        }
    })

    return (
        <>
            <ManageNavBar />
            <h3>This is Edit Form</h3>
            <EditForm data={data} id={id}/>
        </>
    )
}