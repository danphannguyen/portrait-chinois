document.addEventListener("DOMContentLoaded", function () {


  // ================================================= Cursor =================================================

  options = {
    "cursorOuter": "circle-basic",
    "hoverEffect": "circle-move",
    "hoverItemMove": false,
    "defaultCursor": false,
    "outerWidth": 30,
    "outerHeight": 30
  };
  magicMouse(options);

  AOS.init({});

  // console.log(data);
  var numCase = 0;

  // ================================================= Création des sections ( analogies ) =================================================

  // selection de l'élément "analogies" pour y injecter du code
  var container = document.getElementById("analogies");

  // Parcours de toute les cases de la base de donnée
  for (var i = 0; i < data.length; i++) {
    // Insertion de toute les valeurs sur le modèle prédéfinis et rajout des animations AOS
    container.innerHTML +=
      '<section data-aos="fade-in" id="' +
      data[i].id +
      '"><img src=" ' +
      data[i].imgFond +
      ' " alt="imgfond" class="imgFond"><div class="centerGradient" data-aos="fade-left" data-aos-delay="1000" data-aos-duration="1000"><div class="centerCercle"><div class="bordureAna"></div><div class="cercleAna" style = background-image:url(' +
      data[i].illustration +
      ')></div></div><div class="centerCarre"><div class="bordureCarre"></div><div class="carre"><div class="legendAnalogies"><h2>Si j’étais ' +
      data[i].analogies +
      ", </h2><h2 class='centerTexte'>je serais " +
      data[i].valeurAnalogies +
      "</h2></div><p>" +
      data[i].text +
      "</p></div></div></div></section>";
  }

  // Boucle pour le nombre d'analogies + le "A propos"
  for (var i = 0; i < data.length + 1; i++) {
    // Création d'une hauteur de carré contenant le texte des analogies + ajout d'une marge pour les bordures
    var carre = document.querySelectorAll(".carre")[i].offsetHeight + 20 + "px";
    // Application des hauteurs des bordures calculées en fonction des hauteurs des carrés 
    document.querySelectorAll(".bordureCarre")[i].style.height = carre;
  }

  // Selection de l'élément onclick pour l'affichage du popup des mentions légales
  var oc = document.querySelector(".onclick");
  // Attente du click sur l'élément
  oc.addEventListener("click", function visible(event) {
    // Retire la class "cacher" et ajoute la class "affiche" sur le popup
    document.querySelector(".popup").classList.add("affiche");
    document.querySelector(".popup").classList.remove("cacher");
    // Retire la class "affiche" et ajoute la class "cacher" sur le lien "mentions légales" pour le faire disparaitre
    document.querySelector(".mentions").classList.remove("affiche");
    document.querySelector(".mentions").classList.add("cacher");
    // Retire la class "affiche" et ajoute la class "cacher" sur le popup pour retourner en haut de page pour le faire disparaitre
    document.querySelector(".go-top").classList.remove("affiche");
    document.querySelector(".go-top").classList.add("cacher");
  });

  // Selection de l'élément close pour la fermeture du popup des mentions légales
  var closep = document.querySelector(".close");
  closep.addEventListener("click", function visible(event) {
    // Retire la class "afficher" et ajoute la class "cacher" sur le popup
    document.querySelector(".popup").classList.remove("affiche");
    document.querySelector(".popup").classList.add("cacher");
    // Retire la class "cacher" et ajoute la class "affiche" sur le lien "mentions légales" pour le faire réapparaitre
    document.querySelector(".mentions").classList.add("affiche");
    document.querySelector(".mentions").classList.remove("cacher");
    // Retire la class "cacher" et ajoute la class "affiche" sur le popup pour retourner en haut de page pour le faire réapparaitre
    document.querySelector(".go-top").classList.add("affiche");
    document.querySelector(".go-top").classList.remove("cacher");
  });

  //  ================================================= ici ScrollToTop :) =================================================

  $(document).ready(function () {
    // Affiche 
    $(window).scroll(function () {
      if ($(this).scrollTop() > 2000) {
        $(".go-top").fadeIn(200);
      } else {
        $(".go-top").fadeOut(200);
      }
    });

    // Animate the scroll to top
    $(".go-top").click(function (event) {
      event.preventDefault();

      $("html, body").animate({ scrollTop: 0 }, 300);
    });
  });

  //  ================================================= LIGHT/DARK THEME=================================================

  let daybutton = document.querySelector(".dayButton");
  var day = document.querySelector(".dayButton");
  day.addEventListener("click", function visible(event) {
    daybutton.classList.remove("affiche");
    daybutton.classList.add("cacher");
    document.querySelector(".nightButton").classList.remove("cacher");
    document.querySelector(".nightButton").classList.add("affiche");
    document.body.classList.remove("light-theme");
    document.body.classList.add("dark-theme");
    // console.log("user clicked: ");
  });

  var night = document.querySelector(".nightButton");
  night.addEventListener("click", function visible(event) {
    document.querySelector(".nightButton").classList.remove("affiche");
    document.querySelector(".nightButton").classList.add("cacher");
    daybutton.classList.remove("cacher");
    daybutton.classList.add("affiche");
    document.body.classList.remove("dark-theme");
    document.body.classList.add("light-theme");
    // console.log("user clicked: ");
  });


  //  ================================================= NAVBAR =================================================

  $(document).ready(function () {
    // Show or hide the sticky footer button
    $(window).scroll(function () {
      if ($(this).scrollTop() > 200 && $(this).scrollTop() < 7000) {
        document.querySelector(".navbar").classList.add("affiche");
        document.querySelector(".navbar").classList.remove("cacher");
      } else {
        document.querySelector(".navbar").classList.remove("affiche");
        document.querySelector(".navbar").classList.add("cacher");
      }
    });
  });

  $(document).ready(function () {
    // Show or hide the sticky footer button
    $(window).scroll(function () {
      if ($(this).scrollTop() < 100) {
        $(".dayButton").fadeIn(100);
        $(".nightButton").fadeIn(100);
      } else {
        $(".dayButton").fadeOut(100);
        $(".nightButton").fadeOut(100);
      }
    });
  });

  //  ================================================= FORM =================================================

  var valueAna = 0;
  var selectAna = document.querySelector("#analogie");
  selectAna.addEventListener("keyup", function (e) {
    // console.log(e);
    valueAna = document.querySelector("#analogie").value;
    // console.log(valueAna);
  });

  let urlvisite = "https://perso-etudiant.u-pem.fr/~gambette/portrait/api.php?format=json&login=gambette&courriel=philippe.gambette@u-pem.fr&message=Test";

  document.querySelector("#submit").addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector('#newAnalogies').innerHTML +=
      '<section data-aos="fade-in"><div class="centerGradient" data-aos="fade-left" data-aos-delay="1000" data-aos-duration="1000"><div class="centerCercle"><div class="bordureAna"></div><div class="cercleAna" style = background-image:url(' +
      document.querySelector("#illust").value +
      ')></div></div><div class="centerCarre"><div class="bordureCarre newBordure"></div><div class="carre newCarre"><div class="legendAnalogies"><h2>Si j’étais ' +
      document.querySelector("#analogie").value +
      ", </h2><h2 class='centerTexte'>je serais " +
      document.querySelector("#valeurAnalogie").value +
      "</h2></div><p>" +
      document.querySelector("#desc").value +
      "</p></div></div></div></section>";

    fetch("https://perso-etudiant.u-pem.fr/~gambette/portrait/api.php?format=json&login=dan.phan-nguyen&courriel=" + document.querySelector("#courriel").value + "&message=Si j'étais " + document.querySelector("#analogie").value + ", je serais " + document.querySelector("#valeurAnalogie").value + "Parce que " + document.querySelector("#desc").value).then(function (response) {
      response.json().then(function (data) {
        if (data.status == "success") {
          document.querySelector("#message").innerHTML = "Bien reçu! :)";
        } else {
          document.querySelector("#message").innerHTML = "Oops, erreur :(";
        }
      })
    })
  });

});
