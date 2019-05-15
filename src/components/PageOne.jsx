import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const PageOne = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        const getUsers = async () => {
            let res = await fetch('https://jsonplaceholder.typicode.com/users')
            let users = await res.json();
            setUsers(users);
        }
        getUsers();
    }, []);

    return (

        <section className="row">
            <article className="col-md-12">
                <h1 className="text-center">Hook Em Horns</h1>
                <ul className="list-group">
                    {users.map(user => (
                        <li key={user.id} className="list-group-item d-flex justify-content-between align-items-center">{user.name} <Link to={`/${user.id}/details`} className="btn btn-primary">Get Details</Link></li>
                    ))}
                </ul>
            </article>
        </section>

    );
}

export default PageOne;