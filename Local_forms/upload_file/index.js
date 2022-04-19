function fileValidation() {
    let fileInput = document.getElementById("file");
    let filePath = fileInput.value;
    let allowedExtension = /(\.jpg)$/i;
    error.innerText = "";
    document.getElementById("imagePreview").innerHTML = "";
    if ((!allowedExtension.exec(filePath))) {
        let error = document.getElementById("error");
        error.innerText = "Only allowed jpg file format accepted";
        // alert("only allowed jpg");

        fileInput.value = '';
        return false;    
    }
    else {
        // Image preview
        error.innerText = "";
        let files = fileInput.files;
        // console.log(files[0].size > 2097152);
        if(files.length > 0) {
            if(files[0].size < 2 * 1024) {
                console.log(files[0].size)
                error.innerText = "file size exceed 2 MB";
                return false;
            }
            else {
                error.innerText = "file selected successfully"
            }
        }
        // if(fileInput.files && fileInput.files[0]) {
        //     let reader = new FileReader();
        //     reader.onload = function(e) {
        //         document.getElementById("imagePreview").innerHTML = '<img src = "'+e.target.result+'" />';

        //     };
        //     reader.readAsDataURL(fileInput.files[0]);
        // }
    }
}