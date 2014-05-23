<?php
#
# Requires 
# Mobile_Detect.php, util.php
#
require_once 'lib/Mobile_Detect.php';
require_once 'lib/util.php';

// Read the JSON data
$data = file_get_contents("./assets/data/data.json");
$json = json_decode($data, true);


$detect = new Mobile_Detect;
$base_href = get_base_href();

// Any mobile device (phones or tablets).
$isMobile = $detect->isMobile();

// Any tablet device.
$isTablet = $detect->isTablet();

// Platfrom detections
$isApple = $detect->isiOS(); 
$isAndroid = $detect->isAndroidOS();

// Mobile excluding tablets.
$isPhone = ($isMobile && !$isTablet);

// redirect desktop browsers
if($isMobile && !$isTablet){
    header('Location: '.$json['redirect']['mobile']);
}

$className = ( $isPhone ? "phone" : ( $isTablet ? "tablet" : "desktop" ) );


// $baseHref = get_base_href();
$scraper = is_scraper($_SERVER['HTTP_USER_AGENT']);

$q = (isset($_GET['escape_frag'])) ? $_GET['escape_frag']: null ;
$sanitize = filter_var($q, FILTER_SANITIZE_URL);
$arr = explode("/", $sanitize);

$og = $json['meta'];

$og['url'] = $base_href . '' . $sanitize;

if (in_array("home", $arr)) {
    $og['title'] .= "";
}
if (in_array("photos", $arr)) {
    $og['title'] .= " | photos";
}

if (in_array("about", $arr)) {
    $og['title'] .= " | about";
}
if (in_array("videos", $arr)) {
    $og['title'] .= " | videos";
}


#EOF