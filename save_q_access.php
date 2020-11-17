<?php
session_start();
require_once("inc/connectMySqlW.php");
header("content-type:text/plain; charset=utf-8");
$idcom=connect();
if (isset($_POST)) {
	$arrayKeys = array_keys($_POST);
	$query = "INSERT INTO Quest(`";
	$first = true;
	foreach ($arrayKeys as $key) {
		if (!$first) $query .= ", `";
		$first = false;
		$query .= $key . "`";
	}
	$query .= ", `_client-IP`";
	$query .= ") ";
	$query .= "VALUES('";
	$first = true;
	foreach ($arrayKeys as $key) {
		if (!$first) $query .= ", '";
		$first = false;
		$query .= $_POST[$key] . "'";
	}
	$query .= ", '" . $_SERVER['REMOTE_ADDR'] . "'";
	$query .= ")";
//	echo $query;
	$result = $idcom->query($query);
	if (!$result) {
		$err = $idcom->error;
		echo $err, " : ";
		echo $query;
	}
	else echo "Nous vous remercions d'avoir répondu à ce questionnaire. Vos réponses vont nous permettre d'améliorer notre service et de mieux répondre à vos attentes. Merci encore du temps que vous nous avez accordé. ";
}
?>