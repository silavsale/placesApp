import React from 'react';

import UserList from '../components/UserList';

const Users = () => {
    const USERS = [{
        id: 'u1',
        name: 'Max Schwarz',
        image: 'https://media.kairos.com/go-demo/images/team/Ben_Virdee-Chapman.jpg',
        places: 3
    }];


    return <UserList items={USERS} />
};

export default Users;