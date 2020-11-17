<!DOCTYPE html>
<html lang="fr">
<head>
	<title>MFP SEMAINE DE L'ACCESSIBILITE</title>
	<meta charset="UTF-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
	<!-- Liaisons aux fichiers css de Bootstrap -->
	<link href="dist/css/bootstrap.min.css" rel="stylesheet" />
	<link href="dist/css/bootstrap-theme.min.css" rel="stylesheet" />
	<!-- HTML5 shiv and Respond.js IE8 support of HTML5 elements and media queries -->
	<!--[if lt IE 9]>
	  <script src="assets/js/html5shiv.js"></script>
	  <script src="assets/js/respond.min.js"></script>
	<![endif]-->
</head>
<body style="margin-left:3%;margin-right:3%">
<br />
<div><img src="LUTINLOGO.jpg" width="180px" /></div>
<h2>MFP SEMAINE DE L'ACCESSIBILITE</h2>
<h3>Sourds et Malentendants</h3>
<form role="form" action="read_q_access.php">
<br />
<button type="submit" class="btn btn-success"> Téléchager les questionnaires</button>
<br /><br />
<?php
	require_once("inc/connectMySqlW.php");
	$base=connect();
	
// enregistrements
	$query = "SELECT COUNT(*) FROM Quest";
	$result = $base->query($query);
	$data = $result->fetch_array(MYSQLI_NUM);
	echo "<i>Nombre de questionnaires enregistrés: </i><strong style='font-size:1.3em'>", $data[0], "</strong><br />";
	echo "<i>Dernier questionnaire:</i><br />";
	
	$query = "SELECT _date, _time, `_client-IP`, profession, age, _version FROM Quest ORDER BY id DESC LIMIT 1";
	$result = $base->query($query);
	$data = $result->fetch_array(MYSQLI_NUM);
	echo '<strong>', $data[0], '&nbsp;&nbsp;&nbsp;', $data[1], '</strong>', "<br />", $data[2], "<br />", "Profession: ", $data[3], "<br />", "Age: ", $data[4], "<br />", $data[5], "<br /><br />";
	
// connections	
	$query = "SELECT COUNT(*) FROM Connection";
	$result = $base->query($query);
	$data = $result->fetch_array(MYSQLI_NUM);
	echo "<i>Nombre de visites: </i><strong style='font-size:1.3em'>", $data[0], "</strong><br />";
	echo "<i>Dernière visite:</i><br />";
	
	$query = "SELECT date, time, clientIP, version FROM Connection ORDER BY id DESC LIMIT 1";
	$result = $base->query($query);
	$data = $result->fetch_array(MYSQLI_NUM);
	echo '<strong>', $data[0], '&nbsp;&nbsp;&nbsp;', $data[1], '</strong>', "<br />", $data[2], "<br />", $data[3], "<br /><br />";
//	
	echo "<script>";
	echo "setTimeout(function() {location.href = 'data.php'},60000);";
	echo "</script>";
?>
<br />
<i style="color:#AAA; background:white; border:0px">Sébastien Poitrenaud pour LutinUserlab</i>
</form>
</body>
</html>