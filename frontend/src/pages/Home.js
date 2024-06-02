import React from 'react'
import CategoryList from '../components/CategoryList'
import BannerProduct from '../components/BannerProduct'
import HorizontalCardProduct from '../components/HorizontalCardProduct'
import VerticalCardProduct from '../components/VerticalCardProduct'

const Home = () => {
  return (
    <div>
      <CategoryList/>
      <BannerProduct/>

      <HorizontalCardProduct category={"fruitsandvegetables"} heading={"Fruits and Vegetables"}/>
      <HorizontalCardProduct category={"dairyitems"} heading={"Dairy Items"}/>
      <VerticalCardProduct category={"dryfruitsandnuts"} heading={"Dry Fruits and Nuts"}/>
      <VerticalCardProduct category={"meatandpoultry"} heading={"Meat and Poultry"}/>
      <VerticalCardProduct category={"spicesandgrains"} heading={"Spices and Grains"}/>
    </div>
  )
}

export default Home
