$('#newsletter').click(function(e) {
    e.preventDefault();
    let eid = $('#em')[0].value;
    if(eid != "") {
        if(/^[a-zA-Z0-9-_]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+$/.test(eid) === true) 
        {
            let linkPart = "";
            let i = 0;
            while(i < eid.length)
            {
                if(eid[i] === "@")
                {
                    linkPart = linkPart + "[at]";
                } else if(eid[i] === ".") {
                    linkPart = linkPart + "[dot]";
                } else {
                    linkPart = linkPart + eid[i];
                }
                i++;
            }
            if(linkPart.length < 199) {
                $(this).html("THANKS!");
                $(this).css("background-color", "#AEE1CD");
                $(this).css("font-weight", "bold");
                window.open("http://bemails.pythonanywhere.com/mails/"+linkPart);
            } else {
                console.log("Email too long!");
            }
        }
        else
        {
            console.log("Invalid email!");
        }
    }
    else {
        console.log("Email field empty");
    }
 });
 
 
 
 $('.hideHover').slideUp();
 
 $('.leaderCard').hover(function() {
    $('.hideHover', this).slideDown();
 }, function() {
    $('.hideHover', this).slideUp();
 });
 