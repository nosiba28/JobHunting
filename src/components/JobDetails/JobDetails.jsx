import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import './JobDetails.css'
import { addToDb } from '../../utilities/fakeDb';

const JobDetails = () => {
    const { id } = useParams();
    const jobs = useLoaderData();

    const [job, setJob] = useState({});
    const [contact, setContact] = useState([]);
    useEffect(() => {
        const selectJob = jobs?.find(job => parseInt(job.id) === parseInt(id));
        setJob(selectJob);
    }, [id])

    const { company_logo, job_title, remote_or_onsite, fulltime_or_parttime, company_name, location, salary, job_description, job_responsibility, educational_requirements, experiences, contact_information } = job;


    let phon;
    let mail;
    if (typeof contact_information != "undefined") {
        const { phone, email } = contact_information;
        phon = phone;
        mail = email;
    }


    const handelApplyJob = id => {
        console.log(id);
        addToDb(id);
    }


    return (
        <div className='details'>
           <div className='detail-bg'>
           <h3>Job Details page</h3>
           </div>

            <section className='job-description'>
                <section className='job-details'>
                    <p><span className='bold'>Job Description:</span> {job_description}</p>
                    <p><span className='bold'>Job Responsibility:</span> {job_responsibility}</p>
                    <p><span className='bold'>Educational Requirements:</span> {educational_requirements}</p>
                    <p><span className='bold'>Experience:</span> {experiences}</p>
                </section>
                <section className='job-contact'>
                    <h4>Job Details</h4>
                    <p><span className='bold'>Salary:</span> {salary}</p>
                    <p><span className='bold'>Job Title:</span> {job_title}</p>
                    <h4>Contact Information:</h4>
                    <p><span className='bold'>Phone:</span> {phon}</p>
                    <p><span className='bold'>Email:</span> {mail}</p>
                    <p><span className='bold'>Address:</span> {location}</p>
                    <button className='btn-nav btn-apply' onClick={() => handelApplyJob(id)}>Apply Now</button>

                </section>
            </section>
        </div>
    );
};

export default JobDetails;