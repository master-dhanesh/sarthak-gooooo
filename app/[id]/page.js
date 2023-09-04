"use client";
import React, { useEffect, useState } from "react";

const contact = ({ params }) => {
    const [user, setuser] = useState(null);
    const { id } = params;

    const getData = async () => {
        const data = await fetch(
            "https://jsonplaceholder.typicode.com/users/" + id
        );
        const u = await data.json();
        setuser(u);
        console.log(u);
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <div>
            <h1>User Info</h1>
            {user && JSON.stringify(user)}
        </div>
    );
};

export default contact;
