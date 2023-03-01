import React from "react";
import "./index.css";

export default function Component(props) {
  console.log(props);
  return (
    <>
      <div className="comp">
        <img src={props.placedetails.imageUrl} alt="" />
        <div className="details">
          <p>
            <img src="/location.png" alt="" width="20px" />
            <span className="place">{props.placedetails.location}</span>
            <span className="GMaps">
              <a href={props.placedetails.gMapsUrl}>
                <u>View on Google Maps</u>
              </a>
            </span>
          </p>
          <p className="hplace">{props.placedetails.title}</p>
          <p className="date">
            {props.placedetails.startDate} - {props.placedetails.endDate}
          </p>
          <p className="desc">{props.placedetails.description}</p>
        </div>
      </div>
      <hr />
    </>
  );
}
