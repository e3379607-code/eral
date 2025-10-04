import Button from '../UI/Button/Button'
import './ContactSection.css'
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { MdLocationOn } from "react-icons/md";
import { SlSocialLinkedin } from "react-icons/sl"
import { LuTwitter } from "react-icons/lu";
import { FaInstagram } from "react-icons/fa6";
import { AiOutlineTwitch } from "react-icons/ai";



const ContactSection = () => {
    return (
        <section id='contacts'>
            <div className="container">
                <div className='contact_title'>
                    <h1 className='title'>
                        Get In <span>Touch</span>
                    </h1>
                    <p className='title_desc'>
                        Have a project in mind or want to 
                        collaborate? Feel free to reach out. 
                        I'm always open to discussing new opportunities.
                    </p>
                </div>

                <div className="contact_info">
                    <div className="info">
                        <h1>Contact Information</h1>
                        <div className="info_wrapper">
                            <div className="info_card">
                                <img src="" alt="" />
                                <div className="info_text">
                                    <h3>Email</h3>
                                    <p><MdEmail className='card_email'/>   e3379607@gmail.com</p> 
                                </div>
                            </div>
                            <div className="info_card">
                                <img src="" alt="" />
                                <div className="info_text">
                                    <h3>Phone</h3>
                                    <p><FaPhone className='card_phone'/>   +7 771 535 4260</p>
                                </div>
                            </div>
                            <div className="info_card">
                                <img src="" alt="" />
                                <div className="info_text">
                                    <h3>Location</h3>
                                    <p><MdLocationOn className='card_location'/>    Kazakhstan, Almaty</p>
                                                <h2 className='connnect'>Connect With Me</h2>
                                             <div className='connect'>
                                                    <div className='social-icons'></div>
                                                    <div className='in'>
                                                        <SlSocialLinkedin />
                                                    </div>
                                                    
                                                    <div className='twitter'>
                                                        <LuTwitter />
                                                    </div>

                                                    <div className='instagram'>
                                                        <FaInstagram />
                                                    </div>
                                                    
                                                    <div className='twitch'>
                                                        <AiOutlineTwitch />
                                                    </div>
                                             </div>
                                             
                                             <footer>
                                                <div>© 2025 Eraly.co. All rights reserved.</div>
                                                <a href='#'></a>
                                             </footer>
                        
                                    <div
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <form className="contact_form">
                        <div>
                            <div className='message'>Send a Message</div>
                            <label htmlFor="name">Your Name</label>
                            <input 
                                type="text" 
                                id='name' 
                                placeholder='write your name' 
                            />
                        </div>
                        <div>
                            <label htmlFor="email">Your Email</label>
                            <input 
                                type="text" 
                                id='email' 
                                placeholder='write your email'
                            />
                        </div>
                        <div>
                            <label htmlFor="message">Your Message</label>
                            <textarea name="" id="message"></textarea>
                        </div>
                        <Button>
                            Send Message
                        </Button>
                    </form>
                    
                    
                </div>
                
            </div>
        </section>
    )
}

export default ContactSection