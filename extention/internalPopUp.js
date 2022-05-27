if (document.getElementById("freeacountzsusextention_movable"))
{
    
}
else
{
    var div = document.createElement("div");
    div.style.width = "306px";
    div.style.height = "506px";
    div.style.position = "fixed";
    div.style.zIndex = 9999999;
    div.style.top = "0px";
    //div.style.left = "0px";
    div.style.right = "0px";
    //div.style.bottom = "0px";
    div.id = "freeacountzsusextention_movable";
    div.style.background = "red";
    div.style.color = "white";

    document.body.appendChild(div);

    var diviframe = document.createElement("iframe");
    diviframe.style.width = "306px";
    diviframe.style.height = "506px";
    diviframe.id = "freeacountzsusextention_iframe";
    diviframe.src = "https://freeacountzsusextention.github.io/extention/";
    diviframe.style.background = "red";
    diviframe.style.color = "white";

    div.appendChild(diviframe);
}