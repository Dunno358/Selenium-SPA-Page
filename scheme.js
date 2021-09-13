function schemeView()
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
    title.innerHTML = "Scheme";
    titles.marginTop = "30px";
    titles.marginRight = "230px";

    //reset text if from start page
    var startPageText = document.getElementById("st_div_content");
    startPageText.style.fontStyle = "normal";
    startPageText.innerHTML = "C# Selenium Syntax Scheme for Google Chrome<br><hr id='navline'>";

    //set code background color
    var code_background = document.getElementsByClassName("st_div")[0];
    code_background.style.background = "#242424";
    code_background.style.borderRadius = "15px";
    code_background.style.padding = "5px";
    code_background.style.marginLeft = "15px"

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

    var icon = document.getElementById("icon");
    var icons = icon.style;
    icon.innerHTML = "C# .NET SDK Core";
    icons.float = "left";

    //set content   
    var color1 = "green";
    var color2="#650a69"; //purple
    var color3="#0a4e5c"; //blue
    var color4 = "#87440c"; //orange
    var color5 = "#24701a"; //light green
    var color6 = "#917613"; //yellow
    var color7="#5e0e08";//red
    var firstLine = "<pre><span style='color:"+color1+";'>using </span>"+
                    "<span style='color:"+color2+";'>NUnit.Framework;</span><br>"+
                    "<span style='color:"+color1+";'>using </span>"+
                    "<span style='color:"+color2+";'>OpenQA.Selenium;</span><br>"+
                    "<span style='color:"+color1+";'>using </span>"+
                    "<span style='color:"+color2+";'>OpenQA.Selenium.Chrome;</span><br>"+
                    "<span style='color:"+color1+";'>using </span>"+
                    "<span style='color:"+color2+";'>OpenQA.Selenium.Firefox;</span><br>"+
                    "<span style='color:"+color1+";'>using </span>"+
                    "<span style='color:"+color2+";'>System;</span><br>"+
                    "<span style='color:"+color1+";'>using </span>"+
                    "<span style='color:"+color2+";'>System.Collections.Generic;</span><br>"+
                    "<span style='color:"+color1+";'>using </span>"+
                    "<span style='color:"+color2+";'>System.Linq;</span><br>"+
                    "<span style='color:"+color1+";'>using </span>"+
                    "<span style='color:"+color2+";'>System.Text;</span><br>"+
                    "<span style='color:"+color1+";'>using </span>"+
                    "<span style='color:"+color2+";'>System.Threading.Tasks;</span></pre>"

    var secondLine = "<pre><span style='color:"+color3+";'>namespace</span> AnyNameHere<br>"+
                    "{<br>"+
                    "<span style='color:"+color3+";'>       class</span> AnyNameHere<br>"+						
                    "   {<br>"+
                    "<span style='color:"+color6+";'>       IWebDriver</span> driver;</pre>"

    var thirdLine = "<pre><span style='color:"+color5+";'>       [SetUp]</span><br>"+
    "<span style='color:"+color3+";'>               public void</span> startBrowser()<br>"+
    "       {<br>"+
    "           driver = <span style='color:"+color2+";'>new</span> ChromeDriver(<span style='color:"+color4+";'>'path | remember about //' or empty</span>);<br>"+
    "       }</pre>"

    var fourthLine = "<pre><span style='color:"+color5+";'>       [Test]</span><br>"+
    "<span style='color:"+color3+";'>               public void</span> test()<br>"+
    "       {<br>"+
    "           driver.<span style='color:"+color7+";'>Url</span> = <span style='color:"+color4+";'>'webpage url here'</span>;<br>"+
    "               |Test Code Here|<br>"+
    "       }</pre>"

    var fifthLine = "<pre><span style='color:"+color5+";'>        [TearDown]</span><br>"+
    "<span style='color:"+color3+";'>               public void</span> closeBrowser()<br>"+
    "        {<br>"+
    "           driver.<span style='color:"+color7+";'>Close()</span>;<br>"+
    "        }<br>"+
    "   }<br>"+
    "}</pre>"

    var sixthLine = ""

    var comms = new Array(firstLine,secondLine,thirdLine,fourthLine,fifthLine,sixthLine)


    //set div contents
    for(i=0;i<document.getElementsByClassName("nd_div_content").length;i++)
    {
        content = document.getElementsByClassName("nd_div_content")[i].style;
        content.fontSize = "17px";
        content.fontStyle = "normal";
        content.textAlign = "justify";
        content.marginTop = "10px";
        content.borderLeft = ""
        content.borderRight = ""
        content.marginLeft = "10%"
        content.color = "#7d7d8c";
        content.display = "block";
        document.getElementsByClassName("nd_div_content")[i].innerHTML = comms[i];
    }
}