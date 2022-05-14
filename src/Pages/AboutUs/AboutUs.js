import React from 'react';
import { ProgressBar } from 'react-bootstrap';
import developerPhoto from '../../images/about/developer.jpg';
import './AboutUs.css';

const AboutUs = () => {
    return (
        <div className='container'>
            <div className='about-section'>
                <div className='developer-photo'>
                    <img className='rounded-pill mt-5' src={developerPhoto} alt="" />
                </div>
                <div>
                    <h1>Parvez Rahman</h1>
                    <p>Hi I am Parvez Rahman. I am an honors first year student of Chemistry Department of Jhenaidah K.C. College. My weakness over programming since I was in school. I have decided to learn web development by thinking a lot and I am learning well. I want to be a good person and a good web developer.I want to develop my skills more in the next 5 months and get a good Jobs. I will do whatever it takes to develop my own skills.</p>
                </div>
            </div>
            <div className='text-center container my-5'>
                <h3 className='my-3'>My Skill</h3>
                <div className='border'>
                    <div className='w-50 mx-auto my-3'>
                        <h4>HTML</h4>
                        <ProgressBar animated now={90} />
                    </div>
                    <div className='w-50 mx-auto my-3'>
                        <h4>CSS</h4>
                        <ProgressBar animated now={85} />
                    </div>
                    <div className='w-50 mx-auto my-3'>
                        <h4>BOOTSTRAP</h4>
                        <ProgressBar animated now={75} />
                    </div>
                    <div className='w-50 mx-auto my-3'>
                        <h4>TAILWIND</h4>
                        <ProgressBar animated now={50} />
                    </div>
                    <div className='w-50 mx-auto my-3'>
                        <h4>JAVASCRIPT</h4>
                        <ProgressBar animated now={70} />
                    </div>
                    <div className='w-50 mx-auto mt-3'>
                        <h4>REACT</h4>
                        <ProgressBar animated now={64} />
                    </div>
                    <div className='w-50 mx-auto my-3'>
                        <h4>Node Js</h4>
                        <ProgressBar animated now={20} />
                    </div>
                    <div className='w-50 mx-auto my-3'>
                        <h4>Express</h4>
                        <ProgressBar animated now={30} />
                    </div>
                    <div className='w-50 mx-auto my-3'>
                        <h4>MongoDb</h4>
                        <ProgressBar animated now={40} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;