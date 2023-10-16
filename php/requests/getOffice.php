<?php
include_once ("../link.php");
if (isset($_GET)){
    $id=$_GET["id"];
    $query=mysqli_query($link,"SELECT id_departments_info , otdel_name FROM departments_info WHERE departments_id=$id ");
    $result=[];
    while ($row = mysqli_fetch_assoc($query)){
    array_push($result,array("id"=>$row["id_departments_info"],"name"=>$row["otdel_name"]));
    }
    echo json_encode($result);
}
?>