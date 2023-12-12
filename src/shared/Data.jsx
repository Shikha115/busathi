import React, { useState, useEffect } from 'react'
import axios from "axios";
import { images } from "../Images/images";
import { Link } from "react-router-dom";

const Data = ({busDetails}) => {

    return (
        <div className="container">
            <h2 className="title fw-bold mb-4">Delhi to Panipat</h2>
            {busDetails.map((item, i) => {
                return (
                    <div className="box" key={i}>
                        <img src={images.busGif} alt="" />
                        <div className="outer-box">
                            <ul className="box-inner">
                                <li>
                                    <h6>Bus Number</h6>
                                    <p>{item.no}</p>
                                </li>
                                <li>
                                    <h6>Bus Name</h6>
                                    <p>{item.name}</p>
                                </li>
                                <li>
                                    <h6>Availability</h6>
                                    <p>{item.availability}</p>
                                </li>
                                <li>
                                    <h6>Time</h6>
                                    <p>{item.time} hrs</p>
                                </li>
                                <li>
                                    <h6>Date</h6>
                                    <p>{item.date}</p>
                                </li>
                                <li>
                                    <h6>Fare</h6>
                                    <p>₹{item.fare}</p>
                                </li>
                                <li>
                                    <h6>Nearest Stop</h6>
                                    <p>{item.stop}</p>
                                </li>
                            </ul>
                            <div className="btns">
                                <Link
                                    to="/BusViewDetail"
                                    className="btn btn-primary btn-custom"
                                >
                                    View Detail
                                </Link>
                                <Link to="#" className="btn btn-primary btn-custom">
                                    Share GPS
                                </Link>
                                <Link
                                    to="/TrackYourBus"
                                    className="btn btn-primary btn-custom"
                                >
                                    Track
                                </Link>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    )
}

export default Data