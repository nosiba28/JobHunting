import React, { useEffect, useState } from 'react';
import './Home.css'
import Header from '../Header/Header';
import { Outlet, useLoaderData } from 'react-router-dom';
import JobCategory from '../JobCategory/JobCategory';
import Feature from '../Feature/Feature';
import Lottie from "lottie-react";
import hire from "../../assets/hire.json"

const Home = () => {
    const jobs = [
        {
            "id": "1",
            "icon": "👨‍💼",
            "title": "Sales",
            "jobs": 150
        },
        {
            "id": "2",
            "icon": "🧑‍💻",
            "title": "Information Technology",
            "jobs": 200
        },
        {
            "id": "3",
            "icon": "🏥",
            "title": "Healthcare",
            "jobs": 300
        },
        {
            "id": "4",
            "icon": "📚",
            "title": "Education",
            "jobs": 100
        }
    ]
    const features = useLoaderData();
    const [sixData, setSixData] = useState(true);
    const [fourData, setFourData] = useState();

    const handleShowAll = () => {
        setSixData(false);
    }

    return (
        <div>
            <section className='banner'>
                <div className='banner-details'>
                    <h1>One Step<br></br> Closer To Your<br></br> <span className='dream-job'>Dream Job</span></h1>
                    <p>Explore thousands of job opportunities with all the<br></br> information you need. Its your future. Come find it. Manage all<br></br> your job application from start to finish.</p>
                    <button className='btn-nav'>Get Started</button>
                </div>
                <div className='banner-img'>
                    <Lottie animationData={hire} loop={true}></Lottie>
                </div>
            </section>

            <section className='job-category'>
                <h3>Job Category List</h3>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
                <div className='categories'>
                    {
                        jobs.map(job => <JobCategory
                            key={job.id}
                            job={job}
                        ></JobCategory>)
                    }
                </div>
            </section>

            <section>
                <h3>Featured Jobs</h3>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
                <div className='features'>
                    {
                        features.slice(0, sixData ? 4 : 6).map(feature => <Feature
                            key={feature.id}
                            feature={feature}
                        ></Feature>)
                    }

                </div>
            </section>
            <button className='btn-nav' onClick={handleShowAll}>See All Jobs</button>

        </div>
    );
};

export default Home;