

// White Sedan
var modal = document.getElementById("WhiteSedan1")
var btn1 = document.getElementById("BtnWhiteSedan")
var btn2 = document.getElementById("BtnWhiteSedan2")
var span = document.getElementsByClassName("close")[0];


btn1.onclick = function() {
    modal.style.display = "block";
}

btn2.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
  }

window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

// Red Sedan
var modal1 = document.getElementById("RedSedan1")
var btn3 = document.getElementById("BtnRedSedan")
var btn4 = document.getElementById("BtnRedSedan2")
var span1 = document.getElementsByClassName("close")[0];

btn3.onclick = function() {
    modal1.style.display = "block";
}

btn4.onclick = function() {
    modal1.style.display = "block";
}

span1.onclick = function() {
    modal1.style.display = "none";
  }

window.onclick = function(event) {
    if (event.target == modal1) {
      modal1.style.display = "none";
    }
  }

// Black Sedan
var modal2 = document.getElementById("BlackPickup1")
var btn5 = document.getElementById("BlackPickup")
var btn6 = document.getElementById("BlackPickup2")
var span2 = document.getElementsByClassName("close")[0];

btn5.onclick = function() {
    modal2.style.display = "block";
}

btn6.onclick = function() {
    modal2.style.display = "block";
}

span2.onclick = function() {
    modal2.style.display = "none";
  }

window.onclick = function(event) {
    if (event.target == modal2) {
      modal2.style.display = "none";
    }
  }

// Blue SUV
var modal3 = document.getElementById("BlueSuv1")
var btn7 = document.getElementById("BlueSuv")
var btn8 = document.getElementById("BlueSuv2")
var span3 = document.getElementsByClassName("close")[0];

btn7.onclick = function() {
    modal3.style.display = "block";
}

btn8.onclick = function() {
    modal3.style.display = "block";
}

span3.onclick = function() {
    modal3.style.display = "none";
  }

window.onclick = function(event) {
    if (event.target == modal3) {
      modal3.style.display = "none";
    }
  }

// White Pickup
var modal4 = document.getElementById("WhitePickup1")
var btn9 = document.getElementById("WhitePickup")
var btn10 = document.getElementById("WhitePickup2")
var span4 = document.getElementsByClassName("close")[0];

btn9.onclick = function() {
    modal4.style.display = "block";
}

btn10.onclick = function() {
    modal4.style.display = "block";
}

span4.onclick = function() {
    modal4.style.display = "none";
  }

window.onclick = function(event) {
    if (event.target == modal4) {
      modal4.style.display = "none";
    }
  }

document.getElementById("SubmitQuote").addEventListener("click", quoteFunc)



function quoteFunc(){


  var type = document.getElementById("Type").value;
  
  var model = document.getElementById("Model").value;
  var mileage = document.getElementById("Mileage").value;
  var color = document.getElementById("Color").value;
  var transmission = document.getElementById("Transmission").value;

    var quoteTotal;

    if (type == "1"){
      type = 5000;
    } else if (type == "2"){
      type = 8000;
    } else {
      type = 10000;
    }
    console.log(type)

    if (model == "1"){
      model = 3000;
    } else if (model == "2"){
      model = 4000;
    } else {
      model = 50000;
    }
    console.log(model)

    if (mileage == "1"){
      mileage = 3500;
    } else if (mileage == "2"){
      mileage = 2500;
    } else {
      mileage = 1000;
    }
    console.log(mileage)

    if (color == "1"){
      color = 300;
    } else if (color == "2"){
      color = 500;
    } else {
      color = 1000;
    }
    console.log(color)

    if (transmission == "1"){
      transmission = 300;
    } else if (transmission == "2"){
      transmission = 500;
    } else {
      transmission = 1000;
    }
    console.log(transmission)

    quoteTotal = type + model + mileage + color + transmission
    console.log(quoteTotal)

    var priceQuote = "Great selection your quote is $ ";
    var totalPriceQuote;
    totalPriceQuote = priceQuote.concat(quoteTotal)
    var para = document.createElement("P");
    para.className="text-center";
    para.innerText = totalPriceQuote;
    document.getElementById("QuoteModal").appendChild(para);


    
}

var modal5 = document.getElementById("QuoteDiv")
var btn11 = document.getElementById("SubmitQuote")
var span5 = document.getElementsByClassName("close")[0];

btn11.onclick = function() {
  modal5.style.display = "block";
}

span5.onclick = function() {
  modal5.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal5) {
    modal5.style.display = "none";
  }
}