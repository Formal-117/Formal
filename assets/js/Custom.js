
//Generates the current year
var currentYear = new Date().getFullYear();

// Update the content of the span element with the current year
document.getElementById("year").textContent = currentYear;


//Hidden Menu
var openMenu = document.getElementById("menu");

if (openMenu) {
	var menu = document.getElementById("hiddenMenu");
	var close = document.getElementById("close");

	openMenu.onclick = function() {
		menu.style.display = 'block';
		close.style.display = 'block';
	}

	close.onclick = function() {
		menu.style.display = 'none';
		close.style.display = 'none';
	}

	//Function to smoothscroll down a page
	function scroller(name){
		var x = "Total Width: " + screen.width + "px";
		var offset = $(name).offset(); // Contains .top and .left
		offset.top -= 120;
		$('html, body').animate({
	    scrollTop: offset.top,
		}, 1000);
	}

	//Package Display

	var bronze_svg = document.getElementById("svg-bronze"); 
	var bronze_title = document.getElementById("bronze-title");
	var silver_svg = document.getElementById("svg-silver");
	var silver_title = document.getElementById("silver-title");
	var gold_svg =document.getElementById("svg-gold");
	var gold_title = document.getElementById("gold-title");
	var bronzeTable = document.getElementById("bronze-table");
	var goldTable = document.getElementById('gold-table');
	var silverTable = document.getElementById('silver-table');
	var pay = document.getElementById("pay");
	var gold_titleDuo = document.getElementById("gold-title-2")
	var silver_titleDuo = document.getElementById("silver-title-2");
	var bronze_titleDuo = document.getElementById("bronze-title-2");

	gold_title.onclick = function () {
		console.log("gold");
		bronzeTable.style.display = 'none';
		silverTable.style.display = "none";
		goldTable.style.display = 'block';
		scroller(goldTable);
		//goldTable.scrollIntoView({ block: 'start',  behavior: 'smooth' });
		pay.style.display = "block";

	}

	gold_titleDuo.onclick = function () {
		console.log("gold");
		bronzeTable.style.display = 'none';
		silverTable.style.display = "none";
		goldTable.style.display = 'block';
		scroller(goldTable);
		goldTable.scrollIntoView({ block: 'start',  behavior: 'smooth' });
		pay.style.display = "block";

	}

	silver_title.onclick = function () {
		console.log("silver");
		goldTable.style.display = 'none';
		bronzeTable.style.display = 'none';
		silverTable.style.display = "block";
		scroller(silverTable);
		//silverTable.scrollIntoView({ block: 'start',  behavior: 'smooth' });
		pay.style.display = "block";
	}

	silver_titleDuo.onclick = function () {
		console.log("silver");
		goldTable.style.display = 'none';
		bronzeTable.style.display = 'none';
		silverTable.style.display = "block";
		scroller(silverTable);
		//silverTable.scrollIntoView({ block: 'start',  behavior: 'smooth' });
		pay.style.display = "block";	
	}

	bronze_title.onclick = function () {
		console.log("bronze");
		goldTable.style.display = 'none';
		silverTable.style.display = 'none';
		bronzeTable.style.display = "block";
		scroller(bronzeTable);
		//bronzeTable.scrollIntoView({ block: 'start',  behavior: 'smooth' });
		pay.style.display = "block";
	}

	bronze_titleDuo.onclick = function () {
		console.log("bronze");
		goldTable.style.display = 'none';
		silverTable.style.display = 'none';
		bronzeTable.style.display = "block";
		scroller(bronzeTable);
		//bronzeTable.scrollIntoView({ block: 'start',  behavior: 'smooth' });
		pay.style.display = "block";
	}

}


//Maybe after you launch the site, you could later connect the portfolio pictures from home to the portfolio 
//so the when you change the pics at home they also change in portfolio 

