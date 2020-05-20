/////////////////////////////////////////VISUSFSD/FICHIER_ARBORECSENT//////////////////////////////////////////////////////////////////
//////////////////////////////////////////MAIN/PROGRAMME_PRINCIPALE/////////////////////////////////////////////////////////////////////
function setup() {
    /****************************************FONCTIONS/AIDE_EN_LIGNE*************************************************/
    /*  cette partie du code gere tous ce qui est en rapport avec l'aide en ligne
                                                      les evenements relatifs au bouton precedent,suivant,quiter */
    /**********************************************FONCTION/AFFICHAGE/hover*******************************************************/
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


    /********************************************GESTION_EVENEMENT_SUIVANT_PRECEDANT_QUITER*************************************/
    const nbrDePhotoAide = 12; //le nombre d'image dans l'aide en ligne 

    var tabDesPhoto = [];
    for (let index = 0; index < nbrDePhotoAide; index++) {
        tabDesPhoto[index] = "photo" + index;
    }
    /***************************QUITER****************************/
    document.getElementById('quitte').addEventListener('click', function() {
        $('.aide').fadeOut();
        if (document.getElementById('menu').style.width == '0px')
            setTimeout(() => {
                affichageMenu();
            }, 100);


    });

    /**********************Aide_En_Ligne(evenement)*****************/
    document.getElementById("aide-hide").addEventListener('click', aideHide);

    function aideHide() {

        //$('#scene').fadeIn(2000);
        document.querySelector(".aide").style.display = "block";
        document.getElementById("suivant").style.display = "flex";
        document.getElementById("precedent").style.display = "none";
        document.getElementById("photo0").style.display = "flex";
        for (let index = 1; index < nbrDePhotoAide; index++) {
            document.getElementById(tabDesPhoto[index]).style.display = "none";
        }
    }


    /************************SUIVANT************************************/
    document.getElementById("suivant").addEventListener('click', function() {
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

    /*******************************PRECEDENT****************************/

    document.getElementById("precedent").addEventListener('click', function() {
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
    /*********************************************Fin de l'aide ***************************************************/
    /***********************variable globale ******************/
    var coef = 0.8; // variable de vitesse 
    let taille = document.documentElement.clientHeight;
    let top = $('#header').innerHeight();
    let bas = $('#cote-bas').innerHeight();
    document.getElementById('svg').setAttribute("height", '' + (taille - top - bas - 25) + '');
    $(window).resize(function() {
        let taille = document.documentElement.clientHeight;
        let top = $('#header').innerHeight();
        let bas = $('#cote-bas').innerHeight();
        document.getElementById('svg').setAttribute("height", '' + (taille - top - bas - 25) + '');
    });
    let isBtree = false; // si l'arbe est un Barbre 
    var tree = new Tree(4); // initialisation d'un arbre M-aire
    var degreArbre = 2; //le degre de l'arbre 
    var btree = new Btree(degreArbre); // initialisation d'un Barbre 
    var ui = new UI(); //initialisation d'une ui (servira pour l'animation et l'affichage)
    /**les diferent algorithme */
    const algo_recherche = `<p >Procedure Recherche(valeur)  </p>
        <p id="afectation">          noeud<&#151;racine; prec<&#151;null;  j<&#151;0;  trouv=faux</p>
      <p id="debut">&nbsp;&nbsp;DEBUT:</p>
        <p id="tq">&nbsp;&nbsp;&nbsp;&nbsp;TQ (Non trouv et neoud<>null )</p>
        <p id="rechercheInterne"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; rechercheInterne(valeur,trouv,j)   </p>
        <p id="passageFils"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    Si(Non trouv ) prec <&#151; neoud ; noeud<&#151;noeud.Fils[j] </p>
        <p id="ftq"> &nbsp;&nbsp;&nbsp;&nbsp;  FTQ  </p>
        <p id="fin" >   &nbsp;&nbsp;    FIN </p>`
    const algo_Supression = `
<p >Procedure Supression(valeur)  </p>
        <p id="afectation">    Soit :   noeud<&#151;racine; j<&#151;0;  trouv<&#151;faux</p>
      <p id="debut">&nbsp;&nbsp;DEBUT:</p>
        <p id="recherche" >&nbsp;&nbsp;&nbsp;&nbsp;recherche(valeur,trouv,noeud,j)</p>
        <p id="si"> &nbsp;&nbsp;&nbsp;&nbsp;Si(trouv)   </p>
        <p id="supr"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; noeud.Valeur[j].sup<&#151;vrai;&nbsp;&nbsp;     noeud.nbSupr<&#151;noeud.nbSupr+1;</p>
        <p  id="fsi"> &nbsp;&nbsp;&nbsp;&nbsp; FSI  </p>
        <p id="fin"> &nbsp;&nbsp; FIN </p>  `
    const algo_parcourt = `
<p >Procedure parcourt(noeud)  </p>
         <p > &nbsp;&nbsp; DEBUT </p> 
        <p > Pour i allant de 1 à noeud.nbValeur+1</p>
      <p >&nbsp;&nbsp;Si(noeud.fils[i]<>null)</p>
        <p  >&nbsp;&nbsp;&nbsp;&nbsp;parcourt(noeud.fils[i])</p>
        <p > &nbsp;&nbsp;FSi   </p>
        <p > &nbsp;&nbsp Ecrire(noeud.valeur[i])</p>
        <p  > Fpour  </p>
        <p > &nbsp;&nbsp; FIN </p>  `;
    const algo_insertion = `
        <p >Procedure Insertion(Valeur)  </p>
        <p id="afectation">&nbsp;&nbsp;noeud&#139;&#151;racine; prec&#139;&#151;null;  j&#139;&#151;0;  trouv&#139;&#151;faux valeur&#139;&#151;0</p>
        <p id="debut" >&nbsp;&nbsp; DEBUT </p> 
        <p id="recherche" >&nbsp;&nbsp;&nbsp;&nbsp;recherche(Valeur,noeud,j,trouv)</p>
        <p id="si">&nbsp;&nbsp;&nbsp;&nbsp;Si(non trouv)  </p>
        <p id="insertionInterne">&nbsp;&nbsp&nbsp;&nbsp;&nbsp;&nbsp&nbsp;&nbsp;InsertionInterne(noeud,j,valeur)</p>
        <p id="fsi" >&nbsp;&nbsp;&nbsp;&nbsp;FSi</p> 
        <p id="fin"> &nbsp;&nbsp; Fin </p>`;
    const algo_delete = `
<p id="procedure">Procedure Supression(noeud,j) </p>
<p id="algo1">&nbsp;&nbsp;Si (Non noeud.estUneFeuille) noeud.valeur[j]=suivantInordre(noeud,valeur)  </p>
<p id="algo2" >&nbsp;&nbsp;&nbsp;&nbsp; supression : SupressionInterne(noeud,valeur)// avec decalage </p> 
<p id="algo3" >&nbsp;&nbsp;&nbsp;&nbsp;Si(noeud.parent.fils&#91;pos+1&#93.nbValeur&#62;degre&#47;2 Ou noeud.parent.fils&#91;pos-1&#93.nbValeur&#62;degre&#47;2 )</p>
<p id="algo4">&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; redistribution(); Aller a FSi </p>
<p id="algo5">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Sinon Fusion(noeud,j,valeur) </p>
<p id="algo6" >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  noeud=noeud.parent valeur=noeud.parent.valeur[pos] Aller a supression:  </p> 
<p id="algo7"> &nbsp;&nbsp;&nbsp;&nbsp; FSi </p>`;

    /*********************************************************/



    /***************************************Titre_Barbre************************************************************/
    /*cette partie du code gere l'evenement clic sur Barbre */
    document.getElementById("title-Barbre").addEventListener('click', initBarbre);

    function initBarbre() {
        if (document.getElementById('degre').style.height != '0px') affichageDegre();
        if (isBtree) {
            switch (degreArbre) {
                case 3:
                    deg3();
                    break;
                case 5:
                    deg5();
                    break;
                case 7:
                    deg7();
                    break;

                default:
                    break;
            }
            fct();
        } else

        {
            isBtree = true;
            ui.removeAll(coef);
            document.querySelector('#degre').innerHTML = ` <p id="deg2" class="selection" style="display:none;"  >&nbsp;Degre&nbsp;2 </p>
          <p id="deg3" class="selection" >&nbsp;Degre&nbsp;3</p>
          <p id="deg4" class="selection" style="display:none;">&nbsp;Degre&nbsp;4</p>
          <p id="deg5" class="selection">&nbsp;Degre&nbsp;5</p>
          <p id="deg6" class="selection" style="display:none;">&nbsp;Degre&nbsp;6</p>
          <p id="deg7" class="selection"  >&nbsp;Degre&nbsp;7</p>`;

            deg5();
            fct();
            //  btree.root=null;
            document.getElementById("scene").scrollLeft = 1300;
            $('#title-Barbre').addClass("visited");
            $('#title-Maire').removeClass("visited");
        }
        setTimeout(() => {
            affichageDegre();
        }, 250);

    };




    /**************************************CHANGEMENT_DEGRE******************************************************/
    /* cette partie gere le changement de degré */

    function changementDegre(degre) {
        ui = new UI();
        ui.removeAll(coef); // on supprime toute la page

        if (!isBtree) // si l'arbre est un arbre Maire 
        {
            tree = new Tree(degre); // on crée un nouvel arbre de degre voulu

            for (let i = 0; i < 12; i++) {
                let valeur = Math.round(Math.random() * 999);
                /* creation de facon aleatoire  */
                let temp = tree.addValue(valeur, coef).temp;
                reorganised = false;

            }
            mettreAjourAffichageEntete(); // metre a jour les informations de l'entete  
            tree.root.parcourt(ui, coef); // on affiche le nouvel arbre 
            tree.entete.insertionReo = 0;
        }
        if (isBtree) {
            btree = new Btree(degre); // si l'arbre est un Barbre 

            for (let i = 0; i < 20; i++) {
                let valeur = Math.round(Math.random() * 999);
                /*creation de facon aleatoire*/
                btree.insert(valeur, coef); // insertion de la valeur 
            }
            btree.root.setPosition(btree.root.x, btree.root.y, coef); //reorganisation des coordonée(sur l'affichage ) de l'arbre 
            mettreAjourAffichageEntete(); // metre a jour les informations de l'entete 
            btree.root.parcourt(ui, coef); //  on affiche le nouvel arbre
        }

    }




    /*********************************************LECTURE/ECRITURE*****************************************/
    /**********MISE A ZERO de lecture et d'ecriture************/
    function initLectureEcriture(params) {
        lecture = 0;
        ecriture = 0;
        $('#current-action').fadeOut(1000);
    }
    /*************AFFICHAGE_LECTURE_ECRITURE************************/
    function affichageLectureEcriture() {
        document.getElementById('current-action').innerHTML = 'Lecture : ' + lecture + ' | Ecriture : ' + ecriture;
        $('#current-action').fadeIn(1000);
    }

    document.getElementById("scene").scrollLeft = 1300; // regler la scrollabar 




    /*********************************************Titre_Arbre Maire***************************************/
    /*cette partie du code gere l'evenement clic sur Arbre M-aire */
    document.getElementById("title-Maire").addEventListener('click', initMaire);

    function initMaire() {
        if (document.getElementById('degre').style.height != '0px') affichageDegre();
        if (!isBtree) {
            switch (degreArbre) {
                case 2:
                    deg2();
                    break;
                case 3:
                    deg3();
                    break;
                case 4:
                    deg4();
                    break;
                case 5:
                    deg5();
                    break;
                case 6:
                    deg6();
                    break;
                default:
                    break;
            }
            fct();
        } else {
            isBtree = false;


            ui.removeAll(coef);
            document.querySelector('#degre').innerHTML = ` <p id="deg2" class="selection"  >&nbsp;Degre&nbsp;2 </p>
          <p id="deg3" class="selection" >&nbsp;Degre&nbsp;3</p>
          <p id="deg4" class="selection" >&nbsp;Degre&nbsp;4</p>
          <p id="deg5" class="selection">&nbsp;Degre&nbsp;5</p>
          <p id="deg6" class="selection" ;>&nbsp;Degre&nbsp;6</p>
           <p id="deg7" class="selection" style="display:none;" >&nbsp;Degre&nbsp;7</p>`;

            deg4();
            fct();

            document.getElementById("scene").scrollLeft = 1300;
            $('#title-Barbre').removeClass("visited");
            $('#title-Maire').addClass("visited");
        }
        setTimeout(() => {
            affichageDegre();
        }, 250);


    };



    /*************************************************MENU*******************************************************/
    document.getElementById("menu-hide").addEventListener('click', affichageMenu);
    /*************AFFICHAGE MENU****************/
    function affichageMenu() {

        if (document.getElementById("menu").style.width == '0px') //si le menu est caché 
        {
            /*sortir le menu en translation*/
            for (let index = 0; index < 151; index++) {
                setTimeout(() => {
                    document.getElementById("menu").style.width = index + 'px';
                }, index * 0.9);
            }
            document.getElementById("menu-hide-img").className = "rotateRight";

        } else if (document.getElementById("menu").style.width == '150px') //  si le menu est affiché 
        {
            /* masquer le menu en translation*/
            for (let index = 150; index > -1; index--) {
                setTimeout(() => {
                    document.getElementById("menu").style.width = index + 'px';
                }, (151 - index) * 0.9);

            }
            document.getElementById("menu-hide-img").className = "rotateLeft";
        }


        /************* **********/

        $("#create-action").fadeOut(250);
        $("#search-action").fadeOut(250);
        $("#delete-action").fadeOut(250);
        $("#requete-action").fadeOut(250);
        $("#insert-action").fadeOut(250);


    }
    /***************VEROU_REACTIVATION_MENU*******************/
    function suprimerEvenement() // masque les menus et les bloque 
    {
        affichageMenu(); //masquer les menus
        document.getElementById('menu-hide').removeEventListener('click', affichageMenu); //supprimer l'evenement relatif au clic sur le menu
        if (document.getElementById('degre').style.height != '0px') affichageDegre();
        document.getElementById('degre-hide').removeEventListener('click', affichageDegre); //supprimer l'evenement relatif au clic sur le menu du dege 
        document.getElementById('title-Maire').removeEventListener('click', initMaire);
        document.getElementById('title-Barbre').removeEventListener('click', initBarbre);
    }

    function majMenu() //reactive le menu d'operations et le menu du degre 
    {
        affichageMenu(); // affiche le menu et le choix du degre 
        document.getElementById('menu-hide').addEventListener('click', affichageMenu);
        document.getElementById('degre-hide').addEventListener('click', affichageDegre);
        document.getElementById('title-Maire').addEventListener('click', initMaire);
        document.getElementById('title-Barbre').addEventListener('click', initBarbre);

    }





    /****************************************************DEGRE***************************************************/
    document.getElementById("degre-hide").addEventListener('click', affichageDegre);
    /****************Afichage Menu Degre***************/
    function affichageDegre() {
        if (document.getElementById("degre").style.height == '0px' || document.getElementById("degre").style.height == '149px' || document.getElementById("degre").style.height == '90px') {
            if (document.getElementById("degre").style.height == '0px') // si le menu du degre est masqué 
            {
                if (!isBtree) // si l'arbre est un arbre M-aire
                {
                    /*affichage du menu pour choisir le degre  */
                    for (let index = 0; index < 150; index++) {

                        setTimeout(() => {
                            document.getElementById("degre").style.height = index + 'px';
                        }, index * 2);

                    }
                } else // l'arbre est un Barbre 
                {
                    for (let index = 0; index < 91; index++) {

                        setTimeout(() => {
                            document.getElementById("degre").style.height = index + 'px';
                        }, index * 2);

                    }
                }

            } else // si le menu du degre est affiché 
            {
                if (!isBtree) //l'arbre est un arbre Maire
                { /*fermer le menu du degré  */
                    for (let index = 150; index > -1; index--) {
                        setTimeout(() => {
                            document.getElementById("degre").style.height = index + 'px';
                        }, (150 - index));
                    }
                } else // l'arbre est un B-arbre 
                { /* fermer le menu du degré  */
                    for (let index = 91; index > -1; index--) {
                        setTimeout(() => {
                            document.getElementById("degre").style.height = index + 'px';
                        }, (91 - index));
                    }
                }
            }
            /* rotation de la fleche */
            if (document.getElementById("degre-hide-img").className == "rotateDown") {
                document.getElementById("degre-hide-img").className = "rotateTop";
            } else {
                document.getElementById("degre-hide-img").className = "rotateDown";
            }


        }
    }
    /******************CHOIX_DEGRE ********************/
    /*fonctions relatives a chaque degre de l'arbre  */
    function deg2() // fonction relative au choix du degré 2
    {
        degreArbre = 2;
        changementDegre(2); // construire le nouvel arbre suivant le degre 
        document.getElementById("deg2").removeEventListener('click', deg2); //supression de l'evenement relatif au clic du degre 2
        for (let index = 2; index < 8; index++) {
            document.querySelector('#deg' + index).style.backgroundColor = '';
        }
        document.querySelector('#deg2').style.backgroundColor = 'black';
        /*activer les evenement pour les autres degre  */
        document.getElementById("deg3").addEventListener('click', deg3);
        document.getElementById("deg4").addEventListener('click', deg4);
        document.getElementById("deg5").addEventListener('click', deg5);
        document.getElementById("deg6").addEventListener('click', deg6);
        document.getElementById("deg7").addEventListener('click', deg7);
    }

    function deg3() // fonction relative au choix du degre 3 
    {
        degreArbre = 3;
        changementDegre(3);
        document.getElementById("deg3").removeEventListener('click', deg3);
        for (let index = 2; index < 8; index++) {
            document.querySelector('#deg' + index).style.backgroundColor = '';
        }
        document.querySelector('#deg3').style.backgroundColor = 'black';

        document.getElementById("deg2").addEventListener('click', deg2);
        document.getElementById("deg4").addEventListener('click', deg4);
        document.getElementById("deg5").addEventListener('click', deg5);
        document.getElementById("deg6").addEventListener('click', deg6);
        document.getElementById("deg7").addEventListener('click', deg7);
    }

    function deg4() // fonction relative au choix du degre4
    {
        degreArbre = 4;
        changementDegre(4);
        document.getElementById("deg4").removeEventListener('click', deg4);
        for (let index = 2; index < 8; index++) {
            document.querySelector('#deg' + index).style.backgroundColor = '';
        }
        document.querySelector('#deg4').style.backgroundColor = 'black';

        document.getElementById("deg2").addEventListener('click', deg2);
        document.getElementById("deg3").addEventListener('click', deg3);
        document.getElementById("deg5").addEventListener('click', deg5);
        document.getElementById("deg6").addEventListener('click', deg6);
        document.getElementById("deg7").addEventListener('click', deg7);
    }

    function deg5() // fonction relative au choix du degre 5
    {
        degreArbre = 5;
        changementDegre(5);
        document.getElementById("deg5").removeEventListener('click', deg5);
        for (let index = 2; index < 8; index++) {
            document.querySelector('#deg' + index).style.backgroundColor = '';
        }
        document.querySelector('#deg5').style.backgroundColor = 'black';

        document.getElementById("deg2").addEventListener('click', deg2);
        document.getElementById("deg3").addEventListener('click', deg3);
        document.getElementById("deg4").addEventListener('click', deg4);
        document.getElementById("deg6").addEventListener('click', deg6);
        document.getElementById("deg7").addEventListener('click', deg7);
    }

    function deg6() // fonction relative au choix du degre 6
    {
        degreArbre = 6;
        changementDegre(6);
        document.getElementById("deg6").removeEventListener('click', deg6);
        for (let index = 2; index < 8; index++) {
            document.querySelector('#deg' + index).style.backgroundColor = '';
        }
        document.querySelector('#deg6').style.backgroundColor = 'black';

        document.getElementById("deg2").addEventListener('click', deg2);
        document.getElementById("deg3").addEventListener('click', deg3);
        document.getElementById("deg5").addEventListener('click', deg5);
        document.getElementById("deg4").addEventListener('click', deg4);
        document.getElementById("deg7").addEventListener('click', deg7);
    }

    function deg7() //fonction relative au choix du degre 7
    {
        degreArbre = 7;
        changementDegre(7);
        document.getElementById("deg7").removeEventListener('click', deg7);
        for (let index = 2; index < 8; index++) {
            document.querySelector('#deg' + index).style.backgroundColor = '';
        }
        document.querySelector('#deg7').style.backgroundColor = 'black';

        document.getElementById("deg2").addEventListener('click', deg2);
        document.getElementById("deg3").addEventListener('click', deg3);
        document.getElementById("deg5").addEventListener('click', deg5);
        document.getElementById("deg6").addEventListener('click', deg6);
        document.getElementById("deg4").addEventListener('click', deg4);
    }
    /*******************STYLE_DEGRE************************/
    /**Fonction qui permet de changer de couleur en passant le cursseur sur une option du menu  */
    function fct() // attribue des evenements hover au option du menu de degre  
    {

        document.querySelector('#deg2').addEventListener('mouseover', function(e) {
            e.target.style.backgroundColor = 'black';
        });
        document.querySelector('#deg2').addEventListener('mouseout', function(e) {
            if (degreArbre != 2)
                e.target.style.backgroundColor = 'gray';
        });

        document.querySelector('#deg3').addEventListener('mouseover', function(e) {
            e.target.style.backgroundColor = 'black';
        });
        document.querySelector('#deg3').addEventListener('mouseout', function(e) {
            if (degreArbre != 3)
                e.target.style.backgroundColor = 'gray';
        });

        document.querySelector('#deg4').addEventListener('mouseover', function(e) {
            e.target.style.backgroundColor = 'black';
        });
        document.querySelector('#deg4').addEventListener('mouseout', function(e) {
            if (degreArbre != 4)
                e.target.style.backgroundColor = 'gray';
        });

        document.querySelector('#deg5').addEventListener('mouseover', function(e) {
            e.target.style.backgroundColor = 'black';
        });
        document.querySelector('#deg5').addEventListener('mouseout', function(e) {
            if (degreArbre != 5)
                e.target.style.backgroundColor = 'gray';
        });

        document.querySelector('#deg6').addEventListener('mouseover', function(e) {
            e.target.style.backgroundColor = 'black';
        });
        document.querySelector('#deg6').addEventListener('mouseout', function(e) {
            if (degreArbre != 6)
                e.target.style.backgroundColor = 'gray';
        });
        document.querySelector('#deg7').addEventListener('mouseover', function(e) {
            e.target.style.backgroundColor = 'black';
        });
        document.querySelector('#deg7').addEventListener('mouseout', function(e) {
            if (degreArbre != 7)
                e.target.style.backgroundColor = 'gray';
        });
    }





    /***************************************************ENTETE******************************************************/
    document.getElementById("entete-hide").addEventListener('click', enteteInfoHide);
    /******************Affichage de l'entete***********/
    function enteteInfoHide() //cette fonction affiche et masque la barre de l'entete
    {
        mettreAjourAffichageEntete(); //MAJ de l'entete
        if (document.getElementById("enteteInfo").style.width == '0px' || document.getElementById("enteteInfo").style.width == '370px') {
            if (document.getElementById("enteteInfo").style.width == '0px') //si l'entete est masqué
            { /*afichage de l'entete */
                for (let index = 0; index < 371; index++) {
                    setTimeout(() => {
                        document.getElementById("enteteInfo").style.width = index + 'px';
                    }, index * 0.9);
                }
            } else // l'entete est affiché 
            /*affichage de l'entete*/
                for (let index = 370; index > -1; index--) {
                    setTimeout(() => {
                        document.getElementById("enteteInfo").style.width = index + 'px';
                    }, (371 - index) * 0.9);
                }
                /*Rotetion de la fleche*/
            if (document.getElementById("entete-hide-img").className == "rotateLeft") {
                document.getElementById("entete-hide-img").className = "rotateRight";
            } else {
                document.getElementById("entete-hide-img").className = "rotateLeft";
            }
        }
    }
    /*******************MAJ de l'entete***************/
    function mettreAjourAffichageEntete() //cette fonction met a jour l'entete et l'affiche 
    {
        if (!isBtree) // l'arbre est un arbre Maire
            document.getElementById('enteteText').innerHTML = "Insertions : " + tree.entete.insertion + " | Blocs : " + tree.entete.blocs + " | Suppressions : " + tree.entete.suppression;
        else document.getElementById('enteteText').innerHTML = "Insertions : " + btree.entete.insertion + "  |  Blocs : " + btree.entete.blocs;
    }





    /***************************************************ALGORITHME***********************************************/
    /*****************AFFICHE_MASQUE_ALGORITHME************/
    document.getElementById("code-hide").addEventListener('click', function() // evenement clic sur la fenetre d'algorithme
        {
            if (document.getElementById("code").style.width == '0px' || document.getElementById("code").style.width == '420px') {
                if (document.getElementById("code").style.width == '0px') // si la fenetre est masquée 
                { /**afichage de la fenetre d'algorithme  */
                    for (let index = 0; index < 421; index++) {

                        setTimeout(() => {
                            document.getElementById("code").style.width = index + 'px';
                        }, index * 0.8);

                    }

                    /**Rotation de la fleche  */
                    document.getElementById("code-hide-img").className = "rotateLeft";
                } else //si la fenetre est affichée 
                { //cacher la fenetre 
                    for (let index = 420; index > -1; index--) {
                        setTimeout(() => {
                            document.getElementById("code").style.width = index + 'px';
                        }, (420 - index) * 0.8);
                    }
                    /**rotation de la fleche  */
                    document.getElementById("code-hide-img").className = "rotateRight";
                }
            }

        });



    /****************************************************INSTRUCTION*********************************************/
    /*******************AFFICHE_MASQUE_ALGORITHME************/
    document.getElementById("instruction-hide").addEventListener('click', function() // afiche ou cache la barre de commentaire 
        {
            if (document.getElementById("instruction").style.width == '0px' || document.getElementById("instruction").style.width == '420px') // si la barre est fermée
            {
                if (document.getElementById("instruction").style.width == '0px') // si la barre est fermée
                { /**affiche la barre de commentaire  */
                    for (let index = 0; index < 421; index++) {
                        setTimeout(() => {
                            document.getElementById("instruction").style.width = index + 'px';
                        }, index * 0.8);
                    }
                } else //si la barre est ouverte  
                { /**caxher la barre de commentaire  */
                    for (let index = 420; index > -1; index--) {
                        setTimeout(() => {
                            document.getElementById("instruction").style.width = index + 'px';
                        }, (420 - index) * 0.8);
                    }
                }
                /**Rotation de la fleche  */
                if (document.getElementById("instruction-hide-img").className == "rotateLeft") {
                    document.getElementById("instruction-hide-img").className = "rotateRight";
                } else {
                    document.getElementById("instruction-hide-img").className = "rotateLeft";
                }
            }
        });




    /**************************AFFICHAGE_CODE_INSTRU**************************************************************/
    function menu() //affiche ou masque a la fois la barre d'algorithme et la barre de commentaire 
    { /**afichage de la fenetre de l'algorithme  */
        for (let index = 0; index < 421; index++) {

            setTimeout(() => {
                document.getElementById("code").style.width = index + 'px';
            }, index * coef);

        }
        /**rotation de la fleche  */
        document.getElementById("code-hide-img").className = "rotateLeft";
        /**affichage de la barre de commentaire */
        for (let index = 0; index < 421; index++) {

            setTimeout(() => {
                document.getElementById("instruction").style.width = index + 'px';
            }, index * coef);

        }
        /**rotation de la fleche  */
        document.getElementById("instruction-hide-img").className = "rotateLeft";
    }



    /********************************************************MENU_OPTION*****************************************/
    /*******************AFFICHAGE_MASQUE_COULEUR_OPTION_MENU*****/
    /**ces fonctions ont pour roles de changer de couleur 
                                                des option du menu en passant le cursseur sur l'option */
    document.querySelector('#insert').addEventListener('mouseover', function(e) {
        e.target.style.backgroundColor = 'black';
    });
    document.querySelector('#insert').addEventListener('mouseout', function(e) {
        e.target.style.backgroundColor = 'lightseagreen';
    });
    document.querySelector('#parcourt').addEventListener('mouseover', function(e) {
        e.target.style.backgroundColor = 'black';
    });
    document.querySelector('#parcourt').addEventListener('mouseout', function(e) {
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
    document.querySelector('#requi').addEventListener('mouseover', function(e) {
        e.target.style.backgroundColor = 'black';
    });
    document.querySelector('#requi').addEventListener('mouseout', function(e) {
        e.target.style.backgroundColor = 'lightseagreen';
    });
    /***********Affichage des options du menu************/
    /**ces fonctions ont pour role de cacher toute autre option du menu que celle cliqué  */
    document.getElementById("insert").addEventListener('click', function() // pour l'option insertion
        {
            if (document.getElementById("insert-action").style.display == 'none') {
                document.querySelector('.create').style.display = 'none';
                document.querySelector('.search').style.display = 'none';
                document.querySelector('.delete').style.display = 'none';
                document.querySelector('.requete').style.display = 'none';
                // document.getElementById("insert-action").style.display='flex';
                $("#insert-action").fadeIn()
            } else $("#insert-action").fadeOut()


        });
    document.getElementById("requete").addEventListener('click', function() // pour l'option requete
        {
            if (document.getElementById("requete-action").style.display == 'none') {
                document.querySelector('.create').style.display = 'none';
                document.querySelector('.search').style.display = 'none';
                document.querySelector('.delete').style.display = 'none';
                document.querySelector('.insert').style.display = 'none';
                // document.getElementById("requete-action").style.display='flex';
                $("#requete-action").fadeIn()
            } else $("#requete-action").fadeOut()


        });
    document.getElementById("create").addEventListener('click', function() // pour l'option creation
        {
            if (document.getElementById("create-action").style.display == 'none') {
                document.querySelector('.insert').style.display = 'none';
                document.querySelector('.search').style.display = 'none';
                document.querySelector('.delete').style.display = 'none';
                document.querySelector('.requete').style.display = 'none';
                //document.getElementById("create-action").style.display='flex';
                $("#create-action").fadeIn()

            } else $("#create-action").fadeOut()


        });
    document.getElementById("search").addEventListener('click', function() // pour l'option recherche
        {
            if (document.getElementById("search-action").style.display == 'none') {
                document.querySelector('.insert').style.display = 'none';
                document.querySelector('.create').style.display = 'none';
                document.querySelector('.delete').style.display = 'none';
                document.querySelector('.requete').style.display = 'none';
                //document.getElementById("search-action").style.display='flex';
                $("#search-action").fadeIn()
            } else $("#search-action").fadeOut()


        });
    document.getElementById("delete").addEventListener('click', function() // pour l'option supression
        {
            if (document.getElementById("delete-action").style.display == 'none') {
                document.querySelector('.insert').style.display = 'none';
                document.querySelector('.create').style.display = 'none';
                document.querySelector('.search').style.display = 'none';
                document.querySelector('.requete').style.display = 'none';
                // document.getElementById("delete-action").style.display='flex';
                $("#delete-action").fadeIn()

            } else $("#delete-action").fadeOut()

        });




    /*********************************************OPERATIONS******************************************************/
    /*********INSERTION************/
    let ty = document.getElementById('submit_arb');
    ty.addEventListener('click', function(e) // evenement relatif a l'insertion
        { /*on recupere la variable de vitesse*/
            var slider = document.getElementById("myRange");
            initLectureEcriture();
            coef = ((180 - Number(slider.value)) / 100);
            document.getElementById("scene").scrollLeft = 1300;


            let valeur = parseInt(document.querySelector('#sub_arb').value); //on recupere la valeur

            let vrai = verifSaisie(valeur, menu, coef).vrai; //verifie si la valeur saisie  est valide
            if (vrai) //si la valeur saisie est valide   
            {
                suprimerEvenement(); // on bloque les menus 
                document.getElementById("code").innerHTML = algo_insertion; // on affiche l'algorithme de l'insertion dans la fenetre d'algo
                menu(); // ouvre la fenetre d'algo et la barre de commentaires
                if (isBtree == false) //si l'arbre est M-aire
                {
                    ui.removeAll(coef); // supprime tout 

                    if (tree.root != null) tree.root.parcourt(ui, coef); // on reafiche l'arbre aprés avoir supprimer la trace de l'ancienne animation
                    document.getElementById("code").innerHTML = algo_insertion; // on affiche l'algo d'insertion dans la fenetre d'algo
                    /**cette partie du code a pour role d'animer l'algorithme */
                    setTimeout(() => {
                        document.getElementById("afectation").className = 'ligneExecute';
                        setTimeout(() => {
                            document.getElementById('afectation').removeAttribute("class");
                            document.getElementById("debut").className = 'ligneExecute';
                            setTimeout(() => {
                                document.getElementById('debut').removeAttribute("class");
                                document.getElementById("recherche").className = 'ligneExecute';

                            }, 1000 * coef);
                        }, 1000 * coef);
                    }, 1000 * coef);
                    /*****************************************************************/


                    let recherche = tree.search(valeur, ui, coef); // recherche  pour recuperer le tableau de noeud parcouru pour les animer 
                    let trouv = recherche.trouv;
                    let node = recherche.node;
                    lecture = 0;
                    setTimeout(() => {
                        let temp = 0;

                        if (tree.root != null) temp = ui.AnimateBtree(node, coef).temp; // anime le parcourt de la recherche 
                        /**cette partie anime une partie de l'algorithme  */
                        setTimeout(() => {
                            document.getElementById("code").innerHTML = algo_insertion;
                            document.getElementById("si").className = 'ligneExecute';
                            setTimeout(() => {

                                document.getElementById("si").removeAttribute("class");
                            }, 1000 * coef);
                        }, temp * coef);
                        /*******************Fin***********************/
                        if (!trouv) //si la valeur n'existe pas
                        {
                            /*****anime l'insertion ainsi que l'algorithme*****/
                            setTimeout(() => {
                                document.getElementById("insertionInterne").className = 'ligneExecute';
                                setTimeout(() => {
                                    let temp_ = ui.AnimateBtreeInsertion(tree.addValue(valeur, coef).node, coef); //anime l'insertion 
                                    setTimeout(() => {
                                        mettreAjourAffichageEntete();
                                        document.getElementById("code").innerHTML = algo_insertion; // on affiche l'algo d'insertion
                                        document.getElementById("fsi").className = 'ligneExecute';
                                        setTimeout(() => {
                                            document.getElementById("fsi").removeAttribute("class");
                                            document.getElementById("fin").className = 'ligneExecute';
                                            setTimeout(() => {
                                                majMenu(); //on reactive les menus 
                                                affichageLectureEcriture(); //on affiche le nombre de lecture et d'ecriture
                                                document.getElementById("fin").removeAttribute("class");
                                                if (tree.entete.insertionReo > tree.degre - 1) //si le nombre d'insertion depasse le seuil des insertions avant la reorganisation
                                                {
                                                    setTimeout(() => {
                                                        alert('le fichier devient volumineux,il doit etre reorganisé '); // message pour la reorganisation
                                                    }, 1250);
                                                }
                                            }, 1000 * coef);
                                        }, 1000 * coef);
                                    }, temp_ * coef);
                                }, 1000 * coef);
                            }, (temp + 3000) * coef);
                        } else // la valeur existe 
                        { /********animer l'algo*********/
                            setTimeout(() => {

                                document.getElementById("fsi").className = 'ligneExecute';
                                document.getElementById('instruction').innerHTML = '<p> La valeur a inserer existe deja  </p>'; // message indiquant que la valeur existe deja 
                                setTimeout(() => {
                                    document.getElementById("fsi").removeAttribute("class");
                                    document.getElementById("fin").className = 'ligneExecute';
                                    document.getElementById('instruction').innerHTML = '<p>Fin de l\'insertion avec echec</p>'; //message indiquant que l'insertion est terminée
                                    setTimeout(() => {
                                        majMenu(); // reactivation des menus 
                                        affichageLectureEcriture(); // affichage des accées disque 
                                        document.getElementById("fin").removeAttribute("class");
                                    }, 1000 * coef);
                                }, 1000 * coef);
                            }, (temp + 1000) * coef);
                        }
                    }, 5000 * coef);

                    document.getElementById("insert-action").style.display = 'none';
                } else // l'arbre est un B-arbre 
                {
                    let valeur = parseInt(document.querySelector('#sub_arb').value); // on recupere la valeur a inserer 
                    ui.removeAll(coef); // supprimer tout 
                    document.getElementById("code").innerHTML = algo_insertion; //affichage de l'algo d'insertion
                    /**animer l'algo et l'insertion */
                    setTimeout(() => {
                        document.getElementById("afectation").className = 'ligneExecute';
                        setTimeout(() => {
                            document.getElementById('afectation').removeAttribute("class");
                            document.getElementById("debut").className = 'ligneExecute';
                            setTimeout(() => {
                                document.getElementById('debut').removeAttribute("class");
                                document.getElementById("recherche").className = 'ligneExecute';

                            }, 1000 * coef);
                        }, 1000 * coef);
                    }, 1000 * coef);


                    if (btree.root != null) btree.root.parcourt(ui, coef); // on reafiche l'arbre pour supprimer la trace de l'ancienne operation


                    let recherche = btree.search(valeur, ui, coef); // recherche de la valeur pour animer le parcourt effectuer par la recherche 
                    let trouv = recherche.trouv;
                    let node = recherche.node;
                    lecture = 0; // initialisation du nombre de lecture 
                    setTimeout(() => {
                        let temp = 0;

                        if (btree.root != null) temp = ui.AnimateBtree(node, coef).temp; //anime la recherche 


                        setTimeout(() => {
                            /**anime l'algo d'insertion*****/
                            document.getElementById("code").innerHTML = algo_insertion; //on affiche l'algo de l'insertion dans la fenetre d'algo
                            document.getElementById("si").className = 'ligneExecute';
                            setTimeout(() => {

                                document.getElementById("si").removeAttribute("class");
                            }, 1000 * coef);
                        }, temp * coef);
                        if (!trouv) //si la valeur n'existe pas 
                        {
                            setTimeout(() => {
                                /***anime l'insertion et l'algorithme de l'insertion ***/
                                document.getElementById("insertionInterne").className = 'ligneExecute';
                                setTimeout(() => {
                                    let nodeAinserer = btree.insert(valeur, coef).node; //insere la valeur dans l'arbre                   
                                    let temp_ = ui.AnimateTreeInsertion(nodeAinserer, coef).temp; // anime l'insertion de la valeur 
                                    setTimeout(() => {
                                        mettreAjourAffichageEntete(); //mise a jour des element de l'entete
                                        document.getElementById("code").innerHTML = algo_insertion;
                                        document.getElementById("fsi").className = 'ligneExecute';
                                        setTimeout(() => {
                                            document.getElementById("fsi").removeAttribute("class");
                                            document.getElementById("fin").className = 'ligneExecute';
                                            setTimeout(() => {
                                                majMenu(); //reactivation des menus
                                                affichageLectureEcriture(); //affichage du nombre d'accées disque 
                                                document.getElementById("fin").removeAttribute("class");
                                                btree.root.setPosition(btree.root.x, btree.root.y, coef); //repositionement des noeuds 
                                            }, 1000 * coef);
                                        }, 1000 * coef);
                                    }, temp_ * coef);
                                }, 1000 * coef);
                            }, (temp + 3000) * coef);
                        } else //la valeur existe deja dans l'arbre 
                        {
                            setTimeout(() => {
                                /**anime l'algorithme  */
                                document.getElementById("fsi").className = 'ligneExecute';
                                document.getElementById('instruction').innerHTML = '<p> la valeur a inserer existe deja </p>';
                                setTimeout(() => {
                                    document.getElementById("fsi").removeAttribute("class");
                                    document.getElementById('instruction').innerHTML = '<p> Fin de l\'insertion avec echec  </p>'; // indiquer la fin de l'operation
                                    document.getElementById("fin").className = 'ligneExecute';
                                    setTimeout(() => {
                                        majMenu(); //reactivation des menus
                                        affichageLectureEcriture(); //affichage du nombre de lecture et ecriture 
                                        document.getElementById("fin").removeAttribute("class");
                                    }, 1000 * coef);
                                }, 1000 * coef);
                            }, (temp + 1000) * coef);
                        }
                    }, 6000 * coef);




                }
            }

        });


    /*********Recherche************/
    document.getElementById('submit_sea').addEventListener('click', function() //evenement relatif a l'insertion
        {
            document.getElementById("scene").scrollLeft = 1300; //redressage du scrollbarre
            /**on recupere la variable de vitesse ****/
            var slider = document.getElementById("myRange");
            initLectureEcriture(); //Mise a zero du nombre de lecture et ecriture
            coef = ((180 - Number(slider.value)) / 100);
            let valeur = parseInt(document.querySelector('#sub_sea').value); //on recupere la valeur a rechercher 
            let vrai = verifSaisie(valeur, menu, coef).vrai; // verification de la valeur saisie 

            if (vrai) //si la valeur est saisie est valide 
            {
                menu(); //on ouvre la fenetre d'algo et la barre de commentaires 
                suprimerEvenement(); //desactiver les menus 
                document.getElementById("code").innerHTML = algo_recherche; // affiche l'algorithme de recherche dans la fenetre d'algo
                document.querySelector('.search').style.display = 'none';
                if (!isBtree) //si l'arbre est M-aire
                {
                    ui.removeAll(coef); //supprime tout 

                    tree.root.parcourt(ui, coef); //reafiche l'arbre pour supprimer la trace de l'ancienne animation
                    let node = tree.search(valeur, ui, coef).node; // la recherche de la valeur
                    let temp = ui.AnimateBtree(node, coef).temp; // animation de la recherche et l'algo de recherche 
                    setTimeout(() => {
                        majMenu(); // réactivation des menus
                        affichageLectureEcriture(); //affichage du nombre de lecture et d'ecriture
                    }, temp * coef);
                } else // un B-arbre
                {
                    ui.removeAll(coef); //supprime tout 

                    let node = btree.search(valeur, ui, coef).node; //la recherche 
                    btree.root.parcourt(ui, coef); // on réaffiche l'arbre our effacer la trace de la derniere operation effectuée
                    let temp = ui.AnimateBtree(node, coef).temp; // anime la recherche et l'algo de recherche 
                    setTimeout(() => {
                        majMenu(); // reactivation des menus
                        affichageLectureEcriture(); //affichages du nombre de lecture et d'ecriture 
                    }, temp * coef);
                }
            }

        });


    /*********Suppression**********/
    document.getElementById('submit_del').addEventListener('click', function() { //gestion de l'evenement concernant la supression
        document.getElementById("scene").scrollLeft = 1300; // regler la scrollbarre 
        initLectureEcriture(); // remise a zero du nombre de lecture et ecriture 
        /**recupere la variable de vitesse  */
        var slider = document.getElementById("myRange");
        let valeur = parseInt(document.getElementById('sub_del').value); //recuperer la valeur a supprimer 
        coef = ((180 - Number(slider.value)) / 100);
        let vrai = verifSaisie(valeur, menu, coef).vrai // verifier si la donnée saisie est valide 
        if (vrai) // si la valeur est valide  
        {
            menu(); //ouvrir la fenetre d'algo et la barre e commentaire 
            suprimerEvenement(); //on desactive les menus 
            document.querySelector('.delete').style.display = 'none';
            if (!isBtree) //si l'arbre est M-aire
            {
                ui.removeAll(coef); //supprime tout
                tree.root.parcourt(ui, coef); //on réaffiche l'arbre 

                if (tree.entete.suppression == tree.entete.insertion) //si le nombre de suppression=le nombre d'insertion
                {
                    alert('toute les valeurs de l\'arbre  sont suprimées '); //message d'erreur indiquant que la suppression est impossible 
                } else {
                    document.getElementById("code").innerHTML = algo_Supression; //afficher l'algo de suppression dans la fenetre d'algo


                    let temp = tree.delete(valeur, coef, majMenu, affichageLectureEcriture); //suppression de la valeur avec animation
                    setTimeout(() => {
                        mettreAjourAffichageEntete(); //mise a jour des information de l'entete

                    }, temp);
                }
            } else // B-arbre
            {
                document.getElementById("code").innerHTML = algo_SupressionBtree; //affichage de l'algo de suppression pour Barbre 
                setTimeout(() => {
                    /***anime l'algorithme  */
                    document.getElementById("afectation").className = 'ligneExecute';
                    setTimeout(() => {
                        document.getElementById('afectation').removeAttribute("class");
                        document.getElementById("debut").className = 'ligneExecute';
                        setTimeout(() => {
                            document.getElementById('debut').removeAttribute("class");
                            document.getElementById("recherche").className = 'ligneExecute';
                            setTimeout(() => {
                                document.getElementById('recherche').removeAttribute("class");
                            }, 500 * coef);
                        }, 1000 * coef);
                    }, 1000 * coef);
                }, 1000 * coef);

                ui.removeAll(coef); //supprime tout 
                btree.root.parcourt(ui, coef); //réefficher l'arbre pour effacer la trace de l'operation precedente 
                let valeur = parseInt(document.getElementById('sub_del').value); //recuperer la valeur a supprimer 
                setTimeout(() => {


                    let del = btree.delete(valeur, coef); //suppression de la valeur 
                    let temp = del.temp;
                    let node = del.node;
                    let trouve = del.trouv;

                    setTimeout(() => {

                        setTimeout(() => {
                            //animer l'algo de la suppression
                            document.getElementById("code").innerHTML = algo_SupressionBtree; //afficher l'algo de suppression
                            document.getElementById("si").className = 'ligneExecute';
                            setTimeout(() => {
                                document.getElementById("si").removeAttribute("class");
                            }, 500 * coef);
                        }, temp * coef);
                        if (trouve) //si la valeur existe
                        {
                            setTimeout(() => {
                                //animer l'algo de la suppression
                                document.getElementById('supr').className = 'ligneExecute';
                                let temp_ = ui.animateTreeSup(node, coef).temp; //anime la suppression
                                setTimeout(() => {
                                    //animer le reste de l'algorithme 
                                    document.getElementById('code').innerHTML = algo_SupressionBtree;
                                    document.getElementById("supr").removeAttribute("class");
                                    document.getElementById("fsi").className = 'ligneExecute';
                                    setTimeout(() => {
                                        document.getElementById("fsi").removeAttribute("class");
                                        document.getElementById("fin").className = 'ligneExecute';
                                        majMenu();
                                        affichageLectureEcriture();
                                        setTimeout(() => {
                                            document.getElementById("fin").removeAttribute("class");

                                        }, 1000 * coef);
                                    }, 1000 * coef);
                                }, (temp_ + 1000) * coef);
                            }, (temp + 1000) * coef);
                        } else //la valeur n'existe pas 
                        {
                            setTimeout(() => {
                                /**animer le reste de l'algorithme  */
                                document.getElementById('instruction').innerHTML = '<p> la valeur a suprimer est inexistante </p>'; //message indiquant que la valeur existe deja
                                document.getElementById("fsi").className = 'ligneExecute';
                                setTimeout(() => {
                                    document.getElementById("fsi").removeAttribute("class");
                                    document.getElementById("fin").className = 'ligneExecute';
                                    document.getElementById('instruction').innerHTML = '<p>Fin de la suppresion avec echec </p>'; //message indiquant la fin de la suppression
                                    setTimeout(() => {
                                        majMenu(); //reactivation des menus
                                        affichageLectureEcriture(); // affichage du nombre de lectures et d'ecritures 
                                        document.getElementById("fin").removeAttribute("class");
                                    }, 1000 * coef);
                                }, 1000 * coef);
                            }, (temp + 1000) * coef);
                        }


                    }, (temp - 3000) * coef);

                }, 4500 * coef);
            }
        }


    });


    /**********parcourt***********/
    document.getElementById('parcourt').addEventListener('click', function() // evenement relatif au parcourt 
        {
            document.getElementById("scene").scrollLeft = 1300; // regler le scrollBare
            initLectureEcriture(); // remise a zero des ecritures et lectures
            /**recuperer la variable de vitesse*****/
            var slider = document.getElementById("myRange");
            coef = ((180 - Number(slider.value)) / 100);
            menu(); // ouverture de la fenetre d'algo et la barre de commentaire 
            suprimerEvenement(); //desactiver les menus 
            if (!isBtree) //si l'arbre est M-aire 
            {
                ui.removeAll(coef); //supprime tout 

                tree.root.parcourt(ui, coef); //réaffiche l'arbre pour supprimer la trace de l'operation precedante
                let temp = ui.parcourtInordre(tree.root, 0, coef); //lancement du parcourt avec animation
                setTimeout(() => {
                    majMenu(); //reactive les menus 
                    affichageLectureEcriture(); //affiche le nombre de lecture et d'ecriture 
                }, (temp + 2000) * coef);

            } else //si l'arbre est un B-arbre 
            {
                ui.removeAll(coef); //supprime tout 

                btree.root.parcourt(ui, coef); //réaffiche l'arbre pour supprimer la trace de l'ancienne operation
                let temp = ui.parcourtInordre(btree.root, 0, coef); //lancement du parcourt avec animation
                setTimeout(() => {
                    majMenu(); // reactive les menus
                    affichageLectureEcriture(); // affiche le nombre de lecture et d'ecriture 
                }, (temp + 2000) * coef);
            }
        });


    /***********requete***********/
    document.getElementById('submit_req').addEventListener('click', function() //evenement relatif a la requete 
        {
            initLectureEcriture(); //remise a zero du nombre de lecture et d'ecriture 
            /**recuperer la variable de vitesse  */
            var slider = document.getElementById("myRange");
            coef = ((180 - Number(slider.value)) / 100);
            document.getElementById("scene").scrollLeft = 1300; //reglage du scrollBarre
            let valeurMax = parseInt(document.getElementById('sub_Max').value); //recuperer la valeur max
            let valeurMin = parseInt(document.getElementById('sub_Min').value); //recuperer la valeur min
            let vrai = verifSaisie(valeurMax, menu, coef).vrai; // verifier si la valeur est valide 
            let vrai1 = verifSaisie(valeurMin, menu, coef).vrai; // verifier si la valeur est valide 
            if (vrai && vrai1) //si  les deux valeurs sont valides 
            {
                menu(); //affiche la barre de commentaire et la fenetre d'algo
                suprimerEvenement(); //desactivation des menus 
                if (!isBtree) //si l'arbre est M-aire
                {
                    ui.removeAll(coef); //supprime tout 

                    tree.root.parcourt(ui, coef); //réaffiche l'arbre pour effacer la trace de l'ancienne operation
                    ui.Requete(valeurMax, valeurMin, tree, coef, majMenu, affichageLectureEcriture); //lancement du traitement de la requete lancé avec animation 

                } else //B-arbre 
                {
                    ui.removeAll(coef); //supprime tout

                    btree.root.parcourt(ui, coef); //réffcihe l'arbre pour effacer la trace de l'ancienne operation
                    ui.Requete(valeurMax, valeurMin, btree, coef, majMenu, affichageLectureEcriture); //lancement du traitement de la requete avec animation

                }
            }


        });


    /*********Création***********/
    document.getElementById('create-empty').addEventListener('click', function() // evenement relatif a la creation d'un fichier vide
        {
            document.getElementById("scene").scrollLeft = 1300; // réglage du scrollBarre  
            ui.removeAll(coef); // supprime tout 

            if (!isBtree) // si l'arbre est M-aire
            {
                tree.root = null; // la racine de l'arbe pointe vers nil
                tree.entete = new EnteteArb(); //initialisation de l'entete de l'arbre
            } else // B-arbre
            {
                btree.root = null; //la racine pointe vers le nil
                btree.entete = new EnteteBarbre(); //initialisation de l'entete
            }
            document.getElementById("create-action").style.display = 'none';
        });
    document.getElementById('create-random').addEventListener('click', function() //evenement relatif a la creation aléatoire
        {
            document.getElementById("scene").scrollLeft = 1300; // reglage du scrollBarre
            //  ui.removeAll(coef);//supprime tout
            initLectureEcriture(); // remise a zero du nombre de  lecture et d'ecriture 
            /**recuperer la variable de vitesse */
            let valeur = document.getElementById('sub_nb_enreg').value;
            var slider = document.getElementById("myRange");
            coef = ((180 - Number(slider.value)) / 100);

            document.getElementById("create-action").style.display = 'none';
            if (isNaN(valeur) || valeur <= 0 || (!isBtree && valeur > 15)) // si la valeur est invalide 
            {
                if (!(!isBtree && valeur > 15))
                    alert('veuillez specifier le nombre d\'enregistrement compris entre 1 et 15');
                else
                    alert('trop d\'enregistrement a inserer,choisissez une valeur comprise entre 1 et 15');
            } else {
                if (!isBtree) // si l'arbre est M-aire 
                {
                    ui.removeAll(coef); //supprime tout 

                    tree.root = null; // initialise la racine a nil
                    tree.entete = new EnteteArb(); //initialiser l'entete
                    /*insertion aleatoire de 10 valeurs*/
                    for (let i = 0; i < valeur; i++) {
                        let valeur = Math.round(Math.random() * 999);
                        tree.addValue(valeur, coef);
                    }

                    tree.root.parcourt(ui, coef); //affiche le nouvel arbre 
                    tree.entete.insertionReo = 0;
                    ecriture = tree.entete.blocs;


                } else // B-arbre 
                {

                    ui.removeAll(coef); //supprime tout

                    btree.root = null; // la recine recoit nil 
                    btree.entete = new EnteteBarbre(); //initialisation de l'entete
                    /** insertion aleatoire de 10 valeurs  */
                    for (let i = 0; i < valeur; i++) {
                        let valeur = Math.round(Math.random() * 999);
                        btree.insert(valeur, coef);
                    }
                    ecriture = btree.entete.blocs;
                    btree.root.setPosition(btree.root.x, btree.root.y, coef); //reorganisation des positions des noeuds 
                    btree.root.parcourt(ui, coef); // affiche l'arbre 
                }
                lecture = 0;
                affichageLectureEcriture(); //affiche le nombre de lecture et d'ecriture 
            }
        });


    /******Réorganisation********/
    document.getElementById('requi').addEventListener('click', function() //evenement relatif au réequilibrage 
        {
            document.getElementById("scene").scrollLeft = 1300; //reglage du scrollBarre
            /**recuperer la variable de vitesse */
            var slider = document.getElementById("myRange");
            coef = ((180 - Number(slider.value)) / 100);
            initLectureEcriture(); //remise a zero du nombre de lecture et d'ecriture 
            if (!isBtree) //si l'arbre est M-aire 
            {
                if (tree.entete.suppression != 0 || (reorganised == true && tree.entete.insertionReo >= 3)) reorganised = false; //si aucune suppression a ete efectuée et pas plus de 3 insertions l'arbre reste equilibré 

                if (reorganised) //si l'abre est équilibré 
                {
                    alert('l\'arbre est deja equilibr\é'); //message indiquant que l'arbre est deja equilibré 
                } else //l'arbre est deséquilibré 
                {
                    if (tree.entete.insertion == tree.entete.suppression) //si le nombre d'insertion et supreesion sont egaux 
                    {
                        alert('toutes les valeurs du fichiers sont suprimées '); //message indiquant que la reorganisation ne va pas s'effectuer 
                        ui.removeAll(coef); //supprime tout
                        tree.root = null; // la racine de l'arbre recoit nil
                        tree.entete = new EnteteArb(); //initilaisation de l'entete

                    } else // le nombre d'insertion et suppression ne sont pas egaux 
                    {
                        menu(); // ouverture de la fenetre d'algo et la barre de commentaire
                        suprimerEvenement(); // desactiver les menus
                        ui.removeAll(coef); // supprime tout 
                        tree.root.parcourt(ui, coef); //réaffiche l'arbre pour supprimer la trace de l'ancienne operation
                        let temp = ui.parcourtInordre(tree.root, 0, coef); //lancement du parcourt 
                        setTimeout(() => {
                            majMenu(); //reactivations des menus
                            let tab = [];
                            ui.removeAll(coef); //supprime tout 
                            let res = tree.root.parcourtValeur(coef, tab).tab; //recuperer les valeurs de l'arbre 

                            tree.root = null; //la racine de l'arbre recoit nil

                            ui.reorganisation(coef, res, tree); // lancement de l'operation de la reorganisation
                            reorganised = true; // l'arbre est reorganisé
                            tree.entete.insertionReo = 0;
                            mettreAjourAffichageEntete(); //afficher la nouvelle entete
                            affichageLectureEcriture(); //affcihe le nombre de lecture et d'ecriture 
                            tree.root.parcourt(ui, coef); //affiche l'arbre 
                        }, (temp + 2000) * coef);
                    }
                }
            } else // B-arbre
            {

                alert('cette methode n\'est pas disponible pour les B-arbre'); //message indiquant que l'operation n'est pas faisable pour les B-arbre
            }
        });

    /***l'arbre  sera par default d'ordre 4 */
    aideHide();
    deg4();
    fct();


};
///////////////////////////////////////////////////VARIABLE_GLOBAL/////////////////////////////////////////////////
var lecture = 0;
var ecriture = 0;
var reorganised = false;
/////////////////////////////////////////////////////FONCTIONS/////////////////////////////////////////////////////
/*******************CONSTRUCTEUR***************** */
function UI() { this.temp = 0; }

function Tree(degre) { // constructeur d'un arbre M-aire
    this.root = null; //la racine a nil
    this.degre = degre; //l'ordre de l'arbre 
    this.entete = new EnteteArb(); //l"entete de l'arbre 
}

function Node(valeur, posX, posY) { //constructeur d'un noeud d'arbre M-aire
    this.valeur = []; //les clés du noeud 
    this.valeur.push(valeur);
    this.fils = []; //les fils du noeud
    this.x = posX; //coordonée graphique
    this.y = posY; //coordonée graphique
    this.id = 'node' + valeur; //l'indentificateur du noeud
    this.nbValeur = 1; //le nombre de valeur dans le noeud 
    this.isLeaf = true; //si le noeud est une feuille 
    this.parent = null; //le pere du noeud
    this.supp = []; //les positions des clés supprimées
    this.nb_supp = 0; //le nombre de suppressions dans le bloc
    this.profondeur = 0; //la profondeur du noeud
    this.degre = 0; //le degre du noeud

}

function Btree(degre) { //constructeur d'un B-arbre
    /**meme attribut avec l'arbre M'aire**/
    this.root = null;
    this.degre = degre;
    this.nbnoeud = 0;
    this.entete = new EnteteBarbre();
}

function Noeud(nbnoeud, x, y) { //constructeur du noeud d'un b-arbre
    /**meme attributs que les noeuds des arbre M-aire  */
    this.valeur = [];
    this.fils = [];
    this.x = x;
    this.y = y;
    this.id = 'noeud' + nbnoeud;
    this.isLeaf = true;
    this.parent = null;
    this.supp = [];
    this.nb_supp = 0;
    this.profondeur = 0;
    this.nbValeur = 1;
    this.degre;


}

function Noe_Arb(noeud) { //constructeur de la structure  retourné par la recherche
    this.noeud = noeud; //le noeud ou chercher 
    this.val = []; // les valeurs a animer
    this.res = []; //les valeurs correspondantes
}

function Noe_Ins(noeud, valeur) { //constructeur de l'enregistrement retourné par la recherche dans l'arbre M-aire
    this.noeud = noeud; //le noeud ou inserer 
    this.valeur = valeur; //la valeur a inserer
    this.decalage = false; //indique si il y'a un decallage 
    this.nouveaux = false; //indique si il y'a un nouveau bloc a inserer
    this.position = 0; //la position ou inserer
    this.logique = false; //si la valeur est supprimée logiquement
}

function Couple(valeur, noeud) { //constructeur du couple a inserer dans un B-arbre 
    this.valeur = valeur; //valeur a inserer
    this.noeud = noeud; //noeud a inserer
}

function Node_Ins(noeud) { //constructeur de l'enregistrement retourné par l'insertion dans un Barbre 
    this.noeud = noeud; //le noeud ou inserer
    this.position = 0; //la position ou inserer
    this.decalage = false; //indique s'il y'a decallage 
    this.valeur = []; //indique les valeurs initials du noeud
    this.valeurAInsere = 0; //la valeur a inserer
    this.eclatement = false; //indique s'il y'a eclatement
    this.nouveaux = false; //indique si l'arbre est vide 
    this.fils = []; //les fils initials du noeud
    this.filsAInserer = null; //le fils a inserer
    this.nouvelleRacine = false; //indique s'il y'a nouvelle racine
    this.x = 0; //les coordonées graphiques
    this.y = 0; //les coordonées graphiques
}

function Node_Sup(noeud) { //constructeur de l'enregistrement retourné par la suppression dans un Barbre 
    this.noeud = noeud; //le noeud ou supprimer
    this.position = 0; //la position ou supprimer
    this.parent = null; //le pere du noeud ou supprimer
    this.decalage = false; //indique s'il y'a decallage
    this.valeur = []; //les anciennes valeurs du noeud 
    this.fils = []; //les anciens fils du noeud
    this.valeurASuprimer = 0; //la valeur a supprimer
    this.positionPere = 0; //la position du noeud parmi les fils du pere
    this.positionFrere = 0; //la position du noeud frere parmi les fils du pere
    this.suivantInordre = 0; //le suivant inordre de la valeur a supprimer
    this.suivant = null; //le noeud ou se trouve le suivant inordre
    this.frereFils = []; //les anciens freres du noeud frere 
    this.frereValeur = []; //les anciennes valeurs du noeud frere
    this.redistribution = false; //indique s'il y'a redistribution
    this.frereRedistribution = null; //le noeud frere avec qui se fera la redistribution
    this.redis_fusionX = 0; //les coordonnées graphiques du noeud frere
    this.redis_fusionY = 0; //les coordonnées graphiques du noeud frere
    this.fusion = false; //indique s'il y'a fusion ou non
    this.frereFusion = null; //le noeud frere avec qui se fera la fusion
    this.nouvelleRacine = false; //indique s'il y'aura une nouvelle racine
    this.noeudInterne = false; //indique si le noeud est interne
    this.x = 0; //les coordonnées graphiques du noeud
    this.y = 0; //les coordonnées graphiques du noeud

}

function EnteteBarbre() { //constructeur de l'entete du Barbre
    this.insertion = 0; //le nombre d'insertions
    this.blocs = 0; //le nombre de blocs

};

function EnteteArb() { //constructeur de l'entete de l'arbre M-aire
    this.insertion = 0; //le nombred'insertion
    this.suppression = 0; //le nombre de suppressions logiques 
    this.blocs = 0; //le nombre de blocs constituant l'arbre
    this.insertionReo = 0; //le nombre d'insertions effectué aprés une reorganisation

};
/**********************AUTRE_FONCTION*************************/
function algorithme(num, taille) { //anime la (num)éme ligne de l'algorithme 
    document.getElementById("procedure").style.backgroundColor = "coral";
    for (let index = 1; index <= taille; index++) {
        document.getElementById("algo" + index).style.backgroundColor = "coral";
    }
    if (num > 0)
        document.getElementById("algo" + num).style.backgroundColor = "#777";
    else if (num == 0) document.getElementById("procedure").style.backgroundColor = "#777";

}
/***************************************************************Partie Algorithme*********************************** */
const algo_Supression = `
 <p >Procedure Supression(valeur)  </p>
          <p id="afectation">    Soit :   noeud<&#151;racine; j<&#151;0;  trouv<&#151;faux</p>
        <p id="debut">&nbsp;&nbsp;DEBUT:</p>
          <p id="recherche" >&nbsp;&nbsp;&nbsp;&nbsp;recherche(valeur,trouv,noeud,j)</p>
          <p id="si"> &nbsp;&nbsp;&nbsp;&nbsp;Si(trouv)   </p>
          <p id="supr"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; noeud.Valeur[j].sup<&#151;vrai;&nbsp;&nbsp;     noeud.nbSupr++;</p>
          <p  id="fsi"> &nbsp;&nbsp;&nbsp;&nbsp; FSI  </p>
          <p id="fin"> &nbsp;&nbsp; FIN </p>  `
const algo_parcourt = `<p >Procedure parcourt(noeud)  </p>
           <p id="debut" > &nbsp;&nbsp; DEBUT </p> 
          <p id="pour" >&nbsp;&nbsp;&nbsp;&nbsp; Pour i allant de 1 à noeud.nbValeur+1</p>
          <p id="recurssif">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Si(noeud.fils[i]&#139;>null)&nbsp;&nbsp;parcourt(noeud.fils[i])</p>
          <p id="ecriture"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Ecrire(noeud.valeur[i])</p>
          <p id="fpour" >&nbsp;&nbsp;&nbsp;&nbsp; Fpour  </p>
          <p id="fin"> &nbsp;&nbsp; FIN </p>  `;
const algo_requete = `
          <p >Procedure requete(valeurMin,valeurMax)  </p>
          <p id="afectation">&nbsp;&nbsp;noeud&#139;&#151;racine; prec&#139;&#151;null;  j&#139;&#151;0;  trouv&#139;&#151;faux valeur&#139;&#151;0</p>
          <p id="debut" >&nbsp;&nbsp; DEBUT </p> 
          <p id="recherche" >&nbsp;&nbsp;&nbsp;&nbsp;recherche(valeurMin,noeud,j,trouv); valeur&#139;&#151;noeud.valeur[j]</p>
          <p id="si">&nbsp;&nbsp;&nbsp;&nbsp;Si(noeud.valeur[j]&#139;ValeurMin)  valeur&#139;&#151;suivantInordre(noeud.valeur[j])</p>
          <p id="tq">&nbsp;&nbsp;&nbsp;&nbsp;TQ(valeur&#139;valeurMax)</p>
          <p id="ecrire" >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Ecrire(valeur); &nbsp;&nbsp;&nbsp;  valeur&#139;&#151;suivantInordre(valeur)   </p>
          <p id="ftq"> &nbsp;&nbsp;&nbsp;&nbsp; FTQ </p>  
          <p id="fin"> &nbsp;&nbsp; Fin </p>`;
const algo_insertion = `
          <p >Procedure Insertion(Valeur)  </p>
          <p id="afectation">&nbsp;&nbsp;noeud&#139;&#151;racine; prec&#139;&#151;null;  j&#139;&#151;0;  trouv&#139;&#151;faux valeur&#139;&#151;0</p>
          <p id="debut" >&nbsp;&nbsp; DEBUT </p> 
          <p id="recherche" >&nbsp;&nbsp;&nbsp;&nbsp;recherche(Valeur,noeud,j,trouv)</p>
          <p id="si">&nbsp;&nbsp;&nbsp;&nbsp;Si(non trouv)  </p>
          <p id="insertionInterne">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp&nbsp;&nbsp;InsertionInterne(noeud,j,valeur)</p>
          <p id="fsi" >&nbsp;&nbsp;&nbsp;&nbsp;FSi</p> 
          <p id="fin"> &nbsp;&nbsp; Fin </p>`;
const algo_insertionInterne = `
          <p >Procedure InsertionInterne(Valeur,noeud,j)  </p>
          <p id="si">&nbsp;&nbsp;Si (noeud.nbValeur<degre)</p>
          <p id="pour" >&nbsp;&nbsp;&nbsp;&nbsp;Pour i allant de noeud.nbvaleur à j+1</p>
          <p id="decalage">noeud.valeur[i]&#139;&#151;noeud.valeur[i+1]; noeud.fils[i+1]&#139;&#151;noeud.fils[i];</p>
          <p id="fpour">&nbsp;&nbsp;&nbsp;&nbsp;Fpour</p>
          <p id="afectation" >&nbsp;&nbsp;&nbsp;&nbsp;noeud.valeur[j]&#139;&#151;valeur;    noeud.nbValeur++ </p> 
          <p id="sinon"> &nbsp;&nbsp; Sinon fils&#139;&#151;AllocBloc(F); fils.valeur[1]&#139;&#151;valeur;//Maj du chainage    </p>
          <p id="fsi"> &nbsp;&nbsp;Fsi </p>`;
const algo_recherche = `<p >Procedure Recherche(valeur)  </p> 


          <p id="afectation">          noeud&#139;&#151;racine; prec&#139;&#151;null;  j&#139;&#151;0;  trouv=faux</p>
        <p id="debut">&nbsp;&nbsp;DEBUT:</p>
          <p id="tq">&nbsp;&nbsp;&nbsp;&nbsp;TQ (Non trouv et neoud<>null )</p>
          <p id="rechercheInterne"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; rechercheInterne(valeur,trouv,j)   </p>
          <p id="passageFils"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    Si(Non trouv ) prec &#139;&#151; neoud ; noeud&#139;&#151;noeud.Fils[j] </p>
          <p id="ftq"> &nbsp;&nbsp;&nbsp;&nbsp;  FTQ  </p>
          <p id="fin" >   &nbsp;&nbsp;    FIN </p>`;
const algo_SupressionBtree = `
<p >Procedure Supression(valeur)  </p>
         <p id="afectation">    Soit :   noeud<&#151;racine; j<&#151;0;  trouv<&#151;faux</p>
       <p id="debut">&nbsp;&nbsp;DEBUT:</p>
         <p id="recherche" >&nbsp;&nbsp;&nbsp;&nbsp;recherche(valeur,trouv,noeud,j)</p>
         <p id="si"> &nbsp;&nbsp;&nbsp;&nbsp;Si(trouv)   </p>
         <p id="supr"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Supression(noeud,j)</p>
         <p  id="fsi"> &nbsp;&nbsp;&nbsp;&nbsp; FSI  </p>
         <p id="fin"> &nbsp;&nbsp; FIN </p>  `;
const algo_delete = `
<p id="procedure">Procedure Supression(noeud,j) </p>
<p id="algo1">&nbsp;&nbsp;Si (Non noeud.estUneFeuille) noeud.valeur[j]=suivantInordre(noeud,valeur)  </p>
<p id="algo2" >&nbsp;&nbsp;&nbsp;&nbsp; supression : SupressionInterne(noeud,valeur)// avec decalage </p> 
<p id="algo3" >Si(noeud.parent.fils&#91;pos+1&#93.nbValeur&#62;degre&#47;2 Ou noeud.parent.fils&#91;pos-1&#93.nbValeur&#62;degre&#47;2 )</p>
<p id="algo4">&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; redistribution(); Aller a FSi </p>
<p id="algo5">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Sinon Fusion(noeud,j,valeur) </p>
<p id="algo6" >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  noeud=noeud.parent valeur=noeud.parent.valeur[pos] Aller a supression:  </p> 
<p id="algo7"> &nbsp;&nbsp;&nbsp;&nbsp; FSi </p>`;
// const algo_insert=`
// <p id="procedure">Procedure InsertionInterne(noeud,j,valeur)  Soit val,fils:tableau</p>
// <p id="algo1">InsertionBloc(valeur,noeud,j,filsAinserer) //avec decalage   </p>
// <p id="algo2">Si(noeud.nbValeur=noeud.degre)  </p>
// <p id="algo3" >&nbsp;&nbsp; Q=AllocBloc() val={noeud.valeur}  fils={noeud.fils}</p> 
// <p id="algo4"> noeud.valeur={val[1],...,val[taille&#47;2]}  noeud.fils={fils[1],...,fils[taille&#47;2]} </p>
// <p id="algo5"> Q.valeur={val[taille&#47;2+2],..,val[taille]}   Q.fils={fils[taille&#47;2,..,fils[taille]]} </p>
// <p id="algo6" >Maj(valeur,filsAinsere,noeud) Si(noeud==null) noeud=allocBloc; Aller a insertion; </p> 
// <p id="algo7"> &nbsp;&nbsp;&nbsp;&nbsp; FSI </p>

// `;
const algo_insert = `<p id="procedure">Procedure InsertionInterne(noeud,j,valeur)  Soit val,fils:tableau</p>
<p id="algo1">InsertionBloc(valeur,noeud,j,filsAinserer) //avec decalage   </p>
<p id="algo2">Si(noeud.nbValeur=noeud.degre)  </p>
<p id="algo3" >&nbsp;&nbsp; Q=AllocBloc() </p> 
<p id="algo4"> Eclatement(noeud,Q) </p>
<p id="algo5">Maj(valeur,filsAinsere,noeud) </p>
<p id="algo6" >Si(noeud==null) noeud=allocBloc; Aller a insertion; </p> 
<p id="algo7"> &nbsp;&nbsp;&nbsp;&nbsp; FSI </p>`;
//---------------------------------------------------------------Fin algorithme-------------------------------------
UI.prototype.drawBtreeLigne = function(noeud, coef) { //fonction qui dessine les lignes entre noeud  et ses fils dans un Barbre
    for (let i = 0; i < noeud.nbValeur + 1; i++) {

        if (noeud.fils[i] != undefined) {
            var posX = noeud.x + 33.33 * (i);
            var posY = noeud.y + 33.33;
            var desX = noeud.fils[i].x + 33.33 * (noeud.fils[i].nbValeur) / 2;
            var desY = noeud.fils[i].y;

            if (document.getElementById('ligne' + noeud.id + '_' + noeud.fils[i].id) == null) {
                document.querySelector("#ligne").innerHTML += `<path  id="ligne` + noeud.id + `_` + noeud.fils[i].id + `" d="M` + posX + `,` + posY + `L` + desX + `,` + desY + `" stroke="#333" stroke-width="3"></path>`;;
            }
        }
    }
};
UI.prototype.drawLine = function(noeud, coef) { //fonction qui dessine less lignes entre noeud et ses fils dans un arbre M-aire
    let c = document.querySelector("#ligne");
    for (let i = 0; i < noeud.nbValeur + 1; i++) {
        if (noeud.fils[i] != null) {
            var posX = noeud.x + 33.33 * (i);
            var posY = noeud.y + 40;
            var desX = noeud.fils[i].x + ((noeud.fils[i].degre - 1) * 33.33 / 2);
            var desY = noeud.fils[i].y;
            let contenu = c.innerHTML;
            let iden = 'ligne' + noeud.id + '_' + noeud.fils[i].id;
            if (document.getElementById(iden) == null) {


                c.innerHTML += `<path  id="ligne` + noeud.id + `_` + noeud.fils[i].id + `" d="M` + posX + `,` + posY + `L` + desX + `,` + desY + `" stroke="#333" stroke-width="3"></path>`;
            }
        }

    }
};
Tree.prototype.delete = function(valeur, coef, majMenu, affichageLectureEcriture) { //la fonction supprime  valeur de l'arbre 
    const ui = new UI();
    document.getElementById("code").innerHTML = algo_Supression; //l'algorithme de suppression
    setTimeout(() => {
        document.getElementById("afectation").className = 'ligneExecute';
        setTimeout(() => {
            document.getElementById('afectation').removeAttribute("class");
            document.getElementById("debut").className = 'ligneExecute';
            setTimeout(() => {
                document.getElementById('debut').removeAttribute("class");
                document.getElementById("recherche").className = 'ligneExecute';
                setTimeout(() => {
                    document.getElementById('recherche').removeAttribute("class");
                }, 500 * coef);
            }, 1000 * coef);
        }, 1000 * coef);
    }, 1000 * coef);
    var recherche = this.search(valeur, ui, coef); //recherche
    var trouve = recherche.trouv; //indique si la valeur existe 
    let position = recherche.position; //indique la position ou se trouve la valeur dans le noeud
    let noeud = recherche.noeud; //indique le noeud ou se trouve la valeur 
    let node = recherche.node; // le tableau contenant les noeuds et valeurs parcourus par la recherche afin de les animer 
    if (trouve) //la valeur existe
    {
        noeud.supp.push(position); //on insere la position de la clé dans le tableau des indices supprimé du noeud
        this.entete.suppression++; //on incremente le nombre de suprresion dans l'entete
        ecriture++; //on incremente le nombre d'ecriture
        noeud.nb_supp++; //on increment le nombre de suppression dans le noeud
    }




    setTimeout(() => {


        let anim = ui.AnimateBtree(node, coef); //animer la recherche

        let temp = anim.temp;
        setTimeout(() => {
            /**animer l'algorithme  */
            document.getElementById("code").innerHTML = algo_Supression;
            document.getElementById("si").className = 'ligneExecute';
            setTimeout(() => {
                document.getElementById("si").removeAttribute("class");
            }, 1000 * coef);
        }, temp * coef);
        if (trouve) //la valeur existe 
        {
            setTimeout(() => {
                document.getElementById('supr').className = 'ligneExecute';
                document.getElementById('instruction').innerHTML = '<p>Valeur a suprimer trouvée  </p>';
                document.getElementById('verite_' + valeur).setAttribute("fill", "red");
                setTimeout(() => {
                    document.getElementById('instruction').innerHTML = '<p>supression logique </p>';
                    document.getElementById("supr").removeAttribute("class");
                    document.getElementById("fsi").className = 'ligneExecute';
                    setTimeout(() => {
                        document.getElementById("fsi").removeAttribute("class");
                        document.getElementById("fin").className = 'ligneExecute';
                        setTimeout(() => {
                            majMenu(); //reactivation des menus
                            affichageLectureEcriture(); //affichage du nombre de lecture
                            document.getElementById("fin").removeAttribute("class");
                            document.getElementById('instruction').innerHTML = '<p>Fin de la suppresion avec succés </p>';
                            if (this.entete.suppression / this.entete.insertion > 0.35) {
                                setTimeout(() => {
                                    alert('trop de valeurs suprimées,l\'arbre doit etre réequilibré ');
                                }, 1500);
                            }
                        }, 1000 * coef);
                    }, 1000 * coef);
                }, 1000 * coef);
            }, (temp + 1000) * coef);
        } else //la valeur n'existe pas
        {
            setTimeout(() => {
                document.getElementById('instruction').innerHTML = '<p> la valeur a suprimer est inexistante  </p>';
                document.getElementById("fsi").className = 'ligneExecute';
                setTimeout(() => {
                    document.getElementById("fsi").removeAttribute("class");
                    document.getElementById("fin").className = 'ligneExecute';
                    setTimeout(() => {
                        document.getElementById('instruction').innerHTML = '<p> Fin de la supression avec echec  </p>';
                        document.getElementById("fin").removeAttribute("class");
                        majMenu(); //reactive les menus
                        affichageLectureEcriture(); //affiches le nombre de lecture et d'ecriture
                    }, 1000 * coef);
                }, 1000 * coef);
            }, (temp + 1000) * coef);
        }

        return temp + 500;

    }, 4500 * coef);

};
Node.prototype.addValue = function(pos, valeur, ui, temp, degre, node, coef) { //la fonction insere la valeur dans le noeud
    node.noeud = this;
    if (this.nbValeur < degre - 1) //si le noeud n'est pas rempli
    {
        for (let i = this.nbValeur; i > pos; i--) { //decallage
            this.valeur[i] = this.valeur[i - 1];
            node.decalage = true;


        }
        this.valeur[pos] = valeur; //insertion de la valeur dans la position pos
        this.nbValeur++;
        ecriture++;
        node.position = pos;
        // ui.drawArb(this);
    } else //le noeud est rempli
    {
        this.isLeaf = false;

        let fils = new Node(valeur); //on alloue un nouveau bloc et on insere la valeur dedans 
        //on met a jour le chainage 
        fils.profondeur = this.profondeur + 1;
        fils.degre = this.degre;
        this.fils[pos] = fils;
        /**reglage des coordonées du nouveau bloc  */
        let coor = pos * 150 - 225;
        switch (this.degre) {
            case 2:
                coor = (pos * 275 - 140) * (1 / fils.profondeur);
                break;
            case 3:
                coor = (pos * 350 - 350) * (1 / fils.profondeur);
                break;
            case 4:
                coor = (pos * 300 - 400) * (1 / fils.profondeur);
                break;

            case 5:

                coor = (pos * 300 - 500) * (1 / fils.profondeur);
                break;
            case 6:
                coor = (pos * 200 - 500) * (1 / fils.profondeur);
                break;
            default:
                break;
        }
        fils.x = this.x + coor;
        fils.y = this.y + 80;
        node.noeud = fils;
        ecriture++;
        node.nouveaux = true;
        node.position = pos;
        fils.parent = this;
        //ui.drawArb(fils);
        //ui.drawLine(this);

    }

    return { node: node };
};
Node.prototype.parcourt = function(ui, coef) { //la focnction permet de parcourir l'arbre M-aire et afficher neoud par noeud

    for (let i = 0; i < this.nbValeur + 1; i++) {

        if (this.fils[i] != undefined) this.fils[i].parcourt(ui, coef); //appel recurssif parcourt pour le sous arbre jusqu'a nil
        ui.drawArb(this, coef);

        ui.drawLine(this, coef);
    }

};
Noeud.prototype.parcourt = function(ui, coef) { //la focnction permet de parcourir l'arbre M-aire et afficher neoud par noeud
    if (this.fils[0] != undefined) {
        for (let i = 0; i < this.nbValeur + 1; i++) {

            this.fils[i].parcourt(ui, coef);
            ui.drawBtree(this, coef);

            ui.drawBtreeLigne(this, coef);
        }
    } else {
        ui.drawBtree(this, coef);
        ui.drawBtreeLigne(this, coef);
    }

};
UI.prototype.removeAll = function(coef) { //supprime tout 

    let c = document.getElementById('noeuds');
    c.innerHTML = '';
    let v = document.getElementById('texte-forme');
    v.innerHTML = '';
    document.getElementById('ligne').innerHTML = '';

};
Tree.prototype.addValue = function(valeur, coef) { //cette fonction insere la valeur dans l'arbre M-aire 
    const ui = new UI();
    let temp = 0;
    let node = new Noe_Ins(this.root, valeur); //enregistrement necessaire pour l'animation
    if (this.root == null) //si le fichier est  vide
    {
        var centerX = 1800;
        var centerY = 50;

        node.position = 0;
        node.nouveaux = true;


        this.root = new Node(valeur, centerX, centerY); //allocation d'un nouveau bloc qui va devenir la racine
        this.root.degre = this.degre;
        this.entete.insertion++;
        this.entete.insertionReo++;
        this.entete.blocs++;
        ecriture++; //on incremente le nombre d'ecriture 
        node.noeud = this.root
    } else //le fichier n'est pas vide
    {
        var recherche = this.search(valeur, ui, coef); //recherche la valeur dans l'arbre 
        /**informations retournées par la recherche */
        var trouve = recherche.trouv;
        var position = recherche.position;
        var noeud = recherche.noeud;
        temp = recherche.temp;
        if (trouve == false) //si la valeur n'existe pas 
        {
            if (noeud.valeur[position] == valeur) //si la valeur est supprimée logiquement 
            {
                noeud.supp.splice(noeud.supp.indexOf(position), 1);
                noeud.nb_supp--; //on supprime l'indice de la valeur du tableau contenant les indices des clés suprimées 
                /**information necessaire pour l'animation */
                node.logique = true;
                node.position = position;
                node.noeud = noeud;
                node.valeur = valeur;
            } else // la valeur n'existe pas et n'est pas supprimée logiquement 
            {
                let insertion = noeud.addValue(position, valeur, ui, temp, this.degre, node, coef); //on l'insere 
                /**information necessaires pour l'animation */
                node = insertion.node;
                if (node.nouveaux) this.entete.blocs++;
                this.entete.insertion++;
                this.entete.insertionReo++;
            }

        }


    }
    return { temp: temp, node: node };
};
Btree.prototype.insert = function(valeur, coef) { //cette fonction insere valeur dans le Barbre
    let tab_noeud = []; // tableau contenant les noeud parcouru durant l'insertion pour les animer


    const ui = new UI();
    let temp = 0;
    if (this.root == null) //si le fichier est vide
    {
        var centerX = 1800;
        var centerY = 50;

        this.root = new Noeud(++this.nbnoeud, centerX, centerY); //allocation d'un nouveau bloc qui devient la racine de l'arbre
        this.root.valeur.push(valeur);
        this.entete.insertion++;
        this.entete.blocs++;

        ecriture++;
        this.root.degre = this.degre;
        var insert = new Node_Ins(this.root); //enregistrement necessaire pour l'animation de l'insertion
        tab_noeud.push(insert);
        insert.nouveaux = true;
        insert.noeud = this.root;
        insert.x = this.root.x;
        insert.y = this.root.y;

    } else // l'arbre n'est pas vide
    {

        var recherche = this.search(valeur, ui, coef); //recherche
        /**informations retournés par la recherche */
        var position = recherche.position;

        var trouv = recherche.trouv;
        if (!trouv) //si la valeur n'existe pas
        {
            let noeud = recherche.noeud;
            let valeurAInserer = valeur;
            let nodeInser = new Noeud(++this.nbnoeud); //enregistrement du noeud a inserer
            this.entete.insertion++;

            nodeInser.degre = this.degre;
            nodeInser = null; //est le noeud a inserer comme fils droit de la valeur a inserer
            var y = 0;
            while (noeud != null && noeud.nbValeur == this.degre - 1) //le noeud est rempli
            {
                this.entete.blocs++;
                let insert = new Node_Ins(noeud); //enregistrement du noeud a animer 
                /**recolte d'informations pour l'enregistrement insert */
                tab_noeud.push(insert);
                insert.x = noeud.x;
                insert.y = noeud.y;
                if (y == 0) insert.filsAInserer = null;
                insert.valeurAInsere = valeur;
                for (let i = 0; i < noeud.nbValeur; i++) {
                    insert.valeur[i] = noeud.valeur[i];
                    insert.fils[i] = noeud.fils[i];
                }
                insert.fils[noeud.nbValeur] = noeud.fils[noeud.nbValeur];
                y++;
                ecriture++;
                ecriture++;
                insert.eclatement = true;
                insert.filsAInserer = nodeInser;
                let n_v = new Noe_Arb(noeud);
                let rech = noeud.rechercheInterne(valeurAInserer, n_v, coef);
                /*une recherche interne a l'interieur du noeud 
                                                afin de trouver l'emplacement de la valeur dans le noeud */
                /**information retourné par la recherche */
                let position = rech.position;
                insert.position = position;
                insert.valeurAInsere = valeurAInserer;
                let node = new Noeud(++this.nbnoeud); //allocation d'un nouveau bloc qui va partager les valeur avec le noeud 
                node.degre = this.degre;
                let couple = new Couple(valeurAInserer, nodeInser)
                let val = new Array(this.degre);

                let fils = new Array(this.degre + 1);
                val[this.degre - 1] = couple.valeur;
                for (let i = 0; i < this.degre - 1; i++) {
                    val[i] = (noeud.valeur[i]); //on recupere les valeurs du noeud dans val ou meme la valeur a inserer est a l'interieur

                }
                val.sort(function(a, b) { //tri de val 
                    return a - b;
                });

                var po = val.indexOf(couple.valeur);


                if (!noeud.isLeaf) {
                    fils[0] = noeud.fils[0];
                    fils[po + 1] = nodeInser;
                    let j = 1;
                    for (let i = 1; i < fils.length; i++) {
                        if (i != po + 1) {
                            fils[i] = noeud.fils[j];
                            j++;
                        }

                    }
                    for (let i = 0; i < fils.length; i++) { //partage de fils entre noeud et son nouveau frere
                        if (i <= Math.trunc(this.degre / 2)) {
                            noeud.fils[i] = fils[i];
                            fils[i].parent = noeud;

                        } else if (i != Math.trunc(this.degre / 2)) {
                            node.fils.push(fils[i]);
                            noeud.fils[i] = undefined;
                            node.isLeaf = false;
                            fils[i].parent = node;
                        }


                    }

                }
                for (let i = 0; i < val.length; i++) {

                    if (i < Math.trunc(this.degre / 2)) { //la premiere moitié des valeurs va etre inserer dans noeud

                        noeud.valeur[i] = val[i];

                        noeud.nbValeur = Math.trunc(this.degre / 2);
                    } else
                    if (i != Math.trunc(this.degre / 2)) { //la deuxieme moitié des valeurs va etre inserer dans le nouveau frere du noeud
                        noeud.valeur[i] = undefined;
                        node.valeur.push(val[i]);
                        node.nbValeur = Math.trunc(this.degre / 2);
                    } else noeud.valeur[i] = undefined;


                }
                valeurAInserer = val[Math.trunc(this.degre / 2)]; //la valeur du milieu devient la nouvelle valeur a inserer
                nodeInser = node; //le nouveau noeud frere devient le nouveau noeud a inserer


                if (noeud == this.root) //si le noeud est a nil 
                { //nouvelle racine

                    let racine = new Noeud(++this.nbnoeud); //allocation d'une nouvelle racine
                    racine.degre = this.degre;
                    this.entete.blocs++;
                    racine.isLeaf = false;
                    racine.valeur[0] = valeurAInserer;
                    insert.nouvelleRacine = true;
                    ecriture++;
                    racine.fils.push(noeud);
                    racine.fils.push(node);
                    noeud.parent = racine;
                    node.parent = racine;
                    this.root = racine;
                    racine.setPosition(noeud.x, noeud.y, coef);
                    noeud = racine;
                } else {

                    noeud = noeud.parent; //le noeud ou inserer devient le pere du noeud 

                }
                if (noeud.nbValeur != this.degre - 1) var node_ = node;

            }
            let n_v = new Noe_Arb(noeud);
            let rech = noeud.rechercheInterne(valeurAInserer, n_v, coef);
            let pos = rech.position;
            // node.position=pos;

            let trouve = rech.trouv;
            if (!trouve) { //inserer la valeur dans le noeud 
                let insert = new Node_Ins(noeud);
                insert.noeud = noeud;
                insert.x = noeud.x;
                insert.y = noeud.y;
                ecriture++; //incrementation du nombre d'ecriture 
                if (y != 0) insert.filsAInserer = node_; //information pour l'animation
                insert.valeurAInsere = valeurAInserer;
                for (let i = 0; i < noeud.nbValeur; i++) {
                    insert.valeur[i] = noeud.valeur[i];
                    insert.fils[i] = noeud.fils[i];



                }
                tab_noeud.push(insert); //inserer l'enregistrement dans le tableau contenant les noeuds parcourus pour l'animation
                insert.fils[noeud.nbValeur] = noeud.fils[noeud.nbValeur];
                insert.position = pos;
                if (noeud.valeur[pos] == undefined) {

                    noeud.valeur[pos] = valeurAInserer; //inserer la valeur dans la position retourné par la recherche

                    noeud.nbValeur++;
                    if (!noeud.isLeaf) {
                        noeud.fils[pos + 1] = nodeInser;
                        nodeInser.parent = noeud;
                    }

                } else {
                    insert.decalage = true;
                    insert.position = pos;
                    // tab_noeud.push(insert);


                    for (let i = noeud.nbValeur; i > pos; i--) { //decalage
                        noeud.valeur[i] = noeud.valeur[i - 1];
                        if (!noeud.isLeaf) {
                            noeud.fils[i + 1] = noeud.fils[i];

                        }
                    }
                    noeud.valeur[pos] = valeurAInserer;
                    if (!noeud.isLeaf) {
                        noeud.fils[pos + 1] = nodeInser;
                        nodeInser.parent = noeud;
                    }
                    noeud.nbValeur++;
                }
            }
            // noeud.setPosition(noeud.x,noeud.y);
        }


    }
    return { node: tab_noeud }
};
Noeud.prototype.rechercheInterne = function(valeur, n_v, coef) { //cette fonction recherche une valeur dans le noeud d'un B-arbre 
    /**recherche dichotomique */
    let j = 0;
    let bi = 0;
    let bs = this.nbValeur - 1;
    let trouv = false;
    while (!trouv && bi <= bs) {
        j = Math.trunc((bi + bs) / 2);
        if (valeur == this.valeur[j]) {
            trouv = true;
            n_v.val.push(this.valeur[j]); //enregistrement contenant les information a propos du noeud de la  recherche
            n_v.res.push(this.valeur[j]);
        } else if (valeur < this.valeur[j]) {
            bs = j - 1;
            n_v.val.push(this.valeur[j]);
        } else {
            bi = j + 1;
            n_v.val.push(this.valeur[j]);
        }
    }
    if (bi > bs) j = bi;

    return { position: j, trouv: trouv };


};
Node.prototype.rechercheInterne = function(valeur, n_v, coef) { //cette fonction recherche une valeur dans le noeud d'un arbre M-aire
    /**recherhce dichotomique */
    let j = 0;
    let bi = 0;
    let passage = false;
    let bs = this.nbValeur - 1;
    let trouv = false;
    while (!trouv && bi <= bs) {
        j = Math.trunc((bi + bs) / 2);
        if (valeur == this.valeur[j]) {
            if (this.supp.indexOf(j) == -1) {

                n_v.val.push(this.valeur[j]); /**enregistrement contenant les informations de la recherche pour l'animer */
                n_v.res.push(this.valeur[j]);
            } else //valeur supprimer logiquement
            {
                passage = true;
                n_v.val.push(this.valeur[j]);
            }
            trouv = true;
        } else if (valeur < this.valeur[j]) {
            bs = j - 1;
            n_v.val.push(this.valeur[j]);
        } else {
            bi = j + 1;
            n_v.val.push(this.valeur[j]);
        }
    }
    if (bi > bs) j = bi;
    if (passage) trouv = false;
    return { position: j, trouv: trouv };
};
Tree.prototype.search = function(valeur, ui, coef) { //cette fonction recherche une valeur dans l'arbre 
    let trouv = false;
    let noeud = this.root; //lire la racine
    lecture++; //incremente le nombre de lecture 
    let prec = null;
    let position = 0;
    let node = [];
    while (!trouv && noeud != null) //la valeur n'est pas trouvée et le noeud n'est pas a nil 
    {
        let n_v = new Noe_Arb(noeud);
        node.push(n_v);
        let recherche = noeud.rechercheInterne(valeur, n_v, coef); //recherche interne dans le bloc 


        trouv = recherche.trouv;
        position = recherche.position;

        if (!trouv) //  valeur pas trouvée
        {

            prec = noeud;
            noeud = noeud.fils[position];
            if (noeud != null) lecture++;
        }
        if (trouv) //valeur trouvée
        {
            prec = noeud;
        }
    }
    return { trouv: trouv, position: position, noeud: prec, node: node }
};
Btree.prototype.search = function(valeur, ui, coef) { //cette fonction recherche une valeur dans le B-arbre
    let trouv = false;
    let noeud = this.root; //lire la racine
    let prec = null;
    let position = 0;
    let node = [];
    lecture++;
    while (!trouv && noeud != null) //la valeur n'est pas trouvée et le noeud n'est pas a nil 
    {
        let n_v = new Noe_Arb(noeud);
        node.push(n_v);
        let recherche = noeud.rechercheInterne(valeur, n_v, coef); //recherche dichotomique a l'interieur du bloc

        trouv = recherche.trouv;
        position = recherche.position;
        if (!trouv) //valeur non trouvée 
        {

            prec = noeud;
            noeud = noeud.fils[position]; //passer au noeud suivant 
            if (noeud != null) lecture++; //incremente nombre de lecture 

        }
        if (trouv) //valeur trouvée 
        {
            prec = noeud;
        }
    }
    return { trouv: trouv, position: position, noeud: prec, node: node }
};
UI.prototype.drawBtree = function(noeud, coef) { //cette fonction affiche un noeud d'un Babre
    let scene = document.querySelector("viz");
    let noeuds = document.querySelector("#noeuds");
    let texte = document.querySelector('#texte-forme');
    let contenu = noeuds.innerHTML;
    if (document.getElementById(noeud.id) == null) {
        noeuds.innerHTML = contenu + ' <g id="' + noeud.id + '" stroke="#333" stroke-width="3" fill="#eee">';
        texte.innerHTML += '<g id="valeur_' + noeud.id + '"  fill="#333"   font-family="' + "'PT sans'" + ',  sans-serif" font-weight=" bold" font-size="16" text-anchor="middle" >';
    }
    document.getElementById(noeud.id).innerHTML = "";
    document.getElementById('valeur_' + noeud.id).innerHTML = "";
    for (let i = 0; i < noeud.nbValeur; i++) {
        let posX = noeud.x + i * 33.33;
        let textPos = noeud.x + 16.665 + 33.33 * i;
        let texthei = noeud.y + 20;

        document.getElementById(noeud.id).innerHTML += '<rect id="noeud_' + noeud.valeur[i] + '" class="noeud_' + noeud.id + '_' + i + '" x="' + posX + '"y="' + noeud.y + '"  width="33.33" height="33.33"      ></rect> '
        document.getElementById('valeur_' + noeud.id).innerHTML += '<text id="valeur_' + noeud.valeur[i] + '" class="valeur_' + noeud.id + '_' + i + '" x="' + textPos + '" y="' + texthei + '" >' + noeud.valeur[i] + '</text>';
    }
};
UI.prototype.drawArb = function(noeud, coef) { //cette fonction affiche un noeud d'un arbre M-aire 

    let scene = document.querySelector("viz");
    let noeuds = document.querySelector("#noeuds");
    let texte = document.querySelector('#texte-forme');
    let contenu = noeuds.innerHTML;
    if (document.getElementById(noeud.id) == null) {
        noeuds.innerHTML = contenu + ' <g id="' + noeud.id + '" stroke="#333" stroke-width="3" fill="#eee">';
        texte.innerHTML += '<g id="valeur_' + noeud.id + '"  fill="#333"   font-family="' + "'PT sans'" + ',  sans-serif" font-weight=" bold" font-size="16" text-anchor="middle" >';
    }
    document.getElementById(noeud.id).innerHTML = "";
    document.getElementById('valeur_' + noeud.id).innerHTML = "";

    for (let i = 0; i < noeud.nbValeur; i++) {
        let posX = noeud.x + i * 33.33;
        var poY = noeud.y + 25;
        let textPos = noeud.x + 16.665 + 33.33 * i;
        let texthei = noeud.y + 20;
        document.getElementById(noeud.id).innerHTML += '<rect id="noeud_' + noeud.valeur[i] + '" class="noeud_' + noeud.id + '_' + i + '" x="' + posX + '"y="' + noeud.y + '"  width="33.33" height="25"      ></rect> ';
        if (noeud.supp.indexOf(i) == -1) document.getElementById(noeud.id).innerHTML += '<rect id="verite_' + noeud.valeur[i] + '" class="verite_' + noeud.id + '_' + i + '" x="' + posX + '"y="' + poY + '"  width="33.33" height="15" fill="rgb(0, 152, 116)"     ></rect>';
        else {
            document.getElementById(noeud.id).innerHTML += '<rect id="verite_' + noeud.valeur[i] + '" class="verite_' + noeud.id + '_' + i + '" x="' + posX + '"y="' + poY + '"  width="33.33" height="15" fill="rgb(220, 48, 80)"     ></rect>';
        }
        document.getElementById('valeur_' + noeud.id).innerHTML += '<text id="valeur_' + noeud.valeur[i] + '"class="valeur_' + noeud.id + '_' + i + '" x="' + textPos + '" y="' + texthei + '" >' + noeud.valeur[i] + '</text>';
    }
    for (let i = noeud.nbValeur; i < noeud.degre - 1; i++) {
        let posX = noeud.x + i * 33.33;
        var poY = noeud.y + 25;
        let textPos = noeud.x + 16.665 + 33.33 * i;
        let texthei = noeud.y + 20;
        document.getElementById(noeud.id).innerHTML += '<rect id="noeud_' + 0 + '" class="noeud_' + noeud.id + '_' + i + '" x="' + posX + '"y="' + noeud.y + '"  width="33.33" height="25"      ></rect> ';
        document.getElementById(noeud.id).innerHTML += '<rect id="verite_' + 0 + '" class="verite_' + noeud.id + '_' + i + '" x="' + posX + '"y="' + poY + '"  width="33.33" height="15" fill="rgb(0, 152, 116)"     ></rect>';
        document.getElementById('valeur_' + noeud.id).innerHTML += '<text id="valeur_' + 0 + '" class="valeur_' + noeud.id + '_' + i + '" x="' + textPos + '" y="' + texthei + '" >' + 0 + '</text>';

    }

    $('#' + noeud.id).fadeIn();
    $('#valeur_' + noeud.id).fadeIn();
};
Noeud.prototype.setPosition = function(x, y, coef) { //cette fonction repositione toute les coordonnées des noeuds du B-arbre
    this.x = x;
    this.y = y;
    if (this.fils[0] != undefined) {
        // let dis=this.x-50*this.nbValeur;
        //  let dis=0;
        //  let dist=0;
        let degre = this.degre;


        let dis = this.x - 50 * this.nbValeur;
        let dist = this.x - 100 * this.nbValeur - 100 * this.fils[0].nbValeur;
        for (let i = 0; i < this.nbValeur + 1; i++) {
            //reorganisation des positions des fils du noeud
            if (this.fils[i].fils[0] != undefined) {
                let coor = 0;
                switch (degre) {
                    case 3:
                        switch (this.nbValeur) {
                            case 1:
                                coor = (i * 550 - 275) / (this.profondeur + 1);
                                break;
                            case 2:
                                coor = (i * 500 - 500) / (this.profondeur + 1);
                                break;
                            default:
                                break;
                        }
                        break;
                    case 5:
                        switch (this.nbValeur) {
                            case 1:
                                coor = i * 500 - 250;
                                break;
                            case 2:
                                coor = i * 600 - 600;
                            case 3:
                                coor = i * 500 - 600;
                            case 4:
                                coor = i * 600 - 850
                                break;

                            default:
                                break;
                        }

                        break;

                    case 7:
                        switch (this.nbValeur) {
                            case 1:
                                coor = i * 750 - 375;
                                break;
                            case 2:
                                coor = i * 800 - 800;
                            case 3:
                                coor = i * 600 - 800;
                            case 4:
                                coor = i * 200 - 1000;
                                break;
                            case 5:
                                coor = i * 200 - 1200;
                                break;
                            case 6:
                                coor = i * 200 - 1400;
                                break;
                            default:
                                break;
                        }
                        break;
                    default:
                        break;
                }
                this.fils[i].x = this.x + coor
                dist += this.fils[i].nbValeur * 100 + this.degre * 33.33;
            } else {

                this.fils[i].x = dis;

                dis += (this.fils[i].nbValeur + 1) * 33.33 + 10;
            }
            this.fils[i].profondeur = this.profondeur + 1;
            this.fils[i].y = this.y + 75;
            this.fils[i].setPosition(this.fils[i].x, this.fils[i].y); //appel recurssil 
        }
    }
};
Noeud.prototype.suivantInordre = function(position) { //cette fonction permet de donner le suivant inordre d'un valeur
    let noeud = this;
    if (noeud.fils[0] != undefined) {
        noeud = noeud.fils[position + 1]; //on passe au fils a droite 

    }
    while (noeud.fils[0] != undefined) //le premier fils est different de nil 
    {
        noeud = noeud.fils[0]; //le fils le plus a gauche 
    }
    return { valeur: noeud.valeur[0], noeud: noeud }
};
Btree.prototype.delete = function(valeur, coef) { //cette fonction permet de supprimer une valeur du B-arbre 
    const ui = new UI();
    let recherche = this.search(valeur); //on commence par une recherche
    let tab_noeud = []; //le tableau va contenir les noeuds parcourus durant la suppression

    let temp = ui.AnimateBtree(recherche.node, coef).temp; //on anime la recherche 
    // let temp=0;
    let trouv = recherche.trouv;

    if (trouv) //si la valeur existe
    {
        this.entete.insertion--; //on decremente le nombre d'insertion dans l'entete
        let noeud = recherche.noeud; //lecture du noeud 

        let pos = recherche.position;


        if (noeud.fils[0] != undefined) //si le noeud est interne 
        {
            let supr = new Node_Sup(noeud); //noeud ainsi que les informations de la suppression dans le noeud 
            tab_noeud.push(supr);
            /**recuperer les attributs pour l'animation de la suppression */
            supr.position = pos;
            supr.valeurASuprimer = valeur;
            supr.x = noeud.x;
            supr.y = noeud.y;
            supr.noeudInterne = true;
            ecriture++; //on incremente le nombre d'ecriture 
            let suivant = noeud.suivantInordre(pos); //on recupere le suivant inordre

            noeud.valeur[pos] = suivant.valeur; //on remplace la valeur par son suivant inordre dans le noeud 
            valeur = suivant.valeur; //la valeur a supprimer est maintenant le suivant inordre de la premiere valeur 
            supr.suivantInordre = valeur;
            noeud = suivant.noeud;
            supr.suivant = noeud;
            for (let i = 0; i < noeud.nbValeur; i++) {
                supr.valeur[i] = noeud.valeur[i];
                supr.fils[i] = noeud.fils[i];

            }
            supr.fils[noeud.nbValeur + 1] = noeud.fils[noeud.nbValeur + 1];

        }
        etape3:
            while (true) //bouclage 
            {
                let supre = new Node_Sup(noeud);
                tab_noeud.push(supre);
                /**informations pour animer */
                for (let i = 0; i < noeud.nbValeur; i++) {
                    supre.valeur[i] = noeud.valeur[i];
                    supre.fils[i] = noeud.fils[i];

                }
                supre.fils[noeud.nbValeur] = noeud.fils[noeud.nbValeur];
                supre.valeurASuprimer = valeur;
                supre.parent = noeud.parent;
                supre.x = noeud.x;
                supre.y = noeud.y;
                supre.position = noeud.SupressionInterne(valeur, supre).position; //on suprrime la valeur du noeud avec decallage
                if (noeud.nbValeur >= Math.trunc(this.degre / 2)) ecriture++; // si le noeud n'est pas sous chargé on incremente le nombre d'ecriture
                // supre.decalage=noeud.SupressionInterne(valeur,supre).supre.decalage;
                if (noeud.parent == null) //si le noeud est la racine de l'arbre
                {
                    if (noeud.nbValeur == 0) {
                        this.root = noeud.fils[0]; //une nouvelle racine 
                        supre.nouvelleRacine = true;
                        ecriture++;
                    }
                    break;
                }
                // lecture=lecture+3;
                if (noeud.nbValeur < Math.trunc(this.degre / 2)) //le noeud est sous chargé
                {
                    lecture = lecture + 2; //lecture du frere et du pere 
                    let pos = noeud.parent.fils.indexOf(noeud); //on recupere la position du noeud parmi les fils du pere
                    supre.positionPere = pos;
                    if (pos == noeud.parent.nbValeur) //si le noeud est le dernier fils du pere
                    {
                        if (noeud.parent.fils[pos - 1].nbValeur > Math.trunc(this.degre / 2)) //le noeud gauche est bien chargé
                        {
                            supre.frereFils = [];
                            supre.frereValeur = [];
                            ecriture = ecriture + 2;
                            /**une redistribution avec le noeud frere gauche  */
                            for (let i = 0; i < noeud.parent.fils[pos - 1].nbValeur + 1; i++) {

                                supre.frereFils[i] = noeud.parent.fils[pos - 1].fils[i];
                                supre.frereValeur[i] = noeud.parent.fils[pos - 1].valeur[i];
                            }
                            supre.redistribution = true;

                            supre.frereRedistribution = noeud.parent.fils[pos - 1];
                            supre.redis_fusionX = noeud.parent.fils[pos - 1].x;
                            supre.redis_fusionY = noeud.parent.fils[pos - 1].y;

                            supre.positionFrere = pos - 1;

                            for (let i = noeud.nbValeur - 1; i >= 0; i--) { //decallage des valeurs et des fils du noeud 
                                noeud.valeur[i + 1] = noeud.valeur[i];
                                noeud.fils[i + 1] = noeud.fils[i];

                            }
                            noeud.fils[0] = noeud.parent.fils[pos - 1].fils[noeud.parent.fils[pos - 1].nbValeur];
                            noeud.parent.fils[pos - 1].fils[noeud.parent.fils[pos - 1].nbValeur] = undefined;
                            noeud.valeur[0] = noeud.parent.valeur[pos - 1]; //la valeur du pere recoit la premiere valeur du noeud
                            noeud.nbValeur++;
                            noeud.parent.valeur[pos - 1] = noeud.parent.fils[pos - 1].valeur[noeud.parent.fils[pos - 1].nbValeur - 1]; //la derniere valeur du frere gauche devient la premiere valeur du noeud
                            noeud.parent.fils[pos - 1].valeur[noeud.parent.fils[pos - 1].nbValeur - 1] = undefined;
                            noeud.parent.fils[pos - 1].nbValeur--;
                            break; //sortir de la boucle 
                        } else //le noeud frere gauche n'est pas bien chargé 
                        {
                            supre.fusion = true;
                            ecriture++; //on incremente le nombre d'ecriture 
                            /**informations concernants la fusion pour les animer  */
                            supre.frereFusion = noeud.parent.fils[pos - 1];
                            supre.redis_fusionX = noeud.parent.fils[pos - 1].x;
                            supre.redis_fusionY = noeud.parent.fils[pos - 1].y;
                            supre.frereFils = [];
                            supre.frereValeur = [];
                            for (let i = 0; i < noeud.parent.fils[pos - 1].nbValeur + 1; i++) {
                                supre.frereFils[i] = noeud.parent.fils[pos - 1].fils[i];
                                supre.frereValeur[i] = noeud.parent.fils[pos - 1].valeur[i];
                            }

                            supre.positionFrere = pos - 1;
                            noeud.parent.fils[pos - 1].valeur[noeud.parent.fils[pos - 1].nbValeur] = noeud.parent.valeur[pos - 1];
                            let j = ++noeud.parent.fils[pos - 1].nbValeur;
                            for (let i = 0; i < noeud.nbValeur; i++) { //decallage des valeurs et des fils du noeud frere gauche
                                noeud.parent.fils[pos - 1].valeur[j] = noeud.valeur[i];
                                noeud.parent.fils[pos - 1].fils[j] = noeud.fils[i];
                                j = ++noeud.parent.fils[pos - 1].nbValeur;
                            }
                            noeud.parent.fils[pos - 1].fils[j] = noeud.fils[noeud.nbValeur];
                            noeud.parent.fils[pos] = undefined;
                            valeur = noeud.parent.valeur[pos - 1]; //la valeur a supprimer devient la valeur du pere
                            noeud = noeud.parent; //le noeud ou supprimer devient le pere du noeud 
                            continue etape3; //rebouclage 
                        }
                    } else if (pos == 0) //le noeud est le premier fils parmi les fils du  pere 
                    {

                        {
                            if (noeud.parent.fils[pos + 1].nbValeur > Math.trunc(this.degre / 2)) //la noeud droit est bien chargé
                            {
                                ecriture = ecriture + 2;
                                supre.redistribution = true;
                                supre.frereFils = [];
                                supre.frereValeur = [];
                                for (let i = 0; i < noeud.parent.fils[pos + 1].nbValeur + 1; i++) {
                                    supre.frereFils[i] = noeud.parent.fils[pos + 1].fils[i];
                                    supre.frereValeur[i] = noeud.parent.fils[pos + 1].valeur[i];

                                }
                                supre.frereRedistribution = noeud.parent.fils[pos + 1];
                                supre.redis_fusionX = noeud.parent.fils[pos + 1].x;
                                supre.redis_fusionY = noeud.parent.fils[pos + 1].y;
                                supre.positionFrere = pos + 1;
                                noeud.valeur[noeud.nbValeur] = noeud.parent.valeur[pos]; //la valeur du noeud recoit la valeur du pere
                                noeud.nbValeur++;
                                noeud.parent.valeur[pos] = noeud.parent.fils[pos + 1].valeur[0]; //le pere recoit la derniere valeur du noeud 
                                noeud.fils[noeud.nbValeur] = noeud.parent.fils[pos + 1].fils[0];
                                for (let i = 0; i < noeud.parent.fils[pos + 1].nbValeur - 1; i++) { //decallage des valeurs et des fils du noeud frere droit 
                                    noeud.parent.fils[pos + 1].valeur[i] = noeud.parent.fils[pos + 1].valeur[i + 1];
                                    noeud.parent.fils[pos + 1].fils[i] = noeud.parent.fils[pos + 1].fils[i + 1];
                                }
                                noeud.parent.fils[pos + 1].valeur[noeud.parent.fils[pos + 1].nbValeur - 1] = undefined;
                                noeud.parent.fils[pos + 1].fils[noeud.parent.fils[pos + 1].nbValeur - 1] = noeud.parent.fils[pos + 1].fils[noeud.parent.fils[pos + 1].nbValeur];
                                noeud.parent.fils[pos + 1].fils[noeud.parent.fils[pos + 1].nbValeur] = undefined; //le dernier fils du noeud frere devient a nil 
                                noeud.parent.fils[pos + 1].nbValeur--;
                                break; //on sort de la boucle 
                            } else //le noeud frere droit n'est pas bien chargé 
                            { /**fusion du noeud avec son frere droit  */
                                supre.fusion = true;
                                ecriture++;
                                supre.frereFils = [];
                                supre.frereValeur = [];
                                for (let i = 0; i < noeud.parent.fils[pos + 1].nbValeur + 1; i++) {
                                    supre.frereFils[i] = noeud.parent.fils[pos + 1].fils[i];
                                    supre.frereValeur[i] = noeud.parent.fils[pos + 1].valeur[i];

                                }
                                supre.frereFusion = noeud.parent.fils[pos + 1];
                                supre.redis_fusionX = noeud.parent.fils[pos + 1].x;
                                supre.redis_fusionY = noeud.parent.fils[pos + 1].y;
                                supre.positionFrere = pos + 1;
                                noeud.valeur[noeud.nbValeur] = noeud.parent.valeur[pos];
                                let j = ++noeud.nbValeur;
                                for (let i = 0; i < noeud.parent.fils[pos + 1].nbValeur; i++) { //remplissage du noeud avec la valeurs du pere et les valeus du noeud frere
                                    noeud.valeur[j] = noeud.parent.fils[pos + 1].valeur[i];
                                    noeud.fils[j] = noeud.parent.fils[pos + 1].fils[i];

                                    j = ++noeud.nbValeur;
                                }
                                noeud.fils[j] = noeud.parent.fils[pos + 1].fils[noeud.parent.fils[pos + 1].nbValeur];
                                noeud.parent.fils[pos + 1] = undefined;
                                valeur = noeud.parent.valeur[pos]; //la nouvelle valeur a supprimer devient la valeur du pere a la position pos
                                noeud = noeud.parent; //le noeud ou supprimer devient le noeud pere
                                continue etape3; //rebouclage 
                            }
                        }
                    } else //si le noeud n'est ni a la premiere ni a la derniere position parmi les fils du pere
                    if (noeud.parent.fils[pos + 1].nbValeur > Math.trunc(this.degre / 2) || noeud.parent.fils[pos - 1].nbValeur > Math.trunc(this.degre / 2)) //le frere gauche ou le frere droit sont bien chargé
                    {
                        ecriture = ecriture + 2;
                        /**redistribution */
                        if (noeud.parent.fils[pos + 1].nbValeur > Math.trunc(this.degre / 2)) { //redistribution avec le noeud frere droit 


                            supre.redistribution = true;
                            supre.frereRedistribution = noeud.parent.fils[pos + 1];
                            supre.redis_fusionX = noeud.parent.fils[pos + 1].x;
                            supre.frereFils = [];
                            supre.frereValeur = [];
                            for (let i = 0; i < noeud.parent.fils[pos + 1].nbValeur + 1; i++) {
                                if (noeud.parent.fils[pos + 1].fils[i] != undefined) supre.frereFils[i] = noeud.parent.fils[pos + 1].fils[i];
                                if (i != noeud.parent.fils[pos + 1].nbValeur) supre.frereValeur[i] = noeud.parent.fils[pos + 1].valeur[i];

                            }
                            supre.redis_fusionY = noeud.parent.fils[pos + 1].y;
                            supre.positionFrere = pos + 1;
                            noeud.valeur[noeud.nbValeur] = noeud.parent.valeur[pos];
                            noeud.nbValeur++;
                            noeud.parent.valeur[pos] = noeud.parent.fils[pos + 1].valeur[0];
                            noeud.fils[noeud.nbValeur] = noeud.parent.fils[pos + 1].fils[0];
                            for (let i = 0; i < noeud.parent.fils[pos + 1].nbValeur - 1; i++) {
                                noeud.parent.fils[pos + 1].valeur[i] = noeud.parent.fils[pos + 1].valeur[i + 1];
                                noeud.parent.fils[pos + 1].fils[i] = noeud.parent.fils[pos + 1].fils[i + 1];
                            }
                            noeud.parent.fils[pos + 1].valeur[noeud.parent.fils[pos + 1].nbValeur - 1] = undefined;
                            noeud.parent.fils[pos + 1].fils[noeud.parent.fils[pos + 1].nbValeur - 1] = noeud.parent.fils[pos + 1].fils[noeud.parent.fils[pos + 1].nbValeur];
                            noeud.parent.fils[pos + 1].fils[noeud.parent.fils[pos + 1].nbValeur] = undefined;
                            noeud.parent.fils[pos + 1].nbValeur--;
                            break; //fin du bouclage
                        } else //le noeud frere droit n'est pas bien chargé pa plus de 50%
                        {
                            /**redistribution avec le frere gauche  */
                            supre.redistribution = true;
                            supre.frereRedistribution = noeud.parent.fils[pos - 1];
                            supre.redis_fusionX = noeud.parent.fils[pos - 1].x;
                            supre.redis_fusionY = noeud.parent.fils[pos - 1].y;
                            supre.frereFils = [];
                            supre.frereValeur = [];
                            for (let i = 0; i < noeud.parent.fils[pos - 1].nbValeur + 1; i++) {
                                supre.frereFils[i] = noeud.parent.fils[pos - 1].fils[i];
                                supre.frereValeur[i] = noeud.parent.fils[pos - 1].valeur[i];

                            }
                            supre.positionFrere = pos - 1;
                            for (let i = noeud.nbValeur - 1; i >= 0; i--) {
                                noeud.valeur[i + 1] = noeud.valeur[i];
                                noeud.fils[i + 1] = noeud.fils[i];

                            }
                            noeud.fils[0] = noeud.parent.fils[pos - 1].fils[noeud.parent.fils[pos - 1].nbValeur];
                            noeud.parent.fils[pos - 1].fils[noeud.parent.fils[pos - 1].nbValeur] = undefined;
                            noeud.valeur[0] = noeud.parent.valeur[pos - 1];
                            noeud.nbValeur++;
                            noeud.parent.valeur[pos - 1] = noeud.parent.fils[pos - 1].valeur[noeud.parent.fils[pos - 1].nbValeur - 1];
                            noeud.parent.fils[pos - 1].valeur[noeud.parent.fils[pos - 1].nbValeur - 1] = undefined;
                            noeud.parent.fils[pos - 1].nbValeur--;
                            break; //fin du rebouclage 
                        }
                    } else //les deux noeuds frere gauche et droit sont chargé a 50%
                    {
                        /**fusion avec le noeud droit  */
                        noeud.valeur[noeud.nbValeur] = noeud.parent.valeur[pos];
                        let j = ++noeud.nbValeur;
                        ecriture++;
                        supre.fusion = true;
                        supre.frereFils = [];
                        supre.frereValeur = [];
                        supre.frereFusion = noeud.parent.fils[pos + 1];
                        supre.redis_fusionX = noeud.parent.fils[pos + 1].x;
                        supre.redis_fusionY = noeud.parent.fils[pos + 1].y;
                        for (let i = 0; i < noeud.parent.fils[pos + 1].nbValeur + 1; i++) {
                            supre.frereFils[i] = noeud.parent.fils[pos + 1].fils[i];
                            supre.frereValeur[i] = noeud.parent.fils[pos + 1].valeur[i];
                        }
                        supre.positionFrere = pos + 1;
                        for (let i = 0; i < noeud.parent.fils[pos + 1].nbValeur; i++) {
                            noeud.valeur[j] = noeud.parent.fils[pos + 1].valeur[i];
                            noeud.fils[j] = noeud.parent.fils[pos + 1].fils[i];
                            j = ++noeud.nbValeur;
                        }
                        noeud.fils[j] = noeud.parent.fils[pos + 1].fils[noeud.parent.fils[pos + 1].nbValeur];
                        noeud.parent.fils[pos + 1] = undefined;
                        valeur = noeud.parent.valeur[pos]; //la valeur a supprimer devient la valeur du pere
                        noeud = noeud.parent; //le noeud ou supprimer devient le pere
                        continue etape3; //rebouclge

                    }
                } else break; //le noeud est chargé de plus de 50%
            }

    }
    return { temp: temp, node: tab_noeud, trouv: trouv };
};
Noeud.prototype.SupressionInterne = function(valeur, supre) { //cette fonction supprime une valeur a l'interieur du bloc
    let n_v = new Noe_Arb(this);
    let recherche = this.rechercheInterne(valeur, n_v); //on recherche la valeur
    let position = recherche.position;
    supre.position = position;
    for (let i = position; i < this.nbValeur; i++) { //decallage des valeurs ainsi que des fils 
        this.valeur[i] = this.valeur[i + 1];
        this.fils[i + 1] = this.fils[i + 2];
        supre.decalage = true;


    }
    this.fils[this.nbValeur] = undefined; //supprimer la valeur
    this.nbValeur--;
    return { supre: supre, position: position }
};
UI.prototype.AnimateBtree = function(node, coef) { //cette fonction anime la recherche et l'algo de recherche  
    let i = 0;
    let temp = 0;
    document.getElementById("code").innerHTML = algo_recherche;
    document.getElementById('instruction').innerHTML = '<p>debut de la  recherche</p>';

    let noeuds = [];
    let j = 0;
    let cst = 1;
    let res = node[node.length - 1].res[0];
    while (node.length != 0) {
        if (i == 0) {
            document.getElementById("afectation").className = "ligneExecute";
            setTimeout(() => {
                document.getElementById('instruction').innerHTML = '<p>lecture du bloc en memoire centrale </p>';
                document.getElementById("afectation").removeAttribute("class");
                document.getElementById("debut").className = "ligneExecute";
                setTimeout(() => {
                    document.getElementById("tq").className = "ligneExecute";
                    setTimeout(() => {
                        document.getElementById("tq").removeAttribute("class");
                    }, 200 * coef);
                    document.getElementById("debut").removeAttribute("class");
                }, 50 * coef);
            }, 750 * coef);
        }


        noeuds.push(node.shift());

        setTimeout(() => {
            if (cst != 1) {

                document.getElementById("passageFils").className = "ligneExecute";
                setTimeout(() => {
                    document.getElementById("passageFils").removeAttribute("class");
                }, 1000 * coef);
            }



            let enre = noeuds.shift();
            let val = enre.val;
            let noeud = enre.noeud;
            let res = enre.res;

            for (let k = 0; k < val.length; k++) {
                let z = 0;
                setTimeout(() => {
                    z++;


                    document.getElementById('noeud_' + val[k]).setAttribute("fill", "orange");
                    document.getElementById('valeur_' + val[k]).setAttribute("fill", "white");
                    // document.getElementById('noeud_'+val[k]).innerHTML=`<animate attributeName="fill" attributeType="XML" from="#eee" to="rgb(251, 221, 113)" begin="submit_sea.click" dur="2s" /> `
                    setTimeout(() => {
                        if (val[k] != enre.res[0]) {
                            document.getElementById('noeud_' + val[k]).setAttribute("fill", "rgb(228, 59, 44)");
                            //  document.getElementById('valeur_'+val[k]).setAttribute("fill","white");
                            document.getElementById('instruction').innerHTML = '<p>la valeur ne correspond  pas a la clé recherchée </p>';
                        } else {
                            document.getElementById('noeud_' + val[k]).setAttribute("fill", "rgb(2, 176, 39)");
                            //  document.getElementById('valeur_'+val[k]).setAttribute("fill","white");
                            document.getElementById('instruction').innerHTML = '<p>la valeur est egale a la valeur recherchée</p>';

                            document.getElementById("ftq").className = "ligneExecute";
                            setTimeout(() => {
                                document.getElementById('instruction').innerHTML = '<p>La clé est trouvée </p>';
                                document.getElementById("fin").className = "ligneExecute";
                                document.getElementById("ftq").removeAttribute("class");
                                setTimeout(() => {
                                    document.getElementById('instruction').innerHTML = '<p>fin de la recherche</p>';
                                    document.getElementById("fin").removeAttribute("class");
                                }, 1000 * coef);
                            }, 500 * coef);
                        }
                    }, 1000 * coef);


                    setTimeout(() => {
                        document.getElementById('noeud_' + val[k]).removeAttribute("fill");
                        document.getElementById('valeur_' + val[k]).removeAttribute("fill");
                    }, (500 * j + 500 * cst) * coef);
                }, (1000 * k + 1000) * coef);


            }
            setTimeout(() => {
                document.getElementById("rechercheInterne").className = "ligneExecute";
                document.getElementById('instruction').innerHTML = '<p>recherche dichotomique a l\'interieur du bloc </p>';
                setTimeout(() => {

                    document.getElementById("rechercheInterne").removeAttribute("class");
                }, (val.length) * 1000 * coef);
            }, 1000 * coef);


            document.getElementById(noeud.id).setAttribute("stroke", "orange");
            document.getElementById('instruction').innerHTML = '<p>recherche dichotomique a l\'interieur du bloc </p>';
            setTimeout(() => {
                setTimeout(() => {
                    document.getElementById(noeud.id).setAttribute("stroke", "#333");
                }, (500 * j + 500 * (cst + 1)) * coef);
            }, (val.length) * 1000 * coef);
            cst++;
        }, (1000 * j + 1000 * (i)) * coef);

        j += noeuds[i].val.length;
        temp = j * 1000 + 1000;

        i++;

    }
    if (res == undefined) {
        setTimeout(() => {
            document.getElementById('rechercheInterne').removeAttribute("class");
            document.getElementById("ftq").className = "ligneExecute";
            setTimeout(() => {
                document.getElementById('instruction').innerHTML = '<p>aucune valeur ne correspond a la valeur recherché  </p>';
                document.getElementById("fin").className = "ligneExecute";
                document.getElementById('rechercheInterne').removeAttribute("class");
                document.getElementById("ftq").removeAttribute("class");
                setTimeout(() => {
                    document.getElementById('instruction').innerHTML = '<p>Fin de la recherche </p>';
                    document.getElementById("fin").removeAttribute("class");
                }, 1000 * coef);
            }, 500 * coef);
        }, (temp + 1000) * coef);
    }
    return { temp: temp * 2 };
};
UI.prototype.AnimateBtreeInsertion = function(node, coef) { //anime l'insertion dans un arbre M-aire
    let temp = 0;
    /**animation de l'algorithme d'insertion */
    document.getElementById("code").innerHTML = algo_insertionInterne;
    document.getElementById("si").className = 'ligneExecute';
    document.getElementById('instruction').innerHTML = '<p>Debut de l\'insertion interne dans le noeud </p>';
    setTimeout(() => {
        document.getElementById("si").removeAttribute("class");
    }, 1000 * coef);
    temp += 1000;
    let id_valeur = 'valeur_' + node.noeud.id + '_' + node.position;
    let id_noeud = 'noeud_' + node.noeud.id + '_' + node.position;
    if (!node.decalage && !node.nouveaux) //si l'insertion ne provoque pas un decallage et ne provaoque pas l'allocation d'un nouveau bloc  
    {
        let dom_valeur = document.querySelector('.' + id_valeur);
        let dom_noeud = document.querySelector('.' + id_noeud);
        document.getElementById(node.noeud.id).setAttribute("stroke", "orange");
        dom_noeud.setAttribute("fill", "rgb(251, 221, 113)");
        document.getElementById('instruction').innerHTML = '<p>aucune valeur occupante la position retournée par la recherche </p>';
        dom_valeur.setAttribute("fill", "white");
        setTimeout(() => {
            document.getElementById("pour").className = 'ligneExecute';
            setTimeout(() => {
                document.getElementById("pour").removeAttribute("class");
                document.getElementById("fpour").className = 'ligneExecute';
                setTimeout(() => {
                    document.getElementById("fpour").removeAttribute("class");
                    document.getElementById("afectation").className = 'ligneExecute';
                    setTimeout(() => {
                        document.getElementById("afectation").removeAttribute("class");
                        document.getElementById('instruction').innerHTML = '<p>Insertion de la valeur dans la position retournée par la recherhce  </p>';

                        if (node.logique) //si la valeur est supprimer logiquement 
                        { /**changement de la couleur de l'indicateur d'effacement  */
                            document.getElementById('verite_' + node.valeur).setAttribute("fill", "rgb(0, 152, 116)");
                            document.getElementById('instruction').innerHTML = '<p>la valeur a inserer est suprimée logiquement //on remet l\'indicateur de supression a faux  </p>';
                        } else dom_valeur.innerHTML = node.valeur; //insertion directe
                        document.getElementById("fsi").className = 'ligneExecute';
                        setTimeout(() => {
                            document.getElementById('instruction').innerHTML = '<p>valeur Inseré dans l\'arbre  </p>';
                            dom_noeud.removeAttribute("fill");
                            dom_valeur.removeAttribute("fill");
                            document.getElementById(node.noeud.id).setAttribute("stroke", "#333");
                            document.getElementById("fsi").removeAttribute("class");
                            document.getElementById('instruction').innerHTML = '<p>Fin de l\'insertion  </p>';
                        }, 1000 * coef);
                    }, 1000 * coef);
                }, 1000 * coef);
            }, 1000 * coef);

        }, 1000 * coef);
        temp += 5000;
    } else if (node.decalage && !node.nouveaux) //si le noeud provoque un decallage 
    {

        id_valeur = 'valeur_' + node.noeud.id + '_' + (node.noeud.nbValeur - 1);
        id_noeud = 'noeud_' + node.noeud.id + '_' + (node.noeud.nbValeur - 1);
        for (let k = node.noeud.nbValeur - 1; k > node.position; k--) { //decallage des valeurs du noeud avant l'insertion
            setTimeout(() => {
                document.getElementById("pour").className = 'ligneExecute';
                setTimeout(() => {
                    document.getElementById("pour").removeAttribute("class");
                    document.getElementById("decalage").className = 'ligneExecute';
                    document.getElementById('instruction').innerHTML = '<p>decalage interne du bloc a partir de la derniere valeur   </p>';
                    document.getElementById(node.noeud.id).setAttribute("stroke", "orange");
                    if (k == node.noeud.nbValeur - 1) {

                        document.querySelector('.' + id_noeud).setAttribute("fill", "rgb(251, 221, 113)");
                        document.querySelector('.' + id_valeur).setAttribute("fill", "white");
                    } else {
                        document.getElementById('noeud_' + node.noeud.valeur[k + 1]).setAttribute("fill", "rgb(251, 221, 113)");
                        document.getElementById('valeur_' + node.noeud.valeur[k + 1]).setAttribute("file", "white");
                    }
                    setTimeout(() => {
                        if (k == node.noeud.nbValeur - 1) {
                            document.querySelector('.' + id_valeur).innerHTML = node.noeud.valeur[k];
                        } else document.getElementById('valeur_' + node.noeud.valeur[k + 1]).innerHTML = node.noeud.valeur[k];
                    }, 500 * coef);

                    setTimeout(() => {
                        document.getElementById("decalage").removeAttribute("class");
                        document.getElementById('instruction').innerHTML = '<p>Fin du decalage   </p>';
                        if (k == node.noeud.nbValeur - 1) {
                            document.querySelector('.' + id_valeur).removeAttribute("fill");
                            document.querySelector('.' + id_noeud).removeAttribute("fill");
                        } else {
                            document.getElementById('valeur_' + node.noeud.valeur[k + 1]).removeAttribute("fill");
                            document.getElementById('noeud_' + node.noeud.valeur[k + 1]).removeAttribute("fill");
                        }
                    }, 1000 * coef);
                }, 1000 * coef);
            }, (1000 + 1000 * (node.noeud.nbValeur - k)) * coef);
        }
        setTimeout(() => {
            document.getElementById("fpour").className = 'ligneExecute';
            setTimeout(() => {
                document.getElementById("fpour").removeAttribute("class");

            }, 500 * coef);
            document.getElementById(node.noeud.id).setAttribute("stroke", "orange");
            document.getElementById('noeud_' + node.noeud.valeur[node.position + 1]).setAttribute("fill", "rgb(251, 221, 113)");
            document.getElementById('valeur_' + node.noeud.valeur[node.position + 1]).setAttribute("file", "white");
            setTimeout(() => {
                document.getElementById('instruction').innerHTML = '<p>Insertion de la valeur dans la position j </p>';
                document.getElementById('valeur_' + node.noeud.valeur[node.position + 1]).innerHTML = node.valeur;
                document.getElementById("afectation").className = 'ligneExecute';
            }, 500 * coef);

            setTimeout(() => {
                document.getElementById("afectation").removeAttribute("class");
                document.getElementById("fsi").className = 'ligneExecute';
                setTimeout(() => {
                    document.getElementById("fsi").removeAttribute("class");
                    document.getElementById('instruction').innerHTML = '<p>Valeur bien inserée, fin de l\'insertion  </p>';
                }, 1000 * coef);
                document.getElementById('valeur_' + node.noeud.valeur[node.position + 1]).removeAttribute("fill");
                document.getElementById('noeud_' + node.noeud.valeur[node.position + 1]).removeAttribute("fill");
            }, 1000 * coef);
        }, (1000 * (node.noeud.nbValeur - 1 - node.position) + 3000) * coef);
        temp += 1000 * (node.noeud.nbValeur - 1 - node.position) + 5000;

    } else //le noeud ne provoque pas de decallage, donc allocation d'un nouveau bloc  
    {


        setTimeout(() => {

            document.getElementById('instruction').innerHTML = '<p>noeud plein, allocation d\'un nouveau bloc et MaJ du chainage </p>';
            document.getElementById("sinon").className = 'ligneExecute';
            let ui = new UI();
            if (node.noeud.parent != null) ui.drawLine(node.noeud.parent, coef);
            ui.drawArb(node.noeud, coef);

            document.getElementById(node.noeud.id).style.display = 'none';
            document.getElementById('valeur_' + node.noeud.id).style.display = 'none';
            $('#' + node.noeud.id).fadeIn();
            $('#valeur_' + node.noeud.id).fadeIn();

            document.getElementById(node.noeud.id).setAttribute("stroke", "orange");
            document.getElementById('valeur_' + node.noeud.valeur[0]).innerHTML = '0';
            setTimeout(() => {
                document.getElementById('noeud_' + node.noeud.valeur[0]).setAttribute("fill", "rgb(251, 221, 113)");
                document.getElementById('valeur_' + node.noeud.valeur[0]).setAttribute("file", "white");
                setTimeout(() => {
                    document.getElementById('instruction').innerHTML = '<p>Insertion de la valeur dans la premiere position du nouveau bloc   </p>';
                    document.getElementById('valeur_' + node.noeud.valeur[0]).innerHTML = node.valeur;

                }, 500 * coef);
                setTimeout(() => {
                    document.getElementById('valeur_' + node.noeud.valeur[0]).removeAttribute("fill");
                    document.getElementById('noeud_' + node.noeud.valeur[0]).removeAttribute("fill");
                    document.getElementById("sinon").removeAttribute("class");
                    document.getElementById("fsi").className = 'ligneExecute';
                    document.getElementById('instruction').innerHTML = '<p>Insertion terminée avec succés   </p>';
                    setTimeout(() => {
                        document.getElementById("fsi").removeAttribute("class");
                    }, 1000 * coef);
                }, 1000 * coef);
            }, 500 * coef);
        }, 1000 * coef);

        temp += 3500;
    }
    return temp;
};
UI.prototype.parcourtInordre = function(noeud, temp, coef) { //anime le parcourt inordre et l'algorithme de parcourt 
    var i = 0;
    /**anime l'algorithme de parcourt  */
    document.getElementById("code").innerHTML = algo_parcourt;
    setTimeout(() => {
        document.getElementById("debut").className = "ligneExecute";
        setTimeout(() => {
            document.getElementById('instruction').innerHTML = '<p>Debut du parcourt   </p>';
            document.getElementById("debut").removeAttribute("class");
            document.getElementById("pour").className = "ligneExecute";
            setTimeout(() => {
                document.getElementById("pour").removeAttribute("class");
            }, 1000 * coef);
        }, 1000 * coef);
        document.getElementById(noeud.id).setAttribute("stroke", "orange");
    }, temp * coef);
    temp += 2500;
    //temp+=1000*noeud.nbValeur;
    lecture++;
    for (let i = 0; i < noeud.nbValeur + 1; i++) {
        setTimeout(() => {
            document.getElementById('instruction').innerHTML = '<p>Passage sur toutes les valeurs du noeud   </p>';

            document.getElementById("pour").className = "ligneExecute";
            setTimeout(() => {
                document.getElementById("pour").removeAttribute("class");
                document.getElementById("recurssif").className = "ligneExecute";
                setTimeout(() => {
                    document.getElementById("recurssif").removeAttribute("class");
                }, 1000 * coef);
            }, 1000 * coef);
        }, temp * coef);
        temp += 2500;
        if (noeud.fils[i] != undefined) {
            document.getElementById('instruction').innerHTML = '<p>Appel recursif pour parcourir le sous arbre du sous arbre parcouru   </p>';

            var temp1 = this.parcourtInordre(noeud.fils[i], temp, coef); //appel recurssif pour parcourir le sous arbre du fils du noeud parcourut
            lecture++;
            temp += temp1 - temp

        }

        if (i != noeud.nbValeur) {
            setTimeout(() => {

                if (noeud.supp.indexOf(i) == -1) document.getElementById('noeud_' + noeud.valeur[i]).setAttribute("fill", "orange");
                else {
                    document.getElementById('noeud_' + noeud.valeur[i]).setAttribute("fill", "red");
                    document.getElementById('instruction').innerHTML = '<p>Valeur suprimée logiquement,on la prend pas en compte    </p>';
                }
                document.getElementById('valeur_' + noeud.valeur[i]).setAttribute("fill", "white");
                // setTimeout(() => {
                document.getElementById("ecriture").className = "ligneExecute";
                setTimeout(() => {
                    if (noeud.supp.indexOf(i) == -1) document.getElementById('instruction').innerHTML = '<p>Ecriture de la valeur   </p>';
                    document.getElementById("ecriture").removeAttribute("class");
                }, 1000 * coef);
                // },1000*coef);


            }, temp * coef);
            temp += 2000;
        } else //animer la fin de l'algorithme 
        {
            setTimeout(() => {

                document.getElementById("pour").removeAttribute("class");
                document.getElementById("fpour").className = "ligneExecute"
                setTimeout(() => {
                    document.getElementById('instruction').innerHTML = '<p>fin du parcourt dans le sous arbre on remonte au pere  </p>';
                    document.getElementById("fpour").removeAttribute("class");
                    document.getElementById("fin").className = "ligneExecute";
                    setTimeout(() => {
                        //      document.getElementById('instruction').innerHTML='<p>Insertion de la valeur dans la position retournée par la recherhce  </p>';
                        document.getElementById("fin").removeAttribute("class");
                    }, 1000 * coef);

                }, 1000 * coef);
            }, temp * coef);
            temp += 2000;
        }



    }
    setTimeout(() => {
        document.getElementById('instruction').innerHTML = '<p>fin du parcourt de l\'arbre</p>';
    }, temp * coef);

    return temp;
};
UI.prototype.suivantInordre_1 = function(noeud, pos, coef) { // retrouve le suivant inordre ainsi que le parcourt pour le trouver  
    let valeur = 0;
    let node = []; //tableau qui stoquera les noeuds parcourut pour trouver le suivant inordre

    node.push(noeud);
    if (noeud.fils[pos + 1] != undefined && pos + 1 <= noeud.nbValeur) //le noeud a un fils a la position pos+1
    {
        noeud = noeud.fils[pos + 1]; // on passe au fils a la position pos+1

        node.push(noeud);
        while (noeud.fils[0] != undefined) {
            noeud = noeud.fils[0]; //on passe au fils le pus a gauche a chaque iteration
            lecture++;
            node.push(noeud);
        }
        valeur = noeud.valeur[0]; //le suivant inordre est la premiere valeur du noeud le plus a gauche de sous arbre du fils pos+1
        pos = 0;

    } else // le noeud n'a pad de fils a droite de la valeur 
    {
        if (noeud.valeur[pos + 1] != undefined && pos + 1 < noeud.nbValeur) //la valeur d'a coté existe
        {
            valeur = noeud.valeur[pos + 1]; //le suivant est la valeur a coté dans le noeud 
            pos++;
        } else //la valeur est la derniere valeur du noeud 
        {
            while (noeud.parent != null) // tant qu'on a pas atteint la racine
            {
                if (noeud == noeud.parent.fils[noeud.parent.nbValeur]) //si le noeud est le dernier fils de son pere 
                {
                    noeud = noeud.parent; //on monte au pere
                    lecture++;
                    node.push(noeud);
                } else //le noeud n'est pas dernier fils de son pere
                {
                    pos = noeud.parent.fils.indexOf(noeud);
                    break;

                }
            }
            if (noeud.parent == null) //si le noeud est la racine
            {
                valeur = undefined; //la valeur n'a pas de suivant 
            } else // le noeud n'est pas la racine
            {
                valeur = noeud.parent.valeur[pos]; //le suivant est la valeur a l'emplacement pos dans le pere noeud 
                noeud = noeud.parent; //le noeud suivant est le pere du noeud 
                lecture++; //incremente le nombre de lecture
            }
        }
    }
    return { position: pos, noeud: noeud, valeur: valeur, node: node };
};
UI.prototype.animateSuivant = function(node, valeur, temp, coef) { // anime le parcourt pou arriver au suivant inordre d'une valeur 
    let i = node.length;
    while (i != 0) {
        let noeud = node.shift(); //on defille le tableau pour recuperer a chaque fois le premier noeud 
        //animer le parcourt noeud par noeud 
        setTimeout(() => {

            document.getElementById(noeud.id).setAttribute("stroke", 'orange');
            document.getElementById('instruction').innerHTML = '<p>Recherche du suivant inordre </p>';

        }, temp * coef);

        i--;
        temp += 1000;
        if (i == 0) var nope = noeud;
    }
    setTimeout(() => {
        if (valeur != undefined) {
            document.getElementById('instruction').innerHTML = '<p>suivant Inordre trouvé </p>';
            if (nope.supp.indexOf(nope.valeur.indexOf(valeur)) == -1) document.getElementById('noeud_' + valeur).setAttribute("fill", "orange");
            else {
                document.getElementById('noeud_' + valeur).setAttribute("fill", "red");
                document.getElementById('instruction').innerHTML = '<p>Valeur suprimée logiquement // on la prend pas en compte</p>';
            }
            document.getElementById('valeur_' + valeur).setAttribute("fill", "white");


        }


    }, (temp + 1500) * coef);
    return temp;
}
UI.prototype.Requete = function(valeurMax, valeurMin, tree, coef, majMenu, affichageLectureEcriture) { //anime le traitement de la requete ainsi que l'algorithme  
    if (valeurMax < valeurMin) //traitement de securite pour voir si la valeur min est plus grande qu'au max 
    { /**permutation entre les deux valeurs  */
        let tomp = valeurMax;
        valeurMax = valeurMin;
        valeurMin = tomp;

    }
    /**anime une partie de l'algorithme  */
    document.getElementById("code").style.width = '420px';
    document.getElementById("code").innerHTML = algo_requete;
    document.getElementById("afectation").className = 'ligneExecute';
    setTimeout(() => {
        document.getElementById("afectation").removeAttribute("class");
        document.getElementById("debut").className = 'ligneExecute';
        setTimeout(() => {
            document.getElementById('instruction').innerHTML = '<p>debut du traitement de  la requete </p>';
            document.getElementById("debut").removeAttribute("class");
            document.getElementById("recherche").className = 'ligneExecute';
            document.getElementById('instruction').innerHTML = '<p>recherche de la valeur Min</p>';
        }, 1000 * coef);
    }, 1000 * coef);
    let recherche = tree.search(valeurMin, this, coef); //recherche la valeur min
    let position = recherche.position;
    let trouv = recherche.trouv;
    let noeud = recherche.noeud;
    let node = recherche.node;
    let valeur = 0;
    setTimeout(() => {


        let temp = this.AnimateBtree(node, coef).temp; //animer la recherche
        setTimeout(() => {
            document.getElementById("code").innerHTML = algo_requete;
            document.getElementById("recherche").className = 'ligneExecute';
            setTimeout(() => {
                document.getElementById("recherche").removeAttribute("class");
                document.getElementById(noeud.id).setAttribute("stroke", "orange");
            }, 1000 * coef);

        }, temp * coef);
        temp += 1500;
        if (noeud.valeur[position] >= valeurMin) {
            valeur = noeud.valeur[position];
            setTimeout(() => {
                document.getElementById("recherche").removeAttribute("class");
                document.getElementById('instruction').innerHTML = '<p>la clé correspondante au coordonnées retournées par la recherche est superieur au Min on la prend </p>';
            }, temp * coef);
            temp += 1000;
        } else {
            let suivant = this.suivantInordre_1(noeud, position, coef); //on passe au suivant inordre
            valeur = suivant.valeur;
            let neoud_ = suivant.noeud;
            // noeud=suivant.noeud;
            // document.getElementById(neoud_.id).setAttribute("stroke","orange"); 
            setTimeout(() => {
                document.getElementById('instruction').innerHTML = '<p>la clé correspondante au coordonnées retournées par la recherche est inferieure au Min,on passe au suivant</p>';
                document.getElementById("si").className = 'ligneExecute';
                setTimeout(() => {
                    document.getElementById("si").removeAttribute("class");
                }, 1000 * coef);
            }, temp * coef);
            temp += 1000;

        }
        setTimeout(() => {
            document.getElementById("tq").className = 'ligneExecute';
            setTimeout(() => {
                document.getElementById("tq").removeAttribute("class");
            }, 1000 * coef);
            let tem = 1000;
            let i = 0;
            while (valeur != undefined && valeur < valeurMax) //la valeur est inferieur a la valeur max 
            {
                if (valeur >= valeurMin && i == 0) {
                    document.getElementById('instruction').innerHTML = '<p>Ecrire la valeur passage au suivantInordre</p>';
                    if (noeud.supp.indexOf(i) == -1) {
                        document.getElementById('noeud_' + valeur).setAttribute("fill", "orange");

                    } else {
                        document.getElementById('noeud_' + valeur).setAttribute("fill", "red");
                        document.getElementById('instruction').innerHTML = '<p>Valeur suprimée logiquement // on la prend pas en compte</p>';
                    }

                    document.getElementById('valeur_' + valeur).setAttribute("fill", "white");

                }
                i++;

                let suivant = this.suivantInordre_1(noeud, position, coef); //on passe au suivant 
                position = suivant.position;
                noeud = suivant.noeud;
                valeur = suivant.valeur;

                let node = suivant.node;

                if (valeur < valeurMax) {
                    document.getElementById('instruction').innerHTML = '<p>Passage au suivant </p>';
                    let temp1 = this.animateSuivant(node, valeur, tem, coef); //on anime le parcourt au suivant 
                    setTimeout(() => {
                        document.getElementById("ecrire").removeAttribute("class");
                        document.getElementById("tq").className = 'ligneExecute';
                        setTimeout(() => {
                            document.getElementById("tq").removeAttribute("class");
                            document.getElementById('instruction').innerHTML = '<p>Ecrire la valeur </p>';
                            document.getElementById("ecrire").className = 'ligneExecute';

                        }, 1000 * coef);
                    }, temp1 * coef);
                    tem += temp1 - tem + 2000;

                }



            }
            setTimeout(() => { //anime la fin de l'algorithme 
                if (valeur != undefined) document.getElementById('instruction').innerHTML = '<p>toutes les valeurs de l\'arbre ont eté parcouru</p>';
                else document.getElementById('instruction').innerHTML = '<p>La valeur ne correspond pas au critere</p>';
                document.getElementById("ecrire").removeAttribute("class");
                if (valeur != undefined) document.getElementById('noeud_' + valeur).setAttribute("fill", "red");
                if (valeur != undefined) document.getElementById('valeur_' + valeur).setAttribute("fill", "white");
                document.getElementById("ftq").className = 'ligneExecute';
                setTimeout(() => {
                    document.getElementById('instruction').innerHTML = '<p>Fin du traitement de la requete</p>';
                    document.getElementById("fin").className = 'ligneExecute';
                    document.getElementById("ftq").removeAttribute("class");
                    setTimeout(() => {
                        majMenu();
                        affichageLectureEcriture();
                        document.getElementById("fin").removeAttribute("class");
                    }, 1000 * coef);
                }, 1000 * coef);
            }, (tem + 1000) * coef);

        }, (temp + 2000) * coef);

    }, 3000 * coef);
    // return{temp:temp};
};
UI.prototype.AnimateTreeInsertion = function(tab_noeud, coef) { //anime l'insertion dans B-arbre   
    document.getElementById('code').innerHTML = algo_insert; //affichage de l'algo d'insertion

    var taille = tab_noeud.length;
    var temp = 0;
    var cpt = 0;
    let filsAInsererS = [];
    var i = 0;
    for (let i = 0; i < tab_noeud.length; i++) {
        let node = tab_noeud[i];
        cpt++;

        let noeud = node.noeud;
        setTimeout(() => {
            document.getElementById('instruction').innerHTML = '<p>debut de l\' insertion</p>';
            algorithme(0, 7);

        }, 1000 * coef);
        temp += 1000;
        if (!node.nouveaux) // si l'arbre n'est pas vide
        {
            setTimeout(() => {

                document.getElementById('instruction').innerHTML = '<p>debut de l\'insertion interne au bloc </p>';
                document.getElementById(noeud.id).setAttribute("stroke", "orange");
            }, temp * coef);
            let pos = node.position;

            let noeud = node.noeud;
            let filsAInserer = node.f
            let valeur = node.valeurAInsere;

            let nouvelleValeur = [];



            let ancienneValeur = node.valeur;
            for (let i = 0; i < pos; i++) {
                nouvelleValeur[i] = ancienneValeur[i];

            }

            let nbValeur = 0;
            if (!node.eclatement) nbValeur = noeud.nbValeur - 1;
            else {
                nbValeur = noeud.degre - 1;
                pos;
            }
            for (let i = nbValeur - 1; i >= pos; i--) //decallage des valeurs 
            {
                nouvelleValeur[i + 1] = ancienneValeur[i];
                let j = Number(document.getElementById('noeud_' + ancienneValeur[i]).getAttribute("x"));
                let z = Number(document.getElementById('noeud_' + ancienneValeur[i]).getAttribute("y"));
                setTimeout(() => {
                    document.getElementById('instruction').innerHTML = '<p>decalage interne dans le bloc </p>';
                    for (let index = j; index < j + 33.33; index += 0.2) {
                        setTimeout(() => {
                            let textPositio = index + 16.665;
                            document.getElementById('noeud_' + ancienneValeur[i]).setAttribute("x", index);
                            document.getElementById('valeur_' + ancienneValeur[i]).setAttribute("x", textPositio);
                        }, index * coef);

                    }
                    algorithme(1, 7);
                    if (node.fils[i + 1] != undefined) {
                        $('#ligne' + noeud.id + '_' + node.fils[i + 1].id).fadeOut(1000 * coef);
                        setTimeout(() => {
                            $('#ligne' + noeud.id + '_' + node.fils[i + 1].id).remove();

                            let posX = node.x + 33.33 * (i + 2);
                            let posY = node.y + 33.33;
                            let desX = Number(document.getElementById('noeud_' + node.fils[i + 1].valeur[0]).getAttribute("x")) + 33.33 * (node.fils[i + 1].nbValeur) / 2;
                            let desY = Number(document.getElementById('noeud_' + node.fils[i + 1].valeur[0]).getAttribute("y"));
                            document.querySelector("#ligne").innerHTML += `<path  id="ligne` + noeud.id + `_` + node.fils[i + 1].id + `" d="M` + posX + `,` + posY + `L` + desX + `,` + desY + `" stroke="#333" stroke-width="3" style="display:none;"></path>`;
                            $('#ligne' + noeud.id + '_' + node.fils[i + 1].id).fadeIn(1000 * coef);
                        }, 1000 * coef);
                    }
                }, temp * coef);
                temp += 1000;
            }
            temp += 3000;

            nouvelleValeur[pos] = valeur;

            let j = 0;
            let z = 0;
            if (ancienneValeur[pos] != undefined) {

                j = Number(document.getElementById('noeud_' + ancienneValeur[pos]).getAttribute("x"));
                z = Number(document.getElementById('noeud_' + ancienneValeur[pos]).getAttribute("y"));

            } else {
                j = Number(document.getElementById('noeud_' + ancienneValeur[pos - 1]).getAttribute("x")) + 33.33;
                z = Number(document.getElementById('noeud_' + ancienneValeur[pos - 1]).getAttribute("y"));
            }
            let posX = j;
            let textPos = 16.665 + j;
            let texthei = z + 20;
            setTimeout(() => {

                let indice = Math.trunc(noeud.degre / 2);
                if (node.eclatement) document.getElementById('instruction').innerHTML = '<p>Noeud sur chargé, eclatement du noeud</p>';
                algorithme(2, 7);
                $('#valeur_' + valeur).fadeOut(1000 * coef);
                $('#noeud_' + valeur).fadeOut(1000 * coef);
                setTimeout(() => {
                    if (node.eclatement) {
                        algorithme(3, 7);

                    } else {
                        algorithme(7, 7);
                        document.getElementById('instruction').innerHTML = '<p>insertion terminée avec succés </p>';
                    }
                    $('#valeur_' + valeur).remove();
                    $('#noeud_' + valeur).remove();
                    document.getElementById('instruction').innerHTML = '<p>La valeur du milieu passe au noeud parent </p>';
                }, 1000 * coef);


                setTimeout(() => {

                    document.getElementById('instruction').innerHTML = '<p>insertion de la valeur a la position donnée</p>';
                    document.getElementById(noeud.id).innerHTML += '<rect id="noeud_' + valeur + '" class="noeud_' + noeud.id + '_' + pos + '" x="' + posX + '"y="' + z + '"  width="33.33" height="33.33" style="display:none;"     ></rect> '
                    document.getElementById('valeur_' + noeud.id).innerHTML += '<text id="valeur_' + valeur + '" class="valeur_' + noeud.id + '_' + pos + '" x="' + textPos + '" y="' + texthei + '" style="display:none;" >' + valeur + '</text>';
                    $('#valeur_' + valeur).fadeIn(1000 * coef);
                    $('#noeud_' + valeur).fadeIn(1000 * coef);
                    if (node.eclatement) algorithme(4, 7);

                }, 2000 * coef);


                if (tab_noeud[i].filsAInserer != null) { //inserer le fils si il n'est pas a nil
                    setTimeout(() => {
                        if (node.eclatement) document.getElementById('instruction').innerHTML = '<p>Mise a jour des liens entre les noeuds</p>';
                        $('#ligne' + noeud.id + '_' + node.filsAInserer.id).remove();
                        $('#ligne' + noeud.id + '_' + node.fils[pos].id).remove();
                        let deX = 0;
                        let deY = 0;
                        if (!node.eclatement) {
                            deX = Number(document.getElementById('noeud_' + noeud.valeur[pos]).getAttribute("x"));


                            deY = Number(document.getElementById('noeud_' + noeud.valeur[pos]).getAttribute("y"));
                        } else //le fils n'est pas a nil
                        {
                            deX = Number(document.getElementById('noeud_' + tab_noeud[i].noeud.valeur[0]).getAttribute("x")) + 33.33 * (pos);

                            deY = Number(document.getElementById('noeud_' + tab_noeud[i].noeud.valeur[0]).getAttribute("y"));
                        }
                        let posX = deX + 33.33;
                        let posY = deY + 33.33;

                        let desX = Number(document.getElementById('noeud_' + node.filsAInserer.valeur[0]).getAttribute("x")) + 33.33 * (node.filsAInserer.nbValeur) / 2;
                        let desY = Number(document.getElementById('noeud_' + node.filsAInserer.valeur[0]).getAttribute("y"));
                        let desX2 = Number(document.getElementById('noeud_' + node.fils[pos].valeur[0]).getAttribute("x")) + 33.33 * (node.fils[pos].nbValeur) / 2;


                        document.querySelector("#ligne").innerHTML += `<path  id="ligne` + tab_noeud[i].noeud.id + `_` + node.fils[pos].id + `" d="M` + deX + `,` + posY + `L` + desX2 + `,` + desY + `" stroke="#333" stroke-width="3" style="diplay:none;"></path>`;
                        document.querySelector("#ligne").innerHTML += `<path  id="ligne` + tab_noeud[i].noeud.id + `_` + node.filsAInserer.id + `" d="M` + posX + `,` + posY + `L` + desX + `,` + desY + `" stroke="#333" stroke-width="3" style="diplay:none;"></path>`;
                        $('#ligne' + noeud.id + '_' + node.filsAInserer.id).fadeIn(1000 * coef);
                        $('#ligne' + noeud.id + '_' + node.fils[pos].id).fadeIn(1000 * coef);
                        if (node.eclatement) algorithme(4, 7);
                        else {
                            algorithme(7, 7);
                            document.getElementById('instruction').innerHTML = '<p>Fin de l\'insertion avec succés </p>';
                        }
                    }, 3000 * coef);
                }
                setTimeout(() => {
                    if (node.eclatement) algorithme(6, 7);
                }, 4000 * coef);

            }, temp * coef);
            temp += 4000;


            if (tab_noeud[i].nouvelleRacine) { //si il 'y a eclatement de la racine 
                setTimeout(() => {
                    document.getElementById('instruction').innerHTML = '<p>Eclatement de la racine, nouvelle racine/Maj des liens</p>';
                    let j = tab_noeud[i].x + 33.33 * (Math.trunc(tab_noeud[i].noeud.degre / 2));
                    let z = tab_noeud[i].y - 50;



                    let posX = j;
                    let textPos = 16.665 + j;
                    let texthei = z + 20;
                    valeur = nouvelleValeur[Math.trunc(tab_noeud[i].noeud.degre / 2)];
                    setTimeout(() => {
                        if (node.eclatement) algorithme(6, 7);
                        let indice = Math.trunc(noeud.degre / 2);
                        document.getElementById('instruction').innerHTML = '<p>la valeur du milieu passe a la nouvelle racine </p>';
                        $('#valeur_' + valeur).fadeOut(1000 * coef);
                        $('#noeud_' + valeur).fadeOut(1000 * coef);
                        setTimeout(() => {

                            $('#valeur_' + valeur).remove();
                            $('#noeud_' + valeur).remove();
                        }, 1000 * coef);


                        setTimeout(() => {

                            document.getElementById('instruction').innerHTML = '<p>chainage de la nouvelle racine avec l\'ancienne racine  </p>';
                            document.getElementById(noeud.id).innerHTML += '<rect id="noeud_' + valeur + '" class="noeud_nouvelle_' + pos + '" x="' + posX + '"y="' + z + '"  width="33.33" height="33.33" style="display:none;"     ></rect> '
                            document.getElementById('valeur_' + noeud.id).innerHTML += '<text id="valeur_' + valeur + '" class="valeur_nouvelle_' + pos + '" x="' + textPos + '" y="' + texthei + '" style="display:none;" >' + valeur + '</text>';
                            document.querySelector("#ligne").innerHTML += `<path  id="lignenoeud_nouvelle` + `_` + noeud.id + `" d="M` + posX + `,` + (z + 33.33) + `L` + (tab_noeud[i].x + 33.33 * Math.trunc(noeud.degre / 2) / 2) + `,` + tab_noeud[i].y + `" stroke="#333" stroke-width="3" style="diplay:none;"></path>`;
                            document.querySelector("#ligne").innerHTML += `<path  id="lignenoeud_nouvelle1` + `_` + noeud.id + `" d="M` + (posX + 33.33) + `,` + (z + 33.33) + `L` + (tab_noeud[i].x + 33.33 * Math.trunc(noeud.degre / 2) / 2 + 33.33 * (Math.trunc(noeud.degre / 2) + 1)) + `,` + tab_noeud[i].y + `" stroke="#333" stroke-width="3" style="diplay:none;"></path>`;
                            algorithme(6, 7);
                            $('#lignenoud_nouvelle1' + '_' + noeud.id).fadeIn(1000 * coef);
                            $('#lignenoud_nouvelle' + '_' + noeud.id).fadeIn(1000 * coef);
                            document.getElementById('noeud_' + valeur).setAttribute("stroke", "orange");
                            $('#valeur_' + valeur).fadeIn(1000 * coef);
                            $('#noeud_' + valeur).fadeIn(1000 * coef);
                            algorithme(1, 7);
                            setTimeout(() => {
                                algorithme(2, 7);
                                setTimeout(() => {
                                    document.getElementById('instruction').innerHTML = '<p>insertion terminée avec succés </p>';
                                    algorithme(7, 7);
                                }, 1000 * coef);
                            }, 1000 * coef);
                        }, 2000 * coef);

                    }, 2000 * coef);
                }, temp * coef);
                temp += 7000;
            }



        } else //le fichier est vide 
        {
            this.drawBtree(tab_noeud[i].noeud, coef);
            $('#valeur_' + tab_noeud[i].valeurAInsere).css("display", "none");
            $('#noeud_' + tab_noeud[i].valeurAInsere).css("display", "none");
            $('#valeur_' + tab_noeud[i].valeurAInsere).fadeIn(1000 * coef);
            $('#noeud_' + tab_noeud[i].valeurAInsere).fadeIn(1000 * coef);
            document.getElementById('instruction').innerHTML = '<p>Fichier vide //creation d\'une racine  </p>';
            algorithme(1, 7);
            setTimeout(() => {
                algorithme(2, 7);
                setTimeout(() => {
                    algorithme(7, 7);
                    document.getElementById('instruction').innerHTML = '<p>insertion terminée avec succés </p>';
                }, 1000 * coef);
            }, 1000 * coef);
            temp += 2000;
        }



    }

    return { temp: temp }
}
UI.prototype.animateTreeSup = function(tab_noeud, coef) { //anime le parcourt et l'algorithme suivi pour la suppression    
    document.getElementById('code').innerHTML = algo_delete;
    algorithme(0, 7);
    document.getElementById('instruction').innerHTML = '<p>Debut de la supression   </p>';
    var taille = tab_noeud.length;
    var temp = 0;
    var cpt = 0;
    /**on parcourt les noeud empilés dans tab_noeud  */
    for (let i = 0; i < taille; i++) {
        let node = tab_noeud[i];
        let noeud = tab_noeud[i].noeud;
        let nouvelleValeur = [];
        setTimeout(() => {
            document.getElementById(node.noeud.id).setAttribute("stroke", "orange");
            document.getElementById('instruction').innerHTML = '<p>supression interne de la valeur dans le noeud </p>';
        }, temp * coef);
        if (node.noeudInterne) //si le noeud est interne 
        {
            setTimeout(() => {

                algorithme(1, 7);
                document.getElementById('instruction').innerHTML = '<p> le noeud est  interne, on remplace la valeur par son suivant inordre </p>';

                $('#noeud_' + node.valeurASuprimer).fadeOut(1000 * coef);
                $('#valeur_' + node.valeurASuprimer).fadeOut(1000 * coef);
                setTimeout(() => {
                    document.getElementById('instruction').innerHTML = '<p> supression de la valeur  </p>';
                    $('#noeud_' + node.valeurASuprimer).remove();
                    $('#valeur_' + node.valeurASuprimer).remove();
                }, 1000 * coef);

                let posX = node.x + 33.33 * node.position;
                let z = node.y;
                let textPos = 16.665 + posX;
                let texthei = z + 20;
                setTimeout(() => {
                    document.getElementById('instruction').innerHTML = '<p>remplacement par le suivant inordre  </p>';
                    document.getElementById(noeud.id).innerHTML += '<rect id="noeud_1' + node.suivantInordre + '" class="noeud_' + node.noeud.id + '_' + node.position + '" x="' + posX + '"y="' + z + '"  width="33.33" height="33.33" style="display:none;"     ></rect> '
                    document.getElementById('valeur_' + noeud.id).innerHTML += '<text id="valeur_1' + node.suivantInordre + '" class="valeur_' + node.noeud.id + '_' + node.position + '" x="' + textPos + '" y="' + texthei + '" style="display:none;" >' + node.suivantInordre + '</text>';
                    $('#noeud_1' + node.suivantInordre).fadeIn(1000 * coef);
                    $('#valeur_1' + node.suivantInordre).fadeIn(1000 * coef);
                    // algorithme(1,7);
                }, 2000 * coef);

            }, temp * coef);
            temp += 3000;
        } else //le noeud n'est pas interne
        {


            /***animationde la suppression interne  */
            setTimeout(() => {
                algorithme(2, 7);
                document.getElementById('instruction').innerHTML = '<p> supression interne de la valeur  </p>';
                $('#noeud_' + node.valeur[node.position]).fadeOut(1000 * coef);
                $('#valeur_' + node.valeur[node.position]).fadeOut(1000 * coef);
                setTimeout(() => {
                    $('#noeud_' + node.valeur[node.position]).remove();
                    $('#valeur_' + node.valeur[node.position]).remove();
                }, 1000 * coef);
            }, temp * coef);
            temp += 1000;
            for (let i = node.position; i < node.valeur.length - 1; i++) { //decalllage 
                let j = Number(document.getElementById('noeud_' + node.valeur[i + 1]).getAttribute("x"));

                document.getElementById('instruction').innerHTML = '<p> decalage des valeurs et des fils  </p>';
                let z = Number(document.getElementById('noeud_' + node.valeur[i + 1]).getAttribute("y"));
                setTimeout(() => {
                    let y = j - 33.33;
                    for (let index = j; index > y; index -= 0.2) {
                        setTimeout(() => {
                            let textPositio = index + 16.665;
                            document.getElementById('noeud_' + node.valeur[i + 1]).setAttribute("x", index);
                            document.getElementById('valeur_' + node.valeur[i + 1]).setAttribute("x", textPositio);
                        }, (j - index) * coef);

                    }

                    if (node.fils[i + 2] != undefined) {
                        $('#ligne' + node.noeud.id + '_' + node.fils[i + 2].id).fadeOut(1000 * coef);
                        setTimeout(() => {
                            $('#ligne' + node.noeud.id + '_' + node.fils[i + 2].id).remove();

                            let posX = node.x + 33.33 * (i + 1);
                            let posY = node.y + 33.33;
                            let desX = Number(document.getElementById('noeud_' + node.fils[i + 2].valeur[0]).getAttribute("x")) + 33.33 * (node.fils[i + 2].nbValeur) / 2;
                            let desY = Number(document.getElementById('noeud_' + node.fils[i + 2].valeur[0]).getAttribute("y"));
                            document.querySelector("#ligne").innerHTML += `<path  id="ligne` + node.noeud.id + `_` + node.fils[i + 2].id + `" d="M` + posX + `,` + posY + `L` + desX + `,` + desY + `" stroke="#333" stroke-width="3" style="display:none;"></path>`;
                            $('#ligne' + node.noeud.id + '_' + node.fils[i + 2].id).fadeIn(1000 * coef);
                        }, 1000 * coef);
                    }
                }, temp * coef);
                temp += 3000;
            }
            setTimeout(() => {
                algorithme(3, 7);
            }, temp * coef);
            temp += 1000;

            if (node.redistribution) //si la suppression necessite une redistribution
            {
                setTimeout(() => {
                    document.getElementById('instruction').innerHTML = '<p> le noeud est sous chargé,redistribution avec un noeud frere </p>';
                }, 1000 * coef);
                temp += 1000;

                if (node.positionPere > node.positionFrere) //si le frere avec qui redistribuer est gauche 
                {

                    let e = 0
                    for (let i = 0; i < node.valeur.length; i++) {
                        let j = node.x + 33.33 * e;

                        let z = Number(document.getElementById('noeud_' + node.valeur[i]).getAttribute("y"));
                        setTimeout(() => {

                            algorithme(4, 7);
                            let y = j + 33.33;
                            for (let index = j; index < y; index += 0.2) {
                                setTimeout(() => {

                                    let textPositio = index + 16.665;
                                    if (i != node.position) document.getElementById('noeud_' + node.valeur[i]).setAttribute("x", index);
                                    if (i != node.position) document.getElementById('valeur_' + node.valeur[i]).setAttribute("x", textPositio);
                                }, index * coef);
                            }
                            document.getElementById('instruction').innerHTML = '<p> decalage a droite du noeud  </p>';

                            if (node.fils[i] != undefined) {
                                $('#ligne' + noeud.id + '_' + node.fils[i].id).fadeOut(1000 * coef);
                                setTimeout(() => {
                                    $('#ligne' + noeud.id + '_' + node.fils[i].id).remove();
                                    let posX = node.x + 33.33 * (i + 1);
                                    let posY = node.y + 33.33;
                                    let desX = Number(document.getElementById('noeud_' + node.fils[i].valeur[0]).getAttribute("x")) + 33.33 * (node.fils[i].nbValeur) / 2;
                                    let desY = Number(document.getElementById('noeud_' + node.fils[i].valeur[0]).getAttribute("y"));
                                    document.querySelector("#ligne").innerHTML += `<path  id="ligne` + node.noeud.id + `_` + node.fils[i].id + `" d="M` + posX + `,` + posY + `L` + desX + `,` + desY + `" stroke="#333" stroke-width="3" style="display:none;"></path>`;
                                    $('#ligne' + node.noeud.id + '_' + node.fils[i].id).fadeIn(1000 * coef);
                                }, 1000 * coef);
                            }
                        }, temp * coef);

                        if (node.valeur[i] != node.valeurASuprimer) e++;
                        temp += 1000;
                    }

                    setTimeout(() => {
                        algorithme(4, 7);
                        if (node.fils[node.valeur.length] != undefined) {
                            $('#ligne' + noeud.id + '_' + node.fils[node.valeur.length].id).fadeOut(1000 * coef);
                            setTimeout(() => {
                                $('#ligne' + noeud.id + '_' + node.fils[node.valeur.length].id).remove();
                                let posX = node.x + 33.33 * (node.valeur.length);
                                let posY = node.y + 33.33;
                                document.getElementById('instruction').innerHTML = '<p> remplacement des valeurs  </p>';
                                let desX = Number(document.getElementById('noeud_' + node.fils[node.valeur.length].valeur[0]).getAttribute("x")) + 33.33 * (node.fils[node.valeur.length].nbValeur) / 2;
                                let desY = Number(document.getElementById('noeud_' + node.fils[node.valeur.length].valeur[0]).getAttribute("y"));
                                document.querySelector("#ligne").innerHTML += `<path  id="ligne` + node.noeud.id + `_` + node.fils[node.valeur.length].id + `" d="M` + posX + `,` + posY + `L` + desX + `,` + desY + `" stroke="#333" stroke-width="3" ></path>`;
                                $('#ligne' + node.noeud.id + '_' + node.fils[node.valeur.length].id).fadeIn(1000 * coef);
                            }, 1000 * coef);
                        }


                        if (node.fils[0] != undefined) $('#ligne' + node.frereRedistribution.id + '_' + node.frereFils[node.frereFils.length - 1].id).fadeOut(1000 * coef);
                        $('#noeud_' + noeud.valeur[0]).fadeOut(1000 * coef);
                        $('#valeur_' + noeud.valeur[0]).fadeOut(1000 * coef);
                        setTimeout(() => {
                            if (node.fils[0] != undefined) $('#ligne' + node.frereRedistribution.id + '_' + node.frereFils[node.frereFils.length - 1].id).remove();
                            $('#noeud_' + noeud.valeur[0]).remove();
                            $('#valeur_' + noeud.valeur[0]).remove();
                            let posX = node.x;
                            let posY = node.y + 33.33;
                            let desX = 0;
                            let desY = 0;
                            if (node.fils[0] != undefined) desX = node.frereFils[node.frereFils.length - 1].x + 33.33 * (node.frereFils[node.frereFils.length - 1].nbValeur) / 2;
                            if (node.fils[0] != undefined) desY = node.frereFils[node.frereFils.length - 1].y;
                            if (node.fils[0] != undefined) document.querySelector("#ligne").innerHTML += `<path  id="ligne` + node.noeud.id + `_` + node.frereFils[node.frereFils.length - 1].id + `" d="M` + posX + `,` + posY + `L` + desX + `,` + desY + `" stroke="#333" stroke-width="3" style="display:none;"></path>`;


                            posX = node.x;
                            let z = node.y;
                            let textPos = 16.665 + posX;
                            let texthei = z + 20;
                            document.getElementById(node.noeud.id).innerHTML += '<rect id="noeud_1' + node.noeud.valeur[0] + '" class="noeud_' + node.noeud.id + '_0" x="' + posX + '"y="' + z + '"  width="33.33" height="33.33" style="display:none;"     ></rect> '
                            document.getElementById('valeur_' + noeud.id).innerHTML += '<text id="valeur_1' + node.noeud.valeur[0] + '" class="valeur_' + node.noeud.id + '_0" x="' + textPos + '" y="' + texthei + '" style="display:none;" >' + node.noeud.valeur[0] + '</text>';
                            setTimeout(() => {
                                if (node.fils[0] != undefined) $('#ligne' + node.noeud.id + '_' + node.frereFils[node.frereFils.length - 1].id).fadeIn(1000 * coef);
                                $('#noeud_1' + node.noeud.valeur[0]).fadeIn(1000 * coef);
                                $('#valeur_1' + node.noeud.valeur[0]).fadeIn(1000 * coef);
                                setTimeout(() => {
                                    $('#noeud_' + node.frereValeur[node.frereValeur.length - 2]).fadeOut(1000 * coef);
                                    $('#valeur_' + node.frereValeur[node.frereValeur.length - 2]).fadeOut(1000 * coef);
                                    setTimeout(() => {
                                        $('#noeud_' + node.frereValeur[node.frereValeur.length - 2]).remove();
                                        $('#valeur_' + node.frereValeur[node.frereValeur.length - 2]).remove();
                                        posX = node.noeud.parent.x + 33.33 * (node.positionPere - 1);
                                        let z = node.y - 75;
                                        let textPos = 16.665 + posX;
                                        let texthei = z + 20;
                                        document.getElementById(node.noeud.parent.id).innerHTML += '<rect id="noeud_1' + node.frereValeur[node.frereValeur.length - 2] + '" class="noeud_' + node.noeud.id + '_0" x="' + posX + '"y="' + z + '"  width="33.33" height="33.33" style="display:none;"     ></rect> '
                                        document.getElementById('valeur_' + noeud.parent.id).innerHTML += '<text id="valeur_1' + node.frereValeur[node.frereValeur.length - 2] + '" class="valeur_' + node.noeud.id + '_0" x="' + textPos + '" y="' + texthei + '" style="display:none;" >' + node.frereValeur[node.frereValeur.length - 2] + '</text>';
                                        setTimeout(() => {
                                            $('#noeud_1' + node.frereValeur[node.frereValeur.length - 2]).fadeIn(1000 * coef);
                                            $('#valeur_1' + node.frereValeur[node.frereValeur.length - 2]).fadeIn(1000 * coef);
                                            algorithme(7, 7);
                                            document.getElementById('instruction').innerHTML = '<p> Fin de la redistribution,Fin de l\'insertion  </p>';
                                        }, 1000 * coef);


                                    }, 1000 * coef);

                                }, 1000 * coef);
                            }, 1000 * coef);
                        }, 1000 * coef);



                    }, temp * coef);
                    temp += 4000;




                } else //le noeud frere est droit 
                {
                    setTimeout(() => {
                        algorithme(4, 7);
                        if (node.fils[0] != undefined) $('#ligne' + node.frereRedistribution.id + '_' + node.frereFils[0].id).fadeOut(1000 * coef);
                        $('#noeud_' + noeud.valeur[node.noeud.nbValeur - 1]).fadeOut(1000 * coef);
                        $('#valeur_' + noeud.valeur[node.noeud.nbValeur - 1]).fadeOut(1000 * coef);
                        setTimeout(() => {
                            if (node.fils[0] != undefined) $('#ligne' + node.frereRedistribution.id + '_' + node.frereFils[0].id).remove();
                            $('#noeud_' + noeud.valeur[node.noeud.nbValeur - 1]).remove();
                            $('#valeur_' + noeud.valeur[node.noeud.nbValeur - 1]).remove();
                            let posX = node.x + 33.33 * node.noeud.nbValeur;
                            let posY = node.y + 33.33;
                            let desX = 0;
                            let desY = 0;
                            if (node.fils[0] != undefined) desX = node.frereFils[0].x + 33.33 * (node.frereFils[0].nbValeur) / 2;
                            if (node.fils[0] != undefined) desY = node.frereFils[0].y;
                            if (node.fils[0] != undefined) document.querySelector("#ligne").innerHTML += `<path  id="ligne` + node.noeud.id + `_` + node.frereFils[0].id + `" d="M` + posX + `,` + posY + `L` + desX + `,` + desY + `" stroke="#333" stroke-width="3" style="display:none;"></path>`;


                            posX = node.x + 33.33 * (node.noeud.nbValeur - 1);
                            let z = node.y;
                            let textPos = 16.665 + posX;
                            let texthei = z + 20;
                            document.getElementById('instruction').innerHTML = '<p> remplacement des valeurs  </p>';
                            document.getElementById(node.noeud.id).innerHTML += '<rect id="noeud_1' + node.noeud.valeur[node.noeud.nbValeur - 1] + '" class="noeud_' + node.noeud.id + '_' + (node.noeud.nbValeur - 1) + '" x="' + posX + '"y="' + z + '"  width="33.33" height="33.33" style="display:none;"     ></rect> '
                            document.getElementById('valeur_' + noeud.id).innerHTML += '<text id="valeur_1' + node.noeud.valeur[node.noeud.nbValeur - 1] + '" class="valeur_' + node.noeud.id + '_' + (node.noeud.nbValeur - 1) + '" x="' + textPos + '" y="' + texthei + '" style="display:none;" >' + node.noeud.valeur[node.noeud.nbValeur - 1] + '</text>';
                            setTimeout(() => {
                                if (node.fils[0] != undefined) $('#ligne' + node.noeud.id + '_' + node.frereFils[0].id).fadeIn(1000 * coef);
                                $('#noeud_1' + node.noeud.valeur[node.noeud.nbValeur - 1]).fadeIn(1000 * coef);
                                $('#valeur_1' + node.noeud.valeur[node.noeud.nbValeur - 1]).fadeIn(1000 * coef);
                                $('#noeud_' + node.noeud.parent.valeur[node.positionPere]).fadeOut(1000 * coef);
                                $('#valeur_' + node.noeud.parent.valeur[node.positionPere]).fadeOut(1000 * coef);
                                setTimeout(() => {
                                    $('#noeud_' + node.noeud.parent.valeur[node.positionPere]).remove();
                                    $('#valeur_' + node.noeud.parent.valeur[node.positionPere]).remove();
                                    posX = node.noeud.parent.x + 33.33 * (node.positionPere);
                                    let z = node.y - 75;
                                    let textPos = 16.665 + posX;
                                    let texthei = z + 20;
                                    document.getElementById(node.noeud.parent.id).innerHTML += '<rect id="noeud_1' + node.noeud.parent.valeur[node.positionPere] + '" class="noeud_' + node.noeud.parent.id + '_' + node.positionPere + '" x="' + posX + '"y="' + z + '"  width="33.33" height="33.33" style="display:none;"     ></rect> '
                                    document.getElementById('valeur_' + noeud.parent.id).innerHTML += '<text id="valeur_1' + node.noeud.parent.valeur[node.positionPere] + '" class="valeur_' + node.noeud.parent.id + '_' + node.positionPere + '" x="' + textPos + '" y="' + texthei + '" style="display:none;" >' + node.noeud.parent.valeur[node.positionPere] + '</text>';
                                    setTimeout(() => {
                                        $('#noeud_1' + node.noeud.parent.valeur[node.positionPere]).fadeIn(1000 * coef);
                                        $('#valeur_1' + node.noeud.parent.valeur[node.positionPere]).fadeIn(1000 * coef);
                                        algorithme(7, 7);
                                        document.getElementById('instruction').innerHTML = '<p> Fin de la redistribution,fin de l\'insertion</p>';

                                    }, 1000 * coef);
                                }, 1000 * coef);
                            }, 1000 * coef);
                        }, 1000 * coef);

                    }, temp * coef);
                    temp += 5000;
                    let e = 0;


                }
            } else // il n'y a pas redistribution 
            if (node.fusion) //si il 'y a fusion entre le noeud et son frere
            {
                setTimeout(() => {
                    document.getElementById('instruction').innerHTML = '<p> le noeud est sous chargé,Fusion avec un noeud frere </p>';
                }, 1000 * coef);
                temp += 1000;
                if (node.positionPere > node.positionFrere) // si le frere est gauche 
                {
                    setTimeout(() => {
                        algorithme(5, 7);

                        document.getElementById('instruction').innerHTML = '<p> les deux noeuds vont fusioner pour devenir un seul </p>';

                        if (node.fils[0] != undefined) $('#ligne' + node.noeud.id + '_' + node.fils[0].id).fadeOut(1000 * coef);
                        setTimeout(() => {
                            if (node.fils[0] != undefined) $('#ligne' + node.noeud.id + '_' + node.fils[0].id).remove();
                            //  $('#noeud_'+node.frereFusion.valeur[node.frereValeur.length-1]).remove();
                            // $('#valeur_'+node.frereFusion.valeur[node.frereValeur.length-1]).remove();
                            let posX = node.redis_fusionX + 33.33 * (node.frereValeur.length);
                            let posY = node.redis_fusionY + 33.33;
                            let desX = 0;
                            let desY = 0;
                            if (node.fils[0] != undefined) desX = node.fils[0].x + 33.33 * (node.fils[0].nbValeur) / 2;
                            if (node.fils[0] != undefined) desY = node.frereFils[0].y;
                            if (node.fils[0] != undefined) document.querySelector("#ligne").innerHTML += `<path  id="ligne` + node.frereFusion.id + `_` + node.fils[0].id + `" d="M` + posX + `,` + posY + `L` + desX + `,` + desY + `" stroke="#333" stroke-width="3" style="display:none;"></path>`;
                            document.getElementById('instruction').innerHTML = '<p> les fils du noeud passe au frere </p>';

                            posX = node.redis_fusionX + 33.33 * (node.frereValeur.length - 1);

                            let z = node.redis_fusionY;
                            let textPos = 16.665 + posX;
                            let texthei = z + 20;
                            document.getElementById(node.frereFusion.id).innerHTML += '<rect id="noeud_1' + node.frereFusion.valeur[node.frereValeur.length - 1] + '" class="noeud_' + node.frereFusion.id + '_' + (node.frereValeur.length - 1) + '" x="' + posX + '"y="' + z + '"  width="33.33" height="33.33" style="display:none;"     ></rect> '
                            document.getElementById('valeur_' + node.frereFusion.id).innerHTML += '<text id="valeur_1' + node.frereFusion.valeur[node.frereValeur.length - 1] + '" class="valeur_' + node.frereFusion.id + '_' + (node.frereValeur.length - 1) + '" x="' + textPos + '" y="' + texthei + '" style="display:none;" >' + node.frereFusion.valeur[node.frereValeur.length - 1] + '</text>';
                            setTimeout(() => {
                                if (node.fils[0] != undefined) $('#ligne' + node.frereFusion.id + '_' + node.fils[0].id).fadeIn(1000 * coef);
                                $('#noeud_1' + node.frereFusion.valeur[node.frereValeur.length - 1]).fadeIn(1000 * coef);
                                $('#valeur_1' + node.frereFusion.valeur[node.frereValeur.length - 1]).fadeIn(1000 * coef);
                                $('#ligne' + node.parent.id + '_' + node.noeud.id).fadeOut(1000 * coef);
                                setTimeout(() => {
                                    $('#ligne' + node.parent.id + '_' + node.noeud.id).remove();
                                }, 1000 * coef);

                            }, 1000 * coef);
                        }, 1000 * coef);

                    }, temp * coef);
                    temp += 6000;


                    let u = 0;
                    for (let i = 0; i < node.noeud.nbValeur; i++) {
                        setTimeout(() => {


                            {
                                let j = node.x + 33.33 * i;
                                $('#noeud_' + node.noeud.valeur[i]).fadeOut(1000 * coef);
                                $('#valeur_' + node.noeud.valeur[i]).fadeOut(1000 * coef);
                                if (node.fils[i + 1] != undefined) $('#ligne' + node.noeud.id + '_' + node.fils[i + 1].id).fadeOut(1000 * coef);
                                setTimeout(() => {
                                    $('#noeud_' + node.noeud.valeur[i]).remove();
                                    $('#valeur_' + node.valeur[i]).remove();
                                    if (node.fils[i + 1] != undefined) $('#ligne' + node.noeud.id + '_' + node.fils[i + 1].id).remove();
                                    let posX = node.redis_fusionX + 33.33 * (node.frereValeur.length + i);
                                    let posY = node.redis_fusionY + 33.33;
                                    let desX = 0;
                                    let desY = 0;
                                    if (node.fils[i + 1] != undefined) desX = node.fils[i + 1].x + 33.33 * (node.fils[i + 1].nbValeur) / 2;
                                    if (node.fils[i + 1] != undefined) desY = node.frereFils[0].y;
                                    if (node.fils[i + 1] != undefined) document.querySelector("#ligne").innerHTML += `<path  id="ligne` + node.frereFusion.id + `_` + node.fils[i + 1].id + `" d="M` + posX + `,` + posY + `L` + desX + `,` + desY + `" stroke="#333" stroke-width="3" style="display:none;"></path>`;

                                    posX = node.redis_fusionX + 33.33 * (node.frereValeur.length + i);

                                    let z = node.redis_fusionY;
                                    let textPos = 16.665 + posX;
                                    let texthei = z + 20;
                                    document.getElementById(node.frereFusion.id).innerHTML += '<rect id="noeud_1' + node.noeud.valeur[i] + '" class="noeud_' + node.frereFusion.id + '_' + (node.frereValeur.length - 1 + u) + '" x="' + posX + '"y="' + z + '"  width="33.33" height="33.33" style="display:none;"     ></rect> '
                                    document.getElementById('valeur_' + node.frereFusion.id).innerHTML += '<text id="valeur_1' + node.noeud.valeur[i] + '" class="valeur_' + node.frereFusion.id + '_' + (node.frereValeur.length - 1 + u) + '" x="' + textPos + '" y="' + texthei + '" style="display:none;" >' + node.noeud.valeur[i] + '</text>';
                                    setTimeout(() => {
                                        document.getElementById('instruction').innerHTML = '<p> les valeurs et les fils du noeud passe au frere </p>';
                                        if (node.fils[i + 1] != undefined) $('#ligne' + node.frereFusion.id + '_' + node.fils[i + 1].id).fadeIn(1000 * coef);
                                        $('#noeud_1' + node.noeud.valeur[i]).fadeIn(1000 * coef);
                                        $('#valeur_1' + node.noeud.valeur[i]).fadeIn(1000 * coef);

                                    }, 1000 * coef);

                                }, 1000 * coef);
                            }



                        }, temp * coef);

                        temp += 3000;
                    }
                    if (node.fils[node.noeud.nbValeur + 1] != undefined) {
                        setTimeout(() => {


                            $('#ligne' + node.noeud.id + '_' + node.fils[node.noeud.nbValeur + 1].id).fadeOut(1000 * coef);
                            setTimeout(() => {
                                $('#ligne' + node.noeud.id + '_' + node.fils[node.noeud.nbValeur + 1].id).remove();
                                let posX = node.redis_fusionX + 33.33 * (node.frereValeur.length + node.noeud.nbValeur);
                                let posY = node.redis_fusionY + 33.33;
                                let desX = 0;
                                let desY = 0;
                                desX = node.fils[node.noeud.nbValeur + 1].x + 33.33 * (node.fils[node.noeud.nbValeur + 1].nbValeur) / 2;
                                desY = node.frereFils[0].y;
                                document.querySelector("#ligne").innerHTML += `<path  id="ligne` + node.frereFusion.id + `_` + node.fils[node.noeud.nbValeur + 1].id + `" d="M` + posX + `,` + posY + `L` + desX + `,` + desY + `" stroke="#333" stroke-width="3" style="display:none;"></path>`;
                                setTimeout(() => {
                                    $('#ligne' + node.frereFusion.id + '_' + node.fils[node.noeud.nbValeur + 1].id).fadeIn(1000 * coef);
                                    algorithme(6, 7);
                                    document.getElementById('instruction').innerHTML = '<p> Maj valeur A suprimer et noeud //Aller a Supression interne  </p>';
                                }, 1000 * coef);
                            }, 1000 * coef);
                        }, (temp - 1000) * coef);
                        temp += 2000;
                    }

                } else //le noeud frere est droit 
                {
                    setTimeout(() => {
                        algorithme(5, 7);
                        document.getElementById('instruction').innerHTML = '<p>fusion avec le frere suivant  </p>';

                        if (node.frereFils[0] != undefined) $('#ligne' + node.frereFusion.id + '_' + node.frereFils[0].id).fadeOut(1000 * coef);
                        setTimeout(() => {
                            if (node.frereFils[0] != undefined) $('#ligne' + node.frereFusion.id + '_' + node.frereFils[0].id).remove();
                            let posX = node.x + 33.33 * (node.valeur.length);
                            let posY = node.y + 33.33;
                            let desX = 0;
                            let desY = 0;
                            if (node.frereFils[0] != undefined) desX = node.frereFils[0].x + 33.33 * (node.frereFils[0].nbValeur) / 2;
                            if (node.frereFils[0] != undefined) desY = node.frereFils[0].y;
                            if (node.frereFils[0] != undefined) document.querySelector("#ligne").innerHTML += `<path  id="ligne` + node.noeud.id + `_` + node.frereFils[0].id + `" d="M` + posX + `,` + posY + `L` + desX + `,` + desY + `" stroke="#333" stroke-width="3" style="display:none;"></path>`;
                            document.getElementById('instruction').innerHTML = '<p> changement de chainage  </p>';

                            posX = node.x + 33.33 * (node.valeur.length - 1);

                            let z = node.y;
                            let textPos = 16.665 + posX;
                            let texthei = z + 20;
                            document.getElementById(node.noeud.id).innerHTML += '<rect id="noeud_1' + node.noeud.valeur[node.valeur.length - 1] + '" class="noeud_' + node.noeud.id + '_' + node.valeur + '" x="' + posX + '"y="' + z + '"  width="33.33" height="33.33" style="display:none;"     ></rect> '
                            document.getElementById('valeur_' + node.noeud.id).innerHTML += '<text id="valeur_1' + node.noeud.valeur[node.valeur.length - 1] + '" class="valeur_' + node.noeud.id + '_' + node.valeur.length + '" x="' + textPos + '" y="' + texthei + '" style="display:none;" >' + node.noeud.valeur[node.valeur.length - 1] + '</text>';
                            setTimeout(() => {
                                if (node.frereFils[0] != undefined) $('#ligne' + node.noeud.id + '_' + node.frereFils[0].id).fadeIn(1000 * coef);
                                $('#noeud_1' + node.noeud.valeur[node.valeur.length - 1]).fadeIn(1000 * coef);
                                $('#valeur_1' + node.noeud.valeur[node.valeur.length - 1]).fadeIn(1000 * coef);
                                document.getElementById('instruction').innerHTML = '<p> remplacement des nouvelles valeurs  </p>';
                                $('#ligne' + node.parent.id + '_' + node.frereFusion.id).fadeOut(1000 * coef);
                                setTimeout(() => {
                                    $('#ligne' + node.parent.id + '_' + node.frereFusion.id).remove();
                                }, 1000 * coef);

                            }, 1000 * coef);
                        }, 1000 * coef);

                    }, temp * coef);
                    temp += 6000;


                    let u = 0;
                    for (let i = 0; i < node.frereValeur.length - 1; i++) {
                        setTimeout(() => {

                            document.getElementById('instruction').innerHTML = '<p> passages des valeurs et fils du frere au noeud </p>'; {
                                let j = node.x + 33.33 * i;
                                $('#noeud_' + node.frereFusion.valeur[i]).fadeOut(1000 * coef);
                                $('#valeur_' + node.frereFusion.valeur[i]).fadeOut(1000 * coef);
                                if (node.fils[i] != undefined) $('#ligne' + node.frereFusion.id + '_' + node.frereFils[i + 1].id).fadeOut(1000 * coef);
                                setTimeout(() => {
                                    $('#noeud_' + node.frereFusion.valeur[i]).remove();
                                    $('#valeur_' + node.frereFusion.valeur[i]).remove();
                                    if (node.frereFils[i] != undefined) $('#ligne' + node.frereFusion.id + '_' + node.frereFils[i + 1].id).remove();
                                    let posX = node.x + 33.33 * (node.valeur.length + 1 + i);
                                    let posY = node.y + 33.33;
                                    let desX = 0;
                                    let desY = 0;
                                    if (node.frereFils[i] != undefined) desX = node.frereFils[i + 1].x + 33.33 * (node.frereFils[i + 1].nbValeur) / 2;
                                    if (node.frereFils[i] != undefined) desY = node.frereFils[0].y;
                                    if (node.frereFils[i] != undefined) document.querySelector("#ligne").innerHTML += `<path  id="ligne` + node.noeud.id + `_` + node.frereFils[i + 1].id + `" d="M` + posX + `,` + posY + `L` + desX + `,` + desY + `" stroke="#333" stroke-width="3" style="display:none;"></path>`;

                                    posX = node.x + 33.33 * (node.valeur.length + i);

                                    let z = node.y;
                                    let textPos = 16.665 + posX;
                                    let texthei = z + 20;
                                    document.getElementById(node.noeud.id).innerHTML += '<rect id="noeud_1' + node.frereFusion.valeur[i] + '" class="noeud_' + node.noeud.id + '_' + (node.valeur.length + u) + '" x="' + posX + '"y="' + z + '"  width="33.33" height="33.33" style="display:none;"     ></rect> '
                                    document.getElementById('valeur_' + node.noeud.id).innerHTML += '<text id="valeur_1' + node.frereFusion.valeur[i] + '" class="valeur_' + node.noeud.id + '_' + (node.valeur.length + u) + '" x="' + textPos + '" y="' + texthei + '" style="display:none;" >' + node.frereFusion.valeur[i] + '</text>';
                                    setTimeout(() => {
                                        if (node.frereFils[i] != undefined) $('#ligne' + node.noeud.id + '_' + node.frereFils[i + 1].id).fadeIn(1000 * coef);
                                        $('#noeud_1' + node.frereFusion.valeur[i]).fadeIn(1000 * coef);
                                        $('#valeur_1' + node.frereFusion.valeur[i]).fadeIn(1000 * coef)
                                    }, 1000 * coef);

                                }, 1000 * coef);
                            }



                        }, temp * coef);

                        temp += 3000;
                    }
                    setTimeout(() => {
                        algorithme(6, 7);
                        document.getElementById('instruction').innerHTML = '<p> la supression passe au noeud pere //aller a supression interne  </p>';
                    }, temp * coef);
                }



            } else // ni fusion ni redistribution
            if (node.nouvelleRacine) //une nouvelle racine 
            {

                for (let i = 0; i < node.fils.length; i++) {
                    setTimeout(() => {


                        if (node.fils[i] != undefined) {
                            document.getElementById('instruction').innerHTML = '<p>le fils de la racine devient la nouvelle racine de l\arbre</p> ';
                            $('#ligne' + node.id + '_' + node.fils[i].id).fadeOut(1000 * coef);
                            setTimeout(() => {
                                $('#ligne' + node.id + '_' + node.fils[i].id).remove();
                                algorithme(7, 7);
                                document.getElementById('instruction').innerHTML = '<p> fin de la supression et du reequilibrage de l\'arbre </p>';
                                setTimeout(() => {
                                    node.fils[i].setPosition(1800, 50, coef);
                                    this.removeAll(coef);
                                    node.fils[i].parcourt(this, coef);
                                }, 1000 * coef);
                            }, 1000 * coef);
                        }
                    }, temp * coef);
                    temp += 1000;
                }




            }
        }
    }
    /**animer la fin de l'algorithme  */
    setTimeout(() => {
        algorithme(7, 7);
        document.getElementById('instruction').innerHTML = '<p>Fin de la suppresion avec succés </p>';
    }, temp * coef);
    temp += 1000;
    return { temp: temp };
};

function maxLengthCheck(object) { //fonction qui bloque la zone de saisie si on a saisie un nombre de 3 chiffres
    if (object.value.length > object.maxLength || object.value > object.max) {
        if (object.value.length > object.maxLength) object.value = object.value.slice(0, object.maxLength);
        else object.value = object.value.slice(0, object.maxLength - 1)
    }

}

function verifSaisie(valeur, menu, coef) { //fonction qui verifie si la valeur saisie est valide 
    var vrai = false;

    if (isNaN(valeur) || valeur <= 0) {

        alert('la valeur  saisie est invalide ,entrez une valeur comprise entre 1 et 999');
    } else vrai = true;
    return { vrai: vrai };
}
UI.prototype.reorganisation = function(coef, tab, tree) { //fonction qui reorganise le fichier   
    document.getElementById('code').innerHTML = algo_requi;
    document.getElementById('instruction').innerHTML = '<p> insertion des valeurs une aprés l\'autre suivant un ordre bien précis</p>'
    let taille = tab.length;
    //tab contient les valeur de l'arbre trié 
    let ecr = tree.entete.blocs;
    tree.entete = new EnteteArb(); //initialisation de la nouvelle valeur de l'entete
    if (tree.degre != 2) //si l'arbre n'est pas  d'ordre 2 
    {
        for (let i = 0; i < Math.trunc(tab.length / tree.degre) + 1; i++) {

            for (let j = 1; j < tree.degre + 1; j++) {
                let temp = tree.addValue(tab[j * (Math.trunc(tab.length / tree.degre) + 1) - i - 1], coef).temp;
            }
        }
    } else // l'arbre est d'ordre  2 
    {
        let j = Math.trunc(taille / 2) - 1;
        let taille_ = taille - 1;
        let bi = Math.trunc(j / 2);
        let bs = j + Math.trunc((taille - j) / 2);
        let j_ = j;
        /**on divise les valeurs en 2 parties aprés les 2 partie seront aussi divisée en 2 ... */
        /**on insere les valeurs du milieu a chaque fois  */
        while (bi > 0 || bs < (taille - 1)) {
            let temp = tree.addValue(tab[j], coef).temp;
            let temp_ = tree.addValue(tab[bi], coef).temp;
            let temp__ = tree.addValue(tab[bs], coef).temp;
            bi = Math.trunc(bi / 2);
            bs += Math.trunc((taille - bs) / 2);
        }
        for (let i = 0; i < Math.trunc(taille / 2) + 1; i++) { //on insere le reste des valeurs 
            if (tab[i + Math.trunc(taille / 2)] != undefined) temp = tree.addValue(tab[i + Math.trunc(taille / 2)], coef).temp;
            if (tab[Math.trunc(taille / 2) - i] != undefined) temp_ = tree.addValue(tab[Math.trunc(taille / 2) - i], coef).temp;

        }

    }
    tree.root.parcourt(this, coef);
    ecriture = tree.entete.blocs;
    lecture = ecr;
}
Node.prototype.parcourtValeur = function(coef, tab) { //fonction de parcourt qui recupert les valeurs dans l'ordre 

    for (let i = 0; i < this.nbValeur + 1; i++) {

        if (this.fils[i] != undefined) this.fils[i].parcourtValeur(coef, tab); //appel recurssif 
        if (i != (this.nbValeur)) {
            if (this.supp.indexOf(i) == -1)
                tab.push(this.valeur[i]);
        }
    }


    return { tab: tab }
}
const algo_requi = `<p id="procedure">Procedure Equilibrage(racine) </p>
<p id="algo1">Soit tab:tableau;  parcourt(racine,tab);  </p>
<p id="algo2" >Pour i=0 à i==tab.taille/racine.degre, i++</p> 
<p id="algo3" >&nbsp;&nbsp;&nbsp;&nbsp; pour j=1 a j==racine.degre</p>
<p id="algo4">&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;f=taille/racine.degre Insertion(tab[j*f-i]) </p>
<p id="algo5">&nbsp;&nbsp;&nbsp;&nbsp; Fpour </p>
<p id="algo6" >Fpour</p> 
<p id="algo7"> Fin</p>`;