
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

function createA4Page(){
    let container = document.querySelector(".container")
    let div = document.createElement("div")
    div.classList.add("a4-page")
    container.appendChild(div)
}

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

//typeInScreen("card-footer","I dispel uncertainty. You add value. ", 0, 3,"type")

function setZIndexesListenersAndRotate(id){
    let ids = [
        "#card-container",
        "#personal-id-container",
        
    ] 
    ids.forEach(id => {
        let element = document.querySelector(id)
        element.addEventListener('click', function() {
            let zIndex = element.style.zIndex
            zIndex = zIndex ? parseInt(zIndex) : 0; 
            element.style.zIndex += 10;
            //random rotation from -3 to 3 degrees
            let rotation = Math.floor(Math.random() * 3) - 1
            element.style.transform = `rotate(${rotation}deg)`
            console.log(element.style.zIndex)
        });
    });
    
}
setZIndexesListenersAndRotate()


