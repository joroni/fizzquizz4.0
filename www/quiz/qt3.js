
//disable button onload
$('#in_qt3_1').attr('disabled', true);
$('#in_qt3_2').attr('disabled', true);
$('#in_qt3_3').attr('disabled', true);
$('#in_qt3_4').attr('disabled', true);

//var base_url ='https://104.238.96.209/~newsimtms/db';
var base_url ='//104.238.96.209/~project/db';
//var base_url ='http://localhost/qt/db';

//get questions
$.getJSON("http://104.238.96.209/~project/db/get_qt/3",function(result){
  $('#loader3').show();
  $.each(result,function(i,field){
    //alert(field.qt);
    $('#qt_3_qt').append(field.qt);  
    $('#qt3_1').append(field.c1);
    $('#qt3_2').append(field.c2);
    $('#qt3_3').append(field.c3);
    $('#qt3_4').append(field.c4);
    console.log('questions loaded');
  //  $('#user_name').text(" Welcome: "+ user + "  ");
    $('#loader3').hide();
    $('#qt_content_3').show();

  });
});

//click  
function process3(ans){
  $('#loader3').show();
  $('#qt3').slideToggle();
  $.post( "http://104.238.96.209/~project/db/qt_callback", { user: ans, user_id: user_id})
    .done(function( data ) {
      $('#in_qt3_1').attr('disabled', true);
      $('#in_qt3_2').attr('disabled', true);
      $('#in_qt3_3').attr('disabled', true);
      $('#in_qt3_4').attr('disabled', true);
      $('#loader3').hide();
      $('#qt3_result').html(data);
      $( "#qt4" ).removeClass( "ui-state-disabled" );
    });
}


 
