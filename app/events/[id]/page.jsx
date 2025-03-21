"use client"

import React from 'react'
import EventPage from '../../../components/EventPage'
import { useParams } from "next/navigation";
import { cardsData } from '../../../constants/data';


function EventIdPage() {
  const {id} = useParams();
  const arr = cardsData.filter((item) => item.name.split(" ").join("-").replace(/\?$/, "") === id);
  console.log("arr" ,arr);
  
  return (
  <>
      {arr.length > 0 ? (
        <>
          <EventPage data={arr[0]} />
        </>
      ) : (
        <>
          <div className="w-full h-full flex justify-center items-center">
            No event found
          </div>
        </>
      )}
    </>
  );
}

export default EventIdPage
