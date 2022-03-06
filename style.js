/** @format */

html,
body {
  font-family: Georgia, serif;
  font-style: italic;
  font-size: 4.2vmin;
  line-height: 4.7vmin;
  color: rgba(255, 255, 255, 0.6);
  margin: 0;
  padding: 0;
  height: 100%;
  background: -webkit-gradient(linear, left top, left bottom, from(rgba(97, 100, 255, 0.623)), color-stop(73%, rgba(233, 111, 255, 0.932)), to(rgba(79, 255, 132, 0.644)));
  background: linear-gradient(to bottom, rgba(97, 100, 255, 0.623) 0%, rgba(233, 111, 255, 0.932) 73%, rgba(79, 255, 132, 0.644) 100%);
}

#bulb {
  position: fixed;
  left: 50%;
  top: 0;
}

#wire {
  position: relative;
  background-color: #000000;
  width: 2px;
  height: 200px;
  left: -100%;
  margin-left: 80px;
  z-index: 1;
  -webkit-transform-origin: 0% 0%;
  transform-origin: 0% 0%;
  -webkit-animation: oscillaFilo 0.9s ease-in-out 0s infinite alternate;
  animation: oscillaFilo 0.9s ease-in-out 0s infinite alternate;
}

#wire:after {
  content: " ";
  left: -8px;
  top: 100%;
  position: absolute;
  border-bottom: 20px solid #000000;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  height: 0;
  width: 8px;
}

#lampadina {
  position: relative;
}

input {
  position: absolute;
  width: 90px;
  height: 70px;
  top: 150px;
  margin-left: -45px;
  opacity: 0;
  z-index: 1;
  cursor: pointer;
}

input[value="on"] {
  top: 300px;
}

input[value="off"] {
  top: -100px;
}

input[value="on"]:checked + input[value="off"] {
  top: 300px;
}

label {
  width: 400px;
  height: 400px;
  top: 219px;
  position: absolute;
  left: 0;
  margin-left: -200px;
  border-radius: 100%;
  -webkit-animation: 0.9s ease-in-out 0s infinite alternate;
  animation: oscillaLampadina 0.9s ease-in-out 0s infinite alternate;
}

input[value="off"]:checked ~ label {
  background: rgba(255, 112, 112, 0);
  -webkit-box-shadow: inset 0px 1px 5px white, inset 0px 2px 20px rgba(255, 255, 255, 0.07), -80px -15px 15px -5px rgba(0, 0, 0, 0.1);
          box-shadow: inset 0px 1px 5px white, inset 0px 2px 20px rgba(255, 255, 255, 0.07), -80px -15px 15px -5px rgba(0, 0, 0, 0.1);
}

input[value="on"]:checked ~ label {
  background: #fffd7b;
  -webkit-box-shadow: 0px 0px 10px #ff2020, 0px 0px 30px rgba(255, 255, 255, 0.8), 0px 0px 50px rgba(255, 255, 255, 0.6), 0px 0px 70px rgba(255, 255, 255, 0.6), -80px -15px 120px 0px rgba(255, 255, 255, 0.4);
          box-shadow: 0px 0px 10px #ff2020, 0px 0px 30px rgba(255, 255, 255, 0.8), 0px 0px 50px rgba(255, 255, 255, 0.6), 0px 0px 70px rgba(255, 255, 255, 0.6), -80px -15px 120px 0px rgba(255, 255, 255, 0.4);
}

input[value="off"]:checked ~ label:after {
  content: " ";
  width: 15px;
  height: 15px;
  top: 0;
  position: absolute;
  left: 0;
  margin-left: 15px;
  border: 2px solid rgba(255, 255, 255, 0.03);
}

@-webkit-keyframes oscillaFilo {
  from {
    -webkit-transform: rotate(5deg);
  }
  to {
    -webkit-transform: rotate(-5deg);
  }
}

@keyframes oscillaFilo {
  from {
    -webkit-transform: rotate(5deg);
            transform: rotate(5deg);
  }
  to {
    -webkit-transform: rotate(-5deg);
            transform: rotate(-5deg);
  }
}

@-webkit-keyframes oscillaLampadina {
  from {
    -webkit-transform: rotate(3deg) translate(-16.4px, -1px);
  }
  to {
    -webkit-transform: rotate(-3deg) translate(16.4px, -1px);
  }
}

@keyframes oscillaLampadina {
  from {
    -webkit-transform: rotate(3deg) translate(-16.4px, -1px);
            transform: rotate(3deg) translate(-16.4px, -1px);
  }
  to {
    -webkit-transform: rotate(-3deg) translate(16.4px, -1px);
            transform: rotate(-3deg) translate(16.4px, -1px);
  }
}

@-webkit-keyframes ombraTesto {
  from {
    -webkit-transform: translate(1px, 0px) scale(1.01, 1.06) skew(0.9deg, 0deg);
  }
  to {
    -webkit-transform: translate(-1px, 0px) scale(1.01, 1.06) skew(-0.9deg, 0deg);
  }
}

@keyframes ombraTesto {
  from {
    -webkit-transform: translate(1px, 0px) scale(1.01, 1.06) skew(0.9deg, 0deg);
            transform: translate(1px, 0px) scale(1.01, 1.06) skew(0.9deg, 0deg);
  }
  to {
    -webkit-transform: translate(-1px, 0px) scale(1.01, 1.06) skew(-0.9deg, 0deg);
            transform: translate(-1px, 0px) scale(1.01, 1.06) skew(-0.9deg, 0deg);
  }
}

/*# sourceMappingURL=style.css.map */