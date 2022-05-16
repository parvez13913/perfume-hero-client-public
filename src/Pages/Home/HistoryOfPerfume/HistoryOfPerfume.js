import React from 'react';
import historyOfPerfume from '../../../images/perfume-history/history-of-perfume.png';
import './HistoryOfPerfume.css';

const HistoryOfPerfume = () => {
    return (
        <div className='container'>
            <h1 className='text-center my-5'>History Of Perfume</h1>
            <div className='perfume-history-container'>
                <div className='w-75 shadow-lg p-3 rounded history-card'>
                    <div className='history-image'>
                        <img src={historyOfPerfume} alt="PerfumeHistory" />
                    </div>
                    <div>
                        <p>The word perfume is used today to describe scented mixtures and is derived from the Latin word, per fumus, meaning through smoke. The word Perfumery refers to the art of making perfumes. Perfume was further refined by the Romans, the Persians and the Arabs. Although perfume and perfumery also existed in East Asia, much of its fragrances were incense based. The basic ingredients and methods of making perfumes are described by Pliny the Elder in his Naturalis Historia.</p>
                    </div>
                </div>
                <div className='history-video'>
                    <iframe className='youtube-video' width="560" height="315" src="https://www.youtube.com/embed/NwbCvbQra0A" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
            </div>
        </div>
    );
};

export default HistoryOfPerfume;