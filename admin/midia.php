<?php
include 'header.php';
?>
<script type="text/javascript" src="https://cdn.jsdelivr.net/clappr/latest/clappr.min.js"></script>
<div id="media">
<div class="container ">
	<div class="section">
		<div class="row">
			<div class="col s12 m12 white-text center">
				<h4>Globo Histórias Logo</h4>
			</div>
		</div>
		<div class="row">
			<div class="col s12 m9">
				<h5 class="" style="color:#a0a0a0;">Hackathon Globo</h5>
				<div class="video-player">
				  <div id="player"></div>
				  <script>
				    var player = new Clappr.Player({source: "http://your.video/here.mp4", parentId: "#player"});
				  </script>
				</div>
				<br>
				<div class="center">
					<a class="waves-effect waves-light btn red"><i class="material-icons right">close</i>Banir</a> | <a class="waves-effect waves-light btn grey"><i class="material-icons right">error_outline</i>Rejeitar</a> | <a class="waves-effect waves-light btn green"><i class="material-icons right">done</i>Aceitar</a>
				</div>
			</div>
			<div class="col s12 m3">
				<!-- row thumbnail -->
				<div class="row">
					<div class="col m5">
             			 <div class="thumbnail" style="background-image:url('http://freelinkedinbackgrounds.com/wp-content/uploads/2014/12/Nature-005.jpg');"></div>            
					</div>
					<div class="col m7 white-text small-title">Título próximo vídeo</div>
					<div class="divider"></div>
				</div>

				<!-- row thumbnail -->
				<div class="row">
					<div class="col m5">
             			 <div class="thumbnail" style="background-image:url('http://freelinkedinbackgrounds.com/wp-content/uploads/2014/12/Nature-005.jpg');"></div>            
					</div>
					<div class="col m7 white-text small-title">Título próximo vídeo</div>
					<div class="divider"></div>
				</div>

				<!-- row thumbnail -->
				<div class="row">
					<div class="col m5">
             			 <div class="thumbnail" style="background-image:url('http://freelinkedinbackgrounds.com/wp-content/uploads/2014/12/Nature-005.jpg');"></div>            
					</div>
					<div class="col m7 white-text small-title">Título próximo vídeo</div>
					<div class="divider"></div>
				</div>
			</div>			
		</div>		
	</div>
</div>
</div>