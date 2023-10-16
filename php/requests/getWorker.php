<?php
include_once ("../link.php");
if (isset($_GET)){
    $id=$_GET["id"];
    $query=mysqli_query($link,"SELECT name_employees FROM departments_employees WHERE departments_info_id=$id ");
    $result=[];
    while ($row = mysqli_fetch_assoc($query)){
    array_push($result,array("name"=>$row["name_employees"]));
    }
    echo json_encode($result);
}
?>