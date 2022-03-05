import React, { FormEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { User, addUser, changeUser } from '../../../../slice/users';

const UserForm = () => {
    const dispatch = useDispatch();

    const [name, setName] = useState('');

    const handleChangeName = (e: any) => {
        setName(e.target.value);
    };

    const handleAddUser = (e: FormEvent) => {
        e.preventDefault();
        // dispatch(addUser({ name } as User));
        dispatch(changeUser());

        setName('');
    };

    return (
        <form onSubmit={handleAddUser}>
            <input type="text" value={name} onChange={handleChangeName} />
            <button type="submit">Add User</button>
        </form>
    );
};

export default UserForm;
