
//disable button onload
$('#in_qt1_1').attr('disabled', true);
$('#in_qt1_2').attr('disabled', true);
$('#in_qt1_3').attr('disabled', true);
$('#in_qt1_4').attr('disabled', true);

 

//var base_url ='https://104.238.96.209/~newsimtms/db';
//var base_url ='104.238.96.209/~project/db';
//get questions
$.getJSON("http://104.238.96.209/~project/db/get_qt/1",function(result){
  
  $('#loader1').show();
  $.each(result,function(i,field){
    //alert(field.qt);
    $('#qt_1_qt').append(field.qt);  
    $('#qt1_1').append(field.c1);
    $('#qt1_2').append(field.c2);
    $('#qt1_3').append(field.c3);
    $('#qt1_4').append(field.c4);
    console.log('questions loaded');  
   // $('#user_name').text(" Welcome: "+ user + "  ");
    $('#loader1').hide();
        $("#qt_content_1").animate({
        left: '0px',
    });
  });
});

//click
function process1(ans){
  $('#loader1').show();
  $('#qt1').slideToggle();
  $.post( "http://104.238.96.209/~project/db/qt_callback", { user: ans, user_id: user_id})
    .done(function( data ) {
      $('#in_qt1_1').attr('disabled', true);
      $('#in_qt1_2').attr('disabled', true);
      $('#in_qt1_3').attr('disabled', true);
      $('#in_qt1_4').attr('disabled', true);
      $('#loader1').hide();
      $('#qt1_result').html(data);
      $( "#qt2" ).removeClass( "ui-state-disabled" );
    });
}


 

 