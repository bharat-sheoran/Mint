import './ManageList.css'

export default function ManageList({ manage }) {

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
                    </tr>
                </thead>
                <tbody className='manage-tbody'>
                    {manage.map((d) => (
                        <tr key={d._id}>
                            <td>{d.date.toString().slice(0, 10)}</td>
                            <td>{d.category}</td>
                            <td>{d.name}</td>
                            <td>{d.used}</td>
                            <td>{d.availaible}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}