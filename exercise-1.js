'use strict';

/*1.1 Basandote en el array siguiente, crea una lista ul > li 
dinámicamente en el html que imprima cada uno de los paises.*/
const myCountries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

const lista = document.createElement("ul");

for(let i=0; i < myCountries.length; i++){
    const listItem = document.createElement("li");
    listItem.innerText = myCountries[i];
    listItem.setAttribute('id', `countries${i+1}`);
    lista.append(listItem);

    //creando botones para eliminar cada elemento de la lista (1.6)
    const removeButton = document.createElement("button");
    removeButton.innerHTML = `borrar elemento ${i+1}`;
    removeButton.classList.add("nextline")
    listItem.append(removeButton);

    function removeElement() {
        let elementLi = document.getElementById(`countries${i+1}`);
        elementLi.remove();
    }

    removeButton.addEventListener('click', removeElement)

    }
    document.body.append(lista);


/*1.2 Elimina el elemento que tenga la clase .fn-remove-me.*/
document.querySelector('.fn-remove-me').remove();



// /*1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos 
// en el div de html con el atributo data-function="printHere".*/
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];
const secondList = document.createElement("ul");

for (let i = 0; i < cars.length; i++) {
    const listItem2 = document.createElement("li");
    listItem2.innerText = cars[i];
    listItem2.setAttribute('id', `cars${i+1}`);
    secondList.append(listItem2);

    //creando botones para eliminar cada elemento de la lista (1.6)
    const removeButton02 = document.createElement("button");
    removeButton02.innerHTML = `borrar elemento ${i+1}`;
    removeButton02.classList.add("nextline")
    listItem2.append(removeButton02);

    function removeElement02() {
        let elementLi = document.getElementById(`cars${i+1}`);
        elementLi.remove();
    }

    removeButton02.addEventListener('click', removeElement02)

    }

    let container = document.querySelector('div[data-function=printHere]');
        container.append(secondList);


// /*1.4 Crea dinamicamente en el html una lista de div que contenga un elemento 
// h4 para el titulo y otro elemento img para la imagen.*/
const countries = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];

const thirdList = document.createElement("ul");
for (let i = 0; i < countries.length; i++) {
    const listItem3 = document.createElement("li");
    listItem3.innerHTML = `<h4>${countries[i].title}</h4><img src="${countries[i].imgUrl}" class = "myImg"/>`;
    listItem3.setAttribute('id', `imagen${i+1}`);
    thirdList.append(listItem3);
    
    //creando botones para eliminar cada elemento de la lista (1.6)
    const removeButton03 = document.createElement("button");
    removeButton03.innerHTML = `borrar elemento ${i+1}`;
    removeButton03.classList.add("nextline")
    listItem3.append(removeButton03);

    function removeElement03() {
        let elementLi = document.getElementById(`imagen${i+1}`);
        elementLi.remove();
    }

    removeButton03.addEventListener('click', removeElement03)

}

document.body.append(thirdList);

// /*1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último 
// elemento de la lista.*/

const removeLastButton = document.createElement('button');
removeLastButton.type = 'button'; 
removeLastButton.innerText = 'Borrar último elemento de la lista de imágenes';
removeLastButton.classList.add("mybutton")
document.body.appendChild(removeLastButton); 

removeLastButton.addEventListener("click", removeLastElement);
function removeLastElement(){
    const lastOne = thirdList.lastChild;
    lastOne.remove();
}

// /*1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los 
// elementos de las listas que elimine ese mismo elemento del html.*/

//RESUELTO DENTRO DE CADA BUCLE