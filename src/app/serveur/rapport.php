<?php
 $cnx = new PDO('mysql:host=localhost;dbname=gsbrapports', 'root','');
 $sql = "select * FROM rapport";
 $sth = $cnx->prepare($sql);
 $sth->execute();
 $tabrapport = $sth->fetchAll(PDO::FETCH_CLASS);
 $desRapports = json_encode($tabrapport);
 echo $desRapports;