import React, { useEffect, useState } from "react";
import Header from "./Header";
import Data from '../shared/Data';
import axios from "axios";
import { Skeleton } from "../Loader";
function BusDetail() {
  // const [busDetails, setBusDetails] = useState([
  //   {
  //     no: "706",
  //     name: "himachal",
  //     availability: "16:30 - 17:30",
  //     time: "01:45",
  //     date: "25 Sep, 2023",
  //     fare: "100",
  //     stop: "himachal stop",
  //   },
  //   {
  //     no: "706",
  //     name: "himachal",
  //     availability: "16:30 - 17:30",
  //     time: "01:45",
  //     date: "25 Sep, 2023",
  //     fare: "100",
  //     stop: "himachal stop",
  //   },
  //   {
  //     no: "706",
  //     name: "himachal",
  //     availability: "16:30 - 17:30",
  //     time: "01:45",
  //     date: "25 Sep, 2023",
  //     fare: "100",
  //     stop: "himachal stop",
  //   },
  //   {
  //     no: "706",
  //     name: "himachal",
  //     availability: "16:30 - 17:30",
  //     time: "01:45",
  //     date: "25 Sep, 2023",
  //     fare: "100",
  //     stop: "himachal stop",
  //   },
  // ]);
  const [busDetails, setBusDetails] = useState(null)
  const getdata = async () => {
    const result = await axios.get('https://busathi.onrender.com/buses/busDetails')
    console.log("🚀 ~ file: BusDetail.jsx:48 ~ getdata ~ result:", result.data)
    setBusDetails(result.data)
  }
  useEffect(() => {
    getdata();
  }, [])

  return (
    <>
      <Header />
      <main>
        <section className="bus-detail mtb-65">
          {
            busDetails ?
              <Data busDetails={busDetails} />
              :
          <div className="skeletion-div">
            <div className="skeleton__title" style={{marginLeft:'83px'}}/>
            <Skeleton />
                <Skeleton />
                <Skeleton />
                <Skeleton />
                <Skeleton />
              </div>
           } 
        </section>
      </main>
    </>
  );
}

export default BusDetail;
