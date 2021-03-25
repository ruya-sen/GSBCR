<?php
 $cnx = new PDO('mysql:host=localhost;dbname=gsbrapports', 'root','');
 $sql = "select * FROM medecin";
 $sth = $cnx->prepare($sql);
 $sth->execute();
 $tabmedecin = $sth->fetchAll(PDO::FETCH_CLASS);
 $desMedecins = json_encode($tabmedecin);
 echo $desMedecins;