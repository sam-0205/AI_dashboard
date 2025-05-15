'use client';
import React from 'react'
import { useEffect, useState } from 'react';
import AvatarCard from './AvatarCard';

const AvatarGrid = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://reqres.in/api/users?page=1&per_page=3', {
            headers: {
                'x-api-key': 'reqres-free-v1'  
            }
        })
            .then(res => res.json())
            .then(data => setUsers(data.data || []))
            .catch(err => {
                console.error('Error fetching users:', err);
                setUsers([]);
            });
    }, []);

    return (
        <section className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {users.map(user => (
                <AvatarCard key={user.id} user={user} />
            ))}
        </section>
    )
}

// x-api-key: reqres-free-v1
export default AvatarGrid
