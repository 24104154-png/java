function upDate(previewPic) {
  console.log("alt:", previewPic.alt);
  console.log("src:", previewPic.src);

  var box = document.getElementById("image");
  box.innerHTML = "";                                            // xóa chữ
  box.style.backgroundImage = "url('" + previewPic.src + "')";   // đổi hình nền
}

function unDo() {
  var box = document.getElementById("image");
  box.style.backgroundImage = "url('')";                         // trả hình nền ban đầu
  box.innerHTML = "Di chuột qua một hình ảnh bên dưới để hiển thị ở đây.";  // trả chữ gốc
}