import React from 'react'
import pump from "../assets/3.png"

const Aboutus = () => {
    return (
        <div className='Aboutus'>
            <p>
                INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION.
            </p>
            <div>
                <img src={pump} alt="pumpset" />
            </div>
            <p>Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors </p>
        </div>
    )
}

export default Aboutus
