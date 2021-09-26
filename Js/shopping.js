$('.like-btn').on('click', function() {
   $(this).toggleClass('is-active');
});

$('.minus-btn').on('click', function(e) {
    e.preventDefault();
    var $this = $(this);
    var $input = $this.closest('div').find('input');
    var value = parseInt($input.val());
 
    if (value) {
        value = value - 1;
    } else {
        value = 0;
    }
 
  $input.val(value);
 
});
 
$('.plus-btn').on('click', function(e) {
    e.preventDefault();
    var $this = $(this);
    var $input = $this.closest('div').find('input');
    var value = parseInt($input.val());
 
    if (value) {
        value = value + 1;
    } else {
        value =1;
    }
 
    $input.val(value);
});


const deletebtns = document.querySelectorAll('.delete-btn');
deletebtns.forEach(button => {
	
	button.addEventListener('click', () => {
		button.parentNode.parentNode.style.display ="none";
	})
})