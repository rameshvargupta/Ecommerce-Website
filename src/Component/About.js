import axios from 'axios'
import React, { useEffect, useState } from 'react'

const About = () => {
    const [data, setData] = useState([])
    const [selectData, setSelectData] = useState("")

    useEffect(() => {
        axios.get("https://restcountries.com/v3.1/all").then(resp => setData(resp.data)).catch(err => console.log(err))
    }, [])
    const handelsubmit = (e) => {
        setSelectData(e.target.value)
    }

    return (
        <div className='my-5 container'>
            <h1>World Map</h1>
            <select onChange={handelsubmit}>
                <option >Select Country</option>
                {data.map((country, index) => {
                    return (<>
                        <option key={index}>{country.name.common}</option>
                    </>)
                }

                )}
            </select>

            {selectData && data.filter((country) => country.name.common === selectData).map((listItem, index) => {
                return (
                    <div className='my-4' key={index}>
                        <h2>Country Name:- <span className='fw-bolder'>{listItem.name.common}</span></h2>
                        <h2>{listItem.name.official}</h2>
                        <h2>population:- {listItem.population}</h2>
                        <h2>area:- {listItem.area}</h2>
                        <h2> continents:- {listItem.continents}</h2>

                        <img src={listItem.flags.png} alt="" />
                        <h2>About of flage:- {listItem.flags.alt}</h2>

                       

                    </div>
                )

            })}



        </div>
    )
}

export default About


