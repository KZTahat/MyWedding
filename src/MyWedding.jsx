import { useState } from "react";
import { Howl } from "howler";
import coupleDance from "./assets/GIFs/couple_dance_2.gif";
import classic from "./assets/music/classic.mp3";
import romantic from "./assets/music/romantic.mp3";
import sicilian_cafe from "./assets/music/sicilian-cafe.mp3";
import wedding_1 from "./assets/music/wedding_01.mp3";
import wedding_2 from "./assets/music/wedding_02.mp3";
import "./MyWedding.css";

function MyWedding() {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const [musicOn, setMusic] = useState(false);

  let music = {
    wedding_1: new Howl({
      src: [wedding_1],
    }),
    classic: new Howl({
      src: [classic],
    }),
    wedding_2: new Howl({
      src: [wedding_2],
    }),
    sicilian_cafe: new Howl({
      src: [sicilian_cafe],
    }),
    romantic: new Howl({
      src: [romantic],
    }),
  };

  const playMusic = () => {
    music.wedding_2.play();
    setMusic(true);
  };

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
      <h1>Wedding Day</h1>
      <h2>
        Khaled <i className="ri-heart-fill"></i> Saba
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
      <h3>
        <i className="ri-time-line"></i> Jun 17, 2024 7:00 PM
      </h3>
      <h3>
        <i className="ri-map-pin-2-line"></i> Palm Palace
      </h3>
      <img src={coupleDance} alt="couple dancing" />
      <span
        id={`music-on-${musicOn}`}
        className="play-music"
        onClick={playMusic}
      >
        <i className="ri-music-2-fill"></i>
      </span>
    </section>
  );
}

export default MyWedding;
