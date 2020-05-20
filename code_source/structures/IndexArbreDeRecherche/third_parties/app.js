$(document).ready(()=>{
    //$('#tabF').tabs({hide: 'fadeOut', show: 'fadeIn'});
    $('.Zone').each(function(){
        let bg = generate_bg();
        let bg_values= bg[0];
        let bg_keys = bg[1];
        $(this).children().children().children().css(bg_values);
        $(this).children().children().children('.key').css(bg_keys);
    });
    /*
    $('#submit_enreg').click(submit_enreg);
    $('#submit_enreg_zone').click(submit_enreg_zone);
    $('#submit_zone').click(submit_zone);
    */
////imed fichier 
$('#submit_nb_bloc').click(submit_nb_bloc);
$('#submit_nb_value').click(submit_nb_value);
$('#submit_nb_enreg_par_bloc').click(submit_nb_enreg_par_bloc);
});

function generate_bg (){
    let rand_1=Math.random()*255;
    let rand_2=Math.random()*255;
    let rand_3=Math.random()*255;
    let rgb=`rgb(${Math.ceil(rand_1)},${Math.ceil(rand_2)},${Math.ceil(rand_3)})`;
    let rgba =`rgba(${Math.ceil(rand_1)},${Math.ceil(rand_2)},${Math.ceil(rand_3)},0.7)`;
    return [{'background' : rgb}, {'background' : rgba}] ;
}
function submit_enreg(e) {
    let classparent=e.target.parentElement.className;
    let yay = document.createElement('p');
    yay.id = 'yay';
    $(e.target).parent().prepend(yay);
    showalert(document.querySelector('#sub_enr').value);
    if(document.querySelector('#sub_enr').value <= 5 && document.querySelector('#sub_enr').value >0 ){
        alert('here');
        $(e.target.parentElement).append(enr(document.querySelector('#sub_enr').value));
        document.querySelector('#sub_enr').value=null;
        $(e.target).parent().children('.ENR').show({effect: "bounce",duration: 250});
        console.log("here!!");
        console.log("after here!!");
    }
}
let enr=(values , key_prec , ord) =>{
   let enreg=document.createElement('ul');
    enreg.style.display = "none";
    enreg.className = "ENR";
    let li = document.createElement('li');
    li.className = "item key";
    if(!ord){
    li.innerText=Math.ceil(Math.random()*900+100).toString();
    }else{
        li.innerText=Math.ceil((key_prec+Math.random()*80)).toString();
    }
    li.style.borderRightStyle = "dashed";
    enreg.appendChild(li);
    let cpt=0;
    while(cpt<values){
        let li = document.createElement('li');
        li.className = "item key";
        li.innerText="Value "+(cpt+1);
        li.style.borderLeftWidth = "0";
        if(cpt!==values-1){li.style.borderRightStyle = "dashed";}
        enreg.appendChild(li);
        cpt+=1;
    }
    return enreg;
};

function ins_enr(key , how_many_values){
    let enreg=document.createElement('ul');
    enreg.style.display = "none";
    enreg.className = "ENR";
    let li = document.createElement('li');
    li.className = "item key";
    li.innerText=Math.ceil(key).toString();
    li.style.backgroundColor="#00ff00";
    li.style.borderRightStyle = "dashed";
    enreg.appendChild(li);
    let cpt=0;
    while(cpt<how_many_values){
        let li = document.createElement('li');
        li.className = "item key";
        li.innerText="Value "+(cpt+1);
        li.style.borderLeftWidth = "0";
        li.style.backgroundColor="#00ff00";
        if(cpt!==how_many_values-1){li.style.borderRightStyle = "dashed";}
        enreg.appendChild(li);
        cpt+=1;
    }
    return enreg;
}
let showalert =(values) => {
    let yay = document.querySelector('#yay');
    // yay.style.display = 'inline-block';
    // console.log('loading..');
    // yay.style.background = 'lightgray';
    // yay.innerText = 'Loading ....';
    // document.querySelector('h1').style.marginBottom='0';
    // document.querySelector('#book_title').style.marginTop = '0.3rem';
        if (values > 0 &&values <=5){
            yay.style.background = 'green';
            yay.innerText = 'Parfait !';
            // document.querySelector('h1').style.marginBottom='0';
            // document.querySelector('#book_title').style.marginTop = '0.3rem';
            yay.style.display = 'inline-block';
        }else if (values > 5){
            yay.style.background = 'red';
            yay.innerText = "Le nombre maximale est 5 blocs";
            yay.style.display = 'inline-block';
            // document.querySelector('h1').style.marginBottom='0';
            // document.querySelector('#book_title').style.marginTop = '0.3rem';
        }else{
            yay.style.background = 'red';
            yay.innerText = "Veuillez insérer un nombre positif";
            yay.style.display = 'inline-block';
        }
    setTimeout(()=>{
        document.querySelector('#yay').style.display='none';},3000);
};

let showalert3 = (values) => {
    let yay = document.querySelector('#yay');
    // yay.style.display = 'inline-block';
    // console.log('loading..');
    // yay.style.background = 'lightgray';
    // yay.innerText = 'Loading ....';
    // document.querySelector('h1').style.marginBottom='0';
    // document.querySelector('#book_title').style.marginTop = '0.3rem';
        if (values > 0 &&values <=3){
            yay.style.background = 'green';
            yay.innerText = 'Parfait !';
            // document.querySelector('h1').style.marginBottom='0';
            // document.querySelector('#book_title').style.marginTop = '0.3rem';
            yay.style.display = 'inline-block';
        }else if (values >3){
            yay.style.background = 'red';
            yay.innerText = "Le nombre maximale est 3 par blocs";
            yay.style.display = 'inline-block';
            // document.querySelector('h1').style.marginBottom='0';
            // document.querySelector('#book_title').style.marginTop = '0.3rem';
        }else{
            yay.style.background = 'red';
            yay.innerText = "Veuillez insérer un nombre positif";
            yay.style.display = 'inline-block';
        }
    setTimeout(()=>{
        document.querySelector('#yay').style.display='none';},2000);
};

/*ooooooooooooooooooooooooooooooooooooooooo */
let submit_enreg_zone=(e) => {

    let classparent=e.target.parentElement.className;
    let yay = document.createElement('p');
    yay.id = 'yay';
    yay.style.display = 'none';
    $(e.target).parent().prepend(yay);
    let values=document.querySelector('#sub_enr_zone').value;
    if(values <=5 && values >0 ){
        $(e.target).fadeOut(250);
        $(e.target).parent().children('#sub_enr_zone').fadeOut(250);
        setTimeout((target = e.target) => {
            $(target).parent().children('#sub_zone').fadeIn(250);
            $(target).parent().children('#submit_zone').fadeIn(250);
            $(target).parent().children('#ord').fadeIn(250).css({'display': 'flex'});
        }, 250);
        // $(e.target.parentElement).append(enr(document.querySelector('#sub_enr').value));
        // document.querySelector('#sub_enr').value=null;
        // $(e.target).parent().children('.ENR').show({effect: "bounce",duration: 3000});

    }else{
        showalert(values);
    }

};
let showalert_zone =(values) => {
   // console.log(values);
    let yay = document.querySelector('#yay');
    // yay.style.display = 'inline-block';
    // console.log('loading..');
    // yay.style.background = 'lightgray';
    // yay.innerText = 'Loading ....';
    // document.querySelector('h1').style.marginBottom='0';
    // document.querySelector('#book_title').style.marginTop = '0.3rem';
    if (values > 0 &&values <=1){
        yay.style.background = 'green';
        yay.innerText = 'Parfait !';
        // document.querySelector('h1').style.marginBottom='0';
        // document.querySelector('#book_title').style.marginTop = '0.3rem';
        yay.style.marginBottom = '1rem';
        yay.style.display = 'inline-block';
    }else if (values >=2){
        yay.style.marginBottom = '1rem';
        yay.style.background = 'red';
        yay.innerText = "Désole, mais ce n'est pas intéressant d'avoir plus d'un champ !";
        yay.style.display = 'inline-block';
        // document.querySelector('h1').style.marginBottom='0';
        // document.querySelector('#book_title').style.marginTop = '0.3rem';
    }else{
        yay.style.marginBottom = '1rem';
        yay.style.background = 'red';
        yay.innerText = "Veuillez insérer un nombre positif";
        yay.style.display = 'inline-block';
    }
    setTimeout(()=>{
        document.querySelector('#yay').style.display='none';},3000);
};

let submit_zone =(e) => {
    let par = e.target.parentElement;
    let classparent=e.target.parentElement.className;
    let ord = e.target.parentElement.querySelector('#ord').children[0].querySelector('input').checked;
    let yay = document.createElement('p');
    yay.id = 'yay';
    let key_prec=0;
    $(e.target).parent().prepend(yay);
    let nb_value = 1;//document.querySelector('#sub_zone').value;
    showalert_zone(nb_value);
    if(nb_value <= 1 && nb_value >0 ){
        cpt=0;
        while(cpt<nb_value){
            let enrege = enr(document.querySelector('#sub_enr_zone').value , key_prec , ord);
            key_prec = Number(enrege.querySelector('.key').innerText);
            setTimeout((enreg=enrege)=>{
                if(cpt!==0){enreg.style.marginTop="0";}
                if(cpt!==nb_value-1){enreg.style.marginBottom="0";}
                $(e.target.parentElement).append(enreg);
                $(e.target).parent().children('.ENR').show({effect: "bounce",duration: 250});
                },(cpt+1)*250);
                cpt++;
        }
        setTimeout(() => {
            let not_enrs = e.target.parentElement.querySelectorAll('*:not(.ENR):not(.item)');
            $(not_enrs).fadeOut(300);
            add_menu(e.target.parentElement);
        }, (cpt + 1) * 250);
    }
};
function sleep (time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}
let trier_zone =(e)=>{
    let par = e.target.parentElement.parentElement;
    let not_enrs = e.target.parentElement.parentElement.querySelectorAll('*:not(.ENR):not(.item)');
    $(not_enrs).fadeOut(300);
    let cpt_deplacer=0;
    let min=1000;
    let min_before=null ;
    let now=0;
    let indice=0;
    let cpt = 0;
    let nbr_animation =0;
    let keys_end = [];
    let enrs = e.target.parentElement.parentElement.querySelectorAll('.ENR');
    let taille = enrs.length;
    anime({
        targets: Array.from(enrs[0].children),
        backgroundColor: '#ff0000',
    });
    while(now!==taille){
    cpt=now;
    let bloc_current_min = enrs[now].children;
    let bloc_current_init = enrs[now].children;
    let key_current_min =Number(enrs[now].querySelector('.key').innerText);
    while(cpt!==enrs.length){
        let bloc = enrs[cpt].children;
        let key = Number(enrs[cpt].querySelector('.key').innerText);
        if(key>key_current_min){
            setTimeout(()=>{
                anime({
                    targets: Array.from(bloc),
                    backgroundColor: "#333",
                    duration : 500,
                    direction: 'alternate',
                });
            },nbr_animation*1000);
            nbr_animation++;
        }
        else{
            setTimeout(()=>{
                anime({
                    targets: Array.from(bloc_current_min),
                    backgroundColor: "#ffefdb"
                });
                anime({
                    targets : Array.from(bloc),
                    backgroundColor: '#ff0000',
                });
                bloc_current_min=bloc;
            },nbr_animation*1000);
            key_current_min=key;
            nbr_animation++;
        }
        cpt++;
    }
    let indicee= print_keys(enrs).indexOf(key_current_min.toString());
    setTimeout(()=>{
        deplacer(enrs,bloc_current_min, -(indicee-cpt_deplacer));
        deplacer(enrs,bloc_current_init, indicee - cpt_deplacer);
        // deplacer(enrs,enrs[cpt_deplacer+1].children, -(indicee - cpt_deplacer) );
        cpt_deplacer++;
    },nbr_animation*1000);
    nbr_animation+=3;
    setTimeout(()=>{
        anime({
            targets : Array.from(bloc_current_min),
            backgroundColor: '#00ff00',
        });
    },nbr_animation*1000);
    nbr_animation++;
    // permutation
    // let a = enrs[0];
    // let b= enrs[print_keys(enrs).indexOf(key_current_min)];
    // enrs[print_keys(enrs).indexOf(key_current_min)]=b;
    // enrs[0]=b;
    let new_z = new_zone(enrs,now ,print_keys(enrs).indexOf(key_current_min.toString()));
    setTimeout(()=>{
        renouveler(enrs, new_z);
    },nbr_animation*1000);
    nbr_animation++;
    enrs = new_z;
    now++;
    }
    setTimeout(() => {
        add_retour_btn(par);
    }, nbr_animation * 1000);
    nbr_animation++;
    e.target.parentElement.parentElement.querySelector('#ord').children[0].querySelector('input').checked=true;

};
// Usage!
function get_key(children){
    return Number(children[0].innerText);
}
function indice_key(enrs,key){
    let cpt=0;
    while(get_key(enrs[cpt].children)!==key){
        cpt++;
    }
    return cpt;
}
function get_width_children(bloc){
    console.log(bloc);
    let cpt =0;
    let somme=0;
    while (cpt < bloc.length){
        somme+=bloc[cpt].offsetWidth;
        cpt++;
    }
    return somme
}
function deplacer(enrs,children , combien){
    anime({
        targets: Array.from(children),
        keyframes: [
            {translateX: get_width_children(enrs[enrs.length-1].children)},
            {translateY: enrs[0].offsetHeight*combien},
            {translateX: 0},
            // {translateY: 0}
        ],
        duration: 3000,
    });
}

function deplacer_tout_1_up(enrs , a_partir ){
    let cpt =0;
    while(cpt<enrs.length){
        if(cpt !== a_partir-1){
        let children = Array.from(enrs[cpt].children);
        let cpt2=0;
        while (cpt2 < children.length) {
            children[cpt2].style.backgroundColor="antiquewhite";
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
                {translateX: get_width_children(enrs[enrs.length-1].children)},
                {translateY: -enrs[0].offsetHeight},
                {translateX: 0},
                // {translateY: 0}
            ],
            duration: 3000,
        });
        cpt++;
    }

}

function deplacer_tout_1_down(enrs , norm ){
    let cpt =0;
    while(cpt<enrs.length){
        if(cpt !== norm-1){
            let children = Array.from(enrs[cpt].children);
            let cpt2=0;
            while (cpt2 < children.length) {
                children[cpt2].style.backgroundColor="antiquewhite";
                cpt2++;
            }
        }
        cpt++;
    }
    if(norm!==-1){
        cpt = norm;
    }else{
        cpt = 0;
    }

    while (cpt < enrs.length) {
        anime({
            targets: Array.from(enrs[cpt].children),
            keyframes: [
                {translateX: get_width_children(enrs[enrs.length-1].children)},
                {translateY: enrs[0].offsetHeight},
                {translateX: 0},
                // {translateY: 0}
            ],
            duration: 3000,
        });
        cpt++;
    }

}

function print_keys(enrs){
    let cpt=0;
    let tab= [];
    while (cpt < enrs.length) {
        tab.push(enrs[cpt].querySelector('.key').innerText);
        cpt++;
    }
    return tab;
}
function new_zone(enrs , ...indices){
    let new_enrs = [];
    let cpt=0;
    if(indices.length===1 ){
        let bad = indices[0];
        let cpt=0;
        while (cpt < enrs.length) {
            if(bad.indexOf(cpt)===-1){
                new_enrs.push(enrs[cpt]);
            }
            cpt++;
        }
    }
    else if(indices.length===2 && typeof indices[1] === "number"){
        while(cpt< enrs.length){
            if(cpt!== indices[0] && cpt !== indices[1]){
                new_enrs.push(enrs[cpt]);
            }else if ( cpt === indices[0]){
                new_enrs.push(enrs[indices[1]]);
            }else{
                new_enrs.push(enrs[indices[0]]);
            }
            cpt++;
        }
    }else if (typeof indices[1]==="boolean") {
        // Suppression
        if (indices[1] === true) {
            while (cpt < enrs.length) {
                if (cpt !== indices[0]) {
                    new_enrs.push(enrs[cpt]);
                }
                cpt++;
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

function renouveler (ancien_z  , new_z){
    // zone.remove();
    let cpt0=0;
    let par = ancien_z[0].parentElement;
    // let trier = document.querySelector('#trier_zone');
    // trier.remove();

    while (cpt0 < ancien_z.length) {
        ancien_z[cpt0].remove();
        cpt0++;
    }
    let cpt=0;
    while( cpt < new_z.length){
        anime({
            targets: Array.from(new_z[cpt].children),
            keyframes: [
                {translateY: 0},
                {translateX: 0},
                // {translateY: 0}
            ],
            duration: 0,
        });
        let cpt2=0;
        while (cpt2 < new_z[cpt].children.length) {
            new_z[cpt].children[cpt2].style.transform = "translateX(0px) translateY(0px)";

            cpt2++;
        }
        // for (elem in new_z[cpt].children){
        //     elem.style.transform="translateX(0px) translateY(0px)";
        // }
        par.appendChild(new_z[cpt]);
        cpt++;
    }
    // par.appendChild(trier);
    // par.appendChild(zone2);
}


// rechercher !!!
 function add_menu (parent , ord){
     let div = document.createElement('div');
     div.style.display = "flex";
     div.style.justifyContent = "space-around";
     div.id = "menu";
     // justify-content: space-around;
     $(parent).append(div);
     let trier = document.createElement('button');
     trier.id = 'trier_zone';
     trier.innerText = 'Trier';
     trier.style.background = '#ff9f43';
     trier.style.display = 'none';
     // $(e.target.parentElement).append(trier);
     let rechercher = document.createElement('button');
     rechercher.id = 'rechercher_zone';
     rechercher.innerText = 'Rechercher';
     rechercher.style.background = '#54a0ff';
     rechercher.style.display = 'none';
     let inserer = document.createElement('button');
     inserer.id = 'inserer_enr';
     inserer.innerText = 'Inserer';
     inserer.style.background = '#5f27cd';
     inserer.style.display = 'none';
     let supprimer = document.createElement('button');
     supprimer.id = 'supprimer_enr';
     supprimer.innerText = 'Supprimer';
     supprimer.style.background = '#ee5253';
     supprimer.style.display = 'none';
     let extraire = document.createElement('button');
     extraire.id = 'extraire_enrs';
     extraire.innerText = 'Extraire';
     extraire.style.background = '#78909C';
     extraire.style.display = 'none';
     div.appendChild(rechercher);
     div.appendChild(inserer);
     div.appendChild(supprimer);
     div.appendChild(trier);
     div.appendChild(extraire);
     $(trier).click(trier_zone).fadeIn(500);
     $(rechercher).click(rechercher_zone).fadeIn(500);
     $(inserer).click(inserer_enr).fadeIn(500);
     $(supprimer).click(supprimer_enr).fadeIn(500);
     $(extraire).click(extraire_enrs).fadeIn(500);
 }
function retour_zone(e) {
    let father = e.target.parentElement;
    console.log("father=",father);
    $(e.target).fadeOut(500);
    add_menu(father,e.target.parentElement.querySelector('#ord').children[0].querySelector('input').checked);
    let enrs = father.querySelectorAll('.ENR');
    let cpt =0;
    while(cpt<enrs.length){
        let children = Array.from(enrs[cpt].children);
        let cpt2=0;
        while (cpt2 < children.length) {
            children[cpt2].style.backgroundColor="antiquewhite";
            cpt2++;
        }
        cpt++;
    }
}

function add_retour_btn(parent) {
    let retour_btn = document.createElement('button');
    retour_btn.id = "retour_btn";
    retour_btn.style.background="darkgray";
    retour_btn.innerText = "Retour";
    retour_btn.style.display = "none";
    console.log(parent);
    $(parent).append(retour_btn);
    $(retour_btn).fadeIn(500);
    $(retour_btn).click(retour_zone);
    console.log("added !!");
    return retour_btn;
}

function inserer_enr(e) {
    let father = e.target.parentElement.parentElement;
    $(e.target.parentElement).fadeOut(500);
    let key_inserer = document.createElement('input');
    key_inserer.id="key_ins";
    key_inserer.type = "number";
    key_inserer.placeholder="give me the key  you want to insert it ...";
    key_inserer.style.display = "none";
    key_inserer.style.marginTop = '1.5rem';
    let start_ins = document.createElement('button');
    // start_rech.type = "number";
    start_ins.id = "start_ins";
    start_ins.innerText = "Commencer l'insertion !";
    start_ins.style.background = "#5f27cd";
    start_ins.style.display = "none";
    $(father).append(key_inserer).append(start_ins);
    setTimeout(()=>{
        $(key_inserer).fadeIn(1000);
        $(start_ins).fadeIn(1000);
    },300)
    $(start_ins).click(start_inserer);
}
function supprimer_enr(e) {
    let father = e.target.parentElement.parentElement;
    $(e.target.parentElement).fadeOut(500);
    let key_supp = document.createElement('input');
    key_supp.id="key_supp";
    key_supp.type = "number";
    key_supp.placeholder="give me the key  you want to insert it ...";
    key_supp.style.display = "none";
    key_supp.style.marginTop = '1.5rem';
    let start_supp = document.createElement('button');
    // start_rech.type = "number";
    start_supp.id = "start_supp";
    start_supp.innerText = "Commencer la suppression !";
    start_supp.style.background = "#ee5253";
    start_supp.style.display = "none";
    $(father).append(key_supp).append(start_supp);
    setTimeout(()=>{
        $(key_supp).fadeIn(1000);
        $(start_supp).fadeIn(1000);
    },300)
    $(start_supp).click(start_supprimer);
}
function start_supprimer(e) {
    let par = e.target.parentElement;
    let ord = e.target.parentElement.parentElement.querySelector('#ord').children[0].querySelector('input').checked;
    console.log("ord =", ord);
    let begin=false;
    let key_search = Number(e.target.parentElement.querySelector('#key_supp').value);
    console.log("key_search ", key_search);
    let yay = e.target.parentElement.querySelector('#yay');
    let enrs = e.target.parentElement.querySelectorAll('.ENR');
    if(key_search.length!==0 ){
        e.target.parentElement.querySelector('.ENR').style.marginTop = '1rem';
        yay.innerText = "The suppression is started succesfully !";
        yay.style.background = 'green';
        begin = true;
        $(e.target.parentElement.querySelector('#key_supp')).fadeOut(500 , function(){$(this).remove()});
        $(e.target.parentElement.querySelector('#start_supp')).fadeOut(500,function(){$(this).remove()});
    }else{
        enrs[0].style.marginTop = '1rem';
        e.target.parentElement.querySelector('#yay').innerText = "Give us the Key before please!";
        yay.style.background = 'red';
    }
    $(yay).fadeIn(500);
    setTimeout(() => {
        $(yay).fadeOut(500);
        enrs[0].style.marginTop = '0rem';
    }, 3000);
    if(ord){
        let info_dico = start_recherche_dico(e, e.target.parentElement.querySelector('#key_supp'),false);
        console.log("Normalement Dico = ,",info_dico);
        let indice = info_dico[1];
        let nbr_animation = info_dico[0];
        // setTimeout(() => {
        //     console.log("SUPP !!");
        //     // $(enrs[indice]).fadeOut(1000,)
        //     anime({
        //         targets: Array.from(enrs[indice].children),
        //         backgroundColor: "#000",
        //     });
        // }, nbr_animation * 1000);
        // nbr_animation++;
        if (Number(enrs[indice].querySelector('.key').innerHTML) === key_search){
            console.log("SUPP !");
            let new_z = new_zone(enrs, indice, true);
            console.log("AFTER SUPP ",print_keys(new_z));
            // setTimeout(()=>{
            //     console.log("SUPP !");
            //     console.log("AFTER SUPP ",print_keys(new_z));
            // }, nbr_animation*1000);
            setTimeout(()=>{
                deplacer_tout_1_up(enrs, indice+1);
            },nbr_animation*1000);
            nbr_animation+=4;
            // setTimeout(()=>{
            //
            // },nbr_animation*1000);
            // // enrs = new_z;
            // nbr_animation++;
            setTimeout(()=>{
                renouveler(enrs, new_z);
                add_retour_btn(par);
            },nbr_animation*1000);
            nbr_animation++;
        }else{
            setTimeout(()=>{
                console.log("NO SUPP !");
                enrs[0].style.marginTop = '1rem';
                par.querySelector('#yay').innerText = "La cle n'existe pas , Rien à supprimer !!";
                yay.style.background = 'orange';
                $(yay).fadeIn(500);
                setTimeout(() => {
                    $(yay).fadeOut(500);
                    enrs[0].style.marginTop = '0rem';
                }, 3000);
                add_retour_btn(par);
            }, nbr_animation*1000);
            nbr_animation++;

        }


        // #f1935c
    }else{
        let info = start_recherche(e, e.target.parentElement.querySelector('#key_supp'),false);
        let cpt_final = info[1];
        let nbr_animation = info[0];
        if (cpt_final !== -1) {
            let new_z = new_zone(enrs, cpt_final, true);
            console.log("AFTER SUPP ",print_keys(new_z));
            // setTimeout(()=>{
            //     console.log("SUPP !");
            //     console.log("AFTER SUPP ",print_keys(new_z));
            // }, nbr_animation*1000);
            setTimeout(()=>{
                deplacer_tout_1_up(enrs, cpt_final+1);
            },nbr_animation*500);
            nbr_animation+=8;
            // setTimeout(()=>{
            //
            // },nbr_animation*1000);
            // // enrs = new_z;
            // nbr_animation++;
            setTimeout(()=>{
                renouveler(enrs, new_z);
                add_retour_btn(par);
            },nbr_animation*500);
            nbr_animation++;
        }else{
            setTimeout(function(){
                console.log("NO SUPP !");
                enrs[0].style.marginTop = '1rem';
                par.querySelector('#yay').innerText = "La cle n'existe pas , Rien à supprimer !!";
                yay.style.background = 'orange';
                $(yay).fadeIn(500);
                setTimeout(() => {
                    $(yay).fadeOut(500);
                    enrs[0].style.marginTop = '0rem';
                }, 3000);
                add_retour_btn(par);
            }, nbr_animation*500);
            nbr_animation++;
        }

    }
}

function start_inserer(e) {
    let par = e.target.parentElement;
    let ord = e.target.parentElement.parentElement.querySelector('#ord').children[0].querySelector('input').checked;
    console.log("ord =", ord);
    let begin = false;
    let key_search = Number(e.target.parentElement.querySelector('#key_ins').value);
    console.log("key_search ", key_search);
    let yay = e.target.parentElement.querySelector('#yay');
    let enrs = e.target.parentElement.querySelectorAll('.ENR');
    console.log(enrs);
    if (key_search.length !== 0) {
        e.target.parentElement.querySelector('.ENR').style.marginTop = '1rem';
        yay.innerText = "The insertion is started succesfully !";
        yay.style.background = 'green';
        begin = true;
        $(e.target.parentElement.querySelector('#key_ins')).fadeOut(500, function () {
            $(this).remove()
        });
        $(e.target.parentElement.querySelector('#start_ins')).fadeOut(500, function () {
            $(this).remove()
        });
    } else {
        enrs[0].style.marginTop = '1rem';
        e.target.parentElement.querySelector('#yay').innerText = "Give us the Key before please!";
        yay.style.background = 'red';
    }
    $(yay).fadeIn(500);
    setTimeout(() => {
        $(yay).fadeOut(500);
        enrs[0].style.marginTop = '0rem';
    }, 3000);
    if (ord) {
        let info_dico = start_recherche_dico(e, e.target.parentElement.querySelector('#key_ins'), false);
        console.log("Normalement Dico = ,", info_dico);
        let indice = info_dico[1];
        let nbr_animation = info_dico[0];
        // setTimeout(() => {
        //     console.log("SUPP !!");
        //     // $(enrs[indice]).fadeOut(1000,)
        //     anime({
        //         targets: Array.from(enrs[indice].children),
        //         backgroundColor: "#000",
        //     });
        // }, nbr_animation * 1000);
        // nbr_animation++;
        if (Number(indice===enrs.length ||enrs[indice].querySelector('.key').innerText) !== key_search) {
            setTimeout(()=>{
                console.log("INS !");
                console.log("key search = ", key_search);
                console.log("how many values = ", enrs[0].children.length - 1);
                let new_enr = ins_enr(key_search, enrs[0].children.length-1);
                console.log(new_enr);
                let hr1 = document.createElement('hr');
                let hr2 = document.createElement('hr');
                $(par).append(hr1);
                $(par).append(new_enr);
                $(par).append(hr2);
                $(new_enr).fadeIn(500);
                let arr = [hr1, new_enr, hr2];
                // arr.push(add_retour_btn(par));
                console.log(arr);
                document.querySelector('#zone').style.height = (enrs.length * enrs[0].offsetHeight + enrs[0].offsetHeight * 3.5).toString() + "px";
                console.log("after :", document.querySelector('#zone').style.height);
                anime({
                    targets: arr,
                    keyframes: [
                        {translateY: enrs[0].offsetHeight},
                        // {translateY: 0}
                    ],

                });
                },nbr_animation*1000);
                nbr_animation+=1;
                // let cord = get_x_y(enrs[indice+1]);
                // console.log(" CORD = ",get_x_y(enrs[indice+1]));
            if (indice !== enrs.length) {
                setTimeout(() => {
                    deplacer_tout_1_down(enrs, indice);
                }, nbr_animation * 1000);
                nbr_animation+=4;
            }

            setTimeout(() => {
                let last = enrs[0].parentElement.querySelectorAll('.ENR')[enrs[0].parentElement.querySelectorAll('.ENR').length - 1];
                if(indice!==enrs.length){
                anime({
                    targets: Array.from(last.children),
                    keyframes: [
                        {translateX: get_width_children(enrs[0].children)},
                        {translateY:get_x_y(enrs[indice]).y-get_x_y(last).y  },
                        {translateX: 0},
                        // {translateY: 0}
                    ],
                    duration: 3000,
                });
                }
                else{
                    anime({
                        targets: Array.from(last.children),
                        keyframes: [
                            {translateX: get_width_children(enrs[0].children)},
                            {translateY:(get_x_y(enrs[indice-1]).y+enrs[0].offsetHeight)-get_x_y(last).y  },
                            {translateX: 0},
                            // {translateY: 0}
                        ],
                        duration: 3000,
                    });
                }
            }, nbr_animation * 1000);
            nbr_animation+=4;
            setTimeout(()=>{
                let new_z = new_zone(enrs , indice ,false);
                renouveler(enrs, new_z);
                add_retour_btn(par);
                $('hr').remove();
                document.querySelector('#zone').style.height = "";
            },nbr_animation*1000);
            nbr_animation++;



            // let new_z = new_zone(enrs, indice, true);
            // console.log("AFTER SUPP ", print_keys(new_z));
            // // setTimeout(()=>{
            // //     console.log("SUPP !");
            // //     console.log("AFTER SUPP ",print_keys(new_z));
            // // }, nbr_animation*1000);
            // setTimeout(() => {
            //     deplacer_tout_1_up(enrs, indice + 1);
            // }, nbr_animation * 1000);
            // nbr_animation += 4;
            // // setTimeout(()=>{
            // //
            // // },nbr_animation*1000);
            // // // enrs = new_z;
            // // nbr_animation++;
            // setTimeout(() => {
            //     renouveler(enrs, new_z);
            //     add_retour_btn(par);
            // }, nbr_animation * 1000);
            // nbr_animation++;
            }
        } else {
            let info = start_recherche(e, e.target.parentElement.querySelector('#key_ins'), false);
            let nbr_animation = info[0];
            let cpt_final = info[1];
            if (cpt_final !== -1) {
                setTimeout(()=>{
                    console.log("NO INS !");
                    enrs[0].style.marginTop = '1rem';
                    par.querySelector('#yay').innerText = "La cle existe deja !!  , Rien à inserer!!";
                    yay.style.background = 'orange';
                    $(yay).fadeIn(500);
                    setTimeout(() => {
                        $(yay).fadeOut(500);
                        enrs[0].style.marginTop = '0rem';
                    }, 3000);
                    add_retour_btn(par);
                }, nbr_animation*500);
                nbr_animation++;

            }else{
                setTimeout(()=>{
                    console.log("INS !");
                    console.log("key search = ", key_search);
                    console.log("how many values = ", enrs[0].children.length - 1);
                    let new_enr = ins_enr(key_search, enrs[0].children.length-1);
                    console.log(new_enr);
                    let hr1 = document.createElement('hr');
                    let hr2 = document.createElement('hr');
                    $(par).append(hr1);
                    $(par).append(new_enr);
                    $(par).append(hr2);
                    $(new_enr).fadeIn(500);
                    let arr = [hr1, new_enr, hr2];
                    // arr.push(add_retour_btn(par));
                    console.log(arr);
                    document.querySelector('#zone').style.height = (enrs.length * enrs[0].offsetHeight + enrs[0].offsetHeight * 3.5).toString() + "px";
                    console.log("after :", document.querySelector('#zone').style.height);
                    anime({
                        targets: arr,
                        keyframes: [
                            {translateY: enrs[0].offsetHeight},
                            // {translateY: 0}
                        ],

                    });
                },nbr_animation*500);
                nbr_animation+=1;
                setTimeout(() => {
                    let last = enrs[0].parentElement.querySelectorAll('.ENR')[enrs[0].parentElement.querySelectorAll('.ENR').length - 1];
                        anime({
                            targets: Array.from(last.children),
                            keyframes: [
                                {translateX: get_width_children(enrs[0].children)},
                                {translateY:(get_x_y(enrs[enrs.length-1]).y+enrs[0].offsetHeight)-get_x_y(last).y  },
                                {translateX: 0},
                                // {translateY: 0}
                            ],
                            duration: 3000,
                        });
                }, nbr_animation * 500);
                nbr_animation+=8;
                setTimeout(()=>{
                    let new_z = new_zone(enrs , enrs.length ,false);
                    renouveler(enrs, new_z);
                    add_retour_btn(par);
                    $('hr').remove();
                    document.querySelector('#zone').style.height = "";
                },nbr_animation*500);
                nbr_animation++;
            }
        }
    }

function get_x_y(el) {
    const rect = el.getBoundingClientRect();
    return {
        x: rect.left + window.scrollX,
        y: rect.top + window.scrollY
    };
}
function extraire_enrs(e) {
    console.log("ord = ", e.target.parentElement.parentElement.querySelector('#ord'));
    let ord = e.target.parentElement.parentElement.querySelector('#ord').children[0].querySelector('input').checked;
    let enrs = e.target.parentElement.parentElement.querySelectorAll('.ENR');
    let taille = enrs.length;
    // let key_rech = e.target.parentElement.parentElement.querySelector()
    now =0;
    let father = e.target.parentElement.parentElement;
    let not_enrs = e.target.parentElement.parentElement.querySelectorAll('*:not(.ENR):not(.item)');
    $(not_enrs).fadeOut(300);
    let sup = document.createElement('input');
    sup.placeholder="Extraire les enregistrements ayant une cle inferieur à : .....";
    let inf = document.createElement('input');
    inf.placeholder="Extraire les enregistrements ayant une cle superieur  à : .....";
    sup.style.display = "none";
    inf.style.display = "none";
    sup.id = "sup";
    inf.id = "inf";
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
    extraire_btn.style.backgroundColor="#78909C";
    extraire_btn.innerText = "Commencer l'extraction !";
    extraire_btn.style.display = "none";
    $(father).append(extraire_menu).append(extraire_btn);
    $(sup).fadeIn(500);
    $(inf).fadeIn(500);
    $(extraire_btn).click(start_extraire).fadeIn(500);
}

function start_extraire(e) {
    let ord = e.target.parentElement.parentElement.querySelector('#ord').children[0].querySelector('input').checked;
    let father = e.target.parentElement;
    let sup_key = father.querySelector('#extraire_menu').querySelector('#sup').value;
    let inf_key = father.querySelector('#extraire_menu').querySelector('#inf').value;
    if (sup_key.length !== 0) {
        sup_key = Number(sup_key);
    }else{
        sup_key = -1;
    }
    if (inf_key.length !== 0) {
        inf_key = Number(inf_key);
    }else{
        inf_key = -1;
    }
    console.log("sup key =", sup_key);
    console.log("inf key =", inf_key);
    if (sup_key !== -1 || inf_key !== -1) {
        let enrs = e.target.parentElement.querySelectorAll('.ENR');
        let not_enrs = e.target.parentElement.querySelectorAll('*:not(.ENR):not(.item)');
        $(not_enrs).fadeOut(300);
        extraire_zone(enrs, inf_key, sup_key);
    }

}
function extraire_zone(enrs , inf , sup) {
    let par = enrs[0].parentElement;
    let cpt =0;
    let cpt_now=0;
    let nbr_animation =0;
    let consider_inf =true;
    let consider_sup = true;
    let bad = [];
    if(inf===-1){
        consider_inf = false;
    }
    if (sup===-1){
        consider_sup=false
    }
    while(cpt < enrs.length){
        let key_now = Number(enrs[cpt].querySelector('.key').innerText);
        console.log("key now extraire =", key_now);
        setTimeout(() => {
            console.log("cpt_now 0=", cpt_now);
            anime({
                targets: Array.from(enrs[cpt_now].children),
                backgroundColor: "#333",
                duration: 500,
                direction: 'alternate',
            });
            cpt_now++;
        }, nbr_animation * 1000);
        nbr_animation++;
        if((consider_sup && consider_inf && key_now>=inf && key_now<=sup)||(consider_inf && !consider_sup && key_now>=inf)||(consider_sup == !consider_inf && key_now <=sup) ){
            console.log(key_now, "est validee !!");
            console.log("considerer inf =", consider_inf, "consider sup =", consider_sup, "inf =", inf, "sup =", sup);
            setTimeout(() => {
                console.log("cpt_now 1=", cpt_now);
                anime({
                    targets: Array.from(enrs[cpt_now-1].children),
                    backgroundColor: "#00ff00",
                });
            }, nbr_animation * 1000);
            nbr_animation++;
        }else{
            // setTimeout(() => {
            //     console.log("cpt_now 1=", cpt_now);
            //     anime({
            //         targets: Array.from(enrs[cpt_now-1].children),
            //         keyframes: [
            //             {translateX: -get_width_children(enrs[0].children)},
            //         ],
            //         duration: 1000,
            //     });
            // }, nbr_animation * 1000);
            // nbr_animation++;
            setTimeout(() => {
                console.log("cpt_now 2=", cpt_now);
                anime({
                    targets: Array.from(enrs[cpt_now-1].children),
                    keyframes: [
                        {translateX: get_width_children(enrs[0].children)},
                    ],
                    duration: 1000,
                });
                anime({
                    targets: Array.from(enrs[cpt_now-1].children),
                    backgroundColor: "#ff0000",
                });
            }, nbr_animation * 1000);
            bad.push(cpt);
            nbr_animation++;
        }
        cpt++;
    }
    let indice_now = 0;
    cpt=0;
    let cpt_now2 = 0;
    let new_z = [];
    console.log("here!!");
    console.log("bad =", bad);
    while (cpt < enrs.length) {
        console.log( ' cpt= ',cpt , ' and index of = ',bad.indexOf(cpt));
        if(bad.indexOf(cpt)!==-1){

            setTimeout(() => {
                console.log(" bad cpt_now2 = ", cpt_now2, " NO");
                // $(enrs[bad[cpt_now2]]).fadeOut(1000);
                // anime({
                //     targets: enrs[bad[cpt_now2]].children,
                //     backgroundColor: $('body').css("background-color"),
                // });
                anime({
                    targets: enrs[cpt_now2],
                    opacity: "0",
                    easing: 'steps(2)'
                });
                cpt_now2++;
            }, nbr_animation * 1000);
            nbr_animation++;

        }else{
            setTimeout(()=>{
                console.log(" bad cpt_now2 = ", cpt_now2, "YES");
                anime({
                    targets: Array.from(enrs[cpt_now2].children),
                    keyframes: [
                        {translateX: get_width_children(enrs[0].children)},
                        {translateY:  get_x_y(enrs[indice_now]).y -get_x_y(enrs[cpt_now2]).y },
                        {translateX: 0},
                    ],
                    duration: 3000,
                });
                cpt_now2++;
                indice_now++;
            }, nbr_animation * 1000);
            nbr_animation += 3;
        }
        cpt++;
    }
    setTimeout(() => {
        new_z = new_zone(enrs, bad);
        renouveler(enrs, new_z);
    }, nbr_animation * 1000);
    nbr_animation++;
    setTimeout(() => {
        add_retour_btn(par);
    }, nbr_animation * 1000);
    nbr_animation++;

}

///////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
////////////////////////////////////////////////////////
////////////Algo pour fichier vue comme tableau ///////



let submit_nb_bloc=(e) => {
    let classparent=e.target.parentElement.className;
    let yay = document.createElement('p');
    yay.id = 'yay';
    yay.style.display = 'none';
    $(e.target).parent().prepend(yay);
    let values=document.querySelector('#sub_nb_bloc').value;
    if(values <= 5 && values >0 ){
        $(e.target).fadeOut(250);
        $(e.target).parent().children('#sub_nb_bloc').fadeOut(250);
        setTimeout((target = e.target) => {
            $(target).parent().children('#submit_nb_enreg_par_bloc').fadeIn(250);
            $(target).parent().children('#sub_nb_enreg_par_bloc').fadeIn(250);
           // $(target).parent().children('#ord').fadeIn(250).css({'display': 'flex'});
            //console.log("your wish is : ", $(target).parent().children('#ord'));
        }, 250);
        // $(e.target.parentElement).append(enr(document.querySelector('#sub_enr').value));
        // document.querySelector('#sub_enr').value=null;
        // $(e.target).parent().children('.ENR').show({effect: "bounce",duration: 3000});
       // console.log("nb_bloc=",values);
    }else{
        showalert(values);
    }



    
};

let submit_nb_enreg_par_bloc=(e) => {
    let classparent=e.target.parentElement.className;
    let yay = document.createElement('p');
    yay.id = 'yay';
    yay.style.display = 'none';
    $(e.target).parent().prepend(yay);
    let values=document.querySelector('#sub_nb_enreg_par_bloc').value;
    if(values <= 3 && values >0 ){
        $(e.target).fadeOut(250);
        $(e.target).parent().children('#sub_nb_enreg_par_bloc').fadeOut(250);
        setTimeout((target = e.target) => {
            $(target).parent().children('#submit_nb_value').fadeIn(250);
            //$(target).parent().children('#sub_nb_value').fadeIn(250);
            $(target).parent().children('#ord').fadeIn(250).css({'display': 'flex'});
            //console.log("your wish is : ", $(target).parent().children('#ord'));
        }, 250);
        // $(e.target.parentElement).append(enr(document.querySelector('#sub_enr').value));
        // document.querySelector('#sub_enr').value=null;
      //   $(e.target).parent().children('.ENR').show({effect: "bounce",duration: 3000});
       // console.log("nb_bloc=",values);
    }else{
        showalert3(values);
    }
    
};


let submit_nb_value =(e) => {
    let par = e.target.parentElement;
    let classparent=e.target.parentElement.className;
    let ord = e.target.parentElement.querySelector('#ord').children[0].querySelector('input').checked;
    //console.log("ORD = ", ord);
    let yay = document.createElement('p');
    yay.id = 'yay';
    let key_prec=0;
    $(e.target).parent().prepend(yay);
    let nb_value = 1;//document.querySelector('#sub_nb_value').value;
    showalert_zone(nb_value);
    let nb_bloc = document.querySelector('#sub_nb_bloc').value;
    //alert(nb_bloc);
    let nb_enreg_par_bloc = document.querySelector('#sub_nb_enreg_par_bloc').value;
    if(nb_value <= 1 && nb_value > 0 ){
        creerFichier(e,nb_bloc,nb_enreg_par_bloc,nb_value,ord);
        $('#ord').fadeOut(250);
        $('#sub_nb_value').fadeOut(250);
    }  
    
};
function creerFichier(e,nb_bloc,nb_enreg_par_bloc,nb_value,ord){
 //let fichier=document.createElement('ul');
 //fichier.className="Fichier";
 fichier=document.querySelector('.Fichier');
 //alert(12321);
 let key_prec=0;
 for(let i=0;i<nb_bloc;i++){
        let bloc=document.createElement('ul');
        bloc.className="Zone";
        for(let j=0;j<nb_enreg_par_bloc;j++){
                
                let enreg = enr(nb_value , key_prec , ord);
                enreg.style.display = "";
                key_prec = Number(enreg.querySelector('.key').innerText);
                if(ord){}
                //let temp_enreg=document.createElement('li');
                // temp_enreg.appendChild(enrege);
                
                temp_enreg= document.createElement('li')
                temp_enreg.appendChild(enreg);
                bloc.append(temp_enreg);
        }
        
        temp_bloc= document.createElement('li')
        temp_bloc.append(bloc);
        fichier.append(temp_bloc);
 }

 document.querySelector('#fichier').appendChild(fichier);
 
}

let valeur_operation=document.querySelector('#valeur_operation');
const RechercheBtn = document.querySelector('#RechercheBtn');

//RechercheBtn.addEventListener('click',recherche);
////////////////////////////////////
function recherche(e){
const fichier=document.querySelector('.Fichier');
const cle = Number(valeur_operation.value);
const nb_bloc= fichier.children.length;
const nb_enreg=fichier.children[0].children[0].children.length;
    //document.querySelector('.Fichier').children[nb_bloc].children[0].children[nb_enreg].children[0]  c'est ul.ENR
    let i=0
    let nbr_animation=0;
  //  for (i=0;i<nb_bloc;i++){
     //let enrs=document.querySelector('.Fichier').children[i].querySelectorAll('.ENR') ;
           let trouv= false;
            while((!trouv)&&(i<nb_bloc)){
               // console.log("trouv=",trouv+nb_bloc);
               
                let enrs=document.querySelector('.Fichier').children[i].querySelectorAll('.ENR') ;
                let info = start_recherche_fichier(e, cle,enrs,nbr_animation);  
                trouv = info [2] ; 
                nbr_animation+=info[0]-i;
                i++;


            

            }
        
 //   }

    

}



function start_recherche_fichier(e, cle,enrs,nbr_animation) {
    let trouv=false;
  
    let begin = false;
    let key_search = Number(cle);
    console.log('KEY=', key_search);
    // bus.start_recherche();
    let cpt_final = -1;
    console.log("key_search = ", key_search);
    // yay est le message apparu ( la recherche a commancé )
    //let yay = e.target.parentElement.querySelector('#yay');
    // enrs est la zone où tu veux faire la recherche ( .zone1 , .zone2 , ..etc )
    //let enrs = e.target.parentElement.querySelectorAll('.ENR');
    console.log("enrs",enrs);
    if (key_search.length !== 0) {
     // e.target.parentElement.querySelector('.ENR').style.marginTop = '1rem';
       // enrs.style.marginTop = '1rem';
     // yay.innerText = "The search is started succesfully !";
     // yay.style.background = 'green';
      begin = true;
     // $(e.target.parentElement.querySelector('#key_src')).fadeOut(500, function () {
     //   $(this).remove()
     // });
      //$(e.target.parentElement.querySelector('#start_rech')).fadeOut(500, function () {
      //  $(this).remove()
      //});
    } else {
      enrs[0].style.marginTop = '1rem';
     // e.target.parentElement.querySelector('#yay').innerText = "Give us the Key before please!";
    //  yay.style.background = 'red';
    }
   // $(yay).fadeIn(500);
    setTimeout(() => {
      //$(yay).fadeOut(500);
      enrs[0].style.marginTop = '0rem';
    }, 3000);
    console.log("heeere");
    //let nbr_animation = 0;
    let continuer = true;
    if (begin) {
      console.log("begin!");
      let cpt = 0;
      while (continuer && cpt < enrs.length) {
        let bloc = enrs[cpt].children;
        setTimeout(() => {
          console.log(Array.from(bloc));
          console.log('//////////////////nbr_animation =', nbr_animation);
          anime({
            targets: Array.from(bloc),
            backgroundColor: "#333",
            duration: 500,
          });
        }, nbr_animation * 500);
        nbr_animation++;
        let key = Number(bloc[0].innerText);
        console.log("key =", bloc[0].innerText);
        console.log("search_key= ",key_search);
        if (key !== key_search && cpt!== enrs.length-1) {
          setTimeout(() => {
            console.log(Array.from(bloc));
            console.log('nbr_animation =', nbr_animation);
            // bus.animer(
            //   {style:'bg' , value:'#fff' ,  lignes: [7,8,9,10], duration : 250 , direction : 'alternate' },
            //   {style:'color' , value : '#000' ,  lignes: [7,8,9,10], duration : 250 , direction : 'alternate' }
            // );
            anime({
              targets: Array.from(bloc),
              backgroundColor: "#ff0000",
            });
          }, nbr_animation * 500);
          nbr_animation++;
        }else if(key !== key_search && cpt=== enrs.length-1) {
          setTimeout(() => {
            console.log(Array.from(bloc));
            console.log('nbr_animation =', nbr_animation);
            // bus.animer(
            //   {style:'bg' , value:'#fff' ,  lignes: [16,17,18,19], duration : 500 , direction : 'normal' },
            //   {style:'color' , value : '#000' ,  lignes: [16,17,18,19], duration : 500 , direction : 'normal' }
            // );
            anime({
              targets: Array.from(bloc),
              backgroundColor: "#ff0000",
            });
          }, nbr_animation * 500);
        }
        else {
          cpt_final = cpt;
          continuer = false;
          trouv=true;
          setTimeout(() => {
            console.log(Array.from(bloc));
            console.log('nbr_animation =', nbr_animation);
            // bus.animer(
            //   {style:'bg' , value:'#fff' ,  lignes: [11,12,13,14], duration : 500 , direction : 'normal' },
            //   {style:'color' , value : '#000' ,  lignes: [11,12,13,14], duration : 250 , direction : 'normal' }
            // );
            anime({
              targets: Array.from(bloc),
              backgroundColor: "#00ff00",
            });
          }, nbr_animation * 500);
          nbr_animation++;
        }
        cpt++;
      }

    }
    return [nbr_animation , cpt_final,trouv];
    // la retour est le nombre d'animation fait ( important pour garantir la continuité des animations apres la recherche )
    // dans la retour on a aussi cpt_final ( égal à l'indice de l'enregsitrement s'il existe sinon la clé juste inférieur )
  }







/*

function ins_enr(key , how_many_values){
    let enreg=document.createElement('ul');
    enreg.style.display = "none";
    enreg.className = "ENR";
    let li = document.createElement('li');
    li.className = "item key";
    li.innerText=Math.ceil(key).toString();
    li.style.backgroundColor="#00ff00";
    li.style.borderRightStyle = "dashed";
    enreg.appendChild(li);
    let cpt=0;
    while(cpt<how_many_values){
        let li = document.createElement('li');
        li.className = "item key";
        li.innerText="Value "+(cpt+1);
        li.style.borderLeftWidth = "0";
        li.style.backgroundColor="#00ff00";
        if(cpt!==how_many_values-1){li.style.borderRightStyle = "dashed";}
        enreg.appendChild(li);
        cpt+=1;
    }
    return enreg;
}
*/









/*
let fichier=document.querySelector('.fichier');
document.querySelector('#fichier').append(fichier);
for (let i=0;i<nb_bloc;i++){
   let bloc=document.createElement('ul');
   bloc.className="Zone";
 //  let temp_bloc=document.createElement('li');
   
  // for (let j=0;j<nb_enreg_par_bloc;j++){

        cpt=0;
        while(cpt<nb_enreg_par_bloc){
        
        let bloc=document.createElement('ul');
        bloc.className="Zone";
       // let temp_bloc= document.createElement('li');
      //  temp_bloc.appendChild(bloc);
        fichier.appendChild(bloc); 
            let enrege = enr(document.querySelector('#sub_nb_value').value , key_prec , ord);
            key_prec = Number(enrege.querySelector('.key').innerText);
            if(ord){console.log("prec = ", key_prec);}
            let temp_enreg=document.createElement('li');
           // temp_enreg.appendChild(enrege);
            console.log("enreg=",enrege);
            setTimeout((enreg=enrege)=>{
                if(cpt!==0){enreg.style.marginTop="0";}
                if(cpt!==nb_value-1){enreg.style.marginBottom="0";}
                bloc.appendChild(temp_enreg);
                $(e.target).parent().children('.ENR').show({effect: "bounce",duration: 250});
                },(cpt+1)*250);
                
                    if(cpt!==0){enreg.style.marginTop="0";}
                    if(cpt!==nb_value-1){enreg.style.marginBottom="0";}
                    bloc.appendChild(enreg);
                    $(e.target).parent().children('.ENR').show({effect: "bounce",duration: 250});
                    
                cpt++;
        }
   // }
   //let temp_bloc=document.createElement('li');
           

}
setTimeout(() => {
    let not_enrs = e.target.parentElement.querySelectorAll('*:not(.ENR):not(.item)');
    $(not_enrs).fadeOut(300);
    add_menu(e.target.parentElement);
}, (cpt + 1) * 250);

*/


function start_recherche(e, key) {
    console.log("ya imeddddddddaaaaa");
    // e c'est l'event de click sur le bouton
    //  key c'est la clé de l'enregistrement
    // rech = true si le but de l'execution n'est que la recherche , sinonn ( par exemple recherher pour inserer/supprimer ) : rech = false
    // bus.start_algo([0,1,2,3,4,5] , 500);
    // let father = e.target.parentElement;
   //  not enrs sont les elements que tu veux les masquer lors de la recherche ( par exemple l'input de cle de recherche est inutile lors de la recherche , tu dois la masquer )
    let not_enrs = e.target.parentElement.querySelectorAll('*:not(.ENR):not(.item)');
   console.log("e.target=",e.target);
   console.log("e.target.parentElement=",e.target.parentElement);
   console.log("not_enrs=",not_enrs);
    $(not_enrs).fadeOut(300);
  
    let begin = false;
    let key_search = Number(key);
    console.log('KEY=', key_search);
    // bus.start_recherche();
    let cpt_final = -1;
    console.log("key_search = ", key_search);
    // yay est le message apparu ( la recherche a commancé )
    let yay = e.target.parentElement.querySelector('#yay');
    // enrs est la zone où tu veux faire la recherche ( .zone1 , .zone2 , ..etc )
    let enrs = e.target.parentElement.querySelectorAll('.ENR');
    console.log("enrs",enrs);
    if (key_search.length !== 0) {
      e.target.parentElement.querySelector('.ENR').style.marginTop = '1rem';
      yay.innerText = "The search is started succesfully !";
      yay.style.background = 'green';
      begin = true;
      $(e.target.parentElement.querySelector('#key_src')).fadeOut(500, function () {
        $(this).remove()
      });
      $(e.target.parentElement.querySelector('#start_rech')).fadeOut(500, function () {
        $(this).remove()
      });
    } else {
      enrs[0].style.marginTop = '1rem';
      e.target.parentElement.querySelector('#yay').innerText = "Give us the Key before please!";
      yay.style.background = 'red';
    }
    $(yay).fadeIn(500);
    setTimeout(() => {
      $(yay).fadeOut(500);
      enrs[0].style.marginTop = '0rem';
    }, 3000);
    console.log("heeere");
    let nbr_animation = 0;
    let continuer = true;
    if (begin) {
      console.log("begin!");
      let cpt = 0;
      while (continuer && cpt < enrs.length) {
        let bloc = enrs[cpt].children;
        console.log("bloc=",bloc);
        setTimeout(() => {
          console.log(Array.from(bloc));
          console.log('nbr_animation =', nbr_animation);
          anime({
            targets: Array.from(bloc),
            backgroundColor: "#333",
            duration: 500,
          });
        }, nbr_animation * 500);
        nbr_animation++;
        let key = Number(bloc[0].innerText);
        console.log("key = ", bloc[0].innerText);
        if (key !== key_search && cpt!== enrs.length-1) {
          setTimeout(() => {
            console.log(Array.from(bloc));
            console.log('nbr_animation =', nbr_animation);
            // bus.animer(
            //   {style:'bg' , value:'#fff' ,  lignes: [7,8,9,10], duration : 250 , direction : 'alternate' },
            //   {style:'color' , value : '#000' ,  lignes: [7,8,9,10], duration : 250 , direction : 'alternate' }
            // );
            anime({
              targets: Array.from(bloc),
              backgroundColor: "#ff0000",
            });
          }, nbr_animation * 500);
          nbr_animation++;
        }else if(key !== key_search && cpt=== enrs.length-1) {
          setTimeout(() => {
            console.log(Array.from(bloc));
            console.log('nbr_animation =', nbr_animation);
            // bus.animer(
            //   {style:'bg' , value:'#fff' ,  lignes: [16,17,18,19], duration : 500 , direction : 'normal' },
            //   {style:'color' , value : '#000' ,  lignes: [16,17,18,19], duration : 500 , direction : 'normal' }
            // );
            anime({
              targets: Array.from(bloc),
              backgroundColor: "#ff0000",
            });
          }, nbr_animation * 500);
        }
        else {
          cpt_final = cpt;
          continuer = false;
          setTimeout(() => {
            console.log(Array.from(bloc));
            console.log('nbr_animation =', nbr_animation);
            // bus.animer(
            //   {style:'bg' , value:'#fff' ,  lignes: [11,12,13,14], duration : 500 , direction : 'normal' },
            //   {style:'color' , value : '#000' ,  lignes: [11,12,13,14], duration : 250 , direction : 'normal' }
            // );
            anime({
              targets: Array.from(bloc),
              backgroundColor: "#00ff00",
            });
          }, nbr_animation * 500);
          nbr_animation++;
        }
        cpt++;
      }

    }
    return [nbr_animation + 1, cpt_final];
    // la retour est le nombre d'animation fait ( important pour garantir la continuité des animations apres la recherche )
    // dans la retour on a aussi cpt_final ( égal à l'indice de l'enregsitrement s'il existe sinon la clé juste inférieur )
  }
  //fix style
  var tabFichier1 = document.getElementById("tabF");
  const classlist = ["ui-tabs", "ui-corner-all", "ui-widget", "ui-widget-content"];
  for(let i =0; i < classlist.length; i++){
      tabFichier1.classList.remove(classlist[i]);
  }