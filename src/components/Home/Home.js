import React, { useEffect, useState } from 'react';
import data from '../../fakeData/fakeData'
import League from './../League/League';
import './Home.css'
import Header from './../Header/Header';

const Home = () => {
    const[leagues,setLeagues] = useState([])
    useEffect(()=>{
         setLeagues(data)
    },[])
     
    return (
        <section className='home'>
              <Header  title={true}></Header>
            <div style={{ paddingTop:'20px'}} className="container">
                <div className='row row-cols-1 row-cols-md-3 g-4'>
                    {
                        leagues.map(league => <League key={league.idLeague} league={league}></League>)
                    }
                </div>      
            </div>
        </section>
    );
};

export default Home;