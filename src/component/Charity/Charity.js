import React from 'react'
import './charity.css'
import Footer from '../footer/Footer';
import Header from '../navbar/Navbar';
import charity from '../../assets/icons/charity.svg'
import { Helmet } from 'react-helmet';
function Charity() {
    return (
        <>
            <Helmet>
                <title>Chocolate Monkeys | Charity</title>
            </Helmet>
            <Header />
            <div className='charity'>
                <div className='charityLeft'>
                    <span className='charityLeftHeader'>CHARITY</span>
                    <span className='charityLeftExcerpt'>One of the components of Chocolate Monkeys that is super important to us is the charity aspect. We plan to give 15% of each purchase of a Chocolate Monkey NFT to charity.</span>
                    <button style={{ marginTop: "30px", fontWeight: 'bold' }} className='btn btn1'>MAKE YOUR CONTRIBUTION</button>
                </div>

                <div className='charityRight'>
                    <img src={charity} alt="" />
                </div>
            </div>
            <div className='charity-ftr'>
                <span>When the creator of Chocolate Monkeys was 16 years old, he received his first kidney transplant. At the age of 18 he was diagnosed with Non-Hodgkin’s Lymphoma and lost his kidney. This is when he was introduced to the Make-a-Wish Foundation where he wished for a Macintosh computer. Make-a-Wish changed Brian’s life. The wish itself was amazing, but the real magic was the happiness it gave to everyone involved. Sometimes people don’t realize that when you are chronically ill, the pain you feel, and fear is shared by everyone around you. When a wish is granted, for that finite amount of time which can be a month, or a week or even just a day there is a shared moment of happiness or relief. The wish child and everyone around that child forget everything that is scary in their life. It does not matter if that wish is a trip to Disneyworld or that Macintosh computer. It’s that moment of happiness no matter how long it lasts, and the memories one takes from the experience that you remember forever. This is why Chocolate Monkeys means so much and why charity is such an important aspect of what we are trying to do.</span>
            </div>
            <Footer />
        </>
    )
}

export default Charity