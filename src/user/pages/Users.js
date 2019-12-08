import React from 'react';

import UserList from '../components/UserList';

const Users = () => {
    const USERS = [{
        id: 'u1',
        name: 'Morty Smith',
        image: 'https://i.dgif.co/gifs/rm49/O/rm49.gif',
        places: 3
    }];


    return <UserList items={USERS} />
};

export default Users;