//CORPS DE L'ALGORITHME DE CREATION ( affiché dans la fenetre d'algorithme dans notre interface dans l'opération : creation )
const algo_creation =
    '<p >Procedure creation() </p> \
  <p id="afectation">&nbsp;&nbsp;ECRIRE("Nombre de bloc ?"); </p> \
  <p id="debut" >&nbsp;&nbsp;LIRE("nb_bloc");</p> \
  <p id="recherche" >&nbsp;&nbsp;ECRIRE("Taille de bloc ?"); </p> \
  <p id="si">&nbsp;&nbsp;LIRE("nb_enreg");</p> \
  <p id="insertionInterne">&nbsp;&nbsp;ord = recuperer_ordonnance()</p> \
  <p id="fsi" >&nbsp;&nbsp;SI(NON ord) : entete <- creer_entete_nord(nb_bloc , nb_enreg);</p> \
  <p id="fsi" >&nbsp;&nbsp;SINON: entete<- creer_entete_ord(nb_bloc , nb_enreg , ord); </p> \
  <p id="fsi" >&nbsp;&nbsp;creer_fichier(entete , ord)</p> \
  <p id="fin">FIN</p>';

//CORPS DE PROCEDURE DE GENERATION D'UN FICHIER ( affiché dans la fenetre d'algorithme dans notre interface dans l'opération :creation)
const algo_creer_fichier =
    '<p >Procedure creer_fichier(Entete) </p> \
  <p id="afectation">&nbsp;&nbsp;pour i allant de 1 a Entete[0] faire : </p> \
  <p id="debut" >&nbsp;&nbsp;&nbsp;&nbsp;SI (ord) : bloc<-Generer_bloc_non_plain (Entete[3]);</p> \
  <p id="recherche" >&nbsp;&nbsp;&nbsp;&nbsp;SINON : bloc<-Generer_bloc_plain (Entete[1]);</p> \
  <p id="recherche" >&nbsp;&nbsp;&nbsp;&nbsp;ECRIRDIR(Fichier , i ,bloc); </p> \
  <p id="si">FIN</p>';
//CORPS DE PROCEDURE DE RECUPERER LES CARACTERISTIQUES DE TOF  ( affiché dans la fenetre d'algorithme dans notre interface dans l'opération :creation si LE FICHIER EST TOF)
const algo_recuperer_ordonnance =
    '<p >Fonction recuperer_ordonnance() </p> \
  <p id="afectation">&nbsp;&nbsp;ECRIRE("Bloc ordonnées / Bloc non ordonnées"); </p> \
  <p id="debut" >&nbsp;&nbsp;LIRE(ord);</p> \
  <p id="recherche" >&nbsp;&nbsp;SI(ord) :</p> \
  <p id="si">&nbsp;&nbsp;&nbsp;&nbsp;ECRIRE("donner le facteur de chargement initial");</p> \
  <p id="insertionInterne">&nbsp;&nbsp;&nbsp;&nbsp;LIRE(fact_init);</p> \
  <p id="fsi" >&nbsp;&nbsp;&nbsp;&nbsp; ECRIRE("donner le seuil de reorganisationl");</p> \
  <p id="fsi" >&nbsp;&nbsp;&nbsp;&nbsp;LIRE(seuil_org);</p> \
  <p id="fsi" >&nbsp;&nbsp;&nbsp;&nbsp; recuperer_ordonnance <- [ ord , fact_init , seuil_org ];</p> \
  <p id="fin">&nbsp;&nbsp;SINON :recuperer_ordonnance <- [ ord ];</p>';
//CORPS DE L'ALGORITHME DE RECHERCHE( affiché dans la fenetre d'algorithme dans notre interface dans l'opération : Rechercher )
const algo_recherche = '<p >Procedure Recherche(ordonne)  </p> \
          <p id="afectation">&nbsp;&nbsp;Lire(cle)</p> \
          <p id="afectation">&nbsp;&nbsp;SI(ordonnee)</p> \
        <p id="debut">&nbsp;&nbsp;&nbsp;&nbsp;Recherche_dico(cle , VAR trouv , VAR nb_bloc , VAR nb_enr);</p> \
          <p id="tq">&nbsp;&nbsp;SINON</p> \
          <p id="rechercheInterne">&nbsp;&nbsp;&nbsp;&nbsp;Recherche_seq(cle , VAR trouv , VAR nb_bloc , VAR nb_enr);</p> \
          <p id="passageFils">&nbsp;&nbsp;SI(trouv) : ECRIRE ("Existe !");</p> \
          <p id="ftq">&nbsp;&nbsp;SINON : ECRIRE ("N"existe pas !"); </p> \
          <p id="fin" >&nbsp;&nbsp;Recherche <- [trouv , nb_bloc,nb_enr];</p>\
           <p id="fin" >FIN</p>';
//CORPS DE L'ALGORITHME DE SUPPRESSION ( affiché dans la fenetre d'algorithme dans notre interface dans l'opération : Supprimer )
const algo_suppression = '<p >Procedure Suppression(cle,ord)  </p>\
          <p id="afectation">&nbsp;&nbsp;info <-Recherche(enreg.cle,ord);last_z<-Fichier[ENTETE[0]]</p>\
          <p id="debut" > &nbsp;&nbsp;trouv <- info[0]; nb_bloc <-info[1] ; nb_enreg <- info[2] </p>\
          <p id="recherche" >&nbsp;&nbsp;SI( NON trouv ) :  </p>\
          <p id="si"> &nbsp;&nbsp;&nbsp;&nbsp;ECRIRE("Existe pas !");</p>\
          <p id="si"> &nbsp;&nbsp; SINON SI (NON ORD) :</p>\
          <p id="fsi" > &nbsp;&nbsp;&nbsp;&nbsp;Supprimer_seq( nb_bloc , nb_enreg );</p>\
          <p id="insertionInterne"> &nbsp;&nbsp; SINON SI (ORD)) :</p>\
          <p id="insertionInterne">&nbsp;&nbsp;&nbsp;&nbsp;Supprimer_log(nb_bloc , nb_enreg);</p>\
          <p id="fin">FIN</p>';
//CORPS DE L'ALGORITHME DE RECHECHE SEQUENTIELLE ( affiché dans la fenetre d'algorithme dans notre interface dans l'opération : Recherche dans TOF )
const algo_recherche_seq = '<p >Procedure Recherche_seq(cle , VAR trouv , VAR entete, VAR cpt_bloc_fin , VAR cpt_enreg_fin)  </p> \
          <p id="afectation">&nbsp;&nbsp;cpt_bloc<-0 ; cpt_enreg <-0 ; VAR trouv <- FAUX/p> \
          <p id="afectation">&nbsp;&nbsp;POUR cpt_bloc allant de 0 à Entete[0] faire :</p> \
          <p id="tq">&nbsp;&nbsp;&nbsp;&nbsp;LIRDIR( Fichier , cpt_bloc , bloc)</p> \
        <p id="debut">&nbsp;&nbsp;&nbsp;&nbsp;POUR cpt_enreg allant de 0 à Fichier[bloc].NB faire :</p> \
          <p id="rechercheInterne">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SI(bloc.zone[cpt_enreg].cle == cle ):</p> \
          <p id="passageFils">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;trouv<-Vrai ;cpt_bloc_fin<-cpt_bloc; cpt_enreg_fin<-cpt_enreg</p> \
          <p id="ftq">FIN</p> \
          <p id="fin" ></p>\
           <p id="fin" ></p>';
//CORPS DE L'ALGORITHME D'INSERTION ( affiché dans la fenetre d'algorithme dans notre interface dans l'opération : Inserer )
const algo_insertion = '<p >Procedure Insertion(enreg,ord)  </p>\
          <p id="afectation"> &nbsp;&nbsp;info <-Recherche(enreg.cle,ord);last_z<-LENTETE()[0] ]; </p>\
          <p id="afectation">&nbsp;&nbsp;LIRDIR(Fichier , ENTETE[0] , last_z); </p>\
          <p id="debut" >&nbsp;&nbsp;trouv <- info[0]; nb_bloc <-info[1] ; nb_enreg <- info[2] </p>\
          <p id="recherche" >&nbsp;&nbsp;SI( trouv ) : ECRIRE("cet enregistrement existe deja");  </p>\
          <p id="si">&nbsp;&nbsp;SINON SI (NON ORD) : Inserer_seq(enreg);</p>\
          <p id="insertionInterne">&nbsp;&nbsp;SINON SI (ORD)) : Decaler_ins(enreg , indice_bloc , indice )</p>\
          <p id="fsi" >&nbsp;&nbsp;Mettre_a_jour_ENTETE("insertion",ord)</p>\
          <p id="fin">Fin </p>';
// LES INSTRUCTIONS à EXECUTER QUAND LA PAGE HTML DE FICHIER VUE COMME UN TABLEAU EST LANCE
$(document).ready(() => {
    UI.prototype.removeAll = function() {
        let c = document.getElementById('noeuds');
        c.innerHTML = '';
        let v = document.getElementById('texte-forme');
        v.innerHTML = '';
        document.getElementById('ligne').innerHTML = '';

    };
    UI.prototype.setTextInstruction = function(string) {
        $('instruction-fichier').children('p').text(string);
    };
    UI.prototype.ClearTextInstruction = function(string) {
        $('instruction-fichier').children('p').text("");
    };
    UI.prototype.setTextInstruction = function() {};
    // LA PROCEDURE SETUP DONNE A CHAQUE BOUTTON SA FONCTIONNALITE
    setup();
    // INITIALMENT ? VEROUILLAGE DE TOUS LES BOUTTONS SAUF LE BOUTTON : CREER
    document.querySelectorAll('.selection:not(#create)').forEach((elem) => {
        elem.classList.add('interdit');
    });
    // QUAND LE CURSEUR DE SOURIS PASSE SUR NOS BOUTTONS ILS SERONT COLOREES DE COULEUR NOIRE
    document.querySelector('#quitte').addEventListener('mouseover', function(e) {
        e.target.style.backgroundColor = 'red';
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
    // lA FONCTIONNALITE DE LIEN HYPERTEXT 'Aide'  (AFFICHAGE DE AIDE EN LIGNE )
    document.getElementById("aide-hide").addEventListener('click', launch_aide);

    function launch_aide() {
        document.querySelector(".aide").style.display = "block";
        document.getElementById("photo1").style.display = 'flex';
        document.querySelectorAll('.aideClass:not(#photo1)').forEach((elem) => {
            elem.style.display = "none";
        });
        document.getElementById("suivant").style.display = "flex";
        document.getElementById("precedent").style.display = "none";
    }
    // LA FONCTIONNALITE DE BOUTTON 'QUITTER' DANS L'INTERFACE DE AIDE EN LIGNE
    document.getElementById('quitte').addEventListener('click', function() {
        $('.aide').fadeOut();
    });
    // LA FONCTIONNALITE DE BOUTTON 'SUIVANT' DANS L'INTERFACE DE AIDE EN LIGNE
    document.getElementById("suivant").addEventListener('click', function() {
        let id_visible_now = '';
        document.querySelectorAll('.aideClass').forEach((elem) => {
            if (elem.style.display === 'flex') {
                id_visible_now = elem.id;
                elem.style.display = "none";
            }
        });
        let num = Number(id_visible_now[id_visible_now.length - 1]);
        id_visible_now = id_visible_now.replace(num.toString(), (num + 1).toString());
        document.getElementById(id_visible_now).style.display = "flex";
        if (id_visible_now === "photo6") {
            document.getElementById("suivant").style.display = "none";
        } else if (id_visible_now === "photo2") {
            document.getElementById("precedent").style.display = "flex";
        }

    });
    // LA FONCTIONNALITE DE BOUTTON 'PRECEDENT' DANS L'INTERFACE DE AIDE EN LIGNE
    document.getElementById("precedent").addEventListener('click', function() {
        let id_visible_now = '';
        document.querySelectorAll('.aideClass').forEach((elem) => {
            if (elem.style.display === 'flex') {
                id_visible_now = elem.id;
                elem.style.display = "none";
            }
        });
        let num = Number(id_visible_now[id_visible_now.length - 1]);
        id_visible_now = id_visible_now.replace(num.toString(), (num - 1).toString());
        document.getElementById(id_visible_now).style.display = "flex";
        if (id_visible_now === "photo1") {
            document.getElementById("precedent").style.display = "none";
        } else if (id_visible_now === "photo5") {
            document.getElementById("suivant").style.display = "flex";
        }

    });
    // SET INTERVAL = FONCTION EXECUTE DE FACON CONTINUE SANS ARRET
    let my_interv = setInterval(() => {
        //QUAND LE CURSEUR DE SOURIS PASSE SUR UNE ZONE : UNE PETITE FENETRE ROUGE SERA APPARUE
        //QU'AFFICHE LE NOMBRE D'ENREGISTREMENTSACTUEL DANS CETTE ZONE
        let zones = document.querySelectorAll('.Zone');
        let how_zones_visibles = zones.length;
        for (let i = 0; i < zones.length; i++) {
            if (zones[i].parentElement.style.display === "none") {
                how_zones_visibles--;
            } else {
                modifier_nb(i, zones[i].querySelectorAll('.ENR:not(.vide)').length);
                zones[i].parentElement.addEventListener('mouseout', function(e) {
                    zones[i].parentElement.querySelector('.NB_enrs').style.display = "none";
                });
                zones[i].parentElement.addEventListener('mouseover', function(e) {
                    zones[i].parentElement.querySelector('.NB_enrs').style.display = "block";
                });
            }
        }
        // à PARTIR DE LA HUITIEME ZONE UN DECALAGE SERA FAIT SUR LA POSITION DE ZONES AFIN DE GARDER L'ESPACE AU DESSOUS DE L'ENTETE
        let huitiemes = 7;
        while (huitiemes < how_zones_visibles) {
            let huitieme_zone = zones[huitiemes];
            huitieme_zone.parentElement.style.marginLeft = "150px";
            huitiemes += 7;
        }
        // AFFICHAGE DE FACTEUR DE CHARGEMENT ACTUEL SI LE FICHIER EST ORDONNE ( TOF )
        let ord = document.querySelector('#ord').children[0].querySelector('input').checked;
        if (ord && zones.length !== 0 && (document.querySelector('#yay').innerText.length === 0 || document.querySelector('#yay').innerText.includes('*'))) {
            if (chargement_now() < entete_tab()[4] - 10) {
                showalert("* Le facteur de chargement de votre fichier actuel : " + chargement_now() + "%", "#333", false);
            } else if (chargement_now() >= entete_tab()[4]) {
                showalert("* Le facteur de chargement de votre fichier actuel : " + chargement_now() + "%", "#ff0000", false);
                let yay = document.querySelector('#yay');
                $(yay).fadeOut(500);
                setTimeout(() => {
                    $(yay).fadeIn(500);
                }, 500)
            } else {
                showalert("* Le facteur de chargement de votre fichier actuel : " + chargement_now() + "%", "orange", false);

            }
        }
    }, 1000);
    // SET INTERVAL = FONCTION EXECUTE DE FACON CONTINUE SANS ARRET
    //CONTROLE DE VEROUILLAGE/DEVERROUILAGE DE BOUTTON DE REORGANISATION
    let interv_reorg = setInterval(() => {
        let ord = document.querySelector('#ord').children[0].querySelector('input').checked;
        if (!ord) {
            if (!document.querySelector('#reorg').classList.contains('interdit')) {
                document.querySelector('#reorg').classList.add('interdit')
            }
        } else {
            let how_many_interdit = document.querySelectorAll('.interdit').length;
            if (chargement_now() >= entete_tab()[4] && how_many_interdit < 2) {
                if (document.querySelector('#reorg').classList.contains('interdit')) {
                    document.querySelector('#reorg').classList.remove('interdit')
                }
            } else {
                if (!document.querySelector('#reorg').classList.contains('interdit')) {
                    document.querySelector('#reorg').classList.add('interdit')
                }
            }
        }
    }, 10);
    // SET INTERVAL = FONCTION EXECUTE DE FACON CONTINUE SANS ARRET
    //CONTROLE DE MESSAGE A AFFICHER A L'UTILISATEUR QUAND IL PASSE LE CURSEUR DE SOURIS SUR UN BOUTTON
    setInterval(() => {
        verif_keys_1000();
        let ord = document.querySelector('#ord').children[0].querySelector('input').checked;
        if (ord) {
            if (document.querySelector('#sub_sea') != null && document.querySelector('#sub_sea').value.length !== 0) {
                let cle = document.querySelector('#sub_sea').value;
                set_hover($("#submit_sea"), "Cliquez pour éxécuter l'algorithme de Recherche dichotomique ", false);
            } else {
                set_hover($("#submit_sea"), "Veuillez nous donner la clé d'abord  !!", false);
            }
            if (document.querySelector('#sub_ins') != null && document.querySelector('#sub_ins').value.length !== 0) {
                set_hover($("#submit_ins"), "Cliquez pour éxécuter l'algorithme de l'insertion dans TOF d'enregistrement définit par la cle : " + document.querySelector('#sub_ins').value, false);
            } else {
                set_hover($("#submit_ins"), "Veuillez nous donner la clé d'abord  !!", false);
            }
            if (document.querySelector('#sub_del') != null && document.querySelector('#sub_del').value.length !== 0) {
                set_hover($("#submit_del"), "Cliquez pour éxécuter l'algorithme de suppression dans TOF d'enregistrement définit par  la cle : " + document.querySelector('#sub_del').value, false);
            } else {
                set_hover($("#submit_del"), "Veuillez nous donner la clé d'abord  !!");
            }
            if (chargement_now() < entete_tab()[4]) {
                set_hover($("#reorg"), "La réorganisation est une algorithme trop couteuse , on ne doit l'éxécuter que si le facteur de chargement actuel ( " + chargement_now() + "%  ) dépasse la seuil de réorganisation ( " + entete_tab()[4] + "%  )", true);
            } else if (chargement_now() >= entete_tab()[4]) {
                set_hover($("#reorg"), "Votre fichier est trop chargé maintenant !! Cliquez pour le réorganiser et le donner plus d'espaces (zones) ", true);
            }
        } else if (!ord) {
            if (document.querySelector('#sub_sea') != null && document.querySelector('#sub_sea').value.length !== 0) {
                set_hover($("#submit_sea"), "Cliquez pour éxécuter l'algorithme de Recherche séquentielle ", false);
            } else {
                set_hover($("#submit_sea"), "Veuillez nous donner la clé d'abord  !!", false);
            }
            if (document.querySelector('#sub_ins') != null && document.querySelector('#sub_ins').value.length !== 0) {
                set_hover($("#submit_ins"), "Cliquez pour éxécuter l'algorithme de l'insertion dans T\\OF d'enregistrement définit par la cle : " + document.querySelector('#sub_ins').value, false);
            } else {
                set_hover($("#submit_ins"), "Veuillez nous donner la clé d'abord  !!", false);
            }
            if (document.querySelector('#sub_del') != null && document.querySelector('#sub_del').value.length !== 0) {
                set_hover($("#submit_del"), "Cliquez pour éxécuter l'algorithme de suppression dans T\\OF d'enregistrement définit par  la cle : " + document.querySelector('#sub_del').value, false);
            } else {
                set_hover($("#submit_del"), "Veuillez nous donner la clé d'abord  !!", false);
            }
            if (document.querySelector('#reorg') != null) {
                set_hover($("#reorg"), "La réoragnisation de notre TOF ( sera activé seulement si le chargement actuel >= seuil de reorganisation", true);
            }
        }
    }, 500);
    set_hover($("#create"), "Créer un nouveau Fichier");
    set_hover($("#search"), "Chercher un enregistrement définit par une clé donnée ");
    set_hover($("#insert"), "Inserer un enregistrement définit par une clé donnée ");
    set_hover($("#delete"), "Supprimer un enregistrement définit par une clé donnée ");
    // INITIALEMENT ON OUVRE LA FENETRE DE COMMENTAIRE ET ON AFFICHE LE MESSAGE : Vous n'avez maintenant aucun fichier à manipuler , on commance par la création ...
    ouvrir_fentre_comment();
    set_comment("Vous n'avez maintenant aucun fichier à manipuler , on commance par la création ...");
    // INITIALEMENT  ON LANCE LA PAGE D'AIDE EN LIGNE
    launch_aide();
});
//FIN DES INSTRUCTIONS à EXECUTER QUAND LA PAGE HTML DE FICHIER VUE COMME UN TABLEAU EST LANCE



// SI ON PASSE LE CURSEUR DE SOURIS SUR L'ELEMENT SELECTIONNE ( selector )  : UN MESSAGE ( text ) SERA AFFICHE
//DANS LA FENTRE DE COMMENTAIRE ( SI CLOSE = VRAI : ON FERME LA FENTRE APRES 3 SECONDES )
function set_hover(selector, text, close) {
    selector.hover(function() {
        if (get_comment().includes("fin") || get_comment().includes("Fin") || get_comment().includes("FIN") || get_comment().includes("corps") || get_comment().includes('Veuillez') || get_comment().length === 0 || get_comment() === '') {
            ouvrir_fentre_comment();
            set_comment(text);
        }
    }, function() {
        if (get_comment().includes(text)) {
            if (close) {
                fermer_fentre_comment();
            }
            nothing_comment();

        }
    });
}


// CONTROLE DES DIMENSIONS  DE NOS ENREGSITREMENTS DANS L'INTERFACE
function verif_keys_1000() {
    all_keys = document.querySelectorAll('.key');
    for (let i = 1; i < all_keys.length; i++) {
        if (Number.isNaN(Number(all_keys[i].innerText)) === false && Number(all_keys[i].innerText) > 999) {
            all_keys[i].style.padding = "1.3rem 1.05rem";
        } else if (all_keys[i].innerText.includes('?')) {
            all_keys[i].style.padding = "1.3rem 1.4rem";
        } else {
            all_keys[i].style.padding = "1.3rem";
        }
    }
}

//RETOURNER LA VALEUR DE FACTEUR DE CHARGEMENT ACTUEL DANS NOTRE FICHIER COURANT
function chargement_now() {
    let taille_total = entete_tab()[0] * entete_tab()[1];
    let taille_now = document.querySelectorAll('.ENR:not(.vide)').length;
    return Math.ceil((taille_now / taille_total) * 100);
}

// LA PROCEDURE SETUP DONNE A CHAQUE BOUTTON SA FONCTIONNALITE
function setup() {
    ins_lec_0();
    document.getElementById("ins_lec-hide").addEventListener('click', ouvrir_fermer_fentre_ins_lec);

    function ouvrir_fermer_fentre_ins_lec() {
        if (document.getElementById("ins_lec-Info").style.width == '0px') {
            for (let index = 0; index < 371; index++) {
                setTimeout(() => {
                    document.getElementById("ins_lec-Info").style.width = index + 'px';
                }, index * 0.9);
            }
        } else
            for (let index = 370; index > -1; index--) {
                setTimeout(() => {
                    document.getElementById("ins_lec-Info").style.width = index + 'px';
                }, (371 - index) * 0.9);
            }
        if (document.getElementById("entete-hide-img").className == "rotateLeft") {
            document.getElementById("entete-hide-img").className = "rotateRight";
        } else {
            document.getElementById("entete-hide-img").className = "rotateLeft";
        }
    }
    document.getElementById("title-Barbre").addEventListener('click', function() {
        ui.removeAll();
        $('#title-Barbre').addClass("visited");
        $('#title-Maire').removeClass("visited");

    });

    document.getElementById("scene").scrollLeft = 270;

    document.getElementById("title-Maire").addEventListener('click', function() {
        ui.removeAll();
        document.getElementById("scene").scrollLeft = 270;
        $('#title-Barbre').removeClass("visited");
        $('#title-Maire').addClass("visited");

    });
    document.getElementById("menu-hide-fichier").addEventListener('click', function() {
        if (document.getElementById("menu-fichier").style.width == '0px') {

            for (let index = 0; index < 151; index++) {
                setTimeout(() => {
                    document.getElementById("menu-fichier").style.width = index + 'px';
                }, index);
            };
            document.getElementById("insert").style.display = 'none';
            document.getElementById("create").style.display = 'none';
            document.getElementById("search").style.display = 'none';
            document.getElementById("delete").style.display = 'none';
            document.getElementById("reorg").style.display = 'none';
            document.getElementById("speedControler").style.display = 'none';

            $("#create").fadeIn(250);
            $("#search").fadeIn(500);
            $("#insert").fadeIn(750);
            $("#delete").fadeIn(1000);
            $("#reorg").fadeIn(1250);
            $("#speedControler").fadeIn(1250);

        } else {
            for (let index = 150; index > -1; index--) {
                setTimeout(() => {
                    document.getElementById("menu-fichier").style.width = index + 'px';
                }, (151 - index) * 0.9);
                $("#create-action").fadeOut(250);
                $("#search-action").fadeOut(250);
                $("#delete-action").fadeOut(250);
                $("#insert-action").fadeOut(250);
                $("#speedControler").fadeOut(250);
            }
        }

        if (document.getElementById("menu-hide-img").className == "rotateLeft") {
            document.getElementById("menu-hide-img").className = "rotateRight";
        } else {
            document.getElementById("menu-hide-img").className = "rotateLeft";
        }




    });
    document.getElementById("code-hide-fichier").addEventListener('click', function() {

        if (document.getElementById("code-fichier").style.width == '0px') {
            for (let index = 0; index < 421; index++) {

                setTimeout(() => {
                    document.getElementById("code-fichier").style.width = index + 'px';
                }, index * 2);

            }

            document.getElementById("code-hide-img").className = "rotateLeft";
        } else {
            for (let index = 420; index > -1; index--) {
                setTimeout(() => {
                    document.getElementById("code-fichier").style.width = index + 'px';
                }, (420 - index));
            }
            document.getElementById("code-hide-img").className = "rotateRight";
        }


    });
    document.getElementById("instruction-hide-fichier").addEventListener('click', function() {
        if (document.getElementById("instruction-fichier").style.width == '0px') {} else {}
        if (document.getElementById("instruction-hide-img").className == "rotateLeft") {
            document.getElementById("instruction-hide-img").className = "rotateRight";
            anime({
                targets: document.getElementById("instruction-fichier"),
                width: '0px',
                easing: 'easeInOutQuad',
            });

        } else {
            document.getElementById("instruction-hide-img").className = "rotateLeft";
            anime({
                targets: document.getElementById("instruction-fichier"),
                width: '420px',
                easing: 'easeInOutQuad',
            });

        }
    });

    document.getElementById("insert").addEventListener('click', function() {
        if (!document.querySelector('#insert').classList.contains('interdit')) {

            document.getElementById("code-fichier").style.width = '420px';
            document.getElementById("code-hide-img").className = "rotateLeft";
            document.getElementById("code-fichier").innerHTML = algo_insertion;
            if (document.getElementById("insert-action").style.display == 'none') {
                document.querySelector('.create').style.display = 'none';
                document.querySelector('.search').style.display = 'none';
                document.querySelector('.delete').style.display = 'none';
                $("#insert-action").fadeIn()
            } else $("#insert-action").fadeOut()

        }
    });
    document.getElementById("reorg").addEventListener('click', function(e) {
        if (!document.querySelector('#reorg').classList.contains('interdit')) {
            reorg(e)
        }
    });
    document.getElementById("create").addEventListener('click', function() {
        if (!document.querySelector('#create').classList.contains('interdit')) {
            ouvrir_fentre_alg();
            document.getElementById("code-fichier").innerHTML = algo_creation;
            animer_alg([1, 2, 3, 4]);
            $('#cote-bas').fadeOut(500);
            $('#cote_gauche').fadeOut(500);
            $('#sub_nb_bloc').fadeIn(1000);
            $('#sub_nb_enreg_par_bloc').fadeIn(1000);
            $('#submit_nb_enreg_par_bloc').fadeIn(1000);
            $('#submit_nb_bloc').click(submit_nb_bloc);
            $('#submit_nb_value').click(submit_nb_value);
            $('#submit_nb_value').hover(function() {
                let ord = document.querySelector('#ord').children[0].querySelector('input').checked;
                if (ord) {
                    animer_alg([8]);
                    non_animer_alg([0, 1, 2, 3, 4, 5, 6, 7, 9]);
                } else {
                    animer_alg([9]);
                    non_animer_alg([0, 1, 2, 3, 4, 5, 6, 7, 8]);
                }
            }, function() {
                let ord = document.querySelector('#ord').children[0].querySelector('input').checked;
                if (ord && document.querySelector('#submit_nb_value').style.display !== "none") {
                    non_animer_alg([8]);
                    animer_alg([4, 5, 6, 7]);
                } else {
                    non_animer_alg([9]);

                }
            });
            $('#submit_sea').hover(function() {
                let ord = document.querySelector('#ord').children[0].querySelector('input').checked;
                if (ord) {
                    animer_alg([3]);
                } else {
                    animer_alg([5]);
                }
            }, function() {
                let ord = document.querySelector('#ord').children[0].querySelector('input').checked;
                if (ord && document.querySelector('#submit_nb_value').style.display !== "none") {
                    non_animer_alg([3]);
                } else {
                    non_animer_alg([5]);
                }
            });
            let nb_bloc = Number(document.querySelector('#sub_nb_bloc').value);
            let nb_enreg = Number(document.querySelector('#submit_nb_enreg_par_bloc').value);
            document.querySelector('#submit_nb_enreg_par_bloc').addEventListener('click', function(e) {
                let nb_bloc = Math.floor(Number(document.querySelector('#sub_nb_bloc').value));
                let nb_enreg = Math.floor(Number(document.querySelector('#sub_nb_enreg_par_bloc').value));
                if (nb_bloc <= 10 && nb_enreg <= 8 && nb_bloc > 0 && nb_enreg > 0) {
                    submit_nb_enreg_par_bloc(e);
                } else {
                    set_comment("Erreur ");
                    if (nb_bloc <= 0 || nb_enreg <= 0) {
                        showalert("On n'accepte pas les valeurs nulles/négatives !!!", "#ff0000");
                    } else if (nb_bloc > 10) {
                        showalert("Vous ne pouvez pas générer plus de 10 blocs !!", "#ff0000");
                    } else if (nb_enreg > 8) {
                        showalert("Vous ne pouvez pas avoir plus de 8 enregsitremets dans une seule zone !!", "#ff0000");
                    }
                }

            });
            $('input:radio[name="options"]').change(
                function() {
                    if (this.checked && this.id === 'yes') {
                        $('#sub_seuil_initial').fadeIn(250);
                        $('#sub_seuil_org').fadeIn(250);
                        animer_alg([4, 5, 6, 7]);
                    } else if (this.checked && this.id === 'no') {
                        $('#sub_seuil_initial').fadeOut(250);
                        $('#sub_seuil_org').fadeOut(250);
                        non_animer_alg([4, 5, 6, 7]);
                    }
                });
            let width_now = 0;
        }

    });


    document.getElementById("search").addEventListener('click', function() {
        let ord = document.querySelector('#ord').children[0].querySelector('input').checked;

        if (!document.querySelector("#search").classList.contains('interdit')) {
            set_comment("Le corps de l'algorithme de Recherche ");
            ouvrir_fentre_comment();

            document.getElementById("code-fichier").style.width = '420px';
            document.getElementById("code-hide-img").className = "rotateLeft";
            document.getElementById("code-fichier").innerHTML = algo_recherche;
            animer_alg([1]);
            if (document.getElementById("search-action").style.display == 'none') {
                document.querySelector('.insert').style.display = 'none';
                document.querySelector('.create').style.display = 'none';
                document.querySelector('.delete').style.display = 'none';
                $("#search-action").fadeIn()
            } else $("#search-action").fadeOut()

        }
    });
    document.getElementById("delete").addEventListener('click', function() {
        if (!document.querySelector("#search").classList.contains('interdit')) {

            document.getElementById("code-fichier").style.width = '420px';
            document.getElementById("code-hide-img").className = "rotateLeft";
            document.getElementById("code-fichier").innerHTML = algo_suppression;
            if (document.getElementById("delete-action").style.display == 'none') {
                document.querySelector('.insert').style.display = 'none';
                document.querySelector('.create').style.display = 'none';
                document.querySelector('.search').style.display = 'none';
                $("#delete-action").fadeIn()

            } else $("#delete-action").fadeOut()
        }
    });

    document.querySelector('#insert').addEventListener('mouseover', function(e) {
        if (!document.querySelector('#insert').classList.contains('interdit')) {
            e.target.style.backgroundColor = 'black';
        }
    });
    document.querySelector('#insert').addEventListener('mouseout', function(e) {
        e.target.style.backgroundColor = 'lightseagreen';
    });
    document.querySelector('#reorg').addEventListener('mouseover', function(e) {
        if (!document.querySelector('#reorg').classList.contains('interdit')) {
            e.target.style.backgroundColor = 'black';
        }
    });
    document.querySelector('#reorg').addEventListener('mouseout', function(e) {
        e.target.style.backgroundColor = 'lightseagreen';
    });
    document.querySelector('#create').addEventListener('mouseover', function(e) {
        if (!document.querySelector('#create').classList.contains('interdit')) {
            e.target.style.backgroundColor = 'black';
        }
    });
    document.querySelector('#create').addEventListener('mouseout', function(e) {
        e.target.style.backgroundColor = 'lightseagreen';
    });
    document.querySelector('#search').addEventListener('mouseover', function(e) {
        if (!document.querySelector('#search').classList.contains('interdit')) {
            e.target.style.backgroundColor = 'black';
        }

    });
    document.querySelector('#search').addEventListener('mouseout', function(e) {
        e.target.style.backgroundColor = 'lightseagreen';
    });
    document.querySelector('#delete').addEventListener('mouseover', function(e) {
        if (!document.querySelector('#delete').classList.contains('interdit')) {
            e.target.style.backgroundColor = 'black';
        }
    });
    document.querySelector('#delete').addEventListener('mouseout', function(e) {
        e.target.style.backgroundColor = 'lightseagreen';
    });


    let ty = document.getElementById('submit_ins');
    ty.addEventListener('click', function(e) {
        if (document.querySelector("#sub_ins").value.length !== 0) {
            $('#insert-action').fadeOut(500);
            inserer(e);
        } else {
            set_comment("Veuillez nous donner la clé d'abord !!!");
        }
    });
    document.getElementById('submit_sea').addEventListener('click', function(e) {
        if (document.querySelector("#sub_sea").value.length !== 0) {
            $('#search-action').fadeOut(500);
            recherche(e);
        } else {
            set_comment("Veuillez nous donner la clé d'abord !!!");
        }
    });
    document.getElementById('submit_del').addEventListener('click', function(e) {
        if (document.querySelector("#sub_del").value.length !== 0) {
            $('#delete-action').fadeOut(500);
            supprimer(e);
        } else {
            set_comment("Veuillez nous donner la clé d'abord !!!");
        }
    });
    $('#submit_del').hover(function() {
        animer_alg([1]);
    }, function() {
        non_animer_alg([1]);
    });
    $('#submit_ins').hover(function() {
        animer_alg([1]);
    }, function() {
        non_animer_alg([1]);
    });

    const ui = new UI();
    let temp_prec = 0;
    let stackTime = [];
    let stackValue = [];
    let temp = 0;
    stackTime.push(temp_prec);
    for (let i = 0; i < 8; i++) {
        let valeur = Math.trunc(Math.random() * 999);
    }

}

// l'OBJET UI QUI CONTROLE NOTRE INTERFACE GRAPHIQUE
function UI() {
    this.temp = 0;
}

// LA FONCTIONNALITE DE BOUTTON : REORGANISATION
function reorg(e) {
    ins_lec_0();
    ouvrir_fentre_ins_lec();
    ouvrir_fentre_comment();
    let nbr_animation = 1;
    if (chargement_now() >= entete_tab()[4]) {
        let zones = document.querySelectorAll('.Zone');
        for (let i = 0; i < zones.length; i++) {
            setTimeout(() => {
                set_comment("Récupération de données ... ");
                $(zones[i].parentElement).fadeOut(500, function() {
                    $(this).remove();
                });
                inc_lec();
            }, nbr_animation * 1000);
            nbr_animation++;
        }
        let old_key_zones = [];
        zones.forEach((zone_now, num_bloc) => {
            let enrs = zone_now.querySelectorAll('.ENR');
            enrs.forEach((enr_now, indice_enr) => {
                let key_now = enr_now.querySelector('.key').innerText;
                if (!key_now.includes('?')) {
                    old_key_zones.push(Number(key_now));
                }
            });
        });
        let key_prec = 100;
        let nb_rempli_total = old_key_zones.length;
        let combien_zone = Math.floor(nb_rempli_total / ((entete_tab()[3] / 100) * entete_tab()[1]));
        let chaque_zone_contient = Math.floor(nb_rempli_total / combien_zone);
        let nb_rempli = chaque_zone_contient;
        let fichier = document.querySelector('.Fichier');
        let cpt_keys = 0;
        let mod = nb_rempli_total - (chaque_zone_contient * combien_zone);
        for (let i = 0; i < combien_zone; i++) {
            let bloc = document.createElement('ul');
            bloc.className = "Zone";
            let org_seuil = Number(document.querySelector('#sub_seuil_org').value);
            let enreg;
            for (let j = 0; j < entete_tab()[1]; j++) {
                if (j < nb_rempli) {
                    enreg = enr(3, key_prec, true);
                    enreg.querySelector('.key').innerText = old_key_zones[cpt_keys];
                    cpt_keys++;
                    enreg.style.display = "";
                    key_prec = Number(enreg.querySelector('.key').innerText);
                } else if (j === nb_rempli && mod > 0) {
                    enreg = enr(3, key_prec, true);
                    enreg.querySelector('.key').innerText = old_key_zones[cpt_keys];
                    cpt_keys++;
                    enreg.style.display = "";
                    key_prec = Number(enreg.querySelector('.key').innerText);
                    mod--;
                } else {
                    enreg = enr(3, key_prec, true, false);
                    enreg.style.display = "";
                }

                let temp_enreg = document.createElement('li');
                temp_enreg.appendChild(enreg);
                bloc.append(temp_enreg);
            }
            let temp_bloc = document.createElement('li');
            temp_bloc.append(bloc);
            let nb = creer_nb(i, nb_rempli);
            temp_bloc.append(nb);
            temp_bloc.style.display = "none";
            fichier.append(temp_bloc);
        }
        nbr_animation += 2;
        for (let i = 0; i < combien_zone; i++) {
            setTimeout(() => {
                set_comment("Réinsertion apres k'injection de nouvelles zones vides ... ");
                let zones = document.querySelectorAll('.Zone');
                let ord = document.querySelector('#ord').children[0].querySelector('input').checked;
                $(zones[i].parentElement).fadeIn(500);
                inc_ins();

            }, nbr_animation * 1000);
            nbr_animation++;
        }
        setTimeout(() => {
            modifier_entete(0, combien_zone);
            modifier_entete(2, chaque_zone_contient);
            set_comment("La Reorganisation est terminée");
            setTimeout(() => {
                set_comment("FIN ...");
                setTimeout(() => {
                    fermer_fentre_comment();
                }, 300);
            }, 3000);
        }, nbr_animation * 1000)
    };
}


// ANIMER LES NUMEROS DE LIGNES SELECTIONNEES D'ALGORITHME AFFICHE DANS LA FENETRE D'ALGORITHME  ( lignes : tableau d'entiers ) ( FOND NOIR )
function animer_alg(lignes) {
    let algos = document.querySelector('#code-fichier').querySelectorAll('p');
    for (let i = 0; i < lignes.length; i++) {
        let ligne = lignes[i];
        algos[ligne].classList.add("ligneExecute");
    }
}

// DESACTIVER L'ANIMATIONS DANS  LES NUMEROS DE LIGNES SELECTIONNEES D'ALGORITHME AFFICHE DANS LA FENETRE D'ALGORITHME  ( lignes : tableau d'entiers ) ( FOND ORANGE )
function non_animer_alg(lignes) {
    let algos = document.querySelector('#code-fichier').querySelectorAll('p');
    for (let i = 0; i < lignes.length; i++) {
        let ligne = lignes[i];
        algos[ligne].classList.remove("ligneExecute");
    }
}

// LA FONCTIONNALITE DE PREMIER BOUTTION 'soummettre' QUI S'AFFICHE LORSQU'ON FAIT L'OPERATION CREATION
function submit_nb_bloc(e) {
    non_animer_alg([1, 2]);
    animer_alg([3, 4]);
    let classparent = e.target.parentElement.className;
    $(e.target).parent().prepend(yay);
    let values = document.querySelector('#sub_nb_bloc').value;
    if (values < 10 && values > 0) {
        $(e.target).fadeOut(250);
        $(e.target).parent().children('#sub_nb_bloc').fadeOut(250);
        setTimeout((target = e.target) => {
            $(target).parent().children('#submit_nb_enreg_par_bloc').fadeIn(250);
            $(target).parent().children('#sub_nb_enreg_par_bloc').fadeIn(250);
        }, 250);

    } else {}




}

function submit_nb_value(e) {
    ouvrir_fentre_ins_lec();

    let ord = e.target.parentElement.querySelector('#ord').children[0].querySelector('input').checked;

    non_animer_alg([0, 1, 2, 3, 4, 5, 6, 8, 9]);
    ouvrir_alg(algo_creation);
    if (ord) {
        animer_alg([7]);
    } else {
        animer_alg([6]);
    }
    let par = e.target.parentElement;
    let classparent = e.target.parentElement.className;
    let yay = document.createElement('p');
    yay.id = 'yay';
    let key_prec = 0;
    $(e.target).parent().prepend(yay);
    yay.style.display = "none";
    let nb_bloc = document.querySelector('#sub_nb_bloc').value;
    let nb_enreg_par_bloc = document.querySelector('#sub_nb_enreg_par_bloc').value;
    let init_seuil = Number(document.querySelector('#sub_seuil_initial').value);
    let org_seuil = document.querySelector('#sub_seuil_org').value;

    if (!ord || (ord && init_seuil <= 90 && org_seuil <= 90 && org_seuil > init_seuil && org_seuil - init_seuil >= 10)) {
        if (ord) {
            set_comment("la création d'un Fichier ordonnée qui a comme une taille initial " + nb_bloc + "X" + nb_enreg_par_bloc + " enregsitrements rempli à " + init_seuil + "% est en cours ...");
        } else {
            set_comment("la création d'un Fichier Non ordonnée qui a comme une taille initial " + nb_bloc + "X" + nb_enreg_par_bloc + " est en cours ...");
        }
        creerFichier(e, Math.floor(nb_bloc), Math.floor(nb_enreg_par_bloc), 3, ord);
        $('#ord').fadeOut(250);
        $('#sub_nb_value').fadeOut(250);
        $(e.target).fadeOut(250);
        $('#sub_seuil_initial').fadeOut(250);
        $('#sub_seuil_org').fadeOut(250);
    } else {
        set_comment("Erreur!!");
        if (org_seuil - init_seuil <= 10) {
            showalert("Le facteur de chargement initial doit etre inférieur à le seuil de réorganisation par 10%", "#ff0000")
        } else if (org_seuil > 90) {
            showalert("le seuil de réorganisation doit étre inférieur à  le facteur de chargement actuel par 10% ", "#ff0000");
        }
    }

}

function submit_nb_enreg_par_bloc(e) {
    non_animer_alg([1, 2, 3, 4]);
    animer_alg([5]);
    setTimeout(() => {
        non_animer_alg([3, 4]);

        document.getElementById("code-fichier").innerHTML = algo_recuperer_ordonnance;
        animer_alg([1, 2]);
    }, 1000);
    let classparent = e.target.parentElement.className;
    let yay = document.createElement('p');
    yay.id = 'yay';
    yay.style.display = 'none';
    $(e.target).parent().prepend(yay);
    let values = Math.floor(document.querySelector('#sub_nb_enreg_par_bloc').value);
    $(e.target).fadeOut(250);
    $(e.target).parent().children('#sub_nb_enreg_par_bloc').fadeOut(250);
    $(e.target).parent().children('#sub_nb_bloc').fadeOut(250);
    setTimeout((target = e.target) => {
        $(target).parent().children('#submit_nb_value').fadeIn(250);
        $(target).parent().children('#sub_nb_value').fadeIn(250);
        $(target).parent().children('#ord').fadeIn(250).css({ 'display': 'flex' });
    }, 250);
}


// CREER UN FICHIER SOUS FORME D'UN TABLEAU QUI CONTIENT : 'nb_bloc' ZONES , DANS CHAQUE ZONE : 'nb-enreg_par_bloc' ENREGSITREMNTS MAXIMUM
// DANS CHAQUE ENREGSITREMENTS : 'nb_value' CHAMPS  , SI ORD= VRAI  : LE FICHIER EST ORDONNEE (TOF) SINON : LE FICHIER EST NON ORDONNE (T~OF)
function creerFichier(e, nb_bloc, nb_enreg_par_bloc, nb_value, ord) {
    setTimeout(() => {

        modifier_entete(0, nb_bloc);
    }, 1000);
    let init_seuil = Number(document.querySelector('#sub_seuil_initial').value);
    let fichier = document.querySelector('.Fichier');
    let key_prec = 0;
    let input_nb_bloc = document.querySelector('#sub_nb_bloc').value;
    let input_nb_enreg = document.querySelector('#sub_nb_enreg_par_bloc').value;
    let entete;
    inc_ins();
    if (!ord) {
        inc_ins();
        entete = creer_entete(input_nb_bloc, input_nb_enreg, input_nb_enreg, ord);
    } else {
        entete = creer_entete(input_nb_bloc, input_nb_enreg, Math.ceil((init_seuil / 100) * input_nb_enreg), ord);
    }
    let nb_rempli = 0;
    let li_entete = document.createElement('li');
    li_entete.append(entete);
    let entete_items = entete.querySelectorAll('.item');
    set_hover($(entete_items[0]), "L'Entete de notre Fichier");
    set_hover($(entete_items[1]), "Nombre de zones ");
    set_hover($(entete_items[2]), "La Taille maximal d'une zone:");
    set_hover($(entete_items[3]), "La Taille actuelle de derniere zone");
    if (ord) {
        set_hover($(entete_items[4]), "Le facteur de chargement initial");
        set_hover($(entete_items[5]), "Le seuil de réorganisation")
    }

    setTimeout(() => {
        $(entete).fadeIn(1000);
        animer_alg([8]);
        non_animer_alg([0, 1, 2, 3, 4, 5, 6, 7, 9]);
        setTimeout(() => {

            ouvrir_alg(algo_creer_fichier);
            animer_alg([1]);
            for (let i = 0; i < nb_bloc; i++) {
                setTimeout(() => {
                    let zones = document.querySelector('.Fichier').querySelectorAll('.Zone');
                    let ord = document.querySelector('#ord').children[0].querySelector('input').checked;
                    $(zones[i].parentElement).fadeIn(1000);
                    inc_ins();
                    if (ord && i !== nb_bloc - 1) {
                        non_animer_alg([2, 4]);
                        animer_alg([2, 4]);
                    } else if (!ord && i !== nb_bloc - 1) {
                        non_animer_alg([3, 4]);
                        animer_alg([3, 4]);
                    } else {
                        non_animer_alg([0, 1, 2, 3, 4]);
                        set_comment("FIN !!!!");
                        animer_alg([5]);
                        setTimeout(() => {
                            non_animer_alg([5]);
                            fermer_fentre_comment();
                            nothing_comment();
                        }, 300);
                    }
                }, 1000 * i);
            }
            setTimeout(() => {
                document.querySelectorAll('.selection:not(#create)').forEach((elem) => {
                    elem.classList.remove('interdit');
                });
                document.querySelector('#create').classList.add('interdit');
            }, nb_bloc * 1000);
        }, 1000);
    }, 1000);

    fichier.append(li_entete);
    let nb_rempli_total = Math.ceil((entete_tab()[0] * entete_tab()[1]) * (init_seuil / 100));
    nb_rempli = Math.floor(nb_rempli_total / entete_tab()[0]);
    let mod = nb_rempli_total % entete_tab()[0];
    for (let i = 0; i < nb_bloc; i++) {
        let bloc = document.createElement('ul');
        bloc.className = "Zone";
        if (!ord) {
            for (let j = 0; j < nb_enreg_par_bloc; j++) {
                let enreg = enr(3, key_prec, ord);
                enreg.style.display = "";
                key_prec = Number(enreg.querySelector('.key').innerText);
                let temp_enreg = document.createElement('li');
                temp_enreg.appendChild(enreg);
                bloc.append(temp_enreg);
            }
        } else {
            let org_seuil = Number(document.querySelector('#sub_seuil_org').value);
            let enreg;
            for (let j = 0; j < nb_enreg_par_bloc; j++) {
                if (j < nb_rempli) {
                    enreg = enr(3, key_prec, ord);
                    enreg.style.display = "";
                    key_prec = Number(enreg.querySelector('.key').innerText);
                } else if (j === nb_rempli && mod > 0) {
                    enreg = enr(3, key_prec, ord);
                    enreg.style.display = "";
                    key_prec = Number(enreg.querySelector('.key').innerText);
                    mod--;
                } else {
                    enreg = enr(3, key_prec, ord, false);
                    enreg.style.display = "";
                }

                let temp_enreg = document.createElement('li');
                temp_enreg.appendChild(enreg);
                bloc.append(temp_enreg);
            }
        }
        let temp_bloc = document.createElement('li');
        temp_bloc.append(bloc);
        let nb = creer_nb(i, nb_rempli);
        temp_bloc.append(nb);
        temp_bloc.style.display = "none";
        fichier.append(temp_bloc);
    }
    document.querySelector('#fichier').appendChild(fichier);
    modifier_entete(2, nb_rempli);
    setTimeout(() => {
        let tooltip_targets = document.querySelector("#ENR_entete").querySelectorAll('.item');
        for (let i = 0; i < tooltip_targets.length; i++) {
            $(tooltip_targets[i]).tooltip({
                show: { effect: "fadeIn", duration: 500 },
                hide: { effect: "fadeOut", duration: 500 },
            });
        }
    }, 1000);

}

// SI REMPLIR = VRAI : CREER UN ENREGSITREMENT DEFINIT PAR UNE CLE ALEATOIRE REMPLIS PAR LE TABLEAU DE VALEURS : 'values'
// SI REMPLIR = FAUX : CREER UN ENREGSITREMENT VIDE
function enr(values, key_prec, ord, ...remplir) {
    let enreg = document.createElement('ul');
    enreg.style.display = "none";
    if (remplir.length === 0)
        enreg.className = "ENR";
    else
        enreg.className = "ENR vide";
    if (remplir.length === 0) {
        let li = document.createElement('li');
        li.className = "item key";
        if (!ord) {
            li.innerText = Math.ceil(Math.random() * 900 + 100).toString();
        } else {
            li.innerText = Math.ceil((key_prec + Math.random() * 300)).toString();
        }
        li.style.borderRightStyle = "dashed";
        enreg.appendChild(li);
        let list_3values = document.createElement('ul');
        list_3values.className = 'list-3values';
        let cpt = 0;
        while (cpt < values) {
            let li = document.createElement('li');
            li.className = "item";
            li.innerText = "champ" + (cpt + 1);
            li.style.borderLeftWidth = "0";
            if (cpt !== values - 1) { li.style.borderRightStyle = "dashed"; }
            list_3values.appendChild(li);
            cpt += 1;
        }
        let mere_3values = document.createElement('li');
        mere_3values.appendChild(list_3values);
        enreg.appendChild(mere_3values);
    } else {
        enreg.innerHTML = `
                <li class="item key" style="border-right-style: dashed;">???</li>
                <li>
                    <ul class="list-3values">
                        <li class="item" style="border-left-width: 0px; border-right-style: dashed;">???????</li>
                        <li class="item" style="border-left-width: 0px; border-right-style: dashed;">???????</li>
                        <li class="item" style="border-left-width: 0px;">???????</li>
                    </ul>
                </li>`

    }
    return enreg;
}

// CREER UN ENREGSITREMENT DEFINIT PAR LA CLE : 'key '
function enr_const(key) {
    let enreg = document.createElement('ul');
    if (key !== -1)
        enreg.className = "ENR";
    else
        enreg.className = "ENR vide";
    if (key !== -1) {
        let li = document.createElement('li');
        li.className = "item key";
        li.innerText = key;
        li.style.borderRightStyle = "dashed";
        enreg.appendChild(li);
        let list_3values = document.createElement('ul');
        list_3values.className = 'list-3values';
        let cpt = 0;
        while (cpt < 3) {
            let li = document.createElement('li');
            li.className = "item";
            li.innerText = "champ" + (cpt + 1);
            li.style.borderLeftWidth = "0";
            if (cpt !== 2) { li.style.borderRightStyle = "dashed"; }
            list_3values.appendChild(li);
            cpt += 1;
        }
        let mere_3values = document.createElement('li');
        mere_3values.appendChild(list_3values);
        enreg.appendChild(mere_3values);
    } else {
        enreg.innerHTML = `
                <li class="item key" style="border-right-style: dashed;">???</li>
                <li>
                    <ul class="list-3values">
                        <li class="item" style="border-left-width: 0px; border-right-style: dashed;">???????</li>
                        <li class="item" style="border-left-width: 0px; border-right-style: dashed;">???????</li>
                        <li class="item" style="border-left-width: 0px;">???????</li>
                    </ul>
                </li>`

    }
    return enreg;
}

//LA FONCTIOANLLITE DE BOUTTON SUPPRIMER ( LA SUPPPRESSION )
function supprimer(e) {
    document.querySelectorAll('.selection').forEach((elem) => {
        elem.classList.add('interdit');
    });
    let vitesse = Number(document.getElementById("myRange").value);
    let ord = document.querySelector('#ord').children[0].querySelector('input').checked;
    let nbr_animation;
    let trouv;
    if (!ord) {
        let info = recherche(e);
        nbr_animation = info[0];
        let anime_rech = 0;
        let indice_enr = info[1];
        trouv = info[2];
        let indice_bloc = info[3] - 2;
        let interv = setInterval(() => {
            if (anime_rech <= info[0]) {
                setTimeout(() => {
                    animer_alg([1]);
                }, anime_rech * vitesse);
                anime_rech++;
            } else {
                setTimeout(() => {
                    non_animer_alg([1]);
                }, anime_rech * vitesse);
                clearInterval(interv);
            }
        }, 10);
        if (!trouv) {
            let cle = Number(e.target.parentElement.parentElement.querySelector('#sub_del').value);
            setTimeout(() => {
                document.querySelectorAll('.selection:not(#create)').forEach((elem) => {
                    elem.classList.remove('interdit');
                });
            }, nbr_animation * vitesse);
        }
        if (trouv) {
            setTimeout(() => {
                set_comment(" La suppression est en cours .... ( par écrasement )");
            }, vitesse * nbr_animation);
            let indice = indice_bloc * entete_tab()[1] + indice_enr;
            let indice_last = (entete_tab()[0] - 1) * entete_tab()[1] + entete_tab()[2] - 1;
            let enr_supp = document.querySelectorAll('.ENR')[indice];
            let coord_supp = get_x_y(enr_supp);
            let enr_last = document.querySelectorAll('.ENR')[indice_last];
            let coord_last = get_x_y(enr_last);
            let diff = (entete_tab()[1] - entete_tab()[2]);
            let diff_enr = -(entete_tab()[2] - indice_enr - 1);
            if (entete_tab()[0] <= 5) {
                setTimeout(() => {
                    inc_ins();
                    if (indice_bloc !== entete_tab()[0] - 1) {
                        inc_lec();
                    }
                    if (Math.abs(coord_supp.x - coord_last.x) < 10 && Math.abs(diff_enr * enr_last.offsetHeight) > 10) {
                        anime({
                            targets: enr_last,
                            keyframes: [
                                { translateY: diff_enr * enr_last.offsetHeight }
                            ],
                            duration: vitesse * 6
                        });
                    } else if (Math.abs(diff_enr * enr_last.offsetHeight) <= 10) {
                        anime({
                            targets: enr_last,
                            opacity: "0",
                            easing: 'steps(4)',
                            duration: vitesse * 6
                        });
                    } else {
                        anime({
                            targets: enr_last,
                            keyframes: [
                                { translateY: (diff + 1) * enr_last.offsetHeight },
                                { translateX: coord_supp.x - coord_last.x },
                                { translateY: diff_enr * enr_last.offsetHeight }
                            ],
                            duration: vitesse * 6
                        });

                    }

                }, nbr_animation * vitesse);
                nbr_animation += 6;
            } else {
                setTimeout(() => {
                    inc_ins();
                    if (indice_bloc !== entete_tab()[0] - 1) {
                        inc_lec();
                    }
                    anime({
                        targets: enr_last,
                        keyframes: [
                            { translateX: coord_supp.x - coord_last.x },
                            { translateY: coord_supp.y - coord_last.y }

                        ],
                        duration: vitesse * 4
                    });
                }, nbr_animation * vitesse);
                nbr_animation += 4;
            }
            setTimeout(() => {
                enr_supp.querySelector('.key').innerText = enr_last.querySelector('.key').innerText;
                let father_zone = enr_last.parentNode.parentNode;
                father_zone.removeChild(enr_last.parentNode);
                modifier_entete(2, entete_tab()[2] - 1);
                modifier_nb(entete_tab()[0] - 1, entete_tab()[2]);
                if (entete_tab()[2] === entete_tab()[1]) {
                    father_zone.parentNode.parentNode.removeChild(father_zone.parentNode);
                }
            }, nbr_animation * vitesse);
            nbr_animation += 1;

        }
        setTimeout(() => {
            set_comment("FIN ....");
            setTimeout(() => {
                fermer_fentre_comment();
            }, 300);
            document.querySelectorAll('.selection:not(#create)').forEach((elem) => {
                elem.classList.remove('interdit');
            });
        }, nbr_animation * vitesse);
    } else {
        let info = recherche(e);
        nbr_animation = info[0];
        let anime_rech = 0;
        let interv = setInterval(() => {
            if (anime_rech <= info[0]) {
                setTimeout(() => {
                    animer_alg([1]);
                }, anime_rech * vitesse);
                anime_rech++;
            } else {
                setTimeout(() => {
                    non_animer_alg([1]);
                }, anime_rech * vitesse);
                clearInterval(interv);
            }
        }, 10);
        let indice_enr = info[1];
        trouv = info[2];
        let indice_bloc = info[3];
        if (trouv) {
            let indice = indice_bloc * entete_tab()[1] + indice_enr;
            let enr_supp = document.querySelectorAll('.ENR')[indice];
            let items_supp = enr_supp.querySelectorAll('.item');
            for (let i = 0; i < items_supp.length; i++) {
                items_supp[i].classList.add("supp");
            }
            setTimeout(() => {
                inc_ins();
                let all_items = document.querySelectorAll('.item:not(.key):not(.supp)');
                let keys = document.querySelectorAll('.key:not(.supp)');
                recuperer_couleurs(all_items, keys);
                let supps = document.querySelectorAll('.supp');
                set_comment("La suppression est en cours ... (Logique)  ");
                setTimeout(() => {
                    set_comment("FIN ....");
                    setTimeout(() => {
                        fermer_fentre_comment();
                    }, 300);
                }, 1000);
                anime({
                    targets: Array.from(supps),
                    backgroundColor: "#ff0000",
                    duration: vitesse * 2,
                });
            }, nbr_animation * vitesse);
            nbr_animation++;

        }
    }
    setTimeout(() => {
        let all_items = document.querySelectorAll('.item:not(.key):not(.supp)');
        let keys = document.querySelectorAll('.key:not(.supp)');
        recuperer_couleurs(all_items, keys);
    }, nbr_animation * vitesse);
    nbr_animation++;
    if (!trouv) {
        setTimeout(() => {
            non_animer_alg([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
            animer_alg([3, 4]);
            showalert("l'enregistremnt n'existe pas !! rien à supprimer !! ", "#ff0000");
            setTimeout(() => {
                non_animer_alg([3, 4]);
            }, 3000);
        }, nbr_animation * vitesse);
    }
    setTimeout(() => {
        if (!trouv) {
            ouvrir_fentre_comment();
            set_comment("Rien à supprimer !");
            setTimeout(() => {
                set_comment("FIN ...");
                setTimeout(() => {
                    fermer_fentre_comment();
                }, 300);
            }, 3000);
        }

        document.querySelectorAll('.selection:not(#create)').forEach((elem) => {
            elem.classList.remove('interdit');
        });
    }, nbr_animation * vitesse);
}

//CREER LES FENETRES ROUGES QUI S'AFFICHENT LORSQU'ON PASSE LE CURSEUR DE SOURIS DANS UNE ZONE
//FENETRE ROUGE : AFFICHE LA TAILLE ACTUELLE DE ZONE
function creer_nb(num_zone, val) {
    let nb_bloc = document.createElement('div');
    nb_bloc.style.display = "none";
    nb_bloc.className = 'NB_enrs';
    nb_bloc.innerHTML = `<span>Tbloc[${num_zone}].NB= <i class="NB">${val}</i></span>`;
    return nb_bloc;
}

//ECRASER LA VALEUR de 'indice'eme FENETRE QUI S'AFFICHE AU DESSOUS DE 'indice'eme ZONE PAR LA VALEUR : 'val'
function modifier_nb(indice, val) {
    let nb = document.querySelectorAll('.NB');
    nb[indice].innerText = val.toString();
}

// RETOURNER UN TABLEAU QUI VA CONTENIR TOUS LES VALEURS
function nbs() {
    let nbs = [];
    let nb = document.querySelectorAll('.NB');
    for (let i = 0; i < nb.length; i++) {
        nbs.push(Number(nb[i].innerText));
    }
    return nbs;
}

// CREER L'ENTETE DE NOTRE FICHIER
function creer_entete(num1, num2, num3, ord) {
    let init_seuil = document.querySelector('#sub_seuil_initial').value;
    let org_seuil = document.querySelector('#sub_seuil_org').value;
    let entete = document.createElement('ul');
    entete.id = "Entete";
    entete.style.display = 'none';
    if (!ord) {
        entete.innerHTML = `
             <li>
               <ul id="ENR_entete" style="">
               <li class="item key" style="border-right-style: dashed;" title="Les Caractéristiques de ce T!OF">L'ENTETE</li>
               <li>
                 <ul class="list-3values">
                   <li class="item" style="border-left-width: 0px; border-right-style: dashed;" title="Nombre de zones">${num1}</li>
                  <li class="item" style="border-left-width: 0px; border-right-style: dashed;" title="la Taille maximal de zone">${num2}</li>
                   <li class="item" style="border-left-width: 0px;" title="la Taille actuelle de derniere zone">${num3}</li>
                 </ul>
              </li>
             </ul>
           </li>
        `;

    } else {
        entete.innerHTML = `
             <li>
               <ul id="ENR_entete" style="">
               <li class="item key" style="border-right-style: dashed;height: 61px;display: flex;align-items: center;">L'ENTETE</li>
               <li>
                 <ul class="list-3values">
                   <li class="item" style="border-left-width: 0px; border-right-style: dashed;">${num1}</li>
                  <li class="item" style="border-left-width: 0px; border-right-style: dashed;">${num2}</li>
                   <li class="item" style="border-left-width: 0px;">${num3}</li>
                   <li class="item" style="border-left-width: 0px;">${init_seuil}</li>
                   <li class="item" style="border-left-width: 0px;">${org_seuil}</li>
                 </ul>
              </li>
             </ul>
           </li>
        `;
    }

    return entete;

}

//RETOURNER LES VALEURS DE L'ENTETE DANS UN TABLEAU
function entete_tab() {
    let entete = document.querySelector('#ENR_entete').querySelector('.list-3values').children;
    let tab_entete = [];
    for (let i = 0; i < entete.length; i++) {
        tab_entete.push(Number(entete[i].innerText));
    }
    return tab_entete;
}

// ECRASER LA 'indice'eme VALEUR DE L'entete par 'val'
function modifier_entete(indice, val) {
    let entete = document.querySelector('#ENR_entete').querySelector('.list-3values').children;
    let entete_elem = document.querySelector('#ENR_entete');
    entete[indice].innerText = val.toString();
    anime({
        targets: Array.from(entete_elem.children),
        backgroundColor: "#00ff00",
        duration: 500,
        direction: 'alternate'
    });
    anime({
        targets: entete[indice],
        backgroundColor: "#00ff00",
        duration: 500,
        direction: 'alternate'
    });
    if (entete_tab()[2] === 0) {
        modifier_entete(2, entete_tab()[1]);
        modifier_entete(0, entete_tab()[0] - 1);
        dec_ins();
    }

}

//LA FONCTIONNALITE DE BOUTTON RECHERCHER
function recherche(e) {
    let ord = document.querySelector('#ord').children[0].querySelector('input').checked;
    let cle = 100;
    let clicked_search = e.target.parentElement.id === 'submit_sea';
    let clicked_del = e.target.parentElement.id === 'submit_del';
    let clicked_ins = e.target.parentElement.id === 'submit_ins';
    if (clicked_search) {
        cle = Number(document.querySelector('#sub_sea').value);
    } else if (clicked_ins) {
        cle = Number(document.querySelector('#sub_ins').value);
    } else if (clicked_del) {
        cle = Number(document.querySelector('#sub_del').value);
    }
    ouvrir_fentre_comment();
    if (ord) {
        set_comment("Lancement de l'algorithme de recherche de la cle : " + cle + " pour TOF ( ord = vrai )");
    } else {
        set_comment("Lancement de l'algorithme de recherche de la cle " + cle + " pour T~OF ( ord = faux )");
    }
    ouvrir_fentre_ins_lec();
    ins_lec_0();
    document.querySelectorAll('.selection').forEach((elem) => {
        elem.classList.add('interdit');
    });
    let vitesse = Number(document.getElementById("myRange").value);

    const fichier = document.querySelector('.Fichier');
    let zones = document.querySelectorAll('.Zone');
    if (!ord) {
        if (clicked_search) {
            ouvrir_alg(algo_recherche_seq);
            animer_alg([2, 4]);
            animer_alg([2, 4]);
        }

        let cle = 100;
        if (clicked_search) {
            cle = Number(document.querySelector('#sub_sea').value);
        } else if (clicked_ins) {
            cle = Number(document.querySelector('#sub_ins').value);
        } else if (clicked_del) {
            cle = Number(document.querySelector('#sub_del').value);
        }
        const nb_bloc = fichier.children.length;
        const nb_enreg = fichier.children[0].children[0].children.length;
        let i = 0
        let nbr_animation = 0;
        let info = [];
        let trouv = false;
        dec_lec();
        while ((!trouv) && (i < nb_bloc)) {
            setTimeout(() => {
                inc_lec();
            }, nbr_animation * vitesse);
            let enrs = document.querySelector('.Fichier').children[i].querySelectorAll('.ENR');
            info = start_recherche_fichier(e, cle, enrs, nbr_animation, vitesse);
            trouv = info[2];
            nbr_animation = info[0];
            i++;
        }
        if (!trouv) {
            setTimeout(() => {
                if (clicked_search) {
                    non_animer_alg([2, 4]);
                    animer_alg([7]);
                    non_animer_alg([5, 6]);
                    animer_alg([7]);
                    set_comment(" La recherche est terminée , l'enregsitrement n'existe pas ! ");
                    setTimeout(() => {
                        set_comment('FIN ...');
                        setTimeout(() => {
                            fermer_fentre_comment();
                        }, 300);
                        non_animer_alg([7]);
                        animer_alg([9]);
                    }, 3000);
                }
                setTimeout(() => {
                    if (clicked_search) {

                        ouvrir_alg(algo_recherche);
                        non_animer_alg([0, 1, 2, 3, 4, 5, 6, 8, 9]);
                        animer_alg([7]);
                    } else if (clicked_del) {

                        ouvrir_alg(algo_suppression);
                        non_animer_alg([0, 1, 2, 5, 6, 7, 8, 9]);
                        animer_alg([3, 4]);
                        setTimeout(() => {
                            non_animer_alg([3, 4]);
                            animer_alg([9]);
                            set_comment(" Rien à supprimer ...");
                            setTimeout(() => {
                                fermer_fentre_comment();
                            }, 300);
                        }, 3000);
                    }
                    showalert('l enregistrement n existe pas !', '#ff0000');
                }, vitesse * 2);
            }, nbr_animation * vitesse);
        }
        nbr_animation += 2;
        setTimeout(() => {
            let all_items = document.querySelectorAll('.item:not(.key):not(.supp)');
            let keys = document.querySelectorAll('.key:not(.supp)');
            recuperer_couleurs(all_items, keys);
            if (clicked_search) {
                document.querySelectorAll('.selection:not(#create)').forEach((elem) => {
                    elem.classList.remove('interdit');
                });
            }
        }, nbr_animation * vitesse);
        info.push(i);
        // [NOMBRE ANIMATION , INDICE_ENR , TROUV , INDICE_BLOC]
        return info;
    } else {
        if (clicked_search) {

            ouvrir_alg(algo_recherche_dico);
        }

        let trouv_sup = false;
        let cpt_zone = 0;
        let nbr_animation = 1;
        if (clicked_search) {
            setTimeout(() => {
                set_comment('Recherche par Zone ....');
            }, (vitesse * nbr_animation) + vitesse);
        }
        while (!trouv_sup && cpt_zone < entete_tab()[0]) {
            if (clicked_search && cpt_zone === 0) {
                animer_alg([1]);
                setTimeout(() => {
                    non_animer_alg([1]);
                }, vitesse * 2);
            } else if (clicked_search && cpt_zone !== 0) {
                animer_alg([3, 4]);
            }
            if (cpt_zone - 2 >= 0) {
                let cible = zones[cpt_zone - 2].querySelectorAll('.item');
                setTimeout(() => {
                    anime({
                        targets: Array.from(cible),
                        backgroundColor: '#ff0000',
                        duration: vitesse,

                    })
                }, nbr_animation * vitesse);
                nbr_animation++;
            }
            if (cpt_zone === entete_tab()[0] - 1 && cle >= Number(zones[cpt_zone].querySelector('.key').innerText)) {
                let cible = zones[cpt_zone - 1].querySelectorAll('.item');
                setTimeout(() => {
                    anime({
                        targets: Array.from(cible),
                        backgroundColor: '#ff0000',
                        duration: vitesse,

                    })
                }, nbr_animation * vitesse);
                nbr_animation++;
            }
            let cle_sup_zone = zones[cpt_zone].querySelector('.key').innerText;
            if (Number(cle_sup_zone) > cle) {
                trouv_sup = true;
                let cibles = [];
                for (let i = cpt_zone; i < entete_tab()[0]; i++) {
                    let zone_sup = Array.from(zones[i].querySelectorAll('.item'));
                    setTimeout(() => {
                        anime({
                            targets: zone_sup,
                            backgroundColor: '#ff0000',
                            duration: vitesse,
                        })
                    }, nbr_animation * vitesse);
                }

                nbr_animation++;
                break;
            } else {
                let cible = zones[cpt_zone].querySelector('.ENR:not(.vide)').querySelectorAll('.item');
                setTimeout(() => {
                    anime({
                        targets: Array.from(cible),
                        backgroundColor: '#333',
                        duration: vitesse / 2,
                        direction: 'alternate'

                    })
                }, nbr_animation * vitesse);
                nbr_animation++;
            }
            cpt_zone++;
            setTimeout(() => {
                inc_lec();
            }, nbr_animation * vitesse);

        }
        // si egale à 0 donc la clé est la plus petite .... pas la paine de faire la recherche
        let info;
        if (cpt_zone !== 0) {
            let zone_cible = zones[cpt_zone - 1];
            let enrs = zone_cible.querySelectorAll('.ENR:not(.vide)');
            info = start_recherche_dico(e, enrs, cle, nbr_animation, vitesse);
            nbr_animation = info[0];
            info.push(cpt_zone - 1);
            nbr_animation++;
            let trouv = info[2];
            if (!trouv && clicked_search) {
                setTimeout(() => {
                    if (clicked_search) {
                        non_animer_alg([2, 4]);
                        animer_alg([7]);
                        non_animer_alg([5, 6]);
                        animer_alg([7]);
                        setTimeout(() => {
                            non_animer_alg([7]);
                            animer_alg([9]);
                        }, nbr_animation * vitesse + 3000);
                    }
                    setTimeout(() => {
                        if (clicked_search) {
                            ouvrir_alg(algo_recherche);
                            non_animer_alg([0, 1, 2, 3, 4, 5, 6, 8, 9]);
                            animer_alg([7]);
                        } else if (clicked_del) {

                            ouvrir_alg(algo_suppression);
                            non_animer_alg([0, 1, 2, 5, 6, 7, 8, 9]);
                            animer_alg([3, 4]);
                            setTimeout(() => {
                                non_animer_alg([3, 4]);
                                animer_alg([9]);

                            }, 3000);
                        }
                        showalert('l enregistrement n existe pas !', '#ff0000');
                        if (clicked_search) {
                            document.querySelectorAll('.selection:not(#create)').forEach((elem) => {
                                elem.classList.remove('interdit');
                            });
                            let all_items = document.querySelectorAll('.item:not(.key):not(.supp)');
                            let keys = document.querySelectorAll('.key:not(.supp)');
                            recuperer_couleurs(all_items, keys);
                            set_comment("La recherche est terminée , l'enresgitrement [cle =" + cle + "] n'existe pas ");
                            setTimeout(() => {
                                set_comment("FIN ....");
                                setTimeout(() => {
                                    fermer_fentre_comment();
                                }, 300);
                            }, 3000);
                        } else if (clicked_del) {
                            set_comment("La recherche est terminée , l'enresgitrement [cle =" + cle + "] n'existe pas ");
                            setTimeout(() => {
                                set_comment("FIN ....");
                                setTimeout(() => {
                                    fermer_fentre_comment();
                                }, 300);
                            }, 3000);

                        }
                    }, 1000);
                }, nbr_animation * vitesse + vitesse * 2);
            }
        } else {
            let all_items = document.querySelectorAll('.item:not(.key):not(.supp)');
            let keys = document.querySelectorAll('.key:not(.supp)');
            setTimeout(() => {
                recuperer_couleurs(all_items, keys);
                showalert("l'enregsitrement n'existe pas ! ", "#ff0000");
                if (clicked_search) {
                    set_comment("La recherche est terminée , l'enresgitrement [cle =" + cle + "] n'existe pas ");
                    setTimeout(() => {
                        set_comment("FIN ....");
                        setTimeout(() => {
                            fermer_fentre_comment();
                        }, 300);
                    }, 3000);
                }
            }, nbr_animation * vitesse);
            inc_lec();
            info = [nbr_animation, 0, false, -1];
        }
        // NBR ANAIMATION , INDICE ENR , TROUV , INDICE BLOC
        return info;
    }
}

//LES ANIMATIONS DE RECHERCHE DICHOTOMIQUE DE LA CLE 'key' DANS LA ZONE 'enrs' AVEC UNE VITESSE D'ANIMATION : vitesse
function start_recherche_dico(e, enrs, key, nbr_animation, vitesse) {
    let begin = true;
    let key_search = key;
    let bi_now = 0;
    let bs_now = 0;
    let trouv = false;
    let cible;
    let clicked_search = e.target.parentElement.id === 'submit_sea';
    let clicked_del = e.target.parentElement.id === 'submit_del';
    let clicked_ins = e.target.parentElement.id === 'submit_ins';
    if (begin) {
        if (clicked_search) {
            setTimeout(() => {
                non_animer_alg([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
                set_comment("Recherche par enregsitrement ....");
                animer_alg([5, 6]);

            }, nbr_animation * vitesse);
        }
        let continuer = true;
        let bi = 0;
        let bs = enrs.length - 1;
        bi_now = 0;
        bs_now = enrs.length - 1;
        let noramlement = Math.floor((bi + bs) / 2);
        while (continuer && bi <= bs) {
            let mid = Math.floor((bi + bs) / 2);
            let bloc_now = enrs[mid].querySelectorAll('.item');
            let key_now = Number(enrs[mid].querySelector('.key').innerText);
            if (Math.abs(bs - bi) > 1) {
                setTimeout(() => {
                    anime({
                        targets: Array.from(bloc_now),
                        backgroundColor: "#333",
                    });
                }, nbr_animation * vitesse);
                nbr_animation++;
            } else {
                setTimeout(() => {
                    anime({
                        targets: Array.from(bloc_now),
                        backgroundColor: "#333",
                    });
                }, nbr_animation * vitesse);
                nbr_animation++;
                noramlement = Math.max(bi, bs, mid);
            }
            if (key_now < key_search) {
                setTimeout((borne_inf = bi_now, medium = mid) => {
                    for (let i = borne_inf; i <= medium; i++) {
                        let cible = enrs[i].querySelectorAll('.item');
                        anime({
                            targets: Array.from(cible),
                            backgroundColor: "#ff0000",
                        });
                    }
                    bi_now = medium + 1;
                }, nbr_animation * vitesse);
                nbr_animation++;
                bi = mid + 1;
            } else if (key_now > key_search) {
                setTimeout((medium = mid, borne_sup = bs_now) => {
                    for (let i = medium; i <= borne_sup; i++) {
                        let cible = enrs[i].querySelectorAll('.item');
                        anime({
                            targets: Array.from(cible),
                            backgroundColor: "#ff0000",
                        });
                    }
                    bs_now = medium - 1;
                }, nbr_animation * vitesse);
                nbr_animation++;
                bs = mid - 1;
            } else {
                trouv = true;
                setTimeout((medium = mid) => {
                    setTimeout(() => {
                        if (clicked_search) {
                            non_animer_alg([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
                            animer_alg([9]);
                        }
                        setTimeout(() => {
                            non_animer_alg([0, 1, 2, 3, 4, 5, 6, 7, 8]);
                            animer_alg([9]);
                        }, 3000);
                        setTimeout(() => {
                            if (clicked_search) {

                                ouvrir_alg(algo_recherche);
                                non_animer_alg([0, 1, 2, 3, 4, 5, 7, 8, 9]);
                                animer_alg([6]);
                            } else if (clicked_del) {
                                non_animer_alg([0, 1, 2, 3, 4, 7, 8, 9]);
                                animer_alg([7, 8]);
                            }
                            if (clicked_search) {
                                set_comment("La recherche est terminée avec succés , L'enregsitrement est détécté avec succés ");
                                showalert('l enregistrement est détécté !', '#00ff00');
                                document.querySelectorAll('.selection:not(#create)').forEach((elem) => {
                                    elem.classList.remove('interdit');
                                });
                                let all_items = document.querySelectorAll('.item:not(.key):not(.supp)');
                                let keys = document.querySelectorAll('.key:not(.supp)');
                                recuperer_couleurs(all_items, keys);

                            } else if (clicked_ins) {
                                let all_items = document.querySelectorAll('.item:not(.key):not(.supp)');
                                let keys = document.querySelectorAll('.key:not(.supp)');
                                recuperer_couleurs(all_items, keys);
                                set_comment("Impossible d'avoir deux enregsitrement distincts définits par la meme clé !!!");
                                setTimeout(() => {
                                    set_comment("FIN ...");
                                    setTimeout(() => {
                                        fermer_fentre_comment();
                                    });
                                }, 300);
                                showalert('Cet enregistrement existe déja !', 'orange');
                                animer_alg([4]);
                                setTimeout(() => {
                                    non_animer_alg([4]);
                                    animer_alg([8]);
                                }, 3000);
                            }
                        }, vitesse * 2);
                    }, vitesse * 2);
                    let cible = enrs[medium].querySelectorAll('.item');
                    anime({
                        targets: Array.from(cible),
                        backgroundColor: "#00ff00",
                    });
                }, nbr_animation * 500);
                nbr_animation++;
                continuer = false;
                noramlement = mid;
            }
        }
        noramlement = 0;
        while (Number(enrs[noramlement].querySelector('.key').innerText) < key_search) {
            noramlement++;
            if (noramlement === enrs.length) {
                break;
            }
        }
        if (noramlement !== 0) {
            noramlement--;
            cible = enrs[noramlement].querySelectorAll('.item');
        } else {
            cible = null;
            noramlement = -1;
        }
        if (cible !== null) {
            setTimeout(() => {
                anime({
                    targets: Array.from(cible),
                    backgroundColor: "#f1935c",
                })
            }, nbr_animation * vitesse);
            nbr_animation++;
        }
        noramlement = 0;
        while (Number(enrs[noramlement].querySelector('.key').innerText) < key_search) {
            noramlement++;
            if (noramlement === enrs.length) {
                break;
            }
        }
        return [nbr_animation + 1, noramlement, trouv];
    }

}

//LES ANIMATIONS DE RECHERCHE SEQUENTIELLE DE LA CLE 'key' DANS LA ZONE 'enrs' AVEC UNE VITESSE D'ANIMATION : vitesse
function start_recherche_fichier(e, cle, enrs, nbr_animation, vitesse) {
    let clicked_search = e.target.parentElement.id === 'submit_sea';
    let clicked_del = e.target.parentElement.id === 'submit_del';
    let clicked_ins = e.target.parentElement.id === 'submit_ins';
    let trouv = false;
    if (clicked_search) {
        cle = Number(document.querySelector('#sub_sea').value);
    } else if (clicked_ins) {
        cle = Number(document.querySelector('#sub_ins').value);
    } else if (clicked_del) {
        cle = Number(document.querySelector('#sub_del').value);
    }

    let begin = false;
    let key_search = Number(cle);
    let cpt_final = -1;

    if (key_search.length !== 0) {

        begin = true;

    } else {
        enrs[0].style.marginTop = '1rem';

    }
    let continuer = true;
    if (begin) {
        let cpt = 0;
        while (continuer && cpt < enrs.length) {
            let bloc_all = enrs[cpt];
            let supp = bloc_all.querySelectorAll('.supp').length;
            let bloc = enrs[cpt].querySelectorAll('.item');
            if ((supp === 0 && cpt !== 0) || (supp === 0 && cpt === 0 && !clicked_search)) {
                setTimeout(() => {
                    anime({
                        targets: Array.from(bloc),
                        backgroundColor: "#333",
                        duration: vitesse,
                    });
                }, nbr_animation * vitesse);
                nbr_animation++;
            } else if (supp === 0 && cpt === 0) {
                setTimeout(() => {
                    animer_alg([3]);
                    setTimeout(() => {
                        non_animer_alg([3]);
                    }, vitesse);
                    anime({
                        targets: Array.from(bloc),
                        backgroundColor: "#333",
                        duration: vitesse,
                    });
                }, nbr_animation * vitesse);
                nbr_animation++;
            }
            let key = Number(bloc[0].innerText);
            if (key !== key_search && cpt !== enrs.length - 1) {
                if (supp === 0) {
                    setTimeout(() => {
                        anime({
                            targets: Array.from(bloc),
                            backgroundColor: "#ff0000",
                        });
                    }, nbr_animation * vitesse);
                    nbr_animation++;
                }
            } else if (key !== key_search && cpt === enrs.length - 1) {
                if (supp === 0) {
                    setTimeout(() => {
                        anime({
                            targets: Array.from(bloc),
                            backgroundColor: "#ff0000",
                        });
                    }, nbr_animation * vitesse);
                }
            } else {
                cpt_final = cpt;
                continuer = false;
                trouv = true;
                if (supp === 0) {
                    setTimeout(() => {
                        non_animer_alg([2, 4]);
                        animer_alg([5, 6]);
                        if (clicked_search) {
                            set_comment("Recherche terminée avec succés , l'enregsitrement est détécté");

                        } else if (clicked_ins) {
                            set_comment("Impossible d'avoir deux enregsitrement distincts définits par la meme clé !!!");
                            setTimeout(() => {
                                set_comment("FIN ...");
                                setTimeout(() => {
                                    fermer_fentre_comment();
                                });
                            }, 300);
                        }
                        setTimeout(() => {
                            if (clicked_search) {
                                non_animer_alg([5, 6]);
                                animer_alg([7]);
                            }
                            setTimeout(() => {
                                non_animer_alg([0, 1, 2, 3, 4, 5, 6, 7, 8]);
                                animer_alg([9]);
                                set_comment('FIN ...');
                                setTimeout(() => {
                                    fermer_fentre_comment();
                                    non_animer_alg([9]);
                                }, 300);
                            }, 3000);
                            setTimeout(() => {
                                if (clicked_search) {

                                    ouvrir_alg(algo_recherche);
                                    non_animer_alg([0, 1, 2, 3, 4, 5, 7, 8, 9]);
                                    animer_alg([6]);
                                } else if (clicked_del) {
                                    non_animer_alg([0, 1, 2, 3, 4, 7, 8, 9]);
                                    animer_alg([5, 6]);
                                }
                                showalert('l enregistrement est détécté !', '#00ff00');
                            }, vitesse * 2);
                        }, vitesse * 2);
                        anime({
                            targets: Array.from(bloc),
                            backgroundColor: "#00ff00",
                        });
                    }, nbr_animation * vitesse);
                    nbr_animation++;
                }
            }
            cpt++;
        }

    }
    return [nbr_animation, cpt_final, trouv];
    // la retour est le nombre d'animation fait ( important pour garantir la continuité des animations apres la recherche )
    // dans la retour on a aussi cpt_final ( égal à l'indice de l'enregsitrement s'il existe sinon la clé juste inférieur )
}

//AFFICHER LE MESSAGE :'message'  à NOTRE UTILSATEUR ( LE MESSAGE SERA COLORE PAR LA COULEUR : 'background' )
// SI FADING_OUT = TRUE : LE MESSAGE SERA DISPARRU APRES 3 SECONDES
function showalert(message, background, ...fading_out) {
    let yay = document.querySelector('#yay');
    yay.style.background = background;
    yay.innerText = message;

    yay.style.display = 'inline-block';
    if (fading_out.length === 0 || fading_out[0] === true) {
        setTimeout(() => {
            document.querySelector('#yay').innerText = '';
            document.querySelector('#yay').style.display = 'none';
        }, 3000);
    }

}

// LA FONCTIONNALITE DE BOUTTON : INSERER
function inserer(e) {
    ouvrir_fentre_comment();
    document.querySelectorAll('.selection').forEach((elem) => {
        elem.classList.add('interdit');
    });
    let vitesse = Number(document.getElementById("myRange").value);
    let zones = document.querySelectorAll('.Zone');
    let par = document.querySelector('#fichier');
    let entete = entete_tab();
    let key_search = Number(document.querySelector('#sub_ins').value);
    let ord = document.querySelector('#ord').children[0].querySelector('input').checked;
    if (!ord) {
        let info_recherche = recherche(e);
        let nbr_animation = info_recherche[0] + 2;
        let num_bloc = info_recherche[3];
        let num_enr = info_recherche[1];
        let trouv = info_recherche[2];
        let anime_rech = 0;
        let interv = setInterval(() => {
            if (anime_rech <= info_recherche[0]) {
                setTimeout(() => {
                    animer_alg([1]);
                }, anime_rech * vitesse);
                anime_rech++;
            } else {
                setTimeout(() => {
                    non_animer_alg([1]);
                }, anime_rech * vitesse);
                clearInterval(interv);
            }
        }, 10);
        if (trouv) {
            setTimeout(() => {
                document.querySelectorAll('.selection:not(#create)').forEach((elem) => {
                    elem.classList.remove('interdit');
                });
            }, anime_rech * vitesse);

        }
        if (!trouv) {
            setTimeout(() => {
                animer_alg([5]);
            }, nbr_animation * vitesse);
        }
        if (!trouv) {
            setTimeout(() => {
                set_comment("Génération  d'un nouveau enreg définit par la clé :" + key_search);
                let nbr_animation_interne = 1;
                setTimeout(() => {
                    let cle = key_search;
                    if (cle == 0) {
                        return 0;
                    }
                    let new_enr = inserer_enr(cle);
                    let hr1 = document.createElement('hr');
                    let hr2 = document.createElement('hr');
                    $(par).append(hr1);
                    $(par).append(new_enr);
                    $(par).append(hr2);
                    $(new_enr).fadeIn(500);
                    let arr = [hr1, new_enr, hr2];
                }, nbr_animation_interne * 500);
                nbr_animation_interne++;
                setTimeout(() => {
                    inc_ins();
                    if (derniere_zone_staure()) {
                        let new_enr = document.querySelector('.new_enr_ins');
                        let coord_new_enr = get_x_y(new_enr.children[0]);
                        let coord_last_zones = get_x_y(zones[zones.length - 1].children[0]);
                        set_comment("l'insertion est en cours d'éxécution ( Dans une nouvelle zone )");
                        anime({
                            targets: new_enr,
                            keyframes: [
                                { translateX: coord_last_zones.x - coord_new_enr.x + new_enr.children[0].offsetWidth + new_enr.children[1].offsetWidth + 5 },
                                { translateY: coord_last_zones.y - coord_new_enr.y }
                            ],
                            duration: vitesse * 4

                        });

                    } else if (!derniere_zone_staure()) {
                        let diff = entete_tab()[1] - entete_tab()[0];
                        let new_enr = document.querySelector('.new_enr_ins');
                        let coord_new_enr = get_x_y(new_enr.children[0]);
                        let coord_before_last_zones = get_x_y(zones[zones.length - 2].children[entete_tab()[2] - 1]);
                        set_comment("l'insertion est en cours d'éxécution");
                        anime({
                            targets: new_enr,
                            keyframes: [
                                { translateX: coord_before_last_zones.x - coord_new_enr.x + new_enr.children[0].offsetWidth + new_enr.children[1].offsetWidth + 10 },
                                { translateY: coord_before_last_zones.y - coord_new_enr.y + new_enr.offsetHeight }
                            ],
                            duration: vitesse * 4

                        });
                    }
                }, nbr_animation_interne * vitesse);
                nbr_animation_interne += 4;
                setTimeout(() => {
                    renouveler_fichier(derniere_zone_staure());
                    document.querySelectorAll('.selection:not(#create)').forEach((elem) => {
                        elem.classList.remove('interdit');
                    });
                    set_comment("L'insertion est terminée avec succés");
                    setTimeout(() => {
                        set_comment("FIN ...");
                        setTimeout(() => {
                            fermer_fentre_comment();
                        }, 300);
                    }, 3000);
                    non_animer_alg([5]);
                    animer_alg([7]);
                    setTimeout(() => {
                        non_animer_alg([7]);
                    }, 500);
                    animer_alg([8]);
                }, nbr_animation_interne * vitesse);
                nbr_animation_interne++;
            }, nbr_animation * vitesse);
        }
    } else {

        let info_recherche = recherche(e);
        let nbr_animation = info_recherche[0] + 2;
        let num_bloc = info_recherche[3];
        let num_enr = info_recherche[1];
        let trouv = info_recherche[2];
        if (num_bloc !== -1) {
            let zone_trouv = zones[num_bloc];
            let keys_zone = zone_trouv.querySelectorAll('.key');
            let enr_trouv = keys_zone[num_enr];
        }
        let anime_rech = 0;
        let interv = setInterval(() => {
            if (anime_rech <= info_recherche[0]) {
                setTimeout(() => {
                    animer_alg([1]);
                }, anime_rech * vitesse);
                anime_rech++;
            } else {
                setTimeout(() => {
                    non_animer_alg([1]);
                }, anime_rech * vitesse);
                clearInterval(interv);
            }
        }, 10);
        let decal_exter = false;
        if (trouv) {
            setTimeout(() => {
                document.querySelectorAll('.selection:not(#create)').forEach((elem) => {
                    elem.classList.remove('interdit');
                });
            }, nbr_animation * vitesse);

        }
        if (!trouv) {
            setTimeout(() => {
                animer_alg([6]);
            }, nbr_animation * vitesse);
        }
        let min = false;
        if (num_bloc === -1) {
            min = true;
            num_bloc = 0;
        }
        if (num_bloc !== -1) {
            let zones = document.querySelectorAll('.Zone');
            let zone_cible = zones[num_bloc];
            let enrs = zone_cible.querySelectorAll('.ENR:not(.vide)');
            let enrs_vide = zone_cible.querySelectorAll('.vide');
            if (enrs_vide.length === 0) {
                decal_exter = true;
            }
            if (!decal_exter) {
                let enr_cible = null;
                let coord_ou_inserer = null;
                let inserer_dernier = true;
                if (num_enr < enrs.length) {
                    enr_cible = enrs[num_enr];
                    coord_ou_inserer = get_x_y(enr_cible);
                    inserer_dernier = false;
                }
                if (inserer_dernier) {

                    coord_ou_inserer = get_x_y(zone_cible.querySelector('.vide'));

                }
                if (!trouv) {
                    setTimeout(() => {
                        set_comment("Génération  d'un nouveau enreg définit par la clé :" + key_search);
                        let cle = key_search;
                        let new_enr = inserer_enr(cle);
                        let hr1 = document.createElement('hr');
                        let hr2 = document.createElement('hr');
                        $(par).append(hr1);
                        $(par).append(new_enr);
                        $(par).append(hr2);
                        $(new_enr).fadeIn(vitesse);
                        let arr = [hr1, new_enr, hr2];
                    }, nbr_animation * vitesse);
                    nbr_animation++;
                    for (let i = num_enr; i < enrs.length; i++) {
                        let cpt = i;
                        setTimeout(() => {
                            let zones = document.querySelectorAll('.Zone');
                            let zone_cible = zones[num_bloc];
                            zone_cible.querySelector('.vide').style.opacity = '.1';
                            set_comment("Decalage interne ...");
                            anime({
                                targets: enrs[i],
                                keyframes: [
                                    { translateY: enrs[i].children[0].offsetHeight },
                                ],
                                duration: vitesse * 2,
                            });
                        }, nbr_animation * vitesse);
                    }
                    nbr_animation += 2;
                    setTimeout(() => {
                        set_comment("insertion de ce nouveau enreg ...");
                        let new_enr = document.querySelector('.new_enr_ins');
                        let coord_new_enr = get_x_y(new_enr.children[0]);
                        inc_ins();
                        anime({
                            targets: new_enr,
                            keyframes: [
                                { translateX: coord_ou_inserer.x - coord_new_enr.x },
                                { translateY: coord_ou_inserer.y - coord_new_enr.y }
                            ],
                            duration: vitesse * 4

                        });
                    }, nbr_animation * vitesse);
                    nbr_animation += 4;
                    setTimeout(() => {
                        decaler(num_bloc, num_enr);
                        let all_items = document.querySelectorAll('.item:not(.key):not(.supp)');
                        let keys = document.querySelectorAll('.key:not(.supp)');
                        recuperer_couleurs(all_items, keys);
                        set_comment("FIN .....");
                        setTimeout(() => {
                            fermer_fentre_comment();
                        }, 300);
                    }, nbr_animation * vitesse);

                }

            } else {
                let num_bloc_now = num_bloc;
                let enr_cible = null;
                let coord_ou_inserer = null;
                let inserer_dernier = true;
                let decaler_jusqua_fin = false;
                if (num_enr < enrs.length) {
                    enr_cible = enrs[num_enr];
                    coord_ou_inserer = get_x_y(enr_cible);
                    inserer_dernier = false;
                }
                if (inserer_dernier) {
                    if (num_bloc_now + 1 < entete_tab()[0]) {
                        coord_ou_inserer = get_x_y(zones[num_bloc_now + 1].querySelector('.ENR'));
                    } else {
                        coord_ou_inserer = get_x_y(zones[num_bloc_now].querySelector('.ENR'));
                        coord_ou_inserer.x += zones[num_bloc_now].querySelector('.ENR').offsetWidth;
                        decaler_jusqua_fin = true;
                    }
                    decal_exter = true;
                }
                if (!trouv) {
                    setTimeout(() => {
                        set_comment("Génération de nouveau enreg définit par la clé : " + key_search);
                        let cle = Number(key_search);
                        let new_enr = inserer_enr(cle);
                        new_enr.style.right = "127px";
                        let hr1 = document.createElement('hr');
                        let hr2 = document.createElement('hr');
                        $(par).append(hr1);
                        $(par).append(new_enr);
                        $(par).append(hr2);
                        $(new_enr).fadeIn(vitesse);
                        let arr = [hr1, new_enr, hr2];
                    }, nbr_animation * vitesse);
                    nbr_animation++;
                    for (let i = num_enr; i < enrs.length; i++) {
                        let cpt = i;
                        setTimeout(() => {
                            set_comment("Decalage interne ....");
                            let zones = document.querySelectorAll('.Zone');
                            let zone_cible = zones[num_bloc_now];
                            anime({
                                targets: enrs[i],
                                keyframes: [
                                    { translateY: enrs[i].children[0].offsetHeight },
                                ],
                                duration: vitesse * 2,
                            });
                        }, nbr_animation * vitesse);
                    }
                    if (inserer_dernier && num_bloc_now + 1 < entete_tab()[0]) {
                        let num_bloc_noww = num_bloc_now;
                        setTimeout(() => {
                            inc_ins();
                            inc_lec();
                            set_comment("Decalage interne ....");
                            let enrs_next_zone = zones[num_bloc_noww + 1].querySelectorAll('.ENR:not(.vide)');
                            anime({
                                targets: Array.from(enrs_next_zone),
                                keyframes: [
                                    { translateY: enrs_next_zone[0].children[0].offsetHeight },
                                ],
                                duration: vitesse * 2,
                            });
                        }, nbr_animation * vitesse);
                        nbr_animation += 2;
                    }
                    setTimeout(() => {
                        set_comment("Insertion ...");
                        let new_enr = document.querySelector('.new_enr_ins');
                        let coord_new_enr = get_x_y(new_enr.children[0]);

                        anime({
                            targets: new_enr,
                            keyframes: [
                                { translateX: coord_ou_inserer.x - coord_new_enr.x },
                                { translateY: coord_ou_inserer.y - coord_new_enr.y }
                            ],
                            duration: vitesse * 4

                        });
                    }, nbr_animation * vitesse);
                    nbr_animation += 4;
                    if (!decaler_jusqua_fin) {
                        let contient_vide = false;
                        if (inserer_dernier) {
                            num_bloc_now += 1;
                        }
                        let vide = zones[num_bloc_now].querySelector('.vide');
                        if (vide != null) {
                            contient_vide = true;
                        }
                        if (!contient_vide) {
                            while (!contient_vide && !decaler_jusqua_fin) {
                                let all_enrs = zones[num_bloc_now].querySelectorAll('.ENR');
                                let last_enr = all_enrs[all_enrs.length - 1];
                                let coord_enr_cible = get_x_y(last_enr);
                                let coord_ou_inserer;
                                if (num_bloc_now + 1 < entete_tab()[0]) {
                                    let next_enr = zones[num_bloc_now + 1].querySelector('.ENR');
                                    coord_ou_inserer = get_x_y(next_enr);
                                } else {
                                    coord_ou_inserer = get_x_y(zones[num_bloc_now].querySelector('.ENR'));
                                    coord_ou_inserer.x += zones[num_bloc_now].querySelector('.ENR').offsetWidth;
                                    decaler_jusqua_fin = true;
                                }
                                if (!decaler_jusqua_fin) {
                                    let num_bloc_noww = num_bloc_now;
                                    setTimeout(() => {
                                        let enrs_next_zone = zones[num_bloc_noww + 1].querySelectorAll('.ENR:not(.vide)');
                                        anime({
                                            targets: Array.from(enrs_next_zone),
                                            keyframes: [
                                                { translateY: enrs_next_zone[0].children[0].offsetHeight },
                                            ],
                                            duration: vitesse * 2,
                                        });
                                    }, nbr_animation * vitesse);
                                    nbr_animation += 2;
                                }

                                setTimeout(() => {
                                    inc_ins();
                                    inc_lec();
                                    set_comment("Decalage externe ....");
                                    anime({
                                        targets: last_enr,
                                        keyframes: [
                                            { translateX: coord_ou_inserer.x - coord_enr_cible.x },
                                            { translateY: coord_ou_inserer.y - coord_enr_cible.y }
                                        ],
                                        duration: vitesse * 4

                                    });
                                }, nbr_animation * vitesse);
                                nbr_animation += 4;
                                let test = zones[num_bloc_now + 1];
                                if (test != undefined) {
                                    let vide = zones[num_bloc_now + 1].querySelector('.vide');
                                    if (vide != null) {
                                        contient_vide = true;
                                    }
                                    num_bloc_now += 1;
                                } else {
                                    contient_vide = false;
                                    num_bloc_now += 1;
                                }
                            }
                        }
                    }
                    setTimeout(() => {
                        non_animer_alg([0, 1, 2, 3, 4, 5, 6]);
                        animer_alg([7]);
                        setTimeout(() => {
                            non_animer_alg([7]);
                        }, vitesse);
                        animer_alg([8]);
                    }, nbr_animation * vitesse);
                }
            }
        }
        //c'est le MIN declaer les elements de premier bloc
        else {
            let zones = document.querySelectorAll('.Zone');
            let zone_cible = zones[0];
            let enrs = zone_cible.querySelectorAll('.ENR:not(.vide)');
            let enr_cible = enrs[0];
            let coord_ou_inserer = get_x_y(enr_cible);
            if (!trouv) {
                setTimeout(() => {
                    set_comment("Génération  d'un nouveau enreg définit par la clé :" + key_search);
                    let cle = Number(e.target.parentElement.parentElement.querySelector('#sub_ins').value);
                    let new_enr = inserer_enr(cle);
                    let hr1 = document.createElement('hr');
                    let hr2 = document.createElement('hr');
                    $(par).append(hr1);
                    $(par).append(new_enr);
                    $(par).append(hr2);
                    $(new_enr).fadeIn(vitesse);
                }, nbr_animation * vitesse);
                nbr_animation++;
                for (let i = num_enr; i < enrs.length; i++) {
                    let cpt = i;
                    setTimeout(() => {
                        let zones = document.querySelectorAll('.Zone');
                        let zone_cible = zones[0];
                        zone_cible.querySelector('.vide').style.opacity = '.1';
                        set_comment("Decalage interne ...");
                        anime({
                            targets: enrs[i],
                            keyframes: [
                                { translateY: enrs[i].children[0].offsetHeight },
                            ],
                            duration: vitesse * 2,
                        });
                    }, nbr_animation * vitesse);
                }
                nbr_animation += 2;
                setTimeout(() => {
                    let new_enr = document.querySelector('.new_enr_ins');
                    let coord_new_enr = get_x_y(new_enr.children[0]);
                    inc_lec();
                    inc_ins();
                    set_comment("Decalage externe ....");
                    anime({
                        targets: new_enr,
                        keyframes: [
                            { translateX: coord_ou_inserer.x - coord_new_enr.x },
                            { translateY: coord_ou_inserer.y - coord_new_enr.y }
                        ],
                        duration: vitesse * 4

                    });
                }, nbr_animation * vitesse);
                nbr_animation += 4;
                setTimeout(() => {
                    decaler(0, 0);
                    recuperer_couleurs(document.querySelectorAll('.item'), document.querySelectorAll('.key'));
                }, nbr_animation * vitesse);

            }
        }
        if (decal_exter) {
            setTimeout(() => {
                set_comment("FIN...");
                setTimeout(() => {
                    fermer_fentre_comment();
                }, 300);
                let items = document.querySelectorAll('.items:not(.keys)');
                let keys = document.querySelectorAll('.keys');
                recuperer_couleurs(items, keys);
                renouveler_fichier_apres_decal(vitesse);
            }, nbr_animation * vitesse);
            nbr_animation++;

        }
        setTimeout(() => {
            non_animer_alg([6]);
            animer_alg([7, 8]);
            setTimeout(() => {
                non_animer_alg([7]);
            }, vitesse);
        }, nbr_animation * vitesse);
        if (!trouv) {
            setTimeout(() => {
                document.querySelectorAll('.selection:not(#create)').forEach((elem) => {
                    elem.classList.remove('interdit');
                });
            }, nbr_animation * vitesse);
        }
    }
}

// S'IL Y A UN DECALAGE EXTERNE APRES L'INSERTION DANS TOF  IL FAUT APPELER CETTE FONCTION POUR REGLER LES POSITIONS DE TOUS LES ENREGISTREMENTS
function renouveler_fichier_apres_decal(vitesse) {
    let old_key_zones = [];
    let zones = document.querySelectorAll('.Zone');
    zones.forEach((zone_now, num_bloc) => {
        let key_this_zone = [];
        let enrs = zone_now.querySelectorAll('.ENR');
        enrs.forEach((enr_now, indice_enr) => {
            let key_now = enr_now.querySelector('.key').innerText;
            if (key_now.includes('?')) {
                key_this_zone.push(-1);
            } else {
                key_this_zone.push(Number(key_now));
            }
        });
        old_key_zones.push(key_this_zone);
    });
    let new_key = Number(document.querySelector('#sub_ins').value);
    let do_nothing = true;
    let indice_zone;
    let indice_enr;
    for (let indice_zone_loop = 0; indice_zone_loop < old_key_zones.length; indice_zone_loop++) {
        for (let indice_enr_loop = 0; indice_enr_loop < old_key_zones[indice_zone_loop].length; indice_enr_loop++) {
            if (old_key_zones[indice_zone_loop][indice_enr_loop] !== -1 && old_key_zones[indice_zone_loop][indice_enr_loop] > new_key) {
                do_nothing = false;
                indice_enr = indice_enr_loop;
                break;
            }
        }
        if (!do_nothing) {
            indice_zone = indice_zone_loop;
            break;
        }
    }
    let zone_init = old_key_zones[indice_zone];
    zone_init.splice(indice_enr, 0, new_key);
    let dechet = old_key_zones[indice_zone].pop();
    indice_zone++;
    while (indice_zone < entete_tab()[0] && !old_key_zones[indice_zone].includes(-1)) {
        old_key_zones[indice_zone].splice(0, 0, dechet);
        dechet = old_key_zones[indice_zone].pop();
        indice_zone++;
    }
    let new_z;
    if (dechet !== -1) {
        if (indice_zone === entete_tab()[0]) {
            old_key_zones.push([dechet]);
            new_z = true;
        } else {
            old_key_zones[indice_zone].splice(0, 0, dechet);
            old_key_zones[indice_zone].pop();
        }
    }

    let zones_now = document.querySelectorAll('.Zone');
    for (let i = 0; i < zones.length; i++) {
        let zone = zones_now[i];
        let enrs = zone.querySelectorAll('.ENR');
        for (let j = 0; j < entete_tab()[1]; j++) {
            let enrs_father = enrs[j].parentElement;
            enrs_father.textContent = '';
            enrs_father.appendChild(enr_const(old_key_zones[i][j]));
        }
    }
    if (new_z) {
        let li = document.createElement('li');
        li.innerHTML =
            `<ul class="Zone">
                  <li>
                    <ul class="ENR" style="">
                      <li class="item key" style="border-right-style: dashed;">${old_key_zones[old_key_zones.length-1][0]}</li>
                      <li>
                        <ul class="list-3values">
                          <li class="item" style="border-left-width: 0px; border-right-style: dashed;">champ1</li>
                          <li class="item" style="border-left-width: 0px; border-right-style: dashed;">champ2</li>
                          <li class="item" style="border-left-width: 0px;">champ3</li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
                <div class="NB_enrs"><span>Tbloc[${entete_tab()[0]}].NB= <i class="NB">1</i></span></div>
              </li>`;
        document.querySelector('.Fichier').appendChild(li);
        let cpt = 1;
        let zone_inserer = li.querySelector('.Zone');
        while (cpt < old_key_zones[0].length) {
            let li_vide = document.createElement('li');
            li_vide.style.display = "none";
            li_vide.innerHTML =
                `<ul class="ENR vide" style="">
        <li class="item key" style="border-right-style: dashed; padding: 1.3rem 1.4rem;">???</li>
        <li>
          <ul class="list-3values">
            <li class="item" style="border-left-width: 0px; border-right-style: dashed;">???????</li>
            <li class="item" style="border-left-width: 0px; border-right-style: dashed;">???????</li>
            <li class="item" style="border-left-width: 0px;">???????</li>
          </ul>
        </li>
      </ul>`;
            zone_inserer.appendChild(li_vide);
            setTimeout(() => {
                ouvrir_fentre_comment();
                set_comment("Création de nouvelle zone");
                $(li_vide).fadeIn(vitesse);
            }, (cpt - 1) * vitesse);
            cpt++;
        }
        setTimeout(() => {
            set_comment("FIN...");
            setTimeout(() => {
                fermer_fentre_comment();
            }, vitesse);
            fermer_fentre_comment();
        }, cpt * vitesse);

        modifier_entete(0, entete_tab()[0] + 1);
        modifier_entete(2, 1)
    }
    let new_enr = document.querySelector('.new_enr_ins');
    new_enr.parentNode.removeChild(new_enr);

}

// SI LA DERNIERE ZONE EST REMPLI à 100%  RETOURNER : VRAI , SIONON RETOURNER : FAUX
function derniere_zone_staure() {
    return (entete_tab()[1] === entete_tab()[2])
}

// RETOURNER LES CORDONNES ( X , Y ) DE L'ELEMENT 'el'
function get_x_y(el) {
    const rect = el.getBoundingClientRect();
    return {
        x: rect.left + window.scrollX,
        y: rect.top + window.scrollY
    };
}

// APRES INSERTION , SUPPRESSION : IL FAUT APPELER CETTE FONCTION POUR MODFIER LES POSITIONS DE TOUS (QUELQUES) ENREGISTREMENTS
function renouveler_fichier(nouvelle_zone) {
    let new_enr = document.querySelector('.new_enr_ins');
    let father = new_enr.parentNode;
    father.removeChild(new_enr);
    $(new_enr).css("transform", "");
    $(new_enr).removeAttr("style");
    let new_one = document.createElement('ul');
    new_one.className = 'ENR';
    new_one.innerHTML = new_enr.innerHTML;
    let fichier = document.querySelector('.Fichier');
    if (nouvelle_zone) {
        modifier_entete(0, entete_tab()[0] + 1);
        modifier_entete(2, 1);
        let nb = creer_nb(entete_tab()[0] - 1, 1);
        let li = document.createElement('li');
        let nv_bloc = document.createElement('ul');
        nv_bloc.className = "Zone";
        let new_li = document.createElement('li');
        new_li.append(new_one);
        nv_bloc.appendChild(new_li);
        li.append(nv_bloc);
        li.append(nb);
        fichier.appendChild(li);
        // incrementer nmbre de zones

        // le nombtre d'enregistrement dans la nouvelle zone est à 1
    } else {
        let zones = document.querySelectorAll('.Zone');
        let last_zone = zones[zones.length - 1];
        let new_li = document.createElement('li');
        new_li.append(new_one);
        last_zone.append(new_li);
        // // incrementer nmbre de zones
        // le nombtre d'enregistrement dans la derniere zone est augmenté
        modifier_entete(2, entete_tab()[2] + 1);
        modifier_nb(entete_tab()[0] - 1, entete_tab()[2]);
    }

    let zones = document.querySelectorAll('.Zone');
    let hrs = document.querySelectorAll('hr');
    for (let i = 0; i < hrs.length; i++) {
        father.removeChild(hrs[i]);
    }
    let all_items = document.querySelectorAll('.item:not(.key):not(.supp)');
    let keys = document.querySelectorAll('.key:not(.supp)');
    recuperer_couleurs(all_items, keys);


}

//  CREER UN ENREGSITREMENT DEFINIT PAR LA CLE : 'cle'
function inserer_enr(cle) {
    let enreg = document.createElement('ul');
    enreg.style.position = "relative";
    enreg.style.display = "none";
    enreg.className = "ENR new_enr_ins";
    let li = document.createElement('li');
    li.className = "item key";
    li.innerText = cle.toString();
    li.style.borderRightStyle = "dashed";
    enreg.appendChild(li);
    let list_3values = document.createElement('ul');
    list_3values.className = 'list-3values';
    let cpt = 0;
    while (cpt < 3) {
        let li = document.createElement('li');
        li.className = "item";
        li.innerText = "Value " + (cpt + 1);
        li.style.borderLeftWidth = "0";
        if (cpt !== 2) { li.style.borderRightStyle = "dashed"; }
        list_3values.appendChild(li);
        cpt += 1;
    }
    let mere_3values = document.createElement('li');
    mere_3values.appendChild(list_3values);
    enreg.appendChild(mere_3values);
    return enreg;
}

// ANIMATION DE DECLAGE DES ENREGISTREMENTS QUI SE SITUE AU DESSOUS DE L'INDICE 'indice_enr' DANS LA 'indice_zone'ieme ZONE
function decaler(indice_zone, indice_enr) {
    let zones = document.querySelectorAll('.Zone');
    let zone = zones[indice_zone];
    let non_vide = zone.querySelectorAll('.ENR:not(.vide)');
    let vide = zone.querySelectorAll('.vide');
    let new_enr = document.querySelector('.new_enr_ins');
    let father = new_enr.parentNode;
    father.removeChild(new_enr);
    $(new_enr).css("transform", "");
    $(new_enr).removeAttr("style");
    let new_one = document.createElement('ul');
    new_one.className = 'ENR';
    new_one.innerHTML = new_enr.innerHTML;
    let ancien_enr_html2;
    if (indice_enr < non_vide.length) {
        $(non_vide[indice_enr]).css("transform", "");
        $(non_vide[indice_enr]).removeAttr("style");
        let ancien_enr_html = non_vide[indice_enr].innerHTML;
        ancien_enr_html2 = ancien_enr_html;
        non_vide[indice_enr].innerHTML = new_one.innerHTML;
        for (let i = indice_enr + 1; i < non_vide.length; i++) {
            $(non_vide[i]).css("transform", "");
            $(non_vide[i]).removeAttr("style");
            ancien_enr_html2 = non_vide[i].innerHTML;
            if (i === indice_enr + 1) {
                non_vide[i].innerHTML = ancien_enr_html;
            } else {
                non_vide[i].innerHTML = ancien_enr_html2;
            }
        }
    } else {
        ancien_enr_html2 = new_one.innerHTML;
    }

    vide[0].classList.remove("vide");

    vide[0].innerHTML = ancien_enr_html2;
    $(vide[0]).css("opacity", "");
    modifier_nb(indice_zone, nbs()[indice_zone] + 1);
    if (indice_zone + 1 === entete_tab()[0]) {
        modifier_entete(2, entete_tab()[2] + 1);
    }

}

// RECUPERER LES COULEURS NORMAUX D'ENREGSITREMENTS APRES LA FIN DES ANIMATIONS
function recuperer_couleurs(items, keys) {
    anime({
        targets: Array.from(items),
        backgroundColor: "#faebd7",
        duration: 1000,
    });
    anime({
        targets: Array.from(keys),
        backgroundColor: "#86E8E7",
        duration: 1000,
    });
    document.querySelectorAll('hr').forEach((elem) => {
        elem.parentNode.removeChild(elem);
    });
}

// OUVRIR LA FENETRE D'ALGORITHME
function ouvrir_alg(algo) {
    document.getElementById("code-fichier").innerHTML = algo;
}

// RENDRE NOMBRE D'ECRITURE =0 , NOMBRE DE LECTURE =0 DANS LA FENETRE DE LECTURE/ECRITURE
function ins_lec_0() {
    document.getElementById('ins_lec-Text').innerHTML = "Nbr de Lecture  : <span id='lec'>0</span>  | Nbr d'écriture  : <span id='ins'>0</span> ";
}

// RETOURNER LE NOMBRE DE LECTIRE ACTUEL
function get_lec() {
    return Number(document.querySelector('#lec').innerText);
}

// RETOURNER LE NOMBRE D'INSERTION ACTUEL
function get_ins() {
    return Number(document.querySelector('#ins').innerText);
}

//INCREMENTER LE NOMBRE DE LECTURES
function inc_lec() {
    document.querySelector('#lec').innerText = (get_lec() + 1).toString();
}

//DECREMENTER LE NOMBRE DE LECTURES
function dec_lec() {
    document.querySelector('#lec').innerText = (get_lec() - 1).toString();
}

//INCREMENTER LE NOMBRE D'ECRITURES

function inc_ins() {
    document.querySelector('#ins').innerText = (get_ins() + 1).toString();
}

//DECREMENTER LE NOMBRE D'ECRITURES
function dec_ins() {
    document.querySelector('#ins').innerText = (get_ins() - 1).toString();
}

//OUVRIR LA FENETRE DE LECTIRE/ECRITURE
function ouvrir_fentre_ins_lec() {
    if (document.getElementById("ins_lec-Info").style.width == '0px') {
        for (let index = 0; index < 371; index++) {
            setTimeout(() => {
                document.getElementById("ins_lec-Info").style.width = index + 'px';
            }, index * 0.9);
        }
    }
    if (document.getElementById("entete-hide-img").className == "rotateLeft") {
        document.getElementById("entete-hide-img").className = "rotateRight";
    } else {
        document.getElementById("entete-hide-img").className = "rotateLeft";
    }
}


//OUVRIR LA FENTRE DE COMMENTAIRES
function ouvrir_fentre_comment() {
    anime({
        targets: document.getElementById("instruction-fichier"),
        width: '420px',
        easing: 'easeInOutQuad',
    });
    if (document.getElementById("instruction-hide-img").className == "rotateLeft") {
        document.getElementById("instruction-hide-img").className = "rotateRight";
    } else {
        document.getElementById("instruction-hide-img").className = "rotateLeft";
    }
}

//OUVRIR LA FENETRE D'ALGORITHME
function ouvrir_fentre_alg() {

    anime({
        targets: document.getElementById("code-fichier"),
        width: '420px',
        easing: 'easeInOutQuad',
    });
    if (document.getElementById("code-hide-img").className == "rotateLeft") {
        document.getElementById("code-hide-img").className = "rotateRight";
    } else {
        document.getElementById("code-hide-img").className = "rotateLeft";
    }
}

//FERMER LA FENETRE DE COMMENTAIRES
function fermer_fentre_comment() {
    anime({
        targets: document.getElementById("instruction-fichier"),
        width: '0px',
        easing: 'easeInOutQuad',
    });

    if (document.getElementById("instruction-hide-img").className == "rotateLeft") {
        document.getElementById("instruction-hide-img").className = "rotateRight";
    } else {
        document.getElementById("instruction-hide-img").className = "rotateLeft";
    }
}

// METTRE LE TEXTE 'comment' DANS LA FENTRE DE COMMENTAIRES
function set_comment(comment) {
    document.querySelector('#commentaire').innerHTML = comment.toString();
}

//SUPPRIMER LE TEXTE DANS LA FENETRE DE COMMENTAIRES
function nothing_comment() {
    document.querySelector('#commentaire').innerHTML = '';
}


//RECUPERER LE TEXTE ACTUEL DANS LA FENETRE DE COMMENTAIRES
function get_comment() {
    return document.querySelector('#commentaire').innerHTML;
}