<?php
include_once ("../link.php");
$query=mysqli_query($link,"SELECT id_departament, departament_name FROM departments");
$result=[];
while ($row = mysqli_fetch_assoc($query)){
array_push($result,array("id"=>$row["id_departament"],"name"=>$row["departament_name"]));
}
echo json_encode($result);

?>