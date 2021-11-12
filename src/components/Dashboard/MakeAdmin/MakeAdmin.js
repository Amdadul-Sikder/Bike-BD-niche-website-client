import { TextField } from '@mui/material';
import Button from '@mui/material/Button';
import React, { useState } from 'react';

const MakeAdmin = () => {

    const [email, setEmail] = useState('')

    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    const handleAdminSubmit = e => {
        e.preventDefault();
    }

    return (
        <div>
            <h2>Make an admin</h2>
            <form onSubmit={handleAdminSubmit}>
                <TextField onBlur={handleOnBlur} label="email" type='email' variant="standard" />
                <Button variant="contained">Make Admin</Button>
            </form>
        </div>
    );
};

export default MakeAdmin;