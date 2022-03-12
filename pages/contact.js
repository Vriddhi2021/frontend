import Footer from '../components/footer';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Hero from '../components/hero';
import Navbar from '../components/Navbar';
// import BrowseTournament from '../components/BrowseTournament';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import bgHero from '../public/contactBanner.png';
import bg from '../public/bg2.png';
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
        <section style={{backgroundImage: `url(${bg.src}`}}>
            <div className='col-10 col-md-8 mx-auto text-white'>
                <div className="row">
                    <div className="col-6 p-4 my-5">
                       <div className='p-5' style={{backgroundColor: "#2B0C52", position: "relative"}}>
                       <h4>CONTACT INFO</h4><br/>
                        <div className='icon locatinIcon d-flex'><LocationOnIcon className='m-2'/><p>National Institute of Technology Rourkela, Jindal Colony, Udit Nagar, Rourkela, Odisha 769001</p></div>
                        <div className='icon locatinIcon d-flex'><EmailIcon className='m-2'/><p>vriddhi@gmail.com</p></div>
                        <ul className="soci_wrap mt-5">
                            <li>
                            <a href="https://www.facebook.com/vriddhinitr/">
                                <span className="material-icons-outlined p-2 "><i className="fa fa-2x fa-facebook-square" aria-hidden="true"></i> </span>
                            </a>
                            </li>
                            <li>
                            <a href="https://twitter.com/vriddhinitr">
                                <span className="material-icons-outlined p-2"><i className="fa fa-2x fa-twitter-square" aria-hidden="true"></i>  </span>
                            </a>
                            </li>
                            <li>
                            <a href="https://www.instagram.com/vriddhinitr/">
                                <span className="material-icons-outlined p-2"><i className="fa fa-2x fa-instagram" aria-hidden="true"></i>  </span>
                            </a>
                            </li>
                            <li>
                            <a href="https://www.youtube.com/channel/vriddhinitr">
                                <span className="material-icons-outlined p-2"><i className="fa fa-2x fa-youtube-square" aria-hidden="true"></i>  </span>
                            </a>
                            </li>
                            <li>
                                <a href="#">
                                <span className="material-icons-outlined p-2"><i className="fa fa-2x fa-linkedin-square" aria-hidden="true"></i> </span>
                                </a>
                            </li>
                    </ul>
                       </div>
                    </div>
                    <div className="col-6 p-4 my-5">
                    <div className='p-5' style={{backgroundColor: "#2B0C52"}}>
                    <h4>SEND A MESSAGE</h4>
                        <Box
                            component="form"
                            sx={{
                                '& > :not(style)': { m: 1, width: '25ch' },
                            }}
                            noValidate
                            autoComplete="off"
                        >

                        <div className="row" style={{width: "100%"}}>
                        <div className="col-6"><TextField className="text-white" id="standard-basic" label="First Name" variant="standard" /></div>
                        <div className="col-6"><TextField className="text-white" id="standard-basic" label="Last Name" variant="standard" /></div>
                        </div>
                        <div className="row" style={{width: "100%"}}><TextField className="text-white" id="standard-basic" label="Email Address" variant="standard" /></div>
                        <div className="row" style={{width: "100%"}}><TextField className="text-white" id="standard-basic" label="Mobile Number" variant="standard" /></div>
                        <div className="row" style={{width: "100%"}}><TextField className="text-white" id="standard-basic" label="Write your message here..." variant="standard" /></div>
                        <div className="row" style={{width: "100%"}}><Button variant="outlined">Send</Button></div>

                        </Box>
                    </div>
                    </div>
                </div>
            </div>
            <div className="col-8 col-md-6 mx-auto py-5">
            <h1 className='text-center text-white my-5'>Frequintly Ask Questions</h1>
            <Accordion allowZeroExpanded>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        What harsh truths do you prefer to ignore?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                        Exercitation in fugiat est ut ad ea cupidatat ut in
                        cupidatat occaecat ut occaecat consequat est minim minim
                        esse tempor laborum consequat esse adipisicing eu
                        reprehenderit enim.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        Is free will real or just an illusion?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                        In ad velit in ex nostrud dolore cupidatat consectetur
                        ea in ut nostrud velit in irure cillum tempor laboris
                        sed adipisicing eu esse duis nulla non.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
        </Accordion>
            </div>
        </section>
        <Footer/>
    </>
  )
}

export default contact