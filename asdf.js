$('.first #removeCard').click(function(){
  toggleReveal($('.first .action'), $('.first .confirm'));
});

$('.first #cancelDelete').click(function(){
  toggleReveal($('.first .confirm'), $('.first .action'));
});

function toggleReveal($hideElement, $showElement){
  $hideElement.removeClass('reveal');
  
  setTimeout(function(){
    $hideElement.hide();
    $showElement.show().addClass('reveal');
  }, 200);
}