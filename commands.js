function commands()
{
if(document.getElementsByClassName("nd_div_content").length<6)
{
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
}
var titleLine = document.getElementById("navline").style;
titleLine.border = "1px solid #401010";
var line="-------------------------------------------"
var firstLine = "<b style='color:#507282;'>Remember to add at the begging:</b><br>"+line+"<br>(Initialize Web Driver)<br>IWebDriver driver;"+
"<br>driver\t=\tnew ChromeDriver('path(//)' or empty);"

var secondLine = "<br><b style='color:#507282;'>Browser Commands</b><br>"
+line+
"<br>driver.Navigate().GoToUrl('url'); | Go to webpage<br>"+line+"<br>"+
"string webTitle = driver.Title; | Get title of current page<br>"+line+"<br>"+
"<br>string pageSource = driver.PageSource; | Get source code of current page<br>"+line+"<br>"+
"<br>driver.Close(); | Close recent browser instation<br>"+line+"<br>"+
"<br>driver.Quit(); | Close all browser instations<br>"+line+"<br>"+
"<br>driver.Navigate().Back(); | Go to previous page [uses browser history]<br>"+line+"<br>"+
"<br>driver.Navigate().Forward(); | Go to next page [uses browser history]<br>"+line+"<br>"+
"<br>driver.Navigate().Refresh(); | Refresh current page"

var thirdLine = "<b style='color:#507282;'>WebElements Commands | Beggining</b><br>"+line+line+"<br>Needed to all commands:"+
"<br>IWebElement element = driver.FindElement(By.xpath('xpath of WebElement'));"

var fourthLine = "<b style='color:#507282;'>WebElement Commands | Commands</b><br>"+line+"<br>"+
"element.Click(); | Simulate click on choosen element<br>"+line+"<br>"+
"element.Clear(); | Clear existing content of textbox element<br>"+line+"<br>"+
"element.SendKeys('AnyStringValue'); | Input a value onto textbox element<br>"+line+"<br>"+
"bool state = element.Displayed; | Definies if is element visible on page{true or false}<br>"+line+"<br>"+
"bool state = element.Enabled; | Definies if is element enabled on page{true or false}<br>"+line+"<br>"+
"bool state = element.Selected; | Definies if is element selected now{true or false}<br>"+line+"<br>"+
"element.submit(); | same as Click(), but works only with HTML type='submit'<br>"+line+"<br>"+
"string innerHTML = element.Text; | return text from innerHTML option(js) so it's value<br>"+line+"<br>"+
"string HTMLTagName = element.TagName; | return TagName of HTML Element<br>"+line+"<br>"+
"string Color = element.getCSSValue; | return element color [string is RGB value of color]<br>"

var fifthLine = "<b style='color:#507282;'>Dropdown Commands | Beggining</b><br>"+line+line+"<br>Needed to all commands:"+
"<br>IWebElement element = driver.FindElement(By.xpath('xpath of WebElement'));"+
"<br>SelectElement select = new SelectElement(element);"

var sixthLine = "<b style='color:#507282;'>Dropdown Commands | Commands</b><br>"+line+"<br>"+
"select.SelectByText('AnyString'); | Selects an option of dropdown based on given text<br>"+line+"<br>"+
"select.ByIndex('IndexAsStr'); | Selects option based on it's dropdown[StartsWith: 0]<br>"+line+"<br>"+
"select.SelectByValue('ValAsStr'); | Selects option based on it's option value<br>"+line+"<br>"+
"bool state = select.IsMultiple(); | This command is used to identify if a dropdown is a multi select dropdown{true,false}"

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
    content.color = "#7d7d8c";
    content.display = "none";
    content.borderLeft = ""
    content.borderRight = ""
    document.getElementsByClassName("nd_div_content")[i].innerHTML = comms[i]+"<hr class='commandsLine'>";
}


    //reset code background color
    var code_background = document.getElementsByClassName("st_div")[0];
    code_background.style.background = "";
    code_background.style.borderRadius = "";
    code_background.style.marginLeft = "";

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

//set title
var title = document.getElementById("title");
var titles = title.style;
title.innerHTML = "Commands";
titles.marginTop = "30px";
titles.marginRight = "230px";

//reset text if from start page
var startPageText = document.getElementById("st_div_content");
startPageText.innerHTML = "<button class='commBtn' onclick='changingDisplay(0)'><b>Beggining</b></button>&#9"+
"<button class='commBtn' onclick='changingDisplay(1)'><b>Browser Commands</b></button>&#9"+
"<button class='commBtn' onclick='changingDisplay(2)'><b>WebElements Commands | Begging</b></button>&#9"+
"<button class='commBtn' onclick='changingDisplay(3)'><b>WebElements Commands | Commands</b></button>&#9"+
"<button class='commBtn' onclick='changingDisplay(4)'><b>Dropdown Commands | Beggining</b></button>&#9"+
"<button class='commBtn' onclick='changingDisplay(5)'><b>Dropdown Commands | Commands</b></button>&#9"


//icon
var icon = document.getElementById("icon");
var icons = icon.style;
icon.innerHTML = "C# .NET SDK Core";
icons.float = "left";




}


function changingDisplay(number)
{
    for(i=0;i<document.getElementsByClassName("nd_div_content").length;i++)
    {
        content = document.getElementsByClassName("nd_div_content")[i].style;
        if(i==number)
        {
            if(content.display=="block")
            {
                content.display="none"
            }
            else
            {
                content.display="block";
            }
        }
        else
        {
            content.display = "none";
        }
    }

}