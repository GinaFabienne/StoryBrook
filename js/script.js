//console.log("Loaded");
var newdata;
var dataLenght;
var xhr = new XMLHttpRequest();
xhr.overrideMimeType("application/json");
xhr.open("GET", "data/data.json", true);
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status == "200") {
    var json = JSON.parse(xhr.responseText);
    // Use the `json` variable to access the parsed JSON data
    dataLenght = json["data"].length;
    newdata = json;
    buildArticles(newdata, dataLenght);
  }
};
xhr.send(null);

var main = document.getElementById("article_link");

function buildArticles(data, mydataLenght) {
  for (var i = 0; i < mydataLenght; i++) {
    //console.log(data["data"][i]["name"]);

    var div1 = document.createElement("div");

    var div11 = document.createElement("div");
    var div11_i = document.createElement("i");

    var div12 = document.createElement("div");
    var div12_span = document.createElement("span");

    var div121 = document.createElement("div");
    var div121_a1 = document.createElement("a");
    var div121_a1_img = document.createElement("img");
    var div121_a2 = document.createElement("a");
    var div121_a2_h3 = document.createElement("h3");
    var div121_a3 = document.createElement("a");
    var div121_ul = document.createElement("ul");
    var div121_li1 = document.createElement("ul");
    var div121_li1_i = document.createElement("i");
    var div121_li1_a = document.createElement("a");
    var div121_li2 = document.createElement("ul");
    var div121_li2_i = document.createElement("i");
    var div121_li2_a = document.createElement("a");
    var div121_li3 = document.createElement("ul");
    var div121_li3_i = document.createElement("i");
    var div121_li3_a = document.createElement("a");
    var div121_p = document.createElement("p");

    div1.className = "vtimeline-point";
    div11.className = "vtimeline-icon";
    div11_i.className = "fa fa-image";
    div11.appendChild(div11_i);
    div1.appendChild(div11);

    div12.className = "vtimeline-block";
    div12_span.className = "vtimeline-date";
    div12_span.innerHTML = data["data"][i]["date"];

    div121.className = "vtimeline-content";
    div121_a1.href = "#";
    div121_a1_img.className = "img-fluid mb20";
    div121_a1_img.src = data["data"][i]["img"];
    div121_a1_img.alt = "";
    div121_a2.href = "#";
    div121_a2_h3.innerHTML = data["data"][i]["title"];
    div121_p.innerHTML = data["data"][i]["body"];
    div121_ul.className = "post-meta list-inline";
    div121_li1.className = "list-inline-item";
    div121_li2.className = "list-inline-item";
    div121_li3.className = "list-inline-item";
    div121_li1_i.className = "fa fa-user-circle-o";
    div121_li1_a.href = "#";
    div121_li1_a.innerHTML = data["data"][i]["name"];
    div121_li2_i.className = "fa fa-calendar-o";
    div121_li2_a.href = "#";
    div121_li2_a.innerHTML = data["data"][i]["date"];
    div121_li3_i.className = "fa fa-tags";
    div121_li3_a.href = "#";
    div121_li3_a.innerHTML = data["data"][i]["link"];

    div121_li3.appendChild(div121_li3_i);
    div121_li3.appendChild(div121_li3_a);
    div121_li2.appendChild(div121_li2_a);
    div121_li2.appendChild(div121_li2_i);
    div121_li1.appendChild(div121_li1_i);
    div121_li1.appendChild(div121_li1_a);

    div121_ul.appendChild(div121_li1);
    div121_ul.appendChild(div121_li2);
    div121_ul.appendChild(div121_li3);

    div121_a1.appendChild(div121_a1_img);
    div121.appendChild(div121_a1);
    div121.appendChild(div121_a2);
    div121.appendChild(div121_a3);
    div121.appendChild(div121_ul);
    div121.appendChild(div121_p);

    div12.appendChild(div12_span);
    div12.appendChild(div121);
    div1.appendChild(div12);

    main.appendChild(div1);
  }
}
