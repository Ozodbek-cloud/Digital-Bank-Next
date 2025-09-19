import React from 'react'
import bg_img from "../img/bg-intro-desktop.svg"
import telephon from "../img/image-mockups.png"
import Image from 'next/image'
function Main() {
    return (
        <div>
            <main className='bg-[rgb(250,250,250)]' >
                <section className='' style={{
                    backgroundImage: `url(${telephon.src}), url(${bg_img.src})`,
                    backgroundPosition: "top -100px right -100px, top -200px right -300px",
                    backgroundRepeat: "no-repeat, no-repeat",  
                    zIndex: 9999 
                }}>
                    <div className='big-container   bg-no-repeat bg-top-right '
                    >

                        <div className='container  min-h-[700px] flex bg-no-repeat bg-top-right ' >
                            <div className='flex gap-10 flex-col py-30  justify-start items-start'>
                                <h1 className='text-6xl text-[#575870]'>Next generation<br />digital banking</h1>
                                <div>
                                    <p className='font-bold text-2xl text-gray-400'>Take your financial life online. Your Digitalbank, </p>
                                    <p className='font-bold text-2xl text-gray-400'>account will be a one-stop-shop for spending, saving </p>
                                    <p className='font-bold text-2xl text-gray-400'>budgeting, investing, and much more.</p>
                                </div>
                                <button className="p-3 border rounded-4xl font-bold bg-gradient-to-tr text-white px-7 from-[#2bbac7] to-[#30c889]">
                                    Request Invite
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className=' big-container bg-[#f4f5f7] '>
                        <div className='container'>
                            <div className='py-15 flex flex-col gap-10'>
                                <h1 className='text-5xl text-[#575870]'>Why Choose Digital Bank?</h1>
                                <div>
                                    <p className='font-bold text-2xl text-gray-400'>We leverage Open Banking to turn your bank account into your financial hub.</p>
                                    <p className='font-bold text-2xl text-gray-400'> Control your finances like never before. </p>
                                </div>
                            </div>
                            <div className='grid md:grid-cols-4  gap-5'>
                                  {/* <div className='min-h-[350px] border'>
                                    <Image src={} alt="logo"></Image>
                                  </div>
                                  <div className='min-h-[350px] border'>
                                    <Image src={} alt="logo"></Image>
                                  </div>
                                  <div className='min-h-[350px] border'>
                                    <Image src={} alt="logo"></Image>
                                  </div>
                                  <div className='min-h-[350px] border'>
                                    <Image src={} alt="logo"></Image>
                                  </div> */}
                            </div>
                        </div>

                    </div>
                </section>
            </main>
        </div >
    )
}

export default Main