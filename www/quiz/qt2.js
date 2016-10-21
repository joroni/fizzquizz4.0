
//disable button onload
$('#in_qt2_1').attr('disabled', true);
$('#in_qt2_2').attr('disabled', true);
$('#in_qt2_3').attr('disabled', true);
$('#in_qt2_4').attr('disabled', true);

//var base_url ='https://104.238.96.209/~newsimtms/db';
var base_url ='//104.238.96.209/~project/db';
//var base_url ='http://localhost/qt/db';

//get questions
$.getJSON("http://104.238.96.209/~project/db/get_qt/2",function(result){
  $('#loader2').show();
  $.each(result,function(i,field){
    //alert(field.qt);
    $('#qt_2_qt').append(field.qt);  
    $('#qt2_1').append(field.c1);
    $('#qt2_2').append(field.c2);
    $('#qt2_3').append(field.c3);
    $('#qt2_4').append(field.c4);
    console.log('questions loaded');
   // $('#user_name').text(" Welcome: "+ user + "  ");
    $('#loader2').hide();
    $('#qt_content_2').show();

  });
});

//click
function process2(ans){
  $('#loader2').show();
  $('#qt2').slideToggle();
  $.post( "http://104.238.96.209/~project/db/qt_callback", { user: ans, user_id: user_id})
    .done(function( data ) {
      $('#in_qt2_1').attr('disabled', true);
      $('#in_qt2_2').attr('disabled', true);
      $('#in_qt2_3').attr('disabled', true);
      $('#in_qt2_4').attr('disabled', true);
      $('#loader2').hide();
      $('#qt2_result').html(data);
      $( "#qt3" ).removeClass( "ui-state-disabled" );
    });
}


 
