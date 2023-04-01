function Click1() {
    var May1 = document.getElementById("computer1").classList;
    if(!May1.contains("hide"))
    {
        May1.add("hide");
    }
    else {
    May1.remove("hide");
    }
}

setInterval(function () {
    var En1 = document.getElementById("tbx_tag_Real").value;
    var En2 = document.getElementById("tbx_tag_Integer").value;
    var Cuongdo = document.getElementById("tbx_tag_Byte").value;
    var Time = document.getElementById("tbx_tag_Bool").value;
    var dotWork = document.getElementById("working").classList;
    var dotRest = document.getElementById("rest").classList;
    var dotNotwork = document.getElementById("notWork").classList;
    if (En1 > 0 || En2 > 0)
    {
        dotWork.add("dot__success");
        if(dotRest.contains("dot__success"))
        {
            dotRest.remove("dot__success");
            dotRest.add("dot__error");
        }
        if(dotNotwork.contains("dot__success"))
        {
            dotNotwork.remove("dot__success");
            dotNotwork.add("dot__error");
        }
    }
    else if (En1 == 0 && En2 == 0 && Cuongdo != 0)
    {
        dotRest.add("dot__success");
        if(dotWork.contains("dot__success"))
        {
            dotWork.remove("dot__success");
            dotWork.add("dot__error");
        }
        if(dotNotwork.contains("dot__success"))
        {
            dotNotwork.remove("dot__success");
            dotNotwork.add("dot__error");
        }
    }
    else if (Cuongdo == 0)
    {
        dotNotwork.add("dot__success");
        if(dotWork.contains("dot__success"))
        {
            dotWork.remove("dot__success");
            dotWork.add("dot__error");
        }
        if(dotRest.contains("dot__success"))
        {
            dotRest.remove("dot__success");
            dotRest.add("dot__error");
        }
    }
}, 1000);