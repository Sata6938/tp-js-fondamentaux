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
