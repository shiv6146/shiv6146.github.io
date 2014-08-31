$(document).ready(function(){
/*about me*/	
	$("#top").click(function(event){
		$("#overlay").toggle("clip",function(){
			var title="About Me!!!";
			var body="<p>Hi, I'm Shiva shankar, pursuing my undergrad in CSE, at SASTRA University.</p><p>I hail from the Oxford of South India, Tirunelveli, but people better know it as Halwa City!!!:)</p><p>I am a guy, who always wanted to follow my passion, be it academics or sports.</p><p>Computers have always been on top of my fascination list, and that's why I love to explore and learn about them!!!</p><p>I find programming to be a fun-filled activity, and I always get a sense of satisfaction, when a piece of code that I write, accomplishes any certain task!!!:)</p><p>'If debugging is the process of removing software bugs, then programming must be the process of putting them in.'&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp-Edsger Dijkstra";
			var foot='<button id="btn">BACK</button>';
			$("#box div #box-head").html(title);
			$("#box div #box-body").html(body);
			$("#box div #box-foot").html(foot);
			$("#box").toggle("fold");
			$("#btn").click(function(event){
				$("#box").toggle("fold",function(){
					$("#overlay").toggle("clip");
				});
			});
		});
	});
/*interests*/
	$("#left").click(function(event){
		$("#overlay").toggle("clip",function(){
			var title="My Interests";
			var body="<p>PYTHON, is where it all started. I completed an introductory course on Python, offered by Coursera.</p><p>With its sleek syntax, I was obsessed with Python, and developed a strong grip over the language. I also have basic working knowledge in Java, C/C++.</p><p>I learnt to develop basic Android apps.</p><p>From there, I started to learn web development. I started off with the basics of HTML5, CSS3, JavaScript.</p><p>Being able to build very basic web apps, I started learning some basic backend stuff with PHP and Python :)</p><p>I also learnt a few frameworks to accomplish certain tasks in a quicker and an efficient manner, which include Bootstrap, jQuery, Django :)</p>";
			var foot='<a href="http://shiv6146.github.io/MemoryGame/index.html">Memory Game</a>&nbsp&nbsp&nbsp&nbsp&nbsp<a href="http://github.com/shiv6146">Github profile</a>&nbsp&nbsp&nbsp&nbsp&nbsp<button id="btn">BACK</button>';
			$("#box div #box-head").html(title);
			$("#box div #box-body").html(body);
			$("#box div #box-foot").html(foot);
			$("#box").toggle("fold");
			$("#btn").click(function(event){
				$("#box").toggle("fold",function(){
					$("#overlay").toggle("clip");
				});
			});
		});
	});
/*hobbies*/
	$("#right").click(function(event){
		$("#overlay").toggle("clip",function(){
			var title="My Hobbies";
			var body="<p>I firmly believe that, 'A healthy mind resides in a healthy body'. From my childhood, I have been brought up as a kid, who loves playing any sport for that matter.</p><p>I am a professional cricketer, and I have represented my district in several ocassions.</p><p>In addition to cricket, I also play badminton, table-tennis and basketball.</p><p>Other than sports, I love listening to music :)</p>";
			var foot='<button id="btn">BACK</button>';
			$("#box div #box-head").html(title);
			$("#box div #box-body").html(body);
			$("#box div #box-foot").html(foot);
			$("#box").toggle("fold");
			$("#btn").click(function(event){
				$("#box").toggle("fold",function(){
					$("#overlay").toggle("clip");
				});
			});
		});
	});
/*references*/
	$("#bottom").click(function(event){
		$("#overlay").toggle("clip",function(){
			var title="References";
			var body='<a href="https://www.facebook.com/shiva.shankar.94043626"><img src="img/fb.png" width="100px" height="100px"></a>&nbsp&nbsp&nbsp&nbsp<a href="https://www.linkedin.com/pub/shiva-shankar/69/108/24b"><img src="img/linkedin.png" width="100px" height="100px"></a>&nbsp&nbsp&nbsp&nbsp<a href="https://plus.google.com/+shivashankar6146"><img src="img/gplus.png" width="100px" height="100px"></a>&nbsp&nbsp&nbsp&nbsp<a href="https://twitter.com/shiv6146"><img src="img/twitter.png" width="100px" height="100px"></a>';
			var foot='<button id="btn">BACK</button>';
			$("#box div #box-head").html(title);
			$("#box div #box-body").html(body);
			$("#box div #box-foot").html(foot);
			$("#box").toggle("fold");
			$("#btn").click(function(event){
				$("#box").toggle("fold",function(){
					$("#overlay").toggle("clip");
				});
			});
		});
	});
});