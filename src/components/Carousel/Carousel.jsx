import React from 'react'
import MainBannerImage from "../../assets/banners/first.jpg"
import SecondBannerImage from "../../assets/banners/second.jpg"


const  images = [{MainBannerImage,SecondBannerImage}]  

export default function Carousel() {

  return (
    <>  
        <img src={images[0]} alt="" />
        <img src={images[1]} alt="" />
    </>
  )
}
