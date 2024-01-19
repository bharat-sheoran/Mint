import axios from 'axios';
import { useEffect } from 'react';
import './DistributeListCredit.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faPen } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { deleteDistribute } from '../features/distribute/distributeSlice';
import AddFormCredit from './AddFormCredit';

export default function DistributeListCredit() {
    const distribute = useSelector((state) => state.distribute.distribute);
    const dispatch = useDispatch();

    const handleDelete = async (id) => {
        await axios.delete(`http://localhost:8080/distribute/${id}`);
        dispatch(deleteDistribute(id));
    }


    return (
        <>
            <table className="distribute-list">
                <thead className='distribute-thead'>
                    <tr>
                        <th>Date</th>
                        <th>Credited From</th>
                        <th>Amount</th>
                        <th>Needs</th>
                        <th>Wants</th>
                        <th>Investment</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody className='distribute-tbody'>
                    <AddFormCredit />
                    {distribute.map((d) => (
                        <tr key={d.id}>
                            <td>{d.Date}</td>
                            <td>{d.Name}</td>
                            <td>{d.Amount}</td>
                            <td>{d.Needs}</td>
                            <td>{d.Wants}</td>
                            <td>{d.Investment}</td>
                            <td><abbr title="Delete"><FontAwesomeIcon className='delete' onClick={() => (handleDelete(d.id))} icon={faTrash} /></abbr></td>
                            <td><Link to="/distribute/edit" state={{ id: d.id }} className='link'>
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