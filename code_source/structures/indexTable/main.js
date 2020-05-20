/****************************        AIDE EN LIGNE          *************************************************/
document.querySelector('#quitte').addEventListener('mouseover', function(e) {
    e.target.style.backgroundColor = "rgb(255, 58, 3)";
});
document.querySelector('#quitte').addEventListener('mouseout', function(e) {
    e.target.style.backgroundColor = 'rgb(34, 69, 200)';
});
document.querySelector('#suivant').addEventListener('mouseover', function(e) {
    e.target.style.backgroundColor = 'rgb(34, 111, 200)';
});
document.querySelector('#suivant').addEventListener('mouseout', function(e) {
    e.target.style.backgroundColor = 'rgb(34, 69, 200)';
});

document.querySelector('#precedent').addEventListener('mouseover', function(e) {
    e.target.style.backgroundColor = 'rgb(34, 111, 200)';
});
document.querySelector('#precedent').addEventListener('mouseout', function(e) {
    e.target.style.backgroundColor = 'rgb(34, 69, 200)';
});

const nbrDePhotoAide = 10; //le nombre de slides dans l'aide

var tabDesPhoto = [];
for (let index = 0; index < nbrDePhotoAide; index++) { //remplir le tableau par les photos 
    tabDesPhoto[index] = "photo" + index;
}

document.getElementById('quitte').addEventListener('click', function() { //ajouter l'evenement au boutons quitte
    $('.aide').fadeOut();
});
document.getElementById("aide-hide").addEventListener('click', function() { //afficher l'aide en ligne
    $('.kolech').fadeIn(2000);
    document.querySelector(".aide").style.display = "block";
    document.getElementById("suivant").style.display = "flex";
    document.getElementById("precedent").style.display = "none";
    document.getElementById("photo0").style.display = "flex";
    for (let index = 1; index < nbrDePhotoAide; index++) {
        document.getElementById(tabDesPhoto[index]).style.display = "none";
    }
});

// afficher l'aide par defaut
document.querySelector(".aide").style.display = "block";
document.getElementById("suivant").style.display = "flex";
document.getElementById("precedent").style.display = "none";
document.getElementById("photo0").style.display = "flex";
for (let index = 1; index < nbrDePhotoAide; index++) {
    document.getElementById(tabDesPhoto[index]).style.display = "none";
}
//

document.getElementById("suivant").addEventListener('click', function() { //ajouter l'evenement pour défiler les slides
    var idPhoto;
    for (let index = 0; index < nbrDePhotoAide; index++) {
        if (document.getElementById(tabDesPhoto[index]).style.display != "none")
            idPhoto = index;
    }
    if (parseInt(idPhoto) == 0)
        document.getElementById("precedent").style.display = "flex";
    if (parseInt(idPhoto) == (nbrDePhotoAide - 2)) //dernier slide
    {
        document.getElementById("suivant").style.display = "none";
        document.getElementById("photo" + (nbrDePhotoAide - 1)).style.display = "flex";
        document.getElementById("photo" + (nbrDePhotoAide - 2)).style.display = "none";
    } else {
        document.getElementById(tabDesPhoto[idPhoto + 1]).style.display = "flex";
        document.getElementById(tabDesPhoto[idPhoto]).style.display = "none";
    }
});

document.getElementById("precedent").addEventListener('click', function() { //ajouter l'evenement pour défiler les slides en arrière
    var idPhoto;
    for (let index = 0; index < nbrDePhotoAide; index++) {
        if (document.getElementById(tabDesPhoto[index]).style.display != "none")
            idPhoto = index;
    }
    if (parseInt(idPhoto) == 1) {
        document.getElementById("precedent").style.display = "none";
    }
    if (parseInt(idPhoto) == 0) //premier slide
    {
        document.getElementById("precedent").style.display = "none";
        document.getElementById("photo1").style.display = "flex";
        document.getElementById("photo0").style.display = "none";
    } else {
        document.getElementById(tabDesPhoto[idPhoto - 1]).style.display = "flex";
        document.getElementById(tabDesPhoto[idPhoto]).style.display = "none";
        document.getElementById("suivant").style.display = "flex";
    }
});
/*************************************************      Fin aide        *********************************************************************/
/**************************************************** MASQUER / AFFICHER ******************************************************************** */
document.getElementById("menu-hide").addEventListener('click', hide); // afficher ou masquer le menu des opérations
function hide() { // la fonction correspondante à "menu-hide"

    if ((document.getElementById("menu").style.width == '0px') || (document.getElementById("menu").style.width == '150px')) {
        if (document.getElementById("menu").style.width == '0px') {
            if (mask) masquer(); // bloquer tout les boutons en supprimant tout les évènements
            else demasquer(); // débloquer tout les boutons en ajoutant tout les évènements
            document.getElementById("reorganisation").style.display = 'none';
            if (!Dense) // si le type d'index est non dense
                $("#reorganisation").fadeIn(0);
            for (let index = 0; index < 151; index++) {
                setTimeout(() => {
                    document.getElementById("menu").style.width = index + 'px';
                }, index);
            }
        } else if (document.getElementById("menu").style.width == '150px') {
            for (let index = 150; index > -1; index--) {
                setTimeout(() => {
                    document.getElementById("menu").style.width = index + 'px';
                }, (151 - index) * 0.9);
            }
            $("#creat-action").fadeOut(250);
            $("#search-action").fadeOut(250);
            $("#delete-action").fadeOut(250);
            $("#requete-action").fadeOut(250);
            $("#insert-action").fadeOut(250);
        }
        if (document.getElementById("menu-hide-img").className == "rotateLeft") {
            document.getElementById("menu-hide-img").className = "rotateRight";
        } else {
            document.getElementById("menu-hide-img").className = "rotateLeft";
        }
    }
}
//_____________________________________________________________________________//

document.getElementById("degre-hide").addEventListener('click', function() { // afficher ou masquer le degre du fichier

    if ((document.getElementById("degre").style.height == '0px') || (document.getElementById("degre").style.height == '150px')) {
        document.getElementById("enr2").style.display = 'none';
        document.getElementById("enr3").style.display = 'none';
        document.getElementById("enr4").style.display = 'none';
        document.getElementById("enr5").style.display = 'none';
        document.getElementById("enr6").style.display = 'none';
        $("#enr2").fadeIn(150);
        $("#enr3").fadeIn(300);
        $("#enr4").fadeIn(450);
        $("#enr5").fadeIn(600);
        $("#enr6").fadeIn(750);
        if (document.getElementById("degre").style.height == '0px') {
            for (let index = 0; index < 151; index++) {
                setTimeout(() => {
                    document.getElementById("degre").style.height = index + 'px';
                }, index);
            }
        } else if (document.getElementById("degre").style.height == '150px') {
            for (let index = 150; index > -1; index--) {
                setTimeout(() => {
                    document.getElementById("degre").style.height = index + 'px';
                }, (151 - index));
            }
        }
        if (document.getElementById("degre-hide-img").className == "rotateDown") {
            document.getElementById("degre-hide-img").className = "rotateTop";
        } else {
            document.getElementById("degre-hide-img").className = "rotateDown";
        }
    }
});
//_____________________________________________________________________________//

document.getElementById("code-hide").addEventListener('click', algoHide); // afficher ou masquer la zone d'algorithme

function algoHide() { // la fonction correspondante à "code-hide" 
    if (document.getElementById("code").style.width == '0px') {
        for (let index = 0; index < 421; index++) {
            setTimeout(() => {
                document.getElementById("code").style.width = index + 'px';
            }, index * 0.9);
        }
        document.getElementById("code-hide-img").className = "rotateLeft";
    } else if (document.getElementById("code").style.width == '420px') {
        for (let index = 420; index > -1; index--) {
            setTimeout(() => {
                document.getElementById("code").style.width = index + 'px';
            }, (420 - index) * 0.9);
        }
        document.getElementById("code-hide-img").className = "rotateRight";
    }
}
//_____________________________________________________________________________//

document.getElementById("instruction-hide").addEventListener('click', instractionHide); // afficher et masquer la barre d'instructions

function instractionHide() { // la fonction correspondante à "instruction-hide" 
    mettreAjourAffichageEntete(); // afficher les mis à jour appliquées sur l'entete dans la barre de l'entete

    if ((document.getElementById("instruction").style.width == '0px') || (document.getElementById("instruction").style.width == '420px')) {
        if (document.getElementById("instruction").style.width == '0px') {
            for (let index = 0; index < 421; index++) {
                setTimeout(() => {
                    document.getElementById("instruction").style.width = index + 'px';
                }, index * 0.9);
            }
        } else
            for (let index = 420; index > -1; index--) {
                setTimeout(() => {
                    document.getElementById("instruction").style.width = index + 'px';
                }, (420 - index) * 0.9);
            }
        if (document.getElementById("instruction-hide-img").className == "rotateLeft") {
            document.getElementById("instruction-hide-img").className = "rotateRight";
        } else {
            document.getElementById("instruction-hide-img").className = "rotateLeft";
        }
    }
}
//_____________________________________________________________________________//

document.getElementById("entete-hide").addEventListener('click', enteteInfoHide); // afficher et masquer la barre d'instructions

function enteteInfoHide() { // la fonction correspondante à "entete-hide"
    mettreAjourAffichageEntete(); // afficher les mis à jour appliquées sur l'entete dans la barre de l'entete
    if ((document.getElementById("enteteInfo").style.width == '0px') || (document.getElementById("enteteInfo").style.width == '370px')) {
        if (document.getElementById("enteteInfo").style.width == '0px') {
            for (let index = 0; index < 371; index++) {
                setTimeout(() => {
                    document.getElementById("enteteInfo").style.width = index + 'px';
                }, index * 0.9);
            }
        } else if (document.getElementById("enteteInfo").style.width == '370px')
            for (let index = 370; index > -1; index--) {
                setTimeout(() => {
                    document.getElementById("enteteInfo").style.width = index + 'px';
                }, (371 - index) * 0.9);
            }
        if (document.getElementById("entete-hide-img").className == "rotateLeft") {
            document.getElementById("entete-hide-img").className = "rotateRight";
        } else {
            document.getElementById("entete-hide-img").className = "rotateLeft";
        }
    }
}
//_____________________________________________________________________________//

document.getElementById("insert").addEventListener('click', function() { // afficher l'input de l'instruction et masquer les autres
    if (document.getElementById("insert-action").style.display == 'none') {
        $("#creat-action").fadeOut();
        $("#search-action").fadeOut();
        $("#delete-action").fadeOut();
        $("#requete-action").fadeOut();
        $("#insert-action").fadeIn();
    } else $("#insert-action").fadeOut();
});
//_____________________________________________________________________________//

document.getElementById("requete").addEventListener('click', function() { // afficher l'input de la requête et masquer les autres
    if (document.getElementById("requete-action").style.display == 'none') {
        $("#creat-action").fadeOut();
        $("#search-action").fadeOut();
        $("#delete-action").fadeOut();
        $("#insert-action").fadeOut();
        $("#requete-action").fadeIn();
    } else
        $("#requete-action").fadeOut();
});

//_____________________________________________________________________________//

function suppression() { // lancer l'opération de la suppression du fichier et masquer tout les inputs
    if (document.getElementById("create-action").style.display == 'none') {
        $("#creat-action").fadeOut();
        $("#search-action").fadeOut();
        $("#delete-action").fadeOut();
        $("#insert-action").fadeOut();
        $("#requete-action").fadeOut();
    } else document.getElementById("create-action").style.display = 'none';
    libererFichier = true;
    supprimer();
    document.getElementById('current-action').style.display = "none";
    libererFichier = false;
}

//_____________________________________________________________________________//

document.getElementById("search").addEventListener('click', function() { // afficher l'input de la recherche et masquer les autres
    if (document.getElementById("search-action").style.display == 'none') {
        $("#search-action").fadeIn();
        $("#delete-action").fadeOut();
        $("#insert-action").fadeOut();
        $("#requete-action").fadeOut();

    } else $("#search-action").fadeOut();
});
//_____________________________________________________________________________//

document.getElementById("delete").addEventListener('click', function() { // afficher l'input de la suppression et masquer les autres
    if (document.getElementById("delete-action").style.display == 'none') {
        $("#search-action").fadeOut();
        $("#delete-action").fadeIn();
        $("#insert-action").fadeOut();
        $("#requete-action").fadeOut();
    } else $("#delete-action").fadeOut();
})

//________________________________________________________________________________________________________________________________________//

function fct() { // ajouter du style pour le choix du degre
    document.querySelector('#enr2').addEventListener('mouseover', function(e) {
        e.target.style.backgroundColor = 'black';
    });
    document.querySelector('#enr2').addEventListener('mouseout', function(e) {
        if (nbr != 2)
            e.target.style.backgroundColor = 'gray';
    });
    document.querySelector('#enr3').addEventListener('mouseover', function(e) {
        e.target.style.backgroundColor = 'black';
    });
    document.querySelector('#enr3').addEventListener('mouseout', function(e) {
        if (nbr != 3)
            e.target.style.backgroundColor = 'gray';
    });
    document.querySelector('#enr4').addEventListener('mouseover', function(e) {
        e.target.style.backgroundColor = 'black';
    });
    document.querySelector('#enr4').addEventListener('mouseout', function(e) {
        if (nbr != 4)
            e.target.style.backgroundColor = 'gray';
    });
    document.querySelector('#enr5').addEventListener('mouseover', function(e) {
        e.target.style.backgroundColor = 'black';
    });
    document.querySelector('#enr5').addEventListener('mouseout', function(e) {
        if (nbr != 5)
            e.target.style.backgroundColor = 'gray';
    });
    document.querySelector('#enr6').addEventListener('mouseover', function(e) {
        e.target.style.backgroundColor = 'black';
    });
    document.querySelector('#enr6').addEventListener('mouseout', function(e) {
        if (nbr != 6)
            e.target.style.backgroundColor = 'gray';
    });
}
fct();

// ajouter du style pour les boutons submit [OK]
for (let index = 0; index < document.querySelectorAll('.ok').length; index++) {
    document.querySelectorAll('.ok')[index].addEventListener('mouseover', function(e) {
        e.target.style.backgroundColor = 'black';
    });
    document.querySelectorAll('.ok')[index].addEventListener('mouseout', function(e) {
        e.target.style.backgroundColor = 'lightseagreen';
    });
}

/************************************************ ANIMATION DES OPERATIONS DANS LE MENU *****************************************************/

document.querySelector('#insert').addEventListener('mouseover', function(e) {
    e.target.style.backgroundColor = 'black';
});
document.querySelector('#insert').addEventListener('mouseout', function(e) {
    e.target.style.backgroundColor = 'lightseagreen';
});
document.querySelector('#reorganisation').addEventListener('mouseover', function(e) {
    e.target.style.backgroundColor = 'black';
});
document.querySelector('#reorganisation').addEventListener('mouseout', function(e) {
    e.target.style.backgroundColor = 'lightseagreen';
});
document.querySelector('#requete').addEventListener('mouseover', function(e) {
    e.target.style.backgroundColor = 'black';
});
document.querySelector('#requete').addEventListener('mouseout', function(e) {
    e.target.style.backgroundColor = 'lightseagreen';
});
document.querySelector('#create').addEventListener('mouseover', function(e) {
    e.target.style.backgroundColor = 'black';
});
document.querySelector('#create').addEventListener('mouseout', function(e) {
    e.target.style.backgroundColor = 'lightseagreen';
});
document.querySelector('#search').addEventListener('mouseover', function(e) {
    e.target.style.backgroundColor = 'black';
});
document.querySelector('#search').addEventListener('mouseout', function(e) {
    e.target.style.backgroundColor = 'lightseagreen';
});
document.querySelector('#delete').addEventListener('mouseover', function(e) {
    e.target.style.backgroundColor = 'black';
});
document.querySelector('#delete').addEventListener('mouseout', function(e) {
    e.target.style.backgroundColor = 'lightseagreen';
});
/*********************************************          LES ALGORITHMES         *************************************************************** */
/*****************************************          ALGORITHME DE L'INDEX DENSE        ****************************************************************/
/*************************      ALGORITHME DE L'INSERTION       *****************************/
const algo_insererDense = `<p id="procedure">Procedure Insertion(fichier,enr)  </p>
          <p id="algo1">SI (nbrInsertions = 0) creation(fichier);&nbsp;&nbsp;  ALLER FIN; &nbsp;&nbsp;FSI</p>
          <p id="algo2">&nbsp;&nbsp;SINON&nbsp;&nbsp;Recherche(fichier,enr.cle,i,j,trouve); </p>
          <p id="algo3">&nbsp;&nbsp;&nbsp;&nbsp;SI (!trouve) </p>
          <p id="algo4"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;affecter_Fichier(fichier,enr,i,j);</p>
          <p id="algo5"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Mettre à jour l'index &nbsp;&nbsp;&nbsp;&nbsp; nbrInsertions++;</p>
          <p id="algo6"> &nbsp;&nbsp;&nbsp;&nbsp;FSI</p>
          <p id="algo7" >FIN</p>`;
/***************************     FIN DE L'ALGORITHME       *****************************/
/*************************      ALGORITHME DE SUPPRESSION       *****************************/
const algo_supprimerDense = `<p id="procedure">Procedure Suppression(fichier,cle)</p>
          <p id="algo1">SI (nbrInsertion = 0) &nbsp;&nbsp;  ALLER FIN;&nbsp;&nbsp;&nbsp;&nbsp;FSI</p>
        <p id="algo2">&nbsp;&nbsp;&nbsp;&nbsp;SINON&nbsp;&nbsp;Recherche(fichier,cle,i,j,trouve);</p>
          <p id="algo3">&nbsp;&nbsp;&nbsp;&nbsp;SI(trouve)&nbsp;&nbsp </p>
          <p id="algo4">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Remplacer enr(i,j) par le dernier enr du fichier</p>
          <p id="algo5"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Mettre à jour l'index&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;nbrInsertions--;</p>
          <p id="algo6"> &nbsp;&nbsp;&nbsp;&nbsp;FSI</p>
          <p id="algo7" >FIN</p>`;
/***************************     FIN DE L'ALGORITHME       *****************************/
/*************************      ALGORITHME DE LA RECHERCHE       *****************************/
const algo_rechercheDense = `<p id="procedure">Procedure Recherche(fichier,cle,i,j,trouve)</p>
          <p id="algo1">SI (nbrInsertion = 0) &nbsp;&nbsp;  ALLER FIN;&nbsp;&nbsp;&nbsp;&nbsp;FSI</p>
        <p id="algo2">&nbsp;&nbsp;SINON&nbsp;&nbsp; RechercheIndex(cle,trouve,i,j);</p>
          <p id="algo3">&nbsp;&nbsp;&nbsp;&nbsp;SI (trouve) </p>
          <p id="algo4"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;lire_bloc(fichier,i,buf);</p>
          <p id="algo5"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Afficher(buf[j].enr);&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;  //afficher les informations </p>
          <p id="algo6"> &nbsp;&nbsp;&nbsp;&nbsp;FSI&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//de l'enregistrement </p>
          <p id="algo7" >FIN</p>`;
/***************************     FIN DE L'ALGORITHME       *****************************/
/*************************      ALGORITHME DE LA REQUETE      *****************************/
const algo_requeteDense = `<p id="procedure">Procedure requete(max,min)</p>
          <p id="algo1">SI (nbrInsertion = 0) &nbsp;&nbsp;  ALLER FIN;&nbsp;&nbsp;&nbsp;&nbsp;FSI</p>
          <p id="algo2">&nbsp;&nbsp;SINON&nbsp;&nbsp;indice = RechercheIndex(min,i); i = 1;</p>
          <p id="algo3">&nbsp;&nbsp;TQ((index[indice].clé &lt;= max) ET (nbrInsertions &gt; indice )) </p>
          <p id="algo4">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;tab_resultat[i] = index[indice];&nbsp;&nbsp;&nbsp;i++;&nbsp;&nbsp;&nbsp;indice++;&nbsp;&nbsp;&nbsp; FTQ</p>
          <p id="algo5">&nbsp;&nbsp;POUR i = 0 ; i &lt; tab_resultat.taille&nbsp;&nbsp;&nbsp;&nbsp;</p>
          <p id="algo6"> &nbsp;&nbsp;&nbsp;&nbsp;Afficher(enr(tab_resultat[i].i&nbsp;,&nbsp;tab_resultat[i].j));&nbsp;&nbsp;&nbsp;&nbsp; FP</p>
          <p id="algo7" >FIN&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//enr(i,j)&nbsp;:&nbsp; enregistrement d'adresse (i,j) </p>`;
/***************************     FIN DE L'ALGORITHME       *****************************/
//*********************           ALGORITHME DE LA SUPPRESSION DU FICHIER DENSE ET NON DENSE     ***************************************/
const algo_SupprimerFichier = `<p id="procedure">Procedure supprimerFichier()</p>
          <p id="algo1">DEBUT</p>
          <p id="algo2">&nbsp;&nbsp;&nbsp;Supprimer le fichier de données</p>

          <p id="algo4">&nbsp;&nbsp;&nbsp;Supprimer l'index</p>

          <p id="algo6">&nbsp;&nbsp;&nbsp;Initialiser l'entete </p>
          <p id="algo7" >FIN&nbsp;</p>`;
/***************************     FIN DE L'ALGORITHME       *****************************/

/**************************************         ALGORITHME DE L'INDEX NON DENSE             ************************************************/
/*************************      ALGORITHME DE LA RECHERCHE       *****************************/
const algo_insererNonDense = `<p id="procedure">Procedure Insertion(fichier,enr)  </p>
          <p id="algo1">SI (nbrInsertions = 0) creation(fichier);&nbsp;&nbsp;  ALLER FIN; &nbsp;&nbsp;FSI</p>
          <p id="algo2">&nbsp;&nbsp;SINON&nbsp;&nbsp;Recherche(fichier,enr.cle,i,j,trouve); </p>
          <p id="algo3">&nbsp;&nbsp;&nbsp;&nbsp;SI (!trouve)  &nbsp;&nbsp;&nbsp;&nbsp; nbrInsertions++;</p>
          <p id="algo4"> &nbsp;&nbsp;&nbsp;affecter_Fichier(fichier,enr,i,j);&nbsp;+ decalage &nbsp;//si nécessaire</p>
          <p id="algo5"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Mettre à jour l'index &nbsp;&nbsp;&nbsp;&nbsp; </p>
          <p id="algo6"> &nbsp;&nbsp;&nbsp;&nbsp;FSI</p>
          <p id="algo7" >FIN</p>`;
/***************************     FIN DE L'ALGORITHME       *****************************/
/*************************      ALGORITHME DE LA REQUETE       *****************************/
const algo_requeteNonDense = `<p id="procedure">Procedure requete(max,min)</p>
          <p id="algo1">SI (nbrInsertion = 0) &nbsp;&nbsp;  ALLER FIN;&nbsp;&nbsp;&nbsp;&nbsp;FSI</p>
          <p id="algo2">&nbsp;&nbsp;SINON&nbsp;&nbsp;Recherche(fichier,min,i,j,trouve);</p>
          <p id="algo3">&nbsp;&nbsp;TQ((enr(i,j).clé &lt; = max) ET (!Fin du fichier)) </p>
          <p id="algo4">&nbsp;&nbsp;&nbsp;&nbsp;Parcourir le fichier enregistrement par enrigistrement</p>
          <p id="algo5">&nbsp;&nbsp; &nbsp;&nbsp;SI (enr(i,j).eff="f") &nbsp;&nbsp;&nbsp;&nbsp;Afficher(enr(i,j)); FSI </p>
          <p id="algo6">&nbsp;&nbsp;FTQ&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//enr(i,j)&nbsp;:&nbsp; enregistrement d'adresse (i,j) </p>
          <p id="algo7" >FIN&nbsp;</p>`;
/***************************     FIN DE L'ALGORITHME       *****************************/
/*************************      ALGORITHME DE LA REORGANISATION       *****************************/
const algo_reorganisation = `<p id="procedure" >Procedure Reorganisation(fichier)  </p>
          <p id="algo1">  SI ((nbrInsertions = 0) OU (nbrSuppression = 0)) &nbsp;&nbsp;&nbsp;FIN </p>
        <p id="algo2">&nbsp;&nbsp;SI (nbrInsertions = nbrSupressions)&nbsp;&nbsp; supprimerFichier();</p>
          <p id="algo3">&nbsp;&nbsp;&nbsp;&nbsp;SINON &nbsp;&nbsp; POUR i = 0 ; i &lt; nbrBlocs</p>
          <p id="algo4"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; POUR j = 0 , j &lt; b </p>
          <p id="algo5"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SI (enr(i,j).eff = 'f') 
          <p id="algo6"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; affecter_nouveux_fichier(enr(i,j));
          <p id="algo7" >FIN&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//enr(i,j)&nbsp;:&nbsp; enregistrement d'adresse (i,j)</p>`;
/***************************     FIN DE L'ALGORITHME       *****************************/
/*************************      ALGORITHME DE LA RECHERCHE       *****************************/
const algo_rechercheNonDense = `<p id="procedure">Procedure Recherche(fichier,cle,i,j,trouve)</p>
          <p id="algo1">SI (nbrInsertion = 0) &nbsp;&nbsp;  ALLER FIN;&nbsp;&nbsp;&nbsp;&nbsp;FSI</p>
        <p id="algo2">&nbsp;&nbsp;SINON&nbsp;&nbsp; RechercheIndex(cle,i);</p>
          <p id="algo3">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;lire_bloc(fichier,i,buf);</p>
          <p id="algo4"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;RechercheFichierDonnées(buf,i,trouve,cle);</p>
          <p id="algo5"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SI (trouve) Afficher(buf[j].enr); &nbsp;&nbsp;&nbsp;&nbsp;FSI</p>
          <p id="algo6"> &nbsp;&nbsp;&nbsp;&nbsp;FSINON&nbsp;&nbsp; </p>
          <p id="algo7" >FIN</p>`;
/***************************     FIN DE L'ALGORITHME       *****************************/
/*************************      ALGORITHME DE LA SUPPRESSION       *****************************/
const algo_supprimerNonDense = `<p id="procedure">Procedure Suppression(fichier,cle)</p>
          <p id="algo1">SI (nbrInsertion = 0) &nbsp;&nbsp;  ALLER FIN;&nbsp;&nbsp;&nbsp;&nbsp;FSI</p>
        <p id="algo2">&nbsp;&nbsp;SINON&nbsp;&nbsp; RechercheIndex(cle,i);</p>
          <p id="algo3">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;lire_bloc(fichier,i,buf);</p>
          <p id="algo4">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;RechercheFichierDonnées(buf,i,trouve,cle);</p>
          <p id="algo5"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SI (trouve)&nbsp;&nbsp;&nbsp; buf[j].enr.sup &lt;&ndash; 'v';
           &nbsp;&nbsp;&nbsp;nbrSuppressions++;&nbsp;&nbsp;&nbsp;&nbsp;</p>
          <p id="algo6"> &nbsp;&nbsp;FSI&nbsp;&nbsp;FSINON&nbsp;&nbsp; </p>
          <p id="algo7" >FIN</p>`;
/***************************     FIN DE L'ALGORITHME       *****************************/

/*********************************************ANIMATION DE L'ALGORITHME*************************************************/

function algorithme(num) { // le rôle de la fonction est de colorier et de animer l'instruction n°"num" de l'algorithme
    if (document.getElementById("procedure") != null)
        document.getElementById("procedure").style.backgroundColor = "coral";
    for (let index = 1; index <= 7; index++) { // le nombre d'instructions dans l'algorithme est 7
        if (document.getElementById("algo" + index) != null)
            document.getElementById("algo" + index).style.backgroundColor = "coral"; //initialiser l'algorithme (éteigner toutes les instructions)
    }
    if (num > 0)
        if (document.getElementById("algo" + num) != null)
            document.getElementById("algo" + num).style.backgroundColor = "#333";
        else if (num == 0)
        if (document.getElementById("procedure") != null) document.getElementById("procedure").style.backgroundColor = "#333";
}

/***************************                FIN DE LA PARTIE DE L'ALGORITHME                *****************************/
/**********************************************LES VARIABLES GLOBALES***************************************************/

var tab = new Array(); // la table index
var tabFichier = new Array(); //le fichier de données
let nbr = 0; // degre du fichier  //le nombre d'enregistrement dans un bloc
var sup = false; // booleen indiquant que l'opération lancée est l'opération de suppression
let cleMax = 9999; // la borne max de l'intervalle permi dans les inputs
var libererFichier = false; // ce booleen indique que l'opération de suppression de fichier
///////////////////////////// est lancée par le menu des opération directement et non pas par d'autres fonctions
let backgroundColorBloc1 = "#F0F1E4"; // la couleur du background des bloc d'indice impair
let backgroundColorBloc2 = "#F1E4F1"; // la couleur du background des bloc d'indice pair
var bool = false; //indique si les tables index et fichier sont supprimés ou non
var insertion = false; // booleen indique que l'opération de la recherche est lancée par l'insertion (pour l'animation)
var elementInsererColor = false; // indique qu'il faut colorier l'element inseré
var reorg = false; // indique que l'opération de reorganisation est lancée
var rech = false; // indique que l'opération de recherche est lancée  
var test = { fin: false }; // tester si l'opération est terminée
var fichier = document.querySelector('.fichier'); // le div du fichier de données
var resultatRequeteIndex = new Array(); // table index résultat de la requete
var entete = { nbrInsertion: 0, nbrBloc: 0, nbrSuppression: 0 }; //l'entete de fichier
var Dense = true; // indique que l'index est dense = 'v'
var mask = false; //si les boutons sont bloqués
var vitesse = 1; // la vitesse de l'animation
var slider = document.getElementById("myRange"); //le contrôleur de vitesse
var initialisation = false; // il est à faut si le programme vient de se lancé
var alea = false; // si la création du fichier est aleatoire
const instructionText = document.getElementById("instructionText"); // la zone de l'instruction

/************************************************       FIN         *****************************************************************************/
/*******************************LES FONCTONS DU DEGRE NBR D'ENREGISTREMENT DANS LE BLOC****************************************************************/
enr3(); // choix du degré par defaut
/*************************          DEGRE 2         ***********************************/
function enr2() {
    alea = true;
    document.getElementById('current-action').style.display = "none";
    vitesse = ((220 - Number(slider.value)) / 100);
    masquer(); // bloquer tout les boutons en supprimant tout les évènements
    changeType();
    nbr = 2;
    supprimer();
    mettreAjourAffichageEntete(); // afficher les mis à jour appliquées sur l'entete dans la barre de l'entete
    fct();
    document.getElementById("enr2").removeEventListener('click', enr2);
    for (let index = 2; index < 7; index++) {
        document.querySelector('#enr' + index).style.backgroundColor = '';
    }
    document.querySelector('#enr2').style.backgroundColor = 'black';

    document.getElementById("enr3").addEventListener('click', enr3);
    document.getElementById("enr4").addEventListener('click', enr4);
    document.getElementById("enr5").addEventListener('click', enr5);
    document.getElementById("enr6").addEventListener('click', enr6);
    if (initialisation) {
        vitesseSauvgarde = vitesse;
        vitesse = 0;
        for (let index = 0; index < 10; index++) {
            setTimeout(function() {
                $('.kolech').fadeOut(0);
                document.querySelector('#sub_arb').value = Math.trunc(Math.random() * 900 + 1);
                inserer();
                if (index == 9)
                    setTimeout(function() {
                        $('.kolech').fadeIn();
                        vitesse = vitesseSauvgarde;
                        setTimeout(() => {
                            alea = false;
                            demasquer(); // débloquer tout les boutons en ajoutant tout les évènements
                            document.getElementById("code").innerHTML = "";
                            instructionText.innerHTML = "";
                        }, 2000);
                    }, 200);
            }, 10 * index);
        }
    }
}
/*************************          DEGRE 3         ***********************************/
function enr3() {
    alea = true;
    document.getElementById('current-action').style.display = "none";
    vitesse = ((220 - Number(slider.value)) / 100);
    changeType();
    masquer(); // bloquer tout les boutons en supprimant tout les évènements
    fct();
    nbr = 3;
    supprimer();
    document.getElementById("enr3").removeEventListener('click', enr3);
    mettreAjourAffichageEntete(); // afficher les mis à jour appliquées sur l'entete dans la barre de l'entete
    for (let index = 2; index < 7; index++) {
        document.querySelector('#enr' + index).style.backgroundColor = '';
    }
    document.querySelector('#enr3').style.backgroundColor = 'black';

    document.getElementById("enr2").addEventListener('click', enr2);
    document.getElementById("enr4").addEventListener('click', enr4);
    document.getElementById("enr5").addEventListener('click', enr5);
    document.getElementById("enr6").addEventListener('click', enr6);
    if (initialisation) {
        vitesseSauvgarde = vitesse;
        vitesse = 0;
        document.querySelector('.kolech').style.display = "none";
        for (let index = 0; index < 10; index++) {
            setTimeout(function() {
                document.querySelector(".kolech").display = "none";
                document.querySelector('#sub_arb').value = Math.trunc(Math.random() * 900 + 1);
                inserer();
                if (index == 9)
                    setTimeout(function() {
                        afficher(-1, fichier);
                        $('.kolech').fadeIn();
                        afficher(-1, fichier);
                        vitesse = vitesseSauvgarde;
                        setTimeout(() => {
                            demasquer(); // débloquer tout les boutons en ajoutant tout les évènements
                            afficher(-1, fichier);
                            alea = false;
                            document.getElementById("code").innerHTML = "";
                            instructionText.innerHTML = "";
                        }, 5000);
                    }, 200);
            }, 10 * index);
        }
    }
}
/************************           DEGRE 4         ***********************************/
function enr4() {
    alea = true;
    document.getElementById('current-action').style.display = "none";
    vitesse = ((220 - Number(slider.value)) / 100);
    changeType();
    masquer(); // bloquer tout les boutons en supprimant tout les évènements
    fct();
    nbr = 4;
    supprimer();
    document.getElementById("enr4").removeEventListener('click', enr4);
    mettreAjourAffichageEntete(); // afficher les mis à jour appliquées sur l'entete dans la barre de l'entete
    for (let index = 2; index < 7; index++) {
        document.querySelector('#enr' + index).style.backgroundColor = '';
    }
    document.querySelector('#enr4').style.backgroundColor = 'black';

    document.getElementById("enr2").addEventListener('click', enr2);
    document.getElementById("enr3").addEventListener('click', enr3);
    document.getElementById("enr5").addEventListener('click', enr5);
    document.getElementById("enr6").addEventListener('click', enr6);
    if (initialisation) {
        vitesseSauvgarde = vitesse;
        vitesse = 0;
        for (let index = 0; index < 10; index++) {
            setTimeout(function() {
                $('.kolech').fadeOut(0);
                document.querySelector('#sub_arb').value = Math.trunc(Math.random() * 900 + 1);
                inserer();
                if (index == 9)
                    setTimeout(function() {
                        $('.kolech').fadeIn();
                        vitesse = vitesseSauvgarde;
                        setTimeout(() => {
                            demasquer(); // débloquer tout les boutons en ajoutant tout les évènements
                            alea = false;
                            document.getElementById("code").innerHTML = "";
                            instructionText.innerHTML = "";
                        }, 2000);
                    }, 200);
            }, 10 * index);
        }
    }
}
/*************************          DEGRE 5         ***********************************/
function enr5() {
    alea = true;
    document.getElementById('current-action').style.display = "none";
    vitesse = ((220 - Number(slider.value)) / 100);
    changeType();
    masquer(); // bloquer tout les boutons en supprimant tout les évènements
    fct();
    nbr = 5;
    document.getElementById("enr5").removeEventListener('click', enr5);
    supprimer();
    mettreAjourAffichageEntete(); // afficher les mis à jour appliquées sur l'entete dans la barre de l'entete
    for (let index = 2; index < 7; index++) {
        document.querySelector('#enr' + index).style.backgroundColor = '';
    }
    document.querySelector('#enr5').style.backgroundColor = 'black';


    document.getElementById("enr2").addEventListener('click', enr2);
    document.getElementById("enr4").addEventListener('click', enr4);
    document.getElementById("enr3").addEventListener('click', enr3);
    document.getElementById("enr6").addEventListener('click', enr6);

    if (initialisation) {
        vitesseSauvgarde = vitesse;
        vitesse = 0;
        for (let index = 0; index < 10; index++) {
            setTimeout(function() {
                $('.kolech').fadeOut(0);
                document.querySelector('#sub_arb').value = Math.trunc(Math.random() * 900 + 1);
                inserer();
                if (index == 9)
                    setTimeout(function() {
                        $('.kolech').fadeIn();
                        vitesse = vitesseSauvgarde;
                        setTimeout(() => {
                            demasquer(); // débloquer tout les boutons en ajoutant tout les évènements
                            document.getElementById("code").innerHTML = "";
                            alea = false;
                            instructionText.innerHTML = "";
                        }, 2000);
                    }, 200);
            }, 10 * index);
        }
    }

}
/*************************          DEGRE 6         ***********************************/
function enr6() {
    alea = true;
    document.getElementById('current-action').style.display = "none";
    vitesse = ((220 - Number(slider.value)) / 100);
    changeType();
    masquer(); // bloquer tout les boutons en supprimant tout les évènements
    fct();
    nbr = 6;
    supprimer();
    document.getElementById("enr6").removeEventListener('click', enr6);
    mettreAjourAffichageEntete(); // afficher les mis à jour appliquées sur l'entete dans la barre de l'entete
    for (let index = 2; index < 7; index++) {
        document.querySelector('#enr' + index).style.backgroundColor = '';
    }
    document.querySelector('#enr6').style.backgroundColor = 'black';

    document.getElementById("enr2").addEventListener('click', enr2);
    document.getElementById("enr4").addEventListener('click', enr4);
    document.getElementById("enr5").addEventListener('click', enr5);
    document.getElementById("enr3").addEventListener('click', enr3);

    if (initialisation) {
        vitesseSauvgarde = vitesse;
        vitesse = 0;
        for (let index = 0; index < 10; index++) {
            setTimeout(function() {
                $('.kolech').fadeOut(0);
                document.querySelector('#sub_arb').value = Math.trunc(Math.random() * 900 + 1);
                inserer();
                if (index == 9)
                    setTimeout(function() {
                        $('.kolech').fadeIn();
                        vitesse = vitesseSauvgarde;
                        setTimeout(() => {
                            demasquer(); // débloquer tout les boutons en ajoutant tout les évènements
                            alea = false;
                            document.getElementById("code").innerHTML = "";
                            instructionText.innerHTML = "";
                        }, 2000);
                    }, 200);
            }, 10 * index);
        }
    }
}
/******************************         FIN         *********************************************************************/
/*********************      AJOUTER LES EVENEMENTS DU DEGRE   ************************/
document.getElementById("enr2").addEventListener('click', enr2);
document.getElementById("enr3").addEventListener('click', enr3);
document.getElementById("enr4").addEventListener('click', enr4);
document.getElementById("enr5").addEventListener('click', enr5);
document.getElementById("enr6").addEventListener('click', enr6);
/********************************           FIN                 **************************************************/
/************************       TYPE DE L'INDEX     ****************************************/
clickDense(); // initialisation du type d'index par defaut

function clickDense() { // index dense
    alea = true;
    document.getElementById('current-action').style.display = "none";
    vitesse = ((220 - Number(slider.value)) / 100);
    masquer(); // bloquer tout les boutons en supprimant tout les évènements
    entete = { nbrInsertion: 0, nbrBloc: 0, nbrSuppression: 0 };
    Dense = true;
    document.getElementById("entete-hide").style.bottom = "191.5px";
    document.getElementById("enteteInfo").style.bottom = "191px";
    document.getElementById("title-Dense").className = "visited";
    document.getElementById("title-NonDense").classList.remove("visited");
    document.getElementById("title-Dense").removeEventListener("click", clickDense);
    document.getElementById("title-NonDense").addEventListener("click", clickNonDense);
    document.getElementById("reorganisation").style.display = "none";
    document.getElementById("menu-hide").style.padding = "54.5px 14px 54.5px 15px";
    supprimer();
    document.querySelector('.insert').style.bottom = "111px";
    document.querySelector('.search').style.bottom = "136px";
    document.querySelector('.delete').style.bottom = "88px";
    document.querySelector('.requete').style.bottom = "60px";
    mettreAjourAffichageEntete(); // afficher les mis à jour appliquées sur l'entete dans la barre de l'entete
    if (initialisation)
        setTimeout(function() {
            if (entete.nbrInsertion == 0) {
                vitesseSauvgarde = vitesse;
                vitesse = 0;
                for (let index = 0; index < 10; index++) {
                    setTimeout(function() {
                        $('.kolech').fadeOut(0);
                        document.querySelector('#sub_arb').value = Math.trunc(Math.random() * 900 + 1);
                        inserer();
                        if (index == 9)
                            setTimeout(function() {
                                $('.kolech').fadeIn();
                                vitesse = vitesseSauvgarde;
                                setTimeout(() => {
                                    demasquer(); // débloquer tout les boutons en ajoutant tout les évènements
                                    alea = false;
                                    document.getElementById("code").innerHTML = "";
                                    instructionText.innerHTML = "";
                                }, 3000);
                            }, 200);
                    }, 10 * index);
                }
            }
        }, 20);
    else {
        initialisation = true;
        alea = false;
        demasquer(); // débloquer tout les boutons en ajoutant tout les évènements
    }
    if (document.getElementById("code").style.width != '0px')
        algoHide();
    if (document.getElementById("instruction").style.width != '0px')
        instractionHide();
    document.getElementById("code").innerHTML = "";
    instructionText.innerHTML = "";
}

//_____________________________________________________________________________//

function clickNonDense() { // index non dense
    alea = true;
    document.getElementById('current-action').style.display = "none";
    vitesse = ((220 - Number(slider.value)) / 100);
    masquer(); // bloquer tout les boutons en supprimant tout les évènements
    entete = { nbrInsertion: 0, nbrBloc: 0, nbrSuppression: 0 };
    Dense = false;
    document.getElementById("entete-hide").style.bottom = " 215.5px";
    document.getElementById("enteteInfo").style.bottom = " 215px";
    document.getElementById("title-NonDense").className = "visited";
    document.getElementById("title-Dense").classList.remove("visited");
    document.getElementById("title-NonDense").removeEventListener("click", clickNonDense);
    document.getElementById("title-Dense").addEventListener("click", clickDense);
    document.getElementById("reorganisation").style.display = "";
    document.getElementById("menu-hide").style.padding = "69px 14px 64px 15px";
    supprimer();
    document.querySelector('.insert').style.bottom = "135px";
    document.querySelector('.search').style.bottom = "160px";
    document.querySelector('.requete').style.bottom = "85px";
    document.querySelector('.delete').style.bottom = "110px";
    mettreAjourAffichageEntete(); // afficher les mis à jour appliquées sur l'entete dans la barre de l'entete
    if (entete.nbrInsertion == 0) {
        vitesseSauvgarde = vitesse;
        vitesse = 0;
        for (let index = 0; index < 10; index++) {
            setTimeout(function() {
                $('.kolech').fadeOut(0);
                document.querySelector('#sub_arb').value = Math.trunc(Math.random() * 900 + 1);
                inserer();
                if (index == 9)
                    setTimeout(function() {
                        $('.kolech').fadeIn();
                        vitesse = vitesseSauvgarde;
                        setTimeout(() => {
                            demasquer(); // débloquer tout les boutons en ajoutant tout les évènements
                            document.getElementById("code").innerHTML = "";
                            alea = false;
                            instructionText.innerHTML = "";
                        }, 2000);
                    }, 200);
            }, 10 * index);
        }
    }
    if (document.getElementById("code").style.width != '0px')
        algoHide();
    if (document.getElementById("instruction").style.width != '0px')
        instractionHide();
    document.getElementById("code").innerHTML = "";
    instructionText.innerHTML = "";
}
/*************************      FIN         ************************************************/
/***********************        LES FONCTION DES OPERATIONS         *****************************/
/*********************          INSERTION           ***********************************/
document.getElementById('submit_arb').addEventListener("click", insererFct);

function insererFct() {
    document.getElementById('current-action').style.display = "none";
    vitesse = ((220 - Number(slider.value)) / 100);
    inserer();
    hide();
    if (document.getElementById("code").style.width == '0px')
        algoHide();
    if (document.getElementById("instruction").style.width == '0px')
        instractionHide();
}

/************************     RECHERCHE       ***************************************/
document.getElementById('submit_sea').addEventListener("click", rechercheFct);

function rechercheFct() {
    document.getElementById('current-action').style.display = "none";
    vitesse = ((220 - Number(slider.value)) / 100);
    sup = false;
    recherche();
    hide();
    if (document.getElementById("code").style.width == '0px')
        algoHide();
    if (document.getElementById("instruction").style.width == '0px')
        instractionHide();
}

/**************************     SUPPRESSION             *********************************/
document.getElementById('submit_del').addEventListener("click", supprimerTabFct);

function supprimerTabFct() {
    document.getElementById('current-action').style.display = "none";
    vitesse = ((220 - Number(slider.value)) / 100);
    supprimerTab();
    hide();
    if (document.getElementById("code").style.width == '0px')
        algoHide();
    if (document.getElementById("instruction").style.width == '0px')
        instractionHide();
}

/**************************         REQUETE         *********************************************/
document.getElementById('submit_req').addEventListener("click", lancerRequeteFct);

function lancerRequeteFct() {
    document.getElementById('current-action').style.display = "none";
    vitesse = ((220 - Number(slider.value)) / 100);
    lancerRequete();
    hide();
    if (document.getElementById("code").style.width == '0px')
        algoHide();
    if (document.getElementById("instruction").style.width == '0px')
        instractionHide();
}

/************************           REORGANISATION          ******************************************** */
document.getElementById("reorganisation").addEventListener("click", reorganisationFct);

function reorganisationFct() {
    document.getElementById('current-action').style.display = "none";
    vitesse = ((220 - Number(slider.value)) / 100);
    reorganisation();
    hide();
    if (document.getElementById("code").style.width == '0px')
        algoHide();
    if (document.getElementById("instruction").style.width == '0px')
        instractionHide();
}

/*******************        SUPPRESSION DU FICHIER      *************************** */
document.getElementById("create").addEventListener('click', suppressionFct);

function suppressionFct() {
    vitesse = ((220 - Number(slider.value)) / 100);
    suppression();
    hide();
    if (document.getElementById("code").style.width == '0px')
        algoHide();
    if (document.getElementById("instruction").style.width == '0px')
        instractionHide();
}

/*********************      FIN         ******************************/
function changeType() { // fermer la barre de l'instruction et de l'algorithme lors du changement du type de l'index ou du degre

    vitesse = ((220 - Number(slider.value)) / 100);
    if (document.getElementById("code").style.width != '0px')
        algoHide();
    if (document.getElementById("instruction").style.width != '0px')
        instractionHide();
    document.getElementById("code").innerHTML = "";
    instructionText.innerHTML = "";

}
mettreAjourAffichageEntete(); // afficher les mis à jour appliquées sur l'entete dans la barre de l'entete
/************************        BLOQUER ET DEBLOQUER LES EVENEMENTS        ************************************/
function masquer() { // bloquer tout les boutons en supprimant tout les évènements
    mask = true;
    document.getElementById('submit_arb').removeEventListener("click", insererFct);
    document.getElementById('submit_sea').removeEventListener("click", rechercheFct);
    document.getElementById('submit_del').removeEventListener("click", supprimerTabFct);
    document.getElementById('submit_req').removeEventListener("click", lancerRequeteFct);
    document.getElementById("reorganisation").removeEventListener("click", reorganisationFct);
    document.getElementById("title-Dense").removeEventListener("click", clickDense);
    document.getElementById("title-NonDense").removeEventListener("click", clickNonDense);
    document.getElementById("create").removeEventListener('click', suppressionFct);
    document.getElementById("enr2").removeEventListener('click', enr2);
    document.getElementById("enr3").removeEventListener('click', enr3);
    document.getElementById("enr4").removeEventListener('click', enr4);
    document.getElementById("enr5").removeEventListener('click', enr5);
    document.getElementById("enr6").removeEventListener('click', enr6);
}
//_____________________________________________________________________________//

function demasquer() { // débloquer tout les boutons en ajoutant tout les évènements
    mask = false;
    document.getElementById("create").addEventListener('click', suppressionFct);
    document.getElementById('submit_arb').addEventListener("click", insererFct);
    document.getElementById('submit_sea').addEventListener("click", rechercheFct);
    document.getElementById('submit_del').addEventListener("click", supprimerTabFct);
    document.getElementById('submit_req').addEventListener("click", lancerRequeteFct);
    document.getElementById("reorganisation").addEventListener("click", reorganisationFct);
    if (!Dense) // si le type d'index est non dense
        document.getElementById("title-Dense").addEventListener("click", clickDense);
    else document.getElementById("title-NonDense").addEventListener("click", clickNonDense); // si le type d'index est dense
    if (nbr != 2)
        document.getElementById("enr2").addEventListener('click', enr2);
    if (nbr != 3)
        document.getElementById("enr3").addEventListener('click', enr3);
    if (nbr != 4)
        document.getElementById("enr4").addEventListener('click', enr4);
    if (nbr != 5)
        document.getElementById("enr5").addEventListener('click', enr5);
    if (nbr != 6)
        document.getElementById("enr6").addEventListener('click', enr6);
}
/**************************            FIN                  *************************** */
/**************************         ENTETE DU FICHIER       ************************/
function mettreAjourAffichageEntete() { // afficher les mis à jour appliquées sur l'entete dans la barre de l'entete
    if (!Dense) // si le type d'index est non dense
        document.getElementById('enteteText').innerHTML = "Insertions : " + entete.nbrInsertion + " | Blocs : " + entete.nbrBloc + " | Suppressions : " + entete.nbrSuppression;
    else // si le type d'index est dense
        document.getElementById('enteteText').innerHTML = "Insertions : " + entete.nbrInsertion + "  |  Blocs : " + entete.nbrBloc;
}
/***********************        FIN             *********************************** */

/*************************          INSERTION          ******************************/

function insererFichier(tabFich, cle) { // inserer la cle dans le fichier de données
    if (!Dense) // si le type d'index est non dense
        var enr = new Array(5);
    else // si le type d'index est dense
        var enr = new Array(4);
    var coordonee = tabFich.length;
    enr[2] = cle;
    enr[0] = Math.trunc(coordonee / nbr) + 1;
    enr[1] = (coordonee % nbr) + 1;

    enr[3] = "enr n°" + cle;
    if (!Dense) // si le type d'index est non dense
        enr[4] = 'f';

    tabFich[coordonee] = enr;
    return coordonee;
}
//_____________________________________________________________________________//

function inserer() { // lancer l'opération de l'insertion
    if (entete.nbrInsertion < 18) {
        if (!Dense) { // si le type d'index est non dense
            var cle = Math.trunc(Number(document.querySelector('#sub_arb').value));
            if ((cle > cleMax) || !(cle > 0)) {
                alert('Veuillez insérer un nombre strictement positif inférieur à ' + cleMax);
                return;
            }
            insererCle(cle, fichier);
        } else { // si le type d'index est dense
            var cle = Math.trunc(Number(document.querySelector('#sub_arb').value));
            if ((cle > cleMax) || !(cle > 0)) {
                alert('Veuillez insérer un nombre strictement positif inférieur à ' + cleMax);
                return;
            }
            elementInsererColor = true;
            insererCleDense(cle, fichier);
        }
    } else if (Dense) alert('Le fichier devient tros volumineux\nSi vous voullez insérer un nouvel enregistrement il faut supprimer un du fichier. ');
    else {
        if (entete.nbrSuppression != 0)
            alert('Le fichier devient tros volumineux\nSi vous voullez insérer un nouvel enregistrement il faut faire une réorganisation.');
        else alert('Le fichier devient tros volumineux\nSi vous voullez insérer un nouvel enregistrement il faut supprimer un du fichier et faire une réorganisation. ');

    }

}
//_____________________________________________________________________________//

function insererCleDense(cle, div) { // insertion dans l'index dense
    masquer(); // bloquer tout les boutons en supprimant tout les évènements
    document.getElementById("code").innerHTML = algo_insererDense;
    algorithme(0); // animation de l'algorithme
    var enr = new Array(3);
    insertion = true;
    var obj = rechercherDense(cle);
    if (tab.length == 0) {
        setTimeout(() => {
            instructionText.innerHTML = "Création du fichier de données et de la table index";
            cout(0, 1); // afficher le cout de l'opération 
            algorithme(1); // animation de l'algorithme
            setTimeout(() => {
                algorithme(7); // animation de l'algorithme
            }, 1000 * vitesse);
        }, 500 * vitesse);
    } else setTimeout(() => {
        instructionText.innerHTML = "Recherche de la clé " + cle;
        algorithme(2); // animation de l'algorithme
    }, 1000 * vitesse);
    if (obj.trouve == 0) {
        if (tab.length != 0) {
            setTimeout(() => {
                instructionText.innerHTML = "La valeur " + cle + " n\'existe pas dans l\'index";
                algorithme(3); // animation de l'algorithme
                setTimeout(() => {
                    algorithme(4); // animation de l'algorithme
                    setTimeout(() => {
                        cout(1, 1); // afficher le cout de l'opération 
                        algorithme(5); // animation de l'algorithme
                        setTimeout(() => {
                            algorithme(7); // animation de l'algorithme
                        }, 2000 * vitesse);
                    }, 1000 * vitesse);
                }, 2000 * vitesse);
            }, (obj.temps - 4000) * vitesse);
        }
        var coordonee = insererFichier(tabFichier, cle);
        entete.nbrInsertion = entete.nbrInsertion + 1;
        entete.nbrBloc = Math.trunc(coordonee / nbr) + 1;

        setTimeout(function() {
                if (entete.nbrInsertion != 1)
                    instructionText.innerHTML = "La valeur " + cle + " n\'existe pas dans l\'index. Elle sera insérée dans le fichier";
                enr[0] = cle;
                enr[1] = Math.trunc(coordonee / nbr) + 1;
                enr[2] = coordonee % nbr + 1;
                tab[tab.length] = enr;
                tab.sort(function(a, b) {
                    return a[0] - b[0];
                });
                afficher(obj.indice, div);
                mettreAjourAffichageEntete(); // afficher les mis à jour appliquées sur l'entete dans la barre de l'entete
            },
            (obj.temps - 2000) * vitesse);
        setTimeout(function() {
            insertion = false;
            afficher(obj.indice, div);
            if (entete.nbrInsertion != 1)
                instructionText.innerHTML = "La valeur " + cle + " n\'existe pas dans l\'index. Elle sera insérée dans le fichier";
            demasquer(); // débloquer tout les boutons en ajoutant tout les évènements
        }, ((obj.temps - 2000) * 2 - 1000) * vitesse);
    } else {
        setTimeout(function() {
            algorithme(7); // animation de l'algorithme
            instructionText.innerHTML = "La valeur " + cle + " existe déjà dans le fichier";
            cout(0, 0); // afficher le cout de l'opération 
        }, (obj.temps - 4000) * vitesse);
        setTimeout(function() {
            elementInsererColor = false;
            afficher(-1, div); // affichage du fichier de données + la table index sans animation
            demasquer(); // débloquer tout les boutons en ajoutant tout les évènements
            insertion = false;
        }, ((obj.temps - 2000) * 2) * vitesse);
    }

}
//_____________________________________________________________________________//

function insererCle(cle, div) { // insertion dans l'index non dense
    if (vitesse == 0) insererCleCreation(cle, div);
    else {
        masquer(); // bloquer tout les boutons en supprimant tout les évènements
        rech = false;
        test.fin = false;
        document.getElementById("code").innerHTML = algo_insererNonDense;
        algorithme(0); // animation de l'algorithme
        instructionText.innerHTML = "Insertion de la clé " + cle;
        if (tab.length == 0) {
            setTimeout(() => {
                cout(0, 1); // afficher le cout de l'opération 
                instructionText.innerHTML = "Création du fichier de données et de la table index";
                algorithme(1); // animation de l'algorithme
                setTimeout(() => {
                    algorithme(7); // animation de l'algorithme
                    instructionText.innerHTML = "Fin de l'insertion";
                }, 1000 * vitesse);
            }, 500 * vitesse);
        } else setTimeout(() => {
            algorithme(2); // animation de l'algorithme
            instructionText.innerHTML = "Recherche de la clé n°" + cle;
        }, 1000 * vitesse);
        var obj = rechercher(cle);
        var cas = 0;
        setTimeout(function() {
            if (tabFichier.length != 0) {
                afficher(-1, div); // affichage du fichier de données + la table index sans animation
            }
            if (obj.trouve == 0) {
                if (tab.length == 0) //insertion du 1er elemt   cas 1
                {
                    instructionText.innerHTML = "Création du fichier de données et de la table index";
                    cas = 1;
                    var enr = new Array(3);
                    enr[0] = cle;
                    enr[1] = 1;
                    enr[2] = 1;
                    tab[0] = enr;

                    enr = new Array(5);
                    enr[0] = 1;
                    enr[1] = 1;
                    enr[2] = cle;
                    enr[3] = "enr n°" + cle;
                    enr[4] = 'f';
                    tabFichier[0] = enr;
                    entete.nbrBloc = 1;
                    entete.nbrInsertion = 1;
                    afficher(-1, div); // affichage du fichier de données + la table index sans animation
                    demasquer(); // débloquer tout les boutons en ajoutant tout les évènements
                    mettreAjourAffichageEntete(); // afficher les mis à jour appliquées sur l'entete dans la barre de l'entete

                } else {
                    algorithme(3); // animation de l'algorithme
                    if (entete.nbrInsertion == obj.indiceFichier) // le dernier elemt
                    {
                        if ((obj.indiceFichier % nbr) == 0) //nouveau bloc
                        {
                            instructionText.innerHTML = "Allouer un nouveau bloc et mettre à jour l'index";
                            cas = 1;
                            entete.nbrInsertion = entete.nbrInsertion + 1;
                            entete.nbrBloc = entete.nbrBloc + 1;

                            enr = new Array(5);
                            enr[0] = entete.nbrBloc;
                            enr[1] = 1;
                            enr[2] = cle;
                            enr[3] = "enr n°" + cle;
                            enr[4] = 'f';
                            tabFichier[obj.indiceFichier] = enr;

                            var enr = new Array(3);
                            enr[0] = cle;
                            enr[1] = entete.nbrBloc;
                            enr[2] = 1;
                            tab[entete.nbrBloc - 1] = enr;

                        } else { //dernier element un bloc existant
                            instructionText.innerHTML = "Mettre à jour l'index";
                            cas = 1;
                            entete.nbrInsertion = entete.nbrInsertion + 1;
                            enr = new Array(5);
                            enr[0] = entete.nbrBloc;
                            enr[1] = (obj.indiceFichier) % nbr + 1;
                            enr[2] = cle;
                            enr[3] = "enr n°" + cle;
                            enr[4] = 'f';
                            tabFichier[obj.indiceFichier] = enr;

                            var enr = new Array(3);
                            enr[0] = cle;
                            enr[1] = entete.nbrBloc;
                            enr[2] = tabFichier[obj.indiceFichier][1];
                            tab[entete.nbrBloc - 1] = enr;

                        }
                        afficher(-1, div); // affichage du fichier de données + la table index sans animation
                        for (let i = 1; i < 5; i++) {
                            document.getElementById('celluleFichier' + (tabFichier.length - 1) + "" + i).style.backgroundColor = 'rgb(243, 244, 52)';
                        }
                        document.getElementById('ligne' + (tab.length - 1)).style.backgroundColor = 'rgb(243, 244, 52)';
                        setTimeout(function() {
                            algorithme(4); // animation de l'algorithme
                            setTimeout(() => {
                                algorithme(5); // animation de l'algorithme
                                instructionText.innerHTML = "Mettre à jour l'index";
                            }, 500 * vitesse);
                            for (let index = ((tabFichier[tabFichier.length - 1][0] - 1) * nbr); index < ((tabFichier[tabFichier.length - 1][0] - 1) * nbr) + nbr; index++) {
                                document.getElementById('celluleFichier' + index + "0").style.backgroundColor = 'rgb(82, 188, 105)';
                            }
                            document.getElementById('celluleFichier' + (tabFichier.length - 1) + "1").style.backgroundColor = 'rgb(82, 188, 105)';
                            setTimeout(function() {
                                document.getElementById('cellule' + (tab.length - 1) + "1").style.backgroundColor = 'rgb(82, 188, 105)';
                                document.getElementById('cellule' + (tab.length - 1) + "2").style.backgroundColor = 'rgb(82, 188, 105)';
                                document.getElementById('tableFichier').remove();
                                afficherFichier(tabFichier, fichier);
                                cout(1, 1); // afficher le cout de l'opération 
                                setTimeout(function() {
                                    demasquer(); // débloquer tout les boutons en ajoutant tout les évènements
                                    algorithme(7); // animation de l'algorithme
                                    instructionText.innerHTML = "Fin de l'insertion";
                                    afficher(-1, div); // affichage du fichier de données + la table index sans animation
                                }, 2000 * vitesse);
                            }, 1000 * vitesse);
                        }, 1000 * vitesse);
                        mettreAjourAffichageEntete(); // afficher les mis à jour appliquées sur l'entete dans la barre de l'entete
                    } else // !dernier elemt
                    {
                        var nbrDeBlocParcouru = 0;
                        afficher(-1, div); // affichage du fichier de données + la table index sans animation
                        setTimeout(() => {
                            instructionText.innerHTML = "Faire un décalage de ces enregistrement";
                            algorithme(4); // animation de l'algorithme
                        }, 1000 * vitesse);
                        for (let i = obj.indiceFichier; i < tabFichier.length; i++) {
                            document.getElementById('celluleFichier' + i + "4").style.backgroundColor = 'orange';
                            document.getElementById('celluleFichier' + i + "3").style.backgroundColor = 'orange';
                            document.getElementById('celluleFichier' + i + "2").style.backgroundColor = 'orange';
                            var decalageClassStyle = "decal " + (2 * vitesse) + "s alternate linear";
                            decalageClassStyle = decalageClassStyle.toString();
                            if (vitesse != 0) {
                                document.getElementById('celluleFichier' + i + "3").style.animation = decalageClassStyle;
                                document.getElementById('celluleFichier' + i + "2").style.animation = decalageClassStyle;
                                document.getElementById('celluleFichier' + i + "4").style.animation = decalageClassStyle;
                                setTimeout(() => {
                                    document.getElementById('celluleFichier' + i + "3").style.animation = "";
                                    document.getElementById('celluleFichier' + i + "2").style.animation = "";
                                    document.getElementById('celluleFichier' + i + "4").style.animation = "";
                                }, 2000 * vitesse);

                            }
                        }

                        if (entete.nbrInsertion % nbr == 0) //allouer un nouveau bloc
                        {
                            enr = new Array(5);
                            enr[0] = Math.trunc(entete.nbrInsertion / nbr) + 1;
                            enr[1] = (entete.nbrInsertion) % nbr + 1;
                            enr[2] = tabFichier[entete.nbrInsertion - 1][2];
                            enr[3] = tabFichier[entete.nbrInsertion - 1][3];
                            enr[4] = tabFichier[entete.nbrInsertion - 1][4];
                            tabFichier[entete.nbrInsertion] = enr;
                            entete.nbrBloc = enr[0];

                            //mettre a jour l'index
                            enr = new Array(3);
                            enr[0] = tabFichier[entete.nbrInsertion][2];
                            enr[1] = tabFichier[entete.nbrInsertion][0];
                            enr[2] = tabFichier[entete.nbrInsertion][1];
                            tab[tab.length] = enr;
                            //decalage
                            var i = entete.nbrInsertion - 1;
                            while (i != obj.indiceFichier) {
                                tabFichier[i][2] = tabFichier[i - 1][2];
                                tabFichier[i][3] = tabFichier[i - 1][3];
                                tabFichier[i][4] = tabFichier[i - 1][4];
                                if (tabFichier[i][1] == nbr) //mettre à jour l'index
                                {
                                    tab[tabFichier[i][0] - 1][0] = tabFichier[i][2];
                                    nbrDeBlocParcouru++;
                                }
                                i--;
                            }

                            //ajouter la nouvelle clé
                            tabFichier[i][2] = cle;
                            tabFichier[i][3] = "enr n°" + cle;
                            tabFichier[i][4] = 'f';
                            if (tabFichier[i][1] == nbr) //mettre à jour l'index
                                tab[tabFichier[i][0] - 1][0] = cle;
                            entete.nbrInsertion = entete.nbrInsertion + 1;


                        } else { //il reste de l'espace dans le dernier bloc
                            enr = new Array(5);
                            enr[0] = Math.trunc(entete.nbrInsertion / nbr) + 1;
                            enr[1] = (entete.nbrInsertion) % nbr + 1;
                            enr[2] = tabFichier[entete.nbrInsertion - 1][2];
                            enr[3] = tabFichier[entete.nbrInsertion - 1][3];
                            enr[4] = tabFichier[entete.nbrInsertion - 1][4];
                            tabFichier[entete.nbrInsertion] = enr;
                            entete.nbrBloc = enr[0];
                            //mettre à jour l'index du dernier bloc
                            tab[entete.nbrBloc - 1][2] = enr[1];

                            //decalage
                            var i = entete.nbrInsertion - 1;
                            while (i != obj.indiceFichier) {
                                tabFichier[i][2] = tabFichier[i - 1][2];
                                tabFichier[i][3] = tabFichier[i - 1][3];
                                tabFichier[i][4] = tabFichier[i - 1][4];
                                if (tabFichier[i][1] == nbr) //mettre à jour l'index
                                {
                                    tab[tabFichier[i][0] - 1][0] = tabFichier[i - 1][2];
                                    nbrDeBlocParcouru++;
                                }
                                i--;
                            }
                            //ajouter la nouvelle clé
                            tabFichier[i][2] = cle;
                            tabFichier[i][3] = "enr n°" + cle;
                            tabFichier[i][4] = 'f';
                            if (tabFichier[i][1] == nbr)
                                tab[tabFichier[i][0] - 1][0] = tabFichier[i][2];
                            entete.nbrInsertion = entete.nbrInsertion + 1;

                        }
                        setTimeout(function() {
                            afficher(-1, div); // affichage du fichier de données + la table index sans animation
                            document.getElementById('celluleFichier' + obj.indiceFichier + "2").style.backgroundColor = 'rgb(243, 244, 52)';
                            document.getElementById('celluleFichier' + obj.indiceFichier + "3").style.backgroundColor = 'rgb(243, 244, 52)';
                            document.getElementById('celluleFichier' + obj.indiceFichier + "4").style.backgroundColor = 'rgb(243, 244, 52)';
                            for (let i = obj.indiceFichier + 1; i < tabFichier.length; i++) {
                                document.getElementById('celluleFichier' + i + "4").style.backgroundColor = 'orange';
                                document.getElementById('celluleFichier' + i + "3").style.backgroundColor = 'orange';
                                document.getElementById('celluleFichier' + i + "2").style.backgroundColor = 'orange';
                            }
                            setTimeout(function() {
                                algorithme(5); // animation de l'algorithme
                                instructionText.innerHTML = "Mêtre à jour l'index";
                                afficher(-1, div); // affichage du fichier de données + la table index sans animation
                                document.getElementById('celluleFichier' + (tabFichier.length - 1) + "4").style.backgroundColor = 'rgb(243, 244, 52)';
                                document.getElementById('celluleFichier' + (tabFichier.length - 1) + "3").style.backgroundColor = 'rgb(243, 244, 52)';
                                document.getElementById('celluleFichier' + (tabFichier.length - 1) + "2").style.backgroundColor = 'rgb(243, 244, 52)';
                                document.getElementById('celluleFichier' + (tabFichier.length - 1) + "1").style.backgroundColor = 'rgb(243, 244, 52)';
                                document.getElementById('ligne' + (tab.length - 1)).style.backgroundColor = 'rgb(243, 244, 52)';
                                if ((obj.indiceFichier + 1) % nbr == 0)
                                    nbrDeBlocParcouru++;
                                for (let index = 0; index < nbrDeBlocParcouru; index++) {
                                    setTimeout(function() {
                                        afficher(-1, div); // affichage du fichier de données + la table index sans animation
                                        var l = ((tab[(tab.length - (2 + index))][1] - 1) * nbr + (tab[(tab.length - (2 + index))][2] - 1));
                                        document.getElementById('celluleFichier' + l + "4").style.backgroundColor = 'rgb(243, 244, 52)';
                                        document.getElementById('celluleFichier' + l + "3").style.backgroundColor = 'rgb(243, 244, 52)';
                                        document.getElementById('celluleFichier' + l + "2").style.backgroundColor = 'rgb(243, 244, 52)';
                                        document.getElementById('celluleFichier' + l + "1").style.backgroundColor = 'rgb(243, 244, 52)';
                                        document.getElementById('ligne' + (tab.length - (2 + index))).style.backgroundColor = 'rgb(243, 244, 52)';
                                        if (index == nbrDeBlocParcouru - 1) {
                                            setTimeout(function() {
                                                cout(nbrDeBlocParcouru + 1, nbrDeBlocParcouru + 1); // afficher le cout de l'opération 
                                                afficher(-1, div); // affichage du fichier de données + la table index sans animation
                                                algorithme(7); // animation de l'algorithme
                                                instructionText.innerHTML = "Fin de l'insertion";
                                                demasquer(); // débloquer tout les boutons en ajoutant tout les évènements
                                                mettreAjourAffichageEntete(); // afficher les mis à jour appliquées sur l'entete dans la barre de l'entete
                                            }, 2000 * vitesse);
                                        }
                                    }, (2000 * index + 2000) * vitesse);
                                }
                                if (nbrDeBlocParcouru == 0) {
                                    setTimeout(function() {
                                        cout(nbrDeBlocParcouru + 1, nbrDeBlocParcouru + 1); // afficher le cout de l'opération 
                                        afficher(-1, div); // affichage du fichier de données + la table index sans animation
                                        algorithme(7); // animation de l'algorithme
                                        demasquer(); // débloquer tout les boutons en ajoutant tout les évènements
                                        mettreAjourAffichageEntete(); // afficher les mis à jour appliquées sur l'entete dans la barre de l'entete
                                    }, 2000 * vitesse);
                                }
                            }, 2000 * vitesse);
                        }, 2000 * vitesse + 1);
                    }
                    mettreAjourAffichageEntete(); // afficher les mis à jour appliquées sur l'entete dans la barre de l'entete
                }

            } else { //l'element existe
                if (tabFichier[obj.indiceFichier][4] == 'v') { //l'element etait déjà inséré mais supprimé logiquement
                    instructionText.innerHTML = "La clé " + cle + " a été supprimée logiquement du fichier. On met la case d'effacement à 'f' et on décrémente le nbr de suppression";
                    tabFichier[obj.indiceFichier][4] = 'f';
                    entete.nbrSuppression = entete.nbrSuppression - 1;
                    document.getElementById("celluleFichier" + obj.indiceFichier + "4").style.backgroundColor = "rgb(243, 244, 52)";
                    setTimeout(function() {
                        cout(1, 1); // afficher le cout de l'opération 
                        demasquer(); // débloquer tout les boutons en ajoutant tout les évènements
                        algorithme(7); // animation de l'algorithme
                        mettreAjourAffichageEntete(); // afficher les mis à jour appliquées sur l'entete dans la barre de l'entete
                        afficher(-1, div); // affichage du fichier de données + la table index sans animation
                    }, 2000 * vitesse);
                } else {
                    instructionText.innerHTML = "La clé n°" + cle + " est déjà insérée dans le fichier";
                    setTimeout(function() {
                        cout(1, 0); // afficher le cout de l'opération 
                        demasquer(); // débloquer tout les boutons en ajoutant tout les évènements
                        algorithme(7); // animation de l'algorithme
                        afficher(-1, div); // affichage du fichier de données + la table index sans animation
                    }, 2000 * vitesse);
                }
            }
        }, ((obj.temps - 1000) * 2) * vitesse);
        return ((obj.temps * 2) * vitesse);
    }
}
//_____________________________________________________________________________//

function insererCleCreation(cle, div) { // insertion dans l'index dans la création aléatoire
    document.querySelector('.kolech').style.display = "none";
    masquer(); // bloquer tout les boutons en supprimant tout les évènements
    rech = false;
    test.fin = false;
    document.getElementById("code").innerHTML = algo_insererNonDense;

    var obj = rechercher(cle);
    var cas = 0;

    if (tabFichier.length != 0) {
        afficher(-1, div); // affichage du fichier de données + la table index sans animation
    }
    if (obj.trouve == 0) {
        if (tab.length == 0) //insertion du 1er elemt   cas 1
        {
            cas = 1;
            var enr = new Array(3);
            enr[0] = cle;
            enr[1] = 1;
            enr[2] = 1;
            tab[0] = enr;

            enr = new Array(5);
            enr[0] = 1;
            enr[1] = 1;
            enr[2] = cle;
            enr[3] = "enr n°" + cle;
            enr[4] = 'f';
            tabFichier[0] = enr;
            entete.nbrBloc = 1;
            entete.nbrInsertion = 1;
            afficher(-1, div); // affichage du fichier de données + la table index sans animation
            mettreAjourAffichageEntete(); // afficher les mis à jour appliquées sur l'entete dans la barre de l'entete

        } else {
            algorithme(3); // animation de l'algorithme
            // Mêtre à jour la table index;
            if (entete.nbrInsertion == obj.indiceFichier) // le dernier elemt
            {
                if ((obj.indiceFichier % nbr) == 0) //nouveau bloc
                {
                    cas = 1;
                    entete.nbrInsertion = entete.nbrInsertion + 1;
                    entete.nbrBloc = entete.nbrBloc + 1;

                    enr = new Array(5);
                    enr[0] = entete.nbrBloc;
                    enr[1] = 1;
                    enr[2] = cle;
                    enr[3] = "enr n°" + cle;
                    enr[4] = 'f';
                    tabFichier[obj.indiceFichier] = enr;

                    var enr = new Array(3);
                    enr[0] = cle;
                    enr[1] = entete.nbrBloc;
                    enr[2] = 1;
                    tab[entete.nbrBloc - 1] = enr;

                } else { //dernier element un bloc existant
                    cas = 1;
                    entete.nbrInsertion = entete.nbrInsertion + 1;
                    enr = new Array(5);
                    enr[0] = entete.nbrBloc;
                    enr[1] = (obj.indiceFichier) % nbr + 1;
                    enr[2] = cle;
                    enr[3] = "enr n°" + cle;
                    enr[4] = 'f';
                    tabFichier[obj.indiceFichier] = enr;

                    var enr = new Array(3);
                    enr[0] = cle;
                    enr[1] = entete.nbrBloc;
                    enr[2] = tabFichier[obj.indiceFichier][1];
                    tab[entete.nbrBloc - 1] = enr;

                }
                afficher(-1, div); // affichage du fichier de données + la table index sans animation
                mettreAjourAffichageEntete(); // afficher les mis à jour appliquées sur l'entete dans la barre de l'entete
            } else // !dernier elemt
            {
                var nbrDeBlocParcouru = 0;
                afficher(-1, div); // affichage du fichier de données + la table index sans animation

                if (entete.nbrInsertion % nbr == 0) //allouer un nouveau bloc
                {
                    enr = new Array(5);
                    enr[0] = Math.trunc(entete.nbrInsertion / nbr) + 1;
                    enr[1] = (entete.nbrInsertion) % nbr + 1;
                    enr[2] = tabFichier[entete.nbrInsertion - 1][2];
                    enr[3] = tabFichier[entete.nbrInsertion - 1][3];
                    enr[4] = tabFichier[entete.nbrInsertion - 1][4];
                    tabFichier[entete.nbrInsertion] = enr;
                    entete.nbrBloc = enr[0];

                    //mettre a jour l'index
                    enr = new Array(3);
                    enr[0] = tabFichier[entete.nbrInsertion][2];
                    enr[1] = tabFichier[entete.nbrInsertion][0];
                    enr[2] = tabFichier[entete.nbrInsertion][1];
                    tab[tab.length] = enr;
                    //decalage
                    var i = entete.nbrInsertion - 1;
                    while (i != obj.indiceFichier) {
                        tabFichier[i][2] = tabFichier[i - 1][2];
                        tabFichier[i][3] = tabFichier[i - 1][3];
                        tabFichier[i][4] = tabFichier[i - 1][4];
                        if (tabFichier[i][1] == nbr) //mettre à jour l'index
                        {
                            tab[tabFichier[i][0] - 1][0] = tabFichier[i][2];
                            nbrDeBlocParcouru++;
                        }
                        i--;
                    }

                    //ajouter la nouvelle clé
                    tabFichier[i][2] = cle;
                    tabFichier[i][3] = "enr n°" + cle;
                    tabFichier[i][4] = 'f';
                    if (tabFichier[i][1] == nbr) //mettre à jour l'index
                        tab[tabFichier[i][0] - 1][0] = cle;
                    entete.nbrInsertion = entete.nbrInsertion + 1;


                } else { //il reste de l'espace dans le dernier bloc

                    enr = new Array(5);
                    enr[0] = Math.trunc(entete.nbrInsertion / nbr) + 1;
                    enr[1] = (entete.nbrInsertion) % nbr + 1;
                    enr[2] = tabFichier[entete.nbrInsertion - 1][2];
                    enr[3] = tabFichier[entete.nbrInsertion - 1][3];
                    enr[4] = tabFichier[entete.nbrInsertion - 1][4];
                    tabFichier[entete.nbrInsertion] = enr;
                    entete.nbrBloc = enr[0];
                    //mettre à jour l'index du dernier bloc
                    tab[entete.nbrBloc - 1][2] = enr[1];

                    //decalage
                    var i = entete.nbrInsertion - 1;
                    while (i != obj.indiceFichier) {
                        tabFichier[i][2] = tabFichier[i - 1][2];
                        tabFichier[i][3] = tabFichier[i - 1][3];
                        tabFichier[i][4] = tabFichier[i - 1][4];
                        if (tabFichier[i][1] == nbr) //mettre à jour l'index
                        {
                            tab[tabFichier[i][0] - 1][0] = tabFichier[i - 1][2];
                            nbrDeBlocParcouru++;
                        }
                        i--;
                    }

                    //ajouter la nouvelle clé
                    tabFichier[i][2] = cle;
                    tabFichier[i][3] = "enr n°" + cle;
                    tabFichier[i][4] = 'f';
                    if (tabFichier[i][1] == nbr)
                        tab[tabFichier[i][0] - 1][0] = tabFichier[i][2];
                    entete.nbrInsertion = entete.nbrInsertion + 1;
                }

                afficher(-1, div); // affichage du fichier de données + la table index sans animation

                algorithme(5); // animation de l'algorithme
                afficher(-1, div); // affichage du fichier de données + la table index sans animation

                if ((obj.indiceFichier + 1) % nbr == 0)
                    nbrDeBlocParcouru++;
                for (let index = 0; index < nbrDeBlocParcouru; index++) {

                    var l = ((tab[(tab.length - (2 + index))][1] - 1) * nbr + (tab[(tab.length - (2 + index))][2] - 1));
                }
                if (nbrDeBlocParcouru == 0) {
                    afficher(-1, div); // affichage du fichier de données + la table index sans animation
                    algorithme(7); // animation de l'algorithme
                    mettreAjourAffichageEntete(); // afficher les mis à jour appliquées sur l'entete dans la barre de l'entete
                }

            }
            mettreAjourAffichageEntete(); // afficher les mis à jour appliquées sur l'entete dans la barre de l'entete
        }

    } else { //l'element existe
        if (tabFichier[obj.indiceFichier][4] == 'v') { //l'element etait déjà inséré mais supprimé logiquement
            tabFichier[obj.indiceFichier][4] = 'f';
            entete.nbrSuppression = entete.nbrSuppression - 1;
            algorithme(7); // animation de l'algorithme
            mettreAjourAffichageEntete(); // afficher les mis à jour appliquées sur l'entete dans la barre de l'entete
        } else {
            algorithme(7); // animation de l'algorithme
            afficher(-1, div); // affichage du fichier de données + la table index sans animation

        }
    }
    tabFichier.sort(function(a, b) { // trier le fichier de données
        return a[2] - b[2];
    });
    tab.sort(function(a, b) { // trier la table index
        return a[0] - b[0];
    });

    masquer(); // bloquer tout les boutons en supprimant tout les évènements


    afficher(-1, div); // affichage du fichier de données + la table index sans animation
    setTimeout(() => {

        if (tabFichier.length == 10)
            $('.kolech').fadeIn();
        afficher(-1, div); // affichage du fichier de données + la table index sans animation
        setTimeout(() => {
            afficher(-1, div); // affichage du fichier de données + la table index sans animation
            demasquer(); // débloquer tout les boutons en ajoutant tout les évènements
        }, 1000);
    }, 100);

    return ((obj.temps * 2) * vitesse);
}
/*************************        FIN INSERTION          ******************************/
/*************************          RECHERCHE          ******************************/
/////////////////////////////
function rechercher(val) { // rechercher une valeur dans le fichier pour pouvoir l'inserer (ou le supprimer)
    var obj = { trouve: 0, indiceFichier: 1, indiceIndex: 1, temps: 0 };
    rechercheDico(obj, val);
    return obj;
}
//_____________________________________________________________________________//

function recherche() { // rechercher une clé  (l'opération de la recherche)
    if (!Dense) { // si le type d'index est non dense
        rech = true;
        if (!sup)
            document.getElementById("code").innerHTML = algo_rechercheNonDense;
        algorithme(0); // animation de l'algorithme
        setTimeout(() => {
            if (tab.length == 0) {
                algorithme(1); // animation de l'algorithme
                setTimeout(() => {
                    instructionText.innerHTML = "Le fichier est vide";
                    cout(0, 0); // afficher le cout de l'opération 
                    algorithme(7); // animation de l'algorithme
                }, 1000 * vitesse);
                return;
            } else {
                algorithme(2); // animation de l'algorithme
            }
        }, 1000 * vitesse);
        if (tab.length != 0) {
            masquer(); // bloquer tout les boutons en supprimant tout les évènements
            var div = document.querySelector('.fichier');
            if (sup) {
                var val = Math.trunc(Number(document.querySelector('#sub_del').value));
                instructionText.innerHTML = "Suppression de l'enregistrement n°" + val;
                setTimeout(() => {
                    instructionText.innerHTML = "Recherche de l'enregistrement n°" + val;
                }, 1000);

            } else {
                var val = Math.trunc(Number(document.querySelector('#sub_sea').value));
                instructionText.innerHTML = "Recherche de l'enregistrement n°" + val;
            }

            if ((val > cleMax) || !(val > 0)) {
                alert('Veuillez insérer un nombre strictement positif inférieur à ' + cleMax);
                return;
            }

            var obj = { trouve: 0, indiceFichier: 1, indiceIndex: 1, temps: 0 };
            rechercheDico(obj, val);
            if (obj.trouve == 0) {}
            setTimeout(function() {
                demasquer(); // débloquer tout les boutons en ajoutant tout les évènements
                test.fin = true;
                afficher(-1, div); // affichage du fichier de données + la table index sans animation
                algorithme(7);
                if (!sup)
                    cout(1, 0); // afficher le cout de l'opération 
                if (obj.trouve != 0) {
                    if (sup) {
                        instructionText.innerHTML = "L'enregistrement n°" + val + " a été bien supprimé";
                        sup = false;
                    } else {
                        if (tabFichier[obj.indiceFichier][4] == "f") instructionText.innerHTML = "L'enregistrement n°" + val + " est trouvé";
                        else instructionText.innerHTML = "L'enregistrement n°" + val + " est supprimé logiquement";
                    }
                } else instructionText.innerHTML = "L'enregistrement n°" + val + " n'existe pas";

                rech = false;
            }, (obj.temps * 2) * vitesse);
            return obj;
        }
    } else rechercheDense(); // si le type d'index est dense
}
//_____________________________________________________________________________//

function rechercheDico(obj, val) { // recherche dicothomique dans l'index
    if (tab.length == 0) {
        obj.trouve = 0;
        test.fin = true;
    } else {
        test.fin = false;
        var superieur, inf, trouve, indice, temps;
        var stackRed = [];
        var stackWhite = [];
        var ired = 0;
        inf = 0;
        superieur = tab.length - 1;
        trouve = 0;
        while ((inf <= superieur) && (trouve == 0)) {
            indice = Math.trunc((superieur + inf) / 2);
            var diff = val - tab[indice][0];
            stackRed.push(indice);
            stackWhite.push(indice);
            ired++;
            temps = 1000 * ired;
            setTimeout(function() {
                if (stackRed.length != stackWhite.length)
                    document.getElementById('cel' + stackWhite.shift()).style.backgroundColor = "rgb(226, 136, 136)";
                document.getElementById('cel' + stackRed.shift()).style.backgroundColor = "rgb(255, 58, 3)";

            }, temps * vitesse);
            setTimeout(function() {
                if (stackWhite.length != 0) {
                    depiler = document.getElementById('cel' + stackWhite.shift());
                    if (depiler != null)
                        depiler.style.backgroundColor = "rgb(226, 136, 136)";
                }
            }, 2000 * ired * vitesse);
            if (val == tab[indice][0]) {
                var c = indice;
                trouve = 1;
                setTimeout(function() {
                    document.getElementById('cel' + c).style.backgroundColor = "rgb(82, 188, 105)";
                    setTimeout(function() {
                        document.getElementById('cellule' + c + "1").style.backgroundColor = "rgb(243, 244, 52)";
                        if (rech) {
                            algorithme(3); // animation de l'algorithme
                            setTimeout(function() {
                                algorithme(4); // animation de l'algorithme
                            }, 1000 * vitesse);
                        }
                        for (let l = ((tab[c][1] - 1) * nbr); l < ((tab[c][1] - 1) * nbr) + nbr; l++) {
                            document.getElementById('celluleFichier' + l + "0").style.backgroundColor = "rgb(243, 244, 52)";
                        }
                    }, 1000 * vitesse);
                }, (temps + 1) * vitesse);

            }
            if (diff < 0) {
                superieur = indice - 1;
            }
            if (diff > 0) {
                inf = indice + 1;
            }
        }
        if (trouve == 0) {
            indice = inf;
            if (indice >= tab.length)
                indice--;
            obj.indiceIndex = indice;
            setTimeout(function() {
                if (rech) {
                    algorithme(3); // animation de l'algorithme
                    setTimeout(function() {
                        algorithme(4); // animation de l'algorithme
                    }, 1000 * vitesse);
                }
                document.getElementById('cellule' + obj.indiceIndex + "1").style.backgroundColor = "rgb(243, 244, 52)";
                for (let l = 0; l < nbr; l++) {
                    document.getElementById('celluleFichier' + (l + (tab[obj.indiceIndex][1] - 1) * nbr) + "0").style.backgroundColor = "rgb(243, 244, 52)";
                }
            }, (1000 * ired + 1000) * vitesse);

        }
        trouve = 0;
        //recherche dico dans le fichier de données
        ired++;
        // indice--;
        inf = ((tab[indice][1] - 1) * nbr); //l'indice du debut de la recherche
        superieur = ((tab[indice][1] - 1) * nbr + (tab[indice][2] - 1)); //l'indice de la fin de la recherche
        while ((inf <= superieur) && (trouve == 0)) {
            indice = Math.trunc((superieur + inf) / 2);
            var diff = val - tabFichier[indice][2];
            stackRed.push(indice);
            stackWhite.push(indice);
            ired++;
            temps = 1000 * ired;
            setTimeout(function() {
                if (stackRed.length != stackWhite.length)
                    document.getElementById('celluleFichier' + stackWhite.shift() + "2").style.backgroundColor = "rgb(226, 136, 136)";
                document.getElementById('celluleFichier' + stackRed.shift() + "2").style.backgroundColor = "rgb(255, 58, 3)";

            }, temps * vitesse);
            if (diff == 0) {
                trouve = 1;

                setTimeout(function() {
                    document.getElementById('celluleFichier' + indice + "4").style.backgroundColor = "rgb(82, 188, 105)";
                    document.getElementById('celluleFichier' + indice + "3").style.backgroundColor = "rgb(82, 188, 105)";
                    document.getElementById('celluleFichier' + indice + "2").style.backgroundColor = "rgb(82, 188, 105)";
                    if (rech) {
                        setTimeout(function() {
                            if (sup) {
                                algorithme(5); // animation de l'algorithme
                                // sup = false;
                                if (tabFichier[indice][4] == 'f')
                                    instructionText.innerHTML = "Mettre le bit d'effacement à vrai et incrémenter le nombre de suppressions";
                                else instructionText.innerHTML = "L'enregistrement n°" + val + " est déjà supprimé logiquement";
                            } else {
                                if (tabFichier[indice][4] == 'f') {
                                    instructionText.innerHTML = "L'enregistrement n°" + val + " | Bloc n°" + tabFichier[indice][0] + " | Indice : " + tabFichier[indice][1];
                                    algorithme(5); // animation de l'algorithme
                                } else {
                                    document.getElementById("celluleFichier" + indice + "4").style.backgroundColor = "rgb(255, 58, 3)";
                                    instructionText.innerHTML = "L'enregistrement n°" + val + " est supprimé logiquement";
                                    algorithme(7);
                                }
                            }


                        }, 100 * vitesse);
                    }

                }, 1000 * ired * vitesse);
            }
            if (diff < 0) {
                superieur = indice - 1;
            }
            if (diff > 0) {
                inf = indice + 1;
            }
        }
        if (trouve == 0) {
            indice = inf;
            if (indice < tabFichier.length)
                if (val - tabFichier[indice][2] > 0) {
                    indice++;
                }
        }
        obj.indiceFichier = indice;

        obj.trouve = trouve;
        obj.temps = temps;
        test.fin = true;

    }

}
//_____________________________________________________________________________//

function rechercheDense() { // rechercher une clé  (l'opération de la recherche) dans l'index dense
    rech = true;
    document.getElementById("code").innerHTML = algo_rechercheDense;
    algorithme(0); // animation de l'algorithme
    var div = document.querySelector('.fichier');
    var val = Math.trunc(Number(document.querySelector('#sub_sea').value));
    if ((val > cleMax) || !(val > 0)) {
        alert('Veuillez insérer un nombre strictement positif inférieur à ' + cleMax);
        return;
    }
    instructionText.innerHTML = "Recherche de l'enregistrement n°" + val;
    setTimeout(() => {
        algorithme(1); // animation de l'algorithme
        if (tab.length == 0) {
            setTimeout(() => {
                cout(0, 0); // afficher le cout de l'opération 
                algorithme(7);
            }, 1000 * vitesse);
            return;
        } else {
            setTimeout(() => {
                algorithme(2); // animation de l'algorithme
            }, 500 * vitesse);
        }
    }, 1000 * vitesse);
    var obj = { trouve: 0, indice: 1, temps: 0 };
    if (tab.length != 0) {
        masquer(); // bloquer tout les boutons en supprimant tout les évènements
        rechercheDicoDense(obj, val);
        setTimeout(function() {
            afficher(-1, div); // affichage du fichier de données + la table index sans animation
            rech = false;
            if (obj.trouve == 0) {
                cout(0, 0); // afficher le cout de l'opération 
                instructionText.innerHTML = "L'enregistrement n°" + val + " n'existe pas";
            } else {
                cout(1, 0); // afficher le cout de l'opération 
                instructionText.innerHTML = "L'enregistrement n°" + val + " est trouvé";
            }
            demasquer(); // débloquer tout les boutons en ajoutant tout les évènements
            algorithme(7);
        }, (obj.temps + 2000) * vitesse);

    } else {
        setTimeout(function() {
            instructionText.innerHTML = "Le fichier est vide";
            cout(0, 0); // afficher le cout de l'opération 
        }, (obj.temps + 2000) * vitesse);
    }
    return obj;
}
//_____________________________________________________________________________//

function rechercherDense(val) { // rechercher une valeur dans le fichier dense pour pouvoir l'inserer (ou le supprimer)
    var obj = { trouve: 0, indice: 1, temps: 0 };
    rechercheDicoDense(obj, val);
    return obj;
}
//_____________________________________________________________________________//

function rechercheDicoDense(obj, val) { // recherche dicothomique dans l'index dense
    if (tab.length == 0) {
        obj.trouve = 0;
        test.fin = true;
    } else {
        test.fin = false;
        var superieur, inf, trouve, indice, temps;
        var stackRed = [];
        var stackWhite = [];
        var ired = 0;
        inf = 0;
        superieur = tab.length - 1;
        trouve = 0;
        while ((inf <= superieur) && (trouve == 0)) {
            indice = Math.trunc((superieur + inf) / 2);
            var diff = val - tab[indice][0];
            stackRed.push(indice);
            stackWhite.push(indice);
            ired++;
            temps = 1000 * ired;
            setTimeout(function() {
                if (stackRed.length != stackWhite.length) {
                    var depiler = stackWhite.shift();
                    if (document.getElementById('cel' + depiler) != null)
                        document.getElementById('cel' + depiler).style.backgroundColor = "rgb(226, 136, 136)";
                }
                var depiler1 = stackRed.shift();
                if (document.getElementById('cel' + depiler1) != null)
                    document.getElementById('cel' + depiler1).style.backgroundColor = "rgb(255, 58, 3)";

            }, temps * vitesse);
            setTimeout(function() {
                if (stackWhite.length != 0) {
                    var depiler = stackWhite.shift();
                    if (document.getElementById('cel' + depiler) != null)
                        document.getElementById('cel' + depiler).style.backgroundColor = "rgb(226, 136, 136)";
                }
            }, 2500 * ired * vitesse);
            if (diff == 0) {
                trouve = 1;

                var l = ((tab[indice][1] - 1) * nbr + (tab[indice][2] - 1));

                setTimeout(function() {
                    if (rech) algorithme(3); // animation de l'algorithme
                    if (document.getElementById('cel' + indice) != null)
                        document.getElementById('cel' + indice).style.backgroundColor = "rgb(82, 188, 105)";
                    setTimeout(function() {
                        if ((l < tabFichier.length) && !(insertion)) {
                            if (rech) algorithme(4); // animation de l'algorithme
                            document.getElementById("cellule" + indice + "" + 1).style.backgroundColor = "rgb(243, 244, 52)";
                            for (let index = (tab[indice][1] - 1) * nbr; index < (tab[indice][1] - 1) * nbr + nbr; index++) {
                                document.getElementById("celluleFichier" + index + "" + 0).style.backgroundColor = "rgb(243, 244, 52)";
                            }
                        }
                        setTimeout(function() {
                            if ((l < tabFichier.length) && !(insertion)) {
                                if (rech) algorithme(5); // animation de l'algorithme
                                document.getElementById("cellule" + indice + "" + 2).style.backgroundColor = "rgb(82, 188, 105)";
                                document.getElementById('ligneFichier' + l).style.backgroundColor = "rgb(82, 188, 105)";
                                document.getElementById('celluleFichier' + l + "0").style.backgroundColor = "rgb(243, 244, 52)";
                            }
                        }, 2000 * vitesse);
                    }, 2000 * vitesse);


                }, 1000 * ired * vitesse);
            }
            if (diff < 0) {
                superieur = indice - 1;
            }
            if (diff > 0) {
                inf = indice + 1;
            }
        }
        if (trouve == 0) {
            indice = inf;
        }
        obj.indice = indice + 1;
        obj.trouve = trouve;
        obj.temps = temps + 4000;
    }
    test.fin = true;
}

/*************************         FIN RECHERCHE          ******************************/
/*************************          SUPPRESSION          ******************************/
function supprimer() { // supprimer tout le fichier
    if (libererFichier) document.getElementById("code").innerHTML = algo_SupprimerFichier;
    instructionText.innerHTML = "Supprimer le fichier de données et la table index  et initialiser l'entete du fichier";
    if (tab.length == 0)
        return;
    if (!Dense) { // si le type d'index est non dense
        entete = { nbrInsertion: 0, nbrBloc: 0, nbrSuppression: 0 };
        mettreAjourAffichageEntete(); // afficher les mis à jour appliquées sur l'entete dans la barre de l'entete
        if (tab.length != 0) {
            supprimerIndex();
            document.getElementById('tableFichier').remove();
            tabFichier = new Array();
        }
        bool = false;
    } else supprimerDense(); // si le type d'index est dense
}
//_____________________________________________________________________________//

function supprimerDense() { // supprimer le fichier index dense
    entete = { nbrInsertion: 0, nbrBloc: 0 };
    mettreAjourAffichageEntete(); // afficher les mis à jour appliquées sur l'entete dans la barre de l'entete
    cout(0, 0); // afficher le cout de l'opération 
    supprimerIndex();
    if (tabFichier.length != 0)
        document.getElementById('tableFichier').remove();
    tabFichier = new Array();
    bool = false;
}
//_____________________________________________________________________________//

function supprimerIndex() { //supprimer la table index
    if (tab.length != 0)
        document.querySelector('#tab').remove();
    tab = new Array();
}
//_____________________________________________________________________________//

function supprimerTab() { //supprimer un element du fichier (non dense)
    if (!Dense) { // si le type d'index est non dense
        document.getElementById("code").innerHTML = algo_supprimerNonDense;
        rech = true;
        sup = true;
        obj = recherche();
        var div = document.querySelector('.fichier');
        if (tab.length != 0) {
            if ((obj.trouve != 0) && (tabFichier[obj.indiceFichier][4] == 'f')) {
                setTimeout(function() {
                    tabFichier[obj.indiceFichier][4] = 'v';
                    entete.nbrSuppression = entete.nbrSuppression + 1;
                    afficher(-1, div); // affichage du fichier de données + la table index sans animation
                    cout(1, 1); // afficher le cout de l'opération 
                    document.getElementById("celluleFichier" + obj.indiceFichier + "" + 4).style.backgroundColor = "rgb(243, 244, 52)";
                    setTimeout(function() {
                        afficher(-1, div); // affichage du fichier de données + la table index sans animation
                        rech = false;
                        algorithme(7);
                        if (!reorg)
                            if (entete.nbrSuppression >= (entete.nbrInsertion / 2))
                                alert('Le taux de suppression devient élevé.\nIl vaut mieux faire une réorganisation du fichier.');
                    }, 2000 * vitesse);
                    mettreAjourAffichageEntete(); // afficher les mis à jour appliquées sur l'entete dans la barre de l'entete
                }, (obj.temps + 2000) * vitesse);
            } else if (tabFichier[obj.indiceFichier][4] == 'v') setTimeout(function() {
                cout(1, 0); // afficher le cout de l'opération 
            }, (obj.temps + 2000) * vitesse);
        }
    } else supprimerTabDense(); // si le type d'index est dense
}
//_____________________________________________________________________________//
function supprimerTabDense() { //supprimer un element du fichier (dense)
    rech = false;
    document.getElementById("code").innerHTML = algo_supprimerDense;
    algorithme(0); // animation de l'algorithme
    var obj = { trouve: 0, indice: 1, temps: 0 };
    var val = Math.trunc(Number(document.querySelector('#sub_del').value));
    if ((val > cleMax) || !(val > 0)) {
        alert('Veuillez insérer un nombre strictement positif inférieur à ' + cleMax);
        return;
    }
    instructionText.innerHTML = "Supprimer la valeur " + val;
    if ((tab.length == 0) /*|| (Dense)*/ ) {
        setTimeout(function() {
            algorithme(1); // animation de l'algorithme
            setTimeout(() => {
                instructionText.innerHTML = "Le fichier est vide";
                cout(0, 0); // afficher le cout de l'opération 
                algorithme(7);
                setTimeout(() => {
                    algorithme(-7);
                }, 1000 * vitesse);
            }, 1000 * vitesse);

        }, 100 * vitesse);
        return;
    }
    setTimeout(() => {
        instructionText.innerHTML = "Recherche de la clé " + val;
        algorithme(2); // animation de l'algorithme
    }, 1000 * vitesse);
    if (tab.length != 0) {
        masquer(); // bloquer tout les boutons en supprimant tout les évènements
        rechercheDicoDense(obj, val);
        var div = document.querySelector('.fichier');
        if (obj.trouve != 0) {
            entete.nbrInsertion = entete.nbrInsertion - 1;
            entete.nbrBloc = Math.trunc((entete.nbrInsertion - 1) / nbr) + 1;
            var l = ((tab[obj.indice - 1][1] - 1) * nbr + (tab[obj.indice - 1][2] - 1));
            if ((tabFichier.length > 1) && (tabFichier.length - 1 > l)) { //!(dernier element) && !(le seul)
                setTimeout(function() {
                    algorithme(3); // animation de l'algorithme
                    instructionText.innerHTML = "On remplace l\'enregistrement n°" + val + " par le dernier du fichier de données et on le supprime de l'index";
                    setTimeout(function() {
                        document.getElementById('celluleFichier' + (tabFichier.length - 1) + "2").style.backgroundColor = 'rgb(243, 244, 52)';
                        document.getElementById('celluleFichier' + (tabFichier.length - 1) + "3").style.backgroundColor = 'rgb(243, 244, 52)';
                        algorithme(4); // animation de l'algorithme
                        tabFichier[l][2] = tabFichier[tabFichier.length - 1][2];
                        tabFichier[l][3] = tabFichier[tabFichier.length - 1][3];
                        tab.splice(obj.indice - 1, 1);
                        tabFichier.splice(tabFichier.length - 1, 1);
                        setTimeout(function() {
                            afficher(-1, div); // affichage du fichier de données + la table index sans animation
                            document.getElementById('celluleFichier' + l + "2").style.backgroundColor = 'rgb(243, 244, 52)';
                            document.getElementById('celluleFichier' + l + "3").style.backgroundColor = 'rgb(243, 244, 52)';
                            //mettre à jour l'index
                            setTimeout(function() {
                                instructionText.innerHTML = "Mettre à jour l'index et l'entete du fichier";
                                algorithme(5); // animation de l'algorithme
                                rechercheDicoDense(obj, tabFichier[l][2]);
                                setTimeout(function() {
                                    afficher(-1, div); // affichage du fichier de données + la table index sans animation
                                    document.getElementById('celluleFichier' + l + "2").style.backgroundColor = 'rgb(243, 244, 52)';
                                    document.getElementById('celluleFichier' + l + "3").style.backgroundColor = 'rgb(243, 244, 52)';
                                    document.getElementById('ligne' + (obj.indice - 1)).style.backgroundColor = 'rgb(243, 244, 52)';
                                    setTimeout(function() {
                                        tab[obj.indice - 1][1] = tabFichier[l][0];
                                        tab[obj.indice - 1][2] = tabFichier[l][1];

                                        for (let index = (tabFichier[l][0] - 1) * nbr; index < (tabFichier[l][0] - 1) * nbr + nbr; index++) {
                                            document.getElementById('celluleFichier' + index + "" + 0).style.backgroundColor = 'rgb(82, 188, 105)';
                                        }
                                        document.getElementById('celluleFichier' + l + "" + 1).style.backgroundColor = 'rgb(82, 188, 105)';
                                        setTimeout(function() {
                                            afficher(-1, div); // affichage du fichier de données + la table index sans animation
                                            mettreAjourAffichageEntete(); // afficher les mis à jour appliquées sur l'entete dans la barre de l'entete
                                            cout(2, 1); // afficher le cout de l'opération 
                                            document.getElementById('ligne' + (obj.indice - 1)).style.backgroundColor = 'rgb(82, 188, 105)';
                                            document.getElementById('cel' + (obj.indice - 1)).style.backgroundColor = 'white';
                                            setTimeout(function() {
                                                afficher(-1, div); // affichage du fichier de données + la table index sans animation
                                                algorithme(7); // animation de l'algorithme
                                                instructionText.innerHTML = "L'enregistrement n°" + val + " est bien supprimée du fichier";
                                                demasquer(); // débloquer tout les boutons en ajoutant tout les évènements
                                            }, 3000 * vitesse);

                                        }, 1500 * vitesse);
                                    }, 2000 * vitesse);
                                }, (obj.temps - 1000) * vitesse);
                            }, 1500 * vitesse);
                        }, 2000 * vitesse);
                    }, 1000 * vitesse);
                }, (obj.temps + 2000) * vitesse);

            } else if ((tabFichier.length > 1) && (tabFichier.length - 1 == l)) { //(dernier element) && !(le seul)
                setTimeout(function() {
                    cout(1, 1); // afficher le cout de l'opération 
                    algorithme(5); // animation de l'algorithme
                }, obj.temps * vitesse);
                setTimeout(function() {
                    tab.splice(obj.indice - 1, 1);
                    tabFichier.splice(l, 1);
                    afficher(-1, div); // affichage du fichier de données + la table index sans animation
                    mettreAjourAffichageEntete(); // afficher les mis à jour appliquées sur l'entete dans la barre de l'entete
                    demasquer(); // débloquer tout les boutons en ajoutant tout les évènements
                    algorithme(7); // animation de l'algorithme
                }, (obj.temps + 2000) * vitesse);

            } else setTimeout(function() {
                instructionText.innerHTML = "Le clé " + val + " est le seul enregistrement donc on supprime le fichier";
                supprimerDense();
                demasquer(); // débloquer tout les boutons en ajoutant tout les évènements
                algorithme(7); // animation de l'algorithme
            }, 2000 * vitesse);
        } else {
            setTimeout(function() {
                instructionText.innerHTML = "La clé " + val + " n\'existe pas dans le fichier de données ";
                demasquer(); // débloquer tout les boutons en ajoutant tout les évènements
                cout(0, 0); // afficher le cout de l'opération 
                algorithme(7); // animation de l'algorithme
                setTimeout(function() {
                    afficher(-1, div); // affichage du fichier de données + la table index sans animation
                }, 4000 * vitesse);
            }, (obj.temps - 2000) * vitesse);
        }
    }
}
/*************************         FIN SUPPRESSION          ******************************/
/*************************          REQUETE          ******************************/
function lancerRequete() { //lancer l'opération de requete
    if (!Dense) { // si le type d'index est non dense
        var nbrBloc = 1;
        document.getElementById("code").innerHTML = algo_requeteNonDense;
        algorithme(0); // animation de l'algorithme
        setTimeout(() => {
            if (tab.length == 0) {
                algorithme(1); // animation de l'algorithme
                setTimeout(() => {
                    cout(0, 0); // afficher le cout de l'opération 
                    algorithme(7); // animation de l'algorithme
                }, 1000 * vitesse);
                return;
            } else {
                algorithme(2); // animation de l'algorithme
            }
        }, 1000 * vitesse);
        if (tab.length != 0) {
            var max = Math.trunc(Number(document.getElementById('sub_Max').value));
            var min = Math.trunc(Number(document.getElementById('sub_Min').value));
            if ((min > cleMax) || !(min > 0) || (max > cleMax) || !(max > 0)) {
                alert('Veuillez insérer des nombres strictement positifs inférieurs à ' + cleMax);
                return;
            }
            var inter = min - max;
            if (inter > 0) {
                inter = min;
                min = max;
                max = inter;
            }
            instructionText.innerHTML = "Requête à interval [" + min + "," + max + "]";
            masquer(); // bloquer tout les boutons en supprimant tout les évènements
            setTimeout(function() {
                //contrôle           
                resultatRequeteFichier = new Array();
                var obj = { trouve: 0, indice: 0, temps: 0 };
                rechercheDico(obj, min);
                instructionText.innerHTML = "Recherche du Min (" + min + ") dans le fichier de données.";
                setTimeout(function() {
                    algorithme(3); // animation de l'algorithme
                    afficher(-1, fichier);
                    if (!(obj.indiceFichier < tabFichier.length) && (obj.trouve == 0)) {
                        instructionText.innerHTML = "Aucun resultat n\'est trouvé dans le fichier pour cette requête .";
                        cout(1, 0); // afficher le cout de l'opération 
                        algorithme(7); // animation de l'algorithme
                        setTimeout(function() { //finRequete
                            demasquer(); // débloquer tout les boutons en ajoutant tout les évènements
                            afficher(-1, fichier);
                        }, 3000);
                    } else {
                        var indiceDeDebut = obj.indiceFichier;
                        inter = 1000;
                        var stack = [];
                        var stacki = [];
                        var i = 0;
                        var condition = true;
                        if (indiceDeDebut < tabFichier.length)
                            while ((tabFichier[indiceDeDebut][2] - max <= 0) && (condition) && (indiceDeDebut < tabFichier.length)) {
                                instructionText.innerHTML = "On parcourt le fichier de données à partir de l\'indice du Min jusqu'à trouver une clé supérieur au Max(" + max + ") ";
                                stacki.push(i++);
                                stack.push(indiceDeDebut);
                                setTimeout(function() {
                                    algorithme(3); // animation de l'algorithme
                                    setTimeout(() => {
                                        algorithme(4); // animation de l'algorithme
                                        if (tabFichier[parcours][4] == 'f') setTimeout(() => {
                                            algorithme(5); // animation de l'algorithme
                                        }, 500 * vitesse);
                                    }, 500 * vitesse);
                                    var parcours = stack.shift();
                                    if (tabFichier[parcours][4] == 'f') {
                                        resultatRequeteFichier[stacki.shift()] = tabFichier[parcours];
                                        afficherFichierReorganisation(resultatRequeteFichier, document.querySelector('.nouveauFichier'), 'tableauRequete');
                                    }
                                    // On parcourt le fichier de données à partir de l\'indice du Min jusqu'à trouver une clé supérieur au Max(" + max + ") ";
                                    document.getElementById('celluleFichier' + parcours + "4").style.backgroundColor = 'rgb(82, 188, 105)';
                                    document.getElementById('celluleFichier' + parcours + "3").style.backgroundColor = 'rgb(82, 188, 105)';
                                    document.getElementById('celluleFichier' + parcours + "2").style.backgroundColor = 'rgb(82, 188, 105)';
                                    if ((tabFichier[parcours][1] == 1) && (resultatRequeteFichier.length != 1)) {
                                        nbrBloc++;
                                    }
                                    if (tabFichier[parcours][4] == 'v')
                                        document.getElementById('celluleFichier' + parcours + "4").style.backgroundColor = "rgb(255, 58, 3)";
                                }, inter * vitesse);
                                indiceDeDebut++;

                                if (!(indiceDeDebut < tabFichier.length)) {
                                    indiceDeDebut--;
                                    condition = false;
                                }

                                inter += 2000;
                            }
                        if ((tabFichier[indiceDeDebut][1] == 1) && (tabFichier[indiceDeDebut][2] - max > 0)) {
                            nbrBloc++;
                        }
                        if ((condition))
                            setTimeout(function() {
                                // On parcourt le fichier de données à partir de l\'indice du Min jusqu'à trouver une clé supérieur au Max(" + max + ") ";
                                document.getElementById('celluleFichier' + indiceDeDebut + "4").style.backgroundColor = 'rgb(243, 244, 52)';
                                document.getElementById('celluleFichier' + indiceDeDebut + "3").style.backgroundColor = 'rgb(243, 244, 52)';
                                document.getElementById('celluleFichier' + indiceDeDebut + "2").style.backgroundColor = "rgb(255, 58, 3)";
                            }, inter * vitesse);
                        setTimeout(function() {
                            if ((resultatRequeteFichier.length > 0)) // affichage du resultat et la fin de la requête
                                setTimeout(function() {
                                instructionText.innerHTML = "Voici le resultat de la requête";
                                afficherFichierReorganisation(resultatRequeteFichier, document.querySelector('.nouveauFichier'), 'tableauRequete');
                                setTimeout(function() { //finRequete
                                    demasquer(); // débloquer tout les boutons en ajoutant tout les évènements
                                    cout(nbrBloc, 0); // afficher le cout de l'opération 
                                    afficher(-1, fichier);
                                    algorithme(7); // animation de l'algorithme
                                    document.getElementById('tableauRequete').remove();
                                }, 5000);
                            }, 1000 * vitesse);

                            else {
                                instructionText.innerHTML = "Aucun resultat n\'est trouvé dans le fichier pour cette requête .";
                                demasquer(); // débloquer tout les boutons en ajoutant tout les évènements
                                cout(1, 0); // afficher le cout de l'opération 
                                afficher(-1, fichier);
                                algorithme(7); // animation de l'algorithme
                            }
                        }, inter * vitesse);
                    }
                }, (obj.temps + 2000) * vitesse);
            }, 1000 * vitesse);
        }
    } else lancerRequeteDense(); // si le type d'index est dense
}
//_____________________________________________________________________________//

function lancerRequeteDense() { // //lancer l'opération de requete de l'index dense
    rech = false;
    document.getElementById("code").innerHTML = algo_requeteDense;
    algorithme(0); // animation de l'algorithme
    var max = Math.trunc(Number(document.getElementById('sub_Max').value));
    var min = Math.trunc(Number(document.getElementById('sub_Min').value));
    //contrôle
    if ((min > cleMax) || !(min > 0) || (max > cleMax) || !(max > 0)) {
        alert('Veuillez insérer des nombres strictement positifs inférieurs à ' + cleMax);
        return;
    }
    var inter = min - max;
    if (inter > 0) {
        inter = min;
        min = max;
        max = inter;
    }

    instructionText.innerHTML = "Requête à interval [" + min + "," + max + "]";
    setTimeout(() => {
        if (tab.length == 0) {
            algorithme(1); // animation de l'algorithme
            setTimeout(() => {
                instructionText.innerHTML = "Le fichier est vide. Pas de resultat";
                cout(0, 0); // afficher le cout de l'opération 
                algorithme(7); // animation de l'algorithme
            }, 1000 * vitesse);
            return;
        } else {
            instructionText.innerHTML = "Recherche du Min (" + min + ") dans la table d\'index.";
            algorithme(2); // animation de l'algorithme
        }
    }, 1000 * vitesse);
    if (tab.length != 0) {
        resultatRequeteIndex = new Array();

        var obj = { trouve: 0, indice: 0, temps: 0 };
        insertion = true;
        masquer(); // bloquer tout les boutons en supprimant tout les évènements
        rechercheDicoDense(obj, min);
        setTimeout(function() {
            afficher(-1, fichier);
            if ((obj.indice > tab.length) && (obj.trouve == 0)) {
                instructionText.innerHTML = "Aucun résultat pour cette requête";
                cout(0, 0); // afficher le cout de l'opération 
                algorithme(3); // animation de l'algorithme
                setTimeout(() => {
                    algorithme(7); // animation de l'algorithme
                }, 2000);
                setTimeout(function() { //finRequete
                    insertion = false;
                    demasquer(); // débloquer tout les boutons en ajoutant tout les évènements
                    afficher(-1, fichier);
                }, 5000 * vitesse);
            } else {
                var indiceDeDebut = obj.indice - 1;
                if (tab[obj.indice - 1][0] < min) {
                    indiceDeDebut = obj.indice;
                }
                inter = 1000;
                var stack = [];
                var i = 0;
                instructionText.innerHTML = "On parcourt la table index à partir de l\'indice du Min jusqu'à trouver une clé supérieur au Max(" + max + ") ";
                var condition = true;
                if (indiceDeDebut < tab.length) {
                    while ((tab[indiceDeDebut][0] - max <= 0) && (condition) && (indiceDeDebut < tab.length)) {
                        stack.push(indiceDeDebut);
                        resultatRequeteIndex[i++] = tab[indiceDeDebut];
                        setTimeout(function() {
                            algorithme(3); // animation de l'algorithme
                            setTimeout(() => {
                                algorithme(4); // animation de l'algorithme
                            }, 500 * vitesse);
                            document.getElementById('ligne' + stack.shift()).style.backgroundColor = "rgb(243, 244, 52)";
                        }, inter * vitesse);
                        indiceDeDebut++;
                        if (!(indiceDeDebut < tab.length)) {
                            indiceDeDebut--;
                            condition = false;
                        }
                        inter += 1000;
                    }
                }
                if ((condition))
                    setTimeout(function() {
                        document.getElementById('ligne' + indiceDeDebut).style.backgroundColor = "rgb(243, 244, 52)";
                        document.getElementById('cel' + indiceDeDebut).style.backgroundColor = "rgb(255, 58, 3)";
                    }, inter * vitesse);

                resultatRequeteIndex.sort(function(a, b) {
                    return a[1] - b[1];
                });

                setTimeout(function() {
                    if ((resultatRequeteIndex.length > 0))
                        afficherRequeteIndex(resultatRequeteIndex);
                    else {
                        algorithme(7); // animation de l'algorithme
                        instructionText.innerHTML = "Aucun resultat n\'est trouvé dans le fichier pour cette requête .";
                        cout(0, 0); // afficher le cout de l'opération 
                        setTimeout(function() { //finRequete
                            insertion = false;
                            demasquer(); // débloquer tout les boutons en ajoutant tout les évènements
                            afficher(-1, fichier);
                        }, 5000 * vitesse);
                    }
                }, (inter + 1000) * vitesse);

            }
        }, obj.temps * vitesse);
    }

}
//_____________________________________________________________________________//

function afficherRequeteIndex(resultatRequeteIndex) { // afficher le resultat table index de la requete //dense
    instructionText.innerHTML = "Le résultat du parcours est affecté à un tableau trié par rapport à i pour ne pas accéder à un bloc plusieurs fois";
    var divtable = document.querySelector('.nouveauFichier');
    var table = document.createElement('table');
    table.id = 'resultatRequeteIndex';
    var ligne = document.createElement('tr');
    var cellule = document.createElement('th');
    var text = document.createTextNode('cle');
    cellule.appendChild(text);
    ligne.appendChild(cellule);
    var cellule = document.createElement('th');
    var text = document.createTextNode('i');
    cellule.appendChild(text);
    ligne.appendChild(cellule);
    var cellule = document.createElement('th');
    var text = document.createTextNode('j');
    cellule.appendChild(text);
    ligne.appendChild(cellule);
    table.appendChild(ligne);

    for (let i = 0; i < resultatRequeteIndex.length; i++) {
        var ligne = document.createElement('tr');
        ligne.id = "ligneRequete" + i;
        for (let j = 0; j < 3; j++) {
            var cellule = document.createElement('td');
            var text = document.createTextNode(resultatRequeteIndex[i][j]);
            cellule.appendChild(text);
            ligne.appendChild(cellule);
        }
        table.appendChild(ligne);
    }
    divtable.appendChild(table);
    setTimeout(afficherResultatRequete, 2000 * vitesse);
}
//_____________________________________________________________________________//
//_____________________________________________________________________________//

function afficherResultatRequete() { // afficher le resultat de la requete 
    instructionText.innerHTML = "On accède au resultats directement à partir du i et j ";
    var time = 1000;
    var resultatRequeteFichier = new Array();
    for (let i = 0; i < resultatRequeteIndex.length; i++) {
        setTimeout(function() {
            algorithme(5); // animation de l'algorithme
            setTimeout(() => {
                algorithme(6); // animation de l'algorithme
            }, 500 * vitesse);
            document.getElementById('ligneRequete' + i).style.backgroundColor = "rgb(243, 244, 52)";
            var l = ((resultatRequeteIndex[i][1] - 1) * nbr + (resultatRequeteIndex[i][2] - 1));
            resultatRequeteFichier[i] = tabFichier[l];
            document.getElementById('celluleFichier' + l + "2").style.backgroundColor = 'rgb(82, 188, 105)';
            document.getElementById('celluleFichier' + l + "3").style.backgroundColor = 'rgb(82, 188, 105)';

        }, time * vitesse);
        time += 1000;
    }
    setTimeout(function() {
        document.getElementById('resultatRequeteIndex').remove();
        afficherResultatFinalRequete(resultatRequeteFichier, document.querySelector('.nouveauFichier'), 'tableauRequete');
        algorithme(7); // animation de l'algorithme
        setTimeout(function() { //finRequete
            insertion = false;
            demasquer(); // débloquer tout les boutons en ajoutant tout les évènements
            cout(nbrDeBlocRequete(resultatRequeteIndex), 0); // afficher le cout de l'opération 
            afficher(-1, fichier);
            document.getElementById('tableauRequete').remove();
        }, 5000);
    }, (time + 1000) * vitesse);
}
//_____________________________________________________________________________//
//_____________________________________________________________________________//

function afficherResultatFinalRequete(tabFich, fichier, idtab) { // afficher le resultat finale de la requete
    instructionText.innerHTML = "Voici le resultat de la requête";
    var table = document.createElement('table');
    table.id = idtab;
    var ligne = document.createElement('tr');
    var cellule = document.createElement('th');
    var text = document.createTextNode('i');
    cellule.appendChild(text);
    ligne.appendChild(cellule);
    var cellule = document.createElement('th');
    var text = document.createTextNode('j');
    cellule.appendChild(text);
    ligne.appendChild(cellule);
    var cellule = document.createElement('th');
    var text = document.createTextNode('clé');
    cellule.appendChild(text);
    ligne.appendChild(cellule);
    var cellule = document.createElement('th');
    var text = document.createTextNode('enregistrement');
    cellule.appendChild(text);
    ligne.appendChild(cellule);
    table.appendChild(ligne);

    for (let i = 0; i < tabFich.length; i++) {
        var ligne = document.createElement('tr');
        ligne.id = 'ligneFichierReorg' + i;
        ligne.className = 'ligneFichierReorg';
        for (let j = 0; j < 4; j++) {
            var cellule = document.createElement('td');
            cellule.id = "celluleFichierReorg" + i + "" + j;
            var text = document.createTextNode(tabFich[i][j]);
            cellule.appendChild(text);
            ligne.appendChild(cellule);
        }

        table.appendChild(ligne);
    }
    fichier.appendChild(table);

}
//_____________________________________________________________________________//
//_____________________________________________________________________________//

function nbrDeBlocRequete(tableIndex) { // retourne le nombre de blocs parcouru par l'opération de la requete pour pouvoire calculer le cout
    var cpt = 1;
    for (let index = 0; index < tableIndex.length - 1; index++) {
        if (tableIndex[index][1] != tableIndex[index + 1][1]) cpt++;
    }
    return cpt;
}
/*************************         FIN REQUETE          ******************************/
/*************************          REORGANISATION          ******************************/
function reorganisation() { // lancer l'opération reorganisation
    var lecture = entete.nbrBloc;
    document.getElementById("code").innerHTML = algo_reorganisation;
    algorithme(0); // animation de l'algorithme
    instructionText.innerHTML = "Réorganisation de fichier";
    if ((tab.length == 0) /*|| (Dense)*/ ) {
        setTimeout(function() {
            instructionText.innerHTML = "Pas de fichier créé";
            cout(0, 0); // afficher le cout de l'opération 
            algorithme(1); // animation de l'algorithme
            setTimeout(() => {
                algorithme(7); // animation de l'algorithme
                setTimeout(() => {
                    algorithme(-7);
                }, 1000 * vitesse);
            }, 1000 * vitesse);

        }, 100 * vitesse);
        return;
    }
    if (entete.nbrSuppression == 0) {
        instructionText.innerHTML = "Le nombre de suppression est nul. Pas la peine de faire une réorganisation";
        algorithme(7); // animation de l'algorithme
        cout(0, 0); // afficher le cout de l'opération 
        return;
    }
    if (entete.nbrSuppression == entete.nbrInsertion) {
        instructionText.innerHTML = "Tout les enregistrements sont supprimer logiquement donc il faut supprimer le fichier de données";
        cout(0, 0); // afficher le cout de l'opération 
        setTimeout(() => {
            supprimer();
        }, 2000);
        return;
    }

    document.querySelector('#tab').remove();
    document.querySelector(".kolech").style.animation += 'mymove 3000ms';
    setTimeout(() => {
        document.querySelector(".kolech").style.animation = '';
        $("#creat-action").fadeOut();
        $("#search-action").fadeOut();
        $("#delete-action").fadeOut();
        $("#insert-action").fadeOut();
        $("#requete-action").fadeOut();
        if (entete.nbrInsertion != entete.nbrSuppression) {
            masquer(); // bloquer tout les boutons en supprimant tout les évènements
            reorg = true;
            entete = { nbrInsertion: 0, nbrBloc: 0, nbrSuppression: 0 };
            var tabInter = tabFichier;
            afficherFichierReorganisation(tabFichier, document.querySelector('.nouveauFichier'), 'tableReorg');
            for (let i = 0; i < nbr * entete.nbrBloc; i++) {
                if (((Math.trunc(i / nbr) + 1) % 2) == 1) {
                    if (document.getElementById('ligneFichierReorg' + i) != null)
                        document.getElementById('ligneFichierReorg' + i).style.backgroundColor = backgroundColorBloc1;
                } else {
                    if (document.getElementById('ligneFichierReorg' + i) != null)
                        document.getElementById('ligneFichierReorg' + i).style.backgroundColor = backgroundColorBloc2;
                }

            }
            entete = { nbrInsertion: 0, nbrBloc: 0, nbrSuppression: 0 };
            mettreAjourAffichageEntete(); // afficher les mis à jour appliquées sur l'entete dans la barre de l'entete

            document.getElementById('tableFichier').remove();
            tabFichier = new Array();
            bool = false;
            tab = new Array();
            algorithme(3); // animation de l'algorithme
            setTimeout(() => {
                algorithme(4); // animation de l'algorithme
            }, 500 * vitesse);
            for (let z = 0; z < tabInter.length; z++) {
                setTimeout(function() {
                    if (z > 0) {
                        document.getElementById("ligneFichierReorg" + (z - 1)).style.backgroundColor = "white";
                        document.getElementById("celluleFichierReorg" + (z - 1) + "4").style.backgroundColor = "white";
                        document.getElementById("celluleFichierReorg" + (z - 1) + "2").style.backgroundColor = "white";
                        document.getElementById("celluleFichierReorg" + (z - 1) + "3").style.backgroundColor = "white";
                    }
                    document.getElementById("celluleFichierReorg" + z + "4").style.backgroundColor = "rgb(243, 244, 52)";
                    document.getElementById("celluleFichierReorg" + z + "2").style.backgroundColor = "rgb(243, 244, 52)";
                    document.getElementById("celluleFichierReorg" + z + "3").style.backgroundColor = "rgb(243, 244, 52)";
                    if (tabInter[z][4] == 'f') {
                        document.getElementById("celluleFichierReorg" + z + "" + 4).style.backgroundColor = "rgb(82, 188, 105)";
                        instructionText.innerHTML = "L\'enregistrement n°" + tabInter[z][2] + " n\'est pas effacé logiquement. Il sera inseré dans le nouveau fichier";
                        setTimeout(function() {
                            algorithme(5); // animation de l'algorithme
                            setTimeout(() => {
                                algorithme(6); // animation de l'algorithme
                                setTimeout(() => {
                                    algorithme(4); // animation de l'algorithme
                                }, 1000 * vitesse);
                            }, 1000 * vitesse);
                        }, 500 * vitesse);
                        insererReorg(tabInter[z][2]);
                        mettreAjourAffichageEntete(); // afficher les mis à jour appliquées sur l'entete dans la barre de l'entete
                    } else {
                        setTimeout(function() {
                            algorithme(5); // animation de l'algorithme
                            setTimeout(() => {
                                algorithme(4); // animation de l'algorithme
                            }, 1000 * vitesse);
                        }, 500 * vitesse);
                        document.getElementById("celluleFichierReorg" + z + "" + 4).style.backgroundColor = "rgb(255, 58, 3)";
                        instructionText.innerHTML = "L\'enregistrement n°" + tabInter[z][2] + " est effacé logiquement. Il ne sera pas inseré dans le nouveau fichier";

                    }
                    if ((z + 1) == tabInter.length) {
                        setTimeout(function() {
                            demasquer(); // débloquer tout les boutons en ajoutant tout les évènements
                            algorithme(7); // animation de l'algorithme
                            document.getElementById('tableReorg').remove();
                            afficher(-1, fichier);
                            mettreAjourAffichageEntete(); // afficher les mis à jour appliquées sur l'entete dans la barre de l'entete
                            instructionText.innerHTML = "Fin de la réorganisation du fichier";
                            reorg = false;
                            cout(lecture, entete.nbrBloc); // afficher le cout de l'opération 
                        }, 5000 * vitesse);
                    }
                }, (z * 4000 + 1000) * vitesse);
                while ((!test.fin)) {}
            }
        } else {
            algorithme(2); // animation de l'algorithme
            instructionText.innerHTML = "Le fichier est vide";
            setTimeout(function() { algorithme(7); }, 2000 * vitesse)
            masquer(); // bloquer tout les boutons en supprimant tout les évènements
            setTimeout(function() {
                supprimer();
                demasquer(); // débloquer tout les boutons en ajoutant tout les évènements
                mettreAjourAffichageEntete(); // afficher les mis à jour appliquées sur l'entete dans la barre de l'entete
            }, 2000 * vitesse)

        }
    }, 3000);
}
//_____________________________________________________________________________//

function insererReorg(cle) { // inserer les clé non supprimées dans le nouveau fichier
    if (tab.length == 0) //insertion du 1er elemt   cas 1
    {
        // cas = 1;
        var enr = new Array(3);
        enr[0] = cle;
        enr[1] = 1;
        enr[2] = 1;
        tab[0] = enr;

        enr = new Array(5);
        enr[0] = 1;
        enr[1] = 1;
        enr[2] = cle;
        enr[3] = "enr n°" + cle;
        enr[4] = 'f';
        tabFichier[0] = enr;
        entete.nbrBloc = 1;
        entete.nbrInsertion = 1;

    } else {

        if ((entete.nbrInsertion % nbr) == 0) //nouveau bloc
        {
            cas = 1;
            entete.nbrInsertion = entete.nbrInsertion + 1;
            entete.nbrBloc = entete.nbrBloc + 1;

            enr = new Array(5);
            enr[0] = entete.nbrBloc;
            enr[1] = 1;
            enr[2] = cle;
            enr[3] = "enr n°" + cle;
            enr[4] = 'f';
            tabFichier[entete.nbrInsertion - 1] = enr;

            var enr = new Array(3);
            enr[0] = cle;
            enr[1] = entete.nbrBloc;
            enr[2] = 1;
            tab[entete.nbrBloc - 1] = enr;

        } else { //dernier element un bloc existant
            cas = 1;
            entete.nbrInsertion = entete.nbrInsertion + 1;
            enr = new Array(5);
            enr[0] = entete.nbrBloc;
            enr[1] = (entete.nbrInsertion - 1) % nbr + 1;
            enr[2] = cle;
            enr[3] = "enr n°" + cle;
            enr[4] = 'f';
            tabFichier[entete.nbrInsertion - 1] = enr;

            var enr = new Array(3);
            enr[0] = cle;
            enr[1] = entete.nbrBloc;
            enr[2] = tabFichier[entete.nbrInsertion - 1][1];
            tab[entete.nbrBloc - 1] = enr;

        }
    }
    afficher(-1, fichier);

    document.getElementById('celluleFichier' + (entete.nbrInsertion - 1) + "4").style.backgroundColor = 'rgb(243, 244, 52)';
    document.getElementById('celluleFichier' + (entete.nbrInsertion - 1) + "3").style.backgroundColor = 'rgb(243, 244, 52)';
    document.getElementById('celluleFichier' + (entete.nbrInsertion - 1) + "2").style.backgroundColor = 'rgb(243, 244, 52)';
    document.getElementById('ligne' + (entete.nbrBloc - 1)).style.backgroundColor = 'rgb(243, 244, 52)';
}
//_____________________________________________________________________________//

function afficherFichierReorganisation(tabFich, fichier, idtab) { // afficher le nouveau fichier après la reorganisation
    if (document.getElementById('tableauRequete') != null) document.getElementById('tableauRequete').remove();
    var table = document.createElement('table');
    table.id = idtab;
    var ligne = document.createElement('tr');
    var cellule = document.createElement('th');
    var text = document.createTextNode('i');
    cellule.appendChild(text);
    ligne.appendChild(cellule);
    var cellule = document.createElement('th');
    var text = document.createTextNode('j');
    cellule.appendChild(text);
    ligne.appendChild(cellule);
    var cellule = document.createElement('th');
    var text = document.createTextNode('clé');
    cellule.appendChild(text);
    ligne.appendChild(cellule);
    var cellule = document.createElement('th');
    var text = document.createTextNode('enregistrement');
    cellule.appendChild(text);
    ligne.appendChild(cellule);
    var cellule = document.createElement('th');
    var text = document.createTextNode('eff');
    cellule.appendChild(text);
    ligne.appendChild(cellule);
    table.appendChild(ligne);

    for (let i = 0; i < tabFich.length; i++) {
        var ligne = document.createElement('tr');
        ligne.id = 'ligneFichierReorg' + i;
        ligne.className = 'ligneFichierReorg';
        for (let j = 0; j < 5; j++) {
            var cellule = document.createElement('td');
            cellule.id = "celluleFichierReorg" + i + "" + j;
            var text = document.createTextNode(tabFich[i][j]);
            cellule.appendChild(text);
            ligne.appendChild(cellule);
        }

        table.appendChild(ligne);
    }
    fichier.appendChild(table);
    var i = tabFich.length;
    var j = tabFich[i - 1][1];

    while (i % nbr != 0) {
        j++;
        var ligne = document.createElement('tr');
        ligne.id = 'ligneFichierReorg' + i;
        ligne.className = 'ligneFichierReorg';
        //i
        var cellule = document.createElement('td');
        cellule.id = "celluleFichierReorg" + i + "0";
        var text = document.createTextNode(entete.nbrBloc);
        cellule.appendChild(text);
        ligne.appendChild(cellule);
        //j
        var cellule = document.createElement('td');
        cellule.id = "celluleFichierReorg" + i + "1";
        var text = document.createTextNode(j);
        cellule.appendChild(text);
        ligne.appendChild(cellule);
        for (let index = 2; index < 5; index++) {
            var cellule = document.createElement('td');
            cellule.id = "celluleFichierReorg" + i + "" + j;
            var text = document.createTextNode('');
            cellule.appendChild(text);
            ligne.appendChild(cellule);
        }


        table.appendChild(ligne);
        i++;
    }
    fichier.appendChild(table);
    for (let i = 0; i < nbr * entete.nbrBloc; i++) {
        if (((Math.trunc(i / nbr) + 1) % 2) == 1) {
            if (document.getElementById('ligneFichierReorg' + i) != null)
                document.getElementById('ligneFichierReorg' + i).style.backgroundColor = backgroundColorBloc1;
        } else {
            if (document.getElementById('ligneFichierReorg' + i) != null)
                document.getElementById('ligneFichierReorg' + i).style.backgroundColor = backgroundColorBloc2;
        }

    }

    var i = 0;
    while ((i < tabFich.length) || (i % nbr != 0)) {
        if (i % nbr != nbr - 1)
            document.getElementById("celluleFichierReorg" + i + "0").style.borderBottom = "0";
        if (i % nbr != 0)
            document.getElementById("celluleFichierReorg" + i + "0").style.borderTop = "0";
        document.getElementById("celluleFichierReorg" + i + "0").innerHTML = "";
        i++;
    }
    for (let index = 0; index < i; index++) {
        document.getElementById("celluleFichierReorg" + index + "0").style.borderRight = "1px #000 outset";
        document.getElementById("celluleFichierReorg" + index + "1").style.borderRight = "1px #000 outset";
    }
    var i = 0;
    i = Number(i);
    nbr = Number(nbr);
    while ((i < tabFich.length)) {
        if (nbr % 2 != 0)
            document.getElementById("celluleFichierReorg" + (Math.trunc((nbr + i * 2) / 2)) + "" + 0).innerHTML = (Math.trunc(i / nbr) + 1);
        else
            document.getElementById("celluleFichierReorg" + (Math.trunc((nbr + i * 2 - 1) / 2)) + "" + 0).innerHTML = (Math.trunc(i / nbr) + 1);
        for (let index = 0; index < 5; index++) {
            document.getElementById("celluleFichierReorg" + i + "" + index).style.borderTop = "1px #000 outset";
        }
        i += nbr;

    }

}
/*************************         FIN REORGANISATION          ******************************/
/*************************          AFFICHAGE          ******************************/
function afficher(indice, fichier) { // afficher la table index dans l'interface
    if (tab.length == 0) return;
    if (bool) {
        if (document.querySelector('table') != null)
            document.querySelector('table').remove();
        if (document.getElementById("tableFichier") != null)
            document.getElementById("tableFichier").remove();
    } else
        bool = true;

    var divtable = document.querySelector('.divtable');
    var table = document.createElement('table');
    var ligne = document.createElement('tr');
    var cellule = document.createElement('th');
    var text = document.createTextNode('clé');
    cellule.appendChild(text);
    ligne.appendChild(cellule);
    var cellule = document.createElement('th');
    var text = document.createTextNode('i');
    cellule.appendChild(text);
    ligne.appendChild(cellule);
    var cellule = document.createElement('th');
    var text = document.createTextNode('j');
    cellule.appendChild(text);
    ligne.appendChild(cellule);
    table.appendChild(ligne);
    table.id = "tab";
    for (let i = 0; i < tab.length; i++) {
        var ligne = document.createElement('tr');
        ligne.id = 'ligne' + i;
        for (let j = 0; j < 3; j++) {
            var cellule = document.createElement('td');
            if (j == 0) {
                cellule.id = "cel" + i;
            } else
                cellule.id = "cellule" + i + "" + j;
            if ((i == indice - 1) && (elementInsererColor)) {
                ligne.style.backgroundColor = 'rgb(243, 244, 52)';
                setTimeout(function() {
                    document.getElementById('ligne' + (indice - 1)).style.backgroundColor = 'white';
                }, 2000 * vitesse);
            }
            var text = document.createTextNode(tab[i][j]);
            cellule.appendChild(text);
            ligne.appendChild(cellule);

        }
        table.appendChild(ligne);
    }
    divtable.appendChild(table);
    if (!Dense) // si le type d'index est non dense
        afficherFichier(tabFichier, fichier);
    else afficherFichierDense(tabFichier, fichier); // si le type d'index est dense


}
//_____________________________________________________________________________//

function afficherFichier(tabFich, fichier) { // afficher le fichier de données (non dense)
    if (tabFich.length == 0) return;
    var table = document.createElement('table');
    table.id = "tableFichier";
    var ligne = document.createElement('tr');
    var cellule = document.createElement('th');
    var text = document.createTextNode('i');
    cellule.appendChild(text);
    ligne.appendChild(cellule);
    var cellule = document.createElement('th');
    var text = document.createTextNode('j');
    cellule.appendChild(text);
    ligne.appendChild(cellule);
    var cellule = document.createElement('th');
    var text = document.createTextNode('clé');
    cellule.appendChild(text);
    ligne.appendChild(cellule);
    var cellule = document.createElement('th');
    var text = document.createTextNode('enregistrement');
    cellule.appendChild(text);
    ligne.appendChild(cellule);
    var cellule = document.createElement('th');
    var text = document.createTextNode('eff');
    cellule.appendChild(text);
    ligne.appendChild(cellule);
    table.appendChild(ligne);

    for (let i = 0; i < tabFich.length; i++) {
        var ligne = document.createElement('tr');
        ligne.id = 'ligneFichier' + i;
        ligne.className = 'ligneFichier';
        for (let j = 0; j < 5; j++) {
            var cellule = document.createElement('td');
            cellule.id = "celluleFichier" + i + "" + j;
            var text = document.createTextNode(tabFich[i][j]);
            cellule.appendChild(text);
            ligne.appendChild(cellule);
        }

        table.appendChild(ligne);
    }
    var i = tabFich.length;
    var j = tabFich[i - 1][1];

    while (i % nbr != 0) {
        j++;
        var ligne = document.createElement('tr');
        ligne.id = 'ligneFichier' + i;
        ligne.className = 'ligneFichier';
        //i
        var cellule = document.createElement('td');
        cellule.id = "celluleFichier" + i + "0";
        var text = document.createTextNode(entete.nbrBloc);
        cellule.appendChild(text);
        ligne.appendChild(cellule);
        //j
        var cellule = document.createElement('td');
        cellule.id = "celluleFichier" + i + "1";
        var text = document.createTextNode(j);
        cellule.appendChild(text);
        ligne.appendChild(cellule);
        for (let index = 2; index < 5; index++) {
            var cellule = document.createElement('td');
            cellule.id = "celluleFichier" + i + "" + j;
            var text = document.createTextNode('');
            cellule.appendChild(text);
            ligne.appendChild(cellule);
        }


        table.appendChild(ligne);
        i++;
    }
    fichier.appendChild(table);
    for (let i = 0; i < nbr * entete.nbrBloc; i++) {
        if (((Math.trunc(i / nbr) + 1) % 2) == 1) {
            document.getElementById('ligneFichier' + i).style.backgroundColor = backgroundColorBloc1;
            document.getElementById('ligne' + (Math.trunc(i / nbr))).style.backgroundColor = backgroundColorBloc1;
        } else {
            document.getElementById('ligne' + (Math.trunc(i / nbr))).style.backgroundColor = backgroundColorBloc2;
            document.getElementById('ligneFichier' + i).style.backgroundColor = backgroundColorBloc2;
        }
    }

    var i = 0;
    while ((i < tabFich.length) || (i % nbr != 0)) {
        if (i % nbr != nbr - 1)
            document.getElementById("celluleFichier" + i + "0").style.borderBottom = "0";
        if (i % nbr != 0)
            document.getElementById("celluleFichier" + i + "0").style.borderTop = "0";
        document.getElementById("celluleFichier" + i + "0").innerHTML = "";
        i++;
    }
    for (let index = 0; index < i; index++) {
        document.getElementById("celluleFichier" + index + "0").style.borderRight = "1px #000 outset";
        document.getElementById("celluleFichier" + index + "1").style.borderRight = "1px #000 outset";
    }
    var i = 0;
    i = Number(i);
    nbr = Number(nbr);
    while ((i < tabFich.length)) {
        if (nbr % 2 != 0)
            document.getElementById("celluleFichier" + (Math.trunc((nbr + i * 2) / 2)) + "" + 0).innerHTML = (Math.trunc(i / nbr) + 1);
        else
            document.getElementById("celluleFichier" + (Math.trunc((nbr + i * 2 - 1) / 2)) + "" + 0).innerHTML = (Math.trunc(i / nbr) + 1);
        for (let index = 0; index < 5; index++) {
            document.getElementById("celluleFichier" + i + "" + index).style.borderTop = "1px #000 outset";
        }
        i += nbr;

    }

}
//_____________________________________________________________________________//

function afficherFichierDense(tabFich, fichier) { // afficher le fichier de données (dense)
    if (tabFich.length == 0)
        return;
    var table = document.createElement('table');
    table.id = "tableFichier";
    var ligne = document.createElement('tr');
    var cellule = document.createElement('th');
    var text = document.createTextNode('i');
    cellule.appendChild(text);
    ligne.appendChild(cellule);
    var cellule = document.createElement('th');
    var text = document.createTextNode('j');
    cellule.appendChild(text);
    ligne.appendChild(cellule);
    var cellule = document.createElement('th');
    var text = document.createTextNode('clé');
    cellule.appendChild(text);
    ligne.appendChild(cellule);
    var cellule = document.createElement('th');
    var text = document.createTextNode('enregistrement');
    cellule.appendChild(text);
    ligne.appendChild(cellule);
    table.appendChild(ligne);

    for (let i = 0; i < tabFich.length; i++) {
        var ligne = document.createElement('tr');
        ligne.id = 'ligneFichier' + i;
        ligne.className = 'ligneFichier';
        for (let j = 0; j < 4; j++) {
            var cellule = document.createElement('td');
            cellule.id = "celluleFichier" + i + "" + j;
            var text = document.createTextNode(tabFich[i][j]);
            cellule.appendChild(text);
            ligne.appendChild(cellule);
        }

        table.appendChild(ligne);
    }
    var i = tabFich.length;


    var j = tabFich[i - 1][1];
    while (Number(j % nbr) != 0) {
        j++;
        var ligne = document.createElement('tr');
        ligne.id = 'ligneFichier' + i;
        ligne.className = 'ligneFichier';
        //i
        var cellule = document.createElement('td');
        cellule.id = "celluleFichier" + i + "" + 0;
        var text = document.createTextNode(entete.nbrBloc);
        cellule.appendChild(text);
        ligne.appendChild(cellule);
        //j
        var cellule = document.createElement('td');
        cellule.id = "celluleFichier" + i + "" + 1;
        var text = document.createTextNode(j);
        cellule.appendChild(text);
        ligne.appendChild(cellule);
        for (let index = 2; index < 4; index++) {
            var cellule = document.createElement('td');
            cellule.id = "celluleFichier" + i + "" + j;
            var text = document.createTextNode('');
            cellule.appendChild(text);
            ligne.appendChild(cellule);
        }

        table.appendChild(ligne);
        i++;
    }
    fichier.appendChild(table);

    for (let i = 0; i < nbr * entete.nbrBloc; i++) {
        if (((Math.trunc(i / nbr) + 1) % 2) == 1) {
            document.getElementById('ligneFichier' + i).style.backgroundColor = backgroundColorBloc1;
        } else
            document.getElementById('ligneFichier' + i).style.backgroundColor = backgroundColorBloc2;
    }
    if (elementInsererColor) {
        var indice = (entete.nbrInsertion - 1);
        document.getElementById('ligneFichier' + indice).style.backgroundColor = 'rgb(243, 244, 52)';
        if (((Math.trunc(indice / nbr) + 1) % 2) == 1) {
            document.getElementById('celluleFichier' + indice + "0").style.backgroundColor = backgroundColorBloc1;
        } else
            document.getElementById('celluleFichier' + indice + "0").style.backgroundColor = backgroundColorBloc2;
        setTimeout(function() {
            if (((Math.trunc(indice / nbr) + 1) % 2) == 1) {
                document.getElementById('ligneFichier' + indice).style.backgroundColor = backgroundColorBloc1;
            } else
                document.getElementById('ligneFichier' + indice).style.backgroundColor = backgroundColorBloc2;
        }, 2000 * vitesse);
        elementInsererColor = false;
    }
    var i = 0;
    while ((i < tabFich.length) || (i % nbr != 0)) {
        if (i % nbr != nbr - 1)
            document.getElementById("celluleFichier" + i + "" + 0).style.borderBottom = "0";
        if (i % nbr != 0)
            document.getElementById("celluleFichier" + i + "" + 0).style.borderTop = "0";
        document.getElementById("celluleFichier" + i + "" + 0).innerHTML = "";
        i++;
    }

    for (let index = 0; index < i; index++) {
        document.getElementById("celluleFichier" + index + "0").style.borderRight = "1px #000 outset";
        document.getElementById("celluleFichier" + index + "1").style.borderRight = "1px #000 outset";
    }
    var i = 0;
    i = Number(i);
    nbr = Number(nbr);
    while ((i < tabFich.length)) {
        if (nbr % 2 != 0)
            document.getElementById("celluleFichier" + (Math.trunc((nbr + i * 2) / 2)) + "" + 0).innerHTML = (Math.trunc(i / nbr) + 1);
        else
            document.getElementById("celluleFichier" + (Math.trunc((nbr + i * 2 - 1) / 2)) + "" + 0).innerHTML = (Math.trunc(i / nbr) + 1);
        if (i != 0)
            for (let index = 0; index < 4; index++) {
                document.getElementById("celluleFichier" + i + "" + index).style.borderTop = "1px #000 outset";
            }
        i += nbr;
    }
}

/*************************         FIN AFFICHAGE          ******************************/
/************************          EVALUER LE COUT DE L'OPERATION       ************** */
function cout(lecture, ecriture) { // afficher le cout de l'opération 
    if (!alea) {
        document.getElementById("current-action").innerHTML = "Lecture : " + lecture + " | Ecriture : " + ecriture;
        $("#current-action").fadeIn();
    }
}
/////////////////////////////////////////