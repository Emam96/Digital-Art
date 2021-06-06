


var siteRate = prompt("Can you rate my site, give me a rate from 1 to 5, you cannot rate by 0, thats rude"); 


function s2 () { 

  document.write("you rated my site by ");
while (siteRate != 1 && siteRate != 2  && siteRate != 3 && siteRate != 4 && siteRate != 5 ) 
{

    siteRate = prompt("please rate the site by 1-5");
}

for (i = 0; i < siteRate; i++) {
  document.write("<img src='https://cdn.brawlify.com/front/Star.png'  width='20px'  hieght='20px'>");

}
}

s2 ();
