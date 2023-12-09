// import React from 'react';

// const Footer = () => {
// 	return <div className='grid grid-cols-12 gap-4 p-4'>
//     <Card className='col-span-3'>Hi</Card>
//     <Card className='col-span-3'>Hi</Card>
//     <Card className='col-span-3'>Hi</Card>
//     <Card className='col-span-3'>Hi</Card>

//     </div>;
// };

// export default Footer;

import * as React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { styled } from "@mui/material/styles";
import MuiGrid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import logo from "../../assets/logo .png";

export default function Footer() {
  return (
    <>
      <div className="bg-[#004dc0]">
        <div className="container my-0 mx-auto">
          <div className="grid grid-cols-12 gap-[100px] py-10">
            <div className="col-span-3 flex justify-center">
              <div>
                <img
                  src="https://didmdw8v48h5q.cloudfront.net/wp-content/uploads/2021/12/Logo_Horizontal_White-2.png"
                  width="100%"
                />
                <ul className="text-white py-7">
                  <li>101 Frederick St,</li>
                  <li>Kitchener, ON</li>
                  <li>N2H 6R3</li>
                </ul>
              </div>
            </div>
            <div className="col-span-3 flex justify-center">
              <ul className="text-white py-7 text-[25px] leading-[50px] ">
                <li className="cursor-pointer hover:underline">Students</li>
                <li className="cursor-pointer hover:underline">Schools</li>
                <li className="cursor-pointer hover:underline">Recruters</li>
              </ul>
            </div>
            <div className="col-span-3 flex justify-center">
              <ul className="text-white py-7  leading-[50px] ">
                <h5 className="text-[25px]">Abouts</h5>
                <li>Our Story</li>
                <li>Careers</li>
              </ul>
            </div>
            <div className="col-span-3 flex justify-center">
              <ul className="text-white py-7  leading-[50px] ">
                <h5 className="text-[25px]">Resources</h5>
                <li>UK Resources</li>
                <li>AU Resources</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
