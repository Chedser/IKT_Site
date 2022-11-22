$(document).ready(function(){

 //Переход по ссылкам панели навигации
  $.each($(".menuitem"),function(index, value){
	
		value.onclick = function(){
			window.location.replace(value.dataset.link);
		
		}; 
	
	});
  
  });