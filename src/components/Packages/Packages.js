import React, { useEffect, useState } from 'react';

import Package from '../Package/Package';
import "./Packages.css";



const Packages = () => {
    const [packages, setPackages] = useState([])

    useEffect( () => {
        fetch('https://nameless-sea-23305.herokuapp.com/services')
        .then(res => res.json())
        .then(data => setPackages(data));
},[])
    return (
        
         <div className="package-container container my-5">
                {

                     packages.map(packages =>  <Package
                     
                     key={packages.id}
                     packages={packages}
                     
                     
                     >
                     </Package>)
                

                } 
         </div> 
    );
};

export default Packages;












