<?php


class Parser{
	public static function serverPostRequest($serverName, $paramsArray){
		$url = "http://54.233.97.105/Camino/HostelService.svc/".$serverName;
		$headers = array('Content-Type' => 'application/json');
		$response = Requests::post($url, $headers, json_encode($paramsArray));		
		$json_string = json_encode($response->body, JSON_PRETTY_PRINT);
		var_dump($paramsArray);
		return json_decode($response->body, true);

	}

}
