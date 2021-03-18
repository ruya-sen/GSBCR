<?php
 $cnx = new PDO('mysql:host=localhost;dbname=gsbrapports', 'root','');
 $sql = "select * FROM medicament";
 $sth = $cnx->prepare($sql);
 $sth->execute();
 $tabmedicament = $sth->fetchAll(PDO::FETCH_CLASS);
 $desMedicaments = json_encode($tabmedicament);
 echo $desMedicaments;