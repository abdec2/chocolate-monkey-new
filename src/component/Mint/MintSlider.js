import React from 'react'
import './mintslider.scss'
import img1 from '../../assets/images/img1.png'
import img2 from '../../assets/images/img2.png'
import img3 from '../../assets/images/img3.png'
import img4 from '../../assets/images/img4.png'
import img5 from '../../assets/images/img5.png'
import img6 from '../../assets/images/img6.png'

function MintSlider() {
    return (
        <>

            <div className='logo-slider'>
                <div>
                    <img src={img1} alt="" />
                    <img src={img2} alt="" />
                    <img src={img3} alt="" />
                    <img src={img4} alt="" />
                    <img src={img5} alt="" />
                    <img src={img6} alt="" />
                </div>
                <div>
                    <img src={img1} alt="" />
                    <img src={img2} alt="" />
                    <img src={img3} alt="" />
                    <img src={img4} alt="" />
                    <img src={img5} alt="" />
                    <img src={img6} alt="" />
                </div>
                <div>
                    <img src={img1} alt="" />
                    <img src={img2} alt="" />
                    <img src={img3} alt="" />
                    <img src={img4} alt="" />
                    <img src={img5} alt="" />
                    <img src={img6} alt="" />
                </div>
            </div>
        </>
    )
}

export default MintSlider