// Variables Globales 
const begin_x_buff= 200; const begin_y_buff= 20;  const begin_x= 70; const begin_y= 70;    //points de départ (X,Y)  pour dessiner les différentes structures 
let slider = document.querySelector('.slider'); //controleur de vitesse
let nbr_animation=0;  //nombre d'animations
let ord =false;  //boolean pour indiquer le type du fichier (ordonné ou non)
let nb_lecture,nb_ecriture =0;  //nombre de lecture , ecriture


//Scroll Bar Configuration
let taille = document.documentElement.clientHeight;
    let top_p = $('#header').innerHeight();
    let bas = $('#cote-bas').innerHeight();
    document.getElementById('svg').setAttribute("height", '' + (taille - top_p - bas - 15) + '');
    $(window).resize(function() {
        let taille = document.documentElement.clientHeight;
        let top_p = $('#header').innerHeight();
        let bas = $('#cote-bas').innerHeight();
        document.getElementById('svg').setAttribute("height", '' + (taille - top_p - bas - 15) + '');
    });
//Fin Scroll Bar 




function setup()
{ 
      //Instancier les deux fichier ordonné et non ordonné
      let fichier = new fichier_liste(); 
      let fichier_ord = new fichier_liste();








/*********************************    Evènements et Méthodes relatifs à l'aide en ligne    *****************************************/
      

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

    document.getElementById("aide-hide").addEventListener('click', function() {

      aide_hide();
    });
//_____________________________________________________________________________//
    // fonction pour accéder à l'aide en ligne 
    function aide_hide(){  
      $('.kolech').fadeIn(2000);
      document.querySelector(".aide").style.display = "block";
      document.getElementById("suivant").style.display = "flex";
      document.getElementById("precedent").style.display = "none";
      document.getElementById("photo0").style.display = "flex";
      for (let index = 1; index < nbrDePhotoAide; index++) {
          document.getElementById(tabDesPhoto[index]).style.display = "none";}

    }


    const nbrDePhotoAide = 6;  
        var tabDesPhoto = []; //cette table va contenir les ID des slides
        for (let index = 0; index < nbrDePhotoAide; index++) {
            tabDesPhoto[index] = "photo" + index;
        }
        // fonction pour quitter l'aide en ligne
        document.getElementById('quitte').addEventListener('click', function() {
            $('.aide').fadeOut();
        });


        // fonction pour passer à la photo suivante dans l'aide en ligne
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
//_____________________________________________________________________________//
          // fonction pour passer à la photo précedante dans l'aide en ligne
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

/****************************************    FIN aide en ligne    *************************************************/

 /*********************************  Fonction du Clique sur le type LOF  *************************************/
  
    document.getElementById("title-lof").addEventListener('click',function(){ 
        
      fichier = new fichier_liste();
      
      blocs.innerHTML='';
      enregs.innerHTML='';
      nexts.innerHTML=''; 
      nb_blocs.innerHTML='';
      txts.innerHTML='';
      svg_buff.innerHTML='';
      svg_buff_text.innerHTML='';
      fermer_cout();
      

      document.getElementById("title-lof").className="visited";
      var lobar = document.getElementById("title-lobarf");
      lobar.classList.remove("visited");
      ord=true;
      fermer_menu();
      document.getElementById("menu-hide").style.padding="77px 14px 77px 15px";
        document.getElementById("menu-hide").style.bottom="60px";
        document.getElementById("menu").style.height="175px";
        document.getElementById("menu").style.bottom="58px";
        document.getElementById("create-action").style.bottom="183px";
        document.getElementById("search-action").style.bottom="157px";
        document.getElementById("insert-action").style.bottom="132px";
        document.getElementById("delete-action").style.bottom="108px";
    });
 /********************************************************************************************************/

/*********************************  Fonction du Clique sur le type LObarF  *************************************/

      document.getElementById("title-lobarf").addEventListener('click',function(){ 
        
      
      fichier_ord = new fichier_liste();
      ordonne.innerHTML='';
        
        document.getElementById("title-lobarf").className="visited";
        var lobar = document.getElementById("title-lof");
        lobar.classList.remove("visited");
        ord=false;
        fermer_menu();
        fermer_cout();
          document.getElementById("menu-hide").style.padding="65px 14px 65px 15px";
          document.getElementById("menu-hide").style.bottom="68px";
          document.getElementById("menu").style.height="153px";
          document.getElementById("menu").style.bottom="65px";
          document.getElementById("create-action").style.bottom="168px";
          document.getElementById("search-action").style.bottom="141px";
          document.getElementById("insert-action").style.bottom="116px";
          document.getElementById("delete-action").style.bottom="91px";

    });
 /********************************************************************************************************/

  /**************************************  Fonction Supprimer Tout  ******************************************/
  /**********************************************************************************************************/
  function supprimer_tout (){ 

      
    fichier = new fichier_liste();       //instancier fichier non ordonné
    fichier_ord = new fichier_liste();  //instancier fichier ordonné
    //Inisialisation à vide des differents conteneurs
    blocs.innerHTML='';
    enregs.innerHTML='';
    nexts.innerHTML=''; 
    nb_blocs.innerHTML='';
    txts.innerHTML='';
    svg_buff.innerHTML='';
    svg_buff_text.innerHTML='';
    ordonne.innerHTML='';

    document.querySelector('.create').style.display='none';
    document.querySelector('.search').style.display='none';
    document.querySelector('.delete').style.display='none';
    document.querySelector('.requette').style.display='none';
    fermer_cout();
  }
  /*********************************************************************************************************/

    document.getElementById("deleteall").addEventListener('click',supprimer_tout);

  /********************************  Fonction ourvir/fermer le menu des opérations  **************************************/

    function fermer_menu(){     
      if (document.getElementById("menu").style.width=='0px') 
        {
          for (let index = 0; index < 150; index++) {
            setTimeout(() => {
                document.getElementById("menu").style.width = index + 'px';
            }, index * 0.9);
        } 
        anime({
          targets: '#img1',
          rotate: {
            value: 180,
            duration: 500,
            easing: 'easeInOutSine'
          }        
          
      });


      }
      else {
        for (let index = 150; index > -1; index--) {
          setTimeout(() => {
              document.getElementById("menu").style.width = index + 'px';
          }, (151-index) * 0.9);
      } 
        
        //rotation de l'image
      anime({
        targets: '#img1',
        rotate: {
          value: 0,
          duration: 500,
          easing: 'easeInOutSine'
        }        
        
    });

        }

          // Enlever  la requette du menu des opérations si le fichier n'est pas ordonné , car la requette est propre aux fichiers ordonnés
           if(!ord){ 
            document.getElementById("requette").style.display='none';
            }
            else{
              document.getElementById("requette").style.display='';
            }
            
            document.querySelector('#create-action').style.display='none';
            document.querySelector('#search-action').style.display='none';
            document.querySelector('#insert-action').style.display='none';
            document.querySelector('#delete-action').style.display='none';
            document.querySelector('#requette-action').style.display='none';
            
    }

    // Associer le clique à la fonction ourvir/fermer le menu des opérations
  document.getElementById("menu-hide").addEventListener('click',fermer_menu);

/**********************Fermer la fenetre de l'algorithme*************************** */
function fermer_code(){ 
        
  if (document.getElementById("code").style.width != '0px') {
            document.getElementById("code").style.width = '0px';
            for (let index = 420; index > -1; index--) {
                setTimeout(() => {
                    document.getElementById("code").style.width = index + 'px';
                }, (420 - index) * 0.9);
            }
            document.getElementById("code-hide-img").className = "rotateRight";
        }

      }

/********************************************************************************************/

/****************************  Femrer/Ouvrir la fenetre d'algorithme **********************************/

      document.getElementById("code-hide").addEventListener('click',function()
      { 
        
          if (document.getElementById("code").style.width == '0px') {
            for (let index = 0; index < 421; index++) {
                setTimeout(() => {
                    document.getElementById("code").style.width = index + 'px';
                }, index * 0.9);
            }
            document.getElementById("code-hide-img").className = "rotateLeft";
        } else {
            document.getElementById("code").style.width = '0px';
            for (let index = 420; index > -1; index--) {
                setTimeout(() => {
                    document.getElementById("code").style.width = index + 'px';
                }, (420 - index) * 0.9);
            }
            document.getElementById("code-hide-img").className = "rotateRight";
        }

      });
/********************************************************************** */


/*************************** Fermer la barre de commentaires ******************************************** */
function fermer_comm(){ 
  

    if (document.getElementById("instruction").style.width != '0px'){
      for (let index = 420; index > -1; index--) {
          setTimeout(() => {
              document.getElementById("instruction").style.width = index + 'px';
          }, (420 - index) * 0.9);
      }
  if (document.getElementById("instruction-img").className == "rotateLeft") {  //Rotation de l'image (rotateLeft \ rotateRight)
      document.getElementById("instruction-img").className = "rotateRight";
  } else {
      document.getElementById("instruction-img").className = "rotateLeft";
  }
  }

}

/*************************************** FIn fermer_comm  ********************************************/


/**************************** Femrer/Ouvrir   la fenetre de commentaire *********************/
      document.getElementById("instruction-hide").addEventListener('click',function()
      { 
        

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
        if (document.getElementById("instruction-img").className == "rotateLeft") {  //Rotation de l'image (rotateLeft \ rotateRight)
            document.getElementById("instruction-img").className = "rotateRight";
        } else {
            document.getElementById("instruction-img").className = "rotateLeft";
        }

      });
/***********************************************************************************************************/
/*********** Méthodes pour les evenement de clique dans le menu des opérations **************************** */

      document.getElementById("insert").addEventListener('click',function()
      { 
          if (document.getElementById("insert-action").style.display=='none') {
            document.querySelector('.create').style.display='none';
            document.querySelector('.search').style.display='none';
            document.querySelector('.delete').style.display='none';
            document.querySelector('.requette').style.display='none';
            document.getElementById("insert-action").style.display='flex';
          }
          else document.getElementById("insert-action").style.display='none';
          

      });
//_____________________________________________________________________________//
      document.getElementById("create").addEventListener('click',function()
      { 
          if (document.getElementById("create-action").style.display=='none') {
            document.querySelector('.insert').style.display='none';
            document.querySelector('.search').style.display='none';
            document.querySelector('.delete').style.display='none';
            document.querySelector('.requette').style.display='none';
            document.getElementById("create-action").style.display='flex';
            
          }
          else document.getElementById("create-action").style.display='none';
          if(ord){ document.getElementById('taux').style.display="";
                  }
          else{ document.getElementById('taux').style.display="none";
              }

      });
//_____________________________________________________________________________//     
      document.getElementById("search").addEventListener('click',function()
      { 
          if (document.getElementById("search-action").style.display=='none') {
            document.querySelector('.insert').style.display='none';
            document.querySelector('.create').style.display='none';
            document.querySelector('.delete').style.display='none';
            document.querySelector('.requette').style.display='none';
            document.getElementById("search-action").style.display='flex';
            
          }
          else document.getElementById("search-action").style.display='none';
          

      });
//_____________________________________________________________________________//
      document.getElementById("delete").addEventListener('click',function()
      {
        if (document.getElementById("delete-action").style.display=='none') {
          document.querySelector('.insert').style.display='none';
          document.querySelector('.create').style.display='none';
          document.querySelector('.search').style.display='none';
          document.querySelector('.requette').style.display='none';


          document.getElementById("delete-action").style.display='flex';
          
        }
        else document.getElementById("delete-action").style.display='none';
        
      });
//_____________________________________________________________________________//
      document.getElementById("entete").addEventListener('click',function()
      {
        let nb_enreg =parseInt(document.querySelector('#sub_nb_enreg').value); 
        if (!ord) {afficher_entete(fichier,nb_enreg);}    //faire l'appel de la méthode selon le type du fichier (ord)
        else  {afficher_entete_ord(fichier_ord,nb_enreg);}
        
      });
//_____________________________________________________________________________//
      document.getElementById("requette").addEventListener('click',function()
      {
        if (document.getElementById("requette-action").style.display=='none') {
          document.querySelector('.insert').style.display='none';
          document.querySelector('.create').style.display='none';
          document.querySelector('.search').style.display='none';
          document.querySelector('.delete').style.display='none';

          document.getElementById("requette-action").style.display='flex';
          
        }
        else document.getElementById("requette-action").style.display='none';
        
      });
/*********************  Evenements (mouseover,mouseout) *****************************/
//_____________________________________________________________________________//
      document.querySelector('#insert').addEventListener('mouseover',function(e){
        e.target.style.backgroundColor='black';
      });
//_____________________________________________________________________________//
      document.querySelector('#insert').addEventListener('mouseout',function(e){
        e.target.style.backgroundColor='lightseagreen';
      });
//_____________________________________________________________________________//
      document.querySelector('#create').addEventListener('mouseover',function(e){
        e.target.style.backgroundColor='black';
      });
//_____________________________________________________________________________//
      document.querySelector('#create').addEventListener('mouseout',function(e){
      e.target.style.backgroundColor='lightseagreen';
      });
//_____________________________________________________________________________//
      document.querySelector('#search').addEventListener('mouseover',function(e){
        e.target.style.backgroundColor='black';
      });
//_____________________________________________________________________________//
      document.querySelector('#search').addEventListener('mouseout',function(e){
      e.target.style.backgroundColor='lightseagreen';
      });
//_____________________________________________________________________________//
      document.querySelector('#delete').addEventListener('mouseover',function(e){
        e.target.style.backgroundColor='black';
      });
//_____________________________________________________________________________//
      document.querySelector('#delete').addEventListener('mouseout',function(e){
        e.target.style.backgroundColor='lightseagreen';
      });
//_____________________________________________________________________________//
      document.querySelector('#entete').addEventListener('mouseover',function(e){
        e.target.style.backgroundColor='black';
      });
//_____________________________________________________________________________//
      document.querySelector('#entete').addEventListener('mouseout',function(e){
        e.target.style.backgroundColor='lightseagreen';
      });
//_____________________________________________________________________________//
     document.querySelector('#deleteall').addEventListener('mouseover',function(e){
      e.target.style.backgroundColor='black';
    });
//_____________________________________________________________________________//
    document.querySelector('#deleteall').addEventListener('mouseout',function(e){
      e.target.style.backgroundColor='lightseagreen';
    });
//_____________________________________________________________________________//
    document.querySelector('#requette').addEventListener('mouseover',function(e){
      e.target.style.backgroundColor='black';
    });
//_____________________________________________________________________________//
    document.querySelector('#requette').addEventListener('mouseout',function(e){
      e.target.style.backgroundColor='lightseagreen';
    });

/***********  FIN Méthodes pour les evenement de clique dans le menu des opérations **************************** */





      let ty= document.getElementById('submit_arb');
      let vitesse = (( 200 - Number(slider.value))   / 100);

      //Evenement de l'opération Insertion 

      ty.addEventListener('click',function(e){
        fermer_cout();
        fermer_menu();
        document.getElementById("menu-hide").removeEventListener('click',fermer_menu);
        document.querySelector('#insert-action').style.display='none';
        let valeur = Number( document.querySelector('#sub_arb').value );
        document.getElementById("instruction").style.width='420px';
        $('#instruction').children('p').text("Insertion de la valeur : "+valeur);
        
        document.getElementById("instruction").style.width='420px';
        let temp=0;
        let nb_enreg =document.querySelector('#sub_nb_enreg').value;
        if(!ord){
          if((valeur>0)&&(!isNaN(valeur))&&(valeur<10000) ) {
          
              //l'algorithme d'insertion dans fichier non ordonné
              const algo_insertion= `
              <p> Insertion_Fichier(nomFich,cle) </p>
              <p>DEBUT</p>
              <p id="ouvrir"> Ouvrir(F,nomFich,'A') </p> 
              <p id="recherche">Recherche_Fichier(F,cle,Var Trouv,Var i,Var j) </p>
              <p id="ntrouv" >  Si (Non Trouv) </p>
              <p id="dernier" >&nbsp;&nbsp;Buffer_dernier &lt;—Lecture(nb_bloc) //Dernier Bloc </p>
              <p id="place" >&nbsp;&nbsp;Si ( Buffer_dernier.nb < nb_enreg )</p>
              <p id="place1" > &nbsp;&nbsp;&nbsp;&nbsp;Buffer_dernier.tab[ Buffer_dernier.nb] &lt;— cle </p>
              <p id="place2" >&nbsp;&nbsp;&nbsp;&nbsp;Buffer_dernier.nb  &lt;— Buffer_dernier.nb +1</p>
              <p id="alloc" >&nbsp;&nbsp;Sinon </p>
              <p id="alloc1" >&nbsp;&nbsp;&nbsp;&nbsp;AllocBloc(F)</p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;Buffer.tab[1]=cle; EcrirDir(F,nb_bloc+1,Buffer)</p>
              <p>MAJ_ENTETE(F,i,j)</p>
              <p id="trouv" >  Sinon // Trouv</p>
              <p id="ecrire" > &nbsp;&nbsp;&nbsp;;&nbsp; Ecrire (la valeur existe)</p>
              <p id="fermer" >Fermer(F)</p>
              <p id="fin" >FIN</p>
              `;
              document.getElementById("code").style.width='420px';
              document.getElementById("code").innerHTML=algo_insertion;
          
          
          
          
          
          
              //Insertion : Fichier non ordonné
              insererFichier(fichier,valeur,nb_enreg,vitesse);
        }
        else{alert("Veuillez entrer une clé superieure à zéro et inférieure à 10000  !");}
        
        
        
        }
        else{

          if((valeur>0)&&(!isNaN(valeur))&&(valeur<10000) ) {
          //l'algorithme d'insertion dans fichier ordonné  
          const algo_insertion= `
          <p> Insertion_Fichier(nomFich,cle) </p>
          <p>DEBUT</p>
          <p id="ouvrir"> Ouvrir(F,nomFich,'A') </p> 
          <p id="recherche">Recherche_Fichier(F,cle,Var Trouv,Var i,Var j) </p>
          <p id="ntrouv" > &nbsp; Si (Non Trouv) </p>
          <p> &nbsp;&nbsp;Buffer &lt;—LirDir(F , Entete(F,1) ) </p>
          <p> &nbsp;&nbsp;&nbsp; TQ(Buffer.suiv <> i ) LirDir(F,i,Buffer) </p>  
          <p id="cap" > &nbsp;&nbsp;&nbsp;Si ( Buffer.nb < nb_enreg )</p>  
          <p id="insert_buff" >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Insertion_Dans_Buffer(Buffer,cle)</p>
          <p id="ncap" >&nbsp;&nbsp;&nbsp;Sinon</p>
          <p id="eclat" >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Eclatement_Bloc(Buffer,i,cle)</p>
          <p>MAJ_ENTETE(F,i,j)</p>
          <p id="trouv" >  &nbsp; Sinon // Trouv</p>
          <p id="ecrire" > Ecrire (la valeur existe)</p>
          <p id="fermer" >Fermer(F)</p>
          <p id="fin" >FIN</p>
          `;
        document.getElementById("code").style.width='420px';
        document.getElementById("code").innerHTML=algo_insertion;
          //Insertion : Fichier ordonné
          insertionFichierordonne(fichier_ord,valeur,nb_enreg,vitesse);
        }
        else{alert("Veuillez entrer une clé superieure à zéro et inférieure à 10000 !");}

        }//fin insertion fichier ordonné
        
        
        setTimeout(function(){ 
          cout(nb_lecture,nb_ecriture);   //afficher le cout de l'opération
          document.getElementById("menu-hide").addEventListener('click',fermer_menu);
          $('#instruction').children('p').text("Fin de l'insertion");
          
          fermer_code(); fermer_comm();  
          
          
          nbr_animation=0;},nbr_animation*500*vitesse);nbr_animation++;

      });
      //Evenement de l'operation Création
      document.getElementById('submit_cre').addEventListener('click',function(){ 

        supprimer_tout();
        fermer_cout();
        document.querySelector('#create-action').style.display='none';
        
        let nb_bloc =document.querySelector('#sub_nb_bloc').value;
        let nb_enreg =document.querySelector('#sub_nb_enreg').value;
        
        if((nb_enreg>0)&&(nb_bloc>0)&&(!isNaN(nb_enreg))&&(!isNaN(nb_enreg)) ){
        document.getElementById("instruction").style.width='420px';
        $('#instruction').children('p').text("Creation Fichier NB_Bloc = "+nb_bloc+" NB_Enreg = "+nb_enreg);
        }
        
        
        if(!ord){ 
          if((nb_enreg>0)&&(nb_bloc>0)&&(!isNaN(nb_enreg))&&(!isNaN(nb_enreg))&&(nb_enreg<13)&&(nb_bloc<21) ){
          //Création : Fichier non ordonné
          creerFichier(fichier,nb_bloc,nb_enreg); 
          //l'algorithme de création dans fichier non ordonné
          const algo_creation= `
            <p> Creation_Fichier(nb_bloc,nb_enreg) </p>
            <p>&nbsp;DEBUT</p>
            <p id="ouvrir"> &nbsp;&nbsp;Ouvrir(F,nomFich,'N') </p> 
            <p id="boucle_i">&nbsp; &nbsp;&nbsp; &nbsp;Pour i allant de 1 jusqu'a nb_bloc </p>
            <p id="boucle_j">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Pour j allant de 1 jusqu'a nb_enreg </p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; buffer.tab[j] = genrer_enreg() </p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;FPour</p>
            <p>&nbsp; &nbsp;&nbsp; &nbspEcrirDir(F,i,buffer)</p>
            <p>&nbsp; &nbsp;&nbsp; &nbsp FPour</p>
            <p>&nbsp;&nbsp;MAJ_ENTETE(F,i,j)</p>
            <p>&nbsp;&nbsp;Fermer(F)</p>
            <p>&nbsp;FIN</p>
            `;
            document.getElementById("code").style.width='420px';
            document.getElementById("code").innerHTML=algo_creation;
            
          
        }
        else{alert("Veuillez entrer une valeur valide svp !");}

        }
        
        else{
          //l'algorithme de création dans fichier ordonné
          const algo_creation= `
            <p> Creation_Fichier(nomFich,nb_bloc,nb_enreg,taux) </p>
            <p>&nbsp;DEBUT</p>
            <p id="ouvrir"> &nbsp;&nbsp;Ouvrir(F,nomFich,'N') </p> 
            <p id="boucle_i">&nbsp; &nbsp;Pour i allant de 1 jusqu'a nb_bloc </p>
            <p id="boucle_j">&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp; Pour j allant de 1 jusqu'a (nb_enreg*taux) </p>
            <p>&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp; buffer.tab[j] = genrer_enreg() </p>
            <p>&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;FPour</p>
            <p>&nbsp;&nbsp;EcrirDir(F,i,buffer)</p>
            <p>&nbsp;&nbsp;FPour</p>
            <p>&nbsp;&nbsp;MAJ_ENTETE(F,i,j)</p>
            <p>&nbsp;&nbsp;Fermer(F)</p>
            <p>&nbsp;FIN</p>
            `;
            
            document.getElementById("code").style.width='420px';
            document.getElementById("code").innerHTML=algo_creation;
            
          const to = Number(document.getElementById('taux').value)/100;
          
          if((nb_enreg>0)&&(nb_bloc>0)&&(to>0)&&(to<=1)&&(nb_enreg<13)&&(nb_bloc<31)  ){
          //Création : Fichier ordonné
          creerFichierordonne(fichier_ord,nb_bloc,nb_enreg,to);
             //Fin de l'opération
          }
        else {alert("Veuillez entrer une valeur valide svp !");}
      
          
      
      
      
      
        }
        
        cout(nb_lecture,nb_ecriture); //Afficher le cout de l'opération
      
      });

      //Evenement de l'opération Recherche 
      document.getElementById('submit_sea').addEventListener('click',function(){ 
        fermer_cout();
        fermer_menu();
        document.getElementById("menu-hide").removeEventListener('click',fermer_menu);
        
        let vitesse = (( 200 - Number(slider.value))   / 100);

        document.querySelector('#search-action').style.display='none';
        
        let valeur = parseInt(document.querySelector('#sub_sea').value);
        document.getElementById("instruction").style.width='420px';
        $('#instruction').children('p').text("Recherche de la valeur : ",valeur);
        
        
            if(!ord){
          //l'algorithme de recherche dans fichier non ordonné
          const algo_recherche= `
          <p> Recherche_Fichier(F,cle,Var Trouv,Var i,Var j) </p>
          <p id="debut" >DEBUT</p>
          <p id="ouvrir" > &nbsp;&nbsp;Ouvrir(F,nomFich,'A') </p>
          <p id="affect" > &nbsp;&nbsp; i<—Entete(F,1); j<—1; Trouv<—Faux </p>
          <p>&nbsp;&nbsp;TQ(i<>Entete(F,2) et (NonTrouv) </p>
          <p id="lecture">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; LirDir(F,i,buffer) </p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;TQ(j&lt; buffer.nb) et (NonTrouv) </p>
          <p id="trouv">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Si(buffer.tab[j]=cle) Trouv<—Vrai</p>
          <p id="ntrouv">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Sinon j<—j+1</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;FTQ</p>
          <p>&nbsp;&nbsp;&nbsp;i<—buffer.suiv</p>
          <p>&nbsp;&nbsp;FTQ</p>
          <p>&nbsp;Fermer(F)</p>
          <p>FIN</p>
          `;
          document.getElementById("code").style.width='420px';
          document.getElementById("code").innerHTML=algo_recherche;
                  //Recherche : fichier non ordonné
        let rech = rechercheFichier(fichier,valeur,vitesse);
              if((rech.i!=-1)&&(rech.j!=-1)){
              //Début animation algorithme
              animer_ligne('debut',vitesse);
              animer_ligne('ouvrir',vitesse);
              animer_ligne('affect',vitesse);


        
        for(let j=0;j<rech.yellow.length;j++){
          let id_e= rech.yellow[j] ; 

          
          setTimeout(function(){ 
            
            document.getElementById(id_e).setAttribute("fill","yellow");    //Animer les clés parcourues 
          },nbr_animation*500*vitesse);
          nbr_animation++;
          
          if(rech.red.includes(id_e)){
            
            
              setTimeout(function(){ 
              
                document.getElementById(id_e).setAttribute("fill","red");   //Animer les clés différentes de la clé recherchée
                document.getElementById('ntrouv').className="highlight";
              },nbr_animation*500*vitesse);
              nbr_animation++;
              setTimeout(function(){ document.getElementById('ntrouv').classList.remove("highlight");},nbr_animation*500*vitesse); nbr_animation++;
            }

          else if ( rech.green.includes(id_e) ) {
      
            setTimeout(function(){ 
            
              document.getElementById(id_e).setAttribute("fill","#00ff00");   //Animer la clés égale à la clé recherchée
              document.getElementById('trouv').className="highlight";
            },nbr_animation*500*vitesse);
            nbr_animation+=3;
            setTimeout(function(){ document.getElementById('trouv').classList.remove("highlight");},nbr_animation*500*vitesse); nbr_animation++;
          }

          if(rech.trouv){ setTimeout(function(){     $('#instruction').children('p').text("L'element existe dans le Bloc : "+rech.i+" L'enreg : "+(rech.j+1)); },nbr_animation*500*vitesse); nbr_animation++;  }
          else {   setTimeout(function(){    $('#instruction').children('p').text("L'element n'existe pas");  },nbr_animation*500*vitesse); nbr_animation++;   }      
          
        
        }
            
        
        
          //Effacement de la trace de l'animation
        for(let temp=0;temp<rech.yellow.length;temp++){
          
          setTimeout(function(){ 
            
            document.getElementById(rech.yellow[temp]).setAttribute("fill","none");
          },nbr_animation*500*vitesse);
          nbr_animation+=0.4;
          }
          nbr_animation++;
        
        setTimeout(function(){ 
          svg_buff_text.innerHTML='';
      },nbr_animation*500*vitesse);

            } 
      

      }
        
      
      else{ //recherche ordonne
        //l'algorithme de recherche dans fichier ordonné
        const algo_recherche= `
          <p id="rech"> Recherche_Fichier(F,cle,Var Trouv,Var i,Var j) </p>
          <p id="debut">DEBUT</p>
          <p id="ouvrir"> &nbsp;&nbsp;Ouvrir(F,nomFich,'A') </p>
          <p id="affec"> &nbsp;&nbsp; i<—Entete(F,1); j<— -1; Trouv<—Faux; Stop<—Faux; </p>
          <p id="tq">&nbsp;&nbsp; TQ( (i<>Entete(F,1)) et (Non Trouv) et (Non Stop) )</p>
          <p>&nbsp;&nbsp; DTQ</p>
          <p id="lirdir" >&nbsp;&nbsp;&nbsp;LirDir(F,i,buffer) </p>
          <p id="if1" > &nbsp; &nbsp; &nbsp; &nbsp;&nbsp Si(cle < buffer.tab[1].cle)  </p>
          <p id="stop1"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Stop<— Vrai</p>
          <p id="if" >  &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;Sinon Si (cle>=buffer.tab[0].cle)et(cle<=buffer.tab[buffer.nb].cle)</p>
          <p id="stop"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Stop<— Vrai</p>
          <p>  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; FSI </p>
          <p id="dicho"> &nbsp; &nbsp;&nbsp;Recherche_Dicho_Dans_Buffer(Buffer,Var Trouv,Var i,Var j)</p>
          <p>  &nbsp; &nbsp;&nbsp; FSI</p>
          <p id="suiv"> &nbsp;&nbsp; &nbsp;i<—Buffer.suiv</p>
          <p> &nbsp;&nbsp;FTQ</p>
          <p id="fermer"> &nbsp;&nbsp;Fermer(F)</p>
          <p id="fin">FIN</p>
          `;
        document.getElementById("code").style.width='420px';
        document.getElementById("code").innerHTML=algo_recherche;


        let nb_enreg =document.querySelector('#sub_nb_enreg').value;
        //Recherche : Fichier ordonné
        let rech =   chercherFichierordonne_algo(fichier_ord,valeur,nb_enreg,vitesse);
        if(rech.trouv){ setTimeout(function(){     $('#instruction').children('p').text("L'element existe dans le Bloc : "+rech.i+" L'enreg : "+(rech.j+1)); },nbr_animation*500*vitesse); nbr_animation++;  }
          else {   setTimeout(function(){  $('#instruction').children('p').text("L'element n'existe pas");   },nbr_animation*500*vitesse); nbr_animation++;   }  



      }

      setTimeout(function(){ 
        document.getElementById("menu-hide").addEventListener('click',fermer_menu);},nbr_animation*500*vitesse); nbr_animation+=10;

      setTimeout(function(){ 
        cout(nb_lecture,nb_ecriture);
        $('#instruction').children('p').text("Fin de la Recherche");   //Fin de l'opération
        fermer_code(); fermer_comm(); 
        nbr_animation=0;
      },nbr_animation*500*vitesse); nbr_animation++;
      
    
      });
        //Evénement de l'opération Suppression
      document.getElementById('submit_del').addEventListener('click',function(){
        fermer_cout();
        fermer_menu();
        document.getElementById("menu-hide").removeEventListener('click',fermer_menu);
        let vitesse = (( 200 - Number(slider.value))   / 100);
        let valeur =parseInt(document.querySelector('#sub_del').value);
        document.getElementById("instruction").style.width='420px';
        $('#instruction').children('p').text("Supression de la valeur : "+valeur);
        document.querySelector('#delete-action').style.display='none';
        
        document.getElementById("instruction").style.width='420px';
        
        
        let nb_enreg =document.querySelector('#sub_nb_enreg').value;
        if(!ord){
          //l'algorithme de suppression dans fichier non ordonné
          const algo_supression= `
          <p> Suppression_Fichier(nomFich,cle) </p>
          <p>DEBUT</p>
          <p id="ouvrir"> Ouvrir(F,nomFich,'A') </p> 
          <p id="affect" > Buffer,Buffer_dernier &lt;—Entete(F,1) </p>
          <p id="rech">Recherche_Fichier(F,cle,Var Trouv,Var i,Var j) </p>
          <p id="trouv" > Si Trouv </p>
          <p id="buff" >&nbsp;&nbsp;Buffer=Lecture_Bloc(i) // Iéme Bloc</p>
          <p id="dernier" >&nbsp;&nbsp;Buffer_dernier= Lecture_Bloc(nb_bloc) //Dernier Bloc</p>
          <p id="replace" >&nbsp;&nbsp;Remplacer_Cle(Buffer,Buffer_dernier,j)</p>
          <p  id="moin" >&nbsp;&nbsp;Buffer_dernier.nb &lt;— Buffer_dernier.nb-1 </p> 
          <p id="supp_bloc" >&nbsp;&nbsp;Si Buffer_dernier.nb = 1  </p>
          <p id="supp_bloc1" >&nbsp;&nbsp;&nbsp;&nbsp;fichier.nb_bloc -- ; </p>
          <p>&nbsp;&nbsp;MAJ_ENTETE(F,i,j)</p>
          <p>Fsi</p>
          <p id="ntrouv" >Sinon (Non Trouv) Ecrire('la valeur n'existe pas')</p>
          <p>Fermer(F)</p>
          <p>FIN</p>
          `;
        document.getElementById("code").style.width='420px';
        document.getElementById("code").innerHTML=algo_supression;

          //Suppression : Fichier non ordonné
          supprimerFichier(fichier,valeur,nb_enreg,vitesse);}

        
        else{
          //l'algorithme de suppression dans fichier ordonné
          const algo_supression= `
          <p> Suppression_Fichier(nomFich,cle) </p>
          <p>DEBUT</p>
          <p id="ouvrir"> Ouvrir(F,nomFich,'N') </p> 
          <p> Buffer &lt;—Entete(F,1) </p>
          <p id="rech">Recherche_Fichier(F,cle,Var Trouv,Var i,Var j) </p>
          <p id="trouv" >&nbsp; Si (Trouv) </p>
          <p>&nbsp;&nbsp;LirDir(F,i,Buffer)</p>  
          <p id="si" > &nbsp;&nbsp;Si Buffer.nb = 1 </p>
          <p id="si1" > &nbsp;&nbsp;&nbsp;&nbsp;Preced_buffer.suiv &lt;— Buffer.suiv </p>
          <p id="sinon" >&nbsp;&nbsp;Sinon</p>
          <p id="sinon1" > &nbsp;&nbsp;&nbsp;&nbsp;Decalage_Dans_Buffer(Buffer,j); EcrireDir(F,i,Buffer); </p>
          <p id="maj" >&nbsp;&nbsp;MAJ_ENTETE(F,i,j)</p>
          <p>Fsi</p>
          <p id="ntrouv" >&nbsp;Sinon (Non Trouv) Ecrire('la valeur existe') </p>
          <p id="fermer" >Fermer(F)</p>
          <p id="fin" >FIN</p>
          `;
          document.getElementById("code").style.width='420px';
          document.getElementById("code").innerHTML=algo_supression;
          //Suppression : Fichier ordonné
          supressionPhysiqueFichierordonne(fichier_ord,valeur,nb_enreg,vitesse);
        
        
        }//fin supp_ord
        
        setTimeout(function(){ 
          cout(nb_lecture,nb_ecriture);
          document.getElementById("menu-hide").addEventListener('click',fermer_menu);
          $('#instruction').children('p').text("Fin de la  Supression");   ////Fin de l'opération
          fermer_code(); fermer_comm(); 
          nbr_animation=0;},nbr_animation*500*vitesse);nbr_animation++;
        });

            //Evénement de l'opération Requette
        document.getElementById('submit_requette').addEventListener('click',function(){
          fermer_cout();
          fermer_menu();
          document.getElementById("menu-hide").removeEventListener('click',fermer_menu);
        
          document.getElementById("instruction").style.width='420px';
          $('#instruction').children('p').text("Requêtte dans le fichier");
          document.querySelector('#requette-action').style.display='none';
          let vitesse = (( 200 - Number(slider.value))   / 100);
          let min = parseInt(document.getElementById("sub_min").value);
          let max = parseInt(document.getElementById("sub_max").value);
          let nb_enreg = parseInt(document.getElementById("sub_nb_enreg").value);
          
          //l'algorithme de requette dans fichier ordonné
          const algo_requette= `
            <p> Requêtte_Fichier(nomFich,min,max) </p>
            <p id="debut" >DEBUT</p>
            <p id="ouvrir"> Ouvrir(F,nomFich,'N') </p> 
            <p  id="affect"  > Buffer &lt;—Entete(F,1) </p>
            <p id="rech" >Recherche_Fichier(F,min,Var Trouv,Var i,Var j) </p>
            <p id="tq" >TQ (i <> -1)et(Non Stop)</p>
            <p id="lire" >&nbsp;&nbsp;LirDir(F,i,Buffer)</p>
            <p id="ecrire"  >&nbsp;&nbsp;Ecrire(Buffer.Tab[j].cle)</p>
            <p id="si" >&nbsp;&nbsp;Si (j>Buffer.NB) { j&lt;—0; i&lt;—Buffer.suiv; }</p>
            <p id="stop" >&nbsp;&nbsp;Si (Buffer.Tab[j].cle>max) { Stop&lt;—Vrai }</p>
            <p id="avance" >&nbsp;&nbsp;j&lt;—j+1</p>
            <p id="ftq" >FTQ</p>
            <p id="fermer" >Fermer(F)</p>
            <p id="fin" >FIN</p>
            `;

          document.getElementById("code").style.width='420px';
          document.getElementById("code").innerHTML=algo_requette;
          requette(fichier_ord,nb_enreg,min,max,vitesse);  //Appeler la méthode Requette

          setTimeout(function(){ 
            cout(nb_lecture,nb_ecriture); //Afficher le cout de l'opération
            document.getElementById("menu-hide").addEventListener('click',fermer_menu);
            $('#instruction').children('p').text("Fin de la requêtte");   ////Fin de l'opération
            fermer_code(); fermer_comm(); 
            nbr_animation=0;},nbr_animation*500*vitesse);nbr_animation++;
            

    
          });
          
          //Ouverture de l'aide en ligne par defaut
          aide_hide();




};
//fin setup



//Class Enreg représente l'enregistrement , on peut ajouter d'autres champs 

class Enreg {
  constructor (cle,x,y){
    this.cle=cle||-1;
    this.x=x||-1;
    this.y=y||-1;
    this.supp=false;
  }
}  


//CLASS NODE  représente le Bloc du fichier
class Node {
  constructor (enregs){
    this.enregs=  enregs ;
    this.next=null;
  }

}
//Fin CLASS NODE

//CLASS LISTE représente le fichier comme une liste linéaire chaînée de blocs (Node)
class LinkedList{
  constructor(){
    this.head=null;
    this.size=0;
   }
 
  Insert_bloc(enregs){// Inserer un bloc dans le fichier   (enregs est un tableau de type Enreg)
    var node = new Node(enregs);
    var current;
    if(this.head==null){this.head=node;}
    else{ 
       current=this.head;
       while(current.next!=null){current=current.next;}
       current.next=node;
       }
   this.size++;
             }

  isEmpty() {return this.size == 0;} 
  size_of_list() {console.log(this.size);} 
  printList() {     
    let nb_enreg =document.querySelector('#sub_nb_enreg').value;
    var curr = this.head; 
    var str = ""; 
    while (curr!=null) { 
      str += "[";
      for(let temp=0;temp<curr.enregs.length;temp++){  if(!curr.enregs[temp].supp) {str+=curr.enregs[temp].cle+",";}}
        str += "]" + "-->"; 
        curr = curr.next; 
    } 
    console.log(str); 
}
  
  // Inserer  un bloc à la position 'index' 
insertAt(element, index) 
{ 
    if ((index > 0) && (index > this.size)) 
        return false; 
    else { 
        // création d'un element Node
        var node = new Node(element); 
        var curr, prev; 
  
        curr = this.head; 
  
        // ajouter à la position zéro
        if (index == 0) { 
            node.next = head; 
            this.head = node; 
        } else { 
            curr = this.head; 
            var it = 0; 
  
            
            while (it < index) { 
                it++; 
                prev = curr; 
                curr = curr.next; 
            } 
  
            // ajouter l'element
            node.next = curr; 
            prev.next = node; 
        } 
        this.size++; 
    } 
} 


removeFrom(index) 
{ 
    if (index > 0 && index > this.size) 
        return -1; 
    else { 
        var curr, prev, it = 0; 
        curr = this.head; 
        prev = curr; 
  
        // supprimer premier element 
        if (index == 0) { 
            this.head = curr.next; 
        } else { 
            // itérer dans la liste  
             
            while (it < index) { 
                it++; 
                prev = curr; 
                curr = curr.next; 
            } 
  
            // remove the element 
            prev.next = curr.next; 
        } 
        this.size--; 
  
        // return the remove element 
        return curr.element; 
    } 
} 
 
 
 
 }
//FIN CLASS LISTE

//CLASS FICHIER_LISTE
class fichier_liste{
  constructor(){  
    this.liste = new LinkedList();
    this.size=0;
    this.nb_bloc=0;
  }
}
//FIN CLASS FICHIER_LISTE


//Variables utilisées pour identifier les elements dans la page ( ces elements sont les conteneur des elements graphiques )

let blocs =document.querySelector('#blocs');//contient les bloc (rect)
let enregs =document.querySelector('#enregs');//contient les enregistement (rect)
let nexts =document.querySelector('#nexts');//contient les champs suiv
let nb_blocs =document.querySelector('#nb_blocs');//contient les champs NB
let txts =document.querySelector('#txts');//contient les elements "text"
let svg_buff =document.querySelector('#svg_buff');//buffer
let svg_buff_text =document.querySelector('#svg_buff_text'); //text du buffer
let svg_buff_bloc =document.querySelector('#svg_buff_bloc');//bloc du buffer
let ordonne=document.querySelector('#ordonne');//structure de fichier ordonné



/****************************************************************************************************/
/***********************  Les Opérations sur les structures de fichier  *****************************/





/******************* Remarque ******************/
/*

Dans le cas d'un fichier LOF , chaque bloc contient un tableau d'enregistrements , un entier
indiquant le nombre d'enregistrements dans le tableau et un entier pour garder la trace du
bloc suivant dans la liste :
La recherche est séquentielle, l'insertion provoque des décalages intra-blocs et la
suppression est physique ou logique .

      inta-blocs  : à l'intérieure du bloc
      inter-blocs : entre les blocs (coûteuse)

*/










/*************************** Fonction Afficher l'entete du fichier non ordonné ***************/
function afficher_entete(fichier,nb_enreg){
  if (fichier.nb_bloc==0){alert("Le fichier est vide !\nCommencez par la création");}
  else{
  let nb_bloc=fichier.nb_bloc;  //nombre de bloc du fichier
  let pos=0;    //dernière position libre dans le dernier bloc
  let buffer=fichier.liste.head;
  while(buffer.next!=null){buffer=buffer.next;}
  pos=buffer.enregs.length; if(pos<nb_enreg){pos++}else{pos=-1;}
  alert("Entete(F,1)= 1  //num du premier bloc \nEntete(F,2)= "+(nb_bloc)+" //num du dernier bloc\nEntete(F,3)= "+(pos)+" //première position libre dans le dernier bloc");
  }
}
/************************************ Fin Afficher l'entete ***********************************/
/************************* Fonction Afficher l'entete du fichier ordonné **********************/
function afficher_entete_ord(fichier_ord,nb_enreg){
  if (fichier_ord.nb_bloc==0){alert("Le fichier est vide !\nCommencez par la création");}
  else{
  let nb_bloc=fichier_ord.nb_bloc;  //nombre de bloc du fichier
  let pos=0;        //dernière position libre dans le dernier bloc
  let buffer=fichier_ord.liste.head;
  let nb_elem=0;    //nombre d'enregistrements dans le fichier
  while(buffer.next!=null){ nb_elem+=buffer.enregs.length; buffer=buffer.next; }
  nb_elem+=buffer.enregs.length;    
  let facteur =  parseInt((nb_elem/(fichier_ord.nb_bloc*nb_enreg))*100);    //taux de cgargement du fichier
  
  pos=buffer.enregs.length; if(pos<nb_enreg){pos++}else{pos=-1;}
  alert("Entete(F,1)= 1  //num du premier bloc \nEntete(F,2)= "+(nb_bloc)+" //num du dernier bloc\nEntete(F,3)= "+(pos)+" //première position libre dans le dernier bloc\nEntete(F,4)= "+(facteur)+" % //facteur de chargement du fichier");  
  }
}
/********************************* Fin Afficher l'entete *******************************/

const begin = {x:70,y:250}; //les coordonnées du point début (début du dessin du fichier graphiquement)

/*******************************   Fonction DessinerBuffer   ******************************/
function dessinerBuffer(nb_enreg){
  svg_buff.innerHTML+= ` <rect id="svg_buff_bloc"   x="`+begin_x_buff+`" y="`+begin_y_buff+`" height="`+(nb_enreg*30+50)+`" width="105"  fill="none" stroke="black" ></rect>`;
  svg_buff.innerHTML+=`<rect id="svg_buff_nb_bloc"   x="`+(begin_x_buff+80)+`" y="`+begin_y_buff+`" height="25" width="25"  fill="none" stroke="black" ></rect>`;
  svg_buff.innerHTML+=` <rect id="svg_buff_next"   x="`+(begin_x_buff+80)+`" y="`+((nb_enreg*30)+25+begin_y_buff)+`" height="25" width="25"  fill="none" stroke="black" ></rect>`;
  for (let j=0;j<nb_enreg;j++){ 
     let x_enreg=begin_x_buff+10; let y_enreg=begin_y_buff+25+30*j;
      svg_buff.innerHTML+=` <rect id="svg_buff_e_`+(j+1)+`"    x="`+x_enreg+`" y="`+y_enreg+`" height="30" width="60"  fill="none" stroke="black" ></rect>`;
  }
}
/**************************************    Fin DessinerBuffer    ******************************/


/************************** Opération de Création pour un fichier non-ordonné ***************************/ 
//Créer un fichier de "nb_bloc" blocs et chaque bloc contient "nb_enreg" enregistrements 
function creerFichier(fichier,nb_bloc,nb_enreg){
  
  let i=0; let j=0;
  
  for (i=0;i<nb_bloc;i++){ 
  
    let tab_enregs=[];
    let x_bloc=begin_x+200*i; let y_bloc=begin_y;
      /* Création des elements graphiques (rect,txt) */
      blocs.innerHTML+= ` <rect id="bloc_`+(i+1)+`"   x="`+x_bloc+`" y="`+y_bloc+`" height="`+(nb_enreg*30+50)+`" width="105"  fill="none" stroke="black" ></rect>`;
      nb_blocs.innerHTML+=`<rect id="nb_bloc_`+(i+1)+`"   x="`+(x_bloc+80)+`" y="`+y_bloc+`" height="25" width="25"  fill="none" stroke="black" ></rect>`;
      nexts.innerHTML+=` <rect id="next_`+(i+1)+`"   x="`+(x_bloc+80)+`" y="`+(y_bloc+25+nb_enreg*30)+`" height="25" width="25"  fill="none" stroke="black" ></rect>`;
      txts.innerHTML+=` <text id="t_nb_bloc_`+(i+1)+`"    x="`+(x_bloc+92)+`" y="`+(y_bloc+17)+`" height="25" width="25"  fill="blue"  >`+nb_enreg+`</text>`;
    
    let n_x=x_bloc+105-10; let n_y=y_bloc+50+nb_enreg*30;     //Attribut x,y pour le chainage entre les blocs (path)
      /* Création du chainage entre les blocs (path) */
     if(i<nb_bloc-1){ nexts.innerHTML+=   `<path  id="tnext_`+(i+1)+`" d="M`+n_x+`,`+n_y+`L`+n_x+`,`+(n_y+30)+`L`+(n_x+110)+`,`+(n_y+30)+`L`+(n_x+110)+`,`+(n_y)+`" fill="none" stroke="black" stroke-width="3px" ></path> `  ;}
    for (j=0;j<nb_enreg;j++){  
     let x_enreg=x_bloc+10; let y_enreg=y_bloc+25+30*j;     //attribut x,y qui definient l'emplacement de l'enregistrement dans la page
     let cle = Math.floor(Math.random() * 1000)+1;         //générer une valeur aléatoire pour la clé 
     let e = new Enreg(cle,x_enreg,y_enreg);              //instancier un enregistrement
     let x_text=x_enreg+30 ; let y_text=y_enreg+20;      //attribut x,y pour le text qui contient la clé
       /* Création des elements graphiques (rect,txt) */
       enregs.innerHTML+=` <rect id="b_`+(i+1)+`_e_`+(j+1)+`"    x="`+x_enreg+`" y="`+y_enreg+`" height="30" width="60"  fill="none" stroke="black" ></rect>`;
       txts.innerHTML+= ` <text id="tb_`+(i+1)+`_e_`+(j+1)+`"   x="`+x_text+`" y="`+y_text+`" fill="black"  >`+cle+`</text>`;
       
       
       let enreg = new Enreg(cle,x_enreg,y_enreg);
       tab_enregs.push(enreg);      //Ajouter l'enregistrement crée à la table d'enregistrement
       
  
    }
   
    fichier.liste.Insert_bloc(tab_enregs);      //Ecrire le bloc dans le fichier
    fichier.nb_bloc++;    //Incrémenter le nombre de blocs
  
  }
  
    nb_lecture=0; nb_ecriture=nb_bloc;      //Cout de l'opération (Lecture\Ecriture)
  
  }








/***************** Opération de Recherche pour un fichier non-ordonné *************/
//Recherche séquentielle dans le fichier bloc par bloc , enregistrement par enregistrement
function rechercheFichier(fichier,cle,vitesse){
  if (fichier.nb_bloc==0){alert("Le fichier est vide !\nCommencez par la création"); return {i: -1,j: -1,trouv: false }; }      //fichier vide
  else{
  if(fichier.nb_bloc>0){

  let yellow=[];let green=[]; let red=[]; let blocs=[];   //yellow contient les ID des elements parcourus   //green contient l'ID de l'enregistrement contenant la clé recherchée et les autre ID sont dans red 
  let buff =fichier.liste.head;     //initialiser le buffer à la tete du fichier
  let i=1; let j=0; let trouv=false; 
  
  while ((i<=fichier.nb_bloc)&&(!trouv)){     //tant que on n'a pas trouvé la clé et on n'a pas atteint la fin du fichier 
    blocs.push('bloc_'+i); 
    j=0;
    while((j<buff.enregs.length)&&(!trouv)){
      let id_e= 'b_' +i+ '_e_' + (j+1) ;      //ID de l'enregistrement
      yellow.push(id_e);
      if (buff.enregs[j].cle == cle){     //clé trouvée
        trouv=true;
         green.push(id_e);     
      }
      else{ red.push(id_e);} 
      
    j++;
    }
   buff=buff.next; nb_lecture++;      //Lecture du prochain bloc avec incrémentation du nombre de Lectures
   i++;
  }  

      return {i: i-1,j: j-1,trouv: trouv,yellow: yellow,green:green,red:red,blocs:blocs};
  
}else{alert("fichier vide !!!");  return {i: -1,j: -1,trouv: false,yellow: yellow,green:green,red:red,blocs:blocs}; /* fichier vide*/}
}
}
/***************** Fin Opération de Recherche pour un fichier non-ordonné *************/




/*************** Lecture du i éme bloc dans buffer (réel + graphique)  ***************/
function LireDir(fichier,i){
  
  let buffer=fichier.liste.head;
  for (let temp=1;temp<i;temp++){
    buffer=buffer.next;
    
  }
  setTimeout(function(){ 
    dessinerBlocDansBuffer(buffer);
    document.getElementById('svg_buff_bloc').setAttribute("stroke","yellow");
    document.getElementById('bloc_' + i).setAttribute("stroke","yellow");
  },nbr_animation*500*vitesse);
  nbr_animation++;
  setTimeout(function(){ 
    document.getElementById('svg_buff_bloc').setAttribute("stroke","black");
    document.getElementById('bloc_' + i).setAttribute("stroke","black");
  },nbr_animation*500*vitesse);
  nbr_animation++;

return buffer;
}
/************************ Fin LireDir   **************************/


/*********************  dessinerBlocDansBuffer  **************************/
function dessinerBlocDansBuffer(buffer){
  svg_buff_text.innerHTML='';
  let nbr_enreg = buffer.enregs.length;
  for(let temp=0;temp<nbr_enreg;temp++){
    let val =Number(buffer.enregs[temp].cle); 
    svg_buff_text.innerHTML+=`<text id="svg_buff_t_`+(temp+1)+`" x="`+(begin_x_buff+40)+`" y="`+(begin_y_buff+45+30*temp)+`" >`+(val)+`</text>`;  
  }
  
}
/********************************************************************/

/*************  Ecrire dans le i éme bloc (réel + graphique)    *********************/
function EcrireDir(fichier,i,buffer){
  for (let z=0;z<buffer.enregs.length;z++){
    let x_bloc=begin_x+200*fichier.size; let y_bloc=begin_y;          //Attribut x,y pour le bloc 
    let x_enreg=buffer.enregs[z].x; let y_enreg=buffer.enregs[z].y;  //Attribut x,y pour l'enregistrement 
    let cle=buffer.enregs[z].cle;                                   //Attribut x,y pour la lcé 
    let x_text=x_enreg+30 ; let y_text=y_enreg+20;                 //Attribut x,y pour le text 
    let id = 'tb_'+i+'_e_'+(z+1);
    document.getElementById(id).textContent=cle;
  }
  fichier.liste.insertAt(buffer.enregs,i);
}
/*******************  Fin EcrireDir  *******************************/






/*************** Opération d'Insertion pour un fichier non-ordonné ***********/
  
function insererFichier (fichier,cle,nb_enreg,vitesse){
  if (fichier.nb_bloc==0){alert("Le fichier est vide !\nCommencez par la création");}     //fichier vide
  else{
    animer_ligne('ouvrir',vitesse);//Animation Algorithme  animer_ligne : nous permet d'animer une ligne de l'algorithme 
    animer_ligne('recherche',vitesse);
    const rech=rechercheFichier(fichier,cle);     //recherche de la valeur
    animer_ligne('ntrouv',vitesse);//Animation Algorithme

  if (!rech.trouv){     //On insére si la valeur n'existe pas dans le fichier
        let temp=[];
        let buff;
        //fichier n'est pas vide
        animer_ligne('dernier',vitesse);
        buff=fichier.liste.head; nb_lecture++;
        //Accéder au dernier Bloc du fichier
        for (let temp=1;temp<fichier.nb_bloc;temp++){
           buff=buff.next; 
        }
        nb_lecture++;
      
      if ((buff.enregs).length<nb_enreg){     //Il reste de la place dans le dernier bloc donc on insère dedans
        
                setTimeout(function(){ 
                $('#instruction').children('p').text("Insertion dans le dernier bloc");
                document.getElementById('place').className="highlight";  },nbr_animation*500*vitesse); nbr_animation++;
                setTimeout(function(){ document.getElementById('place').classList.remove("highlight");  },nbr_animation*500*vitesse); nbr_animation++;
                let x_bloc=begin_x+200*(fichier.nb_bloc-1); let y_bloc=begin_y;            //Attribut x,y pour le bloc 
                let x_enreg=x_bloc+10; let y_enreg=y_bloc+25+30*(buff.enregs.length);     //Attribut x,y pour l'enregistrement
                let x_text=x_enreg+30 ; let y_text=y_enreg+20;                           //Attribut x,y pour la clé 
                buff.enregs.push( new Enreg(cle,x_enreg,y_enreg) ); nb_ecriture++;      //Ecriture du bloc dans le dernier bloc            
                
                
                let id = "tb_"+(fichier.nb_bloc)+"_e_"+(buff.enregs.length) ;
                let  idd=  "#b_"+(fichier.nb_bloc)+"_e_"+(buff.enregs.length)  ;
                setTimeout(function(){ document.getElementById('place1').className="highlight";
                document.getElementById(id).style.transform='';
                document.getElementById(id).textContent=cle;
                document.getElementById(id).style.display='';      //Apparaitre la clé dans fichier
                document.querySelector(idd).setAttribute("fill","#00ff00");
                //Faire clignoter la clé en vert
                setTimeout(function(){ document.querySelector(idd).setAttribute("fill","none");},nbr_animation*500*vitesse); nbr_animation+=0.5;
                setTimeout(function(){ document.querySelector(idd).setAttribute("fill","#00ff00");},nbr_animation*500*vitesse); nbr_animation+=0.5;
                setTimeout(function(){ document.querySelector(idd).setAttribute("fill","none");},nbr_animation*500*vitesse); nbr_animation+=0.5;
              
                },nbr_animation*500*vitesse); nbr_animation++;
                //Animation algorithme
                setTimeout(function(){ document.getElementById('place1').classList.remove("highlight");  },nbr_animation*500*vitesse); nbr_animation++;
                setTimeout(function(){ document.getElementById('place2').className="highlight";  
                let nbnb = parseInt(document.getElementById('t_nb_bloc_'+(fichier.nb_bloc)).textContent) ;
                nbnb++;
                document.getElementById('t_nb_bloc_'+(fichier.nb_bloc)).textContent= nbnb;    //MAJ du champ NB (nombre d'enregistrement dans le bloc)
                document.getElementById('t_nb_bloc_'+(fichier.nb_bloc)).style.display='';
                document.getElementById('t_nb_bloc_'+(fichier.nb_bloc)).style.transform='';  
                },nbr_animation*500*vitesse); nbr_animation++;
                setTimeout(function(){ document.getElementById('place2').classList.remove("highlight");  },nbr_animation*500*vitesse); nbr_animation++;




      }

      else{     //Il ne reste  pas de place dans le dernier bloc donc on doit allouer un nouveau bloc
        setTimeout(function(){ 
          $('#instruction').children('p').text("Insertion dans un nouveau bloc");
          document.getElementById('alloc').className="highlight"; 
      
        
        AllocBloc(fichier,nb_enreg);      //Allouer un bloc
          },nbr_animation*500*vitesse); nbr_animation++;
        setTimeout(function(){ document.getElementById('alloc').classList.remove("highlight");  },nbr_animation*500*vitesse); nbr_animation++;
        let x_bloc=begin_x+200*(fichier.nb_bloc); let y_bloc=begin_y;   //Attribut x,y pour le bloc
        let x_enreg=x_bloc+10; let y_enreg=y_bloc+25 ;                 //Attribut x,y pour l'enregistrement
        let x_text=x_enreg+30 ; let y_text=y_enreg+20;                //Attribut x,y pour la clé
        temp.push(new Enreg(cle,x_enreg,y_enreg));                   //Ecrire l'enregistrement dans le nouveau bloc alloué
        fichier.liste.Insert_bloc(temp); nb_ecriture+=2;            //Ecrire le bloc alloué dans le fichier

        let id_e= 'tb_'+(fichier.nb_bloc+1)+'_e_1' ;
        let idd='#b_'+(fichier.nb_bloc+1)+'_e_1' ;
        setTimeout(function(){ document.getElementById('alloc1').className="highlight"; 
        //Apparaitre la clé inserée
        document.getElementById(id_e).style.transform='';
        document.getElementById(id_e).textContent=cle;
        document.getElementById(id_e).style.display='';
        
        //Faire clignoter la clé inserée en vert
        document.querySelector(idd).setAttribute("fill","#00ff00");
        setTimeout(function(){ document.querySelector(idd).setAttribute("fill","none");},nbr_animation*500*vitesse); nbr_animation+=0.5;
        setTimeout(function(){ document.querySelector(idd).setAttribute("fill","#00ff00");},nbr_animation*500*vitesse); nbr_animation+=0.5;
        setTimeout(function(){ document.querySelector(idd).setAttribute("fill","none");},nbr_animation*500*vitesse); nbr_animation+=0.5;
        let nbnb =  parseInt(document.getElementById('t_nb_bloc_'+(fichier.nb_bloc+1)).textContent) ;   
       nbnb++;
       document.getElementById('t_nb_bloc_'+(fichier.nb_bloc+1)).textContent=nbnb;      //MAj du champ NB (nombre d'enregistrement dans le bloc)
       fichier.nb_bloc++;    
       },nbr_animation*500*vitesse); nbr_animation++;
       setTimeout(function(){ document.getElementById('alloc1').classList.remove("highlight");  },nbr_animation*500*vitesse); nbr_animation++;
       }
    
  }     //La valeur existe déja dans le fichier
  else{alert("l'element que vous voulez inserer existe !");}
}
}
/***************** Fin Opération d'Insertion pour un fichier non-ordonné ***********/




/************** Opération de Suppression pour un fichier non-ordonné **************/
//(remplcement avec le dernier element du dernier bloc)
function supprimerFichier (fichier,cle,nb_enreg,vitesse){
  if (fichier.nb_bloc==0){alert("Le fichier est vide !\nCommencez par la création");}
  else {
  animer_ligne('ouvrir',vitesse);
  animer_ligne('affect',vitesse);
  animer_ligne('rech',vitesse);
  const rech=rechercheFichier(fichier,cle);     //Recherche de la valeur
  if(rech.trouv){     //Si la valeur existe 
    animer_ligne('trouv',vitesse);//Animation Algorithme
    animer_ligne('buff',vitesse);
    animer_ligne('dernier',vitesse);
    let i_elem=rech.i; let j_elem=rech.j; let buff= fichier.liste.head;
    //Récupérer le dernier element du dernier bloc (1)
    while(buff.next!=null){buff=buff.next;    } nb_lecture++;
    let i_der=fichier.nb_bloc; let j_der=buff.enregs.length-1; 
    let dernier=buff.enregs[buff.enregs.length-1];  
    
    //Récpérer l'element qu'on veut supprimer (2)
    let temp_buff= fichier.liste.head;
    for(let x=1;x<i_elem;x++){ temp_buff=temp_buff.next;  }
    //Effecter un remplacement entre  (1) et (2)
    temp_buff.enregs[j_elem].cle=dernier.cle;   nb_ecriture++;    //Augmentation du nombre d'ecriture
    let elem =  temp_buff.enregs[j_elem];
    let id_e= '#tb_'+i_elem+'_e_'+(j_elem+1);
    let id_d='#tb_'+i_der+'_e_'+(j_der+1);
    let id_dernier='tb_'+i_der+'_e_'+(j_der+1);

    
    setTimeout(function(){ document.getElementById('replace').className="highlight";},nbr_animation*500*vitesse); nbr_animation++;      //Animation algorithme
    //Faire clignoter l'élement en jaune  
    setTimeout(function(){ document.querySelector(id_e).setAttribute("fill","yellow");},nbr_animation*500*vitesse); nbr_animation+=0.5;
    setTimeout(function(){ document.querySelector(id_d).setAttribute("fill","yellow");},nbr_animation*500*vitesse); nbr_animation+=0.5;
    setTimeout(function(){ document.querySelector(id_e).setAttribute("fill","black");},nbr_animation*500*vitesse); nbr_animation+=0.5;
    setTimeout(function(){ document.querySelector(id_d).setAttribute("fill","black");},nbr_animation*500*vitesse); nbr_animation+=0.5;
    setTimeout(function(){ document.querySelector(id_e).setAttribute("fill","yellow");},nbr_animation*500*vitesse); nbr_animation+=0.5;
    setTimeout(function(){ document.querySelector(id_d).setAttribute("fill","yellow");},nbr_animation*500*vitesse); nbr_animation+=0.5;
    setTimeout(function(){ document.querySelector(id_e).setAttribute("fill","black");},nbr_animation*500*vitesse); nbr_animation+=0.5;
    setTimeout(function(){ document.querySelector(id_d).setAttribute("fill","black");},nbr_animation*500*vitesse); nbr_animation+=0.5;
    setTimeout(function(){ 
        
        $(id_e).fadeOut(0);
        document.querySelector(id_e).textContent=Number(dernier.cle);
        document.getElementById('t_nb_bloc_'+i_der).textContent=  document.getElementById('t_nb_bloc_'+i_der).textContent -1 ;
      
        //Effectuer une animation de remplacement : déplacer (1) jusqu'a arriver à (2) 
        anime({
          targets: id_d,
          translateX: elem.x - dernier.x ,     //Déplacement sur l'axe X
          translateY: elem.y - dernier.y,     //Déplacement sur l'axe Y
          duration: 1000
        });

        $(id_d).fadeOut(500);
        if(id_d==id_e){  document.querySelector(id_d).textContent='';  }
         $(id_e).fadeIn(0);
        document.querySelector(id_d).style.transform='';
        },nbr_animation*500*vitesse); nbr_animation++;    
            setTimeout(function(){ document.getElementById('replace').classList.remove("highlight");  },nbr_animation*500*vitesse); nbr_animation++;
            animer_ligne('moin',vitesse);
            animer_ligne('supp_bloc',vitesse);

    if(j_der==0){     //le dernier element du fichier est le denier dans le bloc : dans ce cas on doit supprimer le bloc
      
      setTimeout(function(){ document.getElementById('supp_bloc1').className="highlight"; 
      //on supprimer graphiquement bloc et le chainage
      document.getElementById('bloc_'+i_der).remove();
      document.getElementById('next_'+i_der).remove();
      if (i_der!=1){ document.getElementById('tnext_'+(i_der-1)).remove(); }
      //on supprimer graphiquement champ NB (nombre de bloc) et texte
      document.getElementById('t_nb_bloc_'+i_der).remove();
      document.getElementById('nb_bloc_'+i_der).remove();
      if(( elem.x - dernier.x==0 )&&( elem.y - dernier.y ==0 )){ document.querySelector(id_d).textContent=''; }
      for (let del=1;del<=nb_enreg;del++){
        document.getElementById('b_'+i_der+'_e_'+del).remove();
        if(del!=1){document.getElementById('tb_'+i_der+'_e_'+del).textContent='';}
      }
      
     },nbr_animation*500*vitesse); nbr_animation++;
            
      setTimeout(function(){ document.getElementById('supp_bloc1').classList.remove("highlight");  },nbr_animation*500*vitesse); nbr_animation++;   //animation algorithme
    }



    //supprimer le dernier 
    buff.enregs.pop(); 
    //on supprimer réelement le bloc du fichier
    if(j_der==0){  
      let b,c;
      b=fichier.liste.head;
      if(i_der!=1){
        while(b.next!=null){c=b;b=b.next;} c.next=null; fichier.nb_bloc--; fichier.liste.size--; nb_ecriture++;
      }
      else{ fichier= new fichier_liste(); }
    }
    if(fichier.nb_bloc==0){   setTimeout(function(){     alert("le fichier est maintenant vide\n Créez un nouveau") },nbr_animation*500*vitesse); nbr_animation++;  }
    
    
  }

else{     //l'element que l'on veut supprimer n'existe pas  
  alert("l'element que vous voulez supprimer n'existe pas !")}
}
}
/**************  Fin opération de Suppression pour un fichier non-ordonné **************/






//////////////  AllocBloc  ///////////////////
/******************** Créer un bloc graphiquement dans le fichier avec les elements <text> ******************/
function AllocBloc(fichier,nb_enreg){
  i=fichier.nb_bloc;
  
  let x_bloc=begin_x+200*i; let y_bloc=begin_y;//Attribut x,y pour dessiner le bloc
//Ajouter le bloc à la page 
  blocs.innerHTML+= ` <rect id="bloc_`+(i+1)+`"   x="`+x_bloc+`" y="`+y_bloc+`" height="`+(nb_enreg*30+50)+`" width="105"  fill="none" stroke="black" ></rect>`;
  nb_blocs.innerHTML+=`<rect id="nb_bloc_`+(i+1)+`"   x="`+(x_bloc+80)+`" y="`+y_bloc+`" height="25" width="25"  fill="none" stroke="black" ></rect>`;
  nexts.innerHTML+=` <rect id="next_`+(i+1)+`"   x="`+(x_bloc+80)+`" y="`+(y_bloc+25+nb_enreg*30)+`" height="25" width="25"  fill="none" stroke="black" ></rect>`;
  txts.innerHTML+=` <text id="t_nb_bloc_`+(i+1)+`"    x="`+(x_bloc+92)+`" y="`+(y_bloc+17)+`" height="25" width="25"  fill="blue"  >0</text>`;
  let n_x=x_bloc+105-10-200;
  let n_y=y_bloc+50+nb_enreg*30;
  nexts.innerHTML+=   `<path  id="tnext_`+(i)+`" d="M`+n_x+`,`+n_y+`L`+n_x+`,`+(n_y+30)+`L`+(n_x+110)+`,`+(n_y+30)+`L`+(n_x+110)+`,`+(n_y)+`" fill="none" stroke="black" stroke-width="3px" ></path> `  ;
  for (let j=0;j<nb_enreg;j++){
      let x_enreg=x_bloc+10; let y_enreg=y_bloc+25+30*j;
      let x_text=x_enreg+30 ; let y_text=y_enreg+20;
      enregs.innerHTML+=` <rect id="b_`+(i+1)+`_e_`+(j+1)+`"    x="`+x_enreg+`" y="`+y_enreg+`" height="30" width="60"  fill="none" stroke="black" ></rect>`;
      txts.innerHTML+= ` <text id="tb_`+(i+1)+`_e_`+(j+1)+`"   x="`+x_text+`" y="`+y_text+`" fill="black"  ></text>`;   
  }
 

    svg_buff_text.innerHTML=''; // initialise le buffer graphique
    
 
}






/////////////////////////////////





/*************************** Opération de Création d'un bloc ***********************/
function creerBloc(fichier){
    const x=70+(fichier.size)*205; 
    const y=250;
      blocs.innerHTML+= ` <rect id="bloc_`+(fichier.size+1)+`"   x="`+x+`" y="`+y+`" height="170" width="105"  fill="none" stroke="black" ></rect>`;
      nb_blocs.innerHTML+=`<rect id="nb_bloc_`+(fichier.size+1)+`"   x="`+(x+80)+`" y="`+y+`" height="25" width="25"  fill="none" stroke="black" ></rect>`;
      nexts.innerHTML+=` <rect id="next_`+(fichier.size+1)+`"   x="`+(x+80)+`" y="`+(y+145)+`" height="25" width="25"  fill="none" stroke="black" ></rect>`;
      enregs.innerHTML+=` <rect id="b_`+(fichier.size+1)+`_e_1"    x="`+(x+10)+`" y="`+(y+25)+`" height="30" width="60"  fill="none" stroke="black" ></rect>
      <rect id="b_`+(fichier.size+1)+`_e_2"    x="`+(x+10)+`" y="`+(y+55)+`" height="30" width="60"  fill="none" stroke="black" ></rect>
      <rect id="b_`+(fichier.size+1)+`_e_3"    x="`+(x+10)+`" y="`+(y+85)+`" height="30" width="60"  fill="none" stroke="black" ></rect>
      <rect id="b_`+(fichier.size+1)+`_e_4"    x="`+(x+10)+`" y="`+(y+115)+`" height="30" width="60"  fill="none" stroke="black" ></rect>
    `;
}
/************************************ Fin Opération de Création d'un bloc ********************************/   






/************************** Opération de Création pour un fichier ordonnée ***************************/ 
//Créer un fichier de "nb_bloc" blocs et chaque bloc contient "nb_enreg" enregistrements et qui est chargé à "taux" %
function creerFichierordonne(fichier_ord,nb_bloc,nb_enreg,taux){
  
  let i=0; let j=0; let preced=0;   //on doit tenir compte de la clé précédente pour générer une clé (fichier ordonnée)
  
  for (i=0;i<nb_bloc;i++){ 
      
    ordonne.innerHTML+=`<g id="bloc`+(i+1)+`" >   </g>`;
    let figure_bloc =document.getElementById("bloc"+(i+1));
    
    
  
    let tab_enregs=[];
    let x_bloc=begin_x+150*i; let y_bloc=begin_y; //Attributs x,y pour le bloc
    //Création graphique (rect,text)
    figure_bloc.innerHTML+= ` <rect id="b"   x="`+x_bloc+`" y="`+y_bloc+`" height="`+(nb_enreg*30+50)+`" width="105"  fill="none" stroke="black" ></rect>`;
    figure_bloc.innerHTML+=`<rect id="nb"   x="`+(x_bloc+80)+`" y="`+y_bloc+`" height="25" width="25"  fill="none" stroke="black" ></rect>`;
    figure_bloc.innerHTML+=` <rect id="n"   x="`+(x_bloc+80)+`" y="`+(y_bloc+25+nb_enreg*30)+`" height="25" width="25"  fill="none" stroke="black" ></rect>`;
    figure_bloc.innerHTML+=` <text id="tnb"    x="`+(x_bloc+92)+`" y="`+(y_bloc+17)+`" height="25" width="25"  fill="blue"  >`+(parseInt(nb_enreg*taux))+`</text>`;
    let n_x=x_bloc+105-10;
    let n_y=y_bloc+50+nb_enreg*30;
    //Création du chainage (path)
     if(i<nb_bloc-1){figure_bloc.innerHTML+=   `<path  id="tn" d="M`+n_x+`,`+n_y+`L`+n_x+`,`+(n_y+30)+`L`+(n_x+60)+`,`+(n_y+30)+`L`+(n_x+60)+`,`+(n_y)+`" fill="none" stroke="black" stroke-width="3px" ></path> `  ;}
   
    for (j=0;j<nb_enreg;j++){
  
      
     
     let x_enreg=x_bloc+10; let y_enreg=y_bloc+25+30*j;     //Attributs x,y pour l'enregistrement
     let x_text=x_enreg+30 ; let y_text=y_enreg+20;     //Attributs x,y pour le texte
     
   
  
  
     figure_bloc.innerHTML+=` <rect id="e`+(j+1)+`"    x="`+x_enreg+`" y="`+y_enreg+`" height="30" width="60"  fill="none" stroke="black" ></rect>`;
      if( j < parseInt(nb_enreg*taux)) {
       //Générer une clé supérieur à la précédente car le fichier est ordonné
       let cle = Math.floor(Math.random() * 1000)+1;      
      if(cle<= preced){ cle = preced + Math.floor(Math.random() * 200)+1; }
        preced=cle;
        let enreg = new Enreg(cle,x_enreg,y_enreg);     //Instancier l'enregsitrement
        tab_enregs.push(enreg);     //Ajouter l'enregistement à la table 
        //Ecrire la clé graphiquement
        figure_bloc.innerHTML+= ` <text id="te`+(j+1)+`"   x="`+x_text+`" y="`+y_text+`" fill="black"  >`+cle+`</text>`;


      }
      else{ //on a atteint le facteur de chargement du fichier
            figure_bloc.innerHTML+= ` <text id="te`+(j+1)+`"   x="`+x_text+`" y="`+y_text+`" fill="black"  ></text>`; 
           } 
       
       
       
  
    }
   
   fichier_ord.liste.Insert_bloc(tab_enregs);   //Insérer le bloc dans le fichier 
   fichier_ord.nb_bloc++;     //Augmenter le nombre de bloc
  
  
  
  }
  nb_lecture=0; nb_ecriture=nb_bloc;
}
/*********************************** Fin Opération de Création  ***********************************/ 





 /*************** Couleur choisies pour animer la recherche dichotomique  ***************/

                      //borne inf #0095FF bleu clair
                     //borne sup #04006B  bleu fonce
                    //le milieu #FFE600  jaune

/**************************************************************************************/



/*********************  (#1)  Opération de Recherche dichotomique pour un fichier ordonnée avec animations dans l'algorithme  ****************/
function chercherFichierordonne_algo(fichier_ord,cle,nb_enreg,vitesse){
  if (fichier_ord.nb_bloc==0){alert("Le fichier est vide !\nCommencez par la création");}
  else{
      animer_ligne('rech',vitesse);
      animer_ligne('debut',vitesse);
      animer_ligne('ouvrir',vitesse);
      animer_ligne('affec',vitesse);

      let j=-1; let i=1;
      let buffer=fichier_ord.liste.head; let stop=false; let trouv=false; 
      while((!trouv)&&(buffer!=null)&&(!stop)){
                animer_ligne('tq',vitesse);

              let id_b='bloc'+i;
              //Allumer le bloc
                setTimeout(function(){ 
                document.querySelector('#'+id_b).querySelector('#b').setAttribute("stroke","yellow");
                document.getElementById('lirdir').className="highlight";
                },nbr_animation*500*vitesse); nbr_animation++;
                setTimeout(function(){ document.getElementById('lirdir').classList.remove("highlight");  },nbr_animation*500*vitesse); nbr_animation++;
                animer_ligne('if1',vitesse);
                if(cle<buffer.enregs[0].cle){stop=true; animer_ligne('stop1',vitesse);} //la clé est inferieur à la premiére clé du fichier
                else if( (cle>=buffer.enregs[0].cle)&&(cle<=buffer.enregs[buffer.enregs.length-1].cle)  ){    //la clé doit etre dans le bloc et donc on procéde par une recherche dichotomique dans ce bloc
                animer_ligne('if',vitesse);
                stop=true;
                animer_ligne('stop',vitesse);

            //Recherche dichotomique dans le bloc
            setTimeout(function(){ document.getElementById('dicho').className="highlight";  },nbr_animation*500*vitesse); nbr_animation++;      
              let bi=0; let bs=buffer.enregs.length-1;
              let temp_buff=buffer;
              while(  (bi<=bs)&&(!trouv)  ){
                  let temp_bi=bi; let temp_bs=bs;
                //Allumer la borne inférieure (bi) et la borne supérieure (bs)
                setTimeout(function(){ 
                if(!temp_buff.enregs[temp_bi].supp){document.querySelector('#'+id_b).querySelector('#e'+(temp_bi+1)).setAttribute("fill","#0095FF");}
                if(!temp_buff.enregs[temp_bs].supp) {document.querySelector('#'+id_b).querySelector('#e'+(temp_bs+1)).setAttribute("fill","#04006B");}
                  },nbr_animation*500*vitesse); nbr_animation+=2;
                j=parseInt( (bi+bs)/2 );      //j représente le milieur entre la borne inférieure (bi) et la borne supérieure (bs)
                
                let temp_j=j;
                //Eteindre bi et bs
                setTimeout(function(){ 
                  if(!temp_buff.enregs[temp_bi].supp){ document.querySelector('#'+id_b).querySelector('#e'+(temp_bi+1)).setAttribute("fill","none");}
                  if(!temp_buff.enregs[temp_bs].supp) { document.querySelector('#'+id_b).querySelector('#e'+(temp_bs+1)).setAttribute("fill","none");}
                  },nbr_animation*500*vitesse); nbr_animation+=2;
                //Allumer le milieu
                setTimeout(function(){ 
                  if(!temp_buff.enregs[temp_j].supp){ document.querySelector('#'+id_b).querySelector('#e'+(temp_j+1)).setAttribute("fill","#FFE600");}
                  },nbr_animation*500*vitesse); nbr_animation+=2;
                  //Eteindre le milieu
                setTimeout(function(){ 
                  if(!temp_buff.enregs[temp_j].supp){ document.querySelector('#'+id_b).querySelector('#e'+(temp_j+1)).setAttribute("fill","none");}
                  },nbr_animation*500*vitesse); nbr_animation+=2;
                let c = buffer.enregs[ j ].cle;
                let supp=buffer.enregs[ j ].supp;
                if((c==cle)&&(!supp)){
                                        trouv=true;
                                        //Clignoter la clé dans le fichier 
                                        setTimeout(function(){ 
                                        document.querySelector('#'+id_b).querySelector('#e'+(j+1)).setAttribute("fill","#00ff00");
                                        },nbr_animation*500*vitesse); nbr_animation+=6;
                                        setTimeout(function(){ 
                                        document.querySelector('#'+id_b).querySelector('#e'+(j+1)).setAttribute("fill","none");
                                        },nbr_animation*500*vitesse); nbr_animation++
                                                
                                    }
                else{
                                        if(cle<c){bs= j-1  }
                                        else{  bi= j+1   }
                }
              }
              //Fin recherche dichotomique
              setTimeout(function(){ document.getElementById('dicho').classList.remove("highlight");  },nbr_animation*500*vitesse); nbr_animation++;
            
          }
        
        
        buffer=buffer.next; i++; nb_lecture++;      //Augmentation du nombre de lectures
        animer_ligne('suiv',vitesse);

        //Eteindre le bloc
        setTimeout(function(){ 
          document.querySelector('#'+id_b).querySelector('#b').setAttribute("stroke","black");
          },nbr_animation*500*vitesse); nbr_animation++;

  }
  i--;
  animer_ligne('fermer',vitesse);
  animer_ligne('fin',vitesse);


return {trouv:trouv,i:i,j:j};
}
} 
/*********************** Fin Opération de Recherche **************************************/






/***  Opération de Recherche  pour un fichier ordonnée sans animations dans l'algorithme  ***/
//aucune autre difference entre Recherche (#1)
function chercherFichierordonne(fichier_ord,cle,nb_enreg,vitesse){
  if (fichier_ord.nb_bloc==0){alert("Le fichier est vide !\nCommencez par la création");}
  else{

  let j=-1; let i=1;
  let buffer=fichier_ord.liste.head; let stop=false; let trouv=false;
  while((!trouv)&&(buffer!=null)&&(!stop)){
    let id_b='bloc'+i;
    //alumer le bloc
    setTimeout(function(){ 
      document.querySelector('#'+id_b).querySelector('#b').setAttribute("stroke","yellow");
      },nbr_animation*500*vitesse); nbr_animation++;
    

    if(cle<buffer.enregs[0].cle){stop=true;}
    else if( (cle>=buffer.enregs[0].cle)&&(cle<=buffer.enregs[buffer.enregs.length-1].cle)  ){
      stop=true;
      //recherche dico dans bloc
        let bi=0; let bs=buffer.enregs.length-1;
        let temp_buff=buffer;
        while(  (bi<=bs)&&(!trouv)  ){
            let temp_bi=bi; let temp_bs=bs;
          //alumer bi et bs
          setTimeout(function(){ 

           document.querySelector('#'+id_b).querySelector('#e'+(temp_bi+1)).setAttribute("fill","#0095FF");
           document.querySelector('#'+id_b).querySelector('#e'+(temp_bs+1)).setAttribute("fill","#04006B");
            },nbr_animation*500*vitesse); nbr_animation+=2;
           j=parseInt( (bi+bs)/2 );
           
           let temp_j=j;
          //eteindre bi et bs
          setTimeout(function(){ 
            document.querySelector('#'+id_b).querySelector('#e'+(temp_bi+1)).setAttribute("fill","none");
            document.querySelector('#'+id_b).querySelector('#e'+(temp_bs+1)).setAttribute("fill","none");
            },nbr_animation*500*vitesse); nbr_animation+=2;
          //allumer le milieu
          setTimeout(function(){ 
           document.querySelector('#'+id_b).querySelector('#e'+(temp_j+1)).setAttribute("fill","#FFE600");
            },nbr_animation*500*vitesse); nbr_animation+=2;
            //eteindre le milieu
          setTimeout(function(){ 
            document.querySelector('#'+id_b).querySelector('#e'+(temp_j+1)).setAttribute("fill","none");
            },nbr_animation*500*vitesse); nbr_animation+=2;
          let c = buffer.enregs[ j ].cle;
         
          let supp=buffer.enregs[ j ].supp;
          if((c==cle)&&(!supp)){
                                trouv=true;
                                setTimeout(function(){ 
                                  document.querySelector('#'+id_b).querySelector('#e'+(j+1)).setAttribute("fill","#00ff00");
                                  },nbr_animation*500*vitesse); nbr_animation+=6;
                                  setTimeout(function(){ 
                                    document.querySelector('#'+id_b).querySelector('#e'+(j+1)).setAttribute("fill","none");
                                    },nbr_animation*500*vitesse); nbr_animation++
                                          
                              }
          else{
            if(cle<c){bs= j-1  }
            else{  bi= j+1   }
          }
        }

      
    }
   
  
  buffer=buffer.next; i++; nb_lecture++;
  //eteindre le bloc
  setTimeout(function(){ 
    document.querySelector('#'+id_b).querySelector('#b').setAttribute("stroke","black");
    },nbr_animation*500*vitesse); nbr_animation++;

  }
  i--;



return {trouv:trouv,i:i,j:j};

}
} 
/*****************************  FIN  ***************************/

/*** Opération de Recherche  pour un fichier ordonnée sans aucune animations ***/
//aucune autre difference entre Recherche (#1)
function test(fichier_ord,cle,nb_enreg){
  if (fichier_ord.nb_bloc==0){alert("Le fichier est vide !\nCommencez par la création");}
  else{

  let j=-1; let i=1;
  let buffer=fichier_ord.liste.head; let stop=false; let trouv=false;
  while((!trouv)&&(buffer!=null)&&(!stop)){
    let id_b='bloc'+i;
    //alumer le bloc
    

    if(cle<buffer.enregs[0].cle){stop=true;}
   else if( (cle>=buffer.enregs[0].cle)&&(cle<=buffer.enregs[buffer.enregs.length-1].cle)  ){
      stop=true; 
      
        let bi=0; let bs=buffer.enregs.length-1;
        let temp_buff=buffer;
        while(  (bi<=bs)&&(!trouv)  ){
            let temp_bi=bi; let temp_bs=bs;
          
          
           j=parseInt( (bi+bs)/2 );
           
           let temp_j=j;

         
          let c = buffer.enregs[ j ].cle;
         
          let supp=buffer.enregs[ j ].supp;
          if((c==cle)&&(!supp)){
                                trouv=true;
                                
                                  
                                          
                              }
          else{
            if(cle<c){bs= j-1  }
            else{  bi= j+1   }
          }
        }

      
    }
   
  
  buffer=buffer.next; i++; nb_lecture++;
  }
  i--;

return {trouv:trouv,i:i,j:j};
}

} 
/*********************************  FIN ***************************/




/*** Fonction Insertion :Fichier ordonné ****/
//Consiste à inserer dans le bloc numéro "i" (retourné par la recherche) et si ce dernier est plein on fera un eclatement de bloc 
function insertionFichierordonne(fichier_ord,cle,nb_enreg,vitesse){
  if (fichier_ord.nb_bloc==0){alert("Le fichier est vide !\nCommencez par la création");}
  else{
    animer_ligne('ouvrir',vitesse);
    setTimeout(function(){ document.getElementById('recherche').className="highlight";  },nbr_animation*500*vitesse); nbr_animation++;
    let rech = chercherFichierordonne(fichier_ord,cle,nb_enreg,vitesse);
    setTimeout(function(){ document.getElementById('recherche').classList.remove("highlight");  },nbr_animation*500*vitesse); nbr_animation++;

  if(!rech.trouv){    //La clé n'existe pas dans le fichier
    animer_ligne('ntrouv',vitesse);

    if(rech.j != -1){
      let buffer=fichier_ord.liste.head; 
      for(let x=1;x<rech.i;x++){buffer=buffer.next; ;} nb_lecture++;
      
      animer_ligne('cap',vitesse);   
      if(buffer.enregs.length < nb_enreg){      //Insertion dans le bloc
        
        let place=0;while( buffer.enregs[place].cle < cle ){place++;}
        
        setTimeout(function(){ 
          $('#instruction').children('p').text("Insertion dans le bloc :"+rech.i+" l'enreg "+place);
          document.getElementById('insert_buff').className="highlight";  },nbr_animation*500*vitesse); nbr_animation++;
        setTimeout(function(){ document.getElementById('insert_buff').classList.remove("highlight");  },nbr_animation*500*vitesse); nbr_animation++;
        
        
        const x_place=buffer.enregs[place].x;
        const y_place=buffer.enregs[place].y;
        let temp_tab=[];
        const taille=buffer.enregs.length;
        for(let g=0;g<taille+1;g++){
          if(g==place){ temp_tab.push( new Enreg(cle,x_place,y_place) ); }
          else{  temp_tab.push( buffer.enregs.shift() ); }

        }
        
        buffer.enregs=temp_tab;
        
        setTimeout(function(){   ordonne.innerHTML='';  construire_fichier(fichier_ord,nb_enreg);},nbr_animation*500*vitesse); nbr_animation++;
        setTimeout(function(){ document.getElementById('insert_buff').classList.remove("highlight");  },nbr_animation*500*vitesse); nbr_animation++;
        nb_ecriture++;

      }

      else{     //Eclatement du bloc en deux blocs
        animer_ligne('ncap',vitesse);
        setTimeout(function(){ 
          $('#instruction').children('p').text("Eclatement du bloc :"+rech.i+"");
          document.getElementById('eclat').className="highlight";  },nbr_animation*500*vitesse); nbr_animation++;

        
        const middle= parseInt ((buffer.enregs.length +1)/2); //le milieu qui nous permet d'éclater le bloc en deux
        let place=0;while( buffer.enregs[place].cle < cle ){place++;}
        
        let tab1=[]; let tab2=[];
        buffer.enregs.splice(place,0,new Enreg(cle,-1,-1));
        for(let g=0;g<middle;g++){
          tab1.push( buffer.enregs[g] );
        }
        for(let g=middle;g<buffer.enregs.length;g++){
          tab2.push( buffer.enregs[g] );
        }
       
        buffer.enregs=tab1;
        let node= new Node(tab2);
        const next_buff = buffer.next;
        buffer.next=node;
        node.next=next_buff;
        fichier_ord.nb_bloc++;    //Augmentation du nombre de bloc aprés éclatement
       
        
        setTimeout(function(){   ordonne.innerHTML='';  construire_fichier(fichier_ord,nb_enreg); },nbr_animation*500*vitesse); nbr_animation++;     
        setTimeout(function(){ document.getElementById('eclat').classList.remove("highlight");  },nbr_animation*500*vitesse); nbr_animation++; 
        nb_ecriture+=2;
      }



    }
    else{//rech.j=-1
      let buffer=fichier_ord.liste.head
      let new_i=rech.i;
      let dernier=fichier_ord.liste.head;
      while(dernier.next!=null){dernier=dernier.next;}
      nb_lecture++;

      if  ( (rech.i==fichier_ord.nb_bloc)&&(cle > dernier.enregs[dernier.enregs.length-1].cle )) {  console.log("marche"); }
      else{new_i--; }
      if(new_i== 0){new_i=1;}
      
      
      for(let x=1;x<new_i;x++){buffer=buffer.next;}  
      animer_ligne('cap',vitesse);  

      if(buffer.enregs.length < nb_enreg){
        setTimeout(function(){ document.getElementById('insert_buff').className="highlight";  },nbr_animation*500*vitesse); nbr_animation++;

        //insertion dans buffer (il ya une place dans le bloc ) on insère avec decalage 
        
        let place=0;while( (buffer.enregs[place].cle < cle)&&(place<buffer.enregs.length-1 ) ){place++; }
        if(buffer.enregs[buffer.enregs.length-1].cle< cle ){place++;}
        
        const x_place=buffer.enregs[buffer.enregs.length-1].x;
        const y_place=buffer.enregs[buffer.enregs.length-1].y;
        let temp_tab=[];
        const taille=buffer.enregs.length;
        for(let g=0;g<taille+1;g++){
          if(g==place){ temp_tab.push( new Enreg(cle,x_place,y_place) ); }
          else{  temp_tab.push( buffer.enregs.shift() ); }

        }
        
        buffer.enregs=temp_tab;
       
        
        setTimeout(function(){ ordonne.innerHTML=''; construire_fichier(fichier_ord,nb_enreg);},nbr_animation*500*vitesse); nbr_animation++; 

        
      
        setTimeout(function(){ document.getElementById('insert_buff').classList.remove("highlight");  },nbr_animation*500*vitesse); nbr_animation++; 
          nb_ecriture++;

      }

      else{     //Eclatement du bloc en deux
        animer_ligne('ncap',vitesse);
        setTimeout(function(){ document.getElementById('eclat').className="highlight";  },nbr_animation*500*vitesse); nbr_animation++;

        const middle= parseInt ((buffer.enregs.length +1)/2);
        let place=0;  while( (buffer.enregs[place].cle < cle)&&(place<buffer.enregs.length-1 ) ){place++; }
        if(buffer.enregs[buffer.enregs.length-1].cle< cle ){place++;}
        
        let tab1=[]; let tab2=[];
        buffer.enregs.splice(place,0,new Enreg(cle,-1,-1));
        for(let g=0;g<middle;g++){
          tab1.push( buffer.enregs[g] );
        }
        for(let g=middle;g<buffer.enregs.length;g++){
          tab2.push( buffer.enregs[g] );
        }
        
        buffer.enregs=tab1;
        let node= new Node(tab2);
        const next_buff = buffer.next;
        buffer.next=node;
        node.next=next_buff;
        fichier_ord.nb_bloc++;//Augmentation du nombre de bloc
        
        
        setTimeout(function(){ ordonne.innerHTML='';  construire_fichier(fichier_ord,nb_enreg);},nbr_animation*500*vitesse); nbr_animation++;  

      
      //  //  //  //
        setTimeout(function(){ document.getElementById('ncap').classList.remove("highlight");  },nbr_animation*500*vitesse); nbr_animation++; 
          nb_ecriture+=2;
      }




    }
    
      
     const rr=test(fichier_ord,cle,nb_enreg);
     //Faire clignoter l'element inseré
     setTimeout(function(){ document.querySelector('#'+'bloc'+rr.i).querySelector('#e'+(rr.j+1)).setAttribute("fill","#00ff00");},nbr_animation*500*vitesse); nbr_animation++;
     setTimeout(function(){ document.querySelector('#'+'bloc'+rr.i).querySelector('#e'+(rr.j+1)).setAttribute("fill","none");},nbr_animation*500*vitesse); nbr_animation++;
     setTimeout(function(){ document.querySelector('#'+'bloc'+rr.i).querySelector('#e'+(rr.j+1)).setAttribute("fill","#00ff00");},nbr_animation*500*vitesse); nbr_animation++;
     setTimeout(function(){ document.querySelector('#'+'bloc'+rr.i).querySelector('#e'+(rr.j+1)).setAttribute("fill","none");},nbr_animation*500*vitesse); nbr_animation++;
     setTimeout(function(){ document.querySelector('#'+'bloc'+rr.i).querySelector('#e'+(rr.j+1)).setAttribute("fill","#00ff00");},nbr_animation*500*vitesse); nbr_animation++;
     setTimeout(function(){ document.querySelector('#'+'bloc'+rr.i).querySelector('#e'+(rr.j+1)).setAttribute("fill","none");},nbr_animation*500*vitesse); nbr_animation++;
     setTimeout(function(){ document.querySelector('#'+'bloc'+rr.i).querySelector('#e'+(rr.j+1)).setAttribute("fill","#00ff00");},nbr_animation*500*vitesse); nbr_animation++;
     setTimeout(function(){ document.querySelector('#'+'bloc'+rr.i).querySelector('#e'+(rr.j+1)).setAttribute("fill","none");},nbr_animation*500*vitesse); nbr_animation++;
  
  
  
  
  }
  else{ //La valeur existe déja

    animer_ligne('trouv',vitesse);
    animer_ligne('ecrire',vitesse);
    setTimeout(function(){ alert("la valeur que vous voulez inserer existe déja !"); },nbr_animation*500*vitesse); nbr_animation++;
  
  }

    animer_ligne('fermer',vitesse);
    animer_ligne('fin',vitesse);

  
}
 
}
/******************** Fin Insertion :Fichier ordonné **************************/




/************* Fonction Suppression logique : Fichier ordonné ******************/
function supressionFichierordonne(fichier_ord,cle,nb_enreg,vitesse){
  if (fichier_ord.nb_bloc==0){alert("Le fichier est vide !\nCommencez par la création");}
  else{
  let rech = chercherFichierordonne(fichier_ord,cle,nb_enreg,vitesse);    //Recherche
  setTimeout(function(){ 
 
      if(rech.trouv){     //La clé existe
        let buffer=fichier_ord.liste.head;
        for(let x=1;x<rech.i;x++){
          buffer=buffer.next; nb_lecture++;
        }
        buffer.enregs[rech.j].supp=true;    //champ Supp = Vrai
        setTimeout(function(){ 
          document.querySelector('#bloc'+rech.i).querySelector('#e'+(rech.j+1)).setAttribute("fill","red");   //Colorer la clé en rouge
          },nbr_animation*500*vitesse); nbr_animation++;

      }
      else{alert("l'element que vous voulez supprimer n'existe pas !");}
      fichier_ord.liste.printList();
    },nbr_animation*500*vitesse); 
  }
}
/***************** Fin Suppression logique *********************/






 



/*** Fonction Suppression physique :Fichier ordonné ****/
function supressionPhysiqueFichierordonne(fichier_ord,cle,nb_enreg,vitesse){
  if (fichier_ord.nb_bloc==0){alert("Le fichier est vide !\nCommencez par la création");}
  else{
  setTimeout(function(){ document.getElementById('rech').className="highlight";  },nbr_animation*500*vitesse); nbr_animation++;
  let rech = chercherFichierordonne(fichier_ord,cle,nb_enreg,vitesse);//Recherche de la clé
  setTimeout(function(){ document.getElementById('rech').classList.remove("highlight");  },nbr_animation*500*vitesse); nbr_animation++;
    
    if(rech.trouv){     //La clé existe dans le fichier
                            animer_ligne('trouv',vitesse);
                            let buffer=fichier_ord.liste.head; nb_lecture++;
                            let preced=fichier_ord.liste.head;
                            for(let x=1;x<rech.i;x++){preced=buffer;  buffer=buffer.next; }
                            //Localisation de la clé
                            setTimeout(function(){ 
                              document.querySelector('#bloc'+rech.i).querySelector('#e'+(rech.j+1)).setAttribute("fill","red");
                            },nbr_animation*500*vitesse); nbr_animation++;
                            setTimeout(function(){ 
                              document.querySelector('#bloc'+rech.i).querySelector('#e'+(rech.j+1)).setAttribute("fill","none");
                            },nbr_animation*500*vitesse); nbr_animation++;
                            if(buffer.enregs.length==1){
                                  animer_ligne('si',vitesse);
                                  //Suppression du bloc
                                  
                                  if(rech.i==1){fichier_ord.liste.head=fichier_ord.liste.head.next;   }
                                  else{preced.next=buffer.next; nb_lecture++; }
                                  
                                  nb_ecriture+=2;
                                  setTimeout(function(){ 
                                  $('#bloc'+rech.i).fadeOut(500);   //Disparition du bloc
                                  document.getElementById('si1').className="highlight";
                                  },nbr_animation*500*vitesse); nbr_animation++;
                                  setTimeout(function(){ 
                                  document.getElementById('si1').classList.remove("highlight");
                                  ordonne.innerHTML='';
                                  construire_fichier(fichier_ord,nb_enreg);    
                                  },nbr_animation*500*vitesse); nbr_animation++;
                                  fichier_ord.nb_bloc--;      //Diminuer le nombre de blocs 
                            }

                  else{//décalage dans le buffer
                                  animer_ligne('sinon',vitesse);
                                  setTimeout(function(){ document.getElementById('sinon1').className="highlight";  },nbr_animation*500*vitesse); nbr_animation++;
                                  setTimeout(function(){  
                                     document.querySelector('#bloc'+rech.i).querySelector('#te'+(rech.j+1)).style.display='none';
                                  },nbr_animation*500*vitesse); nbr_animation++;
                                  for(let z=rech.j+2;z<=buffer.enregs.length;z++){
                                        let temp_txt= document.querySelector('#bloc'+rech.i).querySelector('#te'+(z));
                                        setTimeout(function(){ 
                                            anime({         //Décaler les clés pour ne pas laisser le vide entre les enregistrements
                                            targets: temp_txt,
                                            translateY: -30
                                            });
                                        },nbr_animation*500*vitesse); nbr_animation++;
                                  }
                                  let tab=[];
                                  for(let z=0;z<buffer.enregs.length;z++){ if(z!=rech.j){tab.push(buffer.enregs[z]);} }
                                  
                                  buffer.enregs=tab;
                                  setTimeout(function(){ 
                                      ordonne.innerHTML='';
                                      construire_fichier(fichier_ord,nb_enreg);   //Dessiner le fichier
                                  },nbr_animation*500*vitesse); nbr_animation++;  
                                  setTimeout(function(){ document.getElementById('sinon1').classList.remove("highlight");  },nbr_animation*500*vitesse); nbr_animation++;  
                                  nb_ecriture++;
                      }
                        
                        animer_ligne('maj',vitesse);//Animation Algorithme
           
                }
      
      else{     //l'element n'existe pas
            animer_ligne('ntrouv',vitesse);
            setTimeout(function(){ alert("l'element que vous voulez supprimer n'existe pas !"); },nbr_animation*500*vitesse); nbr_animation++; 
          }

        animer_ligne('fermer',vitesse);
        animer_ligne('fin',vitesse);  
        fichier_ord.liste.printList();
   }
}
/******************************* Fin Suppression physique ***********************************/



/**************** Fonction Construire Fichier :  Dessine le fichier graphiquement  ************************/
//cette méthode fait le meme travail que la création mais les valeur des clés ne sont pas générer aléatoirement , elles sont récupérées du "fichier_ord"

function construire_fichier(fichier_ord,nb_enreg){
  
  

  let i=0; let j=0; let buffer=fichier_ord.liste.head;
  
  for (i=0;i<fichier_ord.nb_bloc;i++){ 
      
    ordonne.innerHTML+=`<g id="bloc`+(i+1)+`" >   </g>`;
    let figure_bloc =document.getElementById("bloc"+(i+1));
    let x_bloc=begin_x+150*i; let y_bloc=begin_y;
    figure_bloc.innerHTML+= ` <rect id="b"   x="`+x_bloc+`" y="`+y_bloc+`" height="`+(nb_enreg*30+50)+`" width="105"  fill="none" stroke="black" ></rect>`;
    figure_bloc.innerHTML+=`<rect id="nb"   x="`+(x_bloc+80)+`" y="`+y_bloc+`" height="25" width="25"  fill="none" stroke="black" ></rect>`;
    figure_bloc.innerHTML+=` <rect id="n"   x="`+(x_bloc+80)+`" y="`+(y_bloc+25+nb_enreg*30)+`" height="25" width="25"  fill="none" stroke="black" ></rect>`;
    figure_bloc.innerHTML+=` <text id="tnb"    x="`+(x_bloc+92)+`" y="`+(y_bloc+17)+`" height="25" width="25"  fill="blue"  >`+(buffer.enregs.length)+`</text>`;
    let n_x=x_bloc+105-10;
    let n_y=y_bloc+50+nb_enreg*30;
     if(i<fichier_ord.nb_bloc-1){figure_bloc.innerHTML+=   `<path  id="tn" d="M`+n_x+`,`+n_y+`L`+n_x+`,`+(n_y+30)+`L`+(n_x+60)+`,`+(n_y+30)+`L`+(n_x+60)+`,`+(n_y)+`" fill="none" stroke="black" stroke-width="3px" ></path> `  ;}

    for (j=0;j<nb_enreg;j++){
  
     let x_enreg=x_bloc+10; let y_enreg=y_bloc+25+30*j;
     let x_text=x_enreg+30 ; let y_text=y_enreg+20;
     
     figure_bloc.innerHTML+=` <rect id="e`+(j+1)+`"    x="`+x_enreg+`" y="`+y_enreg+`" height="30" width="60"  fill="none" stroke="black" ></rect>`;
      if( j < buffer.enregs.length) {
       
       let cle = buffer.enregs[j].cle;  //Récupérer la clé à partir du fichier "fichier_ord"
       buffer.enregs[j].x=x_enreg;  //Récupérer les attributs X,Y  de l'enregistrement à partir du fichier "fichier_ord"
       buffer.enregs[j].y=y_enreg;
        
        figure_bloc.innerHTML+= ` <text id="te`+(j+1)+`"   x="`+x_text+`" y="`+y_text+`" fill="black"  >`+cle+`</text>`;
      }
      else{ figure_bloc.innerHTML+= ` <text id="te`+(j+1)+`"   x="`+x_text+`" y="`+y_text+`" fill="black"  ></text>`; 
           } 
           
    }
     
    buffer=buffer.next;   //Passer au bloc suivant
  }
        

}
/*****************************  FIN   ****************************/


const algo_requette= `
<p> Requêtte_Fichier(nomFich,min,max) </p>
<p id="debut" >DEBUT</p>
<p id="ouvrir"> Ouvrir(F,nomFich,'N') </p> 
<p  id="affect"  > Buffer &lt;—Entete(F,1) </p>
<p id="rech" >Recherche_Fichier(F,min,Var Trouv,Var i,Var j) </p>
<p id="tq" >TQ (i <> -1)et(Non Stop)</p>
<p>&nbsp;&nbsp;LirDir(F,i,Buffer)</p>
<p id="ecrire"  >&nbsp;&nbsp;Ecrire(Buffer.Tab[j].cle)</p>
<p id="si" >&nbsp;&nbsp;Si (j>Buffer.NB) { j&lt;—0; i&lt;—Buffer.suiv; }</p>
<p id="stop" >&nbsp;&nbsp;Si (Buffer.Tab[j].cle>max) { Stop&lt;—Vrai }</p>
<p id="avance" >&nbsp;&nbsp;j&lt;—j+1</p>
<p id="ftq" >FTQ</p>
<p id="fermer" >Fermer(F)</p>
<p id="fin" >FIN</p>
`;






/***********************  Fonction Requette  : Afficher toutes les clés apartenant à l'intervalle [min,max]   ****************/
function requette(fichier_ord,nb_enreg,min,max,vitesse){
  if(fichier_ord.nb_bloc==0){alert("Le fichier est vide !\nCommencez par la création");}    //Fichier vide
  else{       //Fichier n'est pas vide
    let dernier=fichier_ord.liste.head;
    while(dernier.next!=null){dernier=dernier.next;}
    let der_cle= dernier.enregs[dernier.enregs.length-1].cle;
    if((max<min)||(min>der_cle)){ 
      alert("Acune clé ne correspond à votre requette !");  if(min>der_cle){nb_lecture++; }  }
    else{ 
        animer_ligne('debut',vitesse);
        animer_ligne('ouvrir',vitesse);
        animer_ligne('affect',vitesse);
        animer_ligne('rech',vitesse);
      let rech = chercherFichierordonne(fichier_ord,min,nb_enreg,vitesse);
      //let rech= test(fichier_ord,min,nb_enreg);     //Recherche de la borne inférieure (min)
        let temp_i;   
        let stop=false;
        let fin = false;
        let buffer =fichier_ord.liste.head;
        if(min<der_cle){
          for(temp_i=1;temp_i<rech.i;temp_i++){buffer=buffer.next;}
            let i_bloc= temp_i;
            //Récupérer le deplacement dans le bloc 
            if(rech.j==-1){rech.j=0;}
            while((buffer!=null)&&(!stop)){
              if(min>buffer.enregs[rech.j].cle){rech.j++;} else{stop=true; animer_ligne('stop',vitesse); }
              if(rech.j==buffer.enregs.length){ animer_ligne('si',vitesse);  rech.j=0; buffer=buffer.next;}
            }
          //La premiére clé correspondante à la requette est localisée   
          nb_lecture++;
          while((buffer!=null)&&(!fin)){ //Parcourt séquentiel jusqu'a la fin du fichier ou bien atteindre la borne supérieure (max)
            animer_ligne('tq',vitesse);
              //animer energ
              if(max<buffer.enregs[rech.j].cle){      //Atteinte de la borne supérieure
                fin=true;}
              else{
                
                let b = i_bloc;
                let e = rech.j;
                //Resultat : Animer la clé en vert  
                animer_ligne('ecrire',vitesse);
                setTimeout(function(){  document.querySelector('#bloc'+b).querySelector('#e'+(e+1)).setAttribute("fill","#00ff00");  },nbr_animation*500*vitesse); nbr_animation++;
                animer_ligne('avance',vitesse);
                rech.j++;     //on avance dans le bloc
                if(rech.j==buffer.enregs.length){     //si on a atteint la fin du bloc on passe au bloc suivant
                   i_bloc++; rech.j=0;buffer=buffer.next; nb_lecture++;  }    //Augmentation du nombre de lectures
              }  
              animer_ligne('ftq',vitesse);
            }
       }
            
            nbr_animation+=6;
            setTimeout(function(){  
              ordonne.innerHTML='';
              construire_fichier(fichier_ord,nb_enreg);
            },nbr_animation*500*vitesse); nbr_animation++;


            animer_ligne('fermer',vitesse);
            animer_ligne('fin',vitesse);

      }

}

}
/***********************************  Fin Fonction Requette    *************************/











/*********************** Fonction Cout  : Ecriture du cout de l'opération  (Lectures/Ecritures) **********************/
function cout(lect,ecr){
  document.getElementById('current-action').style.display = '';
  document.getElementById('current-action').innerText='Lecture : '+lect+' | Ecriture : '+ecr;
}
/************************************************  Fin Fonction Cout  **********************************************/



/******************************* Fonction Fermer_Cout  : Cacher le cout de l'opération  *****************************/
function fermer_cout(){
  nb_lecture=0; nb_ecriture=0;
  document.getElementById('current-action').style.display = 'none';
}
/*********************************************   Fin Fonction Fermer_Cout   ****************************************/



/**************************  Fonction Animer_ligne   animer une ligne de l'algorithme  ******************************/
function animer_ligne(id,vitesse){
  setTimeout(function(){ document.getElementById(id).className="highlight";  },nbr_animation*500*vitesse); nbr_animation++;
  setTimeout(function(){ document.getElementById(id).classList.remove("highlight");  },nbr_animation*500*vitesse); nbr_animation++;
}
/***********************************************   Fin Fonction Animer_ligne   **********************************/