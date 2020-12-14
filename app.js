// Creamos el nuevo párrafo
var nuevo_parrafo = document.createElement('p').appendChild(document.createTextNode('Nuevo párrafo.'));
    
// Recojemos en una variable el segundo párrafo
var segundo_p = document.getElementById('principal').getElementsByTagName('p')[1];

// Y ahora lo insertamos
document.getElementById('principal').insertBefore(nuevo_parrafo,segundo_p);

