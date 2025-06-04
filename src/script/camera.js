const camera = document.getElementById('camera');

navigator.mediaDevices.getUserMedia({video: true}).then(stream => {
    camera.srcObject = stream;
})
.catch(error => {
    console.error("Error accesing camera: ", error);
});