import axios from 'axios'
import './ManageList.css'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';


export default function ManageList() {
    const manages = useSelector((state)=> state.manages);
    console.log(manages);

    const handleDelete = async(id)=>{
        let res = await axios.delete(`http://localhost:8080/manage/${id}`);
        console.log(res);
        this.setManage(()=>{
            manage.filter((c) => (c.id !== id));
        });
    }

    return (
        <>
            <table className="manage-list">
                <thead className='manage-thead'>
                    <tr>
                        <th>Date</th>
                        <th>Category</th>
                        <th>Name</th>
                        <th>Used</th>
                        <th>Availaible</th>
                        <th>Invested</th>
                    </tr>
                </thead>
                <tbody className='manage-tbody'>
                    {manages.map((d) => (
                        <tr key={d.id}>
                            <td>{d.Date.slice(0 , 10)}</td>
                            <td>{d.Category}</td>
                            <td>{d.Name}</td>
                            <td>{d.Used}</td>
                            <td>{d.Availaible}</td>
                            <td>{d.Invested}</td>
                            <td><button onClick={()=>(handleDelete(d._id))}>Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}