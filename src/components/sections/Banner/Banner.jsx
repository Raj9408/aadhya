'use client'
import Button from "@/components/atoms/Button";
import "./banner.scss";
const Banner = () => {
    return (
        <section className='banner-section'>
            <video autoPlay loop muted playsInline className="banner-video">
                <source src='/hero-section.mp4' type="video/mp4" />
                Your browser does not support the video tag.
            </video>
           
            <div className="wave"></div>
            <div className='banner-content bg-0000'>
                <div className='container mx-auto '>
                    <div className=' mt-[100px]'>
                        <h1 className='banner-title text-72'>Global Solutions</h1>
                        <p className='max-w-3/5 text-72'>for a Borderless World</p>
                        <p className='my-[41px] text-lg text-ffff sm:w-1/2 w-3/4'>Unlock your business potential with our global services. We provide innovative solutions for international trade, market penetration, and operational excellence, making your global ventures seamless and profitable.</p>
                        <Button btnText="Find Out More" btnStyle="PRIMARY" onClick={() => { }} />
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Banner;