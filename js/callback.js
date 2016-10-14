var prices = [
  [5990, 7990, 9990, 11150, 12150],
  [7990, 9990, 12890, 13200, 16000],
  [8990, 11860, 16000, 22000, 35000]
];

$(document).ready(function(){
$( ".slider" ).slider({
animate: true,
range: "min",
value: 25,
min: 1,
max: 110,
step: 1,

slide: function( event, ui ) {
$( "#slider-result" ).html(ui.value);
},

change: function(event, ui) {
$('#text').attr('value', ui.value);
changer(ui.value);

}


});
$("[name=buhsys]").change(function(){changer(parseInt($('#slider-result').text()))});
});

function changer(val) {
    var temp = val;
// Если УСН 6%
if($("[name=buhsys]")[0].checked==true){
if (temp <= 25){
        temp = prices[0][0];
    }
    else if(temp > 25 && temp <= 50){
        temp = prices[0][1];
    }else if(temp > 50 && temp <= 75){
        temp = prices[0][2];
    }else if(temp > 75 && temp <= 100){
        temp = prices[0][3];
    }else if(temp > 100){
        temp = prices[0][4];
    }
}
//Если УСН 15%
else if($("[name=buhsys]")[1].checked==true){
    if (temp <= 25){
        temp = prices[1][0];
    }
    else if(temp > 25 && temp <= 50){
        temp = prices[1][1];
    }else if(temp > 50 && temp <= 75){
        temp = prices[1][2];
    }else if(temp > 75 && temp <= 100){
        temp = prices[1][3];
    }else if(temp > 100){
        temp = prices[1][4];
    }
}
// Если ОСНО
else if($("[name=buhsys]")[2].checked==true){
    if (temp <= 25){
        temp = prices[2][0];
    }
    else if(temp > 25 && temp <= 50){
        temp = prices[2][1];
    }else if(temp > 50 && temp <= 75){
        temp = prices[2][2];
    }else if(temp > 75 && temp <= 100){
        temp = prices[2][3];
    }else if(temp > 100){
        temp = prices[2][4];
    }
}


$('#price').text(temp + ' Р');
$('input[name=price]').text(temp);
}



$(document).ready(function(){
        callback();
        callback2();
        callback3();
        //Скрыть PopUp при загрузке страницы 

        PopUpHide();
        $("#phonecallbtn").fancybox({
        'titlePosition' : 'inside',
        'transitionIn' : 'none',
        'transitionOut' : 'none',
        'overlayShow':'true'
   });
        $("#phonecallbtn2").fancybox({
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


/* === AJAX отправка форм ===*/
    function callback(){
$('#send-form').submit(function(e){
//отменяем стандартное действие при отправке формы
e.preventDefault();
//берем из формы метод передачи данных
var m_method=$(this).attr('method');
//получаем адрес скрипта на сервере, куда нужно отправить форму
var m_action=$(this).attr('action');
//получаем данные, введенные пользователем в формате input1=value1&input2=value2...,
//то есть в стандартном формате передачи данных формы
var m_data=$(this).serialize();
$.ajax({
type: m_method,
url: m_action,
data: m_data,
success: function() {  //сообщение об удачной отправке
                        jQuery('#send-form').html("<div id='message'></div>");  
                        jQuery('#message').html("<h2>Сообщение отправлено!</h2>")  
                        .append("<p>Скоро мы с вами свяжемся.</p>")  
                        .hide()  
                        .fadeIn(1500, function() {  
                        $('#message').append("<i class=\"icon-ok\"></i>");  
                        });  
                }
});
});
};

 function callback2(){
$('#send-form2').submit(function(e){
//отменяем стандартное действие при отправке формы
e.preventDefault();
//берем из формы метод передачи данных
var m_method=$(this).attr('method');
//получаем адрес скрипта на сервере, куда нужно отправить форму
var m_action=$(this).attr('action');
//получаем данные, введенные пользователем в формате input1=value1&input2=value2...,
//то есть в стандартном формате передачи данных формы
var m_data=$(this).serialize();
$.ajax({
type: m_method,
url: m_action,
data: m_data,
success: function() {  //сообщение об удачной отправке
                        jQuery('#send-form2').html("<div id='message'></div>");  
                        jQuery('#message').html("<h2>Сообщение отправлено!</h2>")  
                        .append("<p>Скоро мы с вами свяжемся.</p>")  
                        .hide()  
                        .fadeIn(1500, function() {  
                        $('#message').append("<i class=\"icon-ok\"></i>");  
                        });  
                }
});
});
};


 function callback3(){
$('#send-form3').submit(function(e){
//отменяем стандартное действие при отправке формы
e.preventDefault();
//берем из формы метод передачи данных
var m_method=$(this).attr('method');
//получаем адрес скрипта на сервере, куда нужно отправить форму
var m_action=$(this).attr('action');
//получаем данные, введенные пользователем в формате input1=value1&input2=value2...,
//то есть в стандартном формате передачи данных формы
var m_data=$(this).serialize();
$.ajax({
type: m_method,
url: m_action,
data: m_data,
success: function() {  //сообщение об удачной отправке
                        jQuery('#send-form2').html("<div id='message'></div>");  
                        jQuery('#message').html("<h2>Сообщение отправлено!</h2>")  
                        .append("<p>Скоро мы с вами свяжемся.</p>")  
                        .hide()  
                        .fadeIn(1500, function() {  
                        $('#message').append("<i class=\"icon-ok\"></i>");  
                        });  
                }
});
});
};
jQuery(function($) {
$.mask.definitions['~']='[+-]';
$('#date').mask('99-99-9999');
$('#phone').mask('+7 (999) 999-99-99');
$('#code').mask('aaaaa-яяяяя-99999-*****');
});