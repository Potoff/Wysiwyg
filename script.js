function refreshWysiwyg(e){
    let title = document.querySelector('.titre').value;
    document.querySelector('.titleResult').textContent = title;
    
    let image = document.querySelector('.img').value;
    document.querySelector('.imgContent').src = image;

    let text = document.querySelector('textArea').value;
    document.querySelector('.mainContent').textContent = text;

    let imgSize = document.querySelector('.sizeImg').value;
    document.querySelector('.imgContent').style.width = '' +imgSize+ 'px';

    let borderImg = document.querySelector('.imgBorder').value;
    document.querySelector('.imgContent').style.borderRadius = '' +borderImg+ 'px';


    e.preventDefault();
}







let generateWysiwyg = document.getElementById('generateWysiwyg');
generateWysiwyg.addEventListener('click', refreshWysiwyg)