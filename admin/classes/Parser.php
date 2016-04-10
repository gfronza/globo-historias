<?php

class Parser{
	public static function serverPostRequest($serverName, $paramsArray){
		$url = "http://localhost:3000/editor/".$serverName;
		$headers = array('Content-Type' => 'application/json');
		$response = Requests::post($url, $headers, json_encode($paramsArray));		
		$json_string = json_encode($response->body, JSON_PRETTY_PRINT);
		var_dump($paramsArray);
		return json_decode($response->body, true);

	}

	public static function serverGetRequest($serverName, $params){
		$response = Requests::get('http://localhost:3000/editor/'.$serverName);
		return json_decode($response->body);
	}

	public static function serverGetRequestWithId($serverName, $paramName, $value){
		$response = Requests::get('http://localhost:3000/editor/'.$serverName.'?'.$paramName.'='.$value);
		return json_decode($response->body);
	}	

}
