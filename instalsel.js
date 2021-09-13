function instalSelenium()
{
    //getDiv
    if(document.getElementsByClassName("nd_div_content").length<6)
    {
    var first_div = document.getElementsByClassName("st_div");
    var second_div = document.getElementsByClassName("nd_div");


    var newdiv2 = document.createElement("div");
    var newdiv1 = document.createElement("div");
    var newp0 = document.createElement("p");
    var newp1 = document.createElement("p");
    var newp1_2 = document.createElement("p");
    var newp2 = document.createElement("p");
    var newp2_2 = document.createElement("p");

    //addDivs
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

    //reset code background color
    var code_background = document.getElementsByClassName("st_div")[0];
    code_background.style.background = "";
    code_background.style.borderRadius = "";
    code_background.style.marginLeft = "";

    //CSS

    var icon = document.getElementById("icon");
    var icons = icon.style;
    icon.innerHTML = "C# .NET SDK Core";
    icons.float = "left";

    var title = document.getElementById("title");
    var titles = title.style;
    title.innerHTML = "Instalation";
    titles.marginTop = "30px";
    titles.marginRight = "230px";
    //SeleniumWebsiteLink
    var navsect = document.getElementsByClassName("navsection");
    //navsect[0].style.color = "rgb(97 40 52)";
    //InTableContent
    //print
    allContents = document.getElementsByClassName("nd_div_content")
    //
    var text_webdriver = "Depending on which browser you are using you need to install web driver for it to communicate. Those will allow you to make orders for browser during tests. It's not hard, surely you will find them on browser's official site. Also you can find them on <i><a href='https://www.selenium.dev/downloads/' target='_blank'>Selenium Main Page</a></i>."
    var text_instal = "To start working with Selenium you need to get a tool that's called IDE(Integrated Development Enviroment). There's no need for exact one, just make sure it works with selenium. There's also an easier option, on <i><a href='https://www.selenium.dev/downloads/' target='_blank'>Selenium Webpage</a></i> you can download dedicated IDE for your browser."
    var text_libraries = "Guess you have installed previous tools at this point. Now you have to get libraries for web testing. .NET Framework <a href='https://www.nuget.org/packages/NUnit/' target='_blank'>NUnit</a> would be useful for example. You can find list of libraries at Scheme section."

    var texts = new Array("Install Compatibile IDE",text_instal,"Install Web Driver For Browser",text_webdriver,"Get Needed Libraries",text_libraries);



    for(i=0;i<document.getElementsByClassName("nd_div_content").length;i++)
    {
        content = document.getElementsByClassName("nd_div_content")[i].style;
        content.fontSize = "20px";
        content.fontStyle = "normal";
        content.textAlign = "center";
        content.marginLeft = "0px"
        content.marginTop = "10px";
        content.borderLeft = ""
        content.borderRight = ""
        content.color = "#7d7d8c";
        content.display="block";
        document.getElementsByClassName("nd_div_content")[i].innerHTML = texts[i]
    }

    //InTableText


    //NavButtons
    var buttons = document.getElementsByClassName("buttons");
    for(i=0;i<6;i++)
    {
    //buttons[i].style.color = "maroon";
    }

    var line = document.getElementById("navline").style;
    line.border = "1px solid #401010";
    //Beforetables
    var cont = document.getElementById("st_div_content");
    var conts = cont.style;
    cont.innerHTML = "Follow this steps:"
    conts.fontStyle = "italic";
    //MakeTables
    var secondcont = document.getElementsByClassName("nd_div");
    for(i=0;i<3;i++)
    {
    secondcont[i].style.borderLeft = "6px solid rgb(111, 26, 26)";
    secondcont[i].style.borderRight = "6px solid rgb(111, 26, 26)";
    secondcont[i].style.height = "360px";
    secondcont[i].style.width = "30%";
    secondcont[i].style.position = "absolute";
    secondcont[i].style.marginTop = "20px";
    secondcont[i].style.backgroundColor = "rgb(0,0,0,0.7)";
    }
    secondcont[0].style.marginLeft = "4%";
    secondcont[1].style.marginLeft = "34.5%";
    secondcont[2].style.marginLeft = "65%";
}
