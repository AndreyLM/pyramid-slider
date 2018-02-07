function init() {
    var rangeSpan = document.getElementById('rangeValue');
    var rangeInput = document.getElementById('rangeInput');
    var symbol = document.getElementById('symbol');
        
    var parent = document.getElementById('pyramid');
    var elRem = document.getElementById('construction');
    parent.removeChild(elRem);
   
    rangeSpan.textContent = rangeInput.value;
    
    
    rangeInput.addEventListener('input', function(){
        rangeChange(rangeInput, rangeSpan);
    });
    
    symbol.addEventListener('change', setSymbol);
    
    drawPyramid(rangeInput.value);
    printPyramid(rangeInput.value);
    setSymbol();
}

function setSymbol()
{
    var value = document.getElementById('symbol').value;
    var divs = document.getElementsByClassName('blackBox');
   
    for(var i=0; i<divs.length; i++) { 
 
        var newEl = document.createElement('p');
        newEl.setAttribute('class', 'boxContent');
        newEl.appendChild(document.createTextNode(value));
        divs[i].innerHTML = '';
        divs[i].appendChild(newEl);
    }
}

function rangeChange(rangeInput, rangeSpan) {
    rangeSpan.textContent = rangeInput.value;
    removePyramid();
    drawPyramid(rangeInput.value);
    setSymbol();
}

function printPyramid(height) {
    for(var i=1; i<=height; i++)    
        console.log(' '.repeat(height-i)+'#'.repeat(i+1));

}

function drawPyramid(height) {
    var parent = document.getElementById('pyramid');
    for(var i=1; i<=height; i++) {
        createBox(height-i, parent, 'whiteBox');
        createBox(i+1, parent, 'blackBox');
        createBox(1, parent, 'clearfix');
    }

}

function removePyramid()
{
    document.getElementById('pyramid').innerHTML = '';
}

function createBox(count, parent, boxClass)
{
    for (var i=1; i<=count; i++)
    {
        var el=document.createElement('div');
        el.className=boxClass;
        parent.appendChild(el);
    }
}

init();