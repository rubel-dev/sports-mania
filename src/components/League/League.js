import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight} from '@fortawesome/free-solid-svg-icons'
import './League.css'
import { Link } from 'react-router-dom';


const League = (props) => { 
     const{idLeague,img,league,type} = props.league;
    return ( 
            <div className="col text-center ">
                <div className="card h-100 p-4">
                <img src={img} className="card-img-top w-50 rounded mx-auto d-block img-fluid"  alt="..."></img>
                <div className="card-body">
                    <h4 className="card-title">{league}</h4>
                    <p className="card-text">Sports type:{type}</p>
                </div>
                <div className="card-footer card-button">
                   <Link to={`/league/${idLeague}`}> <button className='main-btn'>Explore <FontAwesomeIcon icon={faArrowRight} /></button></Link>
                </div>
                </div>
            </div> 
    );
};

export default League;