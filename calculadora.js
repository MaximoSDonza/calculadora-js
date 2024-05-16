function addToDisplay(value){
    display=document.getElementById('display')
    display.textContent += value
}

function clearAll(){
    display=document.getElementById('display')
    display.textContent = ""
}

function calculate(){
    display=document.getElementById('display')
    try{
        display.textContent = eval(display.textContent)
    }
    catch(error){
        alert(error)
    }
}

function clearOne(){
    display=document.getElementById('display')
    display.textContent= display.textContent.slice(0,-1)
}