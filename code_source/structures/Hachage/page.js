const en_ligne = document.getElementById('aide_en_ligne');
var slider = document.getElementById('speedControler').getElementsByTagName('input').item(0);
const k1 = document.getElementById('travail_hachage'); // recuprer la division totale de html
const ajouter = document.getElementById('code'); //ajouter pour importer les algorithmes
var menu = document.getElementById('menu'); // pour acceder aux opérations
const separe_tab = document.createElement('div'); //pour travailler avec le chinage seapré sur les ta
const separe_fich = document.createElement('div'); //pour travailler avec le chinage separé sur les fichiers
const essai_tab = document.createElement('div'); //travailler avec l'essai lineaire sur les tableaux
var table = document.createElement('table');
const essai_fich = document.createElement('div'); // travailler avec l'essa lineaire sur les fichiers.
essai_fich.id = "div_essai_fich";
separe_fich.id = "div_separe_fich";
essai_tab.id = "div_essai_tab";
separe_tab.id = 'div_separe_tab';
let val = document.createElement('input');
val.type = 'number'; //input de type number
val.style.marginLeft = '40px';
let val2 = document.createElement('input');
val2.type = 'number';
val2.style.marginLeft = '90px';
let val_tab_separe = document.createElement('input');
val_tab_separe.type = 'number';
val_tab_separe.style.background = 'red';
val_tab_separe.placeholder = 'taille';
let creez = document.createElement('p');
creez.style.color = 'red';
creez.style.marginLeft = '100px';
let nbr_bloc = document.createElement('input');
nbr_bloc.placeholder = 'nb_bloc';
nbr_bloc.style.background = 'red';
let nbr_enreg = document.createElement('input');
nbr_enreg.placeholder = 'nb_enrg';
nbr_enreg.style.background = 'red';

function aller_separe_fichier() {
    // traitement de separe_fichier
    var creer = document.createElement('p');
    creer.innerText = 'Creation Commandee';
    creer.className = 'selection';
    var chercher = document.createElement('p');
    chercher.innerText = 'Recherche';
    chercher.className = 'selection';
    var inserer = document.createElement('p');
    inserer.innerText = 'Insertion';
    inserer.className = 'selection';
    var supprimer = document.createElement('p');
    supprimer.innerText = 'Suppression';
    supprimer.className = 'selection';
    var creer_alea = document.createElement('p');
    creer_alea.innerText = 'Creation Aleatoire';
    creer_alea.className = 'selection';
    essai_tab.style.display = 'none';
    essai_fich.style.display = 'none';
    separe_tab.style.display = 'none';
    en_ligne.style.display = 'none';
    separe_fich.style.display = 'inline';
    if (menu.getElementsByTagName('p').length > 0) {
        menu.getElementsByTagName('p').item(0).remove();
        menu.getElementsByTagName('p').item(0).remove();
        menu.getElementsByTagName('p').item(0).remove();
        menu.getElementsByTagName('p').item(0).remove();
        menu.getElementsByTagName('p').item(0).remove();
        //on supprime le menu qui est avant.
    }
    /** on actualise le menu par des nouvelles operations de cette partie **/
    document.getElementById('menu').appendChild(creer);
    creer.id = 'creer_separe_fichier'; // pour creer un fichier
    document.getElementById('menu').appendChild(creer_alea);
    creer_alea.id = 'creer_separe_fichier_aleatoire'; // creation aleatoire de fichier
    document.getElementById('menu').appendChild(chercher);
    chercher.id = 'chercher_separe_fichier'; // operation de recherche
    document.getElementById('menu').appendChild(inserer);
    inserer.id = 'inserer_separe_fichier'; // operation d'insertion
    document.getElementById('menu').appendChild(supprimer);
    supprimer.id = 'supprimer_separe_fichier'; // operationde suppression
    // mise à jour du menu
    document.querySelector('#creer_separe_fichier').addEventListener('mouseover', function(e) {
        e.target.style.backgroundColor = 'black';
    }); //une couleur est ajoutée lorsqu'on sera  sur le <p> creer du menu
    document.querySelector('#creer_separe_fichier').addEventListener('mouseout', function(e) {
        e.target.style.backgroundColor = 'lightseagreen';
    }); //une couleur est ajoutée lorsqu'on sera plus sur le <p> creer du menu
    document.querySelector('#creer_separe_fichier_aleatoire').addEventListener('mouseover', function(e) {
        e.target.style.backgroundColor = 'black';
    }); //une couleur est ajoutée lorsqu'on sera  sur le <p> creation aleatoire du menu
    document.querySelector('#creer_separe_fichier_aleatoire').addEventListener('mouseout', function(e) {
        e.target.style.backgroundColor = 'lightseagreen';
    }); //une couleur est ajoutée lorsqu'on sera plus sur le <p> creation aleatoire du menu
    document.querySelector('#inserer_separe_fichier').addEventListener('mouseover', function(e) {
        e.target.style.backgroundColor = 'black';
    }); //une couleur est ajoutée lorsqu'on sera  sur le <p> insertion du menu
    document.querySelector('#inserer_separe_fichier').addEventListener('mouseout', function(e) {
        e.target.style.backgroundColor = 'lightseagreen';
    }); //une couleur est ajoutée lorsqu'on sera plus sur le <p> creation aleatoire du menu
    document.querySelector('#chercher_separe_fichier').addEventListener('mouseover', function(e) {
        e.target.style.backgroundColor = 'black';
    }); //une couleur est ajoutée lorsqu'on sera  sur le <p> rechercher du menu
    document.querySelector('#chercher_separe_fichier').addEventListener('mouseout', function(e) {
        e.target.style.backgroundColor = 'lightseagreen';
    }); //une couleur est ajoutée lorsqu'on sera plus sur le <p> recherche du menu
    document.querySelector('#supprimer_separe_fichier').addEventListener('mouseover', function(e) {
        e.target.style.backgroundColor = 'black';
    }); //une couleur est ajoutée lorsqu'on sera sur le <p> supprimer du menu
    document.querySelector('#supprimer_separe_fichier').addEventListener('mouseout', function(e) {
        e.target.style.backgroundColor = 'lightseagreen';
    }); //une couleur est ajoutée lorsqu'on sera plus sur le <p> supprimer du menu
    k1.appendChild(separe_fich);
    document.getElementById('div_separe_fich').style.display = 'inline';
    /** et on fait masquer toutes les autres divisions les lignes 110 111 112 113**/
    document.getElementById('title').getElementsByTagName('a').item(1).style.color = '#fff';
    document.getElementById('title').getElementsByTagName('a').item(2).style.color = 'red';
    document.getElementById('title').getElementsByTagName('a').item(3).style.color = '#fff';
    document.getElementById('title').getElementsByTagName('a').item(4).style.color = '#fff';
    /**
     ON ASSOCIE A CHAQUE OPERATION UN EVENEMENT DANS LES LIGNES 117 118 119 120 121
      **/
    document.getElementById('supprimer_separe_fichier').addEventListener('click', supprission_separe_fichier);
    document.getElementById('creer_separe_fichier_aleatoire').addEventListener('click', creer_separe_fichier_aleatoire);
    document.getElementById('chercher_separe_fichier').addEventListener('click', chercher_separe_fichier);
    document.getElementById('inserer_separe_fichier').addEventListener('click', insertion_separe_fichier);
    document.getElementById('creer_separe_fichier').addEventListener('click', creer_separe_fichier);

}

function creer_separe_fichier_aleatoire() {
    /** la fonction de creation aleatoire **/
    if (separe_fich.getElementsByTagName('input').length == 0) {
        // pour verifier si le fchier est creé par avant ou non.
        let p = document.createElement('p');
        p.innerHTML = 'fichier 3 blocs de 4 enregistrements';
        // ce message a comme but de donner les nombres générés aleatoirement.
        separe_fich.appendChild(p);
        p.style.marginLeft = '40px';
        setTimeout(() => {
            separe_fich.getElementsByTagName('p').item(0).remove();
            //on le lance,et apres 3s on le supprime
        }, 3000);
        for (let i = 0; i < 3; i++) {
            // i commence de 0 à 3
            var ligne = document.createElement('tr');
            var cellule = document.createElement('td');
            for (let j = 0; j < 4; j++) {
                // j de 0 à 4
                if (j == 3) {
                    // pour la derniere case on doit specifier le champ lien 00
                    var text = document.createElement('input');
                    text.type = 'button';
                    text.style.marginLeft = '50px';
                    text.style.minWidth = '30px';
                    text.value = '00';
                    text.style.background = 'aqua';
                    cellule.appendChild(text);
                } else {
                    // sinon on cree 4 inputs par bloc alors les enregistrements sont des inputs.
                    var text = document.createElement('input');
                    text.type = 'button';
                    text.style.marginLeft = '50px';
                    text.style.minWidth = '60px';
                    text.style.display = 'flex'; // pour garder les blocs
                    cellule.appendChild(text);
                    text.style.background = 'aqua';
                }

            }
            ligne.appendChild(cellule); //on ajoute les case crées à la ligne
            table.appendChild(ligne); // on ajoute la ligne à la table
            separe_fich.appendChild(table); //apres on ajoute la table à la division de cette méthode
        }
    } else
        alert('fichier deja cree');
    nbr_bloc.value = 3;
    nbr_enreg.value = 3;

}

function creer_separe_fichier() {
    // c'est une creation commandée alors l'utilisateur doit faire entrer les valeurs qui il faut.
    if (separe_fich.getElementsByTagName('input').length == 0) {
        // pour verifier si le fichier est creé par avant (aleatoirement) ou pas.
        let p = document.createElement('p');
        p.innerHTML = 'essayez de creer 3 blocs de 3 enreg pour une bonne visualisation';
        separe_fich.appendChild(p);
        p.style.marginLeft = '40px';
        setTimeout(() => {
            separe_fich.getElementsByTagName('p').item(0).remove();
            // on supprime le message pour ne pas perterber l'utilisateur à chaque fois
        }, 2000);
        separe_fich.style.display = 'inline';
        crez_fichier = document.createElement('p');
        crez_fichier.innerHTML = 'creer->'; // evenement essentiel pour commencer cette opération
        crez_fichier.style.color = 'red';
        nbr_bloc.style.marginLeft = '100px';
        nbr_enreg.style.marginLeft = '100px';
        crez_fichier.style.marginLeft = '100px';
        nbr_bloc.type = 'number';
        nbr_enreg.type = 'number';
        separe_fich.appendChild(nbr_bloc), separe_fich.appendChild(nbr_enreg);
        separe_fich.appendChild(crez_fichier);
        crez_fichier.addEventListener('click', () => {
            nbr_bloc.remove();
            nbr_enreg.remove();
            crez_fichier.remove();
            if (nbr_bloc.value > 0 && nbr_enreg.value > 0) {
                // on n'accept que des valeurs positives qui vont etre entrer.
                for (let i = 0; i < Number(nbr_bloc.value); i++) {
                    var ligne = document.createElement('tr');
                    var cellule = document.createElement('td');
                    for (let j = 0; j < Number(nbr_enreg.value) + 1; j++) {
                        if (j == Number(nbr_enreg.value)) {
                            //pour le dernier enregistrement qui va designer le lien
                            var text = document.createElement('input');
                            text.type = 'button';
                            text.style.marginLeft = '50px';
                            text.style.minWidth = '30px';
                            text.value = '00';
                            text.style.background = 'aqua';
                            cellule.appendChild(text);
                        } else {
                            var text = document.createElement('input');
                            text.type = 'button';
                            text.style.marginLeft = '50px';
                            text.style.minWidth = '60px';
                            text.style.display = 'flex';
                            cellule.appendChild(text);
                            text.style.background = 'aqua';
                        }

                    }
                    ligne.appendChild(cellule);
                    table.appendChild(ligne);
                    separe_fich.appendChild(table);
                }
            }
        });
    } else
        alert('fichier cree aleatoirement');
    // pour dire que le fichier est creé.
}

function chercher_separe_fichier() {
    if (separe_fich.getElementsByTagName('input').length > 0) {
        /** pour verifier que le fichier existe sinon on purra pas acceder à cette fonction **/
        let valeur = document.createElement('input');
        valeur.placeholder = 'value';
        valeur.placeholder = 'value';
        valeur.style.background = 'black';
        valeur.type = 'number';
        valeur.style.marginLeft = '300px';
        valeur.style.color = 'white'; // le type d'ecriture pour que ca soit visible et claire
        let ok_chercher = document.createElement('p');
        ok_chercher.style.color = 'red';
        ok_chercher.innerHTML = 'chercher';
        ok_chercher.style.marginLeft = '300px';
        separe_fich.appendChild(valeur);
        separe_fich.appendChild(ok_chercher);
        ok_chercher.addEventListener('click', () => {
            ok_chercher.remove();
            valeur.remove();
            // on les supprime pour dérouler un seule operation à la fois.
            var vitesse = (Number(slider.value)) * 10;
            var table_html = document.getElementsByTagName('tr');
            if (valeur.value >= 0) {
                /** on s'interesse seulement à les valeurs positives **/
                const l_1 = document.createElement('p');
                l_1.innerText = `TQ NonTrouv(${valeur.value})`;
                const l_2 = document.createElement('p');
                l_2.innerText = `Si NONTrouv OU NonEXISTE : afficher(valeur introuvable);`;
                const l_3 = document.createElement('p');
                l_3.innerText = ` SINON parcours(bloc-actuel)`;
                const l_4 = document.createElement('p');
                l_4.innerText = `Si bloc[i].cle  = ${valeur.value} alors:`;
                const l_5 = document.createElement('p');
                l_5.innerText = `Afficher(valeur existe);`;
                const l_7 = document.createElement('p');
                l_7.innerText = `Sinon :bloc <-- suivant(bloc);`;
                const l_6 = document.createElement('p');
                ajouter.appendChild(l_1);
                ajouter.appendChild(l_2);
                ajouter.appendChild(l_3);
                ajouter.appendChild(l_4);
                ajouter.appendChild(l_5);
                ajouter.appendChild(l_7);
                let te = vitesse;
                let st = 1;
                var t = table_html[valeur.value % nbr_bloc.value].getElementsByTagName('input');
                // t est un tableau sert à recuperer les blocs d'une ligne
                for (let i = 0; i < t.length; i++) {
                    // on parcourt ce tableau de 0 à la son taille
                    setTimeout(() => {
                        l_1.style.background = 'black';
                    }, te);
                    te += vitesse;
                    setTimeout(() => {
                        l_1.style.background = 'coral';
                    }, te);
                    te += vitesse;
                    if (i != nbr_enreg + 1 && i % (nbr_enreg + 1) == 0) {
                        // pour colorer la ligne 7 de l'algorithme."l_7"
                        setTimeout(() => {
                            l_7.style.background = 'black';
                        }, te);
                        te += vitesse;
                        setTimeout(() => {
                            l_7.style.background = 'coral';
                        }, te);
                        te += vitesse;
                        setTimeout(() => {
                            l_3.style.background = 'black';
                        }, te);
                        te += vitesse;
                        setTimeout(() => {
                            l_3.style.background = 'coral';
                        }, te);
                        te += vitesse;
                    }
                    setTimeout(() => {
                        t[i].style.background = 'yellow';
                        l_4.style.background = 'black';
                    }, te);
                    te += vitesse;
                    setTimeout(() => {
                        t[i].style.background = 'aqua';
                        l_4.style.background = 'coral';

                    }, te);
                    te += vitesse;
                    if (Number(t[i].value) == valeur.value) {
                        // ici la valeur est trouvée car on a l'égalité
                        st = 2;
                        setTimeout(() => {
                            t[i].style.background = 'red';
                            l_5.style.background = 'black';
                        }, te);
                        te += vitesse;
                        setTimeout(() => {
                            t[i].style.background = 'aqua';
                            l_5.style.background = 'coral';
                        }, te);
                        te += vitesse;
                        setTimeout(() => {
                            affichage_message.innerHTML = 'La valeur existe';
                        }, te);
                        te += vitesse;
                        setTimeout(() => {
                            affichage_message.innerHTML = '';
                            l_1.remove();
                            l_4.remove();
                            l_2.remove();
                            l_5.remove();
                            l_7.remove();
                            l_3.remove();
                            // on supprime l'algorithme apres la fin de chaque operation
                        }, te);
                        te += vitesse; //incrementation de la vitesse pour colorer la ligne prichaine si elle existe
                        break;
                    }

                }
                if (st != 2) {
                    //si ss ;!=2 alors la valeur n'est pas trouvée voir la ligne 380
                    setTimeout(() => {
                        l_1.style.background = 'black';
                    }, te);
                    te += vitesse;
                    setTimeout(() => {
                        l_1.style.background = 'coral';
                    }, te);
                    te += vitesse;
                    setTimeout(() => {
                        l_2.style.background = 'black';
                    }, te);
                    te += vitesse;
                    setTimeout(() => {
                        l_2.style.background = 'coral';
                    }, te);
                    te += vitesse;
                    setTimeout(() => {
                        affichage_message.innerHTML = 'La valeur est introuvable';
                    }, te);
                    te += vitesse;
                    setTimeout(() => {
                        affichage_message.innerHTML = '';
                        l_1.remove();
                        l_4.remove();
                        l_6.remove();
                        l_2.remove();
                        l_5.remove();
                        l_7.remove();
                        l_3.remove();
                    }, te);
                    te += vitesse;
                }
            } else {
                // sinon lavaleur est négative on pourra pas travailler avec 397
                alert('valeur negative!');
            }

        }); //fin de recherche
    } else alert('creer un fichier pour effectuer les operations');

}

function insertion_separe_fichier() {
    if (separe_fich.getElementsByTagName('input').length > 0) {
        // il faut savoir que le fichier existe sinon on accede pas aux operations du menu associé
        let valeur = document.createElement('input');
        valeur.placeholder = 'value';
        valeur.placeholder = 'value';
        valeur.style.background = 'red';
        valeur.type = 'number';
        valeur.style.marginLeft = '300px';
        let ok_inserer = document.createElement('p');
        ok_inserer.style.color = 'red';
        ok_inserer.innerHTML = 'inserer';
        ok_inserer.style.marginLeft = '300px';
        separe_fich.appendChild(valeur);
        separe_fich.appendChild(ok_inserer);
        ok_inserer.addEventListener('click', () => { // evenement de l'insertion
            ok_inserer.remove();
            valeur.remove();
            var table_html = separe_fich.getElementsByTagName('tr');
            // recuperer les lignes de fichiers
            var tt = table_html[valeur.value % nbr_bloc.value].getElementsByTagName('input');
            //recuperer les cases de cette ligne determinée par la fonction du hachage
            var vitesse = (Number(slider.value)) * 10; //la vitesse est recupérée d'aprés l'horloge.
            if (valeur.value < 0) {
                // on n'insere que des valeurs positives;
                affichage_message.innerHTML = 'Non,La valeur est Negative';
                setTimeout(() => {
                    affichage_message.innerHTML = '';
                }, 2000);
            } else {
                let tmp = vitesse;
                const l_1 = document.createElement('p');
                l_1.innerText = `TQ NonExiste(${valeur.value})`;
                const l_2 = document.createElement('p');
                l_2.innerText = `Si Bloc-plein   alors: `;
                const l_3 = document.createElement('p');
                l_3.innerText = `Sinon parcours(bloc-actuel)`;
                const l_4 = document.createElement('p');
                l_4.innerText = `Si bloc[i].cle  = vide alors:`;
                const l_5 = document.createElement('p');
                l_5.innerText = `bloc[i].cle = ${valeur.value};`;
                const l_7 = document.createElement('p');
                l_7.innerText = `lien<--01;ALLOUER(bloc);\nbloc <-- suivant(bloc);`;
                const l_6 = document.createElement('p');
                l_6.innerText = `Si NonTrouve OU Existe(${valeur.value}): Afficher(Insertion Impossible);`;
                ajouter.appendChild(l_1);
                ajouter.appendChild(l_2);
                ajouter.appendChild(l_7);
                ajouter.appendChild(l_3);
                ajouter.appendChild(l_4);
                ajouter.appendChild(l_5);
                ajouter.appendChild(l_6);
                /** ajouter les lignes de l'algorithme **/
                let cst = 1;
                for (let i = 0; i < tt.length; i++) {
                    if (tt[i].value == '') {
                        cst = 2;
                        break;
                    }
                }
                setTimeout(() => {
                    l_1.style.background = 'black';
                }, tmp);
                tmp += vitesse;
                setTimeout(() => {
                    l_1.style.background = 'coral';
                }, tmp);
                tmp += vitesse;
                if (cst == 2) {
                    // il y a des cases vides dans la structure.
                    setTimeout(() => {
                        l_2.style.background = 'black';
                    }, tmp);
                    tmp += vitesse;
                    setTimeout(() => {
                        l_2.style.background = 'coral';
                    }, tmp);
                    tmp += vitesse;
                    for (let i = 0; i < tt.length; i++) {
                        setTimeout(() => {
                            tt[i].style.background = 'yellow';
                        }, tmp);
                        tmp += vitesse;
                        setTimeout(() => {
                            tt[i].style.background = 'aqua';
                        }, tmp);
                        tmp += vitesse;
                        if (tt[i].value == '') { // une case vide
                            setTimeout(() => {
                                l_4.style.background = 'black';
                                tt[i].style.background = 'red';
                            }, tmp);
                            tmp += vitesse;
                            setTimeout(() => {
                                l_4.style.background = 'coral';
                            }, tmp);
                            tmp += vitesse;
                            setTimeout(() => {
                                l_5.style.background = 'black';
                                tt[i].value = valeur.value;
                            }, tmp);
                            tmp += vitesse;
                            setTimeout(() => {
                                l_5.style.background = 'coral';
                                tt[i].style.background = 'aqua';
                            }, tmp);
                            tmp += vitesse;
                            setTimeout(() => {
                                l_1.remove();
                                l_4.remove();
                                l_6.remove();
                                l_2.remove();
                                l_5.remove();
                                l_7.remove();
                                l_3.remove();
                                // suppression de l'algorithme.
                            }, tmp);
                            tmp += vitesse;
                            break;
                        }
                        if (Number(tt[i].value) == valeur.value) {
                            // si la valeur existe on l'insere pas car l'insertion des doublons interdite 535
                            setTimeout(() => {
                                l_6.style.background = 'black';
                            }, tmp);
                            tmp += vitesse;
                            setTimeout(() => {
                                l_6.style.background = 'coral';
                            }, tmp);
                            tmp += vitesse;
                            affichage_message.innerHTML = 'Non,La cle existait deja';
                            setTimeout(() => {
                                affichage_message.innerHTML = '';
                            }, tmp);
                            tmp += vitesse;
                            setTimeout(() => {
                                l_1.remove();
                                l_4.remove();
                                l_6.remove();
                                l_2.remove();
                                l_5.remove();
                                l_7.remove();
                                l_3.remove();
                                // suppression de l'algorithme
                            }, tmp);
                            tmp += vitesse;
                            break;
                        }
                    }
                } else {
                    //collision
                    tt[tt.length - 1].value = '01'; // mettre à jour le champ lien car on aurra une collision
                    setTimeout(() => {
                        l_7.style.background = 'black';
                    }, tmp);
                    tmp += vitesse;
                    var cell = document.createElement('td');
                    var len = document.createElement('td');
                    let B = document.createElement('p');
                    B.innerText = '--->'; // construire les pointeurs de la liste
                    B.style.background = 'yellow';
                    for (let c = 0; c < (nbr_enreg.value + 1); c++) {
                        if (c == nbr_enreg.value) {
                            let noued = document.createElement('input');
                            noued.type = 'button'; //noued.style.marginLeft='40px';
                            noued.style.background = 'aqua';
                            noued.style.minWidth = '30px';
                            noued.value = '00';
                            cell.appendChild(noued);
                            break;
                        } else {
                            var noued = document.createElement('input');
                            noued.type = 'button'; //noued.style.marginLeft='40px';
                            noued.style.background = 'aqua';
                            noued.style.minWidth = '60px';
                            noued.style.display = 'flex';
                            cell.appendChild(noued);
                        }
                    }
                    len.appendChild(B); //on ajoiute d'aboed le pointeur
                    table_html[Number(valeur.value) % Number(nbr_bloc.value)].appendChild(len);
                    table_html[Number(valeur.value) % Number(nbr_bloc.value)].appendChild(cell);
                    // on ajoute le maillon qui est un bloc dans ce cas sur la meme ligne.
                    setTimeout(() => {
                        l_7.style.background = 'coral';
                    }, tmp);
                    tmp += vitesse;
                    for (let i = 0; i < tt.length; i++) {
                        setTimeout(() => {
                            l_7.style.background = 'coral';
                        }, tmp);
                        tmp += vitesse;
                        setTimeout(() => {
                            l_3.style.background = 'black';
                            tt[i].style.background = 'yellow';
                        }, tmp);
                        tmp += vitesse;
                        setTimeout(() => {
                            l_3.style.background = 'coral';
                            tt[i].style.background = 'aqua';
                        }, tmp);
                        tmp += vitesse;
                        setTimeout(() => {
                            l_4.style.background = 'black';
                        }, tmp);
                        tmp += vitesse;
                        setTimeout(() => {
                            l_4.style.background = 'coral';
                        }, tmp);
                        tmp += vitesse;
                        if (tt[i].value == '') {
                            setTimeout(() => {
                                tt[i].style.background = 'red';
                                l_5.style.background = 'black';

                            }, tmp);
                            tmp += vitesse;
                            setTimeout(() => {
                                tt[i].style.background = 'aqua';
                                tt[i].value = valeur.value; // insertion de la valeur terminée
                            }, tmp);
                            tmp += vitesse;
                            setTimeout(() => {
                                l_5.style.background = 'coral';
                            }, tmp);
                            tmp += vitesse;
                            setTimeout(() => {
                                l_1.remove();
                                l_4.remove();
                                l_6.remove();
                                l_2.remove();
                                l_5.remove();
                                l_7.remove();
                                l_3.remove();
                            }, tmp);
                            tmp += vitesse;
                            break; // stop : sortir de cette boocle
                        }
                    }
                }
            }
        }); // fin insertion
    } else {
        // comme il n'y a pas des enregistrements on pourra pas inserer des valeurs
        alert('aucun fichier est cree');
    }

}

function supprission_separe_fichier() {
    if (separe_fich.getElementsByTagName('input').length > 0) {
        // il faut verifier que le fichier est bien creé
        let valeur = document.createElement('input');
        valeur.placeholder = 'value';
        valeur.placeholder = 'value';
        valeur.style.background = 'red';
        valeur.type = 'number';
        valeur.style.marginLeft = '300px';
        let ok_sup = document.createElement('p');
        ok_sup.style.color = 'red';
        ok_sup.innerHTML = 'supprimer';
        ok_sup.style.marginLeft = '300px';
        separe_fich.appendChild(valeur);
        separe_fich.appendChild(ok_sup);
        ok_sup.addEventListener('click', () => { // evenement de suppression.
            var vitesse = (Number(slider.value)) * 10;
            if (valeur.value >= 0) {
                ok_sup.remove();
                valeur.remove();
                var table_html = separe_fich.getElementsByTagName('tr');
                //on recuperer les lignes de la table html qui se trouve dans cette division:"separe_fich".
                const l_1 = document.createElement('p');
                l_1.innerText = `pacours-bloc(actuel);`;
                const l_2 = document.createElement('p');
                l_2.innerText = `Si bloc[i].cle = ${valeur.value};`;
                const l_3 = document.createElement('p');
                l_3.innerText = ` supprimer(${valeur.value});`;
                const l_4 = document.createElement('p');
                l_4.innerText = `Si NonTrouve(${valeur.value})alors:`;
                const l_5 = document.createElement('p');
                l_5.innerText = `Afficher(la valeur est introuvable);`;
                const l_7 = document.createElement('p');
                const l_6 = document.createElement('p');
                l_6.innerText = `bloc <-- suivant(bloc);`;
                ajouter.appendChild(l_1);
                ajouter.appendChild(l_2);
                ajouter.appendChild(l_3);
                ajouter.appendChild(l_4);
                ajouter.appendChild(l_5);
                ajouter.appendChild(l_6);
                let s = 1;
                var sauv = 0;
                let te = vitesse;
                let ss = 0;
                var t = table_html[valeur.value % nbr_bloc.value].getElementsByTagName('input');
                // ici on prend la ligne correspondante déterminée par le hachage de la donnée
                for (let i = 0; i < t.length; i++) {
                    setTimeout(() => {
                        l_1.style.background = 'black';
                    }, te);
                    te += vitesse;
                    setTimeout(() => {
                        l_1.style.background = 'coral';
                    }, te);
                    te += vitesse;
                    setTimeout(() => {
                        t[i].style.background = 'yellow';
                        l_2.style.background = 'black';
                    }, te);
                    te += vitesse;
                    setTimeout(() => {
                        t[i].style.background = 'aqua';
                        l_2.style.background = 'coral';
                    }, te);
                    te += vitesse;
                    if (Number(t[i].value) == valeur.value) {
                        // ici la valeur est trouvée car l'égalité verifiée.
                        setTimeout(() => {
                            l_3.style.background = 'black';
                            t[i].style.background = 'red';
                        }, te);
                        te += vitesse;
                        setTimeout(() => {
                            t[i].style.background = 'aqua';
                            l_3.style.background = 'coral';
                            t[i].value = ''; // on affecte le vide comme une valeur pour cette enregistrement.
                        }, te);
                        te += vitesse;
                        s = 2;
                        setTimeout(() => {
                            affichage_message.innerHTML = 'la valeur est supprimee!';
                            l_2.remove();
                            l_1.remove();
                            l_6.remove();
                            l_5.remove();
                            l_4.remove();
                            l_7.remove();
                            l_3.remove();
                            // comme la suppression est terminée on doit supprimer les lignes de l'algorithme.
                        }, te);
                        te += vitesse;
                        setTimeout(() => {
                            affichage_message.innerHTML = '';
                        }, te);
                        te += vitesse;
                        setTimeout(() => {
                            for (let j = 0; j < t.length; j += Number(nbr_enreg.value) + 1) {
                                for (let D = j; D < j + Number(nbr_enreg.value); D++) {
                                    if (t[D].value == '') {
                                        ss++;
                                    }
                                }
                                if (ss > nbr_enreg.value - 1) {
                                    affichage_message.innerHTML = 'il y a un bloc vide';
                                    // ici on donne deux possiblités
                                    // 1-la suppression logique du bloc
                                    // 2-on laisse le bloc vide pour les prochaines insertions.
                                    let p1 = document.createElement('p');
                                    p1.innerHTML = 'Choix :';
                                    p1.style.marginLeft = '250px';
                                    p1.style.color = 'blue';
                                    separe_fich.appendChild(p1);
                                    let p = document.createElement('p');
                                    p.innerHTML = '1)-supprimer le bloc logiquement';
                                    let option2 = document.createElement('p');
                                    option2.innerHTML = '2)-laisser le bloc vide';
                                    separe_fich.appendChild(p);
                                    separe_fich.appendChild(option2);
                                    p.style.marginLeft = '250px';
                                    option2.style.marginLeft = '250px';
                                    p.style.color = 'blue';
                                    option2.style.color = 'blue';
                                    p.addEventListener('click', () => {
                                        // la suppression logique on affect ***** comme une valeur
                                        // on supprime les autres options du choix;
                                        p.remove();
                                        option2.remove();
                                        p1.remove();
                                        for (let K = j; K <= j + Number(nbr_enreg.value); K++) {
                                            // table_html[valeur.value % (Number(nbr_bloc.value))].children.item(j).remove();
                                            t[K].value = '*****';

                                        }
                                        affichage_message.innerHTML = '';
                                    });
                                    option2.addEventListener('click', () => {
                                        // on laisse le bloc vide
                                        // on supprime le menu du choix
                                        p.remove();
                                        option2.remove();
                                        p1.remove();
                                        affichage_message.innerHTML = '';
                                    });
                                    break;
                                }
                            }
                        }, te + 2 * vitesse);
                        te += vitesse;
                        break;
                    }
                }
                if (s != 2) {
                    // si s est different de 2 on dira que la valeur à supprimer n'existe pas dans le fichier.
                    affichage_message.innerHTML = 'la valeur est introuvable';
                    setTimeout(() => {
                        affichage_message.innerHTML = '';
                        l_2.remove();
                        l_1.remove();
                        l_6.remove();
                        l_5.remove();
                        l_4.remove();
                        l_7.remove();
                        l_3.remove();
                    }, te);
                }
            } else {
                // sinon la valeur est négative et on la travaille pas avec
                alert('valeur negative !');
            }
        }); //fin de suppression
    } else alert("aucun fichier est cree ");

}
/////////////////////////////////////////////////
function aller_essai_tableau() {
    // traitement de l'option essai_tableau
    var creer = document.createElement('p');
    creer.innerText = 'Creation';
    creer.className = 'selection';
    var chercher = document.createElement('p');
    chercher.innerText = 'Recherche';
    chercher.className = 'selection';
    var inserer = document.createElement('p');
    inserer.innerText = 'Insertion';
    inserer.className = 'selection';
    var supprimer = document.createElement('p');
    supprimer.innerText = 'Vidation du tableau';
    supprimer.className = 'selection';
    var operation = document.createElement('p');
    operation.innerText = 'operation';
    operation.className = 'selection';
    essai_fich.style.display = 'none';
    separe_tab.style.display = 'none';
    separe_fich.style.display = 'none';
    en_ligne.style.display = 'none';
    if (menu.getElementsByTagName('p').length > 0) {
        // on actualise le menu avec la suppression des autres operations et on
        // ajoute le menu de cette méthode.
        menu.getElementsByTagName('p').item(0).remove();
        menu.getElementsByTagName('p').item(0).remove();
        menu.getElementsByTagName('p').item(0).remove();
        menu.getElementsByTagName('p').item(0).remove();
        menu.getElementsByTagName('p').item(0).remove();
    }
    // dans les lignes suivantes on remplit le menu
    // 861 863 865 867 869
    document.getElementById('menu').appendChild(operation);
    operation.id = 'operation';
    document.getElementById('menu').appendChild(creer);
    creer.id = 'creer_essai_tab';
    document.getElementById('menu').appendChild(chercher);
    chercher.id = 'chercher_essai_tab';
    document.getElementById('menu').appendChild(inserer);
    inserer.id = 'inserer_essai_tab';
    document.getElementById('menu').appendChild(supprimer);
    supprimer.id = 'supprimer_essai_tab';
    document.querySelector('#creer_essai_tab').addEventListener('mouseover', function(e) {
        e.target.style.backgroundColor = 'black';
    });
    document.querySelector('#creer_essai_tab').addEventListener('mouseout', function(e) {
        e.target.style.backgroundColor = 'lightseagreen';
    });

    document.querySelector('#chercher_essai_tab').addEventListener('mouseover', function(e) {
        e.target.style.backgroundColor = 'black';
    });
    document.querySelector('#chercher_essai_tab').addEventListener('mouseout', function(e) {
        e.target.style.backgroundColor = 'lightseagreen';
    });
    document.querySelector('#supprimer_essai_tab').addEventListener('mouseover', function(e) {
        e.target.style.backgroundColor = 'black';
    });
    document.querySelector('#supprimer_essai_tab').addEventListener('mouseout', function(e) {
        e.target.style.backgroundColor = 'lightseagreen';
    });
    document.querySelector('#inserer_essai_tab').addEventListener('mouseover', function(e) {
        e.target.style.backgroundColor = 'black';
    });
    document.querySelector('#inserer_essai_tab').addEventListener('mouseout', function(e) {
        e.target.style.backgroundColor = 'lightseagreen';
    });
    // dans les lignes 897 898 899 900 on masque toutes les autres méthodes sans celle-ci 898
    // la methode qui est en cours d'execuion s'apparait en rouge
    // les autres en couleur  blanche
    document.getElementById('title').getElementsByTagName('a').item(2).style.color = '#fff';
    document.getElementById('title').getElementsByTagName('a').item(3).style.color = 'red';
    document.getElementById('title').getElementsByTagName('a').item(1).style.color = '#fff';
    document.getElementById('title').getElementsByTagName('a').item(4).style.color = '#fff';
    essai_tab.style.display = 'inline';
    if (essai_tab.getElementsByTagName('input').length == 0) {
        var table = document.createElement('table');
        for (let i = 0; i < 9; i++) {
            var tr = document.createElement('tr');
            var td = document.createElement('td');
            var txt = document.createElement('input');
            txt.type = 'button';
            txt.style.marginLeft = '100px';
            txt.style.background = 'aqua';
            txt.style.fontSize = 'large';
            td.appendChild(txt);
            tr.appendChild(td);
            table.appendChild(tr);
        }
        essai_tab.appendChild(table);
        k1.appendChild(essai_tab);
    }
    // les trois fonctions de cette methode sont les suivantes :
    document.getElementById('inserer_essai_tab').addEventListener('click', haching);
    document.getElementById('chercher_essai_tab').addEventListener('click', chercher_essai_tab);
    document.getElementById('supprimer_essai_tab').addEventListener('click', suppression);

}
const affichage_message = document.getElementById('instruction').getElementsByTagName('p').item(0);
// affichage_message est une variable globale utilisable si on veut affficher des messages de n'import quelle operation
function aller_essai_fichier() {
    /** traitement de l'option essai_fichier **/
    en_ligne.style.display = 'none';
    var creer_alea = document.createElement('p');
    creer_alea.innerText = 'Creation Aleatoire';
    creer_alea.className = 'selection';
    var chercher = document.createElement('p');
    chercher.innerText = 'Rechercher';
    chercher.className = 'selection';
    var inserer = document.createElement('p');
    inserer.innerText = 'Insertion';
    inserer.className = 'selection';
    var supprimer = document.createElement('p');
    supprimer.innerText = 'vidation de structure';
    supprimer.className = 'selection';
    var creer_comande = document.createElement('p');
    creer_comande.innerText = 'Creation Commandee';
    creer_comande.className = 'selection';
    document.getElementById('title').getElementsByTagName('a').item(4).style.color = '#fff';
    document.getElementById('title').getElementsByTagName('a').item(1).style.color = 'red';
    document.getElementById('title').getElementsByTagName('a').item(2).style.color = '#fff';
    document.getElementById('title').getElementsByTagName('a').item(3).style.color = '#fff';
    essai_tab.style.display = 'none';
    separe_tab.style.display = 'none';
    separe_fich.style.display = 'none';
    essai_fich.style.display = 'inline';
    if (menu.getElementsByTagName('p').length > 0) {
        // actualiser le menu.
        menu.getElementsByTagName('p').item(0).remove();
        menu.getElementsByTagName('p').item(0).remove();
        menu.getElementsByTagName('p').item(0).remove();
        menu.getElementsByTagName('p').item(0).remove();
        menu.getElementsByTagName('p').item(0).remove();
    }
    k1.appendChild(essai_fich);
    // ajouter les operations associées au menu.
    document.getElementById('menu').appendChild(creer_comande);
    creer_comande.id = 'creer_essai_fichier';
    document.getElementById('menu').appendChild(creer_alea);
    creer_alea.id = 'creer_essai_fichier_aleatoire';
    document.getElementById('menu').appendChild(chercher);
    chercher.id = 'chercher_essai_fichier';
    document.getElementById('menu').appendChild(inserer);
    inserer.id = 'inserer_essai_fichier';
    document.getElementById('menu').appendChild(supprimer);
    supprimer.id = 'supprimer_essai_fichier';

    document.querySelector('#inserer_essai_fichier').addEventListener('mouseover', function(e) {
        e.target.style.backgroundColor = 'black';
    });
    document.querySelector('#inserer_essai_fichier').addEventListener('mouseout', function(e) {
        e.target.style.backgroundColor = 'lightseagreen';
    });
    document.querySelector('#creer_essai_fichier_aleatoire').addEventListener('mouseover', function(e) {
        e.target.style.backgroundColor = 'black';
    });
    document.querySelector('#creer_essai_fichier_aleatoire').addEventListener('mouseout', function(e) {
        e.target.style.backgroundColor = 'lightseagreen';
    });

    document.querySelector('#creer_essai_fichier').addEventListener('mouseover', function(e) {
        e.target.style.backgroundColor = 'black';
    });
    document.querySelector('#creer_essai_fichier').addEventListener('mouseout', function(e) {
        e.target.style.backgroundColor = 'lightseagreen';
    });
    document.querySelector('#chercher_essai_fichier').addEventListener('mouseover', function(e) {
        e.target.style.backgroundColor = 'black';
    });
    document.querySelector('#chercher_essai_fichier').addEventListener('mouseout', function(e) {
        e.target.style.backgroundColor = 'lightseagreen';
    });
    document.querySelector('#supprimer_essai_fichier').addEventListener('mouseover', function(e) {
        e.target.style.backgroundColor = 'black';
    });
    document.querySelector('#supprimer_essai_fichier').addEventListener('mouseout', function(e) {
        e.target.style.backgroundColor = 'lightseagreen';
    });
    /** les operations de cette partie sont les suivantes : **/
    document.getElementById('creer_essai_fichier').addEventListener('click', creer_fichier);
    document.getElementById('inserer_essai_fichier').addEventListener('click', insertion_essai_fichier);
    document.getElementById('chercher_essai_fichier').addEventListener('click', chercher_essai_fichier);
    document.getElementById('supprimer_essai_fichier').addEventListener('click', suppression_essai_fichier);
    document.getElementById('creer_essai_fichier_aleatoire').addEventListener('click', creer_essai_fichier_aleatoire);

}
/***********************************************/
function creer_essai_fichier_aleatoire() {
    // creation aleatoire de 4 blocs de 3 enregistrements
    if (essai_fich.getElementsByTagName('input').length == 0) {
        let p = document.createElement('p');
        p.innerHTML = '4 blocs de 3 enregistrements generes aleatoirement';
        essai_fich.appendChild(p);
        p.style.marginLeft = '40px';
        setTimeout(() => {
            essai_fich.getElementsByTagName('p').item(0).remove();
        }, 2000);
        essai_tab.style.display = 'none';
        separe_tab.style.display = 'none';
        separe_fich.style.display = 'none';
        en_ligne.style.display = 'none';
        essai_fich.style.display = 'inline';
        for (let i = 0; i < 4; i++) {
            // i le nombre du bloc
            for (let j = 0; j < 3; j++) {
                // le nombre d'enregistrements.
                let inp = document.createElement('input');
                inp.type = 'button';
                inp.style.display = 'flex';
                essai_fich.appendChild(inp);
                inp.style.background = 'aqua';
                inp.style.marginLeft = '60px';
            }
            let hhh = document.createElement('p');
            hhh.innerText = `---bloc ${i}--`; // pour donner le numero du bloc
            hhh.style.color = 'BLACK'; // la couleur noire pour l'ecriture.
            hhh.style.marginLeft = '40px'; // le margin à coté gauche.
            essai_fich.appendChild(hhh); // l'ajouter à la division essai_fich .
        }
        val.value = 4; // le nombre d'enregistrements
        val2.value = 3; // le nombre de blocs
    } else
        alert('fichier cree par la creation commandee');

}

function insertion_essai_fichier() {
    if (essai_fich.getElementsByTagName('input').length > 0) {
        // pour verifier que le ficher n'est pas creé
        const inter = document.createElement('input');
        inter.type = 'number';
        inter.style.marginLeft = '380px';
        let insere = document.createElement('p');
        insere.innerHTML = 'inserer';
        insere.style.color = 'red';
        insere.style.marginLeft = '270px';
        let tab1 = essai_fich.getElementsByTagName('input');
        /** on recupere les enregistrements du fichier **/
        essai_fich.appendChild(inter);
        inter.style.background = 'yellow';
        essai_fich.appendChild(insere);
        inter.style.marginLeft = '150px';
        insere.addEventListener('click', () => {
            inter.remove();
            insere.remove();
            var vitesse = Number(slider.value) * 10; // la vitesse de déroulement
            zz = val2.value;
            /** on construit les lignes de l'algorithme **/
            let col = document.createElement("p");
            let col1 = document.createElement('p');
            let col2 = document.createElement('p');
            let col3 = document.createElement('p');
            let col4 = document.createElement('p');
            col.innerText = `pour i allant de 0 a ${val2.value -1}`;
            col1.innerText = `Si bloc[i] est vide  alors:`;
            col4.innerText = 'Fin';
            col2.innerText = `bloc[i] <-- ${inter.value}; aller Fin;`;
            col3.innerText = `Bloc <-- precedent(Bloc); Aller Pour;`
            let cpt_cpt = 0;
            for (let i = 0; i < val.value * val2.value; i++) {
                // i commence de 0 à le produit de nombre de bloc avec celui d'enregistrements.
                if (tab1[i].value == '')
                    cpt_cpt++;
            }
            // cpt_cpt aide à savoir le nombre de cases vides restantes dans le fichier.
            if (cpt_cpt > 1) {
                let termine = 0;
                ajouter.appendChild(col);
                ajouter.appendChild(col1);
                ajouter.appendChild(col2);
                ajouter.appendChild(col3);
                ajouter.appendChild(col4);
                let stop = 0;
                let temps11 = vitesse;
                let ff = Number(inter.value) % Number(val.value); // calcule de la valeur du hachage.
                let demarer = ff * Number(val2.value);
                const ind = ff * Number(val2.value);
                /** on sauvgarde le numéro du premier bloc car la sequence
                                 est circulaire **/
                while (termine == 0) {
                    for (let qq = demarer; qq < demarer + Number(val2.value); qq++) {
                        // on parcourt le bloc actuel
                        setTimeout(() => {
                            col.style.background = 'black';
                        }, temps11);
                        temps11 += vitesse;
                        setTimeout(() => {
                            col.style.background = 'coral';
                        }, temps11);
                        temps11 += vitesse;
                        setTimeout(() => {
                            tab1[qq].style.background = 'yellow';
                            col1.style.background = 'black';
                        }, temps11);
                        temps11 += vitesse;
                        setTimeout(() => {
                            tab1[qq].style.background = 'aqua';
                            col1.style.background = 'coral';
                        }, temps11);
                        temps11 += vitesse;
                        if (tab1[qq].value == inter.value) {
                            /** si la valeur existe on peut pas l'inserer **/
                            affichage_message.innerHTML = 'insertion impossible!';
                            setTimeout(() => {
                                col3.style.background = 'black';
                            }, temps11);
                            temps11 += vitesse;
                            setTimeout(() => {
                                col3.style.background = 'coral';
                            }, temps11);
                            temps11 += vitesse;
                            setTimeout(() => {
                                col.style.display = 'none';
                                col1.style.display = 'none';
                                col2.style.display = 'none';
                                col3.style.display = 'none';
                                col4.style.display = 'none';
                            }, temps11);
                            temps11 += vitesse;
                            setTimeout(() => {
                                affichage_message.innerHTML = '';
                            }, temps11);
                            temps11 += vitesse;
                            stop = 1;
                            termine = 1; // finir l'operation .
                            break;
                        }
                        if (tab1[qq].value == '') {
                            /** si on trouve un emplacement vide donc on peut l'inserer 1165 **/
                            setTimeout(() => {
                                col2.style.background = 'BLACK';
                                tab1[qq].style.background = 'red';
                            }, temps11);
                            temps11 += vitesse;
                            setTimeout(() => {
                                col2.style.background = 'coral';
                                tab1[qq].style.background = 'aqua';
                                tab1[qq].value = inter.value;
                                col4.style.background = 'BLACK';
                            }, temps11);
                            temps11 += vitesse;
                            setTimeout(() => {
                                col4.style.background = 'coral';
                            }, temps11);
                            temps11 += vitesse;
                            setTimeout(() => {
                                col.style.display = 'none';
                                col1.style.display = 'none';
                                col2.style.display = 'none';
                                col3.style.display = 'none';
                                col4.style.display = 'none';
                            }, temps11);
                            temps11 += vitesse;

                            stop = 1;
                            termine = 1; // FINIR L'OPERATION
                            break;
                        } //FSI

                    }
                    //collision bloc plein;
                    if (stop != 1) {
                        /** on accede aux blocs precedents **/
                        setTimeout(() => {
                            col3.style.background = 'black';
                        }, temps11);
                        temps11 += vitesse;
                        setTimeout(() => {
                            col3.style.background = 'coral';
                        }, temps11);
                        temps11 += vitesse;
                        demarer -= Number(zz);
                        if (demarer < 0) {
                            // si on arrive au premier bloc on retour vers le dernier bloc
                            if ((val.value - 1) * val2.value != ind) {
                                demarer = (val.value - 1) * val2.value;
                            } else {
                                // si on revient au meme bloc sans trouver des emplacements
                                // alors insertion impossible
                                affichage_message.innerHTML = 'insertion impossible!';
                                setTimeout(() => {
                                    affichage_message.innerHTML = '';
                                }, temps11);
                                temps11 += vitesse;
                                col.style.display = 'none';
                                col1.style.display = 'none';
                                col2.style.display = 'none';
                                col3.style.display = 'none';
                                col4.style.display = 'none';
                                termine = 1;
                            }
                        }
                        //inter.remove();okok.remove();
                    }
                    //fsinoN
                }
                //fin tq
            } else {
                alert('case sacrifie pour cette methode!');
            }

        });
    } else {
        alert('aucun fichier est cree');
    }

}
/**** ***************************************************************/
function chercher_essai_fichier() {
    if (essai_fich.getElementsByTagName('input').length > 0) {
        // condition pour verifier si le fichier existe ou pas.
        const interee = document.createElement('input');
        interee.type = 'number';
        let cherche = document.createElement('p');
        cherche.innerHTML = 'chercher';
        cherche.style.color = 'red';
        cherche.style.marginLeft = '300px';
        interee.style.marginLeft = '300px';
        interee.style.background = 'red';
        let tab1 = essai_fich.getElementsByTagName('input');
        essai_fich.appendChild(interee);
        essai_fich.appendChild(cherche);
        cherche.addEventListener('click', () => {
            // evenement essentiel pour cette operation.
            var vitesse = ((Number(slider.value))) * 10; //
            const lig_1 = document.createElement('p');
            const lig_2 = document.createElement('p');
            const lig_3 = document.createElement('p');
            const lig_4 = document.createElement('p');
            const lig_5 = document.createElement('p');
            const lig_6 = document.createElement('p');
            let temps = vitesse;
            var cs = 0;
            const fff = interee.value % val.value; // calcule du hachage.
            cherche.remove();
            interee.remove();
            const rr = (fff + 1) * Number(val2.value);
            lig_1.innerText = `pour i allant de ${fff*val2.value} a ${rr-1} faire: `;
            lig_2.innerText = `si BLOC[i] = ${interee.value} alors :`;
            lig_3.innerText = `trouv = true ; Afficher(valeur existe);`;
            lig_4.innerText = ` si NonTrouv alors:afficher(valeur introuvable);`;
            lig_5.innerText = `FIN`;
            lig_6.innerText = 'Bloc <-- precedent(Bloc); Aller Pour;';
            ajouter.appendChild(lig_1);
            ajouter.appendChild(lig_2);
            ajouter.appendChild(lig_3);
            ajouter.appendChild(lig_4);
            ajouter.appendChild(lig_5);
            let rrr = 0;
            let demarer1 = fff * Number(val2.value); // le debut du bloc concerné
            const ind2 = demarer1;
            while (cs === 0) {
                for (let pp = demarer1; pp < demarer1 + Number(val2.value); pp++) {
                    setTimeout(() => {
                        lig_1.style.background = 'BLACK';
                    }, temps);
                    temps += vitesse;
                    setTimeout(() => {
                        lig_1.style.background = 'coral';
                    }, temps);
                    temps += vitesse;
                    setTimeout(() => {
                        lig_2.style.background = 'BLACK';
                        tab1[pp].style.background = 'yellow';
                    }, temps);
                    temps += vitesse;
                    setTimeout(() => {
                        lig_2.style.background = 'coral';
                        tab1[pp].style.background = 'aqua';
                    }, temps);
                    temps += vitesse;
                    if (Number(tab1[pp].value) == interee.value) {
                        // la rentrée dans cette condition signifie que la valeur existe car on a bien l'égalité.
                        cs = 4;
                        setTimeout(() => {
                            lig_3.style.background = 'black';
                            tab1[pp].style.background = 'red';
                        }, temps);
                        temps += vitesse;
                        setTimeout(() => {
                            lig_3.style.background = 'coral';
                            tab1[pp].style.background = 'aqua';
                        }, temps);
                        temps += vitesse;
                        setTimeout(() => {
                            lig_5.style.background = 'black';
                        }, temps);
                        temps += vitesse;
                        setTimeout(() => {
                            lig_5.style.background = 'coral';
                            affichage_message.innerHTML = 'valeur existe';
                        }, temps);
                        temps += vitesse;
                        setTimeout(() => {
                            tab1[pp].style.background = 'red';
                            lig_4.style.display = 'none', lig_3.style.display = 'none';
                            lig_2.style.display = 'none';
                            lig_1.style.display = 'none';
                            lig_5.style.display = 'none';
                            lig_6.style.display = 'none';
                            affichage_message.innerHTML = '';
                        }, temps);
                        temps += vitesse;
                        setTimeout(() => {
                            tab1[pp].style.background = 'aqua';
                        }, temps);
                        temps += vitesse;
                        rrr = 1;
                        break;
                    }
                    if (tab1[pp].value == '') {
                        // lorsqu'on remente vers les blocs presedents une fois qu'on a trouvé un enreg vide
                        //on s'arrete et on affiche que la valeur est introuvable voir la ligne 1341;
                        affichage_message.innerHTML = 'valeur INTROUVABLE ';
                        setTimeout(() => {
                            lig_4.style.background = 'black';
                        }, temps);
                        temps += vitesse;
                        setTimeout(() => {
                            lig_4.style.background = 'coral';
                        }, temps);
                        temps += vitesse;
                        rrr = 1;
                        setTimeout(() => {
                            lig_5.style.background = 'black';
                        }, temps);
                        temps += vitesse;
                        setTimeout(() => {
                            lig_5.style.background = 'coral';
                        }, temps);
                        temps += vitesse;
                        setTimeout(() => {
                            lig_4.style.display = 'none', lig_3.style.display = 'none';
                            lig_2.style.display = 'none';
                            lig_1.style.display = 'none';
                            lig_5.style.display = 'none';
                            lig_6.style.display = 'none';
                            affichage_message.innerHTML = ' ';
                        }, temps);
                        temps += vitesse;
                        cs = 5;
                        break;
                    }
                }
                if (rrr != 1) {
                    /** rrr != 1 c'est-à-dire qu'on a pas trouvé et on a pas inseré
                     dans ce cas on revient en arriere vers les blocs précédents**/
                    setTimeout(() => {
                        lig_6.style.background = 'BLACK';
                    }, temps);
                    temps += vitesse;
                    setTimeout(() => {
                        lig_6.style.background = 'coral';
                    }, temps);
                    temps += vitesse;
                    demarer1 -= val2.value; // decrimentation pour acceder au bloc precedent.
                    if (demarer1 < 0) {
                        if ((val.value - 1) * val2.value != ind2) {
                            demarer1 = (val.value - 1) * val2.value;
                        }
                    }
                }
            }
        });
        /************** recherche terminée*********************/
    } else {
        alert('aucun fichier est trouve');
    }
}

function suppression_essai_fichier() {
    let i = 0;
    // c'est une vidation de la structure
    // on affecte le vide comme une valeur de chaque enregistrement du fichier.
    while (i < essai_fich.getElementsByTagName('input').length) {
        essai_fich.getElementsByTagName('input').item(i).value = '';
        i++;
    }
    affichage_message.innerHTML = 'le fichier est completement vide ';
    setTimeout(() => {
        affichage_message.innerHTML = ' ';

    }, 2000);
}

function aller_separe_tab() {
    // traitement de l'option separe_tableau.
    en_ligne.style.display = 'none';
    var creer = document.createElement('p');
    creer.innerText = 'Creation Commandee';
    creer.className = 'selection';
    var chercher = document.createElement('p');
    chercher.innerText = 'Recherche';
    chercher.className = 'selection';
    var inserer = document.createElement('p');
    inserer.innerText = 'Insertion';
    inserer.className = 'selection';
    var supprimer = document.createElement('p');
    supprimer.innerText = 'Suppression';
    supprimer.className = 'selection';
    var creer_aleatoire = document.createElement('p');
    creer_aleatoire.innerText = 'Creation Aleatoire';
    creer_aleatoire.className = 'selection';
    //creer.style.display='inline';
    essai_fich.style.display = 'none';
    essai_tab.style.display = 'none';
    separe_fich.style.display = 'none';
    separe_tab.style.display = 'inline';
    if (menu.getElementsByTagName('p').length > 0) {
        menu.getElementsByTagName('p').item(0).remove();
        menu.getElementsByTagName('p').item(0).remove();
        menu.getElementsByTagName('p').item(0).remove();
        menu.getElementsByTagName('p').item(0).remove();
        menu.getElementsByTagName('p').item(0).remove();
    }
    // mise à jour du menu .
    document.getElementById('menu').appendChild(creer);
    creer.id = 'creer_separe_tab';
    document.getElementById('menu').appendChild(creer_aleatoire);
    creer_aleatoire.id = 'creer_separe_tab_aleatoire';
    document.getElementById('menu').appendChild(chercher);
    chercher.id = 'chercher_separe_tab';
    document.getElementById('menu').appendChild(inserer);
    inserer.id = 'inserer_separe_tab';
    document.getElementById('menu').appendChild(supprimer);
    supprimer.id = 'supprimer_separe_tab';

    document.querySelector('#creer_separe_tab').addEventListener('mouseover', function(e) {
        e.target.style.backgroundColor = 'black';
    });
    document.querySelector('#creer_separe_tab').addEventListener('mouseout', function(e) {
        e.target.style.backgroundColor = 'lightseagreen';
    });
    document.querySelector('#creer_separe_tab_aleatoire').addEventListener('mouseover', function(e) {
        e.target.style.backgroundColor = 'black';
    });
    document.querySelector('#creer_separe_tab_aleatoire').addEventListener('mouseout', function(e) {
        e.target.style.backgroundColor = 'lightseagreen';
    });

    document.querySelector('#inserer_separe_tab').addEventListener('mouseover', function(e) {
        e.target.style.backgroundColor = 'black';
    });
    document.querySelector('#inserer_separe_tab').addEventListener('mouseout', function(e) {
        e.target.style.backgroundColor = 'lightseagreen';
    });
    document.querySelector('#chercher_separe_tab').addEventListener('mouseover', function(e) {
        e.target.style.backgroundColor = 'black';
    });
    document.querySelector('#chercher_separe_tab').addEventListener('mouseout', function(e) {
        e.target.style.backgroundColor = 'lightseagreen';
    });
    document.querySelector('#supprimer_separe_tab').addEventListener('mouseover', function(e) {
        e.target.style.backgroundColor = 'black';
    });
    document.querySelector('#supprimer_separe_tab').addEventListener('mouseout', function(e) {
        e.target.style.backgroundColor = 'lightseagreen';
    });
    k1.appendChild(separe_tab);
    document.getElementById('div_separe_tab').style.display = 'inline';
    document.getElementById('title').getElementsByTagName('a').item(1).style.color = '#fff';
    document.getElementById('title').getElementsByTagName('a').item(4).style.color = 'red';
    document.getElementById('title').getElementsByTagName('a').item(3).style.color = '#fff';
    document.getElementById('title').getElementsByTagName('a').item(2).style.color = '#fff';
    /** les opérations sur cette méthode sont les suivantes : **/
    document.getElementById('creer_separe_tab').addEventListener('click', creer_separe_tableau);
    document.getElementById('creer_separe_tab_aleatoire').addEventListener('click', creer_separe_tableau_aleatoire);
    document.getElementById('inserer_separe_tab').addEventListener('click', insertion_separe_tableau);
    document.getElementById('chercher_separe_tab').addEventListener('click', chercher_separe_tableau);
    document.getElementById('supprimer_separe_tab').addEventListener('click', supprimer_separe_tableau);
}
/** la création aléatoire du fichier **/
function creer_separe_tableau_aleatoire() {
    // la taille aleatoire est 10;
    if (separe_tab.getElementsByTagName('input').length == 0) {
        val_tab_separe.value = 10;
        separe_tab.style.display = 'inline';
        var table = document.createElement('table');
        for (let i = 0; i <= val_tab_separe.value - 1; i++) {
            var ligne = document.createElement('tr');
            var cellule = document.createElement('td');
            var text = document.createElement('input');
            text.type = 'button';
            text.style.background = 'aqua';
            text.style.marginLeft = '50px';
            cellule.appendChild(text);
            ligne.appendChild(cellule); // on ajoute toutes les colonnes à la ligne correspondante.
            table.appendChild(ligne); // on ajoute toutes les lignes à la table html.
            separe_tab.appendChild(table);
        }
    } else alert('tableau cree');

}

function creer_separe_tableau() {
    // c'est une creation commandée alors l'utilisateur doit entrer dans un premier temps la taille de la table.
    if (separe_tab.getElementsByTagName('input').length == 0) {
        separe_tab.style.display = 'inline';
        creez.innerHTML = 'creer->';
        creez.style.marginLeft = '300px';
        val_tab_separe.style.marginLeft = '300px';
        separe_tab.appendChild(val_tab_separe);
        separe_tab.appendChild(creez);
        creez.addEventListener('click', () => {
            creez.remove();
            val_tab_separe.remove();
            var table = document.createElement('table');
            for (let i = 0; i <= val_tab_separe.value - 1; i++) {
                var ligne = document.createElement('tr');
                var cellule = document.createElement('td');
                var text = document.createElement('input');
                text.type = 'button';
                text.style.background = 'aqua';
                text.style.marginLeft = '50px';
                cellule.appendChild(text);
                ligne.appendChild(cellule);
                table.appendChild(ligne);
                separe_tab.appendChild(table);
            }
        });
    } else alert('tableau cree aleatoirement !');

}

function insertion_separe_tableau() {
    if (separe_tab.getElementsByTagName('input').length > 0) {
        const tableau_travail = separe_tab.getElementsByTagName('input');
        const trtr = separe_tab.getElementsByTagName('tr');
        let valuer_inserer_separe = document.createElement('input');
        valuer_inserer_separe.type = 'number';
        valuer_inserer_separe.placeholder = 'value';
        separe_tab.appendChild(valuer_inserer_separe);
        valuer_inserer_separe.style.marginLeft = '300px';
        let ok_insere = document.createElement('p');
        ok_insere.innerHTML = 'inserer';
        ok_insere.style.color = 'red';
        separe_tab.appendChild(ok_insere);
        valuer_inserer_separe.style.background = 'red';
        ok_insere.style.marginLeft = '300px';
        ok_insere.addEventListener('click', () => {
            var vitesse = (Number(slider.value)) * 10;
            ok_insere.remove();
            valuer_inserer_separe.remove();
            let i = 0;
            let opp = 0;
            let ti = vitesse;
            let ligne_1 = document.createElement('p');
            let ligne_2 = document.createElement('p');
            let ligne_3 = document.createElement('p');
            let ligne_4 = document.createElement('p');
            let ligne_5 = document.createElement('p');
            let ligne_6 = document.createElement('p');
            let ligne_7 = document.createElement('p');
            let enreg_val = new Array();
            let ko = 0;
            ligne_1.innerText = 'TQ NonInsert faire:';
            ligne_2.innerText = `Si tab[${valuer_inserer_separe.value % val_tab_separe.value}] vide ET NonExiste(${valuer_inserer_separe.value}) alors :`;
            ligne_3.innerText = `Insert <---vrai; aller Fin;`;
            ligne_4.innerText = `Si Collision(${valuer_inserer_separe.value}) alors :`
            ligne_5.innerText = `allouer_maillon(p); suivant(p)<--nil;valeur(p)=${valuer_inserer_separe.value};
                aff_adr(precedent(p),p);`;
            ligne_6.innerText = `Si Insert = FAUX Alors : Afficher(Insertion impossible-valeur existe);`;
            ligne_7.innerText = `Fin.`;
            ligne_1.style.color = 'white';
            ligne_2.style.color = 'white';
            ligne_3.style.color = 'white';
            ligne_4.style.color = 'white';
            ligne_5.style.color = 'white';
            ligne_6.style.color = 'white';
            ligne_7.style.color = 'white';
            ajouter.appendChild(ligne_1);
            ajouter.appendChild(ligne_2);
            ajouter.appendChild(ligne_3);
            ajouter.appendChild(ligne_4);
            ajouter.appendChild(ligne_5);
            ajouter.appendChild(ligne_6);
            ajouter.appendChild(ligne_7);
            /******************************* recherche d'abord **********************************/
            let tab_but = trtr[valuer_inserer_separe.value % Number(val_tab_separe.value)].getElementsByTagName('button');
            for (let i = 1; i < tab_but.length; i += 2) {
                if (Number(tab_but[i].textContent) == valuer_inserer_separe.value) {
                    opp = 2;
                    break;
                }
            }
            /** la boocle "pour" au-dessus a comme un but de ne pas inserer les doublons **/
            if (valuer_inserer_separe.value == 0 && tableau_travail[0].value == '') {
                //traitement spécial pour la valeur 0
                setTimeout(() => {
                    ligne_1.style.background = 'black';
                }, ti);
                ti += vitesse;
                setTimeout(() => {
                    ligne_1.style.background = 'coral';
                }, ti);
                ti += vitesse;
                setTimeout(() => {
                    ligne_2.style.background = 'black';
                }, ti);
                ti += vitesse;
                setTimeout(() => {
                    ligne_2.style.background = 'coral';
                }, ti);
                ti += vitesse;
                setTimeout(() => {
                    ligne_3.style.background = 'black';
                }, ti);
                ti += vitesse;
                setTimeout(() => {
                    ligne_3.style.background = 'coral';
                }, ti);
                ti += vitesse;
                setTimeout(() => {
                    ligne_7.style.background = 'black';
                }, ti);
                ti += vitesse;
                setTimeout(() => {
                    ligne_7.style.background = 'coral';
                }, ti);
                ti += vitesse;
                setTimeout(() => {
                    tableau_travail[Number(valuer_inserer_separe.value) % Number(val_tab_separe.value)].value = '0';
                    // on affecte la valeur 0;
                    tableau_travail[Number(valuer_inserer_separe.value) % Number(val_tab_separe.value)].style.background = 'red';
                }, ti);
                ti += vitesse;
                setTimeout(() => {
                    tableau_travail[valuer_inserer_separe.value % val_tab_separe.value].style.background = 'aqua';
                    ligne_1.remove();
                    ligne_2.remove();
                    ligne_3.remove();
                    ligne_4.remove();
                    ligne_5.remove();
                    ligne_6.remove();
                    ligne_7.remove();
                }, ti);
                ti += vitesse;
                opp = 4;
            }
            if ((opp != 2) && (opp != 4) && (Number(tableau_travail[valuer_inserer_separe.value % val_tab_separe.value].value) != valuer_inserer_separe.value)) {
                //ici on suppose que la valeur different de 0 et la valeur n'existe pas par avant.
                if (tableau_travail[valuer_inserer_separe.value % val_tab_separe.value].value == '') {
                    setTimeout(() => {
                        ligne_1.style.background = 'black';
                    }, ti);
                    ti += vitesse;
                    setTimeout(() => {
                        ligne_1.style.background = 'coral';
                    }, ti);
                    ti += vitesse;
                    setTimeout(() => {
                        ligne_2.style.background = 'black';
                    }, ti);
                    ti += vitesse;
                    setTimeout(() => {
                        ligne_2.style.background = 'coral';
                    }, ti);
                    ti += vitesse;
                    setTimeout(() => {
                        ligne_3.style.background = 'black';
                    }, ti);
                    ti += vitesse;
                    setTimeout(() => {
                        ligne_3.style.background = 'coral';
                    }, ti);
                    ti += vitesse;
                    setTimeout(() => {
                        ligne_7.style.background = 'black';
                    }, ti);
                    ti += vitesse;
                    setTimeout(() => {
                        ligne_7.style.background = 'coral';
                    }, ti);
                    ti += vitesse;
                    setTimeout(() => {
                        tableau_travail[valuer_inserer_separe.value % val_tab_separe.value].value = valuer_inserer_separe.value;
                        tableau_travail[valuer_inserer_separe.value % val_tab_separe.value].style.background = 'red';
                    }, ti);
                    ti += vitesse;
                    setTimeout(() => {
                        tableau_travail[valuer_inserer_separe.value % val_tab_separe.value].style.background = 'aqua';
                        ligne_1.remove();
                        ligne_2.remove();
                        ligne_3.remove();
                        ligne_4.remove();
                        ligne_5.remove();
                        ligne_6.remove();
                        ligne_7.remove();
                    }, ti);

                    ti += vitesse;
                    enreg_val[i] = valuer_inserer_separe.value;
                    i++;

                } else {
                    var text = document.createElement('button');
                    setTimeout(() => {
                        ligne_1.style.background = 'black';
                    }, ti);
                    ti += vitesse;
                    setTimeout(() => {
                        ligne_1.style.background = 'coral';
                    }, ti);
                    ti += vitesse;
                    setTimeout(() => {
                        ligne_2.style.background = 'black';
                    }, ti);
                    ti += vitesse;
                    setTimeout(() => {
                        ligne_2.style.background = 'coral';
                    }, ti);
                    ti += vitesse;
                    setTimeout(() => {
                        ligne_4.style.background = 'black';
                    }, ti);
                    ti += vitesse;
                    setTimeout(() => {
                        ligne_4.style.background = 'coral';
                    }, ti);
                    ti += vitesse;
                    setTimeout(() => {
                        ligne_5.style.background = 'black';
                        var cellule = document.createElement('td');
                        var flash = document.createElement('button');
                        flash.style.background = 'YELLOW';
                        flash.textContent = '--->'; // creer un pointeur
                        text.textContent = valuer_inserer_separe.value;
                        text.style.height = '25px';
                        text.style.minWidth = '50px';
                        cellule.appendChild(flash);
                        trtr[Number(valuer_inserer_separe.value) % Number(val_tab_separe.value)].appendChild(cellule);
                        cellule.appendChild(text);
                        trtr[Number(valuer_inserer_separe.value) % Number(val_tab_separe.value)].appendChild(cellule);
                        let tbtb = trtr[valuer_inserer_separe.value % val_tab_separe.value].getElementsByTagName('button');
                        // tbtb : sert à recuperer les collisions qui sont dans la liste.
                        tbtb[tbtb.length - 1].innerText = tbtb[1].innerText;
                        tbtb[1].innerText = valuer_inserer_separe.value;
                        text.style.background = 'aqua';
                        text.style.borderRadius = '23px';
                    }, ti);
                    ti += vitesse;
                    setTimeout(() => {
                        ligne_5.style.background = 'coral';
                        text.style.background = 'aqua';
                    }, ti);
                    ti += vitesse;
                    setTimeout(() => {
                        ligne_7.style.background = 'black';
                    }, ti);
                    ti += vitesse;
                    setTimeout(() => {
                        ligne_7.style.background = 'coral';
                        ligne_1.remove();
                        ligne_2.remove();
                        ligne_3.remove();
                        ligne_4.remove();
                        ligne_5.remove();
                        ligne_6.remove();
                        ligne_7.remove();
                    }, ti);
                    ti += vitesse;
                    enreg_val[i] = valuer_inserer_separe.value;
                    i++;
                }
            } else {
                if (opp != 4) {
                    setTimeout(() => {
                        ligne_1.style.background = 'black';
                    }, ti);
                    ti += vitesse;
                    setTimeout(() => {
                        ligne_1.style.background = 'coral';
                    }, ti);
                    ti += vitesse;
                    setTimeout(() => {
                        ligne_6.style.background = 'black';
                    }, ti);
                    ti += vitesse;
                    setTimeout(() => {
                        ligne_6.style.background = 'coral';
                    }, ti);
                    ti += vitesse;
                    setTimeout(() => {
                        ligne_7.style.background = 'black';
                    }, ti);
                    ti += vitesse;
                    setTimeout(() => {
                        ligne_7.style.background = 'coral';
                    }, ti);
                    ti += vitesse;
                    setTimeout(() => {
                        affichage_message.innerHTML = 'Insertion des deblouns interdite';
                    }, ti);
                    ti += vitesse;
                    setTimeout(() => {
                        affichage_message.innerHTML = '';
                        ligne_1.remove();
                        ligne_2.remove();
                        ligne_3.remove();
                        ligne_4.remove();
                        ligne_5.remove();
                        ligne_6.remove();
                        ligne_7.remove();
                    }, ti);
                    ti += vitesse;
                }
            }

        });
    } else {
        alert('aucun fichier est disponible');
    }

}
/** la fonction de recherche de la méthode chinage externe sur les tableaux **/
function chercher_separe_tableau() {
    if (separe_tab.getElementsByTagName('input').length > 0) {
        const tableau_travail = separe_tab.getElementsByTagName('input');
        const trtr = separe_tab.getElementsByTagName('tr');
        let valu = document.createElement('input');
        valu.type = 'number';
        valu.style.marginLeft = '300px';
        valu.style.background = 'red';
        let ok_cherche = document.createElement('p');
        ok_cherche.innerHTML = 'chercher';
        ok_cherche.style.color = 'red';
        ok_cherche.style.marginLeft = '300px';
        separe_tab.appendChild(valu);
        separe_tab.appendChild(ok_cherche);
        ok_cherche.addEventListener('click', () => {
            // ok_cherche contient l'evenement essentiel de la reherche.
            var vitesse = (Number(slider.value)) * 10;
            ok_cherche.remove();
            valu.remove();
            /** pour gardrer le deroulement d'une seule opération on doit supprimer les buttons au-dessus;**/
            const l1 = document.createElement('p');
            const l2 = document.createElement('p');
            const l3 = document.createElement('p');
            const l4 = document.createElement('p');
            const l5 = document.createElement('p');
            const l0 = document.createElement('p');
            const l6 = document.createElement('p');
            const l8 = document.createElement('p');
            const l7 = document.createElement('p');
            const l9 = document.createElement('p');
            const l10 = document.createElement('p');
            let tik = vitesse;
            let kp = 0;
            /** creation des lignes pour le programme qui se deroulera dans la zone orange **/
            l0.innerText = 'while(suivant(p) <>nil faire:';
            l1.innerText = `si tab[${valu.value%val_tab_separe.value}] = ${valu.value} alors : \nAfficher(valeur existe);`;
            l4.innerText = `  si lien = nil alors: Afficher(valeur introuvable);`;
            l7.innerText = `si valeur(p) = ${valu.value} alors :`;
            l8.innerText = 'Afficher(valeur existe en collision);';
            l9.innerText = 'sinon p <-- suivant(p);';
            l10.innerText = 'si p=nil Afficher(valeur introuvable !);';
            l1.style.color = 'white';
            l2.style.color = 'white';
            l3.style.color = 'white';
            l4.style.color = 'white';
            l5.style.color = 'white';
            l6.style.color = 'white';
            l10.style.color = 'white';
            l7.style.color = 'white';
            l8.style.color = 'white';
            l9.style.color = 'white';
            l0.style.color = 'white';
            /** la couleur white pour que les lignes seront visibles**/
            ajouter.appendChild(l0);
            ajouter.appendChild(l1);
            ajouter.appendChild(l4);
            ajouter.appendChild(l7);
            ajouter.appendChild(l8);
            ajouter.appendChild(l9);
            ajouter.appendChild(l10);
            setTimeout(() => {
                l0.style.background = 'black';
            }, tik);
            tik += vitesse;
            setTimeout(() => {
                l0.style.background = 'coral';
            }, tik);
            tik += vitesse;
            if (Number(tableau_travail[(valu.value % val_tab_separe.value)].value) == valu.value) {
                // la valeur existe car on a bien l'égalité.
                affichage_message.innerHTML = ' VALEUR EXISTE';
                setTimeout(() => {
                    l1.style.background = 'black';
                }, tik);
                tik += vitesse;
                setTimeout(() => {
                    l1.style.background = 'coral';
                    tableau_travail[(valu.value % val_tab_separe.value)].style.background = 'red';
                }, tik);
                tik += vitesse;
                setTimeout(() => {
                    tableau_travail[(valu.value % val_tab_separe.value)].style.background = 'aqua';
                }, tik);
                tik += vitesse;
                setTimeout(() => {
                    affichage_message.innerHTML = '';
                    l1.remove();
                    l4.remove();
                    l5.remove();
                    l6.remove();
                    l7.remove();
                    l8.remove();
                    l9.remove();
                    l10.remove();
                    l0.remove();
                }, tik);
                tik += vitesse;
            } else {
                setTimeout(() => {
                    l4.style.background = 'black';
                }, tik);
                tik += vitesse;
                setTimeout(() => {
                    l4.style.background = 'coral';
                }, tik);
                tik += vitesse;
                if (tableau_travail[Number(valu.value) % Number(val_tab_separe.value)].value != '') {
                    // alors il existe une liste associée
                    var tab_tab = trtr[Number(valu.value) % Number(val_tab_separe.value)].getElementsByTagName('button');
                    // tab_tab sert à récupérer les maillons de la liste assoiée.
                    for (let j = 1; j < tab_tab.length; j = j + 2) {
                        // parcourt sans passer par les pointeurs.
                        setTimeout(() => {
                            l7.style.background = 'black';
                        }, tik);
                        tik += vitesse;
                        setTimeout(() => {
                            l7.style.background = 'coral';
                        }, tik);
                        tik += vitesse;
                        setTimeout(() => {
                            l9.style.background = 'black';
                            tab_tab[j].style.background = 'yellow';
                        }, tik);
                        tik += vitesse;
                        setTimeout(() => {
                            l9.style.background = 'coral';
                            tab_tab[j].style.background = 'aqua';
                        }, tik);
                        tik += vitesse;
                        if (Number(tab_tab[j].textContent) === Number(valu.value)) {
                            setTimeout(() => {
                                l8.style.background = 'black';
                                tab_tab[j].style.background = 'red';
                            }, tik);
                            tik += vitesse;
                            setTimeout(() => {
                                l8.style.background = 'coral';
                                tab_tab[j].style.background = 'aqua';
                            }, tik);
                            tik += vitesse;
                            affichage_message.innerHTML = ' VALEUR EXISTE';
                            setTimeout(() => {
                                affichage_message.innerHTML = '';
                                l1.remove();
                                l2.remove();
                                l4.remove();
                                l5.remove();
                                l6.remove();
                                l7.remove();
                                l8.remove();
                                l9.remove();
                                l10.remove();
                                l0.remove();
                            }, tik);
                            tik += vitesse;
                            kp = 9;
                            break;
                        }
                    }
                    if (kp !== 9) {

                        setTimeout(() => {
                            l10.style.background = 'black';
                        }, tik);
                        tik += vitesse;
                        setTimeout(() => {
                            l10.style.background = 'coral';
                            affichage_message.innerHTML = ' VALEUR INTROUVABLE';
                        }, tik);
                        tik += vitesse;
                        setTimeout(() => {
                            affichage_message.innerHTML = '';
                            l1.remove();
                            l4.remove();
                            l5.remove();
                            l6.remove();
                            l7.remove();
                            l8.remove();
                            l9.remove();
                            l10.remove();
                            l0.remove();
                        }, tik);
                    }
                } else {
                    //  la valeur est introuvable;
                    setTimeout(() => {
                        affichage_message.innerHTML = 'VALEUR INTROUVABLE';
                    }, tik);
                    tik += vitesse;
                    setTimeout(() => {
                        affichage_message.innerHTML = '';
                        l1.remove();
                        l2.remove();
                        l3.remove();
                        l4.remove();
                        l5.remove();
                        l6.remove();
                        l7.remove();
                        l8.remove();
                        l9.remove();
                        l10.remove();
                        l0.remove();
                        // remove sert à supprimer les lignes de l'algorithme
                    }, tik);
                    tik += vitesse;

                }
            }

        });
    } else alert('aucun fichier est cree');

}
/** la fonction de la suppression pour la méthode de chinage separe sur les tables **/
function supprimer_separe_tableau() {
    if (separe_tab.getElementsByTagName('input').length > 0) {
        /** pour ne pas creer la table à chaque fois qu'on rentre **/
        const tableau_travail = separe_tab.getElementsByTagName('input');
        const trtr = separe_tab.getElementsByTagName('tr');
        let valu = document.createElement('input'); //creation d'une inout qui va contenir la valeur à supprimer.
        valu.type = 'number'; // de tyme entier ie on n'accept que des chiffres pas de caracteres.
        valu.style.marginLeft = '300px'; // gerer le margin
        valu.style.background = 'red'; //la couleur rouge .
        let ok_supp = document.createElement('p'); // pour associer un evenement lorsqu'on le clique voir la ligne 2009.
        ok_supp.style.color = 'red';
        ok_supp.innerHTML = 'supprimer';
        separe_tab.appendChild(ok_supp);
        separe_tab.appendChild(valu);
        ok_supp.style.marginLeft = '300px';
        ok_supp.addEventListener('click', () => {
            var vitesse = (Number(slider.value)) * 10; // on récupére aussi la vitesse de déroulement.
            ok_supp.remove();
            valu.remove();
            /** on les supprime pour executer un seul evenement à la fois (pas plus) **/
            let kc = 0;
            let ti = vitesse;
            /** creation des lignes de l'algorirhme **/
            const l1 = document.createElement('p');
            const l2 = document.createElement('p');
            const l3 = document.createElement('p');
            const l4 = document.createElement('p');
            const l5 = document.createElement('p');
            const l6 = document.createElement('p');
            const l7 = document.createElement('p');
            const l8 = document.createElement('p');
            const l9 = document.createElement('p');
            const l10 = document.createElement('p');
            const l45 = document.createElement('p');
            const l455 = document.createElement('p');
            /*** *** *** *** **** *** *** ** *** *** ** *** **/
            l1.innerText = `Si tab[${valu.value%val_tab_separe.value}]= ${valu.value} alors :`;
            l2.innerText = ` -- Si lien = nil alors :supprimer(${valu.value}); Stop;`;
            l4.innerText = ` -- Sinon :tab[${valu.value % val_tab_separe.value}] <--- valeur(tete);\\n liberer(tete);\\n Stop;`;
            l455.innerText = `Si tab[${valu.value%val_tab_separe.value}]<> ${valu.value} `;
            l5.innerText = `TQ suivant(p) <>nil et Nontrouv faire : `;
            l6.innerText = `Si valeur(p) = ${valu.value} alors : liberer(p); Stop;`;
            l9.innerText = `Si NonTrouv alors : \n Afficher(valeur introuvable);`;
            ajouter.appendChild(l1);
            ajouter.appendChild(l2);
            ajouter.appendChild(l4);
            ajouter.appendChild(l455);
            ajouter.appendChild(l5);
            ajouter.appendChild(l6);
            ajouter.appendChild(l9);
            /** on ajoute les lignes à la zone de programme **/
            if (Number(tableau_travail[Number(valu.value) % Number(val_tab_separe.value)].value) === Number(valu.value)) {
                // ici on a bien l'égalité et la condition est verifiée.
                setTimeout(() => {
                    l1.style.background = 'black';
                }, ti);
                ti += vitesse;
                setTimeout(() => {
                    l1.style.background = 'coral';
                }, ti);
                ti += vitesse;
                let teb = trtr[Number(valu.value) % Number(val_tab_separe.value)].getElementsByTagName('button');
                // recuperer à chaque fois toute la ligne.
                if (teb.length == 0) {
                    setTimeout(() => {
                        l1.style.background = 'black';
                    }, ti);
                    ti += vitesse;
                    setTimeout(() => {
                        l1.style.background = 'coral';
                    }, ti);
                    ti += vitesse;
                    setTimeout(() => {
                        l2.style.background = 'black';
                        /**
                          ici on trouvé la valeur dans l'adresse primaire sans avoir des collision donc on le supprime
                          directement.on lui affecte le vide comme une valeur.
                         **/
                        tableau_travail[Number(valu.value) % Number(val_tab_separe.value)].value = '';
                        tableau_travail[Number(valu.value) % Number(val_tab_separe.value)].style.background = 'yellow';
                    }, ti);
                    ti += vitesse;
                    setTimeout(() => {
                        l2.style.background = 'coral';
                        tableau_travail[Number(valu.value) % Number(val_tab_separe.value)].style.background = 'aqua';
                    }, ti);
                    ti += vitesse;

                    setTimeout(() => {
                        affichage_message.innerHTML = ' VALEUR SUPPRIMEE';
                    }, ti);
                    ti += vitesse;
                    setTimeout(() => {
                        l1.remove();
                        l5.remove();
                        l2.remove();
                        l4.remove();
                        l455.remove();
                        l6.remove();
                        l7.remove();
                        l9.remove();
                    }, ti);
                    ti += vitesse;
                    setTimeout(() => {
                        affichage_message.innerHTML = '';
                    }, ti);
                    ti += vitesse;
                } else {
                    setTimeout(() => {
                        l4.style.background = 'black';
                    }, ti);
                    ti += vitesse;
                    setTimeout(() => {
                        l4.style.background = 'coral';
                    }, ti);
                    ti += vitesse;
                    setTimeout(() => {
                        l5.style.background = 'black';
                        tableau_travail[Number(valu.value) % Number(val_tab_separe.value)].value = teb[1].textContent;
                        /**on a remplacé la valeur à supprimer qui se trouve au niveau de l'adresse primaire par la
                        valeur de la tete de la liste des collisions associée.
                         apres on suppreme la tete et son pointeur également.
                         **/
                        trtr[Number(valu.value) % Number(val_tab_separe.value)].removeChild(trtr[Number(valu.value) % Number(val_tab_separe.value)].children.item(1));
                    }, ti);
                    ti += vitesse;
                    setTimeout(() => {
                        l5.style.background = 'coral';
                    }, ti);
                    ti += vitesse;
                    setTimeout(() => {
                        l1.remove();
                        l2.remove();
                        l4.remove();
                        l455.remove();
                        l6.remove();
                        l7.remove();
                        l9.remove();
                        l5.remove();
                    }, ti);
                    ti += vitesse;
                    setTimeout(() => {
                        affichage_message.innerHTML = ' VALEUR SUPPRIMEE';
                    }, ti);
                    ti += vitesse;
                    setTimeout(() => {
                        affichage_message.innerHTML = '';
                    }, ti);
                    ti += vitesse;
                }
            } else {
                if (tableau_travail[Number(valu.value) % Number(val_tab_separe.value)].value == '') {
                    //comme l'adresse primaire est vide donc on dira directement que la valeur n'existe pas.
                    setTimeout(() => {
                        l1.style.background = 'black';
                    }, ti);
                    ti += vitesse;
                    setTimeout(() => {
                        l1.style.background = 'coral';
                    }, ti);
                    ti += vitesse;
                    setTimeout(() => {
                        l9.style.background = 'black';
                    }, ti);
                    ti += vitesse;
                    setTimeout(() => {
                        l9.style.background = 'coral';
                    }, ti);
                    ti += vitesse;
                    setTimeout(() => {
                        l1.remove();
                        l2.remove();
                        l4.remove();
                        l455.remove();
                        l6.remove();
                        l7.remove();
                        l9.remove();
                        l5.remove();
                        //masquer l'algorithme.
                    }, ti);
                    ti += vitesse;
                    setTimeout(() => {
                        affichage_message.innerHTML = ' VALEUR INTROUVABLE';
                    }, ti);
                    ti += vitesse;
                    setTimeout(() => {
                        affichage_message.innerHTML = '';
                    }, ti);
                    ti += vitesse;

                } else {
                    // sinon on recherche dans la liste des collisions.
                    setTimeout(() => {
                        l455.style.background = 'black';
                    }, ti);
                    ti += vitesse;
                    setTimeout(() => {
                        l455.style.background = 'coral';
                    }, ti);
                    ti += vitesse;
                    let teb2 = trtr[Number(valu.value) % Number(val_tab_separe.value)].getElementsByTagName('button');
                    // teb2 pour recuperer les elements d'une ligne.la ligne determinée par la fonction du hachage.
                    for (let l = 1; l < teb2.length; l = l + 2) {
                        //on parcourt element par element sans passer par les pointeurs c'est pour cela l+=l+2;
                        //car entre deux maillons il y a toujours un pointeu.
                        setTimeout(() => {
                            l5.style.background = 'black';
                        }, ti);
                        ti += vitesse;
                        setTimeout(() => {
                            l5.style.background = 'coral';
                        }, ti);
                        ti += vitesse;
                        setTimeout(() => {
                            l6.style.background = 'black';
                            teb2[l].style.background = 'yellow'; // colorer les maillons en jaune
                        }, ti);
                        ti += vitesse;
                        setTimeout(() => {
                            l6.style.background = 'coral';
                            teb2[l].style.background = 'aqua'; // revenir à la couleur initiale.
                        }, ti);
                        ti += vitesse;
                        if (Number(teb2[l].textContent) === Number(valu.value)) {
                            setTimeout(() => {
                                l7.style.background = 'black';
                            }, ti);
                            ti += vitesse;
                            setTimeout(() => {
                                l7.style.background = 'coral';
                                teb2[l].remove(); //on supprime le maillon déteminé
                                teb2[l - 1].remove(); // et son pointeur l'aussi.
                            }, ti);
                            ti += vitesse;
                            setTimeout(() => {
                                l1.remove();
                                l2.remove();
                                l4.remove();
                                l455.remove();
                                l6.remove();
                                l7.remove();
                                l9.remove();
                                l5.remove();
                                // supprimer les lignes de l'algorithmes qui se déroulait.
                            }, ti);
                            ti += vitesse;
                            setTimeout(() => {
                                affichage_message.innerHTML = ' VALEUR SUPPRIMEE';
                            }, ti);
                            ti += vitesse;
                            setTimeout(() => {
                                affichage_message.innerHTML = '';
                            }, ti);
                            ti += vitesse;
                            kc = 3;
                            break;
                        }
                    }
                    if (kc != 3) {
                        setTimeout(() => {
                            l9.style.background = 'black';
                        }, ti);
                        ti += vitesse;
                        setTimeout(() => {
                            l9.style.background = 'coral';
                        }, ti);
                        ti += vitesse;
                        setTimeout(() => {
                            affichage_message.innerHTML = ' VALEUR INTROUVABLE';
                        }, ti);
                        ti += vitesse;
                        setTimeout(() => {
                            affichage_message.innerHTML = '';
                        }, ti);
                        ti += vitesse;
                        setTimeout(() => {
                            l1.remove();
                            l2.remove();
                            l4.remove();
                            l455.remove();
                            l6.remove();
                            l7.remove();
                            l9.remove();
                            l5.remove();
                            // suppression de l'algorithme qui se deroulait.
                        }, ti);
                        ti += vitesse;
                    }
                }
            }

        });
    } else alert('aucun fichier est cree');
}
/** gérer les divisions de la page concernant le menu le code et les messages **/
document.getElementById("menu-hide").addEventListener('click', function() {
    if ((document.getElementById("menu").style.width == '0px') || (document.getElementById("menu").style.width == '150px')) {
        if (document.getElementById("menu").style.width == '0px') {
            for (let index = 0; index < 151; index++) {
                setTimeout(() => {
                    document.getElementById("menu").style.width = index + 'px';
                }, index);
            }
        } else {
            for (let index = 150; index > -1; index--) {
                setTimeout(() => {
                    document.getElementById("menu").style.width = index + 'px';
                }, (151 - index) * 0.9);
            }

        }
        if (document.getElementById("menu-hide-img").className == "rotateLeft") {
            document.getElementById("menu-hide-img").className = "rotateRight";
        } else {
            document.getElementById("menu-hide-img").className = "rotateLeft";
        }
    }
});

document.getElementById("code-hide").addEventListener('click', function() {


    if ((document.getElementById("code").style.width == '0px') || (document.getElementById("code").style.width == '420px')) {
        if (document.getElementById("code").style.width == '0px') {
            for (let index = 0; index < 421; index++) {
                setTimeout(() => {
                    document.getElementById("code").style.width = index + 'px';
                }, index * 0.9);
            }

            document.getElementById("code-hide-img").className = "rotateLeft";
        } else {
            for (let index = 420; index > -1; index--) {
                setTimeout(() => {
                    document.getElementById("code").style.width = index + 'px';
                }, (420 - index) * 0.9);
            }
            document.getElementById("code-hide-img").className = "rotateRight";
        }
    }


});
document.getElementById("instruction-hide").addEventListener('click', function() {

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
});
/** les fonctions du hachage **/
/////////////////////////////////////////////////////////////////////////////////
function haching() {
    if (essai_tab.getElementsByTagName('input').length > 9) {
        essai_tab.getElementsByTagName('input').item(9).remove();
        if (essai_tab.getElementsByTagName('p').length > 0) {
            while (essai_tab.getElementsByTagName('p').length > 0) {
                essai_tab.getElementsByTagName('p').item(0).remove();
            }
        }
    }
    let val = document.createElement('input');
    essai_tab.appendChild(val);
    val.type = 'number';
    let inserez = document.createElement('p');
    inserez.innerText = 'inserer';
    essai_tab.appendChild(inserez);
    val.style.marginLeft = '300px';
    inserez.style.marginLeft = '300px';
    val.style.background = 'YELLOW';
    inserez.style.color = 'red';
    inserez.id = "insertion_essai_tab";
    let tableauhachage = document.getElementById('div_essai_tab').getElementsByTagName('input');
    let k = 0;
    const ajouter1 = document.getElementById('code');
    inserez.addEventListener('click', () => {
        inserez.remove();
        val.remove();
        //let tim = 500;
        var vitesse = ((Number(slider.value)) / 100) * 1000;
        let tim = vitesse;
        let case_vide = 0;
        let indice = 0;
        for (let ql = 0; ql < 9; ql++) {
            if (tableauhachage[ql].value == '') {
                case_vide++;
                indice = ql;
            }
        }
        const prog_1 = document.createElement('p');
        prog_1.innerText = `TQ NonInsert  ET NonDerniereCaseVide()faire :`;
        const prog_2 = document.createElement('p');
        prog_2.innerText = `Hachage(${val.value}) = ( ${val.value} Mod 9 <-- ${val.value % 9});`;
        const prog_3 = document.createElement('p');
        prog_3.innerText = 'Si tableauhachage[i] est vide alors ';
        const prog_4 = document.createElement('p');
        prog_4.innerText = `Insert <-- vrai;aller Fin;`;
        const prog_5 = document.createElement('p');
        prog_5.innerText = `Si Non Insert ou Existe(${val.value})alors :`;
        const prog_6 = document.createElement('p');
        prog_6.innerText = `Afficher(INSERTION IMPOSSIBLE !);`;
        const prog_7 = document.createElement('p');
        prog_7.innerText = `Fin.`;
        ajouter1.appendChild(prog_1);
        ajouter1.appendChild(prog_2);
        ajouter1.appendChild(prog_3);
        ajouter1.appendChild(prog_4);
        ajouter1.appendChild(prog_5);
        ajouter1.appendChild(prog_6);
        ajouter1.appendChild(prog_7);
        // ajouter les lignes de l'algorithme à la zone correspondante.
        let b = 1;
        for (i = 0; i < 9; i++) {
            // le parcourt de la table
            if (Number(tableauhachage[i].value) == val.value) {
                // si la valeur existe on l'insere pas.
                setTimeout(() => {
                    prog_1.style.background = 'black';
                }, tim);
                tim += vitesse;
                setTimeout(() => {
                    prog_1.style.background = 'coral';
                }, tim);
                tim += vitesse;
                setTimeout(() => {
                    prog_5.style.background = 'black';
                }, tim);
                tim += vitesse;
                setTimeout(() => {
                    prog_5.style.background = 'coral';
                }, tim);
                tim += vitesse;
                setTimeout(() => {
                    prog_6.style.background = 'black';
                }, tim);
                tim += vitesse;

                setTimeout(() => {
                    prog_6.style.background = 'coral';
                }, tim);
                tim += vitesse;
                setTimeout(() => {
                    prog_7.style.background = 'black';
                    affichage_message.innerText = 'INSERTION iMPOSSIBLE !';
                }, tim);
                tim += vitesse;
                setTimeout(() => {
                    prog_7.style.background = 'coral';
                    prog_6.style.display = 'none';
                    prog_5.style.display = 'none';
                    prog_3.style.display = 'none';
                    prog_7.style.display = 'none';
                    prog_1.style.display = 'none';
                    prog_4.style.display = 'none';
                    prog_2.style.display = 'none';
                    //supprimer l'algorithme qui se deroule.
                }, tim);
                tim += vitesse;
                tim += vitesse;
                setTimeout(() => {
                    affichage_message.innerText = ''; //mise à jour de la zone des messages.
                }, tim);
                tim += vitesse;
                k = 1;
                break;
            }
        }
        if (k !== 1) {
            //k <> 1 : pour ne pas inserer les doublons.
            if (case_vide > 1) {
                // on n'insere que si cette case vide n'est la derniere qui est vide dans la table.
                setTimeout(() => {
                    prog_1.style.background = 'black';
                }, tim);
                tim += vitesse;
                setTimeout(() => {
                    prog_1.style.background = 'coral';
                }, tim);
                tim += vitesse;
                setTimeout(() => {
                    prog_2.style.background = 'black';
                }, tim);
                tim += vitesse;
                setTimeout(() => {
                    prog_2.style.background = 'coral';
                }, tim);
                tim += vitesse;
                setTimeout(() => {
                    prog_3.style.background = 'black';
                }, tim);
                tim += 500;
                setTimeout(() => {
                    prog_3.style.background = 'coral';
                }, tim);
                tim += vitesse;
                if (tableauhachage[val.value % 9].value == '' && case_vide > 1) {
                    //case_vide > 1 pour laisser la case derniere vide.
                    //tableauhachage[val.value % 9].value pour acceder à la valeur de la case.
                    setTimeout(() => {
                        prog_4.style.background = 'black';
                        tableauhachage[val.value % 9].style.background = 'yellow';
                        tableauhachage[val.value % 9].value = val.value; //insertion de la valeur
                    }, tim);
                    tim += vitesse;
                    setTimeout(() => {
                        prog_4.style.background = 'coral';
                        affichage_message.innerHTML = 'Insertion terminee'; //insertion terminée avec succes
                    }, tim);
                    tim += vitesse;
                    setTimeout(() => {
                        prog_7.style.background = 'black';
                    }, tim);
                    tim += vitesse;
                    setTimeout(() => {
                        prog_7.style.background = 'coral';
                        tableauhachage[val.value % 9].style.background = 'aqua';
                    }, tim);
                    tim += vitesse;
                    setTimeout(() => {
                        affichage_message.innerHTML = '';
                        prog_6.style.display = 'none';
                        prog_5.style.display = 'none';
                        prog_3.style.display = 'none';
                        prog_7.style.display = 'none';
                        prog_1.style.display = 'none';
                        prog_4.style.display = 'none';
                        prog_2.style.display = 'none';
                    }, tim);
                    tim += vitesse;
                } else { //il y a une collision.
                    let sauvgarde_indice = '';
                    let j = 0;
                    i = val.value % 9 - 1;
                    //i=val.value % 9 +4;
                    if (i < 0) i = 8;
                    while (j != 1) {
                        sauvgarde_indice = sauvgarde_indice + `${i};`;
                        //on ajoute le i au sauvgarde.
                        setTimeout(() => {
                            tableauhachage[i].style.background = 'yellow';
                        }, tim);
                        tim += vitesse;
                        setTimeout(() => {
                            prog_3.style.background = 'black';
                        }, tim);
                        tim += vitesse;
                        setTimeout(() => {
                            prog_3.style.background = 'coral';
                        }, tim);
                        tim += vitesse;
                        if (tableauhachage[i].value == '' && case_vide > 1) {
                            setTimeout(() => {
                                prog_4.style.background = 'black';
                            }, tim);
                            tim += vitesse;
                            setTimeout(() => {
                                prog_4.style.background = 'coral';
                            }, tim);
                            tim += vitesse;
                            setTimeout(() => {
                                tableauhachage[i].value = val.value;
                                tableauhachage[i].style.background = 'red';
                            }, tim);
                            tim += vitesse;
                            j = 1;
                            setTimeout(() => {
                                tableauhachage[i].style.background = 'aqua';
                            }, tim);
                            tim += vitesse;
                            setTimeout(() => {
                                prog_7.style.background = 'black';
                            }, tim);
                            tim += vitesse;
                            setTimeout(() => {
                                prog_7.style.background = 'coral';
                                affichage_message.innerText = '';
                                prog_6.style.display = 'none';
                                prog_5.style.display = 'none';
                                prog_3.style.display = 'none';
                                prog_7.style.display = 'none';
                                prog_1.style.display = 'none';
                                prog_4.style.display = 'none';
                                prog_2.style.display = 'none';
                            }, tim);
                            tim += vitesse;
                            setTimeout(() => {
                                // affichage de la sequence
                                affichage_message.innerHTML = 'sequence :' + sauvgarde_indice;
                            }, tim);
                            tim += vitesse;
                            setTimeout(() => {
                                affichage_message.innerHTML = '';
                            }, tim + vitesse);
                            tim += vitesse;
                        } else {
                            i = i - 1;
                            if (i < 0)
                                i = 8; // la sequence est circulaire
                        }
                    }
                }
            } else {
                //(`case sacrifiee pour cette methode!`)
                affichage_message.innerHTML = 'case sacrifiee pour cette methode!';
                setTimeout(() => {
                    tableauhachage[indice].style.background = 'aqua'; // changer la couleur vers la couleur initiaile.
                    affichage_message.innerHTML = ''; //supprimer le message au-dessus
                }, vitesse);
                tableauhachage[indice].style.background = 'yellow';
                prog_6.style.display = 'none';
                prog_5.style.display = 'none';
                prog_3.style.display = 'none';
                prog_7.style.display = 'none';
                prog_1.style.display = 'none';
                prog_4.style.display = 'none';
                prog_2.style.display = 'none';
                /** masquer les lignes de l'algorithme **/
            }
        }
    });

}
/**************insertion terminée*************/
function suppression() {
    /** c'est une vidation de la structure **/
    let tab = essai_tab.getElementsByTagName('input');
    for (let i = 0; i < 9; i++) {
        tab[i].value = '';
        // pour chaque case on lui associe la valeur vide .
    }
}

function chercher_essai_tab() {
    essai_tab.style.display = 'inline';
    if (essai_tab.getElementsByTagName('input').length > 9) {
        /** alors il existe des inputs dans cette division
        on supprime la derniere pour qu'on garde un seule input soit pour inserer soit pour rechercher.**/
        essai_tab.getElementsByTagName('input').item(9).remove();
        if (essai_tab.getElementsByTagName('p').length > 0) {
            while (essai_tab.getElementsByTagName('p').length > 0) {
                essai_tab.getElementsByTagName('p').item(0).remove(); // on supprime le paragraphe associé.
            }
        }
    }
    let vale = document.createElement('input');
    essai_tab.appendChild(vale);
    vale.type = 'number';
    let cherchez = document.createElement('p');
    cherchez.innerText = 'chercher';
    essai_tab.appendChild(cherchez);
    vale.style.marginLeft = '300px';
    cherchez.style.marginLeft = '300px';
    vale.style.background = 'yellow';
    cherchez.style.color = 'red';
    let tableauhachage = document.getElementById('div_essai_tab').getElementsByTagName("input");
    cherchez.id = "recherche_essai_tab";
    cherchez.addEventListener('click', () => {
        var vitesse = ((Number(slider.value))) * 10; // on recupere la vitesse d'apres l'horloge
        /**apres on cree les lignes de l'algorithme et les injecter dans la zone de deroulement**/
        const alg_1 = document.createElement('p');
        alg_1.innerText = ` TQ NonTrouve OU Nonexiste(${vale.value}) :`;
        const alg_1_2 = document.createElement('p');
        const alg_2 = document.createElement('p');
        alg_2.innerText = `Si tab[i] = ${vale.value} alors :`;
        const alg_3 = document.createElement('p');
        alg_3.innerText = `trouv <-- vrai;aller Fin;`;
        const alg_4 = document.createElement('p');
        alg_4.innerText = `Si NonTrouv alors :`;
        const alg_5 = document.createElement('p');
        alg_5.innerText = ` Afficher(valeur introuvable);`;
        const alg_6 = document.createElement('p');
        alg_6.innerText = `Fin.`;
        let timm = vitesse;
        affichage_message.innerHTML = `hachage(${vale.value}) <-- (${vale.value} MOD 9 =${vale.value % 9});`;
        // claculer la valeur du hachage et l'afficher.
        setTimeout(() => {
            affichage_message.innerHTML = ''; //mise à jour
        }, 3000);
        ajouter.appendChild(alg_1);
        ajouter.appendChild(alg_2);
        ajouter.appendChild(alg_3);
        ajouter.appendChild(alg_4);
        ajouter.appendChild(alg_5);
        ajouter.appendChild(alg_6);
        // ajouter sert à ajouter les lignes de l'algorithme à la zone orange.
        let h = 0;
        let dem = vale.value % 9; // calcul d'adresse avec la foncion modulo
        let sauvgarde_indice = ''; //chaine qui commence par le vide
        let i = vale.value % 9; // indice commence par la valeur retournée par la fonction du hachage

        while (h != 1) {
            setTimeout(() => {
                alg_1.style.background = 'black';
            }, timm);
            timm += vitesse;
            setTimeout(() => {
                alg_1.style.background = 'coral';
            }, timm);
            timm += vitesse;
            setTimeout(() => {
                alg_2.style.background = 'black';
                tableauhachage[i].style.background = 'yellow';
            }, timm);
            timm += vitesse;
            setTimeout(() => {
                alg_2.style.background = 'coral';
                tableauhachage[i].style.background = 'aqua';
            }, timm);
            timm += vitesse;
            if (tableauhachage[i].value == '') {
                /** si la case concernée est vide  **/
                setTimeout(() => {
                    alg_4.style.background = 'black';
                    tableauhachage[i].style.background = 'yellow';
                }, timm);
                timm += vitesse;
                setTimeout(() => {
                    alg_4.style.background = 'coral';
                    tableauhachage[i].style.background = 'aqua';
                }, timm);
                timm += vitesse;
                setTimeout(() => {
                    alg_5.style.background = 'black';
                }, timm);
                timm += vitesse;
                setTimeout(() => {
                    alg_5.style.background = 'coral';
                }, timm);
                timm += vitesse;
                setTimeout(() => {
                    alg_6.style.background = 'black';
                }, timm);
                timm += vitesse;
                setTimeout(() => {
                    alg_6.style.background = 'coral';
                    alg_1_2.style.display = 'none';
                    alg_2.style.display = 'none';
                    alg_3.style.display = 'none';
                    alg_4.style.display = 'none';
                    alg_1.style.display = 'none';
                    alg_5.style.display = 'none';
                    alg_6.style.display = 'none';
                    // on masque toutes les lignes de l'algorithme apres execution.
                }, timm);
                timm += vitesse;
                setTimeout(() => {
                    affichage_message.innerText = 'valeur introuvable !';
                    // afficher le message au niveau de la place verte de la page .
                }, timm);
                timm += vitesse;
                setTimeout(() => {
                    affichage_message.innerHTML = ''; //mise à jour avec suppression du message qui est avant
                }, timm);
                timm += vitesse;
                h = 1;
                break;
            }

            if (Number(tableauhachage[i].value) == vale.value) {
                // si la valeur de la case est égale à la valeur cherchée.
                setTimeout(() => {
                    tableauhachage[i].style.background = 'yellow'; //colorer la case par le jaune
                    alg_3.style.background = 'black';
                }, timm);
                timm += vitesse;
                setTimeout(() => {
                    alg_3.style.background = 'coral';
                }, timm);
                timm += vitesse;
                setTimeout(() => {
                    alg_6.style.background = 'black'; //colorer la ligne alg_6 avec noire
                }, timm);
                timm += vitesse;
                setTimeout(() => {
                    alg_6.style.background = 'coral'; // colorer avec l'orange
                    alg_1_2.style.display = 'none';
                    alg_2.style.display = 'none';
                    alg_3.style.display = 'none';
                    alg_4.style.display = 'none';
                    alg_1.style.display = 'none';
                    alg_5.style.display = 'none';
                    alg_6.style.display = 'none';
                    /** on masque les lignes de l'algorithme  **/
                }, timm);
                timm += vitesse;
                setTimeout(() => {
                    tableauhachage[i].style.background = 'aqua'; // revient à la couleur initiale
                    affichage_message.innerText = `LA VALEUR EXISTE `; //la valeur est trouvée
                }, timm);
                timm += vitesse;
                setTimeout(() => {
                    affichage_message.innerHTML = ''; //supprimer le message qui est avant
                }, timm);
                timm += vitesse;
                setTimeout(() => {
                    // affichage de la sequence de la recherche
                    affichage_message.innerHTML = 'la sequence:' + sauvgarde_indice;
                }, timm + vitesse);
                timm += vitesse;
                setTimeout(() => {
                    affichage_message.innerHTML = ''; // mise à jour du champs message
                }, timm + vitesse);
                timm += vitesse;
                h = 1;
                break; // stop la boocle
            } else {
                i = i - 1; // decrementation de i et recherche dans les cases precedentes
                if (i < 0) i = 8; // la sequence est circulaire on revient à 8 apres le 0
                sauvgarde_indice += `${i};`; //sauvgarde sert à sauvgarder la sequence de recherche
            }
        }
    });

}

function creer_fichier() {
    // création de fichier avec la methode d'essai linéaire sur les fichiers
    if (essai_fich.getElementsByTagName('input').length == 0) {
        let p = document.createElement('p'); // creation de paragraphe.
        p.innerHTML = 'essayez de creer 4 blocs et 3 enreg pour une bonne visualisation';
        essai_fich.appendChild(p); // ajouter à la division du travail
        p.style.marginLeft = '40px'; //gerer le margin à gauche .
        setTimeout(() => {
            essai_fich.getElementsByTagName('p').item(0).remove();
            //masquer cet message
        }, 2000);
        essai_tab.style.display = 'none'; //masquer la division
        separe_tab.style.display = 'none'; //masquer la division
        separe_fich.style.display = 'none'; //masquer la division
        en_ligne.style.display = 'none'; //masquer la division
        essai_fich.style.display = 'inline'; //visualiser la division de de cette methode.
        let cree = document.createElement('p');
        cree.innerHTML = 'creer->'; // cree sert à lui associe un evenement de creation
        cree.style.marginLeft = '100px'; //le margin à gauche
        val.style.background = 'red'; //background rouge
        val2.style.background = 'red'; //backgrounf rouge
        cree.style.color = 'red'; //background rouge
        val.placeholder = 'value'; //le text par defaut
        val2.placeholder = 'value'; //le text par defaut
        essai_fich.appendChild(val); //on ajoute val à la division de travail
        essai_fich.appendChild(val2); //on ajoute val2 à essai_fich
        essai_fich.appendChild(cree); //on ajoute cree q essai_fich
        document.getElementById('title').getElementsByTagName('a').item(1).style.color = '#fff';
        document.getElementById('title').getElementsByTagName('a').item(0).style.color = 'red'; //actualiser la methode
        //essai_fich
        document.getElementById('title').getElementsByTagName('a').item(3).style.color = '#fff';
        document.getElementById('title').getElementsByTagName('a').item(2).style.color = '#fff';
        // on demasque les autres methodes.
        cree.addEventListener('click', () => {
            val.remove();
            val2.remove();
            cree.remove();
            // on supprime les buttons pour ne pas perturber l'utilisateur.
            if (val2.value < 1) {
                affichage_message.innerHTML = 'creation impossible'; // il faudra un message à l'utilisateur
                setTimeout(() => {
                    affichage_message.innerHTML = '';
                    // mise à jour de champ de messages.
                }, 1000);
            } else {
                // la creation de fichier
                for (let i = 0; i < val.value; i++) { // i de 0 à nbr-bloc
                    for (let j = 0; j < val2.value; j++) { //j de 0 à nbr-enreg
                        let inp = document.createElement('input'); //creation d'un enregistrement de type input
                        inp.type = 'button'; // changer le type vers un button pour ne pas changer la valeur
                        inp.style.display = 'flex'; //mise en form de cet enregistrement
                        essai_fich.appendChild(inp); // on ajout cet enregistrement à la division du travail
                        inp.style.background = 'aqua'; //gerer la couleur
                        inp.style.marginLeft = '60px'; //pour gerer le mergin pour que ca sera plus visible.
                    }
                    let hhh = document.createElement('p'); //creation d'un message de type paragraphe.
                    hhh.innerText = `---bloc ${i}--`; //afficher le numero du bloc en-dessous
                    hhh.style.color = 'BLACK'; //la couleur noire pour cet message
                    hhh.style.marginLeft = '40px'; // mise en form de
                    essai_fich.appendChild(hhh); //pour separer les blocs entre eux;
                }
            }
        });
    } else
        alert('fichier cree aleatoirement');
} /** fin de traitement pour la creation de la structure **/
/** la fonction qui gére les operations de l'aide en ligne au demarage en affichant la fonction
 suivant mais pas la fonction precedent dans un premier temps avec la premiere page de l'aide **/
document.getElementById("aide_en_ligne_function").addEventListener('click', function() {
    document.querySelector(".aide").style.display = "block";
    essai_tab.style.display = 'none'; //la division de essai tab est démasquée
    essai_fich.style.display = 'none'; //la division de essai_fich est demasquée
    separe_fich.style.display = 'none'; //la division de separe_fich est demasquée
    separe_tab.style.display = 'none'; //la division de separe_tab est demasquée
    document.getElementById("aide3").style.display = 'none';
    document.getElementById("aide2").style.display = 'none';
    document.getElementById("aide4").style.display = 'none';
    document.getElementById("suivant").style.display = "flex"; // affichage de la fonction suivant
    document.getElementById("aide1").style.display = 'flex'; // afficher la premiere page
    document.getElementById("precedent").style.display = "none"; // masquer la fonction precedent
});

document.querySelector('#quitte').addEventListener('mouseover', function(e) {
    e.target.style.backgroundColor = 'red';
    /** la coleur "rouge" associée à l'evenement si le curseur est  sur le button quitter**/
});
document.querySelector('#quitte').addEventListener('mouseout', function(e) {
    e.target.style.backgroundColor = 'rgb(34, 69, 200)';
    /** la coleur associée à l'evenement si le curseur n'est pas sur le button quitter**/
});

document.querySelector('#suivant').addEventListener('mouseover', function(e) {
    e.target.style.backgroundColor = 'rgb(34, 111, 200)';
    /** la coleur associée à l'evenement si le curseur est  sur le button suivant**/
});
document.querySelector('#suivant').addEventListener('mouseout', function(e) {
    e.target.style.backgroundColor = 'rgb(34, 69, 200)';
    /** la coleur associée à l'evenement si le curseur n'est pas sur le button suivant**/
});


document.querySelector('#precedent').addEventListener('mouseover', function(e) {
    e.target.style.backgroundColor = 'rgb(34, 111, 200)';
    /** la coleur associée à l'evenement si le curseur est  sur le button precedent**/
});
document.querySelector('#precedent').addEventListener('mouseout', function(e) {
    e.target.style.backgroundColor = 'rgb(34, 69, 200)';
    /** la coleur associée à l'evenement si le curseur n'est pas sur le button precedent**/
});
document.getElementById("suivant").addEventListener('click', function() {
    /** si le slide est de numero 1 on accede au deuxieme **/
    if (document.getElementById("aide1").style.display != 'none') {
        document.getElementById("aide1").style.display = 'none';
        document.getElementById("aide4").style.display = 'none';
        document.getElementById("aide2").style.display = 'flex';
        document.getElementById("precedent").style.display = "flex";
    } else /** si le slide est de numero 2 on accede au troisiemem **/
    if (document.getElementById("aide2").style.display != 'none') {
        document.getElementById("aide2").style.display = 'none';
        document.getElementById("aide3").style.display = 'flex';
        document.getElementById("aide4").style.display = 'none';
    } else {
        /** si le slide est de numero 3 on accede au quatrieme **/
        document.getElementById("aide1").style.display = 'none';
        document.getElementById("aide2").style.display = 'none';
        document.getElementById("aide3").style.display = 'none';
        document.getElementById("aide4").style.display = 'flex';
        document.getElementById("suivant").style.display = "none";
    }
});
/** inmplimentation de la fonction precedent de l'aide en ligne **/
document.getElementById("precedent").addEventListener('click', function() {
    if (document.getElementById("aide4").style.display != 'none') {
        /** si le slide est de numero 4 on revient au troisiemem **/
        document.getElementById("aide4").style.display = 'none';
        document.getElementById("aide3").style.display = 'flex';
        document.getElementById("aide1").style.display = 'none';
        document.getElementById("aide2").style.display = 'none';
        document.getElementById("suivant").style.display = "flex";
    } else if (document.getElementById("aide3").style.display != 'none') {
        /** si le slide est de numero 3 on revient au deuxieme **/
        document.getElementById("aide3").style.display = 'none';
        document.getElementById("aide2").style.display = 'flex';
        document.getElementById("aide4").style.display = 'none';
        document.getElementById("aide1").style.display = 'none';

    } else {
        /** si le slide est de numero 2 on revient à la premiere page de l'aide **/
        document.getElementById("precedent").style.display = "none";
        document.getElementById("aide1").style.display = 'flex';
        document.getElementById("aide2").style.display = 'none';
        document.getElementById("aide3").style.display = 'none';
        document.getElementById("aide4").style.display = 'none';
    }
});
/********************************* la fonction quitter de l'aide de la page ****************************************/
document.querySelector('#quitte').addEventListener('click', () => {
    /**gerer la fonction  quitter de l'aide en ligne **/
    if (document.getElementById('aide_en_ligne').style.display != 'none')
        document.getElementById('aide_en_ligne').style.display = 'none';
});
/** Remarque :
Toutes les lignes de la forme 
Ligne.style.background ='black';
Ligne.style.background='coral';
Sont utilisées pour le déroulement des
algorithmes dans la fonction setTimeout
qui sert à senchroniser le temps entre les étapes du déroulement **/