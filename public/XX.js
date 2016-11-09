$(document).ready(function(){
  $("#butt").click(function(){
    $.get({
      url:'/ajax',
      data:{ id: $('#ID').val()},
      success: function(res) {
        console.log(res)
      }
    })
    


  });
});
