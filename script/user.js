$(document).ready(function () {
    $("#formConsultarUsuario").submit(function () {
        //var formUser = new FormData($('#formConsultarUsuario')[0]);
        var formUser = jQuery(this).serialize();

        $.ajax({
            url: "PHP/validaUser.php",
            cache: false,
            type:'post',
            data: formUser,
            success: function (consulta) {
                $(".offcanvas-body").empty();
                $(".offcanvas-body").append(consulta);
                $(".offcanvas-body").html(consulta);
                
            }
        });
        return false;

    });
});

