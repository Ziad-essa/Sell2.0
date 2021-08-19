//---------------------------bignav--------------------------
const bignav_ids=document.querySelectorAll("#navitem4,#navitem3,#navitem2,#navitem1,#navbar-brand1,#navbarDropdown1,#iconbox");
window.onscroll=function(){navbar992(),navbar991()};
function navbar992(){
    if(document.body.scrollTop > 60 || document.documentElement.scrollTop > 60){
        document.getElementById("navbar1").classList.add("fixed-top","colorwhite","shadow");
        document.getElementById("icon-badge1").classList.add("icon-badge-scr");
        bignav_ids.forEach((e) => {
            e.classList.add("colorblack2")    
        });
        
    }else{
        document.getElementById("navbar1").classList.remove("fixed-top","colorwhite","shadow");
       document.getElementById("icon-badge1").classList.remove("icon-badge-scr");
        
        bignav_ids.forEach((e) => {
            e.classList.remove("colorblack2") 
        });
    }
};
function hovernav2(){
   document.getElementById("icon-badge1").classList.add("icon-badge-scr1");
    bignav_ids.forEach((e) => {
        e.classList.add("colorblack")    
    });
}
function leavenav2(){
   document.getElementById("icon-badge1").classList.remove("icon-badge-scr1");
    bignav_ids.forEach((e) => {
        e.classList.remove("colorblack")    
    });
}
//--------------------------phonenav-------------------------
const phonenav_ids=document.querySelectorAll("#navbutton1,#brand2")
function navbar991(){
    if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 60){
        document.getElementById("navbar2").classList.add("colorwhite2","fixed-top","shadow")
        phonenav_ids.forEach((e) => {
            e.classList.add("colorblack3")    
        });
    }else{
        document.getElementById("navbar2").classList.remove("colorwhite2","fixed-top","shadow")
        phonenav_ids.forEach((e) => {
            e.classList.remove("colorblack3")    
        });
    }
};

function hovernavphone(){
    phonenav_ids.forEach((e) => {
        e.classList.add("colorblack")    
    });
}
function leavenavphone(){
    phonenav_ids.forEach((e) => {
        e.classList.remove("colorblack")    
    });
}
function navmcolor(){
    document.getElementById("navbar2").classList.toggle("colorwhite")
    phonenav_ids.forEach((e) => {
        e.classList.toggle("colorblack2")    
    });
};

// ------------------------------------shop.html------------------------------------
const shop_collapse=document.querySelectorAll("#panelsStayOpen-collapseOne,#panelsStayOpen-collapseTwo,#panelsStayOpen-collapsefour")
var viewportWidth = window.innerWidth || document.documentElement.clientWidth;

if (window.innerWidth < 991) {
    shop_collapse.forEach((e) => {
        e.classList.remove("show")    
    });
} else {
    shop_collapse.forEach((e) => {
        e.classList.add("show")    
    });       
}
function test1(){
    if (window.innerWidth < 991) {

        shop_collapse.forEach((e) => {
            e.classList.remove("show")    
        });
    } else {
        shop_collapse.forEach((e) => {
            e.classList.add("show")    
        });        
    }    
};




function plus_one(e){

//e.target.parentElement.querySelector("input").value++
//e.target.nextElementSibling.value++ event
         e.nextElementSibling.value++
  

}
function decrease(e){
    e.previousElementSibling.value--
}
var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';
function initMap() {
    var location={lat:-25.363, lng:131.044};
    
    var map =new google.maps.Map(document.getElementById("map"),{
        zoom: 6,
        center: location,
        mapId: "7f8b4dc30acd74db",
        
    });
    var marker =new google.maps.Marker({
        position: location,
        map: map,
        icon: "http://maps.google.com/mapfiles/kml/paddle/wht-circle.png"
    });
}
