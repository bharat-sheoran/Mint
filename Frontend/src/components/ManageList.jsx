import './ManageList.css'

export default function ManageList({ manage }) {

    return (
        <>
            {manage.map((d) => (
                <li key={d._id}>
                    <div className="manageList">
                        name: {d.name}<br />
                        category: {d.category}<br />
                        date: {d.date}<br />
                        used: {d.used}<br />
                        availaible: {d.availaible}<br />
                        <br />
                    </div>
                </li>
            ))}
        </>
    )
}