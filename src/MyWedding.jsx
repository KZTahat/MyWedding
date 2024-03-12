import { useState } from "react";
import "./MyWedding.css";

function MyWedding() {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  function getCountDownTime() {
    const countDownDate = new Date("Jun 17, 2024 19:00:00").getTime();

    let x = setInterval(() => {
      let now = new Date().getTime();
      let distance = countDownDate - now;

      let newDays = Math.floor(distance / (1000 * 60 * 60 * 24));
      let newHours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      let newMinutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let newSeconds = Math.floor((distance % (1000 * 60)) / 1000);

      setDays(newDays);
      setHours(newHours);
      setMinutes(newMinutes);
      setSeconds(newSeconds);
    }, 1000);
  }

  getCountDownTime();

  return (
    <section className="count-down-timer-container">
      <h1>Our Wedding</h1>
      <h2>
        Khaled <i class="ri-heart-pulse-fill"></i> Saba
      </h2>
      <div className="count-down-timer">
        <div>
          <p>{days}</p>
          <span>Days</span>
        </div>
        <div>
          <p>{hours}</p>
          <span>Hours</span>
        </div>
        <div>
          <p>{minutes}</p>
          <span>Minutes</span>
        </div>
        <div>
          <p>{seconds}</p>
          <span>Seconds</span>
        </div>
      </div>
      <h3>Jun 17, 2024 7:00 PM</h3>
      <h3>Palm Palace</h3>
    </section>
  );
}

export default MyWedding;
