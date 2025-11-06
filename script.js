console.log("Laboratoire prêt !")
const nom = "maxime"
let age = 16
console.log(age)


const motDePasseAttendu = "secret123"
let motDePasseUtilisateur = "zangalawener"



if (motDePasseUtilisateur === motDePasseAttendu) {
    console.log("Accès autorisé. Bienvenue !");
} else if (motDePasseUtilisateur.length<8) {
    console.log("Accès refusé. Votre mot de passe est trop court");
} else {
    console.log("Accès refusé. Mot de passe incorrect.");
}


const moi = {
    prenom: "LAKZESOUSCALIBRE",
    nom: "140",
    age: 16,
    competences: ["HTML", "CSS"]
};

console.log(moi)

const notes = [12, 15, 9, 18];

for (let i = 0; i < notes.length; i++) {
    console.log("La note à l'indice " + (i+1) + " est " + notes[i]);
}

const classe = [
    { prenom: 'Alice', age: 18 },
    { prenom: 'Bob', age: 19},
    { prenom: 'madie', age: 19 },
    { prenom: 'moha', age: 23 },
    { prenom: 'camille', age: 4 },
    { prenom: 'johan', age: 27 },
    { prenom: 'greg', age: 34 },
    { prenom: 'louise', age: 5 },
    { prenom: 'francis', age: 65 },
    { prenom: 'stanislas', age: 12 },
]

for (let i = 0; i < classe.length; i++) {
    if (classe[i].age >= 18) {
    console.log(classe[i].prenom + " est majeur");
} else {
    console.log(classe[i].prenom +  " est mineur");
}
}

function saluer(prenom) {
    const message = "Bonjour " + prenom;
    return message;
}
console.log(saluer("maxime"))

