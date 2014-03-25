 $(document).ready(function() {
  $('.minus').click(function () {
      var $input = $(this).parent().find('input');
      var count = parseInt($input.val()) - 1;
      if(count === 0){
          $(this).closest('tr').remove();
      }
      $input.val(count);
      $input.change();
      return false;
  });
  $('.plus').click(function () {
      var $input = $(this).parent().find('input');
      $input.val(parseInt($input.val()) + 1);
      $input.change();
      $('.sub').text($input.val() * parseFloat($('#price').text() + parseFloat($('.sub').text())).toFixed(2));
      return false;
  });
  $('.remove').click(function() {
      $(this).closest('tr').remove();
  });
});