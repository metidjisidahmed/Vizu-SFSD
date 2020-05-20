//Aide en ligne
/*Ouverture par défaut de la fenetre d'aide*/
document.querySelector(".aide").style.display = "block";
document.getElementById("photo2").style.display = 'none';
document.getElementById("photo1").style.display = 'none';
document.getElementById("photo3").style.display = "none";
document.getElementById("photo4").style.display = "none";
document.getElementById("photo5").style.display = "none";
document.getElementById("photo6").style.display = "none";
document.getElementById("suivant").style.display = "flex";
document.getElementById("photo").style.display = 'flex';
document.getElementById("precedent").style.display = "none";
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
document.getElementById('quitte').addEventListener('click', function() {
    $('.aide').fadeOut();
});
document.getElementById("aide-hide").addEventListener('click', function() {
    document.querySelector(".aide").style.display = "block";
    document.getElementById("photo2").style.display = 'none';
    document.getElementById("photo1").style.display = 'none';
    document.getElementById("photo3").style.display = "none";
    document.getElementById("photo4").style.display = "none";
    document.getElementById("photo5").style.display = "none";
    document.getElementById("photo6").style.display = "none";
    document.getElementById("suivant").style.display = "flex";
    document.getElementById("photo").style.display = 'flex';
    document.getElementById("precedent").style.display = "none";
});
document.getElementById("suivant").addEventListener('click', function() {
    if (document.getElementById("photo").style.display != 'none') {
        document.getElementById("photo").style.display = 'none';
        document.getElementById("photo1").style.display = 'flex';
        document.getElementById("precedent").style.display = "flex";
    } else if (document.getElementById("photo1").style.display != 'none') {
        document.getElementById("photo1").style.display = 'none';
        document.getElementById("photo2").style.display = 'flex';
    } else if (document.getElementById("photo2").style.display != 'none') {
        document.getElementById("photo2").style.display = 'none';
        document.getElementById("photo3").style.display = 'flex';
        document.getElementById("precedent").display = 'flex';
    } else if (document.getElementById("photo3").style.display != 'none') {
        document.getElementById("photo3").style.display = 'none';
        document.getElementById("photo4").style.display = 'flex';
    } else if (document.getElementById("photo4").style.display != 'none') {
        document.getElementById("photo4").style.display = 'none';
        document.getElementById("photo5").style.display = 'flex';
    } else if (document.getElementById("photo5").style.display != 'none') {
        document.getElementById("photo5").style.display = 'none';
        document.getElementById("photo6").style.display = 'flex';
        document.getElementById("suivant").style.display = 'none';
    }
});
document.getElementById("precedent").addEventListener('click', function() {
    if (document.getElementById("photo6").style.display != 'none') {
        document.getElementById("photo6").style.display = 'none';
        document.getElementById("photo5").style.display = 'flex';
        document.getElementById("suivant").style.display = 'flex';
    } else if (document.getElementById("photo5").style.display != 'none') {
        document.getElementById("photo5").style.display = 'none';
        document.getElementById("photo4").style.display = 'flex';
    } else if (document.getElementById("photo4").style.display != 'none') {
        document.getElementById("photo4").style.display = 'none';
        document.getElementById("photo3").style.display = 'flex';
    } else if (document.getElementById("photo3").style.display != 'none') {
        document.getElementById("photo3").style.display = 'none';
        document.getElementById("photo2").style.display = 'flex';
    } else if (document.getElementById("photo2").style.display != 'none') {
        document.getElementById("photo2").style.display = 'none';
        document.getElementById("photo1").style.display = 'flex';
    } else {
        document.getElementById("photo1").style.display = 'none';
        document.getElementById("photo").style.display = 'flex';
        document.getElementById("precedent").style.display = "none";
    }
});
//menu des opérations
//menu des opérations
document.getElementById("menu-hide").addEventListener('click', function() {

    if ((document.getElementById("menu").style.width == '0px') || (document.getElementById("menu").style.width == '230px')) {
        if (document.getElementById("menu").style.width == '0px') {
            for (let index = 0; index < 231; index++) {
                setTimeout(() => {
                    document.getElementById("menu").style.width = index + 'px';
                }, index);
            }
        } else {
            for (let index = 230; index > -1; index--) {
                setTimeout(() => {
                    document.getElementById("menu").style.width = index + 'px';
                }, (230 - index) * 0.9);
            }
            $("#creat-action").fadeOut(250);
            $("#search-action").fadeOut(250);
            $("#delete-action").fadeOut(250);
            $("#requete-action").fadeOut(250);
            $("#insert-action").fadeOut(250);
            $("#effcer-trace-action").fadeOut(250);
            $("#actualiser-arbre-action").fadeOut(250);
        }
        if (document.getElementById("menu-hide-img").className == "rotateLeft") {
            document.getElementById("menu-hide-img").className = "rotateRight";
        } else {
            document.getElementById("menu-hide-img").className = "rotateLeft";
        }
    }
});
//la fenetre du déroulement de l'algorithme
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

document.getElementById("insert").addEventListener('click', function() {
    if (document.getElementById("insert-action").style.display == 'none') {
        $("#creat-action").fadeOut();
        $("#search-action").fadeOut();
        $("#delete-action").fadeOut();
        $("#requete-action").fadeOut();
        $("#insert-action").fadeIn();
        $("#effacer-trace-action").fadeOut();
        $("#restaurer-action").fadeOut();
        $("#actualiser-arbre-action").fadeOut();

    } else $("#insert-action").fadeOut();

});
document.getElementById("requete").addEventListener('click', function() {
    if (document.getElementById("requete-action").style.display == 'none') {
        $("#creat-action").fadeOut();
        $("#search-action").fadeOut();
        $("#delete-action").fadeOut();
        $("#insert-action").fadeOut();
        $("#requete-action").fadeIn();
        $("#effacer-trace-action").fadeOut();
        $("#actualiser-arbre-action").fadeOut();
        $("#restaurer-action").fadeOut();

    } else
        $("#requete-action").fadeOut();

});

document.getElementById("effacer-trace").addEventListener('click', function() {
    if (document.getElementById("effacer-trace").style.display == 'none') {
        $("#creat-action").fadeOut();
        $("#search-action").fadeOut();
        $("#delete-action").fadeOut();
        $("#insert-action").fadeOut();
        $("#requete-action").fadeOut();
        $("#effacer-trace-action").fadeIn();
        $("#actualiser-arbre-action").fadeOut();
        $("#restaurer-action").fadeOut();

    } else
        $("#effacer-trace-action").fadeOut();

});

document.getElementById("actualiser-arbre-action").addEventListener('click', function() {
    if (document.getElementById("actualiser-arbre-action").style.display == 'none') {
        $("#creat-action").fadeOut();
        $("#search-action").fadeOut();
        $("#delete-action").fadeOut();
        $("#insert-action").fadeOut();
        $("#requete-action").fadeOut();
        $("#effacer-trace-action").fadeOut();
        $("#restaurer-action").fadeOut();
        $("#actualiser-arbre-action").fadeIn();
    } else
        $("#actualiser-arbre-action").fadeOut();

});

document.getElementById("restaurer-action").addEventListener('click', function() {
    if (document.getElementById("restaurer-action").style.display == 'none') {
        $("#creat-action").fadeOut();
        $("#search-action").fadeOut();
        $("#delete-action").fadeOut();
        $("#insert-action").fadeOut();
        $("#requete-action").fadeOut();
        $("#effacer-trace-action").fadeOut();
        $("#restaurer-action").fadeIn();
        $("#actualiser-arbre-action").fadeOut();
    } else
        $("#restaurer-action").fadeOut();

});
document.getElementById("search").addEventListener('click', function() {
    if (document.getElementById("search-action").style.display == 'none') {

        $("#search-action").fadeIn();
        $("#delete-action").fadeOut();
        $("#insert-action").fadeOut();
        $("#requete-action").fadeOut();
        $("#effacer-trace-action").fadeOut();
        $("#restaurer-action").fadeOut();
        $("#actualiser-arbre-action").fadeOut();
    } else $("#search-action").fadeOut();


});
document.getElementById("delete").addEventListener('click', function() {
        if (document.getElementById("delete-action").style.display == 'none') {

            $("#search-action").fadeOut();
            $("#delete-action").fadeIn();
            $("#insert-action").fadeOut();
            $("#requete-action").fadeOut();
            $("#effacer-trace-action").fadeOut();
            $("#restaurer-action").fadeOut();
            $("#actualiser-arbre-action").fadeOut();

        } else $("#delete-action").fadeOut();

    })
    //////////////////////////////////////////
    //////////////////////////////////////////

document.querySelector('#insert').addEventListener('mouseover', function(e) {
    e.target.style.backgroundColor = 'black';
});
document.querySelector('#insert').addEventListener('mouseout', function(e) {
    e.target.style.backgroundColor = 'lightseagreen';
});

document.querySelector('#restaurer').addEventListener('mouseover', function(e) {
    e.target.style.backgroundColor = 'black';
});

document.querySelector('#restaurer').addEventListener('mouseout', function(e) {
    e.target.style.backgroundColor = 'lightseagreen';
});

document.querySelector('#requete').addEventListener('mouseover', function(e) {
    e.target.style.backgroundColor = 'black';
});
document.querySelector('#requete').addEventListener('mouseout', function(e) {
    e.target.style.backgroundColor = 'lightseagreen';
});
document.querySelector("#effacer-trace").addEventListener("mouseover", function(e) {
    e.target.style.backgroundColor = 'black';
});
document.querySelector("#effacer-trace").addEventListener("mouseout", function(e) {
    e.target.style.backgroundColor = 'lightseagreen';
});
document.querySelector('#actualiser-arbre').addEventListener('mouseover', function(e) {
    e.target.style.backgroundColor = 'black';
});
document.querySelector('#actualiser-arbre').addEventListener('mouseout', function(e) {
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

///////////////algorithme arbre//////////////////////
const algo_insertion = `<p id="procedure">Procedure Insertion(fichier,enr)  </p>
          <p id="algo1">SI (nbrInsertions = 0) creation(fichier);&nbsp;&nbsp;  ALLER FIN; &nbsp;&nbsp;FSI</p>
          <p id="algo2">&nbsp;&nbsp;SINON&nbsp;&nbsp;Recherche(fichier,enr.cle,i,j,trouve); </p>
          <p id="algo3">&nbsp;&nbsp;&nbsp;&nbsp;SI (!trouve) </p>
          <p id="algo4"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;affecter_Fichier(fichier,enr,i,j);</p>
          <p id="algo5"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Mettre à jour l'index &nbsp;&nbsp;&nbsp;&nbsp; (insertion arbre);</p>
          <p id="algo6"> &nbsp;&nbsp;&nbsp;&nbsp;FSI</p>
          <p id="algo7" >FIN</p>`;

const algo_supression = `<p id="procedure">Procedure Suppression(fichier,cle)</p>
          <p id="algo1">SI (nbrInsertion = 0) &nbsp;&nbsp;  ALLER FIN;&nbsp;&nbsp;&nbsp;&nbsp;FSI</p>
        <p id="algo2">&nbsp;&nbsp;&nbsp;&nbsp;SINON&nbsp;&nbsp;Recherche(fichier,cle,i,j,trouve);</p>
          <p id="algo3">&nbsp;&nbsp;&nbsp;&nbsp;SI(trouve)&nbsp;&nbsp </p>
          <p id="algo4">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Supression du enr(i,j) au niveau du fichier //disque</p>
          <p id="algo5"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Mettre à jour l'index &nbsp;&nbsp; //supression au niveau de l'arbre</p>
          <p id="algo6"> &nbsp;&nbsp;&nbsp;&nbsp;FSI</p>
          <p id="algo7" >FIN</p>`;

const algo_recherche = `<p id="procedure">Procedure Recherche(fichier,cle,i,j,trouve)</p>
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


const algo_requete = `<p id="procedure">Procedure requete(noeud, min, max) // index = noeud</p>
          <p id="algo1">SI (noeud = NIL) &nbsp;&nbsp;  ALLER FIN;&nbsp;&nbsp;&nbsp;&nbsp;FSI</p>
          <p id="algo2">SINON SI (noeud.valeur &#8712 [min, max]); ALORS Accpéter</p>
          <p id="algo3">SINON Réfuser</p>
          <p id="algo4">SI noeud.valeur < min;&nbsp;&nbsp;&nbsp;&nbsp;requete(noeud.FD, min, max);</p>
          <p id="algo5">SINON SI noeud.valeur > max&nbsp;&nbsp;&nbsp;&nbsp;requete(noeud.FG, min, max)</p>
          <p id="algo6">SINON&nbsp;&nbsp;requete(noeud.FG,min,max);&nbsp;requete(noeud.FD,min,max)</p>
          <p id="algo7" >FIN&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//FG : fils gauche, FD : fils droit</p>`;
///////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////
//pour controler la fenetre du déroulement de l'algorithm
function algorithme(num, taille) {
    document.getElementById("procedure").style.backgroundColor = "coral";
    for (let index = 1; index <= taille; index++) {
        document.getElementById("algo" + index).style.backgroundColor = "coral";
    }
    if (num > 0)
        document.getElementById("algo" + num).style.backgroundColor = "black";
    else if (num == 0) document.getElementById("procedure").style.backgroundColor = "black";

}
//index arbre
const arbreTitle = document.querySelector("#title-arbre");
arbreTitle.addEventListener("click", function() {
    location.reload();
});
const buildIndexElement = document.getElementById("buildIndex");
document.getElementById("submit_nb_value").addEventListener("click", function() {
    const yay = document.getElementById("yay");
    if (yay != undefined) {
        buildIndexElement.style.display = "flex";
        document.getElementById("submit_nb_value").style.display = 'none';
    }
});

let tailleH = document.documentElement.clientHeight;
let topp = $('#header').innerHeight();
let bass = $('#cote-bas').innerHeight();
document.querySelector('.tree').style.height = (tailleH - topp - bass - 10) + 'px';

let tailleW = document.documentElement.clientWidth;
let gauche = $('#cote_gauche').innerWidth();
let droite = $('#cote_droit').innerWidth();
document.querySelector('.tree').style.width = (tailleW - gauche - droite + 35) + 'px';

$(window).resize(function() {
    let tailleH = document.documentElement.clientHeight;
    let topp = $('#header').innerHeight();
    let bass = $('#cote-bas').innerHeight();
    document.querySelector('.tree').style.height = (tailleH - topp - bass - 10) + 'px';

    let tailleW = document.documentElement.clientWidth;
    let gauche = $('#cote_gauche').innerWidth();
    let droite = $('#cote_droit').innerWidth();
    document.querySelector('.tree').style.width = (tailleW - gauche - droite + 35) + 'px';
});

var nodes = []; //pour garder tous les noeud de l'arbre
var indexByCle = []; //pour accéder a l'index apartir de la cle
var newEngs = []; //pour stocker les enregistrement de tout le fchier
var engByCle = []; //pour accéder a un enregistrement avec une clé donnée
var blocs = [
    []
];
var offsetIndex = -100; //pour la donction de génération des valeurs d'index
var t = null; //pour sauvgarder la référence d'un noeud
var I = 1; //numéro de dernier bloc de fichier
var J = 0; //position du dernier enregistrement
var N = 0; //taille du fichier tout entier
var newNode = null; //pour garder la réference du nouveau noeud inséré 
var parent = null; //parent du nouveau noeud insérer
var traversedLength = 0; //la longeur du chemin de parcour 
var maxEng = 2; //nombre max d'enregistrement par bloc, par défaut c'est 2
var tree = new Tree(); //instancier un nouveau objet de type Tree(arbre)
var vitesse = 1; //coef de la vitesse, 1 par défaut
var inserted = false; //var bool, pour indiquer si une opération d'insertion est bien efféctuée 
var toDelete = -1; //la clé du noeud a supprimer
var rangeCnt = 0; //les engs trouvés
var equilibrer = false; //pour conaitre si l'utilisateur a fait un équilibrage
var afterEquilibrer = []; //pour sauvegarder les enregistrements du fichier lorsque on veut correspondant a l'état d'équilibrage 
var option = false; //pour indiquer l'activation de la 2ème méthode d'index 
var backup = [
    []
]; //pour sauvgarder une copie du fichier (les blocs)
var bI = -1; //nombre de blocs pour la copie du fichier
var bJ = -1; //la dernière d'enregistrement pour la copie du fichier
var nbEcrt = 0; // nombre de lectures disque
var nbLect = 0; // nombre d'écriture disque
var entete = [];
const ecrt = document.getElementById("ecrt");
const lect = document.getElementById("lect");

function setup() {
    const ui = new UI();
    var readyIndex = false;
    var allEngs = [];
    var methodElement = document.getElementById("title-methode");
    methodElement.addEventListener("click", function() {
        if (readyIndex === false) {
            option = true;
            alert("c fait !, vous pouvez construire l'index avec cette méthode");
        } else {
            alert("hmmm !, impossible car vous avez déja contruit l'index");
        }
    });
    //le controle de la vitesse du déroulement
    var slider = document.getElementById("myRange");
    slider.addEventListener('click', function() {
        vitesse = (Number(slider.value) / 100);
    });
    //la construction de l'index
    const buildIndex = document.getElementById("buildIndex");
    buildIndex.addEventListener('click', function() {
        var successMessage = document.getElementById("buildSuccess");
        successMessage.style.display = 'block';
        buildIndex.style.display = 'none';
        let cnt = 0;
        var id = setInterval(frame, 1);

        function frame() {
            if (cnt >= 1000) {
                successMessage.style.display = 'none';
                clearInterval(id);
                setTimeout(function() {
                    ui.readFile();
                    ui.chargementInitial(tree);
                    backup = blocs;
                    bI = I;
                    bJ = J;
                    tree.traverse(ui, tree.root);
                    setTimeout(function() {
                        ui.coverTreeAnimated(tree);
                    }, 600);
                    var treeElement = document.querySelector(".tree");
                    treeElement.style.display = "block";
                }, 500);
                readyIndex = true;
            } else { cnt += 2 }
        }
    });
    //l'équilibrage de l'arbre qui représente la structure d'index
    var createBtn = document.querySelector("#create");
    createBtn.addEventListener('click', function() {
        ui.clearTree();
        var visited = [];
        allEngs = [];
        for (let i = 1; i < blocs.length; i++) {
            var bloc = blocs[i];
            if (bloc == undefined) break;
            if (bloc.length === 0) continue; //block vide
            for (let j = 0; j < bloc.length; j++) {
                if (bloc[j] == undefined) continue;
                if (visited[bloc[j].getCle()] === true) continue;
                visited[bloc[j].getCle()] = true; //marquer comme visité pour éviter la redendance
                bloc[j].couple = new Couple(i, j);
                allEngs.push(bloc[j]); //ajouter l'enregistrement a l'ensemble des enregistrements
            }
        }
        for (let i = 0; i < newEngs.length; i++) {
            if (newEngs[i] == undefined || engByCle[newEngs[i].cle] == undefined) continue;
            allEngs.push(newEngs[i]);
        }
        //comaparateur pour definie une relation d'ordre pour le tri
        //tri selon la clé
        const cmp = function compare(eng1, eng2) {
            if (ui.generateIndex(eng1.getCle()) < ui.generateIndex(eng2.getCle())) {
                return -1;
            } else if (ui.generateIndex(eng1.getCle()) > ui.generateIndex(eng2.getCle())) {
                return 1;
            } else {
                return 0;
            }
        }
        nodes = [];
        allEngs.sort(cmp);
        var Ntree = new Tree();
        afterEquilibrer = [];
        /* Construction d'un arbre equilibré */
        ui.buildBalanceTree(Ntree, allEngs, 0, allEngs.length - 1);
        ui.clearTree();
        var k = 0;
        var nblocs = [
            [undefined]
        ];
        //état initial
        I = 1;
        J = 0;
        var engs = [];
        var k = 0;
        while (k < afterEquilibrer.length) {
            engs.push(afterEquilibrer[k]);
            if (J >= maxEng) {
                //le bloc est plein
                //donc on doit créer un nouveau bloc
                nblocs.push(engs);
                I++;
                J = 0;
                engs = [];
            } else {
                //sinon, on continue a ajouter au meme bloc, le bloc n'est pa plein encore
                J++;
            }
            k++;
        }
        //traiter le cas du dernier bloc
        if (J <= maxEng && engs.length > 0) {
            nblocs.push(engs);
        }
        //pour le dernier bloc
        J++;
        k = 0;
        //mettre a jour les enregistrement pour garder la correspondance avec la structure d'index
        for (let i = 1; i < nblocs.length; i++) {
            for (let j = 0; j < nblocs[i].length; j++) {
                nblocs[i][j].couple = new Couple(i, j);
                allEngs[k].couple = new Couple(i, j);
                k++;
            }
        }
        blocs = nblocs; //mettre a jours le fichier / les blocs
        var tmp = [];
        for (let i = 1; i < blocs.length; i++) {
            for (let j = 0; j < blocs[i].length; j++) {
                blocs[i][j].couple = new Couple(i, j);
                tmp.push(blocs[i][j]);
            }
        }
        Ntree = new Tree(); //instancier un nouvel arbre 
        //création d'un arbre correspond a l'etat actuel du fichier
        ui.buildSameTree(Ntree, tmp);
        Ntree.traverse(ui, Ntree.root);
        tree = Ntree;
        setTimeout(function() {
            //animer la construction de l'arbre
            ui.coverTreeAnimated(tree);
        }, 0);
    });
    //aprés la construction de l'index on peut etamner les opérations sur la structure
    var searchBtn = document.getElementById("submit_sea");
    var searchCnt = document.getElementById("sub_sea");
    searchBtn.addEventListener('click', function() {
        if (readyIndex != true) {
            //l'index na pas été construit, message d'erreur
            alert("Attention, vous n'avez pas construit l'index");
        } else {
            ui.clearNodes();
            const codeElement = document.getElementById("code");
            codeElement.innerHTML = algo_recherche;
            const cle = ui.generateIndex(searchCnt.value);
            const instructionInsertion = document.getElementById("instruction");
            instructionInsertion.innerHTML = "<p>&nbsp;Recherche de L'Eng de Cle&nbsp;" + cle + "&nbsp;&nbsp;</p>";
            //lancer la recherche
            ui.setCodeTrace(0, 7);
            setTimeout(function() {
                //la rechereche du noeud avec la cle "cle"
                tree.search(cle, ui);
            }, 1000);
        }
    });
    //l'opération de l'insertion
    var insertBtn = document.getElementById("submit_arb");
    insertBtn.addEventListener('click', function() {
        if (readyIndex != true) {
            alert("Attention, vous n'avez pas construit l'index");
        } else {
            ui.clearNodes(); //effacer l'abre
            var donnees = document.getElementById("donnees").value;
            var cle = document.getElementById("cle").value;
            if (parseInt(cle) > 999 || parseInt(cle) < 1 || cle === '') {
                alert("la valeur de la cle a inserer doit etre dans l'intervalle [1, 999]");
            } else {
                const instructionInsertion = document.getElementById("instruction");
                instructionInsertion.innerHTML = "<p>&nbsp;Insertion de L'Enregistrement&nbsp;&nbsp;</p>";
                var eng = new Eng(cle, donnees, ui.generateIndex(cle));

                //mettre a jour le numero du dernier bloc(i) et la position du dernier enregistrement(j)
                if (J >= parseInt(maxEng)) {
                    J = 0;
                    I++;
                } else {
                    J++;
                }
                const couple = new Couple(I - 1, J);
                eng.couple = couple;
                if (J === 0) {
                    //nouveau bloc, l'ancien bloc est plein
                    eng.couple = new Couple(I, J);
                    blocs.push([eng]);
                } else {
                    //on insère au niveau de dernier bloc, n'est pas plein
                    blocs[I - 1].push(eng);
                }
                engByCle[cle] = eng; //pour garder un correspondance, (supplemetaire)
                traversedLength = 0; //la longeur du chemin parcourut est initialement 0
                const codeElement = document.getElementById("code");
                codeElement.innerHTML = algo_insertion;
                ui.setCodeTrace(0, 7); //fentre de l'algorithm
                ui.insert(tree, eng, couple, false);
                setTimeout(function() {
                    if (newNode != null) {
                        if (inserted === true) { //insertion bien terminée
                            inserted = false; // pour éviter l'encombrement avec les prochaines insertions
                            ui.drawNode(newNode); //dessigner le noeud d'arbre
                            if (tree.root != null && parent != null) {
                                //le chainage du nouveau noeud inséré avec son parent au niveau de l'arbre
                                const edges = document.querySelector("#edge");
                                const edge = ui.createEdge(parent, newNode);
                                edges.append(edge);
                            }
                            ui.moveNode(newNode); //pour animer l'insertion
                            /************/
                            //pour éviter l'encombrement avec les prochaines insertions
                            parent = null;
                            newNode = null;
                            /***********/
                            nbEcrt++; //incrémenter le nombre de lectures disque
                            nbLect++; //incrémenter le nombre d'écritures disque
                        }
                    }
                    /******************** */
                    //mise a jour au niveau de la page HTML
                    ecrt.innerHTML = nbEcrt;
                    lect.innerHTML = nbLect;
                    /********************* */
                }, 3000 * (traversedLength + 1) * vitesse + 2000 * vitesse);
                setTimeout(function() { ui.setCodeTrace(7, 7); }, 3000 * (traversedLength + 1) * vitesse + 2500 * vitesse);
            }
        }
    });
    //requete a intervalle
    const requeteBtn = document.getElementById("submit_req");
    requeteBtn.addEventListener('click', function() {
        if (readyIndex != true) {
            //message d'erreur, il ya pas d'index
            alert("Attention, vous avez pas construit l'index");
        } else {
            ui.clearNodes(); //effacer la trace de l'opération précédente
            const codeElement = document.getElementById("code");
            codeElement.innerHTML = algo_requete; //remplir la fenetre d'algorithm
            ui.setCodeTrace(0, 7); //indiquer le début du déroulement dans la fenetre d'algorithm
            const borne_sup = ui.generateIndex(document.getElementById("sub_Max").value);
            const borne_inf = ui.generateIndex(document.getElementById("sub_Min").value);
            const instructionInsertion = document.getElementById("instruction");
            instructionInsertion.innerHTML = "<p>&nbsp;Recherche des Enregistrements de cle &#8712[" + borne_inf + "," + borne_sup + "]&nbsp;&nbsp;</p>";
            setTimeout(function() {
                //lancement de la requete au niveau de l'arbre
                tree.root.traverseRange(ui, borne_inf, borne_sup);
            }, 1000);
            var time = Number(Math.log2(nodes.length)); //pour calculer la hauteur de l'arbre
            setTimeout(function() {
                if (rangeCnt === 0) {
                    //aucun enregistrement trouvé, un méssage d'erreur
                    instructionInsertion.innerHTML = "<p>&nbsp;Aucun Enregistrement trouvé de cle &#8712[" + borne_inf + "," + borne_sup + "]&nbsp;&nbsp;</p>";
                } else {
                    //sinon, on initialise le nombre des enregistrement trouvé a 0
                    //pour éviter l'encombrement avec l'opération suivante
                    rangeCnt = 0;
                }
                ui.setCodeTrace(7, 7); //indiquer la fin au niveau de la fenetre de l'algorithme
            }, (1000 * time * vitesse + 2200 * vitesse));
        }
    });
    //Supression
    const supressionBtn = document.getElementById("submit_del");
    supressionBtn.addEventListener('click', function() {
        if (readyIndex != true) {
            //message d'erreur, il ya pas d'index
            alert("Attention, vous avez pas construit l'index");
        } else {
            const cle = ui.generateIndex(document.getElementById("sub_del").value);
            toDelete = cle;
            ui.clearNodes();
            const codeElement = document.getElementById("code");
            codeElement.innerHTML = algo_supression;
            const instructionInsertion = document.getElementById("instruction");
            instructionInsertion.innerHTML = "<p>&nbsp;&nbsp;Supression de L'Enregistrement de Cle " + cle + "&nbsp;&nbsp;</p>"
            ui.setCodeTrace(0, 7); //pour indiquer le début du déroulement dans la fentre d'algorithme
            setTimeout(function() {
                tree.eraseNode(ui, cle); //lancer la supression au niveau de l'arbre
                /******************** */
                //mise a jour dans la page HTML
                ecrt.innerHTML = nbEcrt;
                lect.innerHTML = nbLect;
                /******************** */
            }, 800);
        }
    });
    //effacer la trace d"une opération    
    var effacerTrace = document.getElementById("effacer-trace");
    effacerTrace.addEventListener('click', function() {
            ui.clearNodes();
            const code = document.getElementById("code");
            code.innerHTML = "";
            const instruction = document.getElementById("instruction");
            instruction.innerHTML = "";
        })
        //actualiser l'etat de l'arbre et du fichier
    var actualiser = document.getElementById("actualiser-arbre");
    actualiser.addEventListener("click", function() {
        ui.clearTree(); //effacer l'arbre actuel
        allEngs = []; //reinitialiser
        visited = []; //reinitialiser
        //réorganisation
        for (let i = 0; i < blocs.length; i++) {
            var bloc = blocs[i];
            if (bloc == undefined) break;
            if (bloc.length === 0) continue;
            for (let j = 0; j < bloc.length; j++) {
                if (bloc[j] == undefined) continue;
                if (visited[bloc[j].getCle()] === true) continue;
                visited[bloc[j].getCle()] = true;
                bloc[j].couple = new Couple(i, j);
                allEngs.push(bloc[j]);
            }
        }
        //le meme principe que la création de l'arbre
        for (let i = 0; i < newEngs.length; i++) {
            if (newEngs[i] == undefined || engByCle[newEngs[i].cle] == undefined) continue;
            allEngs.push(newEngs[i]);
        }
        nodes = []; //reinitialiser, pout éviter l'encombrement avec l'ancien arbre
        var Ntree = new Tree();
        ui.buildSameTree(Ntree, allEngs); //lancer la construction de l'arbre correspond a l'état actuel du fichier 
        Ntree.traverse(ui, Ntree.root); //parcourt et affichage de l'arbre dans la page HTML
        tree = Ntree; //mettre a jour l'arbre
        setTimeout(function() {
            ui.coverTreeAnimated(tree); //animer l'arbre
        }, 0);
    });
    //restaurer l'etat initial
    const re = document.getElementById("restaurer");
    re.addEventListener("click", function() {
        ui.clearTree(); //effacer l'arbre actuel
        nodes = []; //reinitialiser la liste de noeuds dans l'arbre
        blocs = backup; //affecter le fichier a l'ancien fichier qui correspond au chargement initial
        I = bI; // mettre a jour j
        J = bJ; // mettre a jour i
        var tmp = []; //liste de enregistrement de l'arbre a créer
        for (let i = 1; i < blocs.length; i++) {
            for (let j = 0; j < blocs[i].length; j++) {
                blocs[i][j].couple = new Couple(i, j);
                tmp.push(blocs[i][j]);
            }
        }
        Ntree = new Tree();
        ui.buildSameTree(Ntree, tmp); //on lance la création de l'arbre correspond au chargement intitial
        //avec les enregistrement du charegement initial qui sont dans la list "tmp"
        Ntree.traverse(ui, Ntree.root); //parcourt et affichage de l'arbre dans la page HTML
        tree = Ntree; //mettre a jour l'arbre
        setTimeout(function() {
            ui.coverTreeAnimated(tree); //animer la création de l'arbre
        }, 0);
    });
    //récuperer le nombre max d'eng par blocs introduit par l'utilisateur
    const nbEng = document.getElementById("sub_nb_enreg_par_bloc");
    const nbEngSubmit = document.getElementById("submit_nb_enreg_par_bloc");
    nbEngSubmit.addEventListener("click", function() {
        maxEng = nbEng.value - 1; //mettre a jour le nombre max d'engs dans un bloc
    });
}

function UI() {}

UI.prototype.buildSameTree = function(tree, Engs) {

    //créer une copie de l'arbre

    for (let i = 0; i < Engs.length; i++) {
        this.insert(tree, Engs[i], Engs[i].couple, true);
    }
}

UI.prototype.setEntete = function() {

    //pour modifier l'entete

    const instruction = document.getElementById("instruction");
    const n = blocs.length;
    const m = blocs[n - 1].length;
    instruction.innerHTML = "<p>&nbsp;&nbsp;Nombre de blocs : " + (n - 1) + "&nbsp;|&nbsp;Position du Dernier Eng : " + m + "&nbsp;</p>"
}

UI.prototype.buildBalanceTree = function(tree, Engs, l, r) {

    //fonction récursive pour la construction d'un arbre équilibrer

    if (l > r) return;
    const m = Math.ceil((l + r) / 2);
    afterEquilibrer.push(Engs[m]);
    this.insert(tree, Engs[m], Engs[m].couple, true);
    this.buildBalanceTree(tree, Engs, l, m - 1);
    this.buildBalanceTree(tree, Engs, m + 1, r);
}

UI.prototype.clearTree = function() {

    //pour effacer l'arbre

    var tree = document.querySelector(".tree");
    var htmlChunk = `<div class="svg-container">
    <svg height = "2500" width="2000">
<g transform="translate(0, 0)">
<g transform="translate(0, 0) scale(1)">
        <g id="vertex">
        </g>
        <g id="vertexText">               
        </g>
        <g id="edge">
        </g>
        </g>
        </g>
    </svg>
    </div>
</div>`;
    tree.innerHTML = '';
    tree.innerHTML = htmlChunk;
}

UI.prototype.clearNodes = function() {

    //éffacer la trace au niveau des noeuds de l'arbre

    var allNodes = document.querySelectorAll(".node");
    for (let i = 0; i < allNodes.length; i++) {
        allNodes[i].setAttribute("fill", "#eee");
    }
}

UI.prototype.setCodeTrace = function(i, maxlen) {

    //pour manipuler la fenetre du déroulement de l'algorithme

    document.getElementById("procedure").style.backgroundColor = "coral";
    for (let index = 1; index <= maxlen; index++) {
        document.getElementById("algo" + index).style.backgroundColor = "coral";
    }
    if (i > 0)
        document.getElementById("algo" + i).style.backgroundColor = "black";
    else if (i == 0) document.getElementById("procedure").style.backgroundColor = "black";
}

UI.prototype.readFile = function() {

    //la lécture du fichier correspond au chargement initial
    //la création du modèle (TOF ou TO(bar)F)

    blocs = [
        []
    ];
    const file = document.querySelector(".Fichier");
    var n = file.children.length;
    for (let i = 0; i < n; i++) {
        var child1 = file.children[i]; //un bloc
        var engs = [];
        var m = child1.children.length;
        for (let j = 0; j < m; j++) {
            var child2 = child1.children[j];
            //j == 1 (always) ul
            for (let k = 0; k < child2.children.length; k++) {
                var child3 = child2.children[k];
                for (let q = 0; q < child3.children.length; q++) {
                    var child4 = child3.children[q];
                    var cle;
                    var content;
                    for (let p = 0; p < child4.children.length; p++) {
                        if (p === 0) cle = child4.children[p].textContent;
                        else content = child4.children[p].textContent;
                    }
                    const eng = new Eng(cle, content, cle);
                    engs.push(eng);
                }
            }
        }
        blocs.push(engs);
        N += (engs.length);
    }
}

UI.prototype.sceneAvailable = function() {
    const scene = document.querySelector(".second");
    const p = getComputedStyle(scene);
    const displayValue = p.display;
    if (displayValue === 'none') {
        return false;
    }
    return true;
}
Node.prototype.eraseNode = function(ui, value, parent) {
    var currentNode = this;
    if (currentNode === null) return null;
    if (parseInt(this.val) === parseInt(value)) {
        const nodeHTML = document.querySelector(".node" + currentNode.val);
        nodeHTML.setAttribute("fill", "springgreen");
        //maintenant on fait la supression
        nbEcrt++; //incrémentation de nombre de écriture disque
        nbLect++; //incrémentation de nombre de lectures disque
        ecrt.innerHTML = nbEcrt;
        lect.innerHTML = nbLect;
        if (this.left === null && this.right === null) {
            ui.setCodeTrace(4, 7);
            setTimeout(function() {
                ui.setCodeTrace(5, 7);
            }, 300 * vitesse);
            nodes.splice(nodes.indexOf(this), 1);
            blocs[this.couple.getI()].splice(blocs[this.couple.getI()].indexOf(blocs[this.couple.getI()][this.couple.getJ()]), 1);
            if (parseInt(this.val) === parseInt(toDelete)) {
                ui.moveBackNode(this);
            }
            //parcourt de l'arbre
            if (parent != null) {
                if (parent.left == currentNode) {
                    parent.left = null;
                } else {
                    parent.right = null;
                }
            } else {
                //forcément la racine
                currentNode = null;
                tree.root = null;
                blocs = [
                    [undefined]
                ];
                I = 1;
                J = 0;
            }
            this.val = 'X';
            setTimeout(function() {
                ui.clearTree();
                tree.traverse(ui, tree.root);
                ui.setCodeTrace(7, 7);
                if (tree.root === null) {
                    const instruction = document.getElementById("instruction");
                    instruction.innerHTML = "<p>&nbsp;Maintenant, La structure d'index est vide&nbsp;</p>";
                }
            }, 1000 * vitesse);
            setTimeout(function() {}, 1500);
            return this;
        } else {
            if (this.left === null) {
                var succ = this.inorderSuccessor();
                this.val = succ.val;
                ui.moveNode2(succ, this.x, this.y);
                blocs[this.couple.getI()][this.couple.getJ()] = blocs[succ.couple.getI()][succ.couple.getJ()];
                this.right.eraseNode(ui, succ.val, currentNode);
            } else {
                var succ = this.inorderPredecesor();
                this.val = succ.val;
                //engByCle[this.val] = engByCle[succ.val];
                ui.moveNode2(succ, this.x, this.y);
                blocs[this.couple.getI()][this.couple.getJ()] = blocs[succ.couple.getI()][succ.couple.getJ()];
                this.left.eraseNode(ui, succ.val, currentNode);
            }
        }
    } else if (this.val > value) {
        ui.setCodeTrace(2, 7);
        const nodeHTML = document.querySelector(".node" + currentNode.val);
        nodeHTML.setAttribute("fill", "red");
        if (this.left != null) {
            setTimeout(function() {
                currentNode.left.eraseNode(ui, value, currentNode);
            }, 1000 * vitesse);
        } else {
            setTimeout(function() {
                const instructionInsertion = document.getElementById("instruction");
                instructionInsertion.innerHTML = "<p>&nbsp;&nbsp;Enregistrement non trouvé&nbsp;&nbsp;</p>";
            }, 300 * vitesse);
            return null;
        }
    } else if (this.val < value) {
        ui.setCodeTrace(2, 7);
        const nodeHTML = document.querySelector(".node" + currentNode.val);
        nodeHTML.setAttribute("fill", "red");
        if (this.right != null) {
            setTimeout(function() {
                currentNode.right.eraseNode(ui, value, currentNode);
            }, 1000 * vitesse);
        } else {
            ui.setCodeTrace(7, 7);
            setTimeout(function() {
                const instructionInsertion = document.getElementById("instruction");
                instructionInsertion.innerHTML = "<p>&nbsp;&nbsp;Enregistrement non trouvé&nbsp;&nbsp;</p>";
            }, 300 * vitesse);
            return null;
        }
    }
}
Tree.prototype.eraseNode = function(ui, value) {

    //supression du noeud avec un valeur 'value' au niveau de l'arbre

    var node = this.root.eraseNode(ui, value);
    return node;
}
Tree.prototype.addValue = function(value, couple, init, ui) {
    if (this.root == null) {

        //l'arbre dans ce cas est vide, donc le noeud inséré c'est la racine 

        centerX = (document.documentElement.clientWidth / 2) + 100;
        centerY = (document.documentElement.clientHeight / 2);
        this.root = new Node(value, centerY, centerX, couple);
        inserted = true;
        newNode = this.root;
    } else {

        //insertion d'un noeuds dans l'une des sous arbre de la racine
        //sous arbre droit ou gauche

        var node = new Node(value, 0, 0, couple);
        traversedLength++;
        this.root.addNode(node, 1, init, 1, ui);
    }
}


Tree.prototype.traverse = function(ui, node) {

    //parcourt in-ordre de l'arbre

    if (node != null) node.visit(ui);
    //ui.coverTree();
}
Tree.prototype.search = function(value, ui) {

    //la recherche de la valeur 'value' dans l'arbre

    var result = this.root.find(parseInt(value), ui);
    return result;
}

UI.prototype.coverTreeAnimated = function() {

    //l'animation du couvrage de l'arbre

    for (let i = 0; i < nodes.length; i++) {
        this.moveNode(nodes[i]);
        this.addClickNode(nodes[i]);
    }
}

UI.prototype.coverTree = function() {

    //couvrer l'arbre avec les cercles pour former des noeuds

    for (let i = 0; i < nodes.length; i++) {
        this.drawNode(nodes[i]);
        this.addClickNode(nodes[i]);
    }
}

UI.prototype.generateIndex = function(cle) {

    //fonction de génération d'index dans le cas général

    if (option === false) {
        return parseInt(cle);
    } else {
        return (parseInt(cle) + parseInt(offsetIndex) + 1);
    }
}

UI.prototype.generateIndex2 = function(noeud) {

    //fonction de génération des valeurs index dans le cas des blocs ordonnés

    if (option === false) {
        return noeud.val;
    } else {
        return (noeud.couple.getI() * (maxEng + 1) + noeud.couple.getJ());
    }
}

UI.prototype.genererAleatoirement = function() {
    var cles = [298, 300, 293, 301, 294, 299, 292, 296, 297, 295]
    var engs = [];
    for (let i = 0; i < cles.length; i++) {
        const cle = cles[i];
        const content = i * 2 + 112234; //random
        max = Math.max(cle, max);
        min = Math.min(cle, min);
        const eng = new Eng(cle, content, this.generateIndex(cle));
        engs.push(eng);
    }
    /*
    a < cle < b
     index(a)  < index(cle) < index(b) //une application croissante pour générer l'index
    */
    blocs[0] = engs;
}
UI.prototype.insert = function(tree, eng, couple, init) {
    var ui = this;
    tree.addValue(this.generateIndex(eng.getCle()), couple, init, ui);
}

UI.prototype.search = function(tree, ui, trace) {
    var node = null;
    const second = document.querySelector(".second");
    this.sceneAvailable();
    var enable = function() {
        second.style.display = 'block';
        ui.coverTree();
        setTimeout(function() {
            if (ui.sceneAvailable() === true) {
                const cle = prompt("Inérez la cle : ", "294");
                node = tree.search(indexByCle[cle], ui, true, trace);
            }
            return node;
        }, 4000);
    };
    var disableWindow = function(e) {
        if (e.target == second) {
            second.style.display = 'none';
            ui.refresh(tree);
        }
    }
    const rech = document.querySelector("#search");
    rech.addEventListener('click', enable);
    window.addEventListener('click', disableWindow);
    return node;
}
UI.prototype.supression = function(tree) {
    const ui = this;
    const second = document.querySelector(".second");
    var enable = function() {
        second.style.display = 'block';
        ui.coverTree();
        setTimeout(function() {
            if (ui.sceneAvailable() === true) {
                const cle = prompt("Inérez la cle : ", "294");
                const node = tree.search(indexByCle[cle], ui, false);
                setTimeout(function() {
                    tree.eraseNode(t);
                    setTimeout(function() {
                        ui.refresh(tree);
                        tree.traverse(ui, tree.root);
                    }, 4800);
                }, 5900);
            }
        }, 4800);
    };
    var disableWindow = function(e) {
        if (e.target == second) {
            second.style.display = 'none';
            ui.refresh(tree);
        }
    }
    const rech = document.querySelector("#deletion");
    rech.addEventListener('click', enable);
    window.addEventListener('click', disableWindow);
}

class Eng {
    constructor(cle, content, indexVal, couple) {
        this.cle = cle; // la clé primaire de l'enregistrement
        this.content = content; //le contenu de l'enregistrement(les données)
        this.indexVal = indexVal; //la valeur de l'enregistrement au niveau de l'index
        this.couple = couple; // le couple (i, j) (num du bloc, position de l'eng dans le bloc)
    }
    getCle() { return this.cle; }
    getContent() { return this.content; }
    getIndexVal() { return this.indexVal; }
}

class Bloc {
    constructor(nbBloc, Engs) {
        this.nbBloc = nbBloc;
        this.Engs = Engs;
    }
    getNbBloc() { return this.nbBloc; }
    getEngs() { return this.Engs; }
}

class Couple {
    constructor(i, j) {
        this.i = i; // num du bloc
        this.j = j; // position dans le bloc
    }
    getI() { return this.i };
    getJ() { return this.j };
}

UI.prototype.enableModal = function(modal) {
    modal.style.display = 'block';
}

UI.prototype.modal = function(node) {
    //affichage des informations de l'enregistrement
    const couple = node.couple; //le couple (i, j) du noeud
    var modal = document.querySelector(".modalEng");
    var closeBtn = document.querySelector(".closeBtn");
    const codeMemoire = `<p><span style="color:yellow">struct</span> Couple { <span style="color:yellow">int</span> i = ${node.couple.getI()}; //numéro du bloc<br>
    <span style="color:yellow">int</span> j = ${node.couple.getJ()+1}};//L'emplacement de l'Eng dans le bloc<br>
    <span style="color:yellow">struct</span> Noeud{
        <span style="color:yellow">int</span> indexValeur = ${node.val};<br>
        <span style="color:yellow">Couple</span> Enregistrement;<br>
    };`;
    var editor = document.getElementById('editor');
    editor.innerHTML = codeMemoire;
    var cleDisque = document.getElementById('cleD');
    var contenuDisque = document.getElementById('contenu');
    var eng = blocs[couple.getI()][couple.getJ()]; //clé de l'enregisterment au niveau de disque
    cleDisque.innerHTML = eng.getCle();
    contenuDisque.innerHTML = eng.getContent();
    this.enableModal(modal); //afficher la fenetre des informations
    //pour controler la fenetre
    var disableBtn = function() {
        modal.style.display = 'none';
    }
    var disableWindow = function(e) {
        if (e.target == modal) {
            modal.style.display = 'none';
        }
    }
    closeBtn.addEventListener('click', disableBtn);
    window.addEventListener('click', disableWindow);
}

UI.prototype.clearCodeTrace = function() {

    //effacer la trace de l'algorithme

    var e = document.querySelector("#codetrace");
    var id = setInterval(frame, 1);
    var w = 420;
    e.style.background = "tomato";

    function frame() {
        if (w <= 0) {
            clearInterval(id);
        } else {
            w -= 2;
            e.style.width = w + 'px';
        }
    }
    const htmlCode = e.innerHTML;

    var id2 = setInterval(frame2, 1);
    const len = htmlCode.length;
    var cnt = len;

    function frame2() {
        if (cnt <= 0) {
            clearInterval(id2);
        } else {
            cnt -= 2;
            e.innerHTML = htmlCode.substr(0, cnt);
        }
    }
}

UI.prototype.createEdge = function(node1, node2) {

    //chainé les noeuds node1 et node2 par une droite

    const attributes = [
        { name: "id", value: "edge" + node1.val + node2.val },
        { name: "class", value: "edge" },
        { name: "d", value: "M" + (node1.y) + " " + (node1.x + 13.3322222) + " " + "L" + node2.y + " " + (node2.x - 18) },
        { name: "stroke", value: "#333" },
        { name: "stroke-width", value: "3" }
    ];
    var svgPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
    for (let i = 0; i < attributes.length; i++) {
        const att = attributes[i];
        const pathAtt = document.createAttribute(att.name);
        pathAtt.value = att.value;
        svgPath.setAttributeNode(pathAtt);
    }
    return svgPath;
}

UI.prototype.drawCircle = function(x, y) {

    //pour désigner le cercle qui représente le noeud

    const attributes = [
        { name: "class", value: "node" },
        { name: "cx", value: x },
        { name: "cy", value: y },
        { name: "x", value: "727" },
        { name: "y", value: "73" },
        { name: "fill", value: "#eee" },
        { name: "r", value: "16" },
        { name: "stroke", value: "#333" },
        { name: "stroke-width", value: "2" },
        { name: "height", value: "62" },
        { name: "width", value: "62" }
    ];
    const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    const len = attributes.length;
    for (let i = 0; i < len; i++) {
        const att = attributes[i];
        const circleAtt = document.createAttribute(att.name);
        circleAtt.value = att.value;
        circle.setAttributeNode(circleAtt);
    }
    return circle;
}


UI.prototype.vertexText = function(node) {

    //l'écriture a l'intèrieur du noeud 

    const attributes = [
        { name: "class", value: "nodeText" },
        { name: "x", value: node.y - 0.5 },
        { name: "y", value: node.x + 3 },
        { name: "fill", value: "black" },
        { name: "font-family", value: "PT Sans, sans-serif" },
        { name: "font-size", value: "16" },
        { name: "font-weight", value: "bold" },
        { name: "text-anchor", value: "middle" }
    ];
    const content = node.val;
    const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
    for (let i = 0; i < attributes.length; i++) {
        const att = attributes[i];
        const svgAtt = document.createAttribute(att.name);
        svgAtt.value = att.value;
        text.setAttributeNode(svgAtt);
    }
    text.textContent = content;
    return text;
}

UI.prototype.moveNode = function(node) {

    //animation du neoud vers sa position au niveau de l'arbre

    var id = setInterval(frame, 1);
    const nodeHTML = document.querySelector(".node" + node.val);
    var i = 0;
    var j = 0;

    function frame() {
        if (i > node.x - 1) {
            clearInterval(id);
        } else {
            nodeHTML.setAttribute("cy", i + 'px');
            i += 2;
        }
    }
    var id2 = setInterval(frame2, 1);

    function frame2() {
        if (j > node.y - 1) {
            clearInterval(id2);
            return;
        } else {
            nodeHTML.setAttribute("cx", j + 'px');
            j += 2;
        }
    }
}

UI.prototype.moveNode2 = function(node, x, y) {

    //animation du noeud vers x, y

    var id = setInterval(frame, 1);
    const nodeHTML = document.querySelector(".node" + node.val);
    var i = node.x;
    var j = node.y;

    function frame() {
        if (node.x > x) {
            if (i <= x) {
                clearInterval(id);
            } else {
                nodeHTML.setAttribute("cy", i + 'px');
                i -= 1;
            }
        } else {
            if (i >= x) {
                clearInterval(id);
            } else {
                nodeHTML.setAttribute("cy", i + 'px');
                i += 1;
            }
        }
    }
    var id2 = setInterval(frame2, 1);

    function frame2() {
        if (node.y > y) {
            if (j <= y) {
                clearInterval(id2);
                return;
            } else {
                nodeHTML.setAttribute("cx", j + 'px');
                j -= 1;
            }
        } else {
            if (j >= y) {
                clearInterval(id2);
                return;
            } else {
                nodeHTML.setAttribute("cx", j + 'px');
                j += 1;
            }
        }
    }
}

UI.prototype.moveBackNode = function(node) {

    //animation du noeud aprés la supression

    var id = setInterval(frame, 1);
    const nodeHTML = document.querySelector(".node" + node.val);
    var i = node.x;
    var j = node.y;

    function frame() {
        if (i <= -14) {
            clearInterval(id);
        } else {
            nodeHTML.setAttribute("cy", i + 'px');
            i -= 2;
        }
    }
    var id2 = setInterval(frame2, 1);

    function frame2() {
        if (j <= -14) {
            clearInterval(id2);
            return;
        } else {
            nodeHTML.setAttribute("cx", j + 'px');
            j -= 2;
        }
    }
}
UI.prototype.drawNode = function(node) {
    //pour dessigner le noeud de l'arbre
    let vertex = document.querySelector("#vertex");
    let vertexText = document.querySelector("#vertexText");
    let circle = this.drawCircle(node.y, node.x);
    const text = this.vertexText(node);
    circle.classList.add("node" + node.val);
    const ui = this;
    circle.addEventListener('click', function(e) {
        ui.modal(node);
        nbLect += 1;
        lect.innerHTML = nbLect;
    });
    vertex.append(circle);
    vertexText.append(text);
}

function Tree(root) {
    this.root = null; //instancier un arbre 
}
//la structure du neoud
function Node(val, x, y, couple) {
    this.val = parseInt(val);
    this.left = null;
    this.right = null;
    this.x = x;
    this.y = y;
    this.couple = couple;
}
Node.prototype.addNode = function(n, level, init, pathLength, ui) {
    var currentNode = this;
    var nodeHTML = null;
    if (init === false) { nodeHTML = document.querySelector(".node" + currentNode.val); }
    if (this.val > n.val) {
        //inserer a gauche
        if (this.left == null) {
            if (init === false) {
                nodeHTML.setAttribute("fill", "red");
                setTimeout(function() {
                    ui.setCodeTrace(5, 7);
                }, 1000 * vitesse);
            }
            this.left = n;
            this.left.x = (this.x + 50) + ((level == 1) ? (level + 1) * 20 : (0));
            this.left.y = (this.y - 50) - ((level == 1) ? (level + 1) * 80 : (0));
            newNode = n;
            parent = this;
            traversedLength = pathLength;
            inserted = true;
            return;
        } else {
            if (init === false) {
                nodeHTML.setAttribute("fill", "red");
                setTimeout(function() {
                    ui.setCodeTrace(2, 7);
                }, 500 * vitesse);
                setTimeout(function() {
                    currentNode.left.addNode(n, level - 1, init, pathLength + 1, ui);
                }, 1000 * vitesse);
            } else {
                this.left.addNode(n, level - 1, init, pathLength + 1, ui);
            }
        }
    } else if (this.val < n.val) {
        //inserer a droite
        if (this.right == null) {
            if (init === false) {
                nodeHTML.setAttribute("fill", "red");
                setTimeout(function() {
                    ui.setCodeTrace(5, 7)
                }, 1000 * vitesse);
            }
            this.right = n;
            this.right.x = (this.x + 50) + ((level == 1) ? (level + 1) * 20 : (0));
            this.right.y = (this.y + 50) + ((level == 1) ? (level + 1) * 80 : (0));
            newNode = n;
            parent = this;
            inserted = true;
            traversedLength = pathLength;
            return;
        } else {
            if (init === false) {
                //l'arret de l'opération
                nodeHTML.setAttribute("fill", "red");
                setTimeout(function() {
                    ui.setCodeTrace(5, 7);
                }, 500 * vitesse);
                setTimeout(function() {
                    currentNode.right.addNode(n, level - 1, init, pathLength + 1, ui);
                }, 1000 * vitesse);
            } else {
                this.right.addNode(n, level - 1, init, pathLength + 1, ui);
            }
        }
    } else {
        //valeur existe déja
        if (init === false) {
            ui.setCodeTrace(7, 7);
            const instructionInsertion = document.getElementById("instruction");
            instructionInsertion.innerHTML = "<p>&nbsp;&nbsp;Enregistrement existe déja&nbsp;&nbsp;</p>";
            nodeHTML.setAttribute("fill", "springgreen");
        }
        inserted = false;
        return;
    }
}
Node.prototype.visit = function(ui) {
    //parcourt de l'arbre(inorder)
    const edges = document.querySelector("#edge");
    if (this.left != null && this.left.val != 'X') {
        const edge = ui.createEdge(this, this.left);
        edges.append(edge);
        height++;
        this.left.visit(ui);
    }
    if (this.val != 'X') {
        nodes.push(this);
        ui.drawNode(this);
    }
    if (this.right != null && this.right.val != 'X') {
        const edge = ui.createEdge(this, this.right);
        edges.append(edge);
        height++;
        this.right.visit(ui);
    }
}
Node.prototype.find = function(value, ui) {
    //la recherche d'un noeud au niveau de l'arbre avec une clé donnée
    const currentNode = this;
    if (this.val === value) { //valeur trouvée
        setTimeout(function() {
            const nodeHTML = document.querySelector(".node" + currentNode.val);
            nodeHTML.setAttribute("fill", "springgreen");
            ui.setCodeTrace(4, 7);
        }, 1000 * vitesse);
        setTimeout(function() {
            ui.modal(currentNode)
            ui.setCodeTrace(5, 7);
        }, 1300 * vitesse);
        setTimeout(function() {
            ui.setCodeTrace(7, 7);
        }, 2800 * vitesse);
        return currentNode;
    } else if (this.val > value) { //recherche sous arbre gauche
        const nodeHTML = document.querySelector(".node" + currentNode.val);
        nodeHTML.setAttribute("fill", "red");
        ui.setCodeTrace(2, 7);
        if (this.left != null) {
            setTimeout(function() {
                currentNode.left.find(value, ui);
            }, 1000 * vitesse);
        } else {
            ui.setCodeTrace(6, 7);
            setTimeout(function() {
                ui.setCodeTrace(7, 7);
            }, 100 * vitesse);
            setTimeout(function() {
                const instructionInsertion = document.getElementById("instruction");
                instructionInsertion.innerHTML = "<p>&nbsp;&nbsp;Enregistrement non trouvé&nbsp;&nbsp;</p>";
            }, 300 * vitesse);
            return null;
        }
    } else if (this.val < value) { //sous arbre droite
        const nodeHTML = document.querySelector(".node" + currentNode.val);
        nodeHTML.setAttribute("fill", "red");
        if (this.right != null) {
            setTimeout(function() {
                currentNode.right.find(value, ui);
            }, 1000 * vitesse);
        } else {
            setTimeout(function() {
                const instructionInsertion = document.getElementById("instruction");
                instructionInsertion.innerHTML = "<p>&nbsp;&nbsp;Enregistrement non trouvé&nbsp;&nbsp;</p>";
            }, 300 * vitesse);
            ui.setCodeTrace(6, 7);
            setTimeout(function() {
                ui.setCodeTrace(7, 7);
            }, 300 * vitesse);
            return null;
        }
    }
}
UI.prototype.main = function() {
    var bar = document.querySelector("#codeTrace-hide");
    const ui = this;
    bar.addEventListener('click', function(e) {
        const codeTrace = document.querySelector("#codetrace");
        if (codeTrace.style.width === '0px') {
            var animateRotation = anime({
                targets: '#hideArrow',
                rotateZ: 180,
            });
            ui.showCodeTrace();
        } else {
            var animateRotation = anime({
                targets: '#hideArrow',
                rotateZ: 360,
            });
            ui.clearCodeTrace();
        }
    });
};
Node.prototype.traverseRange = function(ui, a, b) {
    const target = this;
    const x = parseInt(a); //borne inf
    const y = parseInt(b); // borne sup
    if (target != null) {
        const nodeHTML = document.querySelector(".node" + target.val);
        if ((parseInt(target.val) >= x) && (parseInt(target.val) <= y)) {
            rangeCnt++; //incrémenter le nombre des valeurs trouvées
            nodeHTML.setAttribute("fill", "springgreen");
            ui.setCodeTrace(2, 7);
        } else {
            nodeHTML.setAttribute("fill", "red");
            ui.setCodeTrace(3, 7);
        }
        if (parseInt(target.val) < x) {
            setTimeout(function() {
                ui.setCodeTrace(4, 7);
            }, 500 * vitesse);
            setTimeout(function() {
                if (target.right != null) target.right.traverseRange(ui, a, b); //lancer seulement dans le sous arbre droit
            }, 1000 * vitesse);
        } else if (parseInt(target.val) > y) {
            setTimeout(function() {
                ui.setCodeTrace(5, 7);
            }, 500 * vitesse);
            setTimeout(function() {
                //lancer la recherche seulement dans le sous arbre gauche
                if (target.left != null) target.left.traverseRange(ui, a, b);
            }, 1000 * vitesse);
        } else {
            //recherche au niveau
            setTimeout(function() {
                ui.setCodeTrace(6, 7);
            }, 500 * vitesse);
            setTimeout(function() {
                //lancer la recherche dans les deux sous arbres
                if (target.left != null) target.left.traverseRange(ui, a, b);
                if (target.right != null) target.right.traverseRange(ui, a, b);
            }, 1000 * vitesse);
        }
    }
}

Node.prototype.inorderSuccessor = function() {
    //la recherche du successeur inorder 
    var successor = this;
    successor = successor.right;
    if (successor != null) {
        const nodeHTML = document.querySelector(".node" + successor.val);
        nodeHTML.setAttribute("fill", "red");
        while (successor.left != null) { //aller vers la gauche
            successor = successor.left;
            const nodeHTML = document.querySelector(".node" + successor.val);
            nodeHTML.setAttribute("fill", "red");
        }
        if (successor != null) { //c'est terminé, successeur trouvé 
            const nodeHTML = document.querySelector(".node" + successor.val);
            nodeHTML.setAttribute("fill", "springgreen");
        }
    }
    if (successor === null) return this; // le predecesseur c'est le noeud lui meme (cas d'une feuil)
    const nodeHTML = document.querySelector(".node" + successor.val);
    nodeHTML.setAttribute("fill", "springgreen");
    return successor;
}

Node.prototype.inorderPredecesor = function() {
    //la recherche du predecesseur inorder
    var pred = this;
    pred = pred.left;
    if (pred != null) {
        const nodeHTML = document.querySelector(".node" + pred.val);
        nodeHTML.setAttribute("fill", "red");
        while (pred.right != null) { //aller vers la droite
            pred = pred.right;
            const nodeHTML = document.querySelector(".node" + pred.val);
            nodeHTML.setAttribute("fill", "red");
        }
        if (pred != null) { //c'est termniné, predecesseur trouvé
            const nodeHTML = document.querySelector(".node" + pred.val);
            nodeHTML.setAttribute("fill", "springgreen");
        }
    }
    if (pred === null) return this; //le predecesseur c'est le noeud lui meme (cas d'une feuile)
    return pred;
}

UI.prototype.addClickNode = function(node) {
    //pour afficher les informations d'un noeud
    const nodeText = document.querySelector(".node" + node.val);
    const ui = this;
    if (nodeText != null) {
        nodeText.addEventListener('click', function(e) {
            ui.modal(node);
        });
    }
}

UI.prototype.readEng = function() {
    const cle = prompt("Insérez la cle : ", "308");
    const content = prompt("Le contenue de L'Eng : ", "12312312312");
    const Vindex = this.generateIndex(cle);
    const eng = new Eng(cle, content, Vindex);
    return eng;
}

UI.prototype.chargementInitial = function(tree) {
    //fonction du chargement initial du fichier
    const ui = this;
    visited = [];
    for (let i = 0; i < blocs.length; i++) {
        var bloc = blocs[i];
        if (bloc === undefined) break;
        if (bloc.length === 0) continue;
        for (let j = 0; j < bloc.length; j++) {
            var couple = new Couple(i, j);
            var eng = bloc[j];
            if (visited[eng.cle]) continue;
            visited[eng.cle] = true;
            bloc[j].couple = couple;
            ui.insert(tree, eng, couple, true);
            J++; //incrémeneter la position du dernier enregistrement
        }
        I++; //inréementer le nombre du dernier bloc
    }
}