<?php
require_once 'vendor/autoload.php';
require_once 'classes/Parser.php';
require_once 'classes/Activity.php';
require_once 'classes/Story.php';
// unset($_SESSION['stories']);


	

	if(isset($_GET['action'])){
		$id = $_GET['activity_id'];
		$storyId = $_GET['story_id'];
		$storiesAPI = Story::getStoriesByActivityId($id);
		switch ($_GET['action']) {
			case 'approve':
				Story::approveStory($id, $storyId);				
				break;
			case 'ban':
				Story::banStory($storyId);
				break;
			case 'deny':
				Story::denyStory($id, $storyId);
				break;								
			default:
				break;
		}
	}

	



?>