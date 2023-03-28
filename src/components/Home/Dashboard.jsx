import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { update_profile } from '../../actions/profile';
import { delete_account } from '../../actions/auth';

const Dashboard = ({
    delete_account
}) => {

    return (
        <div className='container'>
            <h1 className='mt-3'>Welcome to your User Dashboard</h1>
            <p className='mt-3 mb-3'>Update your user profile below:</p>
           
            <p className='mt-5'>
                Click the button below to delete your user account:
            </p>
            <a
                className='btn btn-danger'
                href='#!'
                onClick={delete_account}
            >
                Delete Account
            </a>
        </div>
    )
};



export default connect(delete_account)(Dashboard);