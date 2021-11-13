import { Alert, TextField } from '@mui/material';
import Button from '@mui/material/Button';
import React, { useState } from 'react';

const MakeAdmin = () => {

    const [email, setEmail] = useState('')
    const [success, setSuccess] = useState(false);

    const handleOnBlur = e => {
        // console.log(e.target.value);
        setEmail(e.target.value);
    }
    const handleAdminSubmit = e => {

        const user = { email };
        fetch('https://agile-refuge-24136.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        }).then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    console.log(data);
                    setEmail('')
                    setSuccess(true);
                }
            })
        e.preventDefault();
    }

    return (
        <div>
            <h2>Make an admin</h2>
            <form onSubmit={handleAdminSubmit}>
                <TextField sx={{ width: '30%' }} onBlur={handleOnBlur} type='email' variant="standard" />
                <Button type="submit" variant="contained">Make Admin</Button>
            </form>
            {success && <Alert severity="success">Made Admin successfully!</Alert>}
        </div>
    );
};

export default MakeAdmin;