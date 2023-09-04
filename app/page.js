"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const page = () => {
    const [users, setusers] = useState([]);

    const getData = async () => {
        const data = await fetch("https://jsonplaceholder.typicode.com/users");
        const u = await data.json();
        setusers(u);
        // console.log(u);
    };

    useEffect(() => {
        getData();
    }, []);
    return (
        <div>
            <h1>This is Home page</h1>
            <ul>
                {users.map((u) => (
                    <li>
                        {u.name} --- <Link href={`/${u.id}`}>Explore</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default page;
