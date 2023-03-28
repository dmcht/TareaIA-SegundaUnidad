let modelo1 = null;
let modelo2 = null;
let modelo3 = null;


(async () =>{
   
    modelo1 = await tf.loadLayersModel("./data_conversion3/model.json");
    console.log("Modelo cargado exitosamente!"); 
    modelo2 = await tf.loadLayersModel("./data_conversion2/model.json");
    console.log("Modelo cargado exitosamente!");
    modelo3 = await tf.loadLayersModel("./data_conersion4/model.json");
    console.log("Modelo cargado exitosamente!");
})();


const selectConversion = document.getElementById("conversion");
const conversionContainers = document.querySelectorAll(".conversion");

selectConversion.addEventListener("change", function() {
const selectedConversion = selectConversion.value;
conversionContainers.forEach(container => {
    container.style.display = "none";
});
document.getElementById(selectedConversion).style.display = "block";
});


function Libras(){
  const libras = document.getElementById('libras');
  const resultado = document.getElementById('r');


if (modelo1 != null){

  const tensor = tf.tensor1d([parseInt(libras.value)]);

  let prediccion = modelo1.predict(tensor).dataSync();
  prediccion = parseFloat(prediccion).toFixed(2);
  resultado.innerHTML = `${libras.value} libras son igual a  ${prediccion} kilogramos`;
}else{
  console.log('Ha ocurrido un Error')
}
}


function Metros(){
    const metros = document.getElementById('metros');
    const resultado = document.getElementById('r2');


  if (modelo2 != null){

    const tensor = tf.tensor1d([parseInt(metros.value)]);

    let prediccion = modelo2.predict(tensor).dataSync();
    prediccion = parseFloat(prediccion).toFixed(2);
    resultado.innerHTML = `${metros.value} metros son igual a ${prediccion} kilometros`;
  }else{
    console.log('Ha ocurrido un Error')
  }
}

function Años(){
  const Años = document.getElementById('Años');
  const resultado = document.getElementById('r3');


  if (modelo3 != null){

    const tensor = tf.tensor1d([parseInt(Años.value)]);

    let prediccion = modelo3.predict(tensor).dataSync();
    prediccion = Math.round(prediccion);
    resultado.innerHTML = `${Años.value} año son igual a ${prediccion} dias`;
  }else{
    console.log('Ha ocurrido un Error')
  }
}

