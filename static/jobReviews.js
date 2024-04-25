
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
    let jobResult = []
    let jobValues = []
    let jobKeys = []

    if(evalJobArr) {
        jobResult = sumEvals(evalJobArr)
        jobValues = Object.values(jobResult)
        jobKeys = Object.keys(jobResult)
    }
    else{
        
        jobKeys = Object.keys(selfEval)
    }
     
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
    constructor(title,company, reqs, resps, benef, comm, source){
        this.title = title;
        this.company = company;
        this.company = company;
        this.requirements = reqs;
        this.responsibilities = resps;
        this.benefits = benef;
        this.comments = comm;
        this.source = source;
    }
    comment(divId){
        const div = document.getElementById(divId)
        div.innerHTML = this.comments.map(c=>`<p>${c}</p>`).join('')
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
        if(this.source){
            
            const jobOfferFooter = document.getElementById("job-offer-footer")
            jobOfferFooter.textContent = this.source
        }
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
/*function createA4Page(headerContent, bodyContent, Footer){
    let container = document.querySelector(".container")
    let a4Page = document.createElement("div")
    a4Page.classList.add("a4-page")
    container.appendChild(a4Page)
}*/

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

function fillselfPresentation(divId, personalOverview){
    let personalOverviewDiv = document.querySelector(`#${divId}`)
    personalOverviewDiv.innerHTML = personalOverview.map(p=>
        `<p>${p}</p>`).join('')
}

fillselfPresentation('personal-overview', selfAssessment.presentation)

if(urlParams.has('jk')){
    
    const jobKey = urlParams.get('jk')
    
    if(!jobs[jobKey]) {
        console.log("job key not found"); 
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
            jobDesc.benefits,
            jobs[jobKey].comments,
            jobs[jobKey].source
        )
    
        jobOffer.write("job-offer-body")
        jobOffer.comment("comment-job-offer")
        jobOffer.evaluate("job-offer-body", evalJobArr)
        drawCompetencesChart("chart", selfEval, evalJobArr)
    }
}
else{
    let jobOfferPage = document.querySelector("#job-offer")
    jobOfferPage.style.display = 'none'
    drawCompetencesChart("sa-body", selfAssessment.competences.GC)
}

