let jobOffersData = [{
    "code":"dely4nu",
    "type":"quality-management",
    "enterprise":"induplast",
    "description":"123",
    "requirements":{},
    "competences":{},
    "labels":{}
}]
let evals = {
    "handSelection":{
        source:"https://ar.computrabajo.com/ofertas-de-trabajo/oferta-de-trabajo-de-analista-de-calidad-jr-en-cordoba-CCC04F5F54DF748361373E686DCF3405",
        competences:
            [
                {
                    competence:'Auditoría e inspección de procesos',
                    value:8,
                    requirement: ' Auditor de Calidad ISO 9001 (deseable). Experiencia de 2 años en gestión de Calidad de Planta y como Auditor de Calidad Interno (excluyente).',
                    score:7,
                    justification:'He realizado auditorías de primera y tercera parte en metalúrgicas y laboratorios de ensayo, respectivamente'
                },
                {
                    competence: 'Pensamiento analítico',
                    value:5,
                    requirement: "Participar en las reuniones de No Conformidades de producto/proceso/insumo generadas interna/externamente.",
                    score:7,
                    justification:"no waaay you did that"
                },
                {
                    competence: 'Herramientas informáticas',
                    value:5, 
                    requirement: "Manejo de office. Planilla de cálculos nivel medio-avanzado.",
                    score:8,
                    justification:"lets try dude"
                },
                {
                    competence:'Conocimiento de normas y especificaciones',
                    value:8,
                    requirement: "Metrología, interpretación de planos,  ISO 14001; ISO 45001 (no excluyente)",
                    score:7,
                    justification:"nothing really"
                },
                {
                    competence:'Documentación del Sistema de Gestión',
                    value:7,
                    requirement: "Redacción de textos técnicos",
                    score:10,
                    justification:"lets go baby"
                },
                {
                    competence: 'Conocimiento del rubro',
                    value:4,
                    requirement: "",
                    score:7,
                    justification:"yes, this is right"
                },
                {
                    competence:'Idiomas',
                    value:6,
                    requirement: "Inglés técnico (no excluyente)",
                    score:9,
                    justification:"hello"
                },
                {
                    competence:'Liderazgo y comunicación',
                    value:8,
                    requirement:"Confeccionar informes solicitados por superiores en tiempo y forma. Realizar capacitaciones e inducciones operativas a personal de distintos procesos.Realizar capacitaciones e inducciones operativas a personal de distintos procesos.",
                    score:8,
                    justification:"im im your mind"
                }
            ]
    }
}


function multiLineString(str, lineLength){
    if(!str.length) return "empty string"
    let count = 0;
     
    let multiLineStr = '';
    for(let i=0;i<str.length;i++){
        if (str[i] === ' ' && (i-count) > lineLength){
            multiLineStr += str.slice(count,i)+'<br>'
            count=i;
        }
        if(i+1===str.length){
            multiLineStr += str.slice(count,i+1)
        }
    }
    return multiLineStr;
}

//Plotly.newPlot("myDiv", data, layout)
function drawCompetencesChart(divId,eval){
    let job = eval.competences
    let data = [
        {
            type: 'scatterpolar',
            r: job.map(e=>e.value),
            theta: job.map(e=>multiLineString(e.competence,10)),
            fill: 'toself',
            name: 'Requeridos',
            fillcolor: 'rgba(68, 68, 68, 0.5)',
            line: {
                color: 'rgba(68, 68, 68, 0.5)', // Dark gray border color
                width: 2 // Border width
            },
        },    
        {
            type: 'scatterpolar',
            r: job.map(e=>e.score),
            theta: job.map(e=>multiLineString(e.competence,10)),
            fill: 'toself',
            name: 'Auto-evaluados',
            text: job.map(e=>multiLineString(e.justification,10)),
            fillcolor: 'rgba(218, 0, 55, 0.5)',
            line: {
                color: 'rgba(218, 0, 55, 0.5)', // Dark gray border color
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
        hoverlabel: {
            align: 'left'
        },
        width: 700, 
        height: 450,
        
        plot_bgcolor: 'rgba(0,0,0,0)', 
        paper_bgcolor: 'rgba(0,0,0,0)' 
    }

    Plotly.newPlot(divId, data, layout, {displayModeBar: false})
}
const activeLinks = {
    dely4nu:"handSelection",
    kely3fi:"sancor"
}
drawCompetencesChart("myDiv", evals[activeLinks.dely4nu])

class JobOffer{
    constructor(title,company, reqs, resps, benef){
        this.title = title;
        this.company = company;
        this.requirements = reqs;
        this.responsibilities = resps;
        this.benefits = benef;
    }
    write(divId){
        const div = document.getElementById(divId)
        if (div) {
            div.innerHTML = `
                <h1>${this.title}</h1>
                <h2>Empresa: ${this.company}</h2>
                <h3>Requisitos:</h3>
                <ul>
                    ${this.requirements.map(req => `<div class="reqAndRes">${req}</div>`).join('')}
                </ul>
                <h3>Responsabilidades:</h3>
                <ul>
                    ${this.responsibilities.map(resp => `<div class="reqAndRes">${resp}</div>`).join('')}
                </ul>
                <h3>Beneficios:</h3>
                <ul>
                    ${this.benefits.map(benefit => `<div class="reqAndRes">${benefit}</div>`).join('')}
                </ul>
            `;
        } else {
            console.error(`Element with ID ${divId} not found.`);
        }
    }
    evaluate(divId, evalArr){
        const jobDiv = document.querySelector(`#${divId}`)
        const reqsAndResps = jobDiv.querySelectorAll('div')
        function getIcons(e){
            if (!e.length) return ''
            let icons = '';
            e.forEach(entry => {
                const key = Object.keys(entry)[0];
                if (competence.GC[key]) { // Check if the key exists in competence.GC
                    if (icons !== '') {
                        icons += ' / ';
                    }
                icons += `${competence.GC[key].icon}+${entry[key]}`;
                }
            });
            return icons
        }
        
        for(let i=0;i<reqsAndResps.length;i++){
            if(i>=evalArr.length) return

            const textDiv = document.createElement('div');
            textDiv.textContent = reqsAndResps[i].textContent;
            textDiv.classList.add('description')

            const iconDiv = document.createElement('div');
            iconDiv.innerHTML = getIcons(evalArr[i]);
            reqsAndResps[i].innerHTML = ''; 
            iconDiv.classList.add('icons')

            reqsAndResps[i].appendChild(textDiv);
            reqsAndResps[i].appendChild(iconDiv);
        }
        
    }
}
let competence = {
    GC:{
        AeI:{name:'Auditoría e inspección de procesos', icon:'<i class="bi bi-clipboard2-check"></i>'},
        PA:{name:'Pensamiento analítico', icon:'<i class="bi bi-bar-chart-line-fill"></i>'}, 
        HI:{name:'Uso de herramientas informáticas', icon:'<i class="bi bi-pc-display"></i>'},
        NyE:{name:'Conocimiento de normas y especificaciones',icon:'<i class="bi bi-file-text-fill"></i>'},
        DSG:{name:'Documentación del Sistema de Gestión', icon:'<i class="bi bi-folder-fill"></i>'},
        ExpRub:{name:'Experiencia en el rubro', icon:'<i class="bi bi-briefcase-fill"></i>'},
        Langs:{name:'Idiomas', icon:'<i class="bi bi-chat-text-fill"></i>'},
        LyC:{name:'Liderazgo y comunicación', icon:'<i class="bi bi-people-fill"></i>'}
    },
}
let evalArr=[
    [{G:1}],
    [{HI:1}],
    [{AeI:2}],
    [{HI:3}],
    [{Langs:5}],
    [{NyE:2}],
    [{AeI:2},{NyE:2}],
    [{DSG:2}],
    [{NyE:2}],
    [{AeI:2}],
]
let jobOffer = new JobOffer(
    "Analista de Calidad Jr.",
    "Importante compañía",
    [
        "Nivel de estudios: Secundario Técnico o afín",
        "Manejo de office",
        "Conocimientos de metrología industrial (deseable)",
        "Manejo de office. Planilla de cálculos nivel medio-avanzado.",
        "Inglés técnico (no excluyente)",
        "Metrología, interpretación de planos",
        "Auditor de Calidad ISO 9001 (deseable)",
        "Redacción de textos técnicos",
        "ISO 14001; ISO 45001 (no excluyente)",
        "Experiencia de 2 años en gestión de Calidad de Planta y como Auditor de Calidad Interno (excluyente)"
    ],
    [
        "Cumplir y hacer cumplir los Procedimientos/Instructivos/Registros vigentes en el ámbito en el cual se desarrolla, tanto en su proceso como en procesos vinculantes.",
        "Asegurar la presencia de toda documentación relacionada con controles de calidad en las distintas etapas de los procesos productivos.",
        "Auditar los procesos productivos en pos de asegurar el cumplimiento con las especificaciones relativas a la calidad de los productos.",
        "Participar en las reuniones de No Conformidades de producto/proceso/insumo generadas interna/externamente.",
        "Participar en la definición eficiente de los controles necesarios en los insumos para cumplir con los objetivos de calidad y evitar las No Conformidades.",
        "Recolectar información relacionada a los Incidentes de Proveedores.",
        "Mantener actualizados los indicadores y registros gestionados por el área.",
        "Confeccionar informes solicitados por superiores en tiempo y forma.",
        "Realizar capacitaciones e inducciones operativas a personal de distintos procesos."
    ],
    [ "Remuneración competitiva.",
        "Crecimiento en un ambiente dinámico y desafiante.",
        "Jornada de lunes a viernes full time."
    ]

)

jobOffer.write("job-offer-body")
jobOffer.evaluate("job-offer-body", evalArr)

function sumEvals(evalArr){
    let flatEvals = []
    evalArr.forEach(e=>{
        for(let i=0;i<e.length;i++){
            flatEvals.push(e[i])
        }
    })
    let totals = []
    let keys = Object.keys(competence.GC)
    keys.forEach(key=>{
        totals[key] = 0
        for(let i=0;i<flatEvals.length;i++){
            if(flatEvals[i][key]){
                totals[key] += flatEvals[i][key]
            }
           
        }
    })
    console.log(totals)
    return totals
}


const queryString = window.location.search;
console.log(queryString);
const urlParams = new URLSearchParams(queryString);

