import React from 'react'
import { Link } from 'react-router-dom';

function PageBanner({img,title}) {
    return ( 
        <div className="page-banner mb-65" style={{backgroundImage:`url(${img})`}}>
            <div className="container">
                <h1>{title}</h1>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li>|</li>
                    <li className='primary'>{title}</li>
                </ul>
            </div>
        </div>
     );
}

export default PageBanner;