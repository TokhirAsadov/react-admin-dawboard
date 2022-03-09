import React from "react"
import "./WidgetSm.css"
import {Visibility} from "@material-ui/icons";

export default function WidgetSm(){
    return(
        <div className="widgetSm">
            <span className="widgetSmTitle">New Join Members</span>
            <ul className="widgetSmList">
                <li className="widgetSmListItem">
                    <img src="https://i2-prod.walesonline.co.uk/incoming/article21384718.ece/ALTERNATES/s810/1_Holland.jpg"
                         alt="" className="widgetSmImg"/>
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Asadov Tohir</span>
                        <span className="widgetSmUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmBtn">
                        <Visibility className="widgetSmIcon"/>
                        Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img src="https://i2-prod.walesonline.co.uk/incoming/article21384718.ece/ALTERNATES/s810/1_Holland.jpg"
                         alt="" className="widgetSmImg"/>
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Asadov Tohir</span>
                        <span className="widgetSmUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmBtn">
                        <Visibility className="widgetSmIcon"/>
                        Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img src="https://i2-prod.walesonline.co.uk/incoming/article21384718.ece/ALTERNATES/s810/1_Holland.jpg"
                         alt="" className="widgetSmImg"/>
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Asadov Tohir</span>
                        <span className="widgetSmUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmBtn">
                        <Visibility className="widgetSmIcon"/>
                        Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img src="https://i2-prod.walesonline.co.uk/incoming/article21384718.ece/ALTERNATES/s810/1_Holland.jpg"
                         alt="" className="widgetSmImg"/>
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Asadov Tohir</span>
                        <span className="widgetSmUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmBtn">
                        <Visibility className="widgetSmIcon"/>
                        Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img src="https://i2-prod.walesonline.co.uk/incoming/article21384718.ece/ALTERNATES/s810/1_Holland.jpg"
                         alt="" className="widgetSmImg"/>
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Asadov Tohir</span>
                        <span className="widgetSmUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmBtn">
                        <Visibility className="widgetSmIcon"/>
                        Display
                    </button>
                </li>
            </ul>
        </div>
    );
}