let libButton = document.getElementById('lib-button');
let libIt = function() {
    let storyDiv = document.getElementById("story");
    storyDiv.innerHTML = "??Your story here";
    let nom = document.getElementById('noun').value;
    let adj = document.getElementById('adjective').value;
    let personne = document.getElementById('person').value;
    storyDiv.innerHTML = nom + ' ' + adj + ' ' + personne;
};
libButton.addEventListener('click', libIt);












