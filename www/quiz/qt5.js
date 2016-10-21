
//disable button onload
$('#in_qt5_1').attr('disabled', true);
$('#in_qt5_2').attr('disabled', true);
$('#in_qt5_3').attr('disabled', true);
$('#in_qt5_4').attr('disabled', true);

//var base_url ='https://104.238.96.209/~newsimtms/db';
var base_url ='//104.238.96.209/~project/db';
//var base_url ='http://localhost/qt/db';

//get questions
$.getJSON("http://104.238.96.209/~project/db/get_qt/5",function(result){
  $('#loader5').show();
  $.each(result,function(i,field){
    //alert(field.qt);
    $('#qt_5_qt').append(field.qt);  
    $('#qt5_1').append(field.c1);
    $('#qt5_2').append(field.c2);
    $('#qt5_3').append(field.c3);
    $('#qt5_4').append(field.c4);
    console.log('questions loaded');
//    $('#user_name').text(" Welcome: "+ user + "  ");
    $('#loader5').hide();
    $('#qt_content_5').show();

  });
});

//click  
function process5(ans){
  $('#loader5').show();
  $('#qt5').slideToggle();
  $.post( "http://104.238.96.209/~project/db/qt_callback", { user: ans, user_id: user_id})
    .done(function( data ) {
      $('#in_qt5_1').attr('disabled', true);
      $('#in_qt5_2').attr('disabled', true);
      $('#in_qt5_3').attr('disabled', true);
      $('#in_qt5_4').attr('disabled', true);
      $('#loader5').hide();
      $('#qt5_result').html(data);
      $( "#qt5" ).removeClass( "ui-state-disabled" );
    });

  $.post( "http://104.238.96.209/~project/db/get_ans/"+user_id, { user: ans, user_id: user_id})
    .done(function( data ) {
        $('#loader5').hide();
        $('#show_ans_total').show();
        $('#total_ans').html(data);
    });

}


 
