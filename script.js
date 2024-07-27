/*

      Created By Sibgat/

 ░▒▓███████▓▒░▒▓█▓▒░▒▓███████▓▒░ ░▒▓██████▓▒░ ░▒▓██████▓▒░▒▓████████▓▒░ 
░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░ ░▒▓█▓▒░     
░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░░▒▓█▓▒░ ░▒▓█▓▒░     
 ░▒▓██████▓▒░░▒▓█▓▒░▒▓███████▓▒░░▒▓█▓▒▒▓███▓▒░▒▓████████▓▒░ ░▒▓█▓▒░     
       ░▒▓█▓▒░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░ ░▒▓█▓▒░     
       ░▒▓█▓▒░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░ ░▒▓█▓▒░     
░▒▓███████▓▒░░▒▓█▓▒░▒▓███████▓▒░ ░▒▓██████▓▒░░▒▓█▓▒░░▒▓█▓▒░ ░▒▓█▓▒░     
                                                                        
                                                                        

      */

let tm_v = document.querySelector(".tm");
let br_v = document.querySelector(".br");
let lgbr_v = document.querySelector(".lgbr");
let rnd_v = document.querySelector(".rnd");
let bl_v = document.querySelector(".black");
let ov_v = document.querySelector(".overlay");
let bt = document.querySelector(".btn");
let br = 5;
let lbr = 15;
let tm = 0;
let pdm = 0;
let pds = 0;
let str = 0;
let d = document.querySelector(".timer");
let r = 0;
let intbrt;
let eltm = 0;
let tmps;
let nt_v = document.querySelector(".notice");
function ntcv(x) {
  if (x > 0) {
    nt_v.style.display = "block";
    nt_v.style.opacity = "1";
  } else {
    nt_v.style.opacity = "0";
    setTimeout(() => {
      nt_v.style.display = "none";
    }, 100);
  }
}
setTimeout(() => {
  bl_v.style.opacity = "0";
  ov_v.style.opacity = "0";
  setTimeout(() => {
    bl_v.style.display = "none";
    ov_v.style.display = "none";
  }, 500);
}, 1100);
function dbtn(x) {
  tm_v.style.pointerEvents = "none";
  br_v.style.pointerEvents = "none";
  lgbr_v.style.pointerEvents = "none";
  rnd_v.style.pointerEvents = "none";
  if (x == 1) {
    tm_v.style.background = "var(--bg-clr-w)";
    tm_v.style.color = "var(--txt-clr-b)";
    tm_v.style.transform = "scale(1.1, 1.1)";
    br_v.style.background = "";
    br_v.style.color = "";

    br_v.style.opacity = 0.7;
    lgbr_v.style.opacity = 0.7;
    rnd_v.style.opacity = 0.7;

    lgbr_v.style.background = "";
    lgbr_v.style.color = "";
  }
  if (x == 2) {
    tm_v.style.background = "";
    tm_v.style.color = "";
    tm_v.style.opacity = 0.7;
    lgbr_v.style.opacity = 0.7;
    rnd_v.style.opacity = 0.7;
    br_v.style.background = "var(--bg-clr-w)";
    br_v.style.color = "var(--txt-clr-b)";
    br_v.style.transform = "scale(1.1, 1.1)";
    lgbr_v.style.background = "";
    lgbr_v.style.color = "";
  }
  if (x == 3) {
    tm_v.style.background = "";
    tm_v.style.color = "";
    br_v.style.background = "";
    br_v.style.color = "";
    br_v.style.opacity = 0.7;
    tm_v.style.opacity = 0.7;
    rnd_v.style.opacity = 0.7;
    lgbr_v.style.background = "var(--bg-clr-w)";
    lgbr_v.style.color = "var(--txt-clr-b)";
    lgbr_v.style.transform = "scale(1.1, 1.1)";
  }
  if (x == 4) {
    tm_v.style.opacity = 1;
    br_v.style.opacity = 1;
    tm_v.style.opacity = 1;
    tm_v.style.background = "";
    tm_v.style.color = "";
    br_v.style.background = "";
    br_v.style.color = "";
    lgbr_v.style.background = "";
    lgbr_v.style.color = "";
  }
}
function e() {
  pds = 0;
  document.querySelector(".timer").innerHTML =
    pdm + (pds < 10 ? ":0" : ":") + pds;
}
let df = 0;
let def = 25 - eltm;
let currtime = Date.now();
let elaspedtime = 0;
let inr;
let cnt = 0;
let lngtmr = 0;
let dnt = 1;
let elaptm = 0;
let audio = document.createElement("audio");
audio.src = "minimal.mp3";
audio.loop = "loop";

function btrtm(brtm) {
  /* d.style.background =
    "conic-gradient(white " + 100 + "%, transparent " + 100 + "%)";*/
  intbrt = setInterval(() => {
    r += 100 / 60;
    eltm += 1;
    elaspedtime = Date.now();

    d.style.transition = ".1s";
    d.style.background =
      "conic-gradient(white " + (100 - r) + "%, #222222 " + (100 - r) + "%)";
    if (r > 100) {
      r = 0;
      eltm = 0;
      elaspedtime = 0;
      d.style.background =
        "conic-gradient(white " + (100 - r) + "%, #222222 " + (100 - r) + "%)";
      clearInterval(intbrt);
    }
  }, brtm);
}

function prf(x) {
  //alert(new Date((currtime - elaspedtime)).getMilliseconds())
  //x.style.pointerEvents = "none";
  x.style.color = "black";
  x.style.background = "white";
  //x.style.opacity = "0";
  x.innerHTML == "Start"
    ? ((x.innerHTML = "Stop"),
      (cnt = 1),
      tm > 0
        ? (tmr(tm),
          btrtm(25000 - new Date(currtime - elaspedtime).getMilliseconds()))
        : (tmr(25), dbtn(1), btrtm(25000)))
    : ((cnt = 0),
      (x.innerHTML = "Start"),
      clearInterval(intbrt),
      clearInterval(inr));
}
/*Timing Function*/
function tmr(x) {
  pdm = x;
  document.querySelector(".timer").innerHTML =
    pdm + (pds < 10 ? ":0" : ":") + pds;
  if (cnt > 0) {
    inr = setInterval(() => {
      pds -= 1;
      document.querySelector(".timer").innerHTML =
        pdm + (pds < 10 ? ":0" : ":") + pds;
      tm = pdm;
      if (pds < 0) {
        pds = 59;
        pdm -= 1;
        document.querySelector(".timer").innerHTML = pdm + ":" + pds;
        tm = pdm;
      }
      if (pds < 1 && pdm < 1) {
        dnt += 1;
        clearInterval(inr);
        if (dnt % 2 !== 0) {
          lngtmr += 1;
          audio.pause();
          dbtn(1);
          bt.style.display = "";
          btrtm(25000 - new Date(currtime - elaspedtime).getMilliseconds());
          tmr(25);
        } else {
          console.log(lngtmr);
          if (lngtmr > 4) {
            lngtmr = 0;
            audio.play();
            dbtn(3);
            bt.style.display = "none";
            btrtm(15000 - new Date(currtime - elaspedtime).getMilliseconds());
            tmr(15);
            setTimeout(() => {
              audio.pause();
              clearInterval(inr);
              dbtn(4);
              bt.style.display = "";
              tmr(25);
              e();
              prf(document.querySelector(".btn"));
            }, 15000);
          } else {
            audio.play();
            lngtmr += 1;
            bt.style.display = "none";
            dbtn(2);
            btrtm(5000 - new Date(currtime - elaspedtime).getMilliseconds());
            tmr(5);
          }
        }
      }
    }, 1000);
  }
}
document.querySelector(".timer").onclick = () => {};

/*This is the code for a new feature which will be intergeating soon*/

let s = document.querySelector(".chat_s");
let arr = [
  ["Hello Babe!", 0],
  ["Hi", 1],
  ["How are you?", 0],
  ["Fine", 1],
  ["What about you?", 1],
  ["Really Nice", 0],
  ["You want to suck my dick?", 0],
  ["Ofcourse!", 1],
  ["But why?", 0],
  ["Because I want to taste your cum!", 1],
  ["You will swallow it?", 0],
  ["Yeah!", 1],
  ["How is your pussy?", 0],
  ["And how is your boobs?", 0],
  ["They are amazing?", 1],
  ["Just remembering your dick?", 1],
  ["How you are feeling?", 0],
  ["Horny!", 1],
  ["Me too", 0],
  ["I remebering your great pluffy pussy!", 0],
];
arr.forEach((txt) => {
  let cht = document.createElement("div");
  let prf = document.createElement("div");
  cht.setAttribute("class", "cht");
  prf.setAttribute("class", "prf");
  cht.innerHTML = txt[0];
  if (txt[1] < 1) {
    cht.style.alignSelf = "flex-end";
    prf.style.alignSelf = "flex-end";
    s.appendChild(prf);
    s.appendChild(cht);
  } else {
    cht.style.alignSelf = "flex-start";
    prf.style.alignSelf = "flex-end";
    s.appendChild(cht);
    s.appendChild(prf);
  }
});
