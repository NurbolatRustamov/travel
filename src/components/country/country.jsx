import React from "react";
import "./country.css";
import Antaliya from "../../images/antalya2.jpg";

const Country = () => {
  const bgStyle = {
    backgroundImage: `url(${Antaliya})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",
    color: "white",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <div className="content" style={bgStyle}>
      <p className="city">Загляните в красивой город:</p>
      <h1 className="ant-h1">Анталия</h1>
      <button className="ant-btn">Перейти</button>
      <div className="ant-box">
        <div>
          <div>
            <i class="fa-solid fa-user"></i>
          </div>
          <div>
            <p>Население:</p>
            <h3>8,66 млн</h3>
          </div>
        </div>
        <div>
          <div>
            <i class="fa-solid fa-globe"></i>
          </div>
          <div>
            <p>Территория:</p>
            <h3>41 290 км</h3>
          </div>
        </div>

        <div>
          <div>
            <i class="fa-solid fa-house"></i>
          </div>
          <div>
            <p>Средняя цена:</p>
            <h3>$1 100 200</h3>
          </div>
        </div>
        <div>
          <button>Узнать больше</button>
        </div>
      </div>
    </div>
  );
};

export default Country;
