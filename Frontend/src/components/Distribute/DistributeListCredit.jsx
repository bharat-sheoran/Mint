import axios from 'axios';
import './DistributeListCredit.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faPen } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { deleteDistribute } from '../../features/distribute/distributeSlice';
import AddFormCredit from './AddFormCredit';
import { updateAvailaible } from '../../features/Availaible/availaibleSlice';

export default function DistributeListCredit() {
    const distribute = useSelector((state) => state.distribute.distribute);
    const debCredId = useSelector((state) => state.availaible.id);
    const debCredAvailaible = useSelector((state) => state.availaible.availaible);
    const dispatch = useDispatch();

    const handleDelete = async (id, needs, wants) => {
        await axios.delete(`http://localhost:8080/distribute/${debCredId}/${id}`);
        dispatch(deleteDistribute(id));
        dispatch(updateAvailaible(debCredAvailaible - needs - wants));
    }


    return (
        <>
            <div className="distribute-list">
                <div className='distribute-thead'>
                        <div>Date</div>
                        <div>Credited From</div>
                        <div>Amount</div>
                        <div>Needs</div>
                        <div>Wants</div>
                        <div>Investment</div>
                        <div>Action</div>
                </div>
                <div className='distribute-tbody'>
                    <AddFormCredit />
                    {distribute.map((d) => (
                        <div className='distribute-tbody-inner' key={d.id}>
                            <div>{d.Date.slice(0 , 10)}</div>
                            <div>{d.Name}</div>
                            <div>{d.Amount}</div>
                            <div>{d.Needs}</div>
                            <div>{d.Wants}</div>
                            <div>{d.Investment}</div>
                            <div><abbr title="Delete"><FontAwesomeIcon className='delete' onClick={() => (handleDelete(d.id, d.Needs, d.Wants))} icon={faTrash} /></abbr>
                            <Link to="/distribute/edit" state={{ id: d.id }} className='link'>
                                <abbr title="Edit"><FontAwesomeIcon className='edit' icon={faPen} /></abbr>
                            </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}