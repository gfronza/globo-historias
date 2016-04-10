<?php
$activities = Activity::getActivities();

if(count($activities) > 0) {
	for($i=0; $i<count($activities); $i++){
		$activity = $activities[$i];
		if(($i%2) == 0){
			?>
			<div class="row">
			<?php
		}
		?>
	        <div class="col s12 m6">
	        	<div class="card-activity">
	        		<div class="row valign-wrapper" style="margin-bottom:0px;">
		        		<div class="col s12 m2 valign">
		        			 <img src="img/g1.png" alt="" class="circle" width="40">
		        		</div>
		        		<div class="col s12 m5 valign">
		        			<h6><?php echo $activity->title;?></h6>
		        		</div>
		        		<div class="col s12 m5 valign">
							<a href="#" class="open-modal" data-id="<?php echo $activity->id;?>"><?php echo $activity->total;?> Histórias</a>	
							<div class="divider"></div>
							<a href="" data-id="<?php echo $activity->id;?>"><?php echo $activity->pending;?> Novas Histórias</a>
		        		</div>
	        		</div>	        			        		
	        	</div>
	        </div>		
	     <?php
		if($i%2 != 0){
			?>
			</div>
			<?php
		}		
	}
}
?>

