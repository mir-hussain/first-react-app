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
            <Hudday></Hudday>
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

function Hudday() {
    const [count, setCount] = useState(0);
    return (
        <div className="hudday">
            <h1>This section is useless and totally not related to the section above.</h1>
            <p>I don't wanted to make another react app (Thank you bro for understanding)</p>
            <button onClick={() => setCount(count + 1)}>Click me for no reason</button>
            <button onClick={() => setCount(count - 1)}>Fuck, decrease it.</button>
            <button onClick={() => setCount(0)}>Oh shit, Clear that usless number</button>
            <h2>useless number: {count}</h2>
            {count < 0 && 
                <h2>Nigga, you are in negative numbers. We aren't counting your girlfriends.</h2>
            }
        </div>
    );
}

export default App;
