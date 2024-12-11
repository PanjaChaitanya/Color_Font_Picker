let bckColor = (clr) =>{
    document.querySelector('.textContainer').style.backgroundColor = clr;
}
let textColor = (clr) =>{
    document.querySelector('.textContainer').style.color = clr;
}
let textFontSize = (size) =>{
    document.querySelector('.textContainer').style.fontSize = size + 'px';
}
let textFontFamily = (fontName) =>{
    document.querySelector('.textContainer').style.fontFamily = fontName;
}
let DownloadPic=()=>{
    let textContainer = document.querySelector('.textContainer');
    let c = textContainer.textContent.trim()
    let e = document.getElementById("error")
    console.log(c)
    if( c !== "" ){
        html2canvas(textContainer).then(canvas=>{
            const link = document.createElement('a')
            link.href = canvas.toDataURL()
            link.download = 'image.png'
            link.click()
            e.innerHTML = ''
        })
    }else{
        e.innerHTML = "Error: Text Box is Empty"
    }
}