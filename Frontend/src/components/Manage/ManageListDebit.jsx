import axios from 'axios'
import './ManageListDebit.css'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { deleteManage } from '../../features/manage/manageSlice';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faPen } from '@fortawesome/free-solid-svg-icons'
import AddForm from './AddForm';
import { updateAvailaible } from '../../features/Availaible/availaibleSlice';

export default function ManageListDebit() {
    const manages = useSelector((state) => state.manage.manages);
    const dCId = useSelector((state) => state.availaible.id);
    const debCredAvailaible = useSelector((state) => state.availaible.availaible);
    const dispatch = useDispatch();
    //TODO: Create a Separate page for Investment

    const handleDelete = async (id, used) => {
        await axios.delete(`http://localhost:8080/manage/${dCId}/${id}`);
        dispatch(deleteManage(id));
        dispatch(updateAvailaible(debCredAvailaible + used));
    }

    return (
        <>
            <div className="manage-list">
                <div className='manage-thead'>
                    <div>Date</div>
                    <div>Category</div>
                    <div>Name</div>
                    <div>Used</div>
                    <div>Action</div>
                </div>
                <div className='manage-tbody'>
                    <AddForm />
                    {manages.map((d) => (
                        <div className='manage-tbody-inner' key={d.id}>
                            <div>{d.Date.slice(0, 10)}</div>
                            <div>{d.Category}</div>
                            <div>{d.Name}</div>
                            <div>{d.Used}</div>
                            <div className='manage-action'>
                                <div><abbr title="Delete"><FontAwesomeIcon className='delete' onClick={() => (handleDelete(d.id, d.Used))} icon={faTrash} /></abbr></div>
                                <div><Link to="/manage/edit" state={{ id: d.id }} className='link'>
                                    <abbr title="Edit"><FontAwesomeIcon className='edit' icon={faPen} /></abbr>
                                </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}