<?php
class Activity{
	public $id;
	public $sourceId;
	public $sourceLogoUrl;
	public $linkUrl;
	public $title;
	public $subtitle;
	public $timeStamp;
	public $tags; //array
	public $stories;
	public $pending;
	public $approved;
	public $total;

	function __construct($dictionary){
		$this->id = $dictionary->_id;
		$this->sourceId = $dictionary->source->id;
		$this->sourceLogoUrl = $dictionary->source->logo;
		$this->linkUrl = $dictionary->link_url;
		$this->title = $dictionary->title;
		$this->subtitle = $dictionary->subtitle;
		$this->timeStamp = $dictionary->time_stamp;
		$this->tags = $dictionary->tags;
		$this->stories = $dictionary->stories;
		$this->pending = $dictionary->pending;
		$this->approved = $dictionary->approved;
		$this->total = $dictionary->total;
	}

	public static function getActivities(){
		$response = Parser::serverGetRequest('get-activities', '');
		$activities = "";
		foreach ($response as $activityAPI) {
			$activities[] = new Activity($activityAPI);
		}
		return $activities;

	}
	

}

