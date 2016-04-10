<?php
require_once 'vendor/autoload.php';
require_once 'classes/Parser.php';
require_once 'classes/Activity.php';

include 'header.php';
?>
	  <nav class="light-blue lighten-1" role="navigation">
	    <div class="nav-wrapper container"><a id="logo-container" href="#" class="brand-logo">Globo Histórias</a>
	      <ul class="right hide-on-med-and-down">
	        <li><a href="#">Logout</a></li>
	      </ul>

	      <ul id="nav-mobile" class="side-nav">
	        <li><a href="#">Navbar Link</a></li>
	      </ul>
	      <a href="#" data-activates="nav-mobile" class="button-collapse"><i class="material-icons">menu</i></a>
	    </div>
	  </nav>

	  <div class="container">
	    <div class="section">
	      <div class="row">
	        <div class="col s12 m12 center">
	        	<h4>Moderação da aplicação</h4>
	        </div>
	       </div>



	      <div class="row">
	        <div class="col s12 m12 left">
	        	<h5>Hot tags</h5><br>
				 <div class="chip">
				    <img src="img/hashtag.png" alt="Contact Person">
				    HackathonGlobo
				  </div>	
				 <div class="chip">
				    <img src="img/hashtag.png" alt="Contact Person">
				    GrupoOito
				  </div>		
				 <div class="chip">
				    <img src="img/hashtag.png" alt="Contact Person">
				    SomosFoda
				  </div>		
				 <div class="chip">
				    <img src="img/hashtag.png" alt="Contact Person">
				    HackathonGlobo
				  </div>	
				 <div class="chip">
				    <img src="img/hashtag.png" alt="Contact Person">
				    GrupoOito
				  </div>		
				 <div class="chip">
				    <img src="img/hashtag.png" alt="Contact Person">
				    SomosFoda
				  </div>					  			  		          	
	        </div>
	       </div>
	       <br>
	      <div class="row">
	        <div class="col s12 m12 left">
	        	<h5>Notícias</h5>
	        </div>
	       </div>	       

	      <?php
	     include 'view/noticias.php';
	      ?>
		      

	      <div id="media"></div>
	    <br><br>

	  </div>
	</div>


<?php

include 'footer.php';
?>