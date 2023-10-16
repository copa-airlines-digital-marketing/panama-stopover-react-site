<?php
header('Content-Type: application/json');
header("Access-Control-Allow-Origin: *");

include('data-es.php');
include('data-en.php');

$get = (isset($_GET['get']) ? $_GET['get'] : 'restaurants');

$order = (isset($_GET['order']) && !empty($_GET['order'])) ? (int) $_GET['order'] : 0;
$filters = (isset($_GET['filters']) && !empty($_GET['filters'])) ? $_GET['filters'] : '';

$return = array();
$return['status'] = 'ok';
$return['error'] = null;
$return['data'] = array();
if ($get == 'onlyfilters') {

	// Spanish
	$norepeat = array();
	foreach ($restaurantsEs as $name => $datos) {
		foreach ($datos[0] as $key => $value) {
			if (!empty($value)) {
				if (!isset($norepeat[$value])) {
					$return['data']['es'][]  = $value;
					$norepeat[$value] = $value;
				}				
			}
		}
	}
	sort($return['data']['es']);

	// English
	$norepeat = array();
	foreach ($restaurantsEn as $name => $datos) {
		foreach ($datos[0] as $key => $value) {
			if (!empty($value)) {
				if (!isset($norepeat[$value])) {
					$return['data']['en'][]  = $value;
					$norepeat[$value] = $value;
				}				
			}
		}
	}
	sort($return['data']['en']);

} else {

	// Spanish
	$restaurants = $restaurantsEs;
	ksort($restaurants);
	if ($order === 1) {
		$restaurants = array_reverse($restaurants);
	}

	$filterTypes = array();
	if (!empty($filters)) {
		$filterTypes = explode('|', $filters);
	}
	if (!empty($filterTypes)) {
		$restaurantsFilters = array();
		foreach ($restaurants as $name => $datos) {
			foreach ($datos[0] as $key => $value) {
				if (in_array($value, $filterTypes)) {
					$restaurantsFilters[$name] = $datos;
				}
			}
		}
		$restaurants = $restaurantsFilters;
	}

	if (!empty($restaurants)) {
		foreach ($restaurants as $name => $datos) {
			$datos[] = ($name);
			$datos[1] = formatText($datos[1]);
			$return['data']['es'][]  = $datos;
		}		
	} else {
		$return['data']['es'] = array();
	}


	// English
	$restaurants = $restaurantsEn;
	ksort($restaurants);
	if ($order === 1) {
		$restaurants = array_reverse($restaurants);
	}

	$filterTypes = array();
	if (!empty($filters)) {
		$filterTypes = explode('|', $filters);
	}
	if (!empty($filterTypes)) {
		$restaurantsFilters = array();
		foreach ($restaurants as $name => $datos) {
			foreach ($datos[0] as $key => $value) {
				if (in_array($value, $filterTypes)) {
					$restaurantsFilters[$name] = $datos;
				}
			}
		}
		$restaurants = $restaurantsFilters;
	}

	if (!empty($restaurants)) {
		foreach ($restaurants as $name => $datos) {
			$datos[] = ($name);
			$datos[1] = formatText($datos[1]);
			$return['data']['en'][]  = $datos;
		}		
	} else {
		$return['data']['en'] = array();
	}

}
// echo "[" . json_encode($return) . "]";
echo json_encode($return);
exit;

echo '<pre>';	
var_dump($return);
echo '</pre>';



function formatText($text) {
	$str= mb_convert_case($text, MB_CASE_TITLE, "UTF-8");
	$words = explode(" ", $str);
	$result = "";
	foreach ($words as $w) {
		if(strlen($w) > 2){
			$result.=ucwords(strtolower($w)).' ';
		}else{
			$result.=strtolower($w).' ';
		}
	}
	return $result;
}
?>

<div>
	<div class="filter">
		<h4>Filtrar</h4>

		<span>Por orden alfabético</span>
		<ul>
			<li><input type="checkbox" name="order" value="0"> A - Z</li>
			<li><input type="checkbox" name="order" value="1"> Z - A</li>
		</ul>

		<span>Por tipo de comida</span>
		<ul>
			<li><a href="">Americana</a></li>
			<li><a href="">Asiática</a></li>
			<li><a href="">Bar/Pub/Cervecería</a></li>
		</ul>
	</div>
</div>


<div className="restaurant-card">
	<h3>Club de Playa</h3>
	<h6>Comida tradicional</h6>
	<ul>
		<li><strong>Dirección:</strong> Coronado, Hotel de la hotia</li>
		<li><strong>Teléfono:</strong> 2342-234234</li>
		<li><strong>Sitio web:</strong> <a href="http://lapcas">www.canlcasas.com</a></li>
	</ul>
</div>



<a href=""><img src="icon-filter.png" /></a>