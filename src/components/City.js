import React, {useEffect, useState} from 'react'
import axios from 'axios';

export default function City() {

    const [cities,setCities] = useState([]);

    useEffect(()=>{
        getCities()
    },[])


    // const getCities = async()=>{
    //     const respose = await fetch('http://worldtimeapi.org/api/timezones')
    //     const cities = await respose.json();
    //     console.log(cities)
    // }

    const getCities=()=> {
        axios.get('http://worldtimeapi.org/api/timezones')
            .then(res => {
                setCities(res.data);
            })
    }
    return (
        <div className="row">
            {cities.map(city=>(
                <div className="col l3 m4 s6" key={city}>
                    <div className="card blue-grey darken-1">
                        <div className="card-content white-text">
                            <p>{city}</p>
                        </div>
                    </div>
                </div>
            ))}
            
        </div>
    )
}
