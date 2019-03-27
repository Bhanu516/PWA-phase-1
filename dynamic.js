function loadJson(file,callback){
  var xhr=new XMLHttpRequest();
  xhr.overrideMimeType("application/json")
  xhr.open("GET",file,true);
  xhr.onreadystatechange=function(){
    if(xhr. readyState === 4 && xhr.status=="200"){
callback(xhr.responseText);
  }
}
xhr.send();
}
loadJson("dynamic.json",function(text){
  let data=JSON.parse(text);
console.log(data);
profile(data.profile);
carerr(data.carerr);
education(data.education);
skills(data.skills);
})
var LEFT=document.querySelector(".LEFT");
function profile(p){
  var  image=document.createElement("img");
  image.src=p.image;
  LEFT.append(image);

var name=document.createElement("h1");
name.textContent=p.name;
LEFT.append(name);

var des=document.createElement("h2");
des.textContent=p.designation;
LEFT.append(des);

var mob=document.createElement("h3");
mob.textContent=p.mobile;
LEFT.append(mob);

var mail=document.createElement("h3");
mail.textContent=p.email;
LEFT.append(mail);
}

var RIGHT=document.querySelector(".RIGHT");
function carerr(c){
  var car=document.createElement("h1");
car.textContent="carerr";
RIGHT.append(car);

var hr=document.createElement("hr");
RIGHT.append(hr);

var info=document.createElement("p");
info.textContent=c.info;
RIGHT.append(info);
}

function education(e){
  var edu=document.createElement("h1");
  edu.textContent="education";
  RIGHT.append(edu);

  var hr=document.createElement("hr");
  RIGHT.append(hr);

var table=document.createElement("table");
RIGHT.append(table);

// var tr=document.createElement("table");
// tr.textContent="qualification institution";
// RIGHT.append(tr);

var tr1="<tr><th>qualification</th><th>institution</th><th>percentage</th><th>y.o.p</th></tr>";
var tr2="";
for (i=0;i<e.length;i++)
{
  tr2=tr2+"<tr><td>"+e[i].qualification+"</td><td>"+e[i].institution+"</td><td>"+e[i].percentage+"</td><td>"+e[i].yop+"</td></tr>";
}
table.innerHTML=tr1+tr2;
RIGHT.append(table);
}

function skills(sk){
var ss=document.createElement("h1");
ss.textContent="skills";
RIGHT.append(ss);

 var hr=document.createElement("hr");
RIGHT.append(hr);
 var ol=document.createElement("ol");
for(var i in sk)
 {
   var li=document.createElement("li");
   li.innerHTML=sk[i].name+":"+sk[i].info;
   ol.append(li);
 }
RIGHT.append(ol);
 }
