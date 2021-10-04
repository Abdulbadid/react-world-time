import React, {useEffect} from 'react'
import axios from 'axios';

export default function City() {

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
                console.log(res.data)
            })
    }
    return (
        <div>
            
        </div>
    )
}
