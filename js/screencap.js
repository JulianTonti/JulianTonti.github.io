function convert_clipboard_image(event) {
  let file = (event.clipboardData || window.clipboardData).files[0];
  if (file && file.type.substr(0,6) == "image/") {
    let reader = new FileReader();
    reader.onloadend = function() {
      let src = reader.result;
      navigator.clipboard.writeText(`<img src="${src}" />`);
      console.log(`<img src="${src}" />`);
    }
    reader.readAsDataURL(file);
  }
}
document.body.addEventListener('paste', convert_clipboard_image);
export default convert_clipboard_image;
