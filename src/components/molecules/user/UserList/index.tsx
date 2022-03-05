import React, { FormEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'src/app/rootReducer';
import { User, addUser } from 'src/slice/users';

const UserList = () => {
    const users = useSelector<RootState, User[]>((state) => state.users);

    return (
        <>
            {users.map((user) => (
                <div key={user.id}>{user.name}</div>
            ))}
        </>
    );
};

export default UserList;
