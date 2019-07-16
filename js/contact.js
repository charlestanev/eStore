function closeForm() {
    $('.formSection').hide(250);
    $('.contactSection').show(250);

    $('#FirstName').val('');
    $('#LastName').val('');
    $('#Email').val('');
    $('#Textarea').val('');
    $('#AcceptConditions').prop('checked', false);
    $('#AcceptMessages').prop('checked', false);
}

function sendForm() {
    setTimeout(function () {
        $('#FirstName').val('');
        $('#LastName').val('');
        $('#Email').val('');
        $('#Textarea').val('');
        $('#AcceptConditions').prop('checked', false);
        $('#AcceptMessages').prop('checked', false);
    }, 1);
}

function changeState() {
    $('#FirstName').focus(function () {
        $('#FirstName').removeAttr('placeholder');
    });
    $('#FirstName').focusout(function () {
        if ($('#FirstName').val() == "") {
            $('#FirstName').attr('placeholder', 'name');
        }
    });

    $('#LastName').focus(function () {
        $('#LastName').removeAttr('placeholder');
    });
    $('#LastName').focusout(function () {
        if ($('#LastName').val() == "") {
            $('#LastName').attr('placeholder', 'name');
        }
    });

    $('#Email').focus(function () {
        $('#Email').removeAttr('placeholder');
    });
    $('#Email').focusout(function () {
        if ($('#Email').val() == "") {
            $('#Email').attr('placeholder', 'email');
        }
    });

    $('#Textarea').focus(function () {
        $('#Textarea').removeAttr('placeholder');
    });
    $('#Textarea').focusout(function () {
        if ($('#Textarea').val() == "") {
            $('#Textarea').attr('placeholder', 'Your message');
        }
    });
}

function showContactForm() {
    changeState();
    $('.contactSection').hide(50);
    $('.formSection').show(50);
}

function resetForm() {
    $('#FirstName').val('');
    $('#LastName').val('');
    $('#Email').val('');
    $('#Textarea').val('');
    $('#Location').val('Europe');
    $('#AcceptConditions').prop('checked', false);
    $('#AcceptMessages').prop('checked', false);

    $('#FirstName').attr('placeholder', 'name');
    $('#LastName').attr('placeholder', 'name');
    $('#Email').attr('placeholder', 'email');
    $('#Textarea').attr('placeholder', 'Your message');

}