import React, { FormEvent, useState } from 'react';
import UserForm from 'src/components/molecules/user/UserForm';
import UserList from 'src/components/molecules/user/UserList';

const UserDiv = () => {
    return (
        <div>
            <UserForm />
            <UserList />
        </div>
    );
};

export default UserDiv;
