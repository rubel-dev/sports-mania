import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import data from '../../fakeData/fakeData'
import found from '../../images/Icon/found 1.png'
import flag from '../../images/Icon/flag (1) 1.png'
import football from '../../images/Icon/football (1) 1.png'
import genderSign from '../../images/Icon//male-gender-sign 1.png'
import maleImg from '../../images/Photo/male.png'
import femaleImg from '../../images/Photo/female.png' 
import facebook from '../../images/Icon/Facebook.png'
import twitter from '../../images/Icon/Twitter.png'
import youtube from '../../images/Icon/YouTube.png'
 
import './LeagueDetail.css'
import Header from './../Header/Header';

const LeagueDetail = () => {
    const[detail, setDetail] = useState({})
    const{league,type,founded,country,gender,img} = detail;
    const {id} = useParams(); 
    useEffect(()=>{
        const league= data.find(league => league.idLeague === id);
        setDetail(league)
    },[])  
    return (
        <section>
              <Header img={img}></Header>
           <div style={{ paddingTop:'20px'}}  className='league-detail'>
            <div className="container">
                <div className="row league-content">
                    <div className="col-md-6 same-style">
                        <h4>{league}</h4>
                        <div className='d-flex align-items-center'>
                            <img  src={found} alt="" />
                            <p>Founded : {founded}</p>
                        </div>
                        <div className='d-flex align-items-center'>
                           <img src={flag} alt="" />
                           <p>Country : {country}</p> 
                        </div>
                        <div className='d-flex align-items-center'>
                           <img src= {football} alt="" />
                           <p>Sport Type : {type}</p>
                        </div>
                        <div className='d-flex align-items-center'>
                            <img src= {genderSign} alt="" />
                            <p>Gender : {gender}</p>
                        </div>
                    </div>
                    <div className="col-md-6 dynamic-img"> 
                       {
                          
                          gender === "Male" ? <img src={maleImg} className='img-fluid' alt="" /> : <img src={femaleImg} className='img-fluid' alt=''/>
                       }
                    </div>
                </div>
                <div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis incidunt exercitationem quam odio molestiae sapiente alias neque fugit velit veniam temporibus repellat ex doloribus in magni, corrupti hic sed quas a nisi cupiditate quibusdam laboriosam perferendis? Rerum vel, repellat exercitationem voluptatum fuga ex aut in nostrum id, eius natus officia culpa quae, accusamus architecto repudiandae enim consequatur molestias! Nulla corrupti hic nemo? Iure velit ea porro fugit quam! Officiis magni omnis dolor facere asperiores laborum molestias voluptatem porro, soluta aspernatur nisi non quasi quo veniam ducimus mollitia distinctio, laudantium tenetur quaerat dignissimos suscipit a? Vitae dignissimos sequi laborum corrupti qui.</p>
                    <br />
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias omnis eius a animi alias culpa ducimus earum, nulla tempora, cumque, porro error vero quas! Qui pariatur repellat minus aliquam itaque vel incidunt aut in nobis atque maxime eius, numquam ratione alias, commodi deserunt harum illo non veritatis dolorum animi facere nisi at? Ea quod repellat cumque, qui voluptatum ipsam. Blanditiis tenetur sed nostrum accusantium sequi? Nesciunt nobis impedit obcaecati vero quis aspernatur exercitationem quos voluptate ad libero culpa deleniti tempore, aut incidunt? Tenetur harum consequatur quaerat praesentium porro sit animi mollitia pariatur rerum? Eum asperiores expedita quisquam labore natus vitae.</p>
                </div>
                <div className="footer">
                    <img src={facebook} alt="" />
                    <img src={twitter} alt="" />
                    <img src={youtube} alt="" />
                </div>
            </div>
        </div>   
        </section>
    );
};

export default LeagueDetail;