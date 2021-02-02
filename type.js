function typeWriter(elemento) {
    const textArray = elemento.innerText.split('');
    elemento.innerHTML = '';
    textArray.forEach((letra, i) => {
        setTimeout(function() {
            elemento.innerHTML += letra;
        }, 75 * i)
    });
    elemento.innerHTML.split(' ');
    console.log(elemento)
}
linebreak = document.createElement("br");
const mainTitle = document.querySelector('h1');
const secondTitle = document.querySelector('h2');
typeWriter(mainTitle)
typeWriter(secondTitle)
