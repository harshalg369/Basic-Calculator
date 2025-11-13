const display = document.getElementById('Display');

function AppendToCalc(input){

    if(display.value === 'Error'){
            display.value = 'Error'
    }
    else{
        display.value += input
    }
    
}

function ClearDisplay(){
    display.value = ''
}

function Calculate(){
    try {
        display.value = eval(display.value)
    } catch (error) {
        display.value = 'Error'
    }
}
