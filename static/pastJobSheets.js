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
            company:"Instituto Nacional de Tecnología Industrial  - (Jul. 2021 – Sep. 2022)",
            title:"Auditor de Sistemas de Gestión de Calidad – Evaluación de la conformidad",
            description:[
                "Realización de auditorías de gestión - técnicas para la RELIAU (organismo de evaluación de la conformidad de laboratorios de ensayos a sistemas de seguridad vehicular), de acuerdo a estándares ISO/IEC 17025, FMVSS, regulaciones UN ECE y normas IRAM.", 
                "Elaboración de procedimientos internos de INTI-RELIAU para el proceso de auditorías de tercera parte, basados en el cumplimiento de ISO/IEC 17011.",
                "Ejecución de auditorías documentales y elaboración de planes de auditoria in situ."
            ]
        },
        INGENIA:{
            company:"Ingenia S.A (mar. 2021- jul. 2021)",
            title:"Coordinador de proyectos - Gestión de Proyectos",
            description:[
                "Planificación de tareas y recursos a partir de los requisitos de los pliegos de licitación de la municipalidad de Córdoba.",
                "Mejora del seguimiento y evaluación del desempeño de las cuadrillas, mediante la implementación de un tablero de control, obtenido automáticamente a partir del cálculo de indicadores y presentación de resultados.",
            ]
        },
        MG:
        {
            company:"Metalúrgica Gerbaudo S.A. - (Ene. 2019 - Abr. 2020)",
            title:"Responsable de Control de Calidad y desarrollo de Sistemas de Gestión",
            description:[
                "Diseño, desarrollo e implantación de un Sistema de Gestión de Laboratorio de calibraciones de acuerdo con ISO/IEC, 17025:2017 y requisitos del INTI – SAC.",
                "Diseño y desarrollo de un Sistema de Gestión de la Producción de acuerdo con ISO 9001:2015 y API SPEC Q1.",
                "Relevamiento de necesidades y problemáticas de las áreas para abordar su tratamiento y resolución a través de los Sistemas de Gestión desarrollados.",
                "Capacitaciones a las áreas involucradas sobre la importancia de la normativa a cumplir y el funcionamiento de los procedimientos y registros del sistema.",
                "Elaboración e implantación de los procedimientos de calibración de instrumentos de medición y calibres de roscas, a partir de normas API e ISO.",
                "Recepción de auditorías internas, formulación de acciones correctivas y planes de acción"
            ]
        },
        LE:{
            company:"Laboratorio de Estructuras – FCEFyN – UNC - (Ago. 2017 - Dic. 2018)",
            title:"Asistente de Gestión de Calidad",
            description:[
                "Levantamiento de No Conformidades del sistema de gestión mantenimiendo la acreditación del OAA.",
                "Monitoreo de riesgos laborales y propuestas de mejoras asociadas, para la oficina de Higiene y Seguridad de la FCEFyN.",
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
    let descriptionStr = jobData[job].description.reduce((acc,cur)=>acc+cur+"\n",'')
    
    let arrDescription = strToArr(descriptionStr,90) //adjust according to sheet width
    for(let i=0;i<spaces.length;i++){
        spaces[i].textContent = arrDescription[i];
        if(i+1>arrDescription.length){
            break
        }
    }
   
    sheetContainer.classList.add("sheet-page");
    sheetContainer.classList.add(`position-relative-${flapOrder}`);
    sheetContainer.id = job
    document.querySelector('#binder').appendChild(sheetContainer);
}

createBinderSheet('INTI', 1)
createBinderSheet('INGENIA', 2)
createBinderSheet('MG', 3)
createBinderSheet('LE', 4)

function createSkillsSheet(obj){
    let sheetContainer = document.createElement('div');
    sheetContainer.classList.add("skills-sheet");
    sheetContainer.id = "skills-sheet"
    let sheetHtml=`
            <div class="first-row">
                <h2 id="title"></h2>
            </div>
            <div class="row empty-line">
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
        sheetContainer.innerHTML = sheetHtml
        document.querySelector('#binder').appendChild(sheetContainer);
        let firstRow = sheetContainer.querySelector(".first-row")
        let title = Object.keys(obj)[0]
        firstRow.innerHTML = "<h2>"+title+"</h2>"
        let subtitles = Object.keys(obj[title])
        let lines = []
        for (let s=0;s<subtitles.length;s++){
            let line = `<h3>${subtitles[s]}</h3>`
            lines.push(line)
            obj[title][subtitles[s]].forEach(l=>{
                lines.push(l)
            })
        }
        let emptyLines = sheetContainer.querySelectorAll(".empty-line")
        if(lines.length>emptyLines.length) console.log("not enough empty lines")
        else{lines.forEach((line,i)=>emptyLines[i].innerHTML=line)}
        sheetContainer.classList.add("sheet-page");
        sheetContainer.classList.add(`position-relative-5`);
        
}
let knowledge = {
    "Formación, habilidades, idiomas y cursos":{
        "Formación": [
            "Ingeniería Industrial. Universidad Nacional de Córdoba - FCEFyN (2023-2009) "
        ],
        "Uso de herramientas informáticas":[
            "Microsoft Excel: avanzado. Microsoft PowerBI: intermedio.",
            "Programación: Javascript(avanzado). HTML(intermedio). CSS(intermedio).", 
            "Svelte(principiante). SQL: intermedio",
        ],
        "Idiomas":["Inglés: avanzado (proficiencia escrita: C1, oral: B2). Español: Nativo."],
        "Cursos":[
            "Programación Backend (Coderhouse)",
            "GC-19 Gestión de la Calidad bajo ISO/IEC 17025:2017 (IRAM)",
            "La Filosofía 5S, base de toda Mejora Continua (ECKMA – FCEFyN)",
            "CA-04 Formación de auditores internos de sistemas de gestión de la calidad IRAM ISO 9001:2015"
        ]
    }
}
createSkillsSheet(knowledge)
