import React from 'react'
import logo1 from '../img/logo1.PNG'
import logo2 from '../img/logo2.PNG'
import logo3 from '../img/logo3.PNG'


export default function Iconhome() {
    return (
        <div className="iconhome">

            <div className="iconhome">
            <img className="logo" src={logo1}/>
            <h5>READY TO BE IMPRESSED</h5>
            <p>Lorem ipsum dolor sit amet, consecte tur adipiscing elitin uta</p>
            </div>

            <div className="iconhome">
            <img className="logo2" src={logo2}/>
            <h5>POWERFUL SOLUTIONS</h5>
            <p>Lorem ipsum dolor sit amet, consecte tur adipiscing elitin uta</p>
            </div>

            <div className="iconhome">
            <img className="logo3" src={logo3}/>
            <h5>LEADERS OF TOMORROW</h5>
            <p>Lorem ipsum dolor sit amet, consecte tur adipiscing elitin uta</p>
            </div>
        </div>
    )
}
