import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { deleteCar, getAllCars } from "../redux/actions/carsActions";
import { Col, Row, Divider, DatePicker, Checkbox, Edit } from "antd";
import "../styles/cars.css"
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import miles from "../assets/all-images/miles.png"
import fuel from "../assets/all-images/fuel.png"
import drive from "../assets/all-images/manualcar.jpg"
import rupees from "../assets/all-images/rupees.png"
import rate from "../assets/all-images/rating.png"
import CarsInfo from "./CarsInfo";


const { RangePicker } = DatePicker;
function AdminHome() {
  
  const { cars } = useSelector((state) => state.carsReducer);
  const { loading } = useSelector((state) => state.alertsReducer);
  const [totalCars, setTotalcars] = useState([]);
  const dispatch = useDispatch();
  console.log(totalCars.id);

  useEffect(() => {
    dispatch(getAllCars());
  }, []);

  useEffect(() => {
    setTotalcars(cars);
  }, [cars]);

  return (
    <>
    <Header/>
     <h1>Car Rental</h1>

        {/* //car card */}
      
        <div className="carspage">
        {totalCars.map((car) => {
          return (
                
            <>
                <div className="cars-card">

                {/* Car-Image */}
                <div className="cars-image">
                    <img src={car.image} alt="image" className="carsimg" />
                </div>

                {/* Car-name */}
                <div className="cars-headers">
                    <p className="cartype">{car.carType}</p>
                    <h1 className="carname" key={car.id}>
                     
                    <Link to={'/carsinfo/'}>  <p className="Car_Name_link"> {car.name} </p>  </Link> 
                    </h1>
                    
                </div>

                {/* Car-Price-Rating */}
                <div className="cars-price-rating">
                    
                <div className="rupees">
                    <img src={rupees} alt="rupees" className="rupees"/>
                    <p className="carprice">{car.rentPerHour}<span>/Day</span>  </p>
                </div>

                <div className="rate">
                    <img src={rate} alt="rating" className="rate"/>
                    <p>{car.rating}</p>
                </div>
                </div>

                <hr />

                {/* Car-mileage-drive&fueltype */}
                <div className="cars-miles-drive-fueltype">
                    <div className="miles">
                    <img src={miles} alt="miles" className="miles"/>
                    <p>{car.mileage}</p>
                    </div>

                    <div className="drive">
                    <img src={drive} alt="drive" className="drive"/>
                    <p>{car.driveType}</p>
                    </div>

                    <div className="fuel">
                    <img src={fuel} alt="fuel" className="fuel"/>
                    <p>{car.fuelType}</p>
                    </div>
                </div>


                {/* Rent Now Button */}
                <div className="carsBtn">
                <a aria-label="Rent Now" href="https://wa.me/917620442958" alt="Rent Now" className="carsBtn-link">Rent Now</a>
                </div>

                </div>
                </>
       );
    })}
    </div>          
      
    <Footer/>
    </>
  );
}

export default AdminHome;
