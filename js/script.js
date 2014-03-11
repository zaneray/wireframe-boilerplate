$(function(){
  $('[data-toggle=tooltip]').tooltip();
  $('#toggle-tooltip').on('change',function(){
    $('[data-toggle=tooltip]').tooltip('toggle');
  });
});