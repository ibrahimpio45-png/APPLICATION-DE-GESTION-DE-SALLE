let form = document.querySelector("form");

form.addEventListener("submit", async (e) => {

    e.preventDefault();

    let InputNomFilière = document.querySelector("#name");
    let InputCode = document.querySelector("#code");
    let InputDepartement = document.querySelector("#department");
    let diplome = document.querySelector("#diplome");
    let InputNomResponsable = document.querySelector("#nom");
    let InputPrenomResponsable = document.querySelector("#prenom");

    
    let data = {
        nom: InputNomFilière.value,
        filière: InputDepartement.value,
        code: InputCode.value,
        diplome: diplome.value,
        nomResponsable: InputNomResponsable.value,
        prenomResponsable: InputPrenomResponsable.value
    };

    console.log(data);

    try {
        let submitResponse = await axios.post( "http://localhost:5000/register", data);

        alert('Sauvegarde réussie');
        form.reset();

    } catch (erreur) {
        console.log(erreur);
        alert("Erreur lors de l'enregistrement de la filière.");
    }
});

let btnAnnuler = document.querySelector("#ann");

btnAnnuler.addEventListener("click", () => {
    form.reset();
});