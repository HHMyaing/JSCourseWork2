var demo=document.getElementById('demo');
var newDiv=document.createElement('div');
var mStatus=["Single","Married","Do not share"];
var newH1=document.createElement('h1');
var h1Text= document.createTextNode("Choose your marital status");
newH1.appendChild(h1Text);
newDiv.appendChild(newH1);
for(let i=0;i<mStatus.length;i++){
    var newList=document.createElement('INPUT');
    newList.setAttribute("Type","Radio");
    var radioText=document.createTextNode(mStatus[i]);
    newList.appendChild(radioText);
    newDiv.appendChild(newList);
}
var item = demo.childNodes[0];
item.replaceChild(newDiv,item.childNodes[0]);