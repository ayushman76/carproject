
function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
	  document.querySelector(".hatchback").style.display="block";
	   document.getElementById("tab").style.display="block";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
      document.getElementById("tab").style.display="block";
	
  }
  document.getElementById(cityName).style.display = "block";
  document.querySelector(".hatchback").style.display="none";
  document.getElementById("tab").style.display="block";
  evt.currentTarget.className += " active";
} 
 




