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
    html2canvas(document.querySelector('.textContainer')).then(canvas=>{
        const link = document.createElement('a')
        link.href = canvas.toDataURL()
        link.download = 'image.png'
        console.log("hello")
        link.click()
    }
)}