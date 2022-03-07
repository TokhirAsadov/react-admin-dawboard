import React from "react"
import "./Topbar.css"
import {Language, NotificationsNone,Settings} from '@material-ui/icons';

export default function Topbar(){
    return(
        <div className={"topbar"}>
            <div className={"topbarWrapper"}>
                <div className="topLeft">
                    <span className={"logo"}>LOGO</span>
                </div>
                {/*<div className="topCenter">
                        center
                </div>*/}
                <div className="topRight">
                    <div className="topbarIconContainer">
                        <NotificationsNone />
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Language />
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Settings />
                    </div>
                    <img src="https://i2-prod.walesonline.co.uk/incoming/article21384718.ece/ALTERNATES/s810/1_Holland.jpg" alt="" className={"topAvatar"}/>
                </div>
            </div>
        </div>
    );
}

/*
    import React from "react"

    export default function Topbar(){
        return(
          <div>

          </div>
        );
    }
 */