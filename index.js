const jobNames = ['INTI','INGENIA','MG','LE']


function showJob(jobId){
    let jobContent = document.querySelector(`#${jobId}`)
    if(!jobContent.style.display){
        jobContent.style.display = 'block';
    }
    else{
        jobContent.style.display = jobContent.style.display === 'none' ? 'block' : 'none';
    }
    let buttonToTurnActive = document.querySelector(`.${jobId}`);
    if (buttonToTurnActive) {
        buttonToTurnActive.classList.toggle('active'); // Add or remove the "active" class
    }
}
function raiseUpZindex(job){
    let zIndexes = []
    for(let i=0;i<jobNames.length;i++){
        zIndexes[i]= document.querySelector(`#${job}`)
    } 
    
    sheetContainer.classList.add("sheet-page");
    sheetContainer.id = job
}
function toggleContent() {
    let ES = document.querySelectorAll('.ES');
    let EN = document.querySelectorAll('.EN');

    ES = [...ES]
    EN = [...EN]

    for (let i = 0; i < ES.length; i++) {
        let esDisplayStyle = window.getComputedStyle(ES[i]).getPropertyValue('display');

        if (esDisplayStyle === 'block') {
            ES[i].style.display = 'none';
            EN[i].style.display = 'block';
        }
        else {
            ES[i].style.display = 'block';
            EN[i].style.display = 'none';
        }
    }
}
function createBinderSheet(job,flapOrder){
    let jobData = {
        INTI:{
            company:"National Institute of Industrial Technology - (Jul. 2021 – Sep. 2022)",
            title:"Quality Management Systems Auditor – Conformity Assessment",
            lines:[
                "Conducted management-technical audits for RELIAU (conformity assessment body for testing laboratories in vehicle safety systems)", 
                "following ISO/IEC 17025, FMVSS, UN ECE regulations, and IRAM standards",
                "Developed internal procedures for INTI-RELIAU to govern third-party audit processes, in compliance with ISO/IEC 17011.",
                "Performed documentary audits and developed on-site audit plans."
            ]
        },
        INGENIA:{
            company:"Ingenia S.A - (Jan. 2021 – Jul. 2021)",
            title:"Project Coordinator",
            lines:[
                "Task and resource planning based on the requirements of the bidding specifications from the",
                "Municipality of Córdoba.",
                "Improved monitoring and performance evaluation of work crews by implementing a control",
                "dashboard, automatically generated from indicator calculations and presentation of results."
            ]
        },
        MG:
        {
            company:"Metalúrgica Gerbaudo S.A. - (Jan. 2019 - Jul. 2020)",
            title:"Laboratory and Management Systems Manager",
            lines:[
                "Developed calibration laboratory No.6 of INTI-SAC in the field of dimensional metrology. Among my activities were:",
                "Design, development, and implementation of a Laboratory Management System for calibrations in",
                "accordance with ISO/IEC 17025:2017 and INTI – SAC requirements.",
                "Design and development of a Production Management System in accordance with ISO 9001:2015 and API SPEC Q1.",
                "Survey of needs and issues in the areas to address their treatment and resolution through the",
                "developed Management Systems.",
                "Training for the involved areas on the importance of compliance with regulations and the",
                "operation of the system's procedures and records.",
                "Development and implementation of calibration procedures for measuring instruments and",
                "thread gauges based on API and ISO standards",
                "Conducted internal audits, formulated corrective actions, and action plans."
            ]
        },
        LE:{
            company:"Laboratorio de Estructuras – FCEFyN – UNC - (Aug. 2017 - Dec. 2018)",
            title:"Quality Assistant",
            lines:[
                "Identification and resolution of Non-Conformities in the management system to maintain OAA",
                "accreditation.",
                "Monitoring of occupational risks and proposal of associated improvements for the",
                "Occupational Health and Safety Office at FCEFyN."
            ]
        }
    }    
    //add an onclick function that changes the z axix of the clicked element 
    let sheetHtml=`
            <div class="first-row">
                <h2 id="title"></h2>
            </div>
            <div class="row">
                <h3 id="subTitle"> </h3>
            </div>
            <div class="row empty-line"></div>
            <div class="row empty-line"></div>
            <div class="row empty-line"></div>
            <div class="row empty-line"></div>
            <div class="row empty-line"></div>
            <div class="row empty-line"></div>
            <div class="row empty-line"></div>
            <div class="row empty-line"></div>
            <div class="row empty-line"></div>
            <div class="row empty-line"></div>
            <div class="row empty-line"></div>
            <div class="row empty-line"></div>
            <div class="last-row empty-line"></div>
        `

    let sheetContainer = document.createElement('div');
    sheetContainer.innerHTML = sheetHtml;
    sheetContainer.querySelector("#title").textContent = jobData[`${job}`].company;
    sheetContainer.querySelector("#subTitle").textContent = jobData[`${job}`].title;
    let spaces = sheetContainer.querySelectorAll(".empty-line");
    for (let i=0;i<jobData[`${job}`].lines.length;i++){  
        if (jobData[`${job}`].lines.length>spaces.length){console.log("not enough spaces in the sheet")}
        spaces[i].textContent = jobData[`${job}`].lines[i]
    }
    sheetContainer.classList.add("sheet-page");
    sheetContainer.classList.add(`position-relative-${flapOrder}`);
    sheetContainer.id = job
    document.querySelector('#binder').appendChild(sheetContainer);
}

let zIndexes = {
    'binder-cover':5,
    'INTI':4,
    'flap-INTI':5,
    'INGENIA':3,
    'flap-INGENIA':4,
    'MG':2,
    'flap-MG':3,
    'LE':1,
    'flap-LE':2,

}

function setZindexes(){ 
    Object.keys(zIndexes).forEach((id, i) => {
        
        let prop = document.querySelector(`#${id}`)
        
        prop.style.zIndex = zIndexes[id]
    });
}

createBinderSheet('INTI', 1)
createBinderSheet('INGENIA', 2)
createBinderSheet('MG', 3)
createBinderSheet('LE', 4)
setZindexes()

function bringToTop(id) {
    const highestId = Object.keys(zIndexes).reduce((a, b) => 
        zIndexes[a] > zIndexes[b] ? a : b
    );
    
    if(highestId===id){
        return
    }
    else{
        zIndexes[id] = 1+zIndexes[highestId]
        if(zIndexes[`flap-${id}`]){
            zIndexes[`flap-${id}`] = 2+zIndexes[highestId]
        }
    }
    setZindexes()
}
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
typeInScreen("card-footer","I dispel uncertainty. You add value. ", 0, 3,"type")




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

let data = [{
    type: 'scatterpolar',
    r: [39, 28, 8, 7, 28, 39],
    theta: ['A','B','C', 'D', 'E', 'A'],
    fill: 'toself'
}]
  
let layout = {
    polar: {
      radialaxis: {
        visible: true,
        range: [0, 50]
      }
    },
    width: 700, 
    height: 450,
    
    plot_bgcolor: 'rgba(0,0,0,0)', // Transparent plot background
    paper_bgcolor: 'rgba(0,0,0,0)' // Transparent paper background
}
  
//Plotly.newPlot("myDiv", data, layout)
function drawCompetencesChart(divId,discipline){
    let labels = ['Auditoría',
        'Detección de PNC', 
        'Diseño de SGC',
        'Analisis de indicadores',
        'Interpretación de estándares y planos',
        'Planificación de acciones'
    ]
    let data = [
        {
        type: 'scatterpolar',
        r: Object.values(discipline.competences),
        theta: labels,
        fill: 'toself',
        name: 'Auto-evaluados',
        fillcolor: 'rgba(218, 0, 55, 0.5)',
        line: {
            color: 'rgba(218, 0, 55, 0.5)', // Dark gray border color
            width: 2 // Border width
        }
        },
        {
        type: 'scatterpolar',
        r: Object.values(discipline.requirements),
        theta: labels,
        fill: 'toself',
        name: 'Requeridos',
        fillcolor: 'rgba(68, 68, 68, 0.5)',
        line: {
            color: 'rgba(68, 68, 68, 0.5)', // Dark gray border color
            width: 2 // Border width
        }
        }
    ]
    let layout = {
        polar: {
          radialaxis: {
            visible: true,
            range: [0, 10]
          }
        },
        width: 700, 
        height: 450,
        
        plot_bgcolor: 'rgba(0,0,0,0)', 
        paper_bgcolor: 'rgba(0,0,0,0)' 
    }

    Plotly.newPlot(divId, data, layout)
}

class Score {
    constructor(auditoria, deteccionPNC, disenoSGC, analisisIndicadores, interpretacionEst, planificacionAcciones) {
        this.auditoria = auditoria;
        this.deteccionPNC = deteccionPNC;
        this.disenoSGC = disenoSGC;
        this.analisisIndicadores = analisisIndicadores;
        this.interpretacionEst = interpretacionEst;
        this.planificacionAcciones = planificacionAcciones;
    }
}

let qualityManagement = {}
qualityManagement.competences = new Score(8, 6, 9, 8, 7, 8)
qualityManagement.requirements = new Score(7, 7, 8, 8, 6, 7)

drawCompetencesChart("myDiv", qualityManagement)