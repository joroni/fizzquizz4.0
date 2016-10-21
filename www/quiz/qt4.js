
//disable button onload
$('#in_qt4_1').attr('disabled', true);
$('#in_qt4_2').attr('disabled', true);
$('#in_qt4_3').attr('disabled', true);
$('#in_qt4_4').attr('disabled', true);

//var base_url ='https://104.238.96.209/~newsimtms/db';
var base_url ='//104.238.96.209/~project/db';
//var base_url ='http://localhost/qt/db';

//get questions
$.getJSON("http://104.238.96.209/~project/db/get_qt/4",function(result){
  $('#loader4').show();
  $.each(result,function(i,field){
    //alert(field.qt);
    $('#qt_4_qt').append(field.qt);  
    $('#qt4_1').append(field.c1);
    $('#qt4_2').append(field.c2);
    $('#qt4_3').append(field.c3);
    $('#qt4_4').append(field.c4);
    console.log('questions loaded');
  //  $('#user_name').text(" Welcome: "+ user + "  ");
    $('#loader4').hide();
    $('#qt_content_4').show();

  });
});

//click  
function process4(ans){
  $('#loader4').show();
  $('#qt4').slideToggle();
  $.post( "http://104.238.96.209/~project/db/qt_callback", { user: ans, user_id: user_id})
    .done(function( data ) {
      $('#in_qt4_1').attr('disabled', true);
      $('#in_qt4_2').attr('disabled', true);
      $('#in_qt4_3').attr('disabled', true);
      $('#in_qt4_4').attr('disabled', true);
      $('#loader4').hide();
      $('#qt4_result').html(data);
      $( "#qt5" ).removeClass( "ui-state-disabled" );
    });
}


 
