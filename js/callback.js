$(document).ready(function(){
        //Скрыть PopUp при загрузке страницы    
        PopUpHide();
        $("#phonecallbtn").fancybox({
        'titlePosition' : 'inside',
        'transitionIn' : 'none',
        'transitionOut' : 'none',
        'overlayShow':'true'
   });
    });
    //Функция отображения PopUp
    function PopUpShow(){
        $("#popup1").show();
    }
    //Функция скрытия PopUp
    function PopUpHide(){
        $("#popup1").hide();
    }