$(document).ready(function(){
  $("#signup").click(function(){
    $.get({
      url:'/ajax',
      data:{ 
        id: $('#ID').val(),
        pwd:$('#passW').val(),

      },
      success: function(res) {
        console.log(res)
        $("#ID").hide();
        $("#passW").hide();
        $('#res').html('Hello')
      }
    })
    


  });
});
