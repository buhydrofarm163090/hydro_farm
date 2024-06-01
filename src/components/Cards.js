import React from "react";
import { CardsData } from "./Data";
/*import { DataFether } from "./DataFetcher";*/

import Card from "./Card";

const Cards = () => {
  return (
    <div className="Cards">
      {CardsData.map((card, id)=>{
        return(
          <div className="parentContainer">
            <Card/>
            title = {card.title}
            barValue = {card.barValue}
            value = {card.value}
            png = {card.png}
          </div>
        )
      })}
    </div>
  )
}

export default Cards;