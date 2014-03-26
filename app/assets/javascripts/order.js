 $(document).ready(function() {
  $('.minus').click(function () {
      var $input = $(this).parent().find('input');
      var count = parseInt($input.val()) - 1;
      if(count === 0){
          $(this).closest('tr').remove();
      }
      $input.val(count);
      $input.change();
      $('.sub').text($input.val() * parseFloat($('#price').text() + parseFloat($('.sub').text())).toFixed(0));
      return false;
  });
  $('.plus').click(function () {
      var $input = $(this).parent().find('input');
      $input.val(parseInt($input.val()) + 1);
      $input.change();
      $('.sub').text($input.val() * parseFloat($('#price').text() + parseFloat($('.sub').text())).toFixed(0));
      return false;
  });
  $('.remove').click(function() {
      $(this).closest('tr').remove();
      $('.sub').text('00.00');
  });

//ADD PROMO CODE

$('#promo').on('click', '#add', function(e) {
  e.preventDefault();
  $('#promo > a').remove(); 
  
  var input = $('<input/>', {
    id:     'promo-input',
    class: 'form',
    type:   'text',
    css: {'width': '35%'}
  });
  var button = $('<input/>', {
    id: 'promo-button',
    type: 'submit',
    value: 'APPLY',
    class: 'btn btn-primary button'
  });
  $('#promo').append(input).append(button);

});


  $('#promo').on('click', '#promo-button', function() {

    var value = $('#promo-input').val().toUpperCase();
    
    var remove = $('<a/>', {
      class: 'glyphicon glyphicon-remove-sign remove',
      text: 'REMOVE',
      click: function () { $('#promo').remove(); }
});
    
    $('#promo').text('PROMO CODE: ' + value + ' APPLIED ').append(remove);
  
    $('#promo-button input').remove();
    
  });

//Place order button
  
// $('#place-order').click(function(){
//    window.location='/order/info';
// });

//ALERT
    
  $('#designer').on('click', function() {
    if($('.alert').length > 0){
    return true;  
  }
  var p = $('<p/>', {text: 'Please complete all fields!', class: 'alert'});
  $('#status-box').remove();
  $('.clearfix').after(p);
});
});