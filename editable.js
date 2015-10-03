//<a id="scarica" href="">Scarica</a>

//<script>
      
function makeHtmlEditable(id) {
    var scarica = document.getElementById(id);
    scarica.addEventListener("mousedown", function () {
        var inputs = document.querySelectorAll(
                "input[type=color],input[type=date],input[type=datetime]"
                + ",input[type=datetime-local], input[type=email],input[type=file]"
                + ",input[type=number], input[type=range],input[type=search]"
                + ",input[type=tel], input[type=text],input[type=time]"
                + ",input[type=url], input[type=week]"
                );
        for (var i = 0; i < inputs.length; i++) {
            var e = inputs[i];
            e.setAttribute("value", e.value);
        }
        ;
        inputs = document.querySelectorAll("textarea");
        for (var i = 0; i < inputs.length; i++) {
            var e = inputs[i];
            e.innerHTML = e.value;
        }
        ;
        inputs = document.querySelectorAll("select");
        for (var i = 0; i < inputs.length; i++) {
            var e = inputs[i];
            var op = e.querySelectorAll("option[value=" + e.value + "]");
            if (op.length > 0)
                op[0].setAttribute("selected", "selected");
        }
        ;
        inputs = document.querySelectorAll("input[type=radio],input[type=checkbox]");
        for (var i = 0; i < inputs.length; i++) {
            var e = inputs[i];
            if (e.checked)
                e.setAttribute("checked", "checked");
        }
        ;
        var html = "<!DOCTYPE html>\n<html>\n" + document.documentElement.innerHTML + "\n</html>";
        var blob = new Blob([html], {type: 'application/octet-binary'}); // the blob
        //var blob = new Blob([html], {type: 'text/html'}); // the blob
        var url = URL.createObjectURL(blob);
        scarica.href = url;
        // file name
        var url = window.location.pathname;
        var filename = url.substring(url.lastIndexOf('/') + 1);
        scarica.download = filename;
    });

}

//          makeHtmlEditable("scarica")
//</script>
