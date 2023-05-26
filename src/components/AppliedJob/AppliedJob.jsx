import React, { useEffect, useState } from 'react';
import { getStoredCart } from '../../utilities/fakeDb';
import { json, useLoaderData } from 'react-router-dom';
import Feature from '../Feature/Feature';
import './AppliedJob.css'

const AppliedJob = () => {
    const { newArr } = useLoaderData();

    const [initial, setInitial] = useState(newArr);

    const handleRemoteJob = () => {
        const remoteJob = newArr.filter(feature => feature.remote_or_onsite === 'Remote');
        setInitial(remoteJob);

    }
    const handleOnsiteJob = () => {
        const onsiteJob = newArr.filter(feature => feature.remote_or_onsite === 'Onsite');
        setInitial(onsiteJob);

    }

    return (
        <div className='applied-job'>
            <div className='ap-job'><h2>Applied job page</h2></div>
            <div className="dropdown">
                <button className="btn-nav">Filter By</button>
                <div className="dropdown-content">
                    <button onClick={handleRemoteJob}>Remote</button>
                    <button onClick={handleOnsiteJob}>Onsite</button>

                </div>
            </div>
            <div className='applied-features'>
                {
                    initial.map(feature => <Feature
                        key={feature.id}
                        feature={feature}
                    >

                    </Feature>)
                }

            </div>
        </div>
    );
};

export default AppliedJob;