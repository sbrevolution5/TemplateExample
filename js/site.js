function printNumbers() {
    let startNum = parseInt(document.getElementById("num1").value);
    let endNum = parseInt(document.getElementById("num2").value);
    displayData(startNum, endNum);
}
// displays numbers in table
function displayData(start, end) {
    
    const template = document.getElementById("dataTemplate");
    const resultsBody=document.getElementById("resultsBody")
    resultsBody.innerHTML = ""
// fills in template
    for (let i = start; i <= end; i+=5) {
        const datarow = document.importNode(template.content, true);
        datarow.getElementById("col1").textContent = i;
        datarow.getElementById("col2").textContent = i+1;
        datarow.getElementById("col3").textContent = i+2;
        datarow.getElementById("col4").textContent = i+3;
        datarow.getElementById("col5").textContent = i+4;

        resultsBody.appendChild(datarow)
    }
}