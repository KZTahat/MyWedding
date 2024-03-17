import { useState } from "react";
import { Howl } from "howler";

import coupleDance from "./assets/GIFs/couple_dance_2.gif";

// Background Images
import pink from "./assets/images/pink.jpg";
import green from "./assets/images/green.jpg";
import brown from "./assets/images/brown.jpg";
import purple from "./assets/images/purple.jpg";

// Music
import pinkMusic from "./assets/music/wedding_02.mp3";
import sicilian_cafe from "./assets/music/sicilian-cafe.mp3";
import classic from "./assets/music/classic.mp3";
import romantic from "./assets/music/romantic.mp3";

import "./MyWedding.css";

function MyWedding() {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  let [theme, setTheme] = useState({
    backgroundImage: pink,
    music: new Howl({
      src: [pinkMusic],
    }),
    color_one: "#01ACC4",
    color_two: "#FA8C45",
  });

  const switchTheme = (bcImage, newMusic, color_1, color_2) => {
    setTheme({
      backgroundImage: bcImage,
      music: newMusic,
      color_one: color_1,
      color_two: color_2,
    });
    theme.music.stop();
    newMusic.play();
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
    <section
      className="count-down-timer-container"
      style={{
        backgroundImage: `url("${theme.backgroundImage}")`,
        "--color_one": theme.color_one,
        "--color_two": theme.color_two,
      }}
    >
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
      <div className="theme-switch-buttons">
        {/* Pink Theme */}
        <span
          className="theme-button"
          style={{ backgroundImage: `url("${pink}")` }}
          onClick={() =>
            switchTheme(
              pink,
              new Howl({
                src: [pinkMusic],
              }),
              "#01ACC4",
              "#FA8C45"
            )
          }
        />

        {/* Green Theme */}
        <span
          className="theme-button"
          style={{ backgroundImage: `url("${green}")` }}
          onClick={() =>
            switchTheme(
              green,
              new Howl({
                src: [sicilian_cafe],
              }),
              "#23291E",
              "#426C20"
            )
          }
        />

        {/* Brown Theme */}
        <span
          className="theme-button"
          style={{ backgroundImage: `url("${brown}")` }}
          onClick={() =>
            switchTheme(
              brown,
              new Howl({
                src: [classic],
              }),
              "#8C4D20",
              "#350200"
            )
          }
        />

        {/* Purple Theme */}
        <span
          className="theme-button"
          style={{ backgroundImage: `url("${purple}")` }}
          onClick={() =>
            switchTheme(
              purple,
              new Howl({
                src: [romantic],
              }),
              "#CD6580",
              "#423380"
            )
          }
        />
      </div>
    </section>
  );
}

export default MyWedding;
