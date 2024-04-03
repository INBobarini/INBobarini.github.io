function typeInScreen(className, str, startTime, duration, type, del, last){//time in seconds
    let container = document.querySelector(`#${className}`)
    let textElement = document.createElement('div')
    textElement.classList.add('card-text-animated')
    textElement.style.width = `${str.length}ch`
    textElement.textContent = ''
    container.appendChild(textElement)
    
    if(type){
        setTimeout(()=>{
            textElement.textContent = str
            textElement.style.display = "inline-block"
            textElement.style.animation = `typing ${duration}s steps(${str.length}), blink 0.5s step-end infinite alternate` 
        },(startTime)*1000)
    }
    if(type&&del){
        setTimeout(()=>{
            textElement.textContent = str
            textElement.style.display = "inline-block"
            textElement.style.animation = `typing ${duration*0.66}s steps(${str.length}), blink 0.5s step-end infinite alternate` 
        },(startTime)*1000)
        setTimeout(()=>{
            textElement.style.animation = `deleting ${duration*(0.33)}s steps(${str.length}), blink 0.5s step-end infinite alternate` 
        },(startTime+duration*(0.66))*1000)
        setTimeout(()=>{
            textElement.remove()
            
        },(startTime+duration*0.98)*1000)
    }
    
    if (!last){
        setTimeout(()=>{
            
        },(startTime+duration)*1000)
    }
}

function randomizePolygons(canvasId,canvasW, canvasH, n, points){
    let canvas = document.querySelector(`#${canvasId}`)
    let polygonsGenerated = 0;
    function rndNum(max){
        return Math.floor(Math.random() * max)
    }
    function generatePoints(points, maxX, maxY) {
        let str = '';
        for (let p = 0; p < points; p++) {
            if(polygonsGenerated%2){
                str += 
                p === 0 ? 0 + " " + 0 + ", " :
                p === 1 ? 0 + " " + maxY + ", " :
                p === 2 ? maxX + " " + rndNum(maxY) : 
                '' 
            }
            else{
                str += 
                p === 0 ? maxX + " " + 0 + ", " :
                p === 1 ? maxX + " " + maxY + ", " :
                p === 2 ? 0 + " " + rndNum(maxY) : 
                '' 
            }              
        }
        console.log(str);
        polygonsGenerated++
        return str;
    }
    for(let i=0;i<n;i++){
        let polygon = document.createElementNS("http://www.w3.org/2000/svg", "polygon")
        let color = polygonsGenerated%2? "red":"gray"
        polygon.id="polygon-" + color
        polygon.setAttribute("points", generatePoints(points, canvasW, canvasH))
        canvas.appendChild(polygon)
    }       
}   
//randomizePolygons("id-triangles-bg",348,27,4,3)


/*
typing functions
timeouts trigger classes or display properties
[string]    [id]    [time]  [style:value] 
            text1   0s     (startanimating)          
            text2   0s      display:none;   
            text1   2s        border:0
            text2   2s  display:inline-block; 
            text2   3s     (startdeleting)
            text3   4s      (starttyping) 
*/

// Old monitor from https://www.youtube.com/watch?v=q9wRjIPo8Rw
/*
const powerLed = document.querySelector(".power-led");
const powerButton = document.querySelector(".power-switch .button");
const eyes = document.querySelector(".eyes");
const screen = document.querySelector(".screen");

const timers = [];

powerButton.addEventListener("click", () => {
  powerLed.classList.toggle("on");

  if (powerLed.classList.contains("on")) {
    timers.splice(0);
    screen.classList.remove("off");
    startTyping(["cd manz.dev", "npm install", "npm run dev"]);
  } else {
    eyes.classList.add("off");
    screen.innerHTML = "";
    timers.forEach(timer => clearTimeout(timer));
    timers.splice(0);
  }
});

const startTyping = (texts) => {
  let wait = 750;

  screen.innerHTML = "$ ";
  texts.forEach(text => {
    wait += 750;
    for (let i = 0; i < text.length; i++) {
      const timer = setTimeout(() => {
        screen.innerHTML += text[i];
      }, wait);
      timers.push(timer);
      wait += 50 + ~~(Math.random() * 50);
    }

    wait += 750;

    const timer = setTimeout(() => (screen.innerHTML += "<br>$ "), wait);
    timers.push(timer);
  });

  wait += 500;

  const timer = setTimeout(() => {
    const timer = setTimeout(() => eyes.classList.remove("off"), 500);
    timers.push(timer);
    screen.classList.add("off");
  }, wait);
  timers.push(timer);
};
*/
