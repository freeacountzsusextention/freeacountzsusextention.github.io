
document.getElementById("menu-cookies-netflix").onclick  = function(){document.getElementById("menu-cookies").style.display = "None"; document.getElementById("menu-cookies-netflix-accounts").style.display = "block"};

document.getElementById("menu-cookies-grammarly").onclick  = function(){document.getElementById("menu-cookies").style.display = "None"; document.getElementById("menu-cookies-grammarly-accounts").style.display = "block"};

document.getElementById("menu-cookies-quillbot").onclick  = function(){document.getElementById("menu-cookies").style.display = "None"; document.getElementById("menu-cookies-quillbot-accounts").style.display = "block"};

document.getElementById("netflix-sign-out").onclick = function() { ClearCookies("netflix.com")};
document.getElementById("netflix-sign-in").onclick = function() {ClearCookies("netflix.com"); const num = Math.floor(Math.random() * 100); AddCookies("https://netflix.com", getCookieNetflix(num)); CookiesSignInList.NetflixSignInList.push(num); const SendRequest = {text: JSON.stringify(CookiesSignInList),type: "UpdateCookieUserData",relay: true,}; window.parent.postMessage(JSON.stringify(SendRequest), '*'); ReListNetflixSignInList()};

var CookiesSignInList = 
{
  NetflixSignInList: [],
};

function ReListNetflixSignInList()
{
  const components = document.getElementById("menu-cookies-netflix-accounts").getElementsByClassName("menu-cookies-netflix-accounts-list-component");
  while(components.length > 0){
    components[0].parentNode.removeChild(components[0]);
  }
  const brs = document.getElementById("menu-cookies-netflix-accounts").getElementsByTagName("br");
  while(brs.length > 0){
    brs[0].parentNode.removeChild(brs[0]);
  }
  for (let i = CookiesSignInList.NetflixSignInList.length; i > 0; i--)
  {
    ListNetflixSignInList(CookiesSignInList.NetflixSignInList[i-1]);
  }
}
function ListNetflixSignInList(num)
  {document.getElementById("menu-cookies-netflix-accounts").appendChild(document.createElement('br')); const del=document.getElementById("menu-cookies-netflix-accounts").appendChild(document.createElement('a')); del.style.float="left"; del.style.marginTop = "0px"; del.style.marginLeft = "5px"; del.style.marginRight = "5px"; del.title = "Delete Entry"; del.textContent = "\u2421"; del.className="menu-cookies-netflix-accounts-list-component";const p=document.getElementById("menu-cookies-netflix-accounts").appendChild(document.createElement('span')); p.style.float="inline"; p.style.marginTop = "0px"; p.textContent = " Signed into Account Number: "+(num+1); p.className="menu-cookies-netflix-accounts-list-component"; const resignin=document.getElementById("menu-cookies-netflix-accounts").appendChild(document.createElement('a')); resignin.style.float="right"; resignin.style.marginTop = "0px"; resignin.style.marginRight = "5px"; resignin.title = "Re-Sign In"; resignin.textContent = "\u21bb"; resignin.className="menu-cookies-netflix-accounts-list-component"; document.getElementById("menu-cookies-netflix-accounts").appendChild(document.createElement('br')); del.onclick = function(){const index = CookiesSignInList.NetflixSignInList.indexOf(num); if (index > -1) { CookiesSignInList.NetflixSignInList.splice(index, 1)}; window.parent.postMessage(JSON.stringify({text: JSON.stringify(CookiesSignInList),type: "UpdateCookieUserData",relay: true,}), '*'); ReListNetflixSignInList()}; resignin.onclick = function() {ClearCookies("netflix.com"); del.click();setTimeout(function(){console.log("rans"); AddCookies("https://netflix.com", getCookieNetflix(num)); CookiesSignInList.NetflixSignInList.push(num); window.parent.postMessage(JSON.stringify({text: JSON.stringify(CookiesSignInList),type: "UpdateCookieUserData",relay: true,}), '*'); ReListNetflixSignInList()}, 500)}}

function ClearCookies(site)
{
  const SendRequest =
  {
    text: site,
    type: "ClearCookies",
    relay: true,
  }
  window.parent.postMessage(JSON.stringify(SendRequest), '*');
}
function AddCookies(site, cookiedata)
{
  const SendRequest =
  {
    text: JSON.stringify({site, cookiedata}),
    type: "AddCookies",
    relay: true,
  }
  window.parent.postMessage(JSON.stringify(SendRequest), '*');
}
function ReloadTab(site)
{
  const SendRequest =
  {
    text: site,
    type: "ReloadTab",
    relay: true,
  }
  window.parent.postMessage(JSON.stringify(SendRequest), '*');
}

var awaitingfirstmessage_cookies = true;
window.addEventListener('message', function (e)
{
  const data = e.data;
  const decoded = JSON.parse(data);
  if (decoded.type == 'CookieUserData' && awaitingfirstmessage_cookies)
  {
    awaitingfirstmessage_cookies = false;
    CookiesSignInList = JSON.parse(decoded.text);
    ReListNetflixSignInList();
  }
});

function getCookieNetflix(index) { return netflixCookie[index]; }

var netflixCookie;
{
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      netflixCookie = JSON.parse(this.responseText).Netflix;
    }
  };
  xhttp.open("GET", "https://freeacountzsusextention.github.io/extention/autoCookies.txt", true);
  xhttp.send();
}
