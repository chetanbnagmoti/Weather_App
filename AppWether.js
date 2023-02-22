var button = document.querySelector(".button");
var inputValue = document.querySelector(".inputValue");
var name1 = document.querySelector(".name1");
var firstdate = document.querySelector(".firstdate");
var seconddate = document.querySelector(".seconddate");
var thireddate = document.querySelector(".thireddate");
var fourthdate = document.querySelector(".fourthdate");
var sixthdate = document.querySelector(".sixthdate");
var t1 = document.querySelector(".t1");
var t2 = document.querySelector(".t2");
var t3 = document.querySelector(".t3");
var t4 = document.querySelector(".t4");
var t5 = document.querySelector(".t5");
var t6 = document.querySelector(".t6");
var t7 = document.querySelector(".t7");
var t8 = document.querySelector(".t8");
var t9 = document.querySelector(".t9");
var t10 = document.querySelector(".t10");
var t11 = document.querySelector(".t11");
var t12 = document.querySelector(".t12");
var t13 = document.querySelector(".t13");
var t14 = document.querySelector(".t14");
var t15 = document.querySelector(".t15");
var t16 = document.querySelector(".t16");
var t17 = document.querySelector(".t17");
var t18 = document.querySelector(".t18");
var t19 = document.querySelector(".t19");
var t20 = document.querySelector(".t20");

button.addEventListener("click", function () {
  fetch(
    "https://api.openweathermap.org/data/2.5/forecast?q=" +
      inputValue.value +
      "&appid={API KEY}"
  )
    .then((response) => response.json())
    .then((data) => {

      var nameValue = data.city.name;

      var sixthdatevalue = myDate(data.list[0].dt_txt) ;
      var fidatevalue = myDate(data.list[10].dt_txt) ;
      var secdatevalue = myDate(data.list[16].dt_txt) ;
      var thirdatevalue = myDate( data.list[25].dt_txt);
      var foudatevalue =myDate(data.list[30].dt_txt) ;   
	    
    //  console.log(data);

      var t17value = data.list[0].main.temp;
      var t18value = data.list[0].main.humidity;
      var t19value = data.list[0].wind.speed;
      var t20value = data.list[0].weather[0].description;

      var t1value = data.list[10].main.temp;
      var t2value = data.list[10].main.humidity;
      var t3value = data.list[10].wind.speed;
      var t4value = data.list[10].weather[0].description;

      var t5value = data.list[16].main.temp;
      var t6value = data.list[16].main.humidity;
      var t7value = data.list[16].wind.speed;
      var t8value = data.list[16].weather[0].description;

      var t9value = data.list[25].main.temp;
      var t10value = data.list[25].main.humidity;
      var t11value = data.list[25].wind.speed;
      var t12value = data.list[25].weather[0].description;

      var t13value = data.list[30].main.temp;
      var t14value = data.list[30].main.humidity;
      var t15value = data.list[30].wind.speed;
      var t16value = data.list[30].weather[0].description;

      sixthdate.innerHTML = sixthdatevalue;
      firstdate.innerHTML = fidatevalue;
      seconddate.innerHTML = secdatevalue;
      thireddate.innerHTML = thirdatevalue;
      fourthdate.innerHTML = foudatevalue;

      name1.innerHTML = nameValue;

      t1.innerHTML = diff(t1value) + "°C";
      t2.innerHTML = t2value + "%rh";
      t3.innerHTML = t3value + "m/s";
      t4.innerHTML = t4value;

      t5.innerHTML = diff(t5value) + "°C";
      t6.innerHTML = t6value + "%rh";
      t7.innerHTML = t7value + "m/s";
      t8.innerHTML = t8value;

      t9.innerHTML = diff(t9value) + "°C";
      t10.innerHTML = t10value + "%rh";
      t11.innerHTML = t11value + "m/s";
      t12.innerHTML = t12value;

      t13.innerHTML = diff(t13value) + "°C";
      t14.innerHTML = t14value + "%rh";
      t15.innerHTML = t15value + "m/s";
      t16.innerHTML = t16value;

      t17.innerHTML = diff(t17value) + "°C";
      t18.innerHTML = t18value + "%rh";
      t19.innerHTML = t19value + "m/s";
      t20.innerHTML = t20value;

      
    })

   .catch((err) => alert("Worng city enter !!!! "));

  });



var diff = (a) => {
  return (a - 273.15).toFixed(2);
};

var myDate=function(dt){
  const date =new Date(dt);
  return date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear();
}
