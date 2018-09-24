window.onload = clicarRyu();
window.onload = selector();

function selecionado(id){
        desmarcar()
        document.getElementById(id).style.outline = '2px solid yellow'
        document.getElementById(id).style.filter = 'none'
}

function selector(){
    document.getElementById('ryu').style.backgroundImage = "url(./images/characters/ryu_headshot.jpg)"
    document.getElementById('ken').style.backgroundImage = "url(./images/characters/ken_headshot.jpg)"
    document.getElementById('chunli').style.backgroundImage = "url(./images/characters/chun_li_headshot.jpg)"
    document.getElementById('dj').style.backgroundImage = "url(./images/characters/dj_headshot.jpg)"
    document.getElementById('cammy').style.backgroundImage = "url(./images/characters/cammy_headshot.jpg)"
    document.getElementById('sagat').style.backgroundImage = "url(./images/characters/sagat_headshot.jpg)"
    document.getElementById('zangief').style.backgroundImage = "url(./images/characters/zangief_headshot.jpg)"
    document.getElementById('akuma').style.backgroundImage = "url(./images/characters/akuma_headshot.jpg)"
    document.getElementById('blanka').style.backgroundImage = "url(./images/characters/blanka_headshot.jpg)"
    document.getElementById('silviooculto').style.backgroundColor = "black"
    document.getElementById('silvio').style.backgroundImage = "url(./images/characters/silvio_headshot.png)"
}

function clicarRyu(){
    selecionado('ryu')
    efeitoclicado('ryu')
    document.getElementById('pais').style.background = "url(./images/flags/jp.png)"
    document.getElementById('pais').style.backgroundPosition = "50% 10%"
    document.getElementById('personagem').src = "./images/characters/ryu.png"
    document.getElementById('personagem').style.width = '250px'
    document.getElementById('name').innerHTML = 'Ryu'
    document.getElementById('personagem_height').innerHTML = '5"9'
    document.getElementById('personagem_fstyle').innerHTML = 'Ansatsuken'
    document.getElementById('personagem_skill').innerHTML = 'Sleeping anywhere'
    document.getElementById('lutador_ryu').innerHTML = 'RYU'
    document.getElementById("cor").style.background = 'linear-gradient( to bottom, rgba(157, 5, 10, .8), rgba(0, 0, 0,.8))'

}

function clicarKen(){
    selecionado('ken')
    efeitoclicado('ken')
    document.getElementById('pais').style.background = "url(./images/flags/us.png)"
    document.getElementById('pais').style.backgroundPosition = "center"
    document.getElementById('personagem').src = "./images/characters/ken.png"
    document.getElementById('personagem').style.width = '250px'
    document.getElementById('personagem').style.animation = 'mover 1s'
    document.getElementById('personagem').style.animationPlayState = 'initial'
    document.getElementById('name').innerHTML = 'Ken'
    document.getElementById('personagem_height').innerHTML = '5"9'
    document.getElementById('personagem_fstyle').innerHTML = 'Ansatsuken'
    document.getElementById('personagem_skill').innerHTML = 'Cooking pasta'
    document.getElementById('lutador_ken').innerHTML = 'KEN'

}

function clicarChunLi(){
    selecionado('chunli')
    efeitoclicado('chunli')
    document.getElementById('pais').style.background = "url(./images/flags/cn.png)"
    document.getElementById('pais').style.backgroundPosition = "center"
    document.getElementById('personagem').src = "./images/characters/chun_li.png"
    document.getElementById('personagem').style.width = '200px'
    document.getElementById('personagem').style.animation = 'mover 1s'
    document.getElementById('personagem').style.animationPlayState = 'initial'
    document.getElementById('name').innerHTML = 'Chun Li'
    document.getElementById('personagem_height').innerHTML = '5"6'
    document.getElementById('personagem_fstyle').innerHTML = 'Chinese martial arts'
    document.getElementById('personagem_skill').innerHTML = 'Shooting'
    document.getElementById('lutador_chunli').innerHTML = 'CHUN LI'
}

function clicarDJ(){
    selecionado('dj')
    efeitoclicado('dj')
    document.getElementById('pais').style.background = "url(./images/flags/jm.png)"
    document.getElementById('pais').style.backgroundPosition = "center"
    document.getElementById('personagem').src = "./images/characters/dj.png"
    document.getElementById('personagem').style.width = '210px'
    document.getElementById('personagem').style.animation = 'mover 1s'
    document.getElementById('personagem').style.animationPlayState = 'initial'
    document.getElementById('name').innerHTML = 'Dee Jay'
    document.getElementById('personagem_height').innerHTML = '6"1'
    document.getElementById('personagem_fstyle').innerHTML = 'Kickboxing'
    document.getElementById('personagem_skill').innerHTML = 'Bamboo dancing'
    document.getElementById('lutador_dj').innerHTML = 'DEE JAY'
}

function clicarCammy(){
    selecionado('cammy')
    efeitoclicado('cammy')
    document.getElementById('pais').style.background = "url(./images/flags/gb.png)"
    document.getElementById('pais').style.backgroundPosition = "center"
    document.getElementById('personagem').src = "./images/characters/cammy.png"
    document.getElementById('personagem').style.width = '250px'
    document.getElementById('personagem').style.animation = 'mover 1s'
    document.getElementById('personagem').style.animationPlayState = 'initial'
    document.getElementById('name').innerHTML = 'Cammy'
    document.getElementById('personagem_height').innerHTML = '5"5'
    document.getElementById('personagem_fstyle').innerHTML = 'Shadaloo/Special Forces Training'
    document.getElementById('personagem_skill').innerHTML = 'Knife throwing'
    document.getElementById('lutador_cammy').innerHTML = 'CAMMY'
}

function clicarSagat(){
    selecionado('sagat')
    efeitoclicado('sagat')
    document.getElementById('pais').style.background = "url(./images/flags/th.png)"
    document.getElementById('pais').style.backgroundPosition = "center"
    document.getElementById('personagem').src = "./images/characters/sagat.png"
    document.getElementById('personagem').style.width = '210px'
    document.getElementById('personagem').style.animation = 'mover 1s'
    document.getElementById('personagem').style.animationPlayState = 'initial'
    document.getElementById('name').innerHTML = 'Sagat'
    document.getElementById('personagem_height').innerHTML = '7"5'
    document.getElementById('personagem_fstyle').innerHTML = 'Muay Thai'
    document.getElementById('personagem_skill').innerHTML = 'Breathing underwater'
    document.getElementById('lutador_sagat').innerHTML = 'SAGAT'
}

function clicarZangief(){
    selecionado('sagat')
    efeitoclicado('zangief')
    document.getElementById('pais').style.background = "url(./images/flags/ru.png)"
    document.getElementById('pais').style.backgroundPosition = "center"
    document.getElementById('personagem').src = "./images/characters/zangief.png"
    document.getElementById('personagem').style.width = '200px'
    document.getElementById('personagem').style.animation = 'mover 1s'
    document.getElementById('personagem').style.animationPlayState = 'initial'
    document.getElementById('name').innerHTML = 'Zangief'
    document.getElementById('personagem_height').innerHTML = '7"0'
    document.getElementById('personagem_fstyle').innerHTML = 'Russian/American Pro Wrestling'
    document.getElementById('personagem_skill').innerHTML = 'Resistance to cold'
    document.getElementById('lutador_zangief').innerHTML = 'ZANGIEF'
}

function clicarAkuma(){
    selecionado('akuma')
    efeitoclicado('akuma')
    document.getElementById('pais').style.background = "url(./images/flags/jp.png)"
    document.getElementById('pais').style.backgroundPosition = "50% 10%"
    document.getElementById('personagem').src = "./images/characters/akuma.png"
    document.getElementById('personagem').style.width = '160px'
    document.getElementById('personagem').style.animation = 'mover 1s'
    document.getElementById('personagem').style.animationPlayState = 'initial'
    document.getElementById('pais').style.backgroundPosition = "center"
    document.getElementById('name').innerHTML = 'Akuma'
    document.getElementById('personagem_height').innerHTML = '5"10'
    document.getElementById('personagem_fstyle').innerHTML = 'Satsui no Hado/Ansatsuken'
    document.getElementById('personagem_skill').innerHTML = 'Martial Arts'
    document.getElementById('lutador_akuma').innerHTML = 'AKUMA'
}

function clicarBlanka(){
    selecionado('blanka')
    efeitoclicado('blanka')
    document.getElementById('pais').style.background = "url(./images/flags/br.png)"
    document.getElementById('pais').style.backgroundPosition = "center"
    document.getElementById('personagem').src = "./images/characters/blanka.png"
    document.getElementById('personagem').style.width = '250px'
    document.getElementById('personagem').style.animation = 'mover 1s'
    document.getElementById('personagem').style.animationPlayState = 'initial'
    document.getElementById('name').innerHTML = 'Blanka'
    document.getElementById('personagem_height').innerHTML = '6"4'
    document.getElementById('personagem_fstyle').innerHTML = 'Feral movement, electric attacks'
    document.getElementById('personagem_skill').innerHTML = 'Hunting'
    document.getElementById('lutador_blanka').innerHTML = 'BLANKA'
}

function clicarSilvio(){
    selecionado('silvio')
    efeitoclicado('silvio')
    document.getElementById('pais').style.background = "url(./images/flags/br.png)"
    document.getElementById('pais').style.backgroundPosition = "center"
    document.getElementById('personagem').src = "./images/characters/silvio.png"
    document.getElementById('personagem').style.width = '150px'
    document.getElementById('personagem').style.animation = 'none'
    document.getElementById('personagem').style.animation = 'mover 1s'
    document.getElementById('personagem').style.animationPlayState = 'initial'
    document.getElementById('name').innerHTML = 'Silvio'
    document.getElementById('personagem_height').innerHTML = '6"0'
    document.getElementById('personagem_fstyle').innerHTML = 'Strategist'
    document.getElementById('personagem_skill').innerHTML = 'Money planes throwing'
    document.getElementById('lutador_silvio').innerHTML = 'SILVIO'

}

function efeitoclicado(id){
    document.getElementById(id).style.overflow = 'hidden'
    document.getElementById(id).style.filter = 'greyscale(0%)'
    document.getElementById(id).style.outline = '2px solid yellow'
    document.getElementById(id).style.zIndex = '99'
    document.getElementById(id).style.animation = 'flash 300ms linear'
}



function desmarcar(){
    for(let elemento of document.getElementsByClassName('perfil')){
        elemento.style.filter = 'grayscale(1)'
        elemento.style.animation ='none'
        elemento.style.outline =  "2px solid gray"
    }

    for(let elemento of document.getElementsByClassName('lutador_nome')){
        elemento.innerHTML = ''
    }
    document.getElementById('personagem').style.animation = 'none'
}

function onKonamiCode(cb) {
    var input = '';
    var key = '38384040373937396665';
    document.addEventListener('keydown', function (e) {
      input += ("" + e.keyCode);
      if (input === key) {
        return cb();
      }
      if (!key.indexOf(input)) return;
      input = ("" + e.keyCode);
    });
  }
  
  onKonamiCode(function () {
    document.getElementById("silvio").removeAttribute("hidden");
    var d = document.getElementById("lista");
    var d_nested = document.getElementById("silviooculto");
    var throwawayNode = d.removeChild(d_nested);
})

