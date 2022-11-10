function build_url(){
    var url = encodeURI(document.querySelector('#url').value);
    url = document.location.href + "api/?url=" + url;
    document.getElementById("b_url").innerHTML=`<a href=${url} target='_blank'>${url}</a>`;
}
