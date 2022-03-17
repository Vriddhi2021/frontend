import Footer from '../components/footer';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Hero from '../components/hero';
import Navbar from '../components/Navbar';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import bgHero from '../public/contactBanner.png';
import bg from '../public/bg2.png';
import CustomTextField from '../components/CustomTextField';
import '../node_modules/react-accessible-accordion/dist/fancy-example.css'
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';


function contact() {
  return (
    <>  
        <Navbar/>
        <Hero
             title="Contact us"
             img={bgHero.src}
        />
        <section className='contactusPage' style={{backgroundImage: `url(${bg.src}`}}>
            <div className='col-10 col-md-8 mx-auto text-white'>
                <div className="row">
                    <div className="col-12 col-md-6 mx-auto p-4 my-5">
                       <div className='p-5 contactInfo' style={{backgroundColor: "#2B0C52", position: "relative"}}>
                       <h4>CONTACT INFO</h4><br/>
                        <div className='icon locatinIcon d-flex'><LocationOnIcon className='m-2'/><p>National Institute of Technology Rourkela, Jindal Colony, Udit Nagar, Rourkela, Odisha 769001</p></div>
                        <div className='icon locatinIcon d-flex'><EmailIcon className='m-2'/><p>vriddhinitrourkela@gmail.com</p></div>
                        <ul className="soci_wrap mt-5">
                            <li>
                            <a href="https://www.facebook.com/nitrkl.vriddhi/">
                                <span className="material-icons-outlined p-2 "><i className="fa fa-2x fa-facebook-square" aria-hidden="true"></i> </span>
                            </a>
                            </li>
                            <li>
                            <a href="https://twitter.com/vriddhinitr">
                                <span className="material-icons-outlined p-2"><i className="fa fa-2x fa-twitter-square" aria-hidden="true"></i>  </span>
                            </a>
                            </li>
                            <li>
                            <a href="https://instagram.com/vriddhi.nitr">
                                <span className="material-icons-outlined p-2"><i className="fa fa-2x fa-instagram" aria-hidden="true"></i>  </span>
                            </a>
                            </li>
                            <li>
                            <a href="https://youtube.com/channel/UCy6TG8YOKd4_RrB_qj9bTVg">
                                <span className="material-icons-outlined p-2"><i className="fa fa-2x fa-youtube-square" aria-hidden="true"></i>  </span>
                            </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/vriddhi-nit-rourkela-456664234">
                                <span className="material-icons-outlined p-2"><i className="fa fa-2x fa-linkedin-square" aria-hidden="true"></i> </span>
                                </a>
                            </li>
                    </ul>
                       </div>
                    </div>
                    <div className="col-12 col-md-6 mx-auto p-4 my-5">
                    <div className='p-5 sendMessage' style={{backgroundColor: "#2B0C52"}}>
                    <h4>SEND A MESSAGE</h4>
                        <Box
                            component="form"
                            sx={{
                                '& > :not(style)': { m: 1, width: '25ch' },
                            }}
                            noValidate
                            autoComplete="off"
                        >

                        <div className="row my-3 pt-3" style={{width: "100%"}}>
                        <div className="col-12 col-md-6 mx-0 px-0"><div className='sam1 px-0'><CustomTextField className="text-white sam1" id="standard-basic" label="First Name" variant="standard" /></div></div>
                        <div className="col-12 col-md-6 mx-0 px-0"><div className='sam2 px-0'><CustomTextField className="text-white sam2" id="standard-basic" label="Last Name" variant="standard" /></div></div>
                        </div>
                        <div className="row my-3" style={{width: "100%"}}><CustomTextField className="text-white" id="standard-basic" label="Email Address" variant="standard" /></div>
                        <div className="row my-3" style={{width: "100%"}}><CustomTextField className="text-white" id="standard-basic" label="Mobile Number" variant="standard" /></div>
                        <div className="row my-3" style={{width: "100%"}}><CustomTextField className="text-white" id="standard-basic" label="Write your message here..." variant="standard" /></div>
                        <div className="row mt-4" style={{width: "100%"}}>
                        <Button 
                        sx={{
                                borderColor: "#510578",
                                background: "#AA1EF1",
                                color: "white",
                            }}
                        className='py-2 ' variant="outlined">Send</Button></div>

                        </Box>
                    </div>
                    </div>
                </div>
            </div>
            <div className="col-10 col-md-9 mx-auto pb-5">
            <h1 className='text-center text-white my-5'>Frequently Asked Questions</h1>
            <Accordion allowZeroExpanded>
            <div className="row">
            <div className="col-12 col-md-6 my-2">
                <AccordionItem>
                <Button variant="text" style={{width: "100%", padding: "0 !important", background: "#2B0C52"}}>
                <AccordionItemHeading style={{width: "100% !important"}}>
                    <AccordionItemButton>
                    How to register?
                    </AccordionItemButton>
                </AccordionItemHeading>
                </Button>
                <AccordionItemPanel>
                    <p>
                        <ul>
                        <li className='py-1'>Click on the join us button and sign-up using Google credentials</li>
                        <li className='py-1'>If you are an NIT, Rourkela Student, sign-up using your Zimbra mail for free registration</li>
                        <li className='py-1'>Click on the register now button, and you will be re-directed to the payment page for making a nominal payment. (NON-NITR STUDENTS)</li>
                        <li className='py-1'>After making the payment, get ready to be on the edge of your seat during the whole ride</li>
                        </ul>
                    </p>
                </AccordionItemPanel>
              </AccordionItem>
                </div>
                <div className="col-12 col-md-6 my-2">
                <AccordionItem>
                <Button variant="text" style={{width: "100%", padding: "0 !important", background: "#2B0C52"}}>
                <AccordionItemHeading style={{width: "100% !important"}}>
                    <AccordionItemButton>
                    Who can all participate?
                    </AccordionItemButton>
                </AccordionItemHeading>
                </Button>
                <AccordionItemPanel>
                    <p>
                    Anyone can participate no matter who you are, be it a school-going student, a pro gamer, or an amateur in gaming. It's time to embrace the gamer in yourself
                    </p>
                </AccordionItemPanel>
              </AccordionItem>
                </div>
                <div className="col-12 col-md-6 my-2">
                <AccordionItem>
                <Button variant="text" style={{width: "100%", padding: "0 !important", background: "#2B0C52"}}>
                <AccordionItemHeading style={{width: "100% !important"}}>
                    <AccordionItemButton>
                    Is there any entry fee? If so, how much?
                    </AccordionItemButton>
                </AccordionItemHeading>
                </Button>
                <AccordionItemPanel>
                    <p>
                    Yes, there is a nominal entry fee of 30Rs, by paying which you can participate in all the events and attend all the gaming workshops and guest interviews<br/>But there is a catch; there is NO ENTRY FEE for NIT, Rourkela students😎
                    </p>
                </AccordionItemPanel>
              </AccordionItem>
                </div>
                <div className="col-12 col-md-6 my-2">
                <AccordionItem>
                <Button variant="text" style={{width: "100%", padding: "0 !important", background: "#2B0C52"}}>
                <AccordionItemHeading style={{width: "100% !important"}}>
                    <AccordionItemButton>
                    How do I register for the competition?
                    </AccordionItemButton>
                </AccordionItemHeading>
                </Button>
                <AccordionItemPanel>
                    <p>
                    After completing the registration, click on the game section and then click on any of the games you would like to participate in, and if it is a team game, then the team leader is requested to fill in the details of all the team members.
                    </p>
                </AccordionItemPanel>
              </AccordionItem>
                </div>
                <div className="col-12 col-md-6 my-2">
                <AccordionItem>
                <Button variant="text" style={{width: "100%", padding: "0 !important", background: "#2B0C52"}}>
                <AccordionItemHeading style={{width: "100% !important"}}>
                    <AccordionItemButton>
                    What should I do after registration for the competitions?
                    </AccordionItemButton>
                </AccordionItemHeading>
                </Button>
                <AccordionItemPanel>
                    <p>
                    After completing the registration, join our discord server for further details, and our coordinators & volunteers will be present to guide you throughout the fest.
                    </p>
                </AccordionItemPanel>
              </AccordionItem>
                </div>
              
            </div>
        </Accordion>
            </div>
        </section>
        <Footer/>
    </>
  )
}

export default contact