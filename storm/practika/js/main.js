// function fun1() {
//         var chbox;
//         chbox=document.getElementById('one');
//         if (chbox.checked) {
//         alert('Выбран');
//         }
//         else {
//             alert('Не выбран');
//         }
//     }
// function fun2() {
//     var radi = document.getElementsByName('r1');
//     for (var i = 0; i < radi.length; i++) {
//         if (radi[i].checked) {
//             alert('Выбран ' + i + ' элемент');
//         }
//     }
// }
//    function fun1() {
//        var sel=document.getElementById('MySelect').selectedIndex;
//        var options=document.getElementById('MySelect').options;
//        alert('Выбрана опция ' +options[sel].text);
//    }
//
//    function fun1() {
//       var rng=document.getElementById('r1');
//       var p=document.getElementById('i1');
//        i1.value=rng.value;
//    }
//    function fun1() {
//        var rng = document.getElementById('r1');
//        var div = document.getElementById('test');
//        div.style.width = rng.value+ 'px';
//    }
// function fun1() {
//     var rtl=document.getElementById('rtl').value;
//     var ttl=document.getElementById('ttl');
//     var rtr=document.getElementById('rtr').value;
//     var ttr=document.getElementById('ttr');
//     var rbr=document.getElementById('rbr').value;
//     var tbr=document.getElementById('tbr');
//     var rbl=document.getElementById('rbl').value;
//     var tbl=document.getElementById('tbl');
//     var block=document.getElementById('block');
//
//     ttl.value=rtl;
//     ttr.value=rtr;
//     tbr.value=rbr;
//     tbl.value=rbl;
//     block.style.borderRadius= rtl+'px ' + rtr+'px '+rbr+ 'px '+rbl+'px ';
//     }
/*
document.getElementById('nav').onmouseover = function(event) {
    var target = event.target;
    if (target.сlassName = 'menu_item') {
        var s = target.getElementsByClassName('submenu')
        CloseMenu();
        s[0].style.display = 'block';
    }
}
document.onmouseover=function(event) {
    var target = event.target;
    console.log(event.target);
    if (target.сlassName!='menu_item' && target.сlassName!='submenu'){
        CloseMenu();
    }
}

    function CloseMenu() {
    var subm = document.getElementsByClassName('submenu');
    for (var i=0; i <subm.length; i++){
        subm[i].style.display="none";
        }
}
*/
/*
document.querySelectorAll('.menu_item').forEach(function (item) {
    item.onmouseover = function(event) {
        var item = event.target.getElementsByClassName('submenu').item(0);
        if(item){
            item.style.display = 'block';
        }
    }
});*/
