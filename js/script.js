 var imgs = Array.from( document.querySelectorAll(".carCard img"));
 var lightBox = document.getElementById("lightBoxId");
 var lightBoxDiv = document.getElementById("lightBoxDivId");
 var currentIndex =0;
 var nextBtn = document.getElementById("next");
 var prevBtn = document.getElementById("prev");
 var exitBtn = document.getElementById("exit");
 var feulType = document.getElementById("feulType");
 var noOfCylinder = document.getElementById("noOfCylinder");
 var maxTorque = document.getElementById("maxTorque");
 var transType = document.getElementById("transType");
 var fuelCapacity = document.getElementById("fuelCapacity");
 var engineDisp = document.getElementById("engineDisp");
 var seatCapacity = document.getElementById("seatCapacity");
 var bodyType = document.getElementById("bodyType");
 var carFeulType = ["Diesel","petrol","Diesel-petrol","Electric","Diesel","petrol"];
 var carNoOfCylinder = ["6","8","6","7","6", "8"];
 var carMaxTorque = ["600Nm@1200-3200rpm","800Nm","600Nm","700Nm","800Nm","900Nm"];
 var carEngineDisp = ["2925","3900","3000","3500","3400","4000"];
 var carBodyType = ["SUV","coupe","SUV","coupe","coupe","coupe"];


 for(var i=0; i< imgs.length ;i++)
 {
  imgs[i].addEventListener("click",function(eventInfo){
    currentIndex = imgs.indexOf(eventInfo.target);
    var imgSrc = eventInfo.target.getAttribute("src");
    document.getElementById("lightBoxImg").src=imgSrc;
    lightBox.style.display="flex"; 
    
  }) 
 }
 function nextSlide()
 {
  currentIndex++;

  if( currentIndex == imgs.length)
  {
    currentIndex =0;
  }

  var imgSrc = imgs[currentIndex].getAttribute("src");
    document.getElementById("lightBoxImg").src=imgSrc;

    for( var i=0; i<carFeulType.length ;i++)
    {
      document.getElementById("feulType").innerHTML = carFeulType[currentIndex];
      
    }

    for( var i=0; i<carNoOfCylinder.length ;i++)
    {
      document.getElementById("noOfCylinder").innerHTML = carNoOfCylinder[currentIndex];
      
    }

    for( var i=0; i<carMaxTorque.length ;i++)
    {
      document.getElementById("maxTorque").innerHTML = carMaxTorque[currentIndex];
      
    }

    for( var i=0; i<carEngineDisp.length ;i++)
    {
      document.getElementById("engineDisp").innerHTML = carEngineDisp[currentIndex];
      
    }

    for( var i=0; i<carBodyType.length ;i++)
    {
      document.getElementById("bodyType").innerHTML = carBodyType[currentIndex];
      
    }
 }
 function prevSlide()
 {
  currentIndex--;

  if( currentIndex < 0)
  {
    currentIndex = imgs.length-1;
  }

  var imgSrc = imgs[currentIndex].getAttribute("src");
    document.getElementById("lightBoxImg").src=imgSrc;

    for( var i=0; i<carFeulType.length ;i++)
    {
      document.getElementById("feulType").innerHTML = carFeulType[currentIndex];
      
    }

    for( var i=0; i<carNoOfCylinder.length ;i++)
    {
      document.getElementById("noOfCylinder").innerHTML = carNoOfCylinder[currentIndex];
      
    }

    for( var i=0; i<carMaxTorque.length ;i++)
    {
      document.getElementById("maxTorque").innerHTML = carMaxTorque[currentIndex];
      
    }

    for( var i=0; i<carEngineDisp.length ;i++)
    {
      document.getElementById("engineDisp").innerHTML = carEngineDisp[currentIndex];
      
    }

    for( var i=0; i<carBodyType.length ;i++)
    {
      document.getElementById("bodyType").innerHTML = carBodyType[currentIndex];
      
    }
 }



 function exitSlide()
 {
  lightBox.style.display="none";
 }
 

//  var shiftClick = false;
//  var aClick = false;

//  document.addEventListener("keydown",function(eventInfo){
//   if(eventInfo.code == "shiftLeft" && eventInfo.key =="a" )
//   {
//     shiftClick = true;
//     aClick =true;
//   }
//  })
//  document.addEventListener("keyup",function(eventInfo){
//   if(eventInfo.code == "shiftLeft")
//   {
//     shiftClick = false;
//   }
//  })
// function ashift(shiftClick,aClick)
// {
//   if(shiftClick== true && aClick== true)
//   {
//    window.alert("Ezayak");
//   }
// }
// ashift(shiftClick,aClick);


 exitBtn.addEventListener("click",exitSlide);
 prevBtn.addEventListener("click",prevSlide);

 nextBtn.addEventListener("click",nextSlide);
 document.body.style.backgroundImage = "url('')" ;



 

