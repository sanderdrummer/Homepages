<?php
$path= getcwd();
$pics = array();
if ($handle = opendir('/xampp/htdocs/ctc-2015/app/public/img')) {

    /* Das ist der korrekte Weg, ein Verzeichnis zu durchlaufen. */
    while (false !== ($entry = readdir($handle))) {
        if ($entry != "." && $entry != ".."){
        	$entry = $path.'/'.$entry;
        	array_push($pics, $entry);
        }
    }
    echo json_encode($pics);
}