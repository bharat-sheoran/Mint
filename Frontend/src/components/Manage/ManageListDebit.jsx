import axios from 'axios'
import './ManageListDebit.css'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { deleteManage } from '../../features/manage/manageSlice';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faPen } from '@fortawesome/free-solid-svg-icons'
import AddForm from './AddForm';

export default function ManageListDebit() {
    const manages = useSelector((state) => state.manage.manages);
    const dispatch = useDispatch();
    //TODO: Add Needs and Wants and Remove Investment from this Page
    //TODO: Create a Separate page for Investment

    const handleDelete = async (id) => {
        await axios.delete(`http://localhost:8080/manage/${id}`);
        dispatch(deleteManage(id));
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
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody className='manage-tbody'>
                    <AddForm/>
                    {manages.map((d) => (
                        <tr key={d.id}>
                            <td>{d.Date}</td>
                            <td>{d.Category}</td>
                            <td>{d.Name}</td>
                            <td>{d.Used}</td>
                            <td><abbr title="Delete"><FontAwesomeIcon className='delete' onClick={() => (handleDelete(d.id))} icon={faTrash} /></abbr></td>
                            <td><Link to="/manage/edit" state={{ id: d.id }} className='link'>
                                <abbr title="Edit"><FontAwesomeIcon className='edit' icon={faPen} /></abbr>
                            </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}