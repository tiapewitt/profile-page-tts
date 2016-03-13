$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').focus()
})
   $(function () {
        $('#closemodal').click(function () {
            $('#mymodal').modal('hide');
        });

    });

    $('body').scrollspy({ target: '#navbar' })
    $('[data-spy="scroll"]').each(function () {
  var $spy = $(this).scrollspy('refresh')
})

    $('.dropdown-toggle').dropdown()


