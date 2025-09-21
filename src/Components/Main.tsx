import React from 'react'
import bg_img from "../img/bg-intro-desktop.svg"
import telephon from "../img/image-mockups.png"
import Image from 'next/image'
import budgeting from "../img/icon-budgeting.svg"
import onboarding from "../img/icon-onboarding.svg"
import online from "../img/icon-online.svg"
import gn from "../img/icon-api.svg"
import dollar from "../img/image-currency.jpg"
import confetty from "../img/image-confetti.jpg"
import mockups from "../img/image-restaurant.jpg"
import plane from "../img/image-plane.jpg"
import { StaticImageData } from "next/image";
type Article = {
    id: number;
    img: StaticImageData;
    author: string;
    title: string;
    desc: string;
};

const articles: Article[] = [
    {
        id: 1,
        img: dollar,
        author: "Claire Robinson",
        title: "Receive money in any currency with no fees",
        desc: "The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single ..."
    },
    {
        id: 2,
        img: mockups,
        author: "Wilson Hutton",
        title: "Treat yourself without worrying about money",
        desc: "Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you ..."
    },
    {
        id: 3,
        img: plane,
        author: "Wilson Hutton",
        title: "Take your Digitalbank card wherever you go",
        desc: "We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even ..."
    },
    {
        id: 4,
        img: confetty,
        author: "Claire Robinson",
        title: "Our invite-only Beta accounts are now live!",
        desc: "After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through ..."
    },
];

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
                    <div className='big-container  '
                    >

                        <div className='container  min-h-[700px] flex' >
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
                    <div className=' big-container bg-[#f4f5f7] py-10'>
                        <div className='container'>
                            <div className='py-15 flex  flex-col gap-10'>
                                <h1 className='text-5xl text-[#575870]'>Why choose Digitalbank?</h1>
                                <div>
                                    <p className='text-lg text-gray-500'>
                                        We leverage Open Banking to turn your bank account into your financial hub.
                                    </p>
                                    <p className='text-lg text-gray-500'>
                                        Control your finances like never before.
                                    </p>
                                </div>
                            </div>

                            <div className='grid  md:grid-cols-4 grid-cols-1 gap-10 mt-10 '>
                                <div className='flex flex-col md:items-start items-center   gap-4'>
                                    <Image src={online} alt="Online Banking" className='' />
                                    <h3 className='text-2xl font-semibold text-[#575870]'>Online Banking</h3>
                                    <p className='text-gray-500 text-[18px]'>
                                        Our modern web and mobile applications allow you to keep track of your
                                        finances wherever you are in the world.
                                    </p>
                                </div>

                                <div className='flex flex-col md:items-start items-center   gap-4'>
                                    <Image src={budgeting} alt="Simple Budgeting" className='' />

                                    <h3 className='text-2xl font-semibold text-[#575870]'>Simple Budgeting</h3>
                                    <p className='text-gray-500 text-[18px]'>
                                        See exactly where your money goes each month. Receive notifications
                                        when you’re close to hitting your limits.
                                    </p>
                                </div>

                                <div className='flex flex-col md:items-start items-center   gap-4'>
                                    <Image src={onboarding} alt="Fast Onboarding" className='' />
                                    <h3 className='text-2xl font-semibold text-[#575870]'>Fast Onboarding</h3>
                                    <p className='text-gray-500 text-[18px]'>
                                        We don’t do branches. Open your account in minutes online and start
                                        taking control of your finances right away.
                                    </p>
                                </div>

                                <div className='flex flex-col md:items-start items-center   gap-4'>
                                    <Image src={gn} alt="Open API" className='' />
                                    <h3 className='text-2xl font-semibold text-[#575870]'>Open API</h3>
                                    <p className='text-gray-500 text-[18px]'>
                                        Manage your savings, investments, pension, and much more from one
                                        account. Tracking your money has never been easier.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>
                <section>
                    <div className="big-container bg-white py-16">
                        <div className="container mx-auto">
                            <h1 className="text-3xl md:text-4xl font-semibold text-[#575870] mb-10">      Latest Articles  </h1>
                            <div className="grid md:grid-cols-4 gap-8">
                                {articles.map((article) => (
                                    <div key={article.id} className="bg-white rounded-lg shadow-sm overflow-hidden cursor-pointer hover:shadow-md transition">
                                        <div className="relative w-full h-40">
                                            <Image src={article.img} alt={article.title} fill className="object-cover" />
                                        </div>
                                        <div className="p-5">
                                            <p className="text-xs text-gray-400 mb-2">      By {article.author}  </p>
                                            <h3 className="text-lg font-semibold text-[#575870] mb-2">    {article.title}</h3>
                                            <p className="text-sm text-gray-500">{article.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div >
    )
}

export default Main