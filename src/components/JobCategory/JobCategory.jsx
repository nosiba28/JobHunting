import React from 'react';
import './JobCategory.css'

const JobCategory = ({ job }) => {
    const { id, icon, title, jobs } = job;
    return (
        <div>


            <div className='jobs'>
                <p>{icon}</p>
                <h4>{title}</h4>
                <p className='available-jobs'>{jobs} Jobs Available</p>
            </div>
        </div>
    );
};

export default JobCategory;