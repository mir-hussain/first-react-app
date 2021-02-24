import { useEffect, useState } from "react";
import "./App.css";

function App() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then((data) => setUsers(data));
    }, []);
    return (
        <div>
            <h1 className="header"> Job Applicants </h1>
            <div className="card-container">
                {users.map((user) => (
                    <Applicants name={user.name} key={user.id} email={user.email} phone={user.phone}></Applicants>
                ))}
            </div>
        </div>
    );
}

function Applicants(props) {
    return (
        <div className="card">
            <h3>Name: {props.name}</h3>
            <p>Email: {props.email}</p>
            <p>Phone: {props.phone}</p>
        </div>
    );
}

export default App;
