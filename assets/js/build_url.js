function build_url(){
    var url = encodeURI(document.querySelector('#url').value);
    url = "/api/?url=" + url;
    document.getElementById("b_url").innerHTML=`<a href=${url} target='_blank'>长按或者右键复制我</a>`;
}
