
let questions=[
     {
        num:1,
        question :"Comment lire le jour du mois dans une date ?",
        reponse: "getDate()",
        choix : [ 
                " ay()",
                "Date.parse()",
                "getDate()",
                "getDay()",
        ]
     }
     ,
     {
        num:2,
        question :"window.confirm() affiche une boite de dialogue avec",
        reponse:"un message et les boutons OK Annuler",
        choix : [ 
                "un message et le bouton OK seu",
                "n'existe pas en JavaScript",
                "un message, un champ de saisie et les boutons OK Annuler",
                "un message et les boutons OK Annuler",
        ]
     },

     {
        num:3,
        question :"alert(i++); et alert(++i); renvoient",
        reponse:"i+1 et i+1",
        choix : [ 
                " i et i+1",
                "deux erreurs",
                "i+1 et i+1",
                "i+1 et une erreur",
        ]
     }
     ,
     {
        num:4,
        question :"CA quoi sert l'opérateur #= ?",
        reponse:"n'existe pas en JavaScript",
        choix : [ 
                " à comparer le type et la valeur de 2 données",
                "n'existe pas en JavaScript",
                "à comparer 2 pointeurs",
                "c'est un comparateur logique",
        ]
     }
]
questions.sort(() => Math.random() - 0.5) 
console.log(questions.length);
for(let i=0; i<questions.length; i++){ 
         console.log(questions[i].choix.sort(() => Math.random() - 0.5));
}
