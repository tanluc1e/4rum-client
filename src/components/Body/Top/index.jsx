import React from 'react'
import './style.css'

/* import icons */
import { BiSearchAlt } from "react-icons/bi";
import { TbMessageCircle } from "react-icons/tb";
import { MdOutlineNotificationsNone } from "react-icons/md";
import { BsArrowRightShort } from "react-icons/bs";

import video from "../../../assets/video.mp4"
import img from "../../../assets/1.png"

export default function Top() {
    return (
        <div className='topSection'>
            <div className='headerSection flex'>
                <div className="title">
                    <h1>Welcome to Plant</h1>
                    <p>Hello TanLuc, Welcome back!</p>
                </div>

                <div className="searchBar flex">
                    <input type="text" placeholder='Search Dashboard' />
                    <BiSearchAlt className='icon' />
                </div>

                <div className="adminDiv flex">
                    <TbMessageCircle className='icon' />
                    <MdOutlineNotificationsNone className='icon' />
                    <div className='adminImage'>
                        <img src="https://api.dicebear.com/7.x/notionists-neutral/svg?seed=Rascal" alt="Avatar" />
                    </div>
                </div>
            </div>

            <div className="cardSection flex">
                <div className="rightCard flex">
                    <h1>Create and sell extraordinary products</h1>
                    <p>The world's fast growing industry today are natural made products!</p>

                    <div className='buttons flex'>
                        <button className='btn'>Explore More</button>
                        <button className='btn transparent'>Top Sellers</button>
                    </div>

                    <div className="videoDiv">
                        <video src={video} autoPlay loop></video>
                    </div>
                </div>

                <div className="leftCard flex">
                    <div className="main flex">
                        <div className="textDiv">
                            <h1>My Stats</h1>

                            <div className='flex'>
                                <span>
                                    Today <br /> <small>4 Orders</small>
                                </span>
                                <span>
                                    This Month <br /> <small>127 Orders</small>
                                </span>
                            </div>

                            <div className='flex link'>
                                Go to my orders <BsArrowRightShort className='icon' />
                            </div>
                        </div>

                        <div className="imgDiv">
                            <img src={img} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
