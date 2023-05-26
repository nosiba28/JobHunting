import React from 'react';
import './Feature.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faDollar } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import JobDetails from '../JobDetails/JobDetails';
const Feature = ({ feature }) => {
    const { id, company_logo, job_title, remote_or_onsite, fulltime_or_parttime, company_name, location, salary } = feature;

    return (
        <div className='feature'>
            <img src={company_logo} alt="" />
            <h4>{job_title}</h4>
            <p>{company_name}</p>
            <div className='remote-full'>
                <div>{remote_or_onsite}</div>
                <div>{fulltime_or_parttime}</div>

            </div>
            <div className='location-salary'>
                <div><FontAwesomeIcon icon={faLocationDot} />{location}</div>
                <div><FontAwesomeIcon icon={faDollar} />Salary:({salary})</div>
            </div>
            <Link to={`/${feature.id}`}><button className='btn-nav'>View Details</button></Link>


        </div>
    );
};

export default Feature;