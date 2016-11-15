$(document).ready(function(){
  $("#butt").click(function(){
    $.get({
      url:'/ajax',
      data:{ 
        id: $('#ID').val(),
        pwd:$('#passW').val(),

      },
      success: function(res) {
        console.log(res)
        $('#res').html('saveed')
      }
    })
    


  });
});
