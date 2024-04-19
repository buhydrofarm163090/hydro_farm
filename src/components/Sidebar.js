import React, { useEffect, useState } from "react";
import {UilEstate} from "@iconscout/react-unicons";
import { SidebarData } from "./Data";
import {UilSignOutAlt} from "@iconscout/react-unicons";

const Sidebar = () => {

    const [selected, setSelected] = useState(0)

    return (
        <section className="Sidebar">
            <section className="logo">
                <span>
                    Dash<span>Board</span>
                </span>
            </section>
            
            <section className="menu">
                {SidebarData.map((item, index)=>{
                    return(
                        <section className={selected===index? "menuItem active": "menuItem"}
                        key={index}
                        onClick={()=>setSelected(index)}
                        >
                            <item.icon/>
                            <span>
                                {item.heading}
                            </span>
                        </section>
                    )
                })}

                <section className="menuItem">
                    <UilSignOutAlt/>
                </section>
            </section>
        </section>
    )
}
export default Sidebar;