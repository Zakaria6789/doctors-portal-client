import React, { useEffect, useState } from 'react';

const useToken = (user) => {
    const [token, setToken] = useState('');
    useEffect(() => {
        const email = user?.user?.email;
        const name = user?.user?.displayName;
        const currentUser = {
            name: name,
            email: email
        }
        if (email) {
            fetch(`https://stormy-coast-73546.herokuapp.com/user/${email}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(currentUser)
            })
                .then(res => res.json())
                .then(data => {
                    console.log('my data', data);
                    const accessToken = data?.token;
                    console.log(accessToken);
                    localStorage.setItem('accessToken', accessToken);
                    setToken(accessToken);
                })
        }
    }, [user?.user?.email, user?.user?.displayName]);
    return [token];
};

export default useToken;