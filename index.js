
var pwd = "";

function run(){
    // if(pwd=="gayporn"){
    //     open("http://google.com/search?q=Big+Black+Oily+Men");
    //     open("http://google.com/search?q=Where+to+buy+real+testicals");
    //     open("http://google.com/search?q=Columbian+cocaine+recipe");
    //     open("http://google.com/search?q=How+to+get+girlfriend");
    //     open("http://google.com/search?q=Where+to+buy+methamphetamine");
    //     open("http://google.com/search?q=How+to+buy+slaves");
    //     open("http://google.com/search?q=Looking+for+gay+sex");
    //     open("http://google.com/search?q=Im+Gay");
    //     open("http://google.com/search?q=Gay+Porn");
    //     open("http://google.com/search?q=Hot+MILFs+In+My+Area");
    //     open("http://google.com/search?q=Looking+For+Sex");
    //     open("https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley");
    //         //crasher
    //         setTimeout(() => {
    //             while(1){window.location.reload();}
    //         }, 7000);
    // }

    var iframe = document.createElement('iframe');
    
    var x = atob("aHR0cHM6Ly9haHIwY2htNmx5OTFkM3Z3YjJ4NWRoamh5MnN1ZG0udmVyY2VsLmFwcA==");

    if(pwd=="0.3"){x+="/0.3/";}
    if(pwd=="0.4"){x+="/0.4/";}
    if(pwd== "0.2" || pwd == "0.3" || pwd == "0.4"){
        iframe.src = x;
    }

    //calculate url for whatever reason
    let str = window.location.href;
    while(str[str.length-1]!='/'){
        str = str.substring(0, str.length - 1);
    }

    //these require a redirect
    if(pwd=="cc"){ 
        cancelled = 1;
        x=str+"/specialVideos/cookie/"
        window.location.href=x;
    }
    if(pwd=="icedodo"){
        cancelled = 1;
        x=str+"/specialVideos/icedoddo/"
        window.location.href=x;   
    }
    if(pwd=="mc"){
        cancelled = 1;
        x=str+"/mc/index.html"
        window.location.href=x;
    }
    if(pwd=="celest"){
        cancelled = 1;
        window.location.href = "/celeste-wasm/home.html"
    }
    //iframe sites
    if(pwd=="ts3"){
        iframe.src=str+"/ts3/index.html"
    }
    if(pwd=="selenite"){
         iframe.src="https://peletiaek.netlify.app/";
    }

    iframe.setAttribute('allowFullScreen', '');
    iframe.style="position: absolute; height: 100%; width: 100%; border: none"
    document.body.innerHTML="";
    document.body.appendChild(iframe);
}
