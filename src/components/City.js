import React, {useEffect, useState} from 'react'
import axios from 'axios';

export default function City() {

    const [cities,setCities] = useState([]);
    const [citiesTampon,setCitiesTampon] = useState(null);

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

    const filterCities = (e) => {
        var input= e.target.value;
        console.log(input);
        
        setCitiesTampon((prevCity)=> {
            return cities.filter(city=>{
                return city.toLowerCase().includes(input.toLowerCase())
            })
        })
    }
    return (
        <div>
            <div className="row container">
                <form className="col s12 l12 m12">
                    <div className="input-field col s12">
                        <input id="city" className="input-field" type="text"  onChange={filterCities}/>
                        <label htmlFor="city" className="deep-orange-text">Search City</label>
                    </div>
                </form>
            </div>
            <div className="row">
                {
                    citiesTampon!=null ?(
                        citiesTampon.map(city=>(
                            <div className="col l3 m4 s6" key={city}>
                                <div className="card blue-grey darken-1">
                                    <div className="card-content white-text">
                                        <p>{city}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) :
                    (cities.map(city=>(
                        <div className="col l3 m4 s6" key={city}>
                            <div className="card blue-grey darken-1">
                                <div className="card-content white-text">
                                    <p>{city}</p>
                                </div>
                            </div>
                        </div>
                    )))
                }
            </div>
        </div>
    )
}
