
function parametre()
{var  x=document.getElementById("menu");
    var a=document.querySelector(".navi");

if(a.style.width=="250px"){
    a.style.width="0" ;
x.src="imagess/56763.png";
}
else{
    a.style.width="250px";
    x.src="imagess/close.png";
}
}

function modi()
{
var nom=document.getElementById("nom")
    var  para=document.getElementById("kkk");
    var kk=document.querySelector("#bu");
    var  x=document.querySelector("img.hh");
 var flech=document.querySelector("#fleche");
 var f=document.querySelector("#fleche3");
 flech.addEventListener('click', () => {
     x.src="imagess/enfants.jpg";
    kk.style.background="rgb(66, 66, 192)";
    para.innerHTML="enfants"
    nom.innerHTML="accesoire enfants";

})
     f.addEventListener('click', () => {
        x.src="imagess/v1.jpg"
        kk.style.background="pink";
        para.innerHTML="femmes" 
        nom.innerHTML="accesoire femmes";
    });
 var r=document.querySelector("#fleche2");
 r.addEventListener('click', () => {
     x.src="imagess/pull.jfif";
     kk.style.background="#5a0316";
     para.innerHTML="hommes";  
     nom.innerHTML="hommes";
    })
     var i=document.querySelector("#reset");
     i.addEventListener('click', () => {
         x.src="imagess/acc.jpg";
        kk.style.background="rgb(185, 49, 0)";
        para.innerHTML="accesoire"; 
        nom.innerHTML=" accesiore";   
    })}

    var b=document.getElementById("2");
     //verif prenom
    function per()
    {
      b=document.getElementById("2"); 
if(b.value=="")
{document.getElementById("a1").innerHTML="saisir votre prénom";}

else
{document.getElementById("a1").innerHTML="";}

}
var a=document.getElementById("1");
//verif nom
   function nom()
   {
       a=document.getElementById("1");
    if(a.value=="")
    {document.getElementById("a").innerHTML="saisir votre nom";}
    else{
        document.getElementById("a").innerHTML="";
    }
    var n=a.value.length;
    for(let i=0;i<n;i++)
    {if((a.charAt(i)<"a"|| a.charAt(i)>"z") && (a.charAt(i)<"A"|| a.charAt(i)>"Z"))
    {
     document.getElementById("a").innerHTML="votre nom doit etre alphabetique";
    
    }
    else{
        document.getElementById("a").innerHTML="";
    }   
    } 
} 
    function verif()
    {
var c=document.getElementById("3");
var d=document.getElementById("4");
nom();
per();
}


        
        

