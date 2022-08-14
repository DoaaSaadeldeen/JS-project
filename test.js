// pathes array store pathes of used image
var pathes=['images/A.png','images/B.png','images/C.png','images/D.png','images/E.png','images/F.png','images/G.png','images/H.png',
'images/I.png','images/J.png','images/K.png','images/L.png','images/M.png','images/N.png','images/O.png','images/P.png','images/Q.png','images/R.png',
'images/S.png','images/T.png','images/U.png','images/V.png','images/W.png','images/X.png','images/Y.png','images/Z.png'];

var names=['Aircraft','Baby','cloud','Duck','Earth','Forest','Galaxy','House','IceBerg','juice','King',
'Lighting','Moon','nemo','Ocean','Planet','Queen','Rain','Sun','Tornado','Umberla','Vase','Waterfall','X-ray','Yoyo','Zoo'];
// the target of empty variable is to know if any image is shown now of not(container div is empty or not)
var empty=true;
//                       type=load
window.addEventListener("load",function(){
    var ld=new interaction("load","[object HTMLDocument]",Date.now());
    localStorage.setItem(localStorage.length, JSON.stringify(ld));
    alert("Welcome! :)");
});

window.addEventListener("unload",function(){
    var unld=new interaction("unload","[object HTMLDocument]",Date.now());
    localStorage.setItem(localStorage.length, JSON.stringify(unld));
    alert("Good Bye!");
});

function generate_rand() {
    if(empty == false)
    {
        if(document.getElementById("container").hasChildNodes())
       { 
           document.getElementById("container").removeChild(document.getElementById("container").firstChild);
           document.getElementById("img_name").removeChild(document.getElementById("img_name").firstChild);
       }
       while(document.getElementById("ul").hasChildNodes())
        document.getElementById("ul").removeChild(document.getElementById("ul").firstChild);
    }
    var generte_btn = new interaction("click","[generate_button]",Date.now());
    localStorage.setItem(localStorage.length, JSON.stringify(generte_btn));

    var len = (document.getElementsByTagName("input")[0]).value;
   //to handle large numbers which over 26 or less than 0
   len=(len>26)?26:len;
   len=(len<0)?0:len;
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var freq=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    for (var i = 0; i < len; i++)
    {//create button
        var idx=Math.floor(Math.random() * 26);//0 to 25
        if(freq[idx]==0){
            var btn_val= possible.charAt(idx);
            var btn=document.createElement("input");
            btn.setAttribute("type","submit");
            btn.setAttribute("value",btn_val);
            btn.setAttribute("style","background-color: #0066CC;");
             //create list item
            var list_item=document.createElement("li");
            list_item.appendChild(btn);
            list_item.setAttribute("style","display:inline");
            //append list item to the list of characters
            ul=document.getElementById("ul");
            ul.appendChild(list_item);
            list_item.addEventListener("click",clicked_letter);
            freq[idx]++;
        }else{
              i--;
        }
    }
}

function clicked_letter()
{ 
    var cl = new interaction("click","[letter_button]",Date.now());
    localStorage.setItem(localStorage.length, JSON.stringify(cl));
    if(empty == false)
    {
        if(document.getElementById("container").hasChildNodes())
        { 
            document.getElementById("container").removeChild(document.getElementById("container").firstChild);
            document.getElementById("img_name").removeChild(document.getElementById("img_name").firstChild);
        }
    }
    letter=this.firstChild.value;
    const image = document.createElement('img');
    image.src  = pathes[letter.charCodeAt(0)-65];
    image.setAttribute("style","width:400px;height:300px;display:block;margin-left:auto;margin-right:auto;" );
    document.getElementById("container").appendChild(image);
    var name=document.createTextNode(names[letter.charCodeAt(0)-65]);
    document.getElementById("img_name").setAttribute("style","font-size:50px");
    document.getElementById("img_name").appendChild(name);
    empty=false;
    
}
function interaction(type,target,time)
{
   this.type=type;
   this.target=target;
   this.time=time;
}
