console.log("Connectes!!");
$(function () {

    $("#fname_error_message").hide();
    $("#lname_error_message").hide();
    $("#uname_error_message").hide();
    $("#num_error_message").hide();
    $("#email_error_message").hide();
    $("#pass_error_message").hide();
    $("#cpass_error_message").hide();

    var error_fname = false;
    var error_lname = false
    var error_uname = false;
    var error_email = false;
    var error_num = false;
    var error_pass = false;
    var error_cpass = false;

    $("#username").focusout(function () {
        check_uname();
    });
    $("#email").focusout(function () {
        check_email();
    });
    $("#num").focusout(function () {
        check_num();
    });
    $("#pass").focusout(function () {
        check_pass();
    });
    $("#cpass").focusout(function () {
        check_cpass();
    });


    function check_uname() {
        var pattern = /^[a-zA-Z0-9]*$/;
        var uname = $("#username").val();
        if (pattern.test(uname) && uname !== '') {
            $("#uname_error_message").hide();
            $("#uname").css("border-bottom", "4px solid #34F458");
        } else {
            $("#uname_error_message").html("Should contain only Characters");
            $("#uname_error_message").show();
            $("#uname").css("border-bottom", "4px solid #F90A0A");
            error_uname = true;
        }
    }

    function check_email() {
        var pattern = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        var email = $("#email").val();
        if (pattern.test(email) && email !== '') {
            $("#email_error_message").hide();
            $("#email").css("border-bottom", "4px solid #34F458");
        } else {
            $("#email_error_message").html("Invalid Email");
            $("#email_error_message").show();
            $("#email").css("border-bottom", "4px solid #F90A0A");
            error_email = true;
        }
    }

    function check_num() {
        var number = $("#num").val();
        if (number == null || number == "") {
            $("#num_error_message").html("Number cannot be empty");
            $("#num_error_message").show();
            $("#num").css("border-bottom", "4px solid #F90A0A");
            error_num = true;
        }
        else if (number.length != 10) {
            $("#num_error_message").html("Invalid Number");
            $("#num_error_message").show();
            $("#num").css("border-bottom", "4px solid #F90A0A");
            error_num = true;
        }
        else {
            $("#num_error_message").hide();
            $("#num").css("border-bottom", "4px solid #34F458");

        }
    }

    function check_pass() {
        var password_length = $("#pass").val().length;
        if (password_length < 8) {
            $("#pass_error_message").html("Atleast 8 Characters");
            $("#pass_error_message").show();
            $("#pass").css("border-bottom", "4px solid #F90A0A");
            error_pass = true;
        } else {
            $("#pass_error_message").hide();
            $("#pass").css("border-bottom", "4px solid #34F458");
        }
    }

    function check_cpass() {
        var pass = $("#pass").val();
        var cpass = $("#confpass").val();
        if (cpass == null || cpass == "") {
            $("#cpass_error_message").html("Enter Password to confirm");
            $("#cpass_error_message").show();
            $("#cconfpass").css("border-bottom", "4px solid #F90A0A");
            error_cpass = true;
        }
        else if (pass !== cpass) {
            $("#cpass_error_message").html("Passwords Did not Matched");
            $("#cpass_error_message").show();
            $("#cpass").css("border-bottom", "4px solid #F90A0A");
            error_cpass = true;
        } else {
            $("#cpass_error_message").hide();
            $("#cpass").css("border-bottom", "4px solid #34F458");
        }
    }

    $("#register").submit(function () {
        error_fname = false;
        error_sname = false;
        error_email = false;
        error_password = false;
        error_retype_password = false;

        check_fname();
        check_lname();
        check_uname();
        check_email();
        check_num();
        check_pass();
        check_cpass();

        if (error_fname === false && error_lname === false && error_uname === false && error_email === false && error_pass === false && error_cpass === false) {
            alert("Registration Successfull");
            return true;
        } else {
            alert("Please Fill the form Correctly");
            return false;
        }


    });


})
