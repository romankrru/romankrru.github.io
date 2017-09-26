;(function() {
    var sliderControls = document.querySelector('.slider-controls');
    var sliderPreviews = document.querySelector('.slider-previews ul');
    var buttonNext = document.querySelector('.next');
    var buttonPrev = document.querySelector('.prev');
    var previews = document.querySelectorAll('.slider-previews img');
    var photos = document.querySelectorAll('.slider-images img');
    var curentPreviewsScreen = 1;
    var maxPreviewsScreen = Math.ceil(previews.length / 3);
    var marginLeft = 0;
    var activeIndex = 0;
    
    changeSlide(previews[1].parentNode);
    // добавить атрибут disabled кнопкам, если нужно
    highlightButtons();
    
    sliderControls.addEventListener('click', function(e) {
        var target = e.target;
        
        while (target !== this) {

            //клик по кнопке вперед/назад
            if (target.tagName.toLowerCase() === 'button') {
                changePreviews(target);
                return;
            }
            
            //клик по превью
            if (target.tagName.toLowerCase() === 'a') {
                e.preventDefault();
                changeSlide(target);
                return;
            }
            
            target = target.parentNode;
        }
            
    });
    
    function changePreviews(button) {
        if (button.classList.contains('next') && canChangePreviews('next')) { 
            marginLeft -= 356;
            sliderPreviews.style.marginLeft = marginLeft + 'px';
            curentPreviewsScreen++;
        }
        
        if (button.classList.contains('prev') && canChangePreviews('prev')) { 
            marginLeft += 356;
            sliderPreviews.style.marginLeft = marginLeft + 'px';
            curentPreviewsScreen--;
        }
        
        highlightButtons();
    }
    
    function canChangePreviews(dir) {
        if (dir === 'next') {
            return !((curentPreviewsScreen + 1) > maxPreviewsScreen);
        }
        
        if (dir === 'prev') {
            return !((curentPreviewsScreen - 1) < 1);
        }
    }
    
    function highlightButtons() {
        canChangePreviews('next') ? buttonNext.disabled = false : buttonNext.disabled = true;
        canChangePreviews('prev') ? buttonPrev.disabled = false : buttonPrev.disabled = true;
    }
    
    function changeSlide(preview) {
        var li = preview.parentNode;

        photos[activeIndex].classList.remove('active-slide');
        previews[activeIndex].parentNode.classList.remove('active')
        
        activeIndex = 0;
        
        while (li = li.previousElementSibling) {
            activeIndex++;
        }
        
        photos[activeIndex].classList.add('active-slide');
        previews[activeIndex].parentNode.classList.add('active');
        
    }
}());