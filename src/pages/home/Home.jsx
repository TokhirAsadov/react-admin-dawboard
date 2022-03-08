import React from "react"
import "./Home.css"
import FeaturedInfo from "../../component/featuredInfo/FeaturedInfo";
import Chart from "../../component/chart/Chart";
import { userData } from "./../../Data"

export default function Home(){
    return(
        <div className="home">
            <FeaturedInfo />
            <Chart data={userData} title="User Analytics" grid dataKey="Active User"/>
        </div>
    );
}