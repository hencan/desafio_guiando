function encodeImageFileAsURL() {

  var filesSelected = document.getElementById("inputFileToLoad").files;
  if (filesSelected.length > 0) {
    var fileToLoad = filesSelected[0];

    var fileReader = new FileReader();

    fileReader.onload = function (fileLoadedEvent) {
      var srcData = fileLoadedEvent.target.result; // <--- data: base64

      var newImage = document.createElement('img');
      newImage.src = srcData;

      var i = new Image();

      i.onload = function () {
        console.log("Dimensões da Imagem")
        console.log("Width: " + i.width)
        console.log("Height: " + i.height)
        if (i.width == 200 & i.height == 200) {
          alert('Tamanho da imagem selecionada: ' + i.width + ' x ' + i.height + ' px. 👏👏👏')

        } else {
          alert('⚠ Tamanho da imagem selecionada: ' + i.width + ' x ' + i.height + ' px. O tamanho ideal seria de 200 x 200 px')
        }  
      };

      i.src = srcData;

      document.getElementById("imgTest").innerHTML = newImage.outerHTML;
      document.getElementById("imgBase64").value = srcData;
      
    }

    fileReader.readAsDataURL(fileToLoad);
  }
}