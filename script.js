let celsius=document.getElementById('celsius');
let fahrenheit=document.getElementById('fahrenheit');
document.getElementById('clear').onclick=clearForm;

celsius.oninput=()=>{
    let output=(parseFloat(celsius.value)*9)/5+32;
    fahrenheit.value=parseFloat(output.toFixed(2));
    let output2=(parseFloat(celsius.value)+273.15);
    kelvin.value=parseFloat(output2.toFixed(2));

};

fahrenheit.oninput=()=>{
    let output=((parseFloat(fahrenheit.value)-32)*5)/9;
    celsius.value=parseFloat(output.toFixed(2));
    let output1=((parseFloat(fahrenheit.value)-32)/1.8)+273.15;
    kelvin.value=parseFloat(output1.toFixed(2));
};
kelvin.oninput=()=>{
    let output=((parseFloat(kelvin.value)-32)*5)/9;
    celsius.value=parseFloat(output.toFixed(2));
    let output3=((parseFloat(kelvin.value)-273.15)*1.8)+32;
    fahrenheit.value=parseFloat(output3.toFixed(2));

};
function clearForm(){
       document.getElementById('fahrenheit').value=' ';
       document.getElementById('celsius').value=' ';
       document.getElementById('kelvin').value=' ';
}