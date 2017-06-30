"use strict"

var btn = document.getElementById("btn1");

btn.onclick = function () {
    var array = prompt("Введіть два числа через кому", "5,5");
    if(array != null){
        var arr=array.split(",");
        var rows = parseInt(arr[0]);
        var columns = parseInt(arr[1]);
        document.getElementById("tableToShow").innerHTML = tableBuilder(rows, columns);

    }
};

var tableBuilder = function (row, column) {
    var resultHtml = "<table>";
    for (let i = 0; i < row; i++) {
        resultHtml += "<tr>";
        for (let i = 0; i < column; i++) {
            resultHtml += "<td>place to fill</td>";
        }
        resultHtml += "</tr>";
    }

    resultHtml += "</table>";
    return resultHtml;
};






