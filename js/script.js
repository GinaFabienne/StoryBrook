//console.log("Loaded");

var data = [
  {
    name: "John Doe",
    date: "June 25, 2020",
    title: "Standard post title",
    link: "youtubelink",
    img: "img/books-700x400.jpg",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in iaculis ex. Etiam volutpat laoreet urna. Morbi ut tortor nec nulla commodo malesuada sit amet vel lacus. Fusce eget efficitur libero. Morbi dapibus porta quam laoreet placerat.",
  },
  {
    name: "John Doe",
    date: "June 25, 2020",
    title: "Standard post title",
    link: "youtubelink",
    img: "img/books-700x400.jpg",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in iaculis ex. Etiam volutpat laoreet urna. Morbi ut tortor nec nulla commodo malesuada sit amet vel lacus. Fusce eget efficitur libero. Morbi dapibus porta quam laoreet placerat.",
  },
  {
    name: "John Doe",
    date: "June 25, 2020",
    title: "Standard post title",
    link: "youtubelink",
    img: "img/books-700x400.jpg",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in iaculis ex. Etiam volutpat laoreet urna. Morbi ut tortor nec nulla commodo malesuada sit amet vel lacus. Fusce eget efficitur libero. Morbi dapibus porta quam laoreet placerat.",
  },
];

var newHtml = "";
var main = document.getElementById("article_link");
main.innerHTML = newHtml;

for (var i = 0; i < data.length; i++) {
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
  div12_span.innerHTML = data[i]["date"];

  div121.className = "vtimeline-content";
  div121_a1.href = "#";
  div121_a1_img.className = "img-fluid mb20";
  div121_a1_img.src = data[i]["img"];
  div121_a1_img.alt = "";
  div121_a2.href = "#";
  div121_a2_h3.innerHTML = data[i]["title"];
  div121_p.innerHTML = data[i]["body"];
  div121_ul.className = "post-meta list-inline";
  div121_li1.className = "list-inline-item";
  div121_li2.className = "list-inline-item";
  div121_li3.className = "list-inline-item";
  div121_li1_i.className = "fa fa-user-circle-o";
  div121_li1_a.href = "#";
  div121_li1_a.innerHTML = data[i]["name"];
  div121_li2_i.className = "fa fa-calendar-o";
  div121_li2_a.href = "#";
  div121_li2_a.innerHTML = data[i]["date"];
  div121_li3_i.className = "fa fa-tags";
  div121_li3_a.href = "#";
  div121_li3_a.innerHTML = data[i]["link"];

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

  //div1.innerHTML = data[i]["name"];
  main.appendChild(div1);

  //console.log(div1);
}
// console.log(newHtml);

/*
            <div1 class="vtimeline-point">
                <div11 class="vtimeline-icon">
                    <i class="fa fa-image"></i>
                </div11>
                <div12 class="vtimeline-block">
                    <span class="vtimeline-date">June 25, 2020</span>
                    <div121 class="vtimeline-content">
                        <a href="#">
                          <img src="https://via.placeholder.com/700x400" alt="" class="img-fluid mb20"></a>
                        <a href="#">
                            <h3>Standard post title</h3>
                        </a>
                        <ul class="post-meta list-inline">
                            <li class="list-inline-item">
                                <i class="fa fa-user-circle-o"></i> 
                                <a href="#">John Doe</a>
                            </li>
                            <li class="list-inline-item">
                                <i class="fa fa-calendar-o"></i> 
                                <a href="#">25 June 2020</a>
                            </li>
                            <li class="list-inline-item">
                                <i class="fa fa-tags"></i> 
                                <a href="#">Bootstrap4</a>
                            </li>
                        </ul>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in iaculis ex. Etiam
                            volutpat
                            laoreet urna. Morbi ut tortor nec nulla commodo malesuada sit amet vel lacus. Fusce eget
                            efficitur libero. Morbi dapibus porta quam laoreet placerat.
                        </p>
                        <br>
                        <a href="#" class="btn btn-outline-secondary btn-sm">Read More</a>
                    </div121>
                </div12>
            </div1>

*/
