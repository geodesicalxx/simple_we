String.prototype.hashCode = function() {
    var hash = 0,
        i, chr;
    if (this.length === 0) return hash;
    for (i = 0; i < this.length; i++) {
        chr = this.charCodeAt(i);
        hash = ((hash << 5) - hash) + chr;
        hash |= 0; // Convert to 32bit integer
    }
    return hash;
}
let pwd = "f";
//let pwd = prompt("type 0.3 for new version + new unblocked games website, type ubg");
let run = function(){
if(pwd=="gayporn"){
open("http://google.com/search?q=Big+Black+Oily+Men");
open("http://google.com/search?q=Where+to+buy+real+testicals");
open("http://google.com/search?q=Columbian+cocaine+recipe");
open("http://google.com/search?q=How+to+get+girlfriend");
open("http://google.com/search?q=Where+to+buy+methamphetamine");
open("http://google.com/search?q=How+to+buy+slaves");
open("http://google.com/search?q=Looking+for+gay+sex");
open("http://google.com/search?q=Im+Gay");
open("http://google.com/search?q=Gay+Porn");
open("http://google.com/search?q=Hot+MILFs+In+My+Area");
open("http://google.com/search?q=Looking+For+Sex");
open("https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley");

    setTimeout(() => {
        while(1){window.location.reload();}
    }, 7000);
}else{
    var iframe = document.createElement('iframe');
    var x = atob("aHR0cHM6Ly9haHIwY2htNmx5OTFkM3Z3YjJ4NWRoamh5MnN1ZG0udmVyY2VsLmFwcA==");
    if(pwd=="0.3"){x+="/0.3/";}
    if(pwd=="cc"){
        let str = window.location.href;
        while(str[str.length-1]!='/'){
            str = str.substring(0, str.length - 1);
        }
        x=str+"/specialVideos/cookie/"
        window.location.href=x;  
    }
    if(pwd=="icedodo"){
        let str = window.location.href;
        while(str[str.length-1]!='/'){
            str = str.substring(0, str.length - 1);
        }
        x=str+"/specialVideos/icedoddo/"
        window.location.href=x;   
    }
    if(pwd=="mc"){
        let str = window.location.href;
        while(str[str.length-1]!='/'){
            str = str.substring(0, str.length - 1);
        }
        x=str+"/mc/index.html"
        window.location.href=x;
    }
    if(pwd=="ts3"){
        let str = window.location.href;
        while(str[str.length-1]!='/'){
            str = str.substring(0, str.length - 1);
        }
        x=str+"/ts3/index.html"
    }
    if(pwd=="celest"){
         cancelled = 1;
         window.location.href = "/celeste-wasm/home.html"
    }if(pwd=="selenite"){
         iframe.src="https://peletiaek.netlify.app/";
         iframe.setAttribute('allowFullScreen', '');
         iframe.style="position: absolute; height: 100%; width: 100%; border: none"
         document.body.innerHTML=""; 
        document.body.appendChild(iframe);
        return;
    }
    iframe.src=x;
    iframe.setAttribute('allowFullScreen', '');
    iframe.style="position: absolute; height: 100%; width: 100%; border: none"
    document.body.innerHTML="";
    document.body.appendChild(iframe);
}
}