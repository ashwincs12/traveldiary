import React from "react";
import Header from "./Header";
import Component from "./Component";
import Database from "./Database";

export default function App() {
  const myplaces = Database.map((place) => {
    return <Component key={place.id} placedetails={place} />;
  });
  return (
    <>
      <Header />
      {myplaces}
    </>
  );
}
