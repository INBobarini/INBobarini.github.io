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
function strToArr(str, maxChars){
    let arr = []
    let count = 0;
    for (let i=0;i<str.length;i++){
        if (((str[i] === ' ') && (i-count) > maxChars) ||(str[i] ==="\n")){
            arr.push(str.slice(count,i))
            count=i;
        }
        if(i+1===str.length){
            arr.push(str.slice(count,i+1))
        }
    }
    return arr
}