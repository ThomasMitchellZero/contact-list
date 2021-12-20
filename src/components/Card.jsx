import React from "react";

function Card(prop) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{prop.name}</h2>
        <img className="circle-img" src={prop.imgURL} alt="" />
      </div>
      <div className="bottom">
        <p>{prop.phone}</p>
        <p>{prop.email}</p>
      </div>
    </div>
  );
}

export default Card;
