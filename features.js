function features()
{
    if(document.getElementsByClassName("nd_div_content").length<6)
    {
    var fromStart = true;
    //addDivs
    var first_div = document.getElementsByClassName("st_div");
    var second_div = document.getElementsByClassName("nd_div");
    
    
    var newdiv2 = document.createElement("div");
    var newdiv1 = document.createElement("div");
    var newp0 = document.createElement("p");
    var newp1 = document.createElement("p");
    var newp1_2 = document.createElement("p");
    var newp2 = document.createElement("p");
    var newp2_2 = document.createElement("p");
    
    first_div[0].appendChild(newdiv1);
    newdiv1.classList.add("nd_div");
    
    second_div[1].appendChild(newp1);
    newp1.setAttribute("class", "nd_div_content");
    
    first_div[0].appendChild(newdiv2);
    newdiv2.classList.add("nd_div");
    
    second_div[2].appendChild(newp2);
    newp2.setAttribute("class", "nd_div_content");
    
    
    
    //addDivsContent
    second_div[0].appendChild(newp0);
    newp0.setAttribute("class", "nd_div_content");
    
    second_div[1].appendChild(newp1_2);
    newp1_2.setAttribute("class", "nd_div_content");
    
    second_div[2].appendChild(newp2_2);
    newp2_2.setAttribute("class", "nd_div_content");
    var titleLine = document.getElementById("navline").style;
    titleLine.border = "1px solid #401010";
    }

    //title
    var title = document.getElementById("title");
    var titles = title.style;
    title.innerHTML = "Helpful Features";
    titles.marginTop = "30px";
    titles.marginRight = "230px";

    var icon = document.getElementById("icon");
    var icons = icon.style;
    icon.innerHTML = "C# .NET SDK Core";
    icons.float = "left";

    //reset code background(st_div) color
    var code_background = document.getElementsByClassName("st_div")[0];
    code_background.style.background = "";
    code_background.style.borderRadius = "";
    code_background.style.marginLeft = "";

    //reset text if from start page
    var startPageText = document.getElementById("st_div_content");
    startPageText.innerHTML = "";


    //set divs style
    var secondcont = document.getElementsByClassName("nd_div");
    for(i=0;i<3;i++)
    {
    secondcont[i].style.borderLeft = "";
    secondcont[i].style.borderRight = "";
    secondcont[i].style.height = "";
    secondcont[i].style.width = "";
    secondcont[i].style.position = "";
    secondcont[i].style.marginLeft = "";
    secondcont[i].style.marginTop = "";
    secondcont[i].style.backgroundColor = "";
    }
    secondcont[1].style.marginLeft = "";
    secondcont[2].style.marginLeft = "";

    var firstLine = "<i>To visit official Selenium page click "+
    "<a href='https://www.selenium.dev/' target='_blank'>here</a>"+
    " or <a href='form.html'>here(pl)</a> to ask me about something!<br>"+
    "<hr id='navline'></hr></i>"

    var secondLine = "<b>Read more about Selenium at those links:</b><br>"+
    "<ul><li>"+
    "<a target='_blank' href='https://www.guru99.com/selenium-csharp-tutorial.html'>www.guru99.com/selenium-csharp-tutorial.html</a>"+
    "<li>"+
    "</ul><hr id='navline'></hr>"

    var thirdLine = "<b>Learn C# at:</b><br>"+
    "<ul><li>"+
    "<a target='_blank' href='https://docs.microsoft.com/pl-pl/dotnet/csharp/'>Microsoft C# Documentation</a>"+
    "<li>"+
    "</ul><hr id='navline'></hr>"

    var fourthLine = ""

    var fifthLine = ""

    var sixthLine = "<span id='hf_author'>Created by Mariusz Walczyk</span>"

    var comms = new Array(firstLine,secondLine,thirdLine,fourthLine,fifthLine,sixthLine)

    //set div contents
    for(i=0;i<document.getElementsByClassName("nd_div_content").length;i++)
    {
        content = document.getElementsByClassName("nd_div_content")[i].style;
        content.fontSize = "20px";
        content.fontStyle = "normal";
        content.textAlign = "center";
        content.marginTop = "10px";
        content.marginLeft = "80px"
        if(i==0 || i==1 || i==2)
        {
        content.borderLeft = "3px solid #015e67"
        content.borderRight = "3px solid #015e67"
        }
        content.color = "#7d7d8c";
        content.display = "block";
        document.getElementsByClassName("nd_div_content")[i].innerHTML = comms[i];
    }
}