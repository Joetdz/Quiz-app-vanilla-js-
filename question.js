let questions = [
  {
    num: 1,
    question: "Comment lire le jour du mois dans une date ?",
    reponse: "getDate()",
    choix: [" ay()", "Date.parse()", "getDate()", "getDay()"],
  },
  {
    num: 2,
    question: "window.confirm() affiche une boite de dialogue avec",
    reponse: "un message et les boutons OK Annuler",
    choix: [
      "un message et le bouton OK seu",
      "n'existe pas en JavaScript",
      "un message, un champ de saisie et les boutons OK Annuler",
      "un message et les boutons OK Annuler",
    ],
  },

  {
    num: 3,
    question: "alert(i++); et alert(++i); renvoient",
    reponse: "i+1 et i+1",
    choix: [" i et i+1", "deux erreurs", "i+1 et i+1", "i+1 et une erreur"],
  },
  {
    num: 4,
    question: "A quoi sert l'opérateur #= ?",
    reponse: "n'existe pas en JavaScript",
    choix: [
      " à comparer le type et la valeur de 2 données",
      "n'existe pas en JavaScript",
      "à comparer 2 pointeurs",
      "c'est un comparateur logique",
    ],
  },
  {
    num: 5,
    question: "Comment afficher la page précédente du navigateur ?",
    reponse: "history.back()",
    choix: [
      "rollback()",
      "history.back()",
      "history(back)",
      "c'est impossible",
    ],
  },
  {
    num: 6,
    question: "Comment mettre une chaîne ch1 en minuscules ?",
    reponse: "ch1.toLowerCase()",
    choix: ["Min(ch1)", "Lower(ch1)", "ch1.min()", "ch1.toLowerCase()"],
  },
  {
    num: 7,
    question: "Si ch1='ABCED', que retourne ch1.charAt(3)",
    reponse: "E",
    choix: [" true", "E", "C", "une erreur"],
  },

  {
    num: 8,
    question: "alert(!(1&&0)?'VRAI':'FAUX'); affiche",
    reponse: "VRAI",
    choix: [" VRAI", "FAUX", "une erreur", "VRAI:FAUX"],
  },

  {
    num: 9,
    question: "Quelle instruction ouvre une nouvelle fenêtre ?",
    reponse: "window.open()",
    choix: ["window.open()", "url.open()", "open.url()", "open.html()"],
  },

  {
    num: 10,
    question: "Que renvoie ch1.slice(-3, -1) si ch1='ABCDE' ?",
    reponse: "CD",
    choix: [" AB", "CD", "BC", "ABCDE"],
  },

  {
    num: 11,
    question: "Avec quoi peut-on faire référence à l'objet courant ?",
    reponse: "this",
    choix: [" this", "->", "&", "le point"],
  },

  {
    num: 12,
    question: "Comment accéder au premier élément d'un tableau T1 ?",
    reponse: "T1[0]",
    choix: [" T1[1]", "T1(0)", "T1(1)", "T1[0]"],
  },

  {
    num: 13,
    question: "Quel est l'événement inverse de onFocus ?",
    reponse: "onBlur",
    choix: [" onFocusOff", "onBlur", "onDeselect", "onFocusDown"],
  },

  {
    num: 14,
    question: "Quelle est la syntaxe correcte ?",
    reponse: "document.getElementById('MonId');",
    choix: [
      "document.getElementById('MonId');",
      "window.getElementById('MonId');",
      "getElementById(window.['MonId']);",
      "getElementById(document.['MonId']);",
    ],
  },

  {
    num: 15,
    question:
      "Quel mot clé sert à ajouter des propriétés ou méthodes à un objet existant ?",
    reponse: "prototype",
    choix: [" prototype", "new", "this", "create"],
  },
];
questions.sort(() => Math.random() - 0.5);
for (let i = 0; i < questions.length; i++) {
  questions[i].choix.sort(() => Math.random() - 0.5);
}
