// questions toggle
$(document).ready(function() {
    $('.toggle-btn').on('click', function() {
        var $this = $(this);
        if ($this.text() === '+') {
            $this.text('-');
        } else {
            $this.text('+');
        }
    });
});
