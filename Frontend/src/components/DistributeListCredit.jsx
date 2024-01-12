import axios from 'axios';
import { useState } from 'react';
import './DistributeListCredit.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faTrash, faPen } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

export default function ManageListCredit(){
    let [distribute, setDistribute] = useState([]);

    async function getDistribute(){
        let res = await axios.get("http://localhost:8080/distribute");
        setDistribute(res.data);
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
                    </tr>
                </thead>
                <tbody className='distribute-tbody'>
                    {distribute.map((d) => (
                        <tr key={d._id}>
                            <td>{d.date.slice(0, 10)}</td>
                            <td>{d.amount}</td>
                            <td>{d.name}</td>
                            <td>{d.needs}</td>
                            <td>{d.wants}</td>
                            <td>{d.investment}</td>
                            <td><abbr title="Delete"><FontAwesomeIcon onClick={() => (handleDelete(d.id))} icon={faTrash} /></abbr></td>
                            <td><Link to="/manage/edit" state={{ id: d.id }} className='link'>
                                <abbr title="Edit"><FontAwesomeIcon icon={faPen} /></abbr>
                            </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button onClick={getDistribute}>click</button>
        </>
    )
}