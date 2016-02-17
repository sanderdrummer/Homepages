<?php
$path= getcwd();
$pics = array();
if ($handle = opendir('/ctc-band/redesign/public/img')) {

    /* Das ist der korrekte Weg, ein Verzeichnis zu durchlaufen. */
    while (false !== ($entry = readdir($handle))) {
        if ($entry != "." && $entry != ".."){
        	$entry = "http://redesign.ctc-band.com/public/img/".$entry;
        	array_push($pics, $entry);
        }
    }
    echo json_encode($pics);
}