// Hàm chức năng ghi giá trị tag
function setTag(tag,val) {
    var tag_Link = '"Data".' + tag;
    var url = "IO.html";
    sdata = tag_Link + '=' + val;
    $.post(url, sdata, function (result2) { });
}
 
// Hàm chức năng đọc giá trị tag
function IOField(ObjectID, tag) {
    url = "IO.html";
    $.getJSON(url, function (result) {
        document.getElementById(ObjectID).value = result[tag];
    });
}
// HIỂN THỊ DỮ LIỆU LÊN IO FIELD
setInterval(function () {
    // IO Field - Màn hình chính (Actual value)
    IOField("tbx_tag_Bool", "Den_bao_loi"); 
    IOField("tbx_tag_Byte", "Current I1"); 
    IOField("tbx_tag_Integer", "V_encoder1"); 
    IOField("tbx_tag_Real", "V_encoder2"); 
}, 1000);

console.log(setTag())