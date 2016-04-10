<?php
class Story{
	public $id;
	public $video_url;
	public $story_url;
	public $story_thumb;
	public $tags;
	public $time_stamp;
	public $matched;
	public $matched_activities;
	public $banned;
	public $reviewed;
	public $reactions;

	function __construct($dictionary){
		$this->id = $dictionary->_id;
		$this->video_url = $dictionary->video_url;
		$this->story_thumb = $dictionary->story_thumb;
		$this->tags = $dictionary->tags;
		$this->time_stamp = $dictionary->time_stamp;
		$this->matched = $dictionary->matched;
		$this->matched_activities = $dictionary->matched_activities;
		$this->banned = $dictionary->banned;
		$this->reviewed = $dictionary->reviewed;
		$this->reactions = $dictionary->reactions;
	}

	public static function getStoriesByActivityId($id){
		$result = Parser::serverGetRequestWithId('get-stories-by-activity-id', 'activity_id', $id);
		$stories = "";
		foreach ($result as $storyAPI) {
			$stories[] = new Story($storyAPI);
		}
		return $stories;		
	}


	public static function approveStory($activity_id, $story_id){
		$paramsArray = array('activity_id' => $activity_id, 'story_id' => $story_id);
		$response = Parser::serverPostRequest('approve-story-for-activity', $paramsArray);
	}

	public static function banStory($story_id){
		$paramsArray = array('story_id' => $story_id);
		$response = Parser::serverPostRequest('ban_story', $paramsArray);
	}	

	public static function denyStory($activity_id, $story_id){
		$paramsArray = array('activity_id' => $activity_id, 'story_id' => $story_id);
		$response = Parser::serverPostRequest('deny-story-for-activity', $paramsArray);
	}



/*	$reactions
      "like": 4,
      "sad": 2,
      "love": 3,
      "angry": 2,
      "wow": 0

*/
}
