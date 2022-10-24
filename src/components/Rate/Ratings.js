import React from "react"
import "./Ratings.css"
import RedStar from '../../assets/RedStar.svg'
import GreyStar from '../../assets/GreyStar.svg'

function Ratings({note}) {
  
  const stars = []
  for (let i = 1; i <= 5; i++) {
    i <= note ? stars.push("red") : stars.push("grey")
  }

  return(


   
      <div className="stars">
        {stars.map((star, i) =>
          star === "red" ? (
            <div key={i} className="RedStar">
              <img src={RedStar} alt="red star" />
            </div>
          ) : (
            <div key={i} className="GreyStar">
              <img src={GreyStar} alt="grey star" />
            </div>
          )
        )}
      </div>
    )
   
  }


export default Ratings;


