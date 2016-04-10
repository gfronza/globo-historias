<?php
require_once 'vendor/autoload.php';
require_once 'classes/Parser.php';
require_once 'classes/Story.php';
if (isset($_GET['id'])) {
	$id = $_GET['id'];
	if (isset($_GET['action'])) {

	}

	$stories = Story::getStoriesByActivityId($id);
	?>
	<div class="container ">
		<div class="section">
			<div class="row">
				<div class="col s12 m12 white-text center">
					<h4>Globo Histórias Logo</h4>
				</div>
			</div>
			<div class="row">
	<?php
	for($j=0; $j<count($stories); $j++){
		$story = $stories[$j];
		if($j == 0){
			?>
			<div class="col s12 m9">
				<h5 class="" style="color:#a0a0a0;">Titulo teste</h5>
				<div class="video-player">
				  <div id="player"></div>
				  <script>
				    var player = new Clappr.Player({source: <?php echo $story->video_url;?>, parentId: "#player"});
				  </script>
				</div>
				<br>
				<div class="center">
					<a class="waves-effect waves-light btn red"><i class="material-icons right">close</i>Banir</a> | <a class="waves-effect waves-light btn grey"><i class="material-icons right">error_outline</i>Rejeitar</a> | <a class="waves-effect waves-light btn green"><i class="material-icons right">done</i>Aceitar</a>
				</div>
			</div>
			<?php
		}
		else{
			?>
			<div class="col s12 m3">
				<!-- row thumbnail -->
				<div class="row">
					<div class="col m5">
             			 <div class="thumbnail" style="background-image:url(<?php echo $story->story_thumb;?>);"></div>            
					</div>
					<div class="col m7 white-text small-title">Teste</div>
					<div class="divider"></div>
				</div>
			</div>	
			<?php
		}
	}
	?>

	


			</div>		
		</div>
	</div>

	<?php
}
?>


