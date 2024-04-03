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
function hoverIcon(k){
    let tooltip = document.createElement('div');
    tooltip.classList.add('tooltip');
    tooltip.id = "tooltip"
    tooltip.textContent = competence.GC[k].name;
    // Set position relative to the cursor
    tooltip.style.left = (event.pageX + 10) + 'px'; // Adjust for desired offset
    tooltip.style.top = (event.pageY + 10) + 'px'; // Adjust for desired offset

    // Append temporary div to the body
    document.body.appendChild(tooltip);
    return
}
function removeTooltips(){
    let tooltips = document.querySelectorAll("#tooltip")
    tooltips.forEach (t=>t.remove())
    return
}

let competence = {
    GC:{
        AeI:{name:'Auditoría e inspección de procesos', icon:'<i class="bi bi-clipboard2-check" onmouseover="hoverIcon(`AeI`)" onmouseout="removeTooltips()"></i>'},
        PA:{name:'Pensamiento analítico', icon:'<i class="bi bi-bar-chart-line-fill" onmouseover="hoverIcon(`PA`)" onmouseout="removeTooltips()"></i>'}, 
        HI:{name:'Uso de herramientas informáticas', icon:'<i class="bi bi-pc-display" onmouseover="hoverIcon(`HI`)" onmouseout="removeTooltips()"></i>'},
        NyE:{name:'Conocimiento de normas y especificaciones',icon:'<i class="bi bi-file-text-fill" onmouseover="hoverIcon(`NyE`)" onmouseout="removeTooltips()"></i>'},
        DSG:{name:'Documentación del Sistema de Gestión', icon:'<i class="bi bi-folder-fill" onmouseover="hoverIcon(`DSG`)" onmouseout="removeTooltips()"></i>'},
        ExpRub:{name:'Experiencia en el rubro', icon:'<i class="bi bi-briefcase-fill" onmouseover="hoverIcon(`ExpRub`)" onmouseout="removeTooltips()"></i>'},
        Langs:{name:'Idiomas', icon:'<i class="bi bi-chat-text-fill" onmouseover="hoverIcon(`Langs`)" onmouseout="removeTooltips()"></i>'},
        LyC:{name:'Liderazgo y comunicación', icon:'<i class="bi bi-people-fill" onmouseover="hoverIcon(`LyC`)" onmouseout="removeTooltips()"></i>'}
    },
}

let selfAssessment = {
    presentation:"something",
    competence:
        {
            AeI:8,
            PA:7, 
            HI:8,
            NyE:8,
            DSG:9,
            ExpRub:6,
            Langs:7,
            LyC:7,
        }
    
}

let jobs = {
    
    ejegmk9:{
        source:"https://ar.computrabajo.com/ofertas-de-trabajo/oferta-de-trabajo-de-analista-de-calidad-jr-en-cordoba-CCC04F5F54DF748361373E686DCF3405",
        announcer: "handSelection",
        description:{
            title: "Analista de Calidad Jr.",
            company: "Importante compañía",
            reqs: [
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
            resps: [
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
            benefits:  [ 
                "Remuneración competitiva.",
                "Crecimiento en un ambiente dinámico y desafiante.",
                "Jornada de lunes a viernes full time."
            ]
        },
        eval: [
            [{PA:1}],
            [{HI:1}],
            [{AeI:2}],
            [{HI:3}],
            [{Langs:5}],
            [{NyE:2}],
            [{AeI:2},{NyE:2}],
            [{DSG:2}],
            [{NyE:2}],
            [{AeI:2}],
            [{LyC:2},{DSG:1}],
            [{DSG:1}],
            [{NyE:3},{AeI:2}],
            [{PA:2},{LyC:1}],
            [{PA:2},{ExpRub:2}],
            [{DSG:1}],
            [{DSG:1}],
            [{LyC:1},{HI:3}],
            [{LyC:3},{ExpRub:3}]
        ],
        selfEval:{
            AeI:8,
            PA:7, 
            HI:8,
            NyE:8,
            DSG:9,
            ExpRub:6,
            Langs:7,
            LyC:6,
        },
        comments:''
    }}

function drawCompetencesChart(divId,selfEval,evalJobArr){
    function sumEvals(evalJobArr){
        let flatEvals = []
        evalJobArr.forEach(e=>{
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
        return totals
    }
    //checking if both arrays have the same keys could be useful
    let jobResult = sumEvals(evalJobArr)
    let jobKeys = Object.keys(jobResult)
    let jobValues = Object.values(jobResult)
    let labels = jobKeys.map(k=>multiLineString(competence.GC[k].name,10))
    let selfValues = jobKeys.map(k=>selfEval[k])

    let data = [
        {
            type: 'scatterpolar',
            r: jobValues,
            theta: labels,
            fill: 'toself',
            name: 'Requeridos',
            fillcolor: 'rgba(68, 68, 68, 0.5)',
            line: {
                color: 'rgba(68, 68, 68, 0.5)', 
                width: 2 
            },
        },    
        {
            type: 'scatterpolar',
            r: selfValues,
            theta: labels,
            fill: 'toself',
            name: 'Auto-evaluados',
            //text: job.map(e=>multiLineString(e.justification,10)),
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
        margin:{
            l:50,
            r:50,
            t:50,
            b:50
        },
        width: 500, 
        height: 300,
        plot_bgcolor: 'rgba(0,0,0,0)', 
        paper_bgcolor: 'rgba(0,0,0,0)' 
    }

    Plotly.newPlot(divId, data, layout, {displayModeBar: true})
}    
class JobOffer{
    constructor(title,company, reqs, resps, benef){
        this.title = title;
        this.company = company;
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
    evaluate(divId, evalJobArr){
        const jobDiv = document.querySelector(`#${divId}`)
        const reqsAndResps = jobDiv.querySelectorAll('div')
        function getIcons(e,tagsDiv){
            if (!e.length) return ''
            let icons = '';
            e.forEach(entry => {
                const key = Object.keys(entry)[0];
                if (competence.GC[key]) { 
                    if (icons !== '') {
                        icons += '|';
                    }
                icons += `${competence.GC[key].icon}+${entry[key]}`;
                }
            });
            return icons
        }
        
        for(let i=0;i<reqsAndResps.length;i++){
            if(i>=evalJobArr.length) return
            const textDiv = document.createElement('div');
            textDiv.textContent = reqsAndResps[i].textContent;
            textDiv.classList.add('description')
            //
            const tagsDiv = document.createElement('div');
            tagsDiv.innerHTML = getIcons(evalJobArr[i],tagsDiv); 
            //
            reqsAndResps[i].innerHTML = ''; 
            tagsDiv.classList.add('tag')
            reqsAndResps[i].appendChild(textDiv);
            reqsAndResps[i].appendChild(tagsDiv);
        }
        
    }
}


const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

function fillselfPresentation(divId, personalOverview){
    let personalOverviewDiv = document.querySelector(`#${divId}`)
    personalOverviewDiv.textContent = personalOverview
}
let personalOverview = "Soy Iván Bobarini y me he especializado en la definición de metodologías de trabajo eficientes para pymes"

if(urlParams.has('jk')){
    fillselfPresentation('personal-overview', personalOverview)
    const jobKey = urlParams.get('jk')
    if(!jobs[jobKey]) {
        console.log("loaded with no job offer"); 
    } 
    else{
        let evalJobArr = jobs[jobKey].eval
        let selfEval= jobs[jobKey].selfEval
        let jobDesc = jobs[jobKey].description
        let jobOffer = new JobOffer(
            jobDesc.title, 
            jobDesc.company,
            jobDesc.reqs,
            jobDesc.resps,
            jobDesc.benefits
        )
        jobOffer.write("job-offer-body")
        jobOffer.evaluate("job-offer-body", evalJobArr)
        drawCompetencesChart("chart", selfEval, evalJobArr)
    }
}

