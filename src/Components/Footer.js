import React from 'react'
import phone from "../assets/phone-call.png"
import facebook from "../assets/facebook.png"
import earth from "../assets/earth.png"

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-top'>
                <h1>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</h1>
                <p>

                    CHEMICALS<span> | </span>PROCESS POWER WATER<span> | </span>WASTE WATER OILS<span> | </span>GAS PHARMA SUGARS<span> | </span>DISTILLERIES PAPER<span> | </span>PULP MARINE<span> | </span>DEFENCE METAL<span> | </span>MINING FOOD<span> | </span>BEVERAGE PETROCHEMICAL<span> | </span>REFINERIES SOLAR BUILDING HVAC FIRE FIGHTING AGRICULTURE<span> | </span>RESIDENTIAL
                </p>
            </div>

            <div className='footer-bottom'>
                <div>
                    <img src={phone} alt="phone" />
                    <span>Toll free 1800 200 1234</span>
                </div>
                <div>
                    <img src={facebook} alt="facebook" />
                    <span>www.facebook.com/cripumps</span>
                </div>
                <div>
                    <img src={earth} alt="earth" />
                    <span>www.crigroups.com</span>
                </div>
            </div>

        </div>
    )
}

export default Footer
