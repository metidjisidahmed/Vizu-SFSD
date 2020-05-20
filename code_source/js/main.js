// document.getElementById('acceuil').addEventListener('mouseover', passeMenu);
// document.getElementById('acceuil').addEventListener('mouseout', resetMenu);

document.getElementById('equipe').addEventListener('mouseover', passeMenu);
document.getElementById('equipe').addEventListener('mouseout', resetMenu);

document.getElementById('Apropos').addEventListener('mouseover', passeMenu);
document.getElementById('Apropos').addEventListener('mouseout', resetMenu);

document.getElementById('operation').addEventListener('mouseover', passeMenu);
document.getElementById('operation').addEventListener('mouseout', resetMenu);

function passeMenu() {
    this.style.color = '#F71414';
}

function resetMenu() {
    this.style.color = '';
}

/////////////////////////SAVOIR PLUS////////////////////////////////////
document.querySelector('.home').childNodes[5].addEventListener('mouseover', passeHome);
document.querySelector('.home').childNodes[5].addEventListener('mouseout', resetHome);

function passeHome() {
    this.style.background = '#0000FF';
    this.style.fontStyle = 'italic';
}

function resetHome() {
    this.style.background = '';
    this.style.fontStyle = '';
    this.style.textTransform = '';
}

///////////////////////////////////////////////////////////////////////////////////
// document.getElementById('operation').addEventListener('click', menu);

// function menu() {
//     var liste = document.querySelector('.liste');
//     liste.innerHTML = " Les différentes structures Hachage Arbres Index";
// }

// document.querySelector('.home').addEventListener('click', supprimer);

// function supprimer() {
//     var liste = document.querySelector('.liste');
//     liste.innerHTML = "";
// }

///////////////////////////////////////////////////////////////////////::
window.onload = montre;

function montre(id) {
    var d = document.getElementById(id);
    for (var i = 1; i <= 10; i++) {
        if (document.getElementById('operation1')) {
            document.getElementById('operation1').style.display = 'none';
        }
    }
    if (d) {
        d.style.display = 'block';
    }
}
///////////
document.querySelector('#scroll-to-top').addEventListener('mouseover', function(e) {
    e.target.style.backgroundColor = 'rgb(0, 119, 255)';
    document.querySelector('#fleche').style.background="rgb(0, 119, 255)";

});
document.querySelector('#scroll-to-top').addEventListener('mouseout', function(e) {
    e.target.style.backgroundColor = 'blue';
    document.querySelector('#fleche').style.background="blue";
});

document.querySelector('#fleche').addEventListener('mouseover', function(e) {
    e.target.style.backgroundColor = 'rgb(0, 119, 255)';
    document.querySelector('#scroll-to-top').style.background="rgb(0, 119, 255)";

});
document.querySelector('#fleche').addEventListener('mouseout', function(e) {
    e.target.style.backgroundColor = 'blue';
    document.querySelector('#scroll-to-top').style.background="blue";
});

////////////////////////////////

var derniere_position_de_scroll_connue = 0;
var ticking = false;

function faireQuelqueChose(position_scroll) {
if (position_scroll>100)
     $ ('#scroll-to-top').fadeIn();
 else  $ ('#scroll-to-top').fadeOut();
 document.querySelector(".header").style.opacity=(1.16-position_scroll/1000);
 if (position_scroll==0)  document.querySelector(".header").style.opacity=1;
}

window.addEventListener('scroll', function(e) {
  derniere_position_de_scroll_connue = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(function() {
      faireQuelqueChose(derniere_position_de_scroll_connue);
      ticking = false;
    });
  }

  ticking = true;
});

document.getElementById('div').style.display="flex";
   setTimeout(function()
  {  $("#div").fadeOut(500);},1000);

function lien(chemin) {
    $("#div").fadeIn();
    setTimeout(function()
  {location.href = chemin;},1000);
}