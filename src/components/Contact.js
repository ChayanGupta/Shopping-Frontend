import React from 'react'
import { Link } from 'react-router-dom'

export default function Contact() {
    return (
        <div className="flex w-full min-h-screen justify-center items-center">
            <div className="flex flex-col space-y-6 bg-cyan-700 w-full max-w-4xl p-8 rounded-xl shadow-lg text-white
                    sm:p-12 md:flex-row md:space-x-6 md:space-y-0 overflow-hidden">
                <div className="flex flex-col space-y-8 justify-between">
                    <div>
                        <h1 className="font-bold text-4xl tracking-wide">Contact Us</h1>
                        <p className="pt-2 text-cyan-100 text-sm">Thank you for your interest in our Shopping App. 
                        If you have any questions or concerns, please feel free to contact us using the form. 
                        One of our friendly and knowledgeable representatives will get back to you as soon as possible. 
                        We value your feedback and look forward to hearing from you. 
                        Alternatively, you can reach us by phone or email using the information provided on this page.</p>
                    </div>
                    <div className="flex flex-col space-y-6">
                        <div className="inline-flex space-x-2 items-center">
                            <ion-icon name="call" className="text-teal-300 text-xl"></ion-icon>
                            <span>+(123) 456 7890</span>
                        </div>
                        <div className="inline-flex space-x-2 items-center">
                            <ion-icon name="mail" className="text-teal-300 text-xl"></ion-icon>
                            <span>shoppingapp@email.com</span>
                        </div>
                        <div className="inline-flex space-x-2 items-center">
                            <ion-icon name="location" className="text-teal-300 text-xl"></ion-icon>
                            <span>11, YN Road Indore, India</span>
                        </div>
                    </div>
                    <div className="flex space-x-4 text-lg">
                        <Link to="/contact"><ion-icon name="logo-facebook"></ion-icon></Link>
                        <Link to="/contact"><ion-icon name="logo-twitter"></ion-icon></Link>
                        <Link to="/contact"><ion-icon name="logo-linkedin"></ion-icon></Link>
                        <Link to="/contact"><ion-icon name="logo-instagram"></ion-icon></Link>
                    </div>
                </div>
                <div className="relative">
                    <div className="absolute w-40 h-40 bg-teal-400 rounded-full -right-28 -top-28"></div>
                    <div className="absolute w-40 h-40 bg-teal-400 rounded-full -left-28 -bottom-16"></div>
                    <div className="relative z-10 bg-white rounded-xl shadow-lg p-8 text-gray-600 md:w-80">
                        <form action="" className="flex flex-col space-y-4">
                            <div>
                                <label htmlFor="" className="text-sm">Your name</label>
                                <input type="text" placeholder="Your name" className="mt-2 ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300" />
                            </div>
                            <div>
                                <label htmlFor="" className="text-sm">Your Email</label>
                                <input type="email" placeholder="Your email" className="mt-2 ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300" />
                            </div>
                            <div>
                                <label htmlFor="" className="text-sm">Message</label>
                                <textarea type="text" placeholder="Message" className="mt-2 ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300"></textarea>
                            </div>
                            <button className="inline-block self-end bg-cyan-700 text-white font-bold rounded-lg px-6 py-2 uppercase text-sm hover:bg-cyan-900">Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
