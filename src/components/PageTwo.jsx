import React from 'react';
import { useState, useEffect } from 'react';

const PageTwo = props => {

    const [user, setUser] = useState({});
    const [address, setAddress] = useState({});

    useEffect(() => {
        const getUser = async () => {
            let res = await fetch(`https://jsonplaceholder.typicode.com/users/${props.match.params.id}`)
            let user = await res.json();
            setUser(user);
            setAddress(user.address);
        }
        getUser();
    }, [props.match.params.id]);

    return (
        <section className="row">
            <article className="col-md-12">
                <div className="card p-1 m-1 shadow">
                    <div className="card-body">
                        <h4 className="card-title">{user.name}</h4>
                        <p className="card-text">{address.street}</p>
                    </div>
                </div>
            </article>
        </section>
    );
}

export default PageTwo;