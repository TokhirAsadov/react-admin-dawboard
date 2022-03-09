import React from "react"
import "./Home.css"
import FeaturedInfo from "../../component/featuredInfo/FeaturedInfo";
import ChartMonotone from "../../component/chart/ChartMonotone";
import { userData } from "./../../Data"
import WidgetSm from "../../component/widgetSm/WidgetSm";
import WidgetLg from "../../component/widgetLg/WidgetLg";

export default function Home(){
    return(
        <div className="home">
            <FeaturedInfo />
            <ChartMonotone data={userData} title="User Analytics" grid dataKey="Active User"/>
            <div className="homeWidgets">
                <WidgetSm />
                <WidgetLg />
            </div>
        </div>
    );
}