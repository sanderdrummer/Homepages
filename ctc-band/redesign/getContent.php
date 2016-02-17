<?php
$file = './public/news.json';
$news = file_get_contents($file, true);
$news .= "John Smith\n";
file_put_contents($file, $news);
echo $news;