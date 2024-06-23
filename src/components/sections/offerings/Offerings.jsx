"use client"
import Image from 'next/image';
import './offering.scss';
import offerOneImg from "@/assets/images/offerImg1.png"
import offerTwoImg from "@/assets/images/offering2.png"
import offerThreeImg from "@/assets/images/offering3.png"
import offerFourImg from "@/assets/images/offering4.png"
import offerFiveImg from "@/assets/images/offering5.png"
import ring1 from "@/assets/images/ring-vector.png"
import Button from '@/components/atoms/Button';
const Offerings = () => {
    return (
        <section className="offering-container" >
            <div className="container mx-auto">
                <h4 className="text-48 text-0C0C font-bold text-center py-100">Our Offerings</h4>
                {/* grid start  */}
                <div className='flex justify-content-center md:flex-row flex-col gap-4'>
                    <div className='md:w-1/2 py-50'>
                        <div className='offer-img-box  md:mx-0 mx-auto'>
                            <span className='vector'> <Image src={ring1} alt="ring" className="fit-img" /></span>
                            <Image width={535} height={535} src={offerOneImg} alt="offer-1" className="fit-img" />
                        </div>
                    </div>
                    <div className='md:w-1/2 py-50'>
                        <h3 className="text-60 text-0C0C font-semibold ">Infrastructure Services</h3>
                        <p className='py-7 text-26 text-4B4C'>IT infrastructure refers to the combined components needed for the operation and management of enterprise IT services and IT environments. IT infrastructure is flexible, reliable and secure, it can help an enterprise meet its goals and provide a competitive edge in the market.</p>
                        <Button btnText="Learn More" btnStyle="PRIMARY" className="!px-8" onClick={() => { }} />
                    </div>
                </div>
                {/* grid end  */}
                {/* grid start  */}
                <div className='flex justify-content-center md:flex-row flex-col-reverse  gap-4'>
                    <div className='md:w-1/2 py-50'>
                        <h3 className="text-60 text-0C0C font-semibold ">Data center solutions</h3>
                        <p className='py-7 text-26 text-4B4C'>Data center solutions refer to the products and services needed to create and maintain a data center. Products include IT equipment, like servers, routers, storage systems, firewalls, and subsidizing infrastructure for the physical data center, like cooling systems, batteries, generators, and cabling.
                        </p>
                        <Button btnText="Learn More" btnStyle="PRIMARY" className="!px-8" onClick={() => { }} />
                    </div>
                    <div className='md:w-1/2 py-50'>
                        <div className='offer-img-box md:mx-0  md:ms-auto mx-auto '>
                            <span className='vector'> <Image src={ring1} alt="ring" className="fit-img" /></span>
                            <Image width={535} height={535} src={offerTwoImg} alt="offer-1" className="fit-img " />
                        </div>
                    </div>
                </div>
                {/* grid end  */}
                {/* grid start  */}
                <div className='flex justify-content-center md:flex-row flex-col gap-4'>
                    <div className='md:w-1/2 py-50'>
                        <div className='offer-img-box  md:mx-0 mx-auto'>
                            <span className='vector'> <Image src={ring1} alt="ring" className="fit-img" /></span>
                            <Image width={535} height={535} src={offerThreeImg} alt="offer-1" className="fit-img" />
                        </div>
                    </div>
                    <div className='md:w-1/2 py-50'>
                        <h3 className="text-60 text-0C0C font-semibold ">Cloud Computing</h3>
                        <p className='py-7 text-26 text-4B4C'>Cloud computing is the delivery of further services through the Internet, including data storage, servers, databases, networking, and software. Cloud-based storage allows it to save files to a remote database and rescue them on demand.</p>
                        <Button btnText="Learn More" btnStyle="PRIMARY" className="!px-8" onClick={() => { }} />
                    </div>
                </div>
                {/* grid end  */}
                {/* grid start  */}
                <div className='flex justify-content-center md:flex-row flex-col-reverse  gap-4'>
                    <div className='md:w-1/2 py-50'>
                        <h3 className="text-60 text-0C0C font-semibold ">Data Security</h3>
                        <p className='py-7 text-26 text-4B4C'>Information Security is a significant challenge for organizations due to increasing demand for open networks and evolving security threats. Effective security solutions are essential to protect data and facilitate business growth in this environment.
                        </p>
                        <Button btnText="Learn More" btnStyle="PRIMARY" className="!px-8" onClick={() => { }} />
                    </div>
                    <div className='md:w-1/2 py-50'>
                        <div className='offer-img-box md:mx-0  md:ms-auto mx-auto '>
                            <span className='vector'> <Image src={ring1} alt="ring" className="fit-img" /></span>
                            <Image width={535} height={535} src={offerFourImg} alt="offer-1" className="fit-img " />
                        </div>
                    </div>
                </div>
                {/* grid end  */}
                {/* grid start  */}
                <div className='flex justify-content-center md:flex-row flex-col gap-4'>
                    <div className='md:w-1/2 py-50'>
                        <div className='offer-img-box  md:mx-0 mx-auto'>
                            <span className='vector'> <Image src={ring1} alt="ring" className="fit-img" /></span>
                            <Image width={535} height={535} src={offerFiveImg} alt="offer-1" className="fit-img" />
                        </div>
                    </div>
                    <div className='md:w-1/2 py-50'>
                        <h3 className="text-60 text-0C0C font-semibold ">Cyber security</h3>
                        <p className='py-7 text-26 text-4B4C'>Cyber security is the application of technologies, processes, and regimes to protect systems, networks, programs, devices, and data from cyber-attacks. It aims to reduce the risk of cyber-attacks and protect against the unauthorized exploitation of systems, networks, and technologies.</p>
                        <Button btnText="Learn More" btnStyle="PRIMARY" className="!px-8" onClick={() => { }} />
                    </div>
                </div>
                {/* grid end  */}
            </div >
        </section >
    )
}

export default Offerings