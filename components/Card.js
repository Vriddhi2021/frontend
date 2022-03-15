import React from 'react'
import { AiFillLinkedin, AiOutlineInstagram, AiFillTwitterSquare } from 'react-icons/ai'

const Card = () => {
    return (
        <div className="card">
            <div className="img-bx">
                <img src="https://i.postimg.cc/dQ7zWbS5/img-4.jpg" alt="img" />
            </div>
            <div className="content">
                <div className="detail">
                    <h2 >Emilia Roy<br /><span>Senior Designer</span></h2>
                    <ul className="sci">
                        <li>
                            <a href="#"><AiFillLinkedin className='' style={{ height: '24px', width: '24px', color: 'black' }} /></a>
                        </li>
                        <li>
                            <a href="#"><AiOutlineInstagram className='' style={{ height: '24px', width: '24px', color: 'black' }} /></a>
                        </li>
                        <li>
                            <a href="#"><AiFillTwitterSquare className='' style={{ height: '24px', width: '24px', color: 'black' }} /></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

    )
}

export default Card