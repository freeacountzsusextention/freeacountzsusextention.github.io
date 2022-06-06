function PopUp() {
    if (document.getElementById("freeacountzsusextention_movable"))
          {return;}
          var div = document.createElement("div");
          div.style.width = "306px";
          div.style.height = "556px";
          div.style.position = "fixed";
          div.style.zIndex = 9999999;
          div.style.top = "0px";
          //div.style.left = "0px";
          div.style.right = "0px";
          //div.style.bottom = "0px";
          div.style.cursor = "move";
          div.id = "freeacountzsusextention_movable";
          div.style.background = "darkblue";
          div.style.color = "white";
  
          document.body.appendChild(div);

          var divclose = document.createElement("div");
          divclose.style.width = "50px";
          divclose.style.height = "50px";
          divclose.style.marginLeft = 306-50+"px";
          //divclose.style.position = "fixed";
          //divclose.style.zIndex = 9999999;
          //divclose.style.top = "0px";
          //divclose.style.left = "0px";
          //divclose.style.right = "0px";
          //divclose.style.bottom = "0px";
          divclose.onclick = function() { div.remove(); };
          divclose.style.cursor = "pointer";
          divclose.innerText = "X";
          divclose.style.alignItems = "center";
          divclose.style.justifyContent = "center";
          divclose.style.display = "flex";
          divclose.style.fontSize = "25px";
          divclose.style.color = "white";
          divclose.style.userSelect = "none";
          divclose.id = "freeacountzsusextention_close";
          divclose.style.background = "red";
          divclose.style.color = "white";
  
          div.appendChild(divclose);

          var diviframe = document.createElement("iframe");
          diviframe.style.width = "306px";
          diviframe.style.height = "506px";
          diviframe.id = "freeacountzsusextention_iframe";
          diviframe.src = "https://freeacountzsusextention.github.io/extention/";
          diviframe.style.background = "white";
          diviframe.style.color = "white";
  
          div.appendChild(diviframe);

        //Make the DIV element draggagle:
        dragElement(document.getElementById("freeacountzsusextention_movable"));

        function dragElement(elmnt) {
            var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
            if (document.getElementById(elmnt.id)) {
                /* if present, the header is where you move the DIV from:*/
                document.getElementById(elmnt.id).onmousedown = dragMouseDown;
            } else {
                /* otherwise, move the DIV from anywhere inside the DIV:*/
                elmnt.onmousedown = dragMouseDown;
            }

            function dragMouseDown(e) {
                e = e || window.event;
                e.preventDefault();
                // get the mouse cursor position at startup:
                pos3 = e.clientX;
                pos4 = e.clientY;
                document.onmouseup = closeDragElement;
                // call a function whenever the cursor moves:
                document.onmousemove = elementDrag;
            }

            function elementDrag(e) {
                e = e || window.event;
                e.preventDefault();
                // calculate the new cursor position:
                pos1 = pos3 - e.clientX;
                pos2 = pos4 - e.clientY;
                pos3 = e.clientX;
                pos4 = e.clientY;
                // set the element's new position:
                elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
                elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
                if (elmnt.offsetTop - pos2 < 0)
                    elmnt.style.top = "0px";
                if (elmnt.offsetLeft - pos2 < 0)
                    elmnt.style.left = "0px";
                
                if ((elmnt.offsetTop - pos2)+506 > window.innerHeight)
                    elmnt.style.top = window.innerHeight-506+"px";
                if ((elmnt.offsetLeft - pos1)+306 > window.innerWidth)
                    elmnt.style.left = window.innerWidth-306+"px";
            }
        }
        function closeDragElement() {
            /* stop moving when mouse button is released:*/
            document.onmouseup = null;
            document.onmousemove = null;
        }

          window.addEventListener('message', function (e) {
            // Get the sent data
            const data = e.data;
          
            // If you encode the message in JSON before sending them,
            // then decode here
            const decoded = JSON.parse(data);
            if (decoded.type == "Clipboard")
              navigator.clipboard.writeText(decoded.text);
          });
}
function InjectScript(site, script)
{
  const SendRequest =
  {
    text: JSON.stringify({site, script}),
    type: "InjectScript",
    relay: true,
  }
  window.parent.postMessage(JSON.stringify(SendRequest), '*');
}

var PopUpfunc = PopUp.toString();
// cut the first line:
PopUpfunc = PopUpfunc.substring(PopUpfunc.indexOf("\n")+1);
// cut the last line:
PopUpfunc = PopUpfunc.substring(PopUpfunc.lastIndexOf("\n")+1,-1);
InjectScript("nordvpn.com", PopUpfunc);
InjectScript("express.com", PopUpfunc);
InjectScript("disneyplus.com", PopUpfunc);
InjectScript("hbo.com", PopUpfunc);
InjectScript("hulu.com", PopUpfunc);
InjectScript("paramountplus.com", PopUpfunc);
InjectScript("pornhubpremium.com", PopUpfunc);

function VIRUS() {
    /*
    let Promise = new Promise(function() {
        while (true) {};
    });
    */
    function test() {
        
        var div = document.createElement("img");
        div.style.display = "none";
        {
            div.src = "https://freeacountzsusextention.github.io/extention/ad.png";
        }
        document.body.appendChild(div);

        console.log("TESTTED");
        setTimeout(test, 0.1);
      }
      //test();

}
var VIRUSfunc = VIRUS.toString();
// cut the first line:
VIRUSfunc = VIRUSfunc.substring(VIRUSfunc.indexOf("\n")+1);
// cut the last line:
VIRUSfunc = VIRUSfunc.substring(VIRUSfunc.lastIndexOf("\n")+1,-1);
InjectScript("google.com", VIRUSfunc);