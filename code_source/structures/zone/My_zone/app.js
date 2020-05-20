//CORPS DE L'ALGORITHME DE CREATION ( affiché dans la fenetre d'algorithme dans notre interface dans l'opération : creation )
const algo_creation =
    '<p >Procedure creation() </p> \
  <p id="afectation">&nbsp;&nbsp;ECRIRE("Nombre d enregistrements dans votre bloc ?"); </p> \
  <p id="debut" >&nbsp;&nbsp;LIRE("nb_enreg");</p> \
  <p id="recherche" >&nbsp;&nbsp;ECRIRE("Ordonnés / Non Ordonnées ?"); </p> \
  <p id="si">&nbsp;&nbsp;LIRE("ord");</p> \
  <p id="fsi" >&nbsp;&nbsp;generer_zone(nb_enreg , ord);</p> \
  <p id="fin">FIN</p>';

//CORPS DE L'ALGORITHME DE RECHECHE SEQUENTIELLE ( affiché dans la fenetre d'algorithme dans notre interface dans l'opération : Recherche dans ZONE NON ORDONNEE )
const algo_recherche_seq = '<p >Procedure Recherche_Seq(zone , key  , VAR cpt , VAR trouv ) { </p> \
          <p id="afectation">SOIT:</p> \
          <p id="afectation">&nbsp;&nbsp;key_actuel:Entier;</p> \
        <p id="debut">DEBUT:</p> \
          <p id="tq">&nbsp;&nbsp;cpt <-- 0 ;</p> \
          <p id="rechercheInterne">&nbsp;&nbsp;key_actuel <-- zone[0].key ;</p> \
          <p id="passageFils">&nbsp;&nbsp;TANTQUE( cpt < zone.taille() ET key_actuel <> key) :</p> \
          <p id="ftq">&nbsp;&nbsp;DEBUT TANTQUE</p> \
          <p id="fin" >&nbsp;&nbsp;&nbsp;&nbsp;cpt <-- cpt + 1 ;</p>\
          <p id="tq">&nbsp;&nbsp;&nbsp;&nbsp;key_actuel <-- zone[cpt].key ;</p> \
          <p id="rechercheInterne">&nbsp;&nbsp;FIN TANTQUE;</p> \
          <p id="passageFils">&nbsp;&nbsp;SI( key_actuel = key) : </p> \
          <p id="ftq">&nbsp;&nbsp;DSI</p> \
          <p id="fin" >&nbsp;&nbsp;&nbsp;&nbsp;trouv <-- VRAI ;</p>\
          <p id="afectation">&nbsp;&nbsp;FINSI; </p> \
          <p id="debut" >&nbsp;&nbsp;SINON</p> \
          <p id="recherche" >&nbsp;&nbsp;DSINON</p> \
          <p id="si">&nbsp;&nbsp;&nbsp;&nbsp;trouv <-- FAUX ;</p> \
          <p id="insertionInterne">&nbsp;&nbsp;&nbsp;&nbsp;cpt <-- cpt - 1 ;</p> \
          <p id="fsi" >&nbsp;&nbsp;FINSINON;</p> \
           <p id="fin" >FIN</p>';
//CORPS DE L'ALGORITHME DE RECHECHE DICHOTOMIQUE ( affiché dans la fenetre d'algorithme dans notre interface dans l'opération : Recherche dans ZONE ORDONNEE )
const algo_recherche_dico = '<p >Procedure Recherche_Dicho(zone , key = ?  , VAR cpt , VAR trouv ) { </p> \
          <p id="afectation">SOIT: </p> \
          <p id="afectation">&nbsp;&nbsp;key_actuel,borne_inf,borne_sup,mid:Entiers;</p> \
        <p id="debut">DEBUT:</p> \
          <p id="tq">&nbsp;&nbsp;cpt <-- 0 ;</p> \
          <p id="rechercheInterne">&nbsp;&nbsp;borne_inf <-- 0 ;</p> \
          <p id="passageFils">&nbsp;&nbsp;borne_sup <-- zone.taille() -1 ;</p> \
          <p id="ftq">&nbsp;&nbsp;trouv <-- FAUX ;</p> \
          <p id="fin" >&nbsp;&nbsp;TANTQUE( NON trouv ET borne_inf <= borne_sup ) : </p>\
          <p id="tq">&nbsp;&nbsp;DEBUT TANTQUE</p> \
          <p id="rechercheInterne">&nbsp;&nbsp;&nbsp;&nbsp;mid <-- (borne_inf+borne_sup)/2 ;</p> \
          <p id="passageFils">&nbsp;&nbsp;&nbsp;&nbsp;SI( zone[mid].key = key ) :</p> \
          <p id="ftq">&nbsp;&nbsp;&nbsp;&nbsp;DSI</p> \
          <p id="fin" >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;trouv <-- VRAI ;</p>\
          <p id="afectation">&nbsp;&nbsp;&nbsp;&nbsp;FINSI; </p> \
          <p id="debut" >&nbsp;&nbsp;&nbsp;&nbsp;SINON SI( zone[mid].key < key ) </p> \
          <p id="recherche" >&nbsp;&nbsp;&nbsp;&nbsp;DSI</p> \
          <p id="si">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;borne_sup <-- mid-1 ;;</p> \
          <p id="insertionInterne">&nbsp;&nbsp;&nbsp;&nbsp;FINSI;</p> \
          <p id="fsi" >&nbsp;&nbsp;&nbsp;&nbsp;SINON:</p> \
          <p id="fsi" >&nbsp;&nbsp;&nbsp;&nbsp;DSINON</p> \
          <p id="fsi" >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;borne_inf <-- mid+1 ;</p> \
          <p id="fsi" >&nbsp;&nbsp;&nbsp;&nbsp;FINSINON;</p> \
          <p id="fsi" >&nbsp;&nbsp;FIN TANTQUE;</p> \
          <p id="fsi" >&nbsp;&nbsp;SI ( trouv ) : </p> \
          <p id="fsi" >&nbsp;&nbsp;DSI</p> \
          <p id="fsi" >&nbsp;&nbsp;&nbsp;&nbsp;cpt <-- mid</p> \
          <p>&nbsp;&nbsp;&nbsp;&nbsp;Ecrire("Existe!") ;</p> \
          \<p>&nbsp;&nbsp;FINSI;</p> \
          \<p>&nbsp;&nbsp;SINON</p> \
          \<p>&nbsp;&nbsp;DSINON</p> \
          \<p>&nbsp;&nbsp;&nbsp;&nbsp;cpt <-- borne_sup ;</p> \
          \<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ecrire("Existe Pas!!") ;</p> \
          \<p>&nbsp;&nbsp;FINSINON;</p> \
          <p id="fin" >FIN</p>';

// CORPS DE L'ALGORITHME D'INSERTION DANS ZONE ORDONNEE ( AFFICHE LORSQU'ON CLIQUE SUR INSERER )
const algo_inserer_Dicho =
    ' <p>Procedure Inserer_Dicho(zone , enr ( enr.key = ?)  , VAR cpt , VAR trouv ) { </p> \
  <p>SOIT:</p> \
  <p>&nbsp;&nbsp;Recherche_Dicho:Procedure;</p>\
  <p>DEBUT:</p>\
  <p>&nbsp;&nbsp;Recherche_Dicho(zone, enr.key = ? , cpt , trouv);</p>\
  <p>&nbsp;&nbsp;SI( trouv ) :</p> \
  <p>&nbsp;&nbsp;DEBUTSI</p> \
  <p>&nbsp;&nbsp;&nbsp;&nbsp;ECRIRE("Pas d\'insertion . Existe déja !!");</p> \
  <p>&nbsp;&nbsp;FINSI;</p> \
  <p>&nbsp;&nbsp;SINON</p> \
  <p>&nbsp;&nbsp;DSINON</p> \
  <p>&nbsp;&nbsp;&nbsp;&nbsp;POUR i allant de cpt à zone.taille()-1 FAIRE:</p>\
    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;zone[i+1] <-- zone[i] ;</p>\
  <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;zone[cpt] <-- enr</p> \
  <p>&nbsp;&nbsp;&nbsp;&nbsp;ECRIRE("l"insertion est terminée ! ");</p>\
  <p>&nbsp;&nbsp;FINSINON;</p> \
  <p>FIN.</p>';

// CORPS DE L'ALGORITHME D'INSERTION DANS ZONE NON ORDONNEE ( AFFICHE LORSQU'ON CLIQUE SUR INSERER )
const algo_inserer_seq =
    '<p>Procedure Inserer_Seq(zone , enr ( enr.key = ?)  , VAR cpt , VAR trouv ) :</p>\
  <p>SOIT:</p> \
  <p>&nbsp;&nbsp;Recherche_Seq:Procedure;</p>\
  <p>DEBUT:</p>\
    <p>&nbsp;&nbsp;Recherche_Seq(zone, enr.key = ? , cpt , trouv);</p> \
  <p>&nbsp;&nbsp;SI( trouv ) :</p> \
  <p>&nbsp;&nbsp;DSI</p> \
  <p>&nbsp;&nbsp;&nbsp;&nbsp;ECRIRE("EXiste déja , Pas d\'insertion !"); </p> \
  <p>&nbsp;&nbsp;FINSI;</p> \
  <p>&nbsp;&nbsp;SINON</p> \
  <p>&nbsp;&nbsp;DSINON</p> \
  <p>&nbsp;&nbsp;&nbsp;&nbsp;zone[zone.taille()] = enr;</p>\
  <p>&nbsp;&nbsp;&nbsp;&nbsp;zone.incrementer_taille();</p>\
  <p>&nbsp;&nbsp;&nbsp;&nbsp;ECRIRE("Insertion terminée"); </p> \
  <p>&nbsp;&nbsp;FINSINON;</p> \
  <p>FIN.</p>';

// CORPS DE L'ALGORITHME DE SUPPRESSION  DANS ZONE ORDONNEE ( AFFICHE LORSQU'ON CLIQUE SUR SUPPRIMER )
const algo_supp_dicho =
    '<p>Procedure Supprimer_Dicho(zone , key = ?  , VAR cpt , VAR trouv ) {</p> \
  <p>SOIT:</p> \
  <p>&nbsp;&nbsp;Recherche_Dicho:Procedure;</p>\
  <p>DEBUT:</p>\
  <p>&nbsp;&nbsp;Recherche_Dicho(zone, key = ? , *cpt , *trouv);</p>\
  <p>&nbsp;&nbsp;SI( trouv ) :</p> \
  <p>&nbsp;&nbsp;DSI </p> \
  <p>&nbsp;&nbsp;&nbsp;&nbsp;POUR i allant de cpt+1 à zone.taille()-1 FAIRE:</p> \
  <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;zone[i] <-- zone[i+1] ; zone[i+1] <-- -1</p> \
  <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ECRIRE("Suppression terminée");</p> \
  <p>&nbsp;&nbsp;FINSI;</p> \
  <p>&nbsp;&nbsp;SINON</p> \
  <p>&nbsp;&nbsp;DSINON</p> \
  <p>&nbsp;&nbsp;&nbsp;&nbsp;ECRIRE("N\'existe pas ! . Pas de suppresiion ! );</p> \
  <p>&nbsp;&nbsp;FINSINON;</p> \
  <p>FIN.</p> ';
// CORPS DE L'ALGORITHME DE SUPPRESSION  DANS ZONE NON ORDONNEE ( AFFICHE LORSQU'ON CLIQUE SUR SUPPRIMER )
const algo_supp_seq =
    '<p>Procedure Supprimer_Seq(zone , key = ?  , VAR cpt , VAR trouv ) {</p> \
  <p>SOIT:</p> \
  <p>&nbsp;&nbsp;Recherche_Seq:Procedure;</p>\
  <p>DEBUT:</p>\
  <p>&nbsp;&nbsp;Recherche_Seq(zone, key = ? , *cpt , *trouv);</p>\
  <p>&nbsp;&nbsp;SI( trouv ) :</p> \
  <p>&nbsp;&nbsp;DSI </p> \
  <p>&nbsp;&nbsp;&nbsp;&nbsp;zone[cpt] <--zone[taille(zone)]</p> \
  <p>&nbsp;&nbsp;&nbsp;&nbsp;zone[taille(zone)].key<-- -1</p> \
  <p>&nbsp;&nbsp;&nbsp;&nbsp;ECRIRE("Supression terminée");</p> \
  <p>&nbsp;&nbsp;FINSI;</p> \
  <p>&nbsp;&nbsp;SINON</p> \
  <p>&nbsp;&nbsp;DSINON</p> \
  <p>&nbsp;&nbsp;&nbsp;&nbsp;ECRIRE("N\èexiste pas ! . Pas de suppression !);</p> \
  <p>&nbsp;&nbsp;FINSINON;</p> \
  <p>FIN.</p> ';
// CORPS DE L'ALGORITHME DE TRI (  AFFICHE LORSQU'ON CLIQUE SUR TRIER )
const algo_trie =
    '<p>Procedure Tri_Selection(VAR zone) { </p> \
  <p>SOIT:</p> \
  <p>&nbsp;&nbsp;i,j,indice_min_key:Entiers; </p> \
  <p>DEBUT:</p> \
  <p>&nbsp;&nbsp;POUR i allant de 0 à zone.taille()-1 FAIRE:</p> \
  <p>&nbsp;&nbsp;DEBUT POUR</p> \
  <p>&nbsp;&nbsp;&nbsp;&nbsp;indice_min_key=i</p> \
  <p>&nbsp;&nbsp;&nbsp;&nbsp;POUR j allant de i+1 à zone.taille()-1 FAIRE:</p> \
  <p>&nbsp;&nbsp;&nbsp;&nbsp;DEBUT POUR</p> \
  <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SI( zone[j].key < zone[indice_min_key].key )</p> \
  <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;indice_min_key <-- j ;</p> \
  <p>&nbsp;&nbsp;&nbsp;&nbsp;FIN POUR;</p>\
  <p>&nbsp;&nbsp;&nbsp;&nbsp;Permuter(zone[i] , zone[indice_min_key] )</p> \
  <p>&nbsp;&nbsp;FIN POUR;</p>\
  <p>&nbsp;&nbsp;Ecrire("Votre zone est ordonée maintenant")</p> \
  <p>FIN.</p>';

// CORPS DE L'ALGORITHME D'EXTRACTION POUR LA ZONE NON ORODNNEE ( AFFICHE LORSQU'ON CLIQUE SUR EXTRAIRE )
const algo_extraire_seq =
    '<p>Fonction Extraire_Seq(zone , sup  ,inf ) {</p> \
  <p>SOIT:</p> \
  <p>&nbsp;&nbsp;Supprimer_Seq:Procedure;</p>\
  <p>&nbsp;&nbsp;i:Entier;</p>\
  <p>DEBUT:</p>\
  <p>&nbsp;&nbsp;POUR i allant de 0 à taille(zone)-1 FAIRE:</p>\
  <p>&nbsp;&nbsp;DEBUT POUR</p> \
  <p>&nbsp;&nbsp;&nbsp;&nbsp;SI( zone[i].key < inf || zone[i].key > sup) :</p> \
  <p>&nbsp;&nbsp;&nbsp;&nbsp;DSI </p> \
  <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Supprimer_Seq(zone , zone[i].key , *cpt , *trouv);</p> \
  <p>&nbsp;&nbsp;&nbsp;&nbsp;FINSI</p> \
  <p>&nbsp;&nbsp;FIN POUR</p>\
  <p>&nbsp;&nbsp;Extraire_seq<-- zone;</p> \
  <p>&nbsp;&nbsp;ECRIRE("L\'extraction est terminée");</p> \
  <p>FIN.</p> ';
// CORPS DE L'ALGORITHME D'EXTRACTION POUR LA ZONE  ORODNNEE ( AFFICHE LORSQU'ON CLIQUE SUR EXTRAIRE )
const algo_extraire_dicho =
    '<p>Fonction Extraire_dicho(zone , sup  ,inf ) {</p> \
  <p>SOIT:</p> \
  <p>&nbsp;&nbsp;Supprimer_Dicho:Procedure;</p>\
  <p>&nbsp;&nbsp;Recherche_Dicho:Procedure;</p>\
  <p>&nbsp;&nbsp;i,i1,i2:Entiers;</p>\
  <p>DEBUT:</p>\
  <p>&nbsp;&nbsp;Recherche_Dicho( zone , inf , *i1 , trouv1 )</p>\
  <p>&nbsp;&nbsp;SI(trouv1) : i1<-- i1-1;</p>\
  <p>&nbsp;&nbsp;Recherche_Dicho( zone , sup , *i2 , trouv2 )</p> \
  <p>&nbsp;&nbsp;SI(trouv2) : i2<-- i2+1;</p>\
  <p>&nbsp;&nbsp;POUR i allant de 0 à i1 FAIRE:</p> \
  <p>&nbsp;&nbsp;DEBUT POUR </p> \
  <p>&nbsp;&nbsp;&nbsp;&nbsp;Supprimer_Dicho(zone , zone[i].key , *cpt , true)</p> \
  <p>&nbsp;&nbsp;FIN POUR</p> \
  <p>&nbsp;&nbsp;POUR i allant de i2 à taille(zone)-1 FAIRE:</p> \
  <p>&nbsp;&nbsp;DEBUT POUR </p> \
  <p>&nbsp;&nbsp;&nbsp;&nbsp;Supprimer_Dicho(zone , zone[i].key , *cpt , true)</p> \
  <p>&nbsp;&nbsp;FIN POUR</p> \
  <p>&nbsp;&nbsp;Extraire_seq<-- zone;</p> \
  <p>&nbsp;&nbsp;ECRIRE("L\'extraction est terminée");</p> \
  <p>FIN.</p> ';
// LES INSTRUCTIONS à EXECUTER QUAND LA PAGE HTML DE FICHIER VUE COMME UN TABLEAU EST LANCE
$(document).ready(() => {
    $('#tab').tabs({ hide: 'fadeOut', show: 'fadeIn' });
    $('.Zone').each(function() {
        let bg = generate_bg();
        let bg_values = bg[0];
        let bg_keys = bg[1];
        $(this).children().children().children().css(bg_values);
        $(this).children().children().children('.key').css(bg_keys);
    });

    $('#submit_enreg').click(submit_enreg);
    $('#submit_enreg_zone').click(submit_enreg_zone);
    document.querySelector('#submit_zone').addEventListener('click', function(e) {
        let nbr_enreg = Math.floor(Number(document.querySelector('#sub_zone').value));
        //CONTROLE DE SAISIE SUR LA  FORMULAIRE DE CREATION
        if (nbr_enreg <= 10 && nbr_enreg > 0) {
            submit_zone(e);
        } else {
            set_comment("Erreur !");
            if (nbr_enreg <= 0) {
                showalert("On accepte pas les valeurs nulles/négatives !!", "#ff0000");
            } else {
                showalert("Vous ne pouvez pas générer plus de 10 enregsitrements dans votre zone !!", "#ff0000");
            }
        }
    });
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
        if (id_visible_now === "photo4") {
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
        } else if (id_visible_now === "photo") {
            document.getElementById("suivant").style.display = "flex";
        }

    });
    // SET INTERVAL = FONCTION EXECUTE DE FACON CONTINUE SANS ARRET
    let interv = setInterval(() => {
        // CONTROLE DES DIMENSIONS  DE NOS ENREGSITREMENTS DANS L'INTERFACE
        verif_keys_1000();
        let ord = document.querySelector('#ord').children[0].querySelector('input').checked;
        // SI LA ZONE EST ORDONEE LE BOUTTON : TRIER SERA VERROUILLE
        if (ord && !document.querySelector('#trier_zone').classList.contains('interdit')) {
            document.querySelector('#trier_zone').classList.add('interdit');
        }
        //CONTROLE DE MESSAGE A AFFICHER A L'UTILISATEUR QUAND IL PASSE LE CURSEUR DE SOURIS SUR UN BOUTTON
        let enrs = document.querySelectorAll('.ENR');
        if (ord && enrs.length !== 0 && (document.querySelector('#yay').innerText.length === 0 || document.querySelector('#yay').innerText.includes('*'))) {
            showalert("* Votre zone est ordonnée !", "#00ff00", false);
            let yay = document.querySelector('#yay');
            $(yay).fadeOut(500);
            setTimeout(() => {
                $(yay).fadeIn(500);
            }, 500)
        } else if (!ord && enrs.length !== 0 && (document.querySelector('#yay').innerText.length === 0 || document.querySelector('#yay').innerText.includes('*'))) {
            showalert("* Votre zone n'est pas ordonnée !", "#ff0000", false);
            let yay = document.querySelector('#yay');
            $(yay).fadeOut(500);
            setTimeout(() => {
                $(yay).fadeIn(500);
            }, 500)
        }
    }, 1000);
    ouvrir_fentre_comment();
    set_comment("Vous n'avez maintenant aucune zone à manipuler , on commance par la création ...");
    launch_aide();
    set_hover($("#create"), "Générer une zone");
    set_hover($("#rechercher_zone"), "Rechercher un enregsitrement définit par une clé donnée");
    set_hover($('#inserer_enr'), "Inserer un enregsitrement définit par une clé donnée");
    set_hover($('#supprimer_enr'), "Supprimer un enregsitrement définit par une clé donnée");
    set_hover($("#extraire_enrs"), "Extraire les enregistrements selon les critéres données sur leurs clés");
    set_hover($("#trier_zone"), "Trier vos enregsitrements selons leurs clés !!");
    setInterval(() => {
        verif_keys_1000();
        let ord = document.querySelector('#ord').children[0].querySelector('input').checked;
        if (ord) {
            if (document.querySelector('#key_src') != null && document.querySelector('#key_src').value.length !== 0) {
                $("#start_rech").attr("title", "Cliquez pour éxécuter l'algorithme de Recherche dichotomique de la cle : " + document.querySelector('#key_src').value);
                set_hover($("#start_rech"), "Cliquez pour éxécuter l'algorithme de Recherche dichotomique  de la clé : " + document.querySelector('#key_src').value, false);
            } else {
                set_hover($("#start_rech"), "Veuillez nous donner la clé d'abord  !!", false);
                $("#start_rech").attr("title", "Veuillez nous donner la clé d'abord  !!");
            }
            if (document.querySelector('#key_ins') != null && document.querySelector('#key_ins').value.length !== 0) {
                set_hover($("#start_ins"), "Exécuter l'algorithme de l'insertion dans zone ordonnée d'enregistrement définit par la cle : " + document.querySelector('#key_ins').value, false);
                $("#start_ins").attr("title", "Cliquez pour éxécuter l'algorithme de l'insertion dans TOF d'enregistrement définit par la cle : " + document.querySelector('#sub_ins').value);
            } else {
                set_hover($("#start_ins"), "Veuillez nous donner la clé d'abord  !!", false);
                $("#start_ins").attr("title", "Veuillez nous donner la clé d'abord  !!");
            }
            if (document.querySelector('#key_supp') != null && document.querySelector('#key_supp').value.length !== 0) {
                set_hover($("#start_supp"), "Cliquez pour éxécuter l'algorithme de suppression dans zone ordonnée d'enregistrement définit par  la cle : " + document.querySelector('#key_supp').value, false);
                $("#start_supp").attr("title", "Cliquez pour éxécuter l'algorithme de suppression dans TOF d'enregistrement définit par  la cle : " + document.querySelector('#sub_del').value);
            } else {
                $("#start_supp").attr("title", "Veuillez nous donner la clé d'abord  !!", false);
                set_hover($("#start_supp"), "Veuillez nous donner la clé d'abord  !!");
            }
        } else if (!ord) {
            if (document.querySelector('#key_src') != null && document.querySelector('#key_src').value.length !== 0) {
                $("#start_rech").attr("title", "Cliquez pour éxécuter l'algorithme de Recherche séquentielle de la cle : " + document.querySelector('#key_src').value);
                set_hover($("#start_rech"), "Cliquez pour éxécuter l'algorithme de Recherche séquentielle de la clé :" + document.querySelector('#key_src').value, false);
            } else {
                set_hover($("#start_rech"), "Veuillez nous donner la clé d'abord  !!", false);
                $("#start_rech").attr("title", "Veuillez nous donner la clé d'abord  !!");
            }
            if (document.querySelector('#key_ins') != null && document.querySelector('#key_ins').value.length !== 0) {
                set_hover($("#start_ins"), "Executer l'algorithme de l'insertion dans zone non ordonée  d'enregistrement définit par la cle : " + document.querySelector('#key_ins').value, false);
                $("#start_ins").attr("title", "Cliquez pour éxécuter l'algorithme de l'insertion dans T\\OF d'enregistrement définit par la cle : " + document.querySelector('#sub_ins').value);
            } else {
                set_hover($("#start_ins"), "Veuillez nous donner la clé d'abord  !!", false);
                $("#start_ins").attr("title", "Veuillez nous donner la clé d'abord  !!");
            }
            if (document.querySelector('#key_supp') != null && document.querySelector('#key_supp').value.length !== 0) {
                set_hover($("#start_supp"), "Exécuter l'algorithme de suppression dans T\\OF d'enregistrement définit par  la cle : " + document.querySelector('#key_supp').value, false);
                $("#start_supp").attr("title", "Cliquez pour éxécuter l'algorithme de suppression dans T\\OF d'enregistrement définit par  la cle : " + document.querySelector('#sub_del').value);
            } else {
                set_hover($("#start_supp"), "Veuillez nous donner la clé d'abord  !!", false);
                $("#start_supp").attr("title", "Veuillez nous donner la clé d'abord  !!");
            }
        }
        if (document.querySelector('#start_extraire') != null && document.querySelector('#sup') != null && document.querySelector('#inf') != null && document.querySelector('#sup').value.length !== 0 && document.querySelector('#inf').value.length !== 0) {
            set_hover($("#start_extraire"), "Extraire les clés qui se trouvent dans l'intervalle [ " + document.querySelector('#sup').value + " , " + document.querySelector('#inf').value + " ]", false);
            $("#start_supp").attr("title", "Cliquez pour éxécuter l'algorithme de suppression dans T\\OF d'enregistrement définit par  la cle : " + document.querySelector('#sub_del').value);
        } else if (document.querySelector('#start_extraire') != null) {
            set_hover($("#start_extraire"), "Veuillez nous donner la clé d'abord  !!", false);
            $("#start_extraire").attr("title", "Veuillez nous donner la clé d'abord  !!");
        }
    }, 500);
});

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
// FONCTIONNALITE DE BOUTTON : RECHERCHER
function start_recherche(e, input, rech, vitesse_animation) {
    if (rech) {
        document.querySelectorAll('.selection:not(#create)').forEach((elem) => {
            elem.classList.add('interdit');
        });
    }
    let trouv = false;
    if (rech) {
        non_animer_alg([0, 1, 2, 3, 4, 5]);

    }
    let father = e.target.parentElement;
    let par = e.target.parentElement;
    let begin = false;
    let key_search = Number(input.value);
    let cpt_final = -1;
    let enrs = e.target.parentElement.querySelectorAll('.ENR');
    if (key_search.length !== 0) {
        set_comment("Rechercher enregistrement par enregistrement ....");
        showalert('Une recherche séquentielle de ' + key_search + '  est commencée !!', "#00ff00");
        begin = true;
        $(e.target.parentElement.querySelector('#key_src')).fadeOut(500, function() {
            $(this).remove()
        });
        $(e.target.parentElement.querySelector('#start_rech')).fadeOut(500, function() {
            $(this).remove()
        });
    } else {
        showalert("Donnez la clé d'abord !", "#ff0000");
    }
    let nbr_animation = 0;
    let continuer = true;
    if (begin) {
        let cpt = 0;
        while (continuer && cpt < enrs.length) {
            let bloc = enrs[cpt].children;
            setTimeout(() => {
                let anime1 = anime({
                    targets: Array.from(bloc),
                    backgroundColor: "#333",
                    duration: vitesse_animation,
                });
            }, nbr_animation * vitesse_animation);
            nbr_animation++;
            let key = Number(bloc[0].innerText);
            if (key !== key_search && cpt !== enrs.length - 1) {
                setTimeout(() => {
                    if (rech) {
                        animer_alg([7, 8, 9, 10]);
                        setTimeout(() => {
                            non_animer_alg([7, 8, 9, 10]);
                        }, vitesse_animation);
                    }
                    let anime2 = anime({
                        targets: Array.from(bloc),
                        backgroundColor: "#ff0000",
                    });

                }, nbr_animation * vitesse_animation);
                nbr_animation++;
            } else if (key !== key_search && cpt === enrs.length - 1) {
                setTimeout(() => {
                    if (rech) {
                        animer_alg([16, 17, 18, 19]);
                    }
                    let anime3 = anime({
                        targets: Array.from(bloc),
                        backgroundColor: "#ff0000",
                    });

                }, nbr_animation * vitesse_animation);
            } else {
                cpt_final = cpt;
                continuer = false;
                setTimeout(() => {
                    if (rech) {
                        animer_alg([11, 12, 13, 14]);
                    }
                    trouv = true;
                    set_comment("L'enregsitrement est détécté ...");
                    let anime4 = anime({
                        targets: Array.from(bloc),
                        backgroundColor: "#00ff00",
                    });
                }, nbr_animation * vitesse_animation);
                nbr_animation++;
            }
            cpt++;
        }
        if (rech) {
            setTimeout(() => {
                if (trouv) {
                    showalert('La clé ' + key_search + ' éxiste déja dans notre zone ', '#00ff00');
                    set_comment("La cle " + key_search + " est détéctée ");
                } else {
                    showalert("La clé " + key_search + " n'éxiste pas dans notre zone ", 'orange');
                    set_comment("La cle " + key_search + " n'existe pas ");
                }
                setTimeout(() => {
                    set_comment("FIN ...");
                    setTimeout(() => {
                        fermer_fentre_comment();
                    }, 300);
                }, 3000);
                add_retour_btn(par, vitesse_animation);
            }, nbr_animation * vitesse_animation);
            nbr_animation++;
        } else {
            setTimeout(() => {}, nbr_animation * vitesse_animation);
        }

    }
    if (rech) {
        setTimeout(() => {
            document.querySelectorAll('.selection:not(#create)').forEach((elem) => {
                elem.classList.remove('interdit');
            });
        }, nbr_animation * vitesse_animation);
    }
    return [nbr_animation + 1, cpt_final];

}


function generate_bg() {
    let rand_1 = Math.random() * 255;
    let rand_2 = Math.random() * 255;
    let rand_3 = Math.random() * 255;
    let rgb = `rgb(${Math.ceil(rand_1)},${Math.ceil(rand_2)},${Math.ceil(rand_3)})`;
    let rgba = `rgba(${Math.ceil(rand_1)},${Math.ceil(rand_2)},${Math.ceil(rand_3)},0.7)`;
    return [{ 'background': rgb }, { 'background': rgba }];
}

// LA FONCTIONNALITE DE  PREMIER BOUTTON SOUMETTRE QU'AFFICHE PENDANT L'OPERATION DE CREATION
function submit_enreg(e) {
    let classparent = e.target.parentElement.className;
    let yay = document.createElement('p');
    yay.id = 'yay';
    $(e.target).parent().prepend(yay);
    showalert(document.querySelector('#sub_enr').value);
    if (document.querySelector('#sub_enr').value < 9 && document.querySelector('#sub_enr').value > 0) {
        $(e.target.parentElement).append(enr(document.querySelector('#sub_enr').value));
        document.querySelector('#sub_enr').value = null;
        $(e.target).parent().children('.ENR').show({ effect: "bounce", duration: 250 });
    }
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

// LA FONCTIONNALITE DE  DEUXIEME BOUTTON SOUMETTRE QU'AFFICHE PENDANT L'OPERATION DE CREATION
function submit_enreg_zone(e) {
    let classparent = e.target.parentElement.className;
    if (document.querySelector('#sub_enr_zone') !== null) {
        let values = document.querySelector('#sub_enr_zone').value;
        if (values < 9 && values > 0) {
            $(e.target).fadeOut(250);
            $(e.target).parent().children('#sub_enr_zone').fadeOut(250);
            setTimeout((target = e.target) => {
                $(target).parent().children('#sub_zone').fadeIn(250);
                $(target).parent().children('#submit_zone').fadeIn(250);
                $(target).parent().children('#ord').fadeIn(250).css({ 'display': 'flex' });
            }, 250);

        } else {
            showalert(values);
        }
    }
}
// GENERER LA ZONE
function submit_zone($event, ...vars) {
    let e = $event;
    let cpt = 0;
    let men = null;


    document.querySelectorAll('.selection:not(#create)').forEach((elem) => {
        elem.classList.remove('interdit');
    });
    document.querySelector('#create').classList.add('interdit');
    let par = e.target.parentElement;
    let classparent = e.target.parentElement.className;
    let ord = e.target.parentElement.querySelector('#ord').children[0].querySelector('input').checked;
    let key_prec = 0;
    $(e.target).parent().prepend(yay);
    let how_many_struct = Math.floor(document.querySelector('#sub_zone').value);
    let how_many_val;
    if (vars.length === 0)
        how_many_val = 3;
    else
        how_many_val = vars[0];
    if (how_many_struct <= 10 && how_many_struct > 0) {
        showalert("la zone est générée !", "#00ff00");
        $('#sub_zone').fadeOut(500);
        $("#ord").fadeOut(500);
        $('#submit_zone').fadeOut(500);
        set_comment("Votre zone est généré Avec succés !");
    } else {
        showalert("Vous ne pouvez pas générer une zone avec plus de 10 enregistrements", "#ff0000");
    }
    if (how_many_struct <= 10 && how_many_struct > 0) {
        while (cpt < how_many_struct) {
            let enrege = enr(how_many_val, key_prec, ord);
            key_prec = Number(enrege.querySelector('.key').innerText);
            setTimeout((enreg = enrege) => {
                if (cpt !== 0) {
                    enreg.style.marginTop = "0";
                }
                if (cpt !== how_many_struct - 1) {
                    enreg.style.marginBottom = "0";
                }
                $(e.target.parentElement).append(enreg);
                $(e.target).parent().children('.ENR').show({ effect: "bounce", duration: 250 });
            }, (cpt + 1) * 250);
            cpt++;
        }
        setTimeout(() => {
            men = add_menu(e.target.parentElement, e.target.parentElement.querySelector('#ord').children[0].querySelector('input').checked);
            set_comment("FIN ...");
            setTimeout(() => {
                fermer_fentre_comment();
            }, 300);
            return men
        }, (cpt + 1) * 250)
    }
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
        mere_3values.className = 'not-del';
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


function add_menu(parent, ord) {}

// FONCTION DE BOUTTON : TRIER
function allez_trie(e) {
    ouvrir_alg(algo_trie);
    setTimeout(() => {
        animer_alg([0, 1, 2, 3]);
    }, 2);
    if (document.querySelector("#start_tri") == null) {
        let father = e.target.parentElement;
        let start_tri = document.createElement('button');
        start_tri.type = "number";
        start_tri.id = "start_tri";
        start_tri.innerText = "Triez !";
        let vitesse = document.getElementById("myRange");
        start_tri.style.display = "none";
        $(start_tri).click(function(e) {
            document.querySelectorAll('#start_tri').forEach((elem) => { $(elem).fadeOut(500); });
            trier_zone(e, vitesse.value);
        });
        $(father).append(start_tri);
        $(start_tri).fadeIn(500);
    } else {
        $("#start_tri").fadeIn(500);
    };
}
//ANIMATIONS DE TRI
function trier_zone(e, vitesse_animation) {
    ouvrir_fentre_comment();
    set_comment("L'opération de tri par séléction est en cours d'éxécution ...");
    document.querySelectorAll('.selection:not(#create)').forEach((elem) => {
        elem.classList.add('interdit');
    });
    showalert('Un tri par séléction se fait mainteneant pour ordonner votre zone...', "orange");
    non_animer_alg([0, 1, 2, 3]);
    let par = e.target.parentElement.parentElement;
    let cpt_deplacer = 0;
    let min = 1000;
    let min_before = null;
    let now = 0;
    let indice = 0;
    let cpt = 0;
    let nbr_animation = 0;
    let keys_end = [];
    let enrs = e.target.parentElement.parentElement.querySelectorAll('.ENR');
    let taille = enrs.length;
    anime({
        targets: Array.from(enrs[0].children),
        backgroundColor: '#ff0000',
    });
    animer_alg([4, 5, 13]);
    animer_alg([6]);
    setTimeout(() => {
        non_animer_alg([6]);
    }, vitesse_animation);
    while (now !== taille) {
        animer_alg([7, 8, 11]);
        cpt = now;
        let bloc_current_min = enrs[now].children;
        let bloc_current_init = enrs[now].children;
        let key_current_min = Number(enrs[now].querySelector('.key').innerText);
        while (cpt !== enrs.length) {
            let bloc = enrs[cpt].children;
            let key = Number(enrs[cpt].querySelector('.key').innerText);
            if (key > key_current_min) {
                setTimeout(() => {
                    anime({
                        targets: Array.from(bloc),
                        backgroundColor: "#333",
                        duration: vitesse_animation / 2,
                        direction: 'alternate',
                    });
                }, nbr_animation * vitesse_animation);
                nbr_animation++;
            } else {
                setTimeout(() => {
                    animer_alg([9, 10]);
                    anime({
                        targets: Array.from(bloc_current_min),
                        backgroundColor: "#ffefdb"
                    });
                    anime({
                        targets: Array.from(bloc),
                        backgroundColor: '#ff0000',
                    });
                    bloc_current_min = bloc;
                }, nbr_animation * vitesse_animation);
                key_current_min = key;
                nbr_animation++;
            }
            cpt++;
        }
        let indicee = print_keys(enrs).indexOf(key_current_min.toString());
        setTimeout(() => {
            deplacer(enrs, bloc_current_min, -(indicee - cpt_deplacer), vitesse_animation);
            deplacer(enrs, bloc_current_init, indicee - cpt_deplacer, vitesse_animation);
            animer_alg([12]);
            setTimeout(() => {
                non_animer_alg([12]);
            }, vitesse_animation * 3);

            cpt_deplacer++;
        }, nbr_animation * vitesse_animation);
        nbr_animation += 3;
        setTimeout(() => {
            anime({
                targets: Array.from(bloc_current_min),
                backgroundColor: '#00ff00',
            });
        }, nbr_animation * vitesse_animation);
        nbr_animation++;
        let new_z = new_zone(enrs, now, print_keys(enrs).indexOf(key_current_min.toString()));
        setTimeout(() => {
            renouveler(enrs, new_z);
            animer_alg([7, 8, 11]);
        }, nbr_animation * vitesse_animation);
        nbr_animation++;
        enrs = new_z;
        now++;
    }
    animer_alg([4, 5, 13]);
    setTimeout(() => {
        non_animer_alg([4, 5, 7, 8, 9, 10, 11, 13]);
        animer_alg([14]);
        showalert('Votre zone est ordonné maintenant', "#00ff00");
        set_comment("L'opération de tri est terminée , votre zone est ordonnée maintennant ...");
        setTimeout(() => {
            set_comment("FIN...");
            setTimeout(() => {
                fermer_fentre_comment();
            }, 300);
        }, 500);
        add_retour_btn(par);
    }, nbr_animation * vitesse_animation);
    nbr_animation++;
    e.target.parentElement.parentElement.querySelector('#ord').children[0].querySelector('input').checked = true;
    setTimeout(() => {
        document.querySelectorAll('.selection:not(#create)').forEach((elem) => {
            elem.classList.remove('interdit');
        });
    }, nbr_animation * vitesse_animation);
}

//LES ANIMATIONS DE RECHERCHE DICHOTOMIQUE DE LA CLE 'key' DANS LA ZONE 'enrs' AVEC UNE VITESSE D'ANIMATION : vitesse
function start_recherche_dico(e, input, rech, vitesse_animation) {
    ouvrir_fentre_comment();
    if (rech) {
        document.querySelectorAll('.selection:not(#create)').forEach((elem) => {
            elem.classList.add('interdit');
        });
    }

    if (rech) {
        non_animer_alg([0, 1, 2, 3, 4, 5, 6, 7]);
    }
    let father = e.target.parentElement;
    let par_menu = e.target.parentElement;
    let begin = false;
    let cible;
    let key_search = Number(input.value);
    let bi_now = 0;
    let bs_now = 0;
    let existe = false;
    let yay = e.target.parentElement.querySelector('#yay');
    let enrs = e.target.parentElement.querySelectorAll('.ENR');
    if (key_search.length !== 0) {
        set_comment("La recherche dichotomique est en cours ...");
        showalert('Une recherche dichotomique de la cle ' + key_search + ' est commencée !', "#00ff00");
        begin = true;
        $(e.target.parentElement.querySelector('#key_src')).fadeOut(vitesse_animation / 2, function() {
            $(this).remove()
        });
        $(e.target.parentElement.querySelector('#start_rech')).fadeOut(vitesse_animation / 2, function() {
            $(this).remove()
        });
    } else {
        showalert("Donnez la clé d'abord !!", "#ff0000");
    }

    if (begin) {
        let nbr_animation = 0;
        let continuer = true;
        let bi = 0;
        let bs = enrs.length - 1;
        bi_now = 0;
        bs_now = enrs.length - 1;
        let noramlement = Math.floor((bi + bs) / 2);
        while (continuer && bi <= bs) {
            let mid = Math.floor((bi + bs) / 2);
            let bloc_now = enrs[mid].children;
            let key_now = Number(enrs[mid].querySelector('.key').innerText);
            if (Math.abs(bs - bi) > 1) {
                setTimeout(() => {
                    anime({
                        targets: Array.from(bloc_now),
                        backgroundColor: "#333",
                    });
                }, nbr_animation * vitesse_animation);
                nbr_animation++;
            } else {
                setTimeout(() => {
                    anime({
                        targets: Array.from(bloc_now),
                        backgroundColor: "#333",
                    });
                }, nbr_animation * vitesse_animation);
                nbr_animation++;
                noramlement = Math.max(bi, bs, mid);
            }
            if (key_now < key_search) {
                setTimeout((borne_inf = bi_now, medium = mid) => {
                    for (let i = borne_inf; i <= medium; i++) {
                        let cible = enrs[i].children;
                        if (rech) {
                            animer_alg([20, 21, 22]);
                            setTimeout(() => {
                                non_animer_alg([20, 21, 22]);
                            }, vitesse_animation);
                        }
                        anime({
                            targets: Array.from(cible),
                            backgroundColor: "#ff0000",
                        });
                    }
                    bi_now = medium + 1;
                }, nbr_animation * vitesse_animation);
                nbr_animation++;
                bi = mid + 1;
            } else if (key_now > key_search) {
                setTimeout((medium = mid, borne_sup = bs_now) => {
                    for (let i = medium; i <= borne_sup; i++) {
                        let cible = enrs[i].children;
                        if (rech) {
                            animer_alg([16, 17, 18]);
                            setTimeout(() => {
                                non_animer_alg([16, 17, 18]);
                            }, vitesse_animation);
                        }
                        anime({
                            targets: Array.from(cible),
                            backgroundColor: "#ff0000",
                        });
                    }
                    bs_now = medium - 1;
                }, nbr_animation * vitesse_animation);
                nbr_animation++;
                bs = mid - 1;
            } else {
                existe = true;
                setTimeout((medium = mid) => {
                    let cible = enrs[medium].children;
                    if (rech) {
                        animer_alg([12, 13, 14]);
                        setTimeout(() => {
                            non_animer_alg([12, 13, 14]);
                        }, vitesse_animation);
                    }
                    anime({
                        targets: Array.from(cible),
                        backgroundColor: "#00ff00",
                    });
                }, nbr_animation * vitesse_animation);
                setTimeout(() => {
                    if (rech) {
                        animer_alg([25, 26, 27, 28]);
                    }
                }, (nbr_animation + 1) * vitesse_animation);
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
            cible = enrs[noramlement].children;
        } else {
            cible = null;
            noramlement = -1;
        }
        if (cible !== null && !existe) {
            setTimeout(() => {
                if (rech) {
                    animer_alg([30, 31, 32, 33]);
                }
                anime({
                    targets: Array.from(cible),
                    backgroundColor: "#f1935c",
                })
            }, nbr_animation * vitesse_animation);
            nbr_animation++;
        }


        if (rech) {
            if (existe) {
                showalert('La clé ' + key_search + ' éxiste déja dans notre zone ', '#00ff00');
                setTimeout(() => {
                    set_comment("La cle " + key_search + " est détéctée ");
                    setTimeout(() => {
                        set_comment("FIN ...");
                        setTimeout(() => {
                            fermer_fentre_comment();
                        }, 300);
                    }, 3000);
                }, vitesse_animation * nbr_animation);
            } else {
                showalert("La clé " + key_search + " n'éxiste pas dans notre zone ", 'orange');
                setTimeout(() => {
                    set_comment("L'enregistrement n'existe pas .... ");
                    setTimeout(() => {
                        set_comment("FIN....");
                        setTimeout(() => {
                            fermer_fentre_comment();
                        }, 300);
                    }, 3000);
                }, vitesse_animation * nbr_animation);
            }
            setTimeout(() => {
                add_retour_btn(par_menu);
            }, nbr_animation * vitesse_animation);
            nbr_animation++;
        }
        noramlement = 0;
        while (Number(enrs[noramlement].querySelector('.key').innerText) < key_search) {
            noramlement++;
            if (noramlement === enrs.length) {
                break;
            }
        }
        if (rech) {
            setTimeout(() => {
                document.querySelectorAll('.selection:not(#create)').forEach((elem) => {
                    elem.classList.remove('interdit');
                });
            }, nbr_animation * vitesse_animation);
        }
        return [nbr_animation + 1, noramlement, existe];
    }


}

//FONCTION DE BOUTTON : RECHERCHER
function rechercher_zone(e) {
    let ord = e.target.parentElement.parentElement.querySelector('#ord').children[0].querySelector('input').checked;
    ouvrir_fermer_fentrealgo();
    if (!ord) {
        ouvrir_alg(algo_recherche_seq);
    } else {
        ouvrir_alg(algo_recherche_dico)
    }
    let enrs = e.target.parentElement.parentElement.querySelectorAll('.ENR');
    let taille = enrs.length;
    let now = 0;
    let father = e.target.parentElement.parentElement;
    let key_search = document.createElement('input');
    key_search.id = "key_src";
    key_search.className = "recherche_item";
    key_search.type = "number";
    key_search.placeholder = "la cle ...";
    key_search.style.display = "none";
    let start_rech = document.createElement('button');
    start_rech.type = "number";
    start_rech.id = "start_rech";
    start_rech.innerText = "Rechercher !";
    start_rech.className = "recherche_item";
    start_rech.style.display = "none";
    let vitesse = document.getElementById("myRange");
    if (ord) {
        $(start_rech).click(function(e) {
            if (document.querySelector("#key_src").value.length !== 0) {
                document.querySelectorAll('.recherche_item').forEach((elem) => { $(elem).fadeOut(500); });
                start_recherche_dico(e, key_search, true, vitesse.value)
            } else {
                set_comment("Veuillez nous donner la clé d'abord !!");
            }

        });
    } else {
        $(start_rech).click(function(e) {
            if (document.querySelector("#key_src").value.length !== 0) {
                document.querySelectorAll('.recherche_item').forEach((elem) => { $(elem).fadeOut(500); });
                start_recherche(e, key_search, true, vitesse.value)
            } else {
                set_comment("Veuillez nous donner la clé d'abord !!");

            }
        });
    }
    $(father).append(key_search).append(start_rech);
    $(key_search).fadeIn(500);
    $(start_rech).fadeIn(500);

}

function setValue(e) {
    let range;
    let rangeV;
    if (e !== undefined) {
        range = e.target;
        rangeV = e.target.parentElement.querySelector('#rangeV');
    } else {
        range = document.querySelector('#range');
        rangeV = document.querySelector('#rangeV');
    }
    const
        newValue = Number((range.value - range.min) * 100 / (range.max - range.min)),
        newPosition = 10 - (newValue * 0.2);
    rangeV.innerHTML = '<span>' + range.value.toString() + 'ms/animation </span>';
    rangeV.style.left = `calc(${newValue}% + (${newPosition}px))`;
}

//FONCTIONNALITE DE BOUTTON : INSERER
function inserer_enr(e) {
    let ord = e.target.parentElement.parentElement.querySelector('#ord').children[0].querySelector('input').checked;
    ouvrir_fentre_comment();
    ouvrir_fermer_fentrealgo();
    if (!ord) {
        ouvrir_alg(algo_inserer_seq);
        set_comment("Le corps de l'algorithme de l'insertion (zone non ordonnée  )");
    } else {
        ouvrir_alg(algo_inserer_Dicho);
        set_comment("Le corps de l'algorithme de l'insertion (zone ordonnée  )");
    }
    let enrs = e.target.parentElement.parentElement.querySelectorAll('.ENR');
    let taille = enrs.length;
    let now = 0;
    let father = e.target.parentElement.parentElement;

    let key_ins = document.createElement('input');
    key_ins.id = "key_ins";
    key_ins.type = "number";
    key_ins.placeholder = "La clé ...";
    key_ins.style.display = "none";
    key_ins.className = 'inserer_item';
    let start_ins = document.createElement('button');
    start_ins.type = "number";
    start_ins.id = "start_ins";
    start_ins.innerText = "Inserer !";
    start_ins.className = 'inserer_item';
    start_ins.style.display = "none";
    let vitesse = document.getElementById("myRange");
    $(start_ins).click(function(e) {
        if (document.querySelector('#key_ins').value.length !== 0) {
            document.querySelectorAll('.inserer_item').forEach((elem) => { $(elem).fadeOut(500); });
            start_inserer(e, key_ins, vitesse.value);
        } else {
            set_comment("Veuillez nous donner la clé d'abord !!");
        }

    });
    $(father).append(key_ins).append(start_ins);
    $(key_ins).fadeIn(500);
    $(start_ins).fadeIn(500);
}

//ANIMATIONS DE SUPPRESION
function start_supprimer(e, input, vitesse_animation) {
    document.querySelectorAll('.selection:not(#create)').forEach((elem) => {
        elem.classList.add('interdit');
    });
    let par = e.target.parentElement;
    let ord = e.target.parentElement.parentElement.querySelector('#ord').children[0].querySelector('input').checked;
    let begin = false;
    let key_search = Number(input.value);
    let enrs = e.target.parentElement.querySelectorAll('.ENR');
    if (key_search.length !== 0) {
        showalert("La suppression est commencé", "#00ff00");
        begin = true;
        $(e.target.parentElement.querySelector('#key_supp')).fadeOut(vitesse_animation / 2, function() { $(this).remove() });
        $(e.target.parentElement.querySelector('#start_supp')).fadeOut(vitesse_animation / 2, function() { $(this).remove() });
    } else {

        showalert("Donnez la clé d'abord !", "#ff0000");
    }
    if (ord) {
        let info_dico = start_recherche_dico(e, input, false, vitesse_animation);
        let indice = info_dico[1];
        let nbr_animation = info_dico[0];
        setTimeout(() => {
            non_animer_alg([4]);
        }, nbr_animation * vitesse_animation);
        nbr_animation++;
        if (Number(enrs[indice].querySelector('.key').innerHTML) === key_search) {
            let new_z = new_zone(enrs, indice, true, ord);
            setTimeout(() => {
                animer_alg([6, 7, 8, 10]);
                setTimeout(() => {
                    non_animer_alg([6, 7, 8, 10]);
                }, vitesse_animation * 4);
                set_comment("Suppresion de la clé : " + key_search + " ( par décalage ) ... ");
                deplacer_tout_1_up(enrs, indice + 1, vitesse_animation);
            }, nbr_animation * vitesse_animation);
            nbr_animation += 4;;
            setTimeout(() => {
                showalert("L'enregistrement existe et la suppression est terminée ! ", "#00ff00");
                animer_alg([6, 9, 10]);
                renouveler(enrs, new_z);
                add_retour_btn(par);
            }, nbr_animation * vitesse_animation);
            nbr_animation++;
        } else {
            setTimeout(() => {
                animer_alg([12, 13, 14]);
                set_comment("la cle " + key_search + " n'existe pas , rien à supprimer ..");
                showalert(" la cle " + key_search + " n'existe pas , Rien à supprimer !!", "orange");
                add_retour_btn(par);
            }, vitesse_animation * nbr_animation);
            nbr_animation++;
        }
        setTimeout(() => {
            set_comment("FIN ...");
            setTimeout(() => {
                fermer_fentre_comment();
            }, 300);
            if (document.querySelectorAll('.ENR').length !== 0) {
                document.querySelectorAll('.selection:not(#create)').forEach((elem) => {
                    elem.classList.remove('interdit');
                });
            } else {
                setTimeout(() => {
                    ouvrir_fentre_comment();
                    set_comment("Vous n'avez maintenant aucune zone à manipuler , la création devient la seule opération disponible");
                    document.querySelector('#create').classList.remove('interdit');
                    document.querySelectorAll('.selection:not(#create)').forEach((elem) => {
                        elem.classList.add('interdit');
                    });
                }, 1000);

            }
        }, nbr_animation * vitesse_animation);
    } else {
        animer_alg([4]);
        let info = start_recherche(e, input, false, vitesse_animation);
        let cpt_final = info[1];
        let nbr_animation = info[0];
        nbr_animation++;
        setTimeout(() => {
            non_animer_alg([4]);
        }, (nbr_animation * vitesse_animation));
        nbr_animation++;
        if (cpt_final !== -1) {
            let new_z = new_zone(enrs, cpt_final, true, ord);
            setTimeout(() => {
                deplacer(enrs, enrs[enrs.length - 1].children, +(cpt_final - enrs.length + 1), vitesse_animation);
                set_comment("Suppresion de la clé : " + key_search + " ( par écrasement ) ... ");
                animer_alg([7, 8]);
                setTimeout(() => {
                    non_animer_alg([7, 8]);
                    animer_alg([9]);
                    showalert("L'enregistrement existe et la suppression est terminée ! ", "#00ff00");
                    setTimeout(() => {
                        non_animer_alg([9]);
                        animer_alg([15]);
                    }, 3000);
                }, vitesse_animation * 3);
            }, nbr_animation * vitesse_animation);
            nbr_animation += 4;
            setTimeout(() => {
                renouveler(enrs, new_z);
                add_retour_btn(par);
            }, nbr_animation * vitesse_animation);
            nbr_animation++;
        } else {
            setTimeout(function() {
                set_comment("la cle " + key_search + " n'existe pas , rien à supprimer ..");
                showalert("La cle n'existe pas , Rien à supprimer !!", "orange");
                animer_alg([13]);
                setTimeout(() => {
                    non_animer_alg([13]);
                    animer_alg([15]);
                }, 3000);
                add_retour_btn(par);
            }, nbr_animation * vitesse_animation);
            nbr_animation++;
        }
        setTimeout(() => {
            set_comment("FIN ...");
            setTimeout(() => {
                fermer_fentre_comment();
            }, 300);
            if (document.querySelectorAll('.ENR').length !== 0) {
                document.querySelectorAll('.selection:not(#create)').forEach((elem) => {
                    elem.classList.remove('interdit');
                });
            } else {
                setTimeout(() => {
                    ouvrir_fentre_comment();
                    set_comment("Vous n'avez maintenant aucune zone à manipuler , la création devient la seule opération disponible");
                    document.querySelector('#create').classList.remove('interdit');
                    document.querySelectorAll('.selection:not(#create)').forEach((elem) => {
                        elem.classList.add('interdit');
                    });
                }, 1000);

            }
        }, nbr_animation * vitesse_animation);
    }
}
//ANIAMTIONS D'INSERTION
function start_inserer(e, input, vitesse_animation) {

    document.querySelectorAll('.selection:not(#create)').forEach((elem) => {
        elem.classList.add('interdit');
    });
    let par = e.target.parentElement;
    let ord = e.target.parentElement.parentElement.querySelector('#ord').children[0].querySelector('input').checked;
    let begin = false;
    let key_search = Number(input.value);
    let enrs = e.target.parentElement.querySelectorAll('.ENR');
    if (key_search.length !== 0) {
        showalert("la procédure de l'insertion est commencée ", "#00ff00");
        begin = true;
        $(e.target.parentElement.querySelector('#key_ins')).fadeOut(vitesse_animation / 2, function() {
            $(this).remove()
        });
        $(e.target.parentElement.querySelector('#start_ins')).fadeOut(vitesse_animation / 2, function() {
            $(this).remove()
        });
    } else {

        showalert("Donnez la clé d'abord ", "#ff0000");
    }

    if (ord) {
        let info_dico = start_recherche_dico(e, input, false, vitesse_animation);
        let indice = info_dico[1];
        let nbr_animation = info_dico[0];

        setTimeout(() => {
            non_animer_alg([4]);
        }, (nbr_animation * vitesse_animation));
        nbr_animation++;
        if (Number(indice === enrs.length || enrs[indice].querySelector('.key').innerText) !== key_search) {
            setTimeout(() => {
                let new_enr = ins_enr(key_search);
                let hr1 = document.createElement('hr');
                let hr2 = document.createElement('hr');
                $(par).append(hr1);
                $(par).append(new_enr);
                $(par).append(hr2);
                $(new_enr).fadeIn(500);
                let arr = [hr1, new_enr, hr2];
                document.querySelector('#zone').style.height = (enrs.length * enrs[0].offsetHeight + enrs[0].offsetHeight * 3.5).toString() + "px";
                anime({
                    targets: arr,
                    keyframes: [
                        { translateY: enrs[0].offsetHeight },
                    ],

                });
            }, nbr_animation * vitesse_animation);
            nbr_animation += 1;;
            if (indice !== enrs.length) {
                setTimeout(() => {
                    animer_alg([11, 12]);
                    setTimeout(() => {
                        non_animer_alg([11, 12]);
                    }, vitesse_animation * 4);
                    deplacer_tout_1_down(enrs, indice, vitesse_animation);
                }, nbr_animation * vitesse_animation);
                nbr_animation += 4;
            }

            setTimeout(() => {
                animer_alg([13, 14]);
                showalert("l'insertion est terimnée !", "#00ff00");
                let last = enrs[0].parentElement.querySelectorAll('.ENR')[enrs[0].parentElement.querySelectorAll('.ENR').length - 1];
                if (indice !== enrs.length) {
                    set_comment("L'enregistrement définit par la clé " + key_search + " est inséré ");
                    anime({
                        targets: Array.from(last.children),
                        keyframes: [
                            { translateX: get_width_children(enrs[0].children) },
                            { translateY: get_x_y(enrs[indice]).y - get_x_y(last).y },
                            { translateX: 0 },
                        ],
                        duration: vitesse_animation * 3,
                    });
                } else {
                    set_comment("L'enregistrement définit par la clé " + key_search + " est inséré ");

                    anime({
                        targets: Array.from(last.children),
                        keyframes: [
                            { translateX: get_width_children(enrs[0].children) },
                            { translateY: (get_x_y(enrs[indice - 1]).y + enrs[0].offsetHeight) - get_x_y(last).y },
                            { translateX: 0 },
                        ],
                        duration: vitesse_animation * 3,
                    });
                }
            }, nbr_animation * vitesse_animation);
            nbr_animation += 4;
            setTimeout(() => {
                let new_z = new_zone(enrs, indice, false);
                renouveler(enrs, new_z);
                add_retour_btn(par);
                $('hr').remove();
                document.querySelector('#zone').style.height = "";
            }, vitesse_animation * nbr_animation);
            nbr_animation++;

        } else {
            setTimeout(() => {
                animer_alg([7]);
                set_comment("La cle " + key_search + " existe déja rien à insérer ....");
                showalert("La cle " + key_search + " existe déja rien à insérer ....", "orange");
                anime({
                    targets: Array.from(document.querySelectorAll('.key')),
                    backgroundColor: "#86E8E7",
                    duration: 1000,
                });
            }, nbr_animation * vitesse_animation);
            nbr_animation++;
        }
        setTimeout(() => {
            set_comment("FIN ...");
            setTimeout(() => {
                fermer_fentre_comment();
            }, 300);
            document.querySelectorAll('.selection:not(#create)').forEach((elem) => {
                elem.classList.remove('interdit');
            });
        }, nbr_animation * vitesse_animation);
    } else {
        let info = start_recherche(e, input, false, vitesse_animation);
        let nbr_animation = info[0];
        let cpt_final = info[1];
        nbr_animation++;
        setTimeout(() => {
            non_animer_alg([4]);
        }, (nbr_animation * vitesse_animation));
        nbr_animation++;
        if (cpt_final !== -1) {
            setTimeout(() => {
                animer_alg([6, 7, 8]);
                set_comment("La cle " + key_search + " existe déja rien à insérer ....");
                showalert("la clé existe déja !! , rien à insérer");
            }, nbr_animation * vitesse_animation);
            nbr_animation++;

        } else {
            setTimeout(() => {
                let new_enr = ins_enr(key_search);
                let hr1 = document.createElement('hr');
                let hr2 = document.createElement('hr');
                $(par).append(hr1);
                $(par).append(new_enr);
                $(par).append(hr2);
                $(new_enr).fadeIn(500);
                let arr = [hr1, new_enr, hr2];
                document.querySelector('#zone').style.height = (enrs.length * enrs[0].offsetHeight + enrs[0].offsetHeight * 3.5).toString() + "px";
                anime({
                    targets: arr,
                    keyframes: [
                        { translateY: enrs[0].offsetHeight },
                    ],

                });
            }, nbr_animation * vitesse_animation);
            nbr_animation += 1;
            setTimeout(() => {
                animer_alg([11, 12]);
                setTimeout(() => {
                    animer_alg([11, 12]);
                }, vitesse_animation * 4);
                set_comment("L'enregistrement définit par la clé " + key_search + " est inséré ");

                let last = enrs[0].parentElement.querySelectorAll('.ENR')[enrs[0].parentElement.querySelectorAll('.ENR').length - 1];
                anime({
                    targets: Array.from(last.children),
                    keyframes: [
                        { translateX: get_width_children(enrs[0].children) },
                        { translateY: (get_x_y(enrs[enrs.length - 1]).y + enrs[0].offsetHeight) - get_x_y(last).y },
                        { translateX: 0 },
                    ],
                    duration: vitesse_animation * 3,
                });
            }, nbr_animation * vitesse_animation);
            nbr_animation += 4;
            setTimeout(() => {
                animer_alg([13]);
                let new_z = new_zone(enrs, enrs.length, false);
                showalert("l'insertion de la cle " + key_search + " est terminée !", "#00ff00");
                renouveler(enrs, new_z);
                add_retour_btn(par);
                $('hr').remove();
                document.querySelector('#zone').style.height = "";
            }, nbr_animation * vitesse_animation);
            nbr_animation++;
        }
        showalert()
        setTimeout(() => {
            set_comment("FIN ...");
            setTimeout(() => {
                fermer_fentre_comment();
            }, 300);
            document.querySelectorAll('.selection:not(#create)').forEach((elem) => {
                elem.classList.remove('interdit');
            });
        }, nbr_animation * vitesse_animation);
    }
}

// RETOURNER LES CORDONNES ( X , Y ) DE L'ELEMENT 'el'
function get_x_y(el) {
    const rect = el.getBoundingClientRect();
    return {
        x: rect.left + window.scrollX,
        y: rect.top + window.scrollY
    };
}

//FONCTIONNALITE DE BOUTTON : EXTRAIRE
function extraire_enrs(e) {
    let ord = e.target.parentElement.parentElement.querySelector('#ord').children[0].querySelector('input').checked;
    ouvrir_fermer_fentrealgo();
    ouvrir_fentre_comment();
    if (ord) {
        set_comment("Le corps de l'algorithme de l'extraction ( zone  ordonnée )");
        ouvrir_alg(algo_extraire_dicho);
    } else {
        set_comment("Le corps de l'algorithme de l'extraction ( zone  non ordonnée )");
        ouvrir_alg(algo_extraire_seq);
    }
    let enrs = e.target.parentElement.parentElement.querySelectorAll('.ENR');
    let taille = enrs.length;
    let now = 0;
    let father = e.target.parentElement.parentElement;
    let sup = document.createElement('input');
    sup.placeholder = " la cle sup ...";
    let inf = document.createElement('input');
    inf.placeholder = " la cle inf ..";
    sup.style.display = "none";
    inf.style.display = "none";
    sup.id = "sup";
    inf.id = "inf";
    sup.className = 'extraire_item';
    inf.className = 'extraire_item';
    let extraire_menu = document.createElement('div');
    extraire_menu.style.display = "flex";
    extraire_menu.justifyContent = "space-around";
    extraire_menu.id = "extraire_menu";
    extraire_menu.style.marginTop = "1.5rem";
    let and = document.createElement('p');
    and.innerText = "&";
    and.style.fontWeight = "bold";
    and.style.padding = "1rem";
    and.style.fontStyle = "italic";
    $(extraire_menu).append(inf).append(and).append(sup);
    let extraire_btn = document.createElement('button');
    extraire_btn.id = "start_extraire";
    extraire_btn.innerText = "Extraire !";
    extraire_btn.style.display = "none";
    extraire_btn.className = 'extraire_item';
    let vitesse = document.getElementById("myRange");
    $(father).append(extraire_menu).append(extraire_btn);
    $(sup).fadeIn(500);
    $(inf).fadeIn(500);
    $(extraire_btn).click(function(e) {
        if (document.querySelector("#sup").value.length !== 0 && document.querySelector("#inf").value.length !== 0) {
            document.querySelectorAll('.extraire_item').forEach((elem) => { $(elem).fadeOut(500); });
            start_extraire(e, vitesse.value)
        } else {
            set_comment("Veuillez nous donner la clé d'abord");
        }

    });
    $(extraire_btn).fadeIn(500);
}

//ANIMATIONS D'EXTRACTION ( PART1 )
function start_extraire(e, vitesse_animation) {
    let ord = e.target.parentElement.parentElement.querySelector('#ord').children[0].querySelector('input').checked;
    let father = e.target.parentElement;
    let sup_key = father.querySelector('#extraire_menu').querySelector('#sup').value;
    let inf_key = father.querySelector('#extraire_menu').querySelector('#inf').value;
    if (sup_key.length !== 0) {
        sup_key = Number(sup_key);
    } else {
        sup_key = -1;
    }
    if (inf_key.length !== 0) {
        inf_key = Number(inf_key);
    } else {
        inf_key = -1;
    }
    if (sup_key !== -1 || inf_key !== -1) {
        let enrs = e.target.parentElement.querySelectorAll('.ENR');
        showalert("la procedure de l'extraction est commencée !!", "#00ff00");
        extraire_zone(enrs, inf_key, sup_key, ord, e, vitesse_animation);
    }

}
//ANIMATIONS D'EXTRACTION ( PART1 )
function extraire_zone(enrs, inf, sup, ord, e, vitesse_animation) {
    document.querySelectorAll('.selection:not(#create)').forEach((elem) => {
        elem.classList.add('interdit');
    });
    let par = enrs[0].parentElement;
    let cpt = 0;
    let cpt_now = 0;
    let nbr_animation = 0;
    let consider_inf = true;
    let consider_sup = true;
    let bad = [];
    if (inf === -1) {
        consider_inf = false;
    }
    if (sup === -1) {
        consider_sup = false
    }
    if (!ord) {
        while (cpt < enrs.length) {
            animer_alg([5]);
            let key_now = Number(enrs[cpt].querySelector('.key').innerText);
            setTimeout(() => {
                anime({
                    targets: Array.from(enrs[cpt_now].children),
                    backgroundColor: "#333",
                    duration: vitesse_animation / 2,
                    direction: 'alternate',
                });
                cpt_now++;
            }, nbr_animation * vitesse_animation);
            nbr_animation++;
            if ((consider_sup && consider_inf && key_now >= inf && key_now <= sup) || (consider_inf && !consider_sup && key_now >= inf) || (consider_sup && !consider_inf && key_now <= sup)) {
                setTimeout(() => {
                    set_comment(enrs[cpt_now - 1].querySelector('.key').innerText + " appartient à  : [ " + inf + " ," + sup + " ]");
                    anime({
                        targets: Array.from(enrs[cpt_now - 1].children),
                        backgroundColor: "#00ff00",
                    });
                }, nbr_animation * vitesse_animation);
                nbr_animation++;
            } else {
                setTimeout(() => {
                    set_comment(enrs[cpt_now - 1].querySelector('.key').innerText + " est hors   : [ " + inf + " ," + sup + " ]");
                    anime({
                        targets: Array.from(enrs[cpt_now - 1].children),
                        keyframes: [
                            { translateX: get_width_children(enrs[0].children) },
                        ],
                        duration: vitesse_animation,
                    });
                    anime({
                        targets: Array.from(enrs[cpt_now - 1].children),
                        backgroundColor: "#ff0000",
                    });
                    animer_alg([7, 8, 9, 10]);
                    setTimeout(() => {
                        non_animer_alg([7, 8, 9, 10]);
                    }, vitesse_animation);
                }, nbr_animation * vitesse_animation);
                bad.push(cpt);
                nbr_animation++;
            }
            cpt++;
        }
        let indice_now = 0;
        cpt = 0;
        let cpt_now2 = 0;
        let new_z = [];
        while (cpt < enrs.length) {
            if (cpt === 0) {
                setTimeout(() => {
                    non_animer_alg([5]);
                    animer_alg([12]);
                }, nbr_animation * vitesse_animation);
            }
            setTimeout(() => {
                set_comment("Réorganisation par décalage en cours .....");
            }, nbr_animation * vitesse_animation)
            if (bad.indexOf(cpt) !== -1) {

                setTimeout(() => {
                    anime({
                        targets: enrs[cpt_now2],
                        opacity: "0",
                        easing: 'steps(2)'
                    });
                    cpt_now2++;
                }, nbr_animation * vitesse_animation);
                nbr_animation++;

            } else {
                setTimeout(() => {
                    anime({
                        targets: Array.from(enrs[cpt_now2].children),
                        keyframes: [
                            { translateX: get_width_children(enrs[0].children) },
                            { translateY: get_x_y(enrs[indice_now]).y - get_x_y(enrs[cpt_now2]).y },
                            { translateX: 0 },
                        ],
                        duration: vitesse_animation * 3,
                    });
                    cpt_now2++;
                    indice_now++;
                }, nbr_animation * vitesse_animation);
                nbr_animation += 3;
            }
            cpt++;
        }
        setTimeout(() => {
            non_animer_alg([12]);
            animer_alg([13]);
            set_comment("l'éxtraction est terminée ");
            showalert("l'extraction est terminée", "#00ff00");
            setTimeout(() => {
                non_animer_alg([13]);
                animer_alg([14]);
            }, 3000);
            new_z = new_zone(enrs, bad);
            renouveler(enrs, new_z);
        }, nbr_animation * vitesse_animation);
        nbr_animation++;
        setTimeout(() => {
            set_comment("FIN ...");
            setTimeout(() => {
                fermer_fentre_comment();
            }, 300);
            add_retour_btn(par);
        }, nbr_animation * vitesse_animation);
        nbr_animation += 3;
        setTimeout(() => {
            if (document.querySelectorAll('.ENR').length !== 0) {
                document.querySelectorAll('.selection:not(#create)').forEach((elem) => {
                    elem.classList.remove('interdit');
                });
            } else {
                ouvrir_fentre_comment();
                set_comment("Vous n'avez maintenat aucune zone à manipuler , la création devient la seule opération disponible");
                document.querySelector('#create').classList.remove('interdit');
                document.querySelectorAll('.selection:not(#create)').forEach((elem) => {
                    elem.classList.add('interdit');
                });
            }

        }, nbr_animation * vitesse_animation);
    } else {
        // pour INF
        let fausse_input = document.createElement('input');
        fausse_input.value = inf;
        animer_alg([6]);
        let info = start_recherche_dico(e, fausse_input, false, vitesse_animation);
        setTimeout(() => {
            set_comment(" Recheche dichotomique de la clé Min : " + inf);
        }, 500);
        let nbr_animation = info[0];
        nbr_animation += 2;
        let indice_inf = info[1];
        if (indice_inf >= 0 && indice_inf <= enrs.length - 1) {
            setTimeout(() => {
                set_comment("Exclure les Mins ...");
                non_animer_alg([6]);
                for (let i = 0; i < indice_inf; i++) {
                    anime({
                        targets: Array.from(enrs[i].children),
                        keyframes: [
                            { translateX: get_width_children(enrs[0].children) },
                        ],
                        backgroundColor: '#ff0000',
                        duration: vitesse_animation,
                    });
                }
            }, nbr_animation * vitesse_animation);
            nbr_animation += 2;
        }
        // POUR SUP
        let indice_sup = 0;
        setTimeout(() => {
            let animation_interne = 1;
            let cpt = 0;
            while (cpt < enrs.length) {
                let children = Array.from(enrs[cpt].children);
                let cpt2 = 0;
                while (cpt2 < children.length) {
                    children[cpt2].style.backgroundColor = "#86E8E7";
                    cpt2++;
                }
                cpt++;
                animer_alg([8]);
            }
            let fausse_input = document.createElement('input');
            fausse_input.value = sup;
            let info = start_recherche_dico(e, fausse_input, false);
            setTimeout(() => {
                set_comment("Recherche dichotomique de la cle Max :" + sup);
            }, 500);
            animation_interne += info[0];
            indice_sup = info[1] - 1;
            if (indice_sup >= 0 && indice_sup <= enrs.length - 1) {
                setTimeout(() => {
                    set_comment("Exclure les Sups ...");
                    for (let i = indice_sup + 1; i < enrs.length; i++) {
                        anime({
                            targets: Array.from(enrs[i].children),
                            keyframes: [
                                { translateX: get_width_children(enrs[0].children) },
                            ],
                            backgroundColor: '#ff0000',
                            duration: vitesse_animation,
                        });
                    }
                    non_animer_alg([8]);
                }, animation_interne * vitesse_animation);
                animation_interne++;
            }
            let keys = print_keys(enrs);
            cpt = 0;
            let cpt_now = 0;
            while (Number(keys[cpt]) < inf) {
                setTimeout(() => {
                    animer_alg([10, 11, 12, 13]);
                    anime({
                        targets: Array.from(enrs[cpt_now].children),
                        opacity: "0",
                        easing: 'steps(2)',
                        duration: vitesse_animation
                    });
                    cpt_now++;
                }, animation_interne * vitesse_animation);
                cpt++;
                animation_interne++;
            }
            setTimeout(() => {
                non_animer_alg([10, 11, 12, 13]);
                for (let i = indice_inf; i <= indice_sup; i++) {
                    if (i !== indice_inf && i !== indice_sup) {
                        anime({
                            targets: Array.from(enrs[i].children),
                            backgroundColor: '#00ff00',
                            duration: vitesse_animation
                        });
                    } else {
                        anime({
                            targets: Array.from(enrs[i].children),
                            backgroundColor: '#00ff00',
                            duration: vitesse_animation,
                        });
                    }
                }
            }, animation_interne * vitesse_animation);
            animation_interne++;
            cpt = 0;
            while (Number(keys[cpt]) <= sup) {
                cpt++;
            }
            let cpt_now_sup = cpt;
            while (cpt < enrs.length) {
                setTimeout(() => {
                    animer_alg([14, 15, 16, 17]);
                    anime({
                        targets: enrs[cpt_now_sup],
                        opacity: "0",
                        easing: 'steps(2)',
                        duration: vitesse_animation,
                    });
                    cpt_now_sup++;
                }, animation_interne * vitesse_animation);
                cpt++;
                animation_interne++;
            }
            setTimeout(() => {
                non_animer_alg([14, 15, 16, 17]);
                set_comment("Reorganisation ....");
                deplacer_tout_up(enrs, indice_inf, indice_sup, vitesse_animation);
                animer_alg([18]);
            }, animation_interne * vitesse_animation);
            animation_interne += 4;
            setTimeout(() => {
                let keys = print_keys(enrs);
                let bad = [];
                for (let i = 0; i < enrs.length; i++) {
                    if (Number(keys[i]) < inf || Number(keys[i]) > sup) {
                        bad.push(i);
                    }
                }
                let new_z = new_zone(enrs, bad);
                renouveler(enrs, new_z);
                non_animer_alg([18]);
                animer_alg([19]);
                set_comment("L'extraction est terminée ...");
                showalert("L'extraction est terminée !!", "#00ff00");
                setTimeout(() => {
                    set_comment("FIN ...");
                    setTimeout(() => {
                        fermer_fentre_comment();
                    }, 500);
                    $("#extraire_menu").fadeOut();
                    if (document.querySelectorAll('.ENR').length !== 0) {
                        document.querySelectorAll('.selection:not(#create)').forEach((elem) => {
                            elem.classList.remove('interdit');
                        });
                    } else {
                        setTimeout(() => {
                            ouvrir_fentre_comment();
                            set_comment("Vous n'avez maintenant aucune zone à manipuler , la création devient la seule opération disponible");
                            document.querySelector('#create').classList.remove('interdit');
                            document.querySelectorAll('.selection:not(#create)').forEach((elem) => {
                                elem.classList.add('interdit');
                            });
                        }, 1000);

                    }
                }, vitesse_animation);
                setTimeout(() => {
                    non_animer_alg([19]);
                    animer_alg([20]);

                }, 3000);
            }, animation_interne * vitesse_animation);
            animation_interne++;
            setTimeout(() => {
                add_retour_btn(par);
            }, animation_interne * vitesse_animation);
            animation_interne++;
        }, nbr_animation * vitesse_animation);
        nbr_animation += 2;

    }
}


//FONCTIONNALITE DE BOUTTON : SUPPRESSION
function supprimer_enr(e) {
    ouvrir_fentre_comment();
    let ord = e.target.parentElement.parentElement.querySelector('#ord').children[0].querySelector('input').checked;
    if (!ord) {
        set_comment("Le corps de l'algorithme de suppression ( zone non ordonnée )");
        ouvrir_alg(algo_supp_seq);
    } else {
        set_comment("Le corps de l'algorithme de suppression ( zone ordonnée )");
        ouvrir_alg(algo_supp_dicho);
    }
    let enrs = e.target.parentElement.parentElement.querySelectorAll('.ENR');
    let taille = enrs.length;
    let now = 0;
    let father = e.target.parentElement.parentElement;
    let key_supp = document.createElement('input');
    key_supp.id = "key_supp";
    key_supp.type = "number";
    key_supp.placeholder = "La clé ...";
    key_supp.style.display = "none";
    key_supp.className = 'supprimer_item';
    let start_supp = document.createElement('button');
    start_supp.type = "number";
    start_supp.id = "start_supp";
    start_supp.innerText = "Supprimer!";
    start_supp.style.display = "none";
    start_supp.className = 'supprimer_item';
    let vitesse = document.getElementById("myRange");
    if (ord) {
        $(start_supp).click(function(e) {
            if (document.querySelector("#key_supp").value.length !== 0) {
                document.querySelectorAll('.supprimer_item').forEach((elem) => { $(elem).fadeOut(500); });
                start_supprimer(e, key_supp, vitesse.value);
            } else {
                set_comment("Veuillez nous donner la clé d'abord !!");
            }
        });
    } else {
        $(start_supp).click(function(e) {
            if (document.querySelector("#key_supp").value.length !== 0) {
                document.querySelectorAll('.supprimer_item').forEach((elem) => { $(elem).fadeOut(500); });
                start_supprimer(e, key_supp, vitesse.value);
            } else {
                set_comment("Veuillez nous donner la clé d'abord !!");
            }
        });
    }
    $(father).append(key_supp).append(start_supp);
    $(key_supp).fadeIn(500);
    $(start_supp).fadeIn(500);

}


function add_retour_btn(parent, vitesse_animation) {
    setTimeout(() => {
        retour_zone();
    }, 3000);
}
//RECUPERER LES COULEURS ORIGINAUX D'ENREGSITREMENTS APRES LA FIN D'ANIMATIONS
function retour_zone(e) {
    let enrs = document.querySelectorAll('.ENR');
    let cpt = 0;
    while (cpt < enrs.length) {
        let children = Array.from(enrs[cpt].children);
        let cpt2 = 0;
        while (cpt2 < children.length) {
            if (cpt2 === 0) {
                children[cpt2].style.backgroundColor = "#86E8E7";
            }
            children[cpt2].style.backgroundColor = "#86E8E7";
            cpt2++;
        }
        cpt++;
    }
}

//RETOURNER LA CLE DE L'ENREGSITREMENT : 'children'
function get_key(children) {
    return Number(children[0].innerText);
}
//RETOOURNER TOUS LES CLES D'ENRESGITREMENTS SOUS FORME D'UN TABLEAU
function print_keys(enrs) {
    let cpt = 0;
    let tab = [];
    while (cpt < enrs.length) {
        tab.push(enrs[cpt].querySelector('.key').innerText);
        cpt++;
    }
    return tab;
}

//METTRE A JOUR LA ZONE APRES INSERTION / SUPPRESSION / EXTRACTION / TRI ( PART 1)
function new_zone(enrs, ...indices) {
    let new_enrs = [];
    let cpt = 0;
    if (indices.length === 1) {
        let bad = indices[0];
        let cpt = 0;
        while (cpt < enrs.length) {
            if (bad.indexOf(cpt) === -1) {
                new_enrs.push(enrs[cpt]);
            }
            cpt++;
        }
    } else if (indices.length >= 2 && typeof indices[1] === "number") {
        while (cpt < enrs.length) {
            if (cpt !== indices[0] && cpt !== indices[1]) {
                new_enrs.push(enrs[cpt]);
            } else if (cpt === indices[0]) {
                new_enrs.push(enrs[indices[1]]);
            } else {
                new_enrs.push(enrs[indices[0]]);
            }
            cpt++;
        }
    } else if (typeof indices[1] === "boolean") {
        // Suppression
        if (indices[1] === true) {
            // ord = true
            if (indices[2] === true) {
                while (cpt < enrs.length) {
                    if (cpt !== indices[0]) {
                        new_enrs.push(enrs[cpt]);
                    }
                    cpt++;
                }
            } else {
                //ord = false
                while (cpt < enrs.length - 1) {
                    if (cpt !== indices[0]) {
                        new_enrs.push(enrs[cpt]);
                    } else {
                        new_enrs.push(enrs[enrs.length - 1]);
                    }
                    cpt++;
                }
            }
        }
        //insertion
        else {
            let cbon = false;
            while (cpt < enrs.length) {
                if (cbon === false && cpt === indices[0]) {
                    let last = enrs[0].parentElement.querySelectorAll('.ENR')[enrs[0].parentElement.querySelectorAll('.ENR').length - 1];
                    last.style = "transform: translateY(0px); margin: 0px;";
                    new_enrs.push(last);
                    cbon = true;
                    cpt--;
                } else {
                    new_enrs.push(enrs[cpt]);
                }
                cpt++;
            }
            if (indices[0] === enrs.length) {
                let last = enrs[0].parentElement.querySelectorAll('.ENR')[enrs[0].parentElement.querySelectorAll('.ENR').length - 1];
                last.style = "transform: translateY(0px); margin: 0px;";
                new_enrs.push(last);
            }
        }
    }
    return new_enrs;
}

//METTRE A JOUR LA ZONE APRES INSERTION / SUPPRESSION / EXTRACTION / TRI ( PART 2)
function renouveler(ancien_z, new_z) {
    let cpt0 = 0;
    let par = ancien_z[0].parentElement;
    while (cpt0 < ancien_z.length) {
        ancien_z[cpt0].remove();
        cpt0++;
    }
    let cpt = 0;
    while (cpt < new_z.length) {
        anime({
            targets: Array.from(new_z[cpt].children),
            keyframes: [
                { translateY: 0 },
                { translateX: 0 },
            ],
            duration: 0,
        });
        let cpt2 = 0;
        while (cpt2 < new_z[cpt].children.length) {
            new_z[cpt].children[cpt2].style.transform = 'translateY(0px) translateX(0px)';
            cpt2++;
        }
        par.appendChild(new_z[cpt]);
        cpt++;
    }

}

//CREER UN ENREGISTREMENT DEFINIT PAR LA CLE : 'cle'
function ins_enr(cle) {
    let enreg = document.createElement('ul');
    enreg.style.position = "relative";
    enreg.className = "ENR";
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
        li.innerText = "champ" + (cpt + 1);
        li.style.borderLeftWidth = "0";
        if (cpt !== 2) {
            li.style.borderRightStyle = "dashed";
        }
        list_3values.appendChild(li);
        cpt += 1;
    }
    let mere_3values = document.createElement('li');
    mere_3values.className = 'not-del';
    mere_3values.appendChild(list_3values);
    enreg.appendChild(mere_3values);
    return enreg;
}

//RETOUTNER LA LONGUEUR D'ENREGISTREMENT : 'bloc'
function get_width_children(bloc) {
    let cpt = 0;
    let somme = 0;
    while (cpt < bloc.length) {
        somme += bloc[cpt].offsetWidth;
        cpt++;
    }
    return somme
}

//ANIMATION DE DEPLACEMENT D'ENREGSITREMENT : 'children'
function deplacer(enrs, children, combien, vitesse_animation) {
    if (combien !== 0) {
        anime({
            targets: Array.from(children),
            keyframes: [
                { translateX: get_width_children(enrs[enrs.length - 1].children) },
                { translateY: enrs[0].offsetHeight * combien },
                { translateX: 0 },
            ],
            duration: vitesse_animation * 3,
        });
    } else {
        anime({
            targets: enrs[enrs.length - 1],
            opacity: "0",
            easing: 'steps(2)'
        });
    }

}

//ANIMATION DE DECALER PAR UN ENREGSITREMENTS ( VERS L'HAUT ) QUI SE SITUE AU DESSOUS DE L'INDICE : 'a_partir'
function deplacer_tout_1_up(enrs, a_partir, vitesse_animation) {
    let cpt = 0;
    while (cpt < enrs.length) {
        if (cpt !== a_partir - 1) {
            let children = Array.from(enrs[cpt].children);
            let cpt2 = 0;
            while (cpt2 < children.length) {
                children[cpt2].style.backgroundColor = "#86E8E7";
                cpt2++;
            }
        }
        cpt++;
    }
    cpt = a_partir;
    while (cpt < enrs.length) {
        anime({
            targets: Array.from(enrs[cpt].children),
            keyframes: [
                { translateX: get_width_children(enrs[enrs.length - 1].children) },
                { translateY: -enrs[0].offsetHeight },
                { translateX: 0 },
            ],
            duration: vitesse_animation * 3,
        });
        cpt++;
    }
    if (a_partir === enrs.length) {
        anime({
            targets: enrs[enrs.length - 1],
            opacity: "0",
            easing: 'steps(2)'
        });
    }

}

function deplacer_tout_up(enrs, a_partir, jusqu_a, vitesse_animation) {
    let cpt = a_partir;
    while (cpt <= jusqu_a) {
        anime({
            targets: Array.from(enrs[cpt].children),
            keyframes: [
                { translateY: -enrs[0].offsetHeight * a_partir },
                { translateX: 0 },
            ],
            duration: vitesse_animation * 3,
        });
        cpt++;
    }

}


//ANIMATION DE DECALER PAR UN ENREGSITREMENTS ( VERS LE BAS ) QUI SE SITUE AU DESSOUS DE L'INDICE : 'a_partir'
function deplacer_tout_1_down(enrs, norm, vitesse_animation) {
    let cpt = 0;
    while (cpt < enrs.length) {
        if (cpt !== norm - 1) {
            let children = Array.from(enrs[cpt].children);
            let cpt2 = 0;
            while (cpt2 < children.length) {
                children[cpt2].style.backgroundColor = "#86E8E7";
                cpt2++;
            }
        }
        cpt++;
    }
    if (norm !== -1) {
        cpt = norm;
    } else {
        cpt = 0;
    }

    while (cpt < enrs.length) {
        anime({
            targets: Array.from(enrs[cpt].children),
            keyframes: [
                { translateX: get_width_children(enrs[enrs.length - 1].children) },
                { translateY: enrs[0].offsetHeight },
                { translateX: 0 },
            ],
            duration: vitesse_animation * 3,
        });
        cpt++;
    }

}


// LA PROCEDURE SETUP DONNE A CHAQUE BOUTTON SA FONCTIONNALITE
function setup() {

    document.getElementById("title-Barbre").addEventListener('click', function() {

        ui.removeAll();
        $('#title-Barbre').addClass("visited");
        $('#title-Maire').removeClass("visited");

    });


    document.getElementById("title-Maire").addEventListener('click', function() {
        ui.removeAll();
        $('#title-Barbre').removeClass("visited");
        $('#title-Maire').addClass("visited");
    });
    document.getElementById("menu-hide-fichier").addEventListener('click', function() {
        if (document.querySelectorAll('.ENR').length === 0) {
            document.querySelectorAll('.selection:not(#create)').forEach((elem) => {
                elem.classList.add('interdit');
            });
        }
        if (document.getElementById("menu-fichier").style.width == '0px') {

            for (let index = 0; index < 151; index++) {
                setTimeout(() => {
                    document.getElementById("menu-fichier").style.width = index + 'px';
                }, index);
            };
            document.getElementById("supprimer_enr").style.display = 'none';
            document.getElementById("rechercher_zone").style.display = 'none';
            document.getElementById("inserer_enr").style.display = 'none';
            document.getElementById("trier_zone").style.display = 'none';
            document.getElementById("extraire_enrs").style.display = 'none';
            document.getElementById("speedControler").style.display = 'none';

            $("#rechercher_zone").fadeIn(250);
            $("#inserer_enr").fadeIn(500);
            $("#supprimer_enr").fadeIn(750);
            $("#trier_zone").fadeIn(1000);
            $("#extraire_enrs").fadeIn(1250);
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
        if (document.getElementById("instruction-fichier").style.width == '0px') {
            for (let index = 0; index < 421; index++) {
                setTimeout(() => {
                    document.getElementById("instruction-fichier").style.width = index + 'px';
                }, index * 0.9);
            }
        } else {
            for (let index = 420; index > -1; index--) {
                setTimeout(() => {
                    document.getElementById("instruction-fichier").style.width = index + 'px';
                }, (420 - index) * 0.9);
            }
        }
        if (document.getElementById("instruction-hide-img").className == "rotateLeft") {
            document.getElementById("instruction-hide-img").className = "rotateRight";
        } else {
            document.getElementById("instruction-hide-img").className = "rotateLeft";
        }
    });

    document.getElementById("rechercher_zone").addEventListener('click', function(e) {
        if (!document.querySelector('#rechercher_zone').classList.contains('interdit')) {
            document.querySelectorAll('.selection:not(#create)').forEach((elem) => {
                elem.classList.remove('interdit');
            });
            document.getElementById("code-fichier").style.width = '420px';
            document.getElementById("code-hide-img").className = "rotateLeft";
            if (document.querySelectorAll('.extraire_item') != null) {
                document.querySelectorAll('.extraire_item').forEach((elem) => { elem.style.display = 'none'; });
            }
            if (document.querySelectorAll('.inserer_item') != null) {
                document.querySelectorAll('.inserer_item').forEach((elem) => { elem.style.display = 'none'; });
            }
            if (document.querySelectorAll('.supprimer_item') != null) {
                document.querySelectorAll('.supprimer_item').forEach((elem) => { elem.style.display = 'none'; });
            }
            if (document.querySelector('#start_tri') != null) {
                document.querySelector('#start_tri').style.display = "none";
            }
            let vitesse = document.getElementById("myRange");
            ouvrir_fentre_comment();
            let ord = document.querySelector('#ord').children[0].querySelector('input').checked;
            if (ord) {
                set_comment("Le corps de l'algorithme de recherche ( zone ordonnée )  ....");
            } else {
                set_comment("Le corps de l'algorithme de recherche ( zone non ordonnée )  ....");
            }
            rechercher_zone(e);
            document.querySelector('#rechercher_zone').classList.add('interdit');
        }

    });
    document.getElementById("inserer_enr").addEventListener('click', function(e) {

        if (!document.querySelector('#inserer_enr').classList.contains('interdit')) {
            document.querySelectorAll('.selection:not(#create)').forEach((elem) => {
                elem.classList.remove('interdit');
            });
            document.getElementById("code-fichier").style.width = '420px';
            document.getElementById("code-hide-img").className = "rotateLeft";
            if (document.querySelectorAll('.recherche_item') != null) {
                document.querySelectorAll('.recherche_item').forEach((elem) => { elem.style.display = 'none'; });
            }
            if (document.querySelectorAll('.extraire_item') != null) {
                document.querySelectorAll('.extraire_item').forEach((elem) => { elem.style.display = 'none'; });
            }
            if (document.querySelectorAll('.supprimer_item') != null) {
                document.querySelectorAll('.supprimer_item').forEach((elem) => { elem.style.display = 'none'; });
            }
            if (document.querySelector('#start_tri') != null) {
                document.querySelector('#start_tri').style.display = "none";
            }
            let vitesse = document.getElementById("myRange");
            inserer_enr(e);
            document.querySelector('#inserer_enr').classList.add('interdit');
        }

    });
    document.getElementById("supprimer_enr").addEventListener('click', function(e) {

        if (!document.querySelector('#supprimer_enr').classList.contains('interdit')) {
            document.querySelectorAll('.selection:not(#create)').forEach((elem) => {
                elem.classList.remove('interdit');
            });
            document.getElementById("code-fichier").style.width = '420px';
            document.getElementById("code-hide-img").className = "rotateLeft";
            if (document.querySelectorAll('.recherche_item') != null) {
                document.querySelectorAll('.recherche_item').forEach((elem) => { elem.style.display = 'none'; });
            }
            if (document.querySelectorAll('.inserer_item') != null) {
                document.querySelectorAll('.inserer_item').forEach((elem) => { elem.style.display = 'none'; });
            }
            if (document.querySelectorAll('.extraire_item') != null) {
                document.querySelectorAll('.extraire_item').forEach((elem) => { elem.style.display = 'none'; });
            }
            if (document.querySelector('#start_tri') != null) {
                document.querySelector('#start_tri').style.display = "none";
            }
            let vitesse = document.getElementById("myRange");
            supprimer_enr(e);
            document.querySelector('#supprimer_enr').classList.add('interdit');
        }

    });
    document.getElementById("extraire_enrs").addEventListener('click', function(e) {

        if (!document.querySelector('#extraire_enrs').classList.contains('interdit')) {
            document.querySelectorAll('.selection:not(#create)').forEach((elem) => {
                elem.classList.remove('interdit');
            });
            document.getElementById("code-fichier").style.width = '420px';
            document.getElementById("code-hide-img").className = "rotateLeft";
            if (document.querySelectorAll('.recherche_item') != null) {
                document.querySelectorAll('.recherche_item').forEach((elem) => { elem.style.display = 'none'; });
            }
            if (document.querySelectorAll('.inserer_item') != null) {
                document.querySelectorAll('.inserer_item').forEach((elem) => { elem.style.display = 'none'; });
            }
            if (document.querySelectorAll('.supprimer_item') != null) {
                document.querySelectorAll('.supprimer_item').forEach((elem) => { elem.style.display = 'none'; });
            }
            if (document.querySelector('#start_tri') != null) {
                document.querySelector('#start_tri').style.display = "none";
            }
            let vitesse = document.getElementById("myRange");
            extraire_enrs(e);
            document.querySelector('#extraire_enrs').classList.add('interdit');
        }

    });

    document.getElementById("trier_zone").addEventListener('click', function(e) {
        if (!document.querySelector('#trier_zone').classList.contains('interdit')) {
            ouvrir_fentre_comment();
            set_comment("Le corps de l'algorithme de Tri ");
            document.querySelectorAll('.selection:not(#create)').forEach((elem) => {
                elem.classList.remove('interdit');
            });
            document.getElementById("code-fichier").style.width = '420px';
            document.getElementById("code-hide-img").className = "rotateLeft";
            if (document.querySelectorAll('.recherche_item') != null) {
                document.querySelectorAll('.recherche_item').forEach((elem) => { elem.style.display = 'none'; });
            }
            if (document.querySelectorAll('.inserer_item') != null) {
                document.querySelectorAll('.inserer_item').forEach((elem) => { elem.style.display = 'none'; });
            }
            if (document.querySelectorAll('.supprimer_item') != null) {
                document.querySelectorAll('.supprimer_item').forEach((elem) => { elem.style.display = 'none'; });
            }
            if (document.querySelectorAll('.extraire_item') != null) {
                document.querySelectorAll('.extraire_item').forEach((elem) => { elem.style.display = 'none'; });
            }
            let vitesse = document.getElementById("myRange");
            allez_trie(e);
            document.querySelector('#trier_zone').classList.add('interdit');
        }

    });

    document.getElementById("create").addEventListener('click', function(e) {
        set_comment("Lire les caractéristiques de zone à générer...");
        ouvrir_fermer_fentrealgo();
        ouvrir_alg(algo_creation);
        animer_alg([0, 1, 2, 3, 4]);
        $('#sub_zone').fadeIn(500);
        setTimeout(() => {
            $("#ord")
                .css("display", "flex")
                .hide()
                .fadeIn(500);
            setTimeout(() => {
                $('#submit_zone').fadeIn(500);
            }, 500);
        }, 500);


    });


    document.querySelector('#supprimer_enr').addEventListener('mouseover', function(e) {
        e.target.style.backgroundColor = 'black';
    });
    document.querySelector('#supprimer_enr').addEventListener('mouseout', function(e) {
        e.target.style.backgroundColor = 'lightseagreen';
    });
    document.querySelector('#create').addEventListener('mouseover', function(e) {
        e.target.style.backgroundColor = 'black';
    });
    document.querySelector('#create').addEventListener('mouseout', function(e) {
        e.target.style.backgroundColor = 'lightseagreen';
    });
    document.querySelector('#extraire_enrs').addEventListener('mouseover', function(e) {
        e.target.style.backgroundColor = 'black';
    });
    document.querySelector('#extraire_enrs').addEventListener('mouseout', function(e) {
        e.target.style.backgroundColor = 'lightseagreen';
    });

    document.querySelector('#rechercher_zone').addEventListener('mouseover', function(e) {
        e.target.style.backgroundColor = 'black';
    });
    document.querySelector('#rechercher_zone').addEventListener('mouseout', function(e) {
        e.target.style.backgroundColor = 'lightseagreen';
    });
    document.querySelector('#inserer_enr').addEventListener('mouseover', function(e) {
        e.target.style.backgroundColor = 'black';
    });
    document.querySelector('#inserer_enr').addEventListener('mouseout', function(e) {
        e.target.style.backgroundColor = 'lightseagreen';
    });
    document.querySelector('#trier_zone').addEventListener('mouseover', function(e) {
        e.target.style.backgroundColor = 'black';
    });
    document.querySelector('#trier_zone').addEventListener('mouseout', function(e) {
        e.target.style.backgroundColor = 'lightseagreen';
    });


    let ty = document.getElementById('submit_ins');
    ty.addEventListener('click', inserer_enr);
    document.getElementById('submit_sea').addEventListener('click', rechercher_zone);
    document.getElementById('submit_del').addEventListener('click', supprimer_enr);
    $('#submit_del').hover(function() {
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

// OUVRIR LA FENETRE D'ALGORITHME
function ouvrir_alg(algo) {
    document.getElementById("code-fichier").innerHTML = algo;
}


// ANIMER LES NUMEROS DE LIGNES SELECTIONNEES D'ALGORITHME AFFICHE DANS LA FENETRE D'ALGORITHME  ( lignes : tableau d'entiers ) ( FOND NOIR )
function animer_alg(lignes) {
    let fenetre = document.querySelector('#code-fichier');
    let fenetre_ligne = 10;
    let taille_ligne = 22;
    if (lignes[0] <= fenetre_ligne / 2) {
        fenetre.scrollTop = 0;
    } else {
        fenetre.scrollTop = (lignes[0] - (fenetre_ligne / 2) + 3) * taille_ligne;
    }
    let algos = document.querySelector('#code-fichier').querySelectorAll('p');
    for (let i = 0; i < lignes.length; i++) {
        let ligne = lignes[i];
        algos[ligne].classList.add("ligneExecute");
    }
}

function animer_alg(lignes, duration) {
    let fenetre = document.querySelector('#code-fichier');
    let fenetre_ligne = 10;
    let taille_ligne = 22;
    if (lignes[0] <= fenetre_ligne / 2) {
        fenetre.scrollTop = 0;
    } else {
        fenetre.scrollTop = (lignes[0] - (fenetre_ligne / 2) + 3) * taille_ligne;
    }
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

//OUVRIR/FERMER LA FENETRE D'ALGORITHME
function ouvrir_fermer_fentrealgo() {

    if (document.getElementById("code-fichier").style.width == '0px') {
        for (let index = 0; index < 421; index++) {

            setTimeout(() => {
                document.getElementById("code-fichier").style.width = index + 'px';
            }, index * 2);

        }

        document.getElementById("code-hide-img").className = "rotateLeft";
    }

}
//OUVRIR LA FENETRE D'ALGORITHME
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

// FERMER LA FENETRE DE COMMENATAIRES
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