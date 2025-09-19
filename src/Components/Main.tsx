import React from 'react'
import bg_img from "../img/bg-intro-desktop.svg"
import telephon from "../img/image-mockups.png"
function Main() {
    return (
        <div>
            <main className='bg-[#fafafa]'>
                <section>
                    <div className='big-container  bg-no-repeat bg-top-right '
                        style={{
                            backgroundImage: `url(${telephon.src}), url(${bg_img.src})`,
                            backgroundPosition: "top -100px right -100px, top -200px right -300px",
                            backgroundRepeat: "no-repeat, no-repeat",
                        }}>

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
                </section>
            </main>
        </div >
    )
}

export default Main