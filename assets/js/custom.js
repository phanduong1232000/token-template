function toast(type, ms) {
    try {
        Command: toastr[type](ms);
    }
    catch (e) {
        alert(ms);
    }
}

function direct(url) {
    setTimeout(function () {
        location.href = url;
    }, 2000);
}

function autoFormatNumber() {
    var $form = $("form");
    var $input = $form.find(".number");
    $input.on("keyup", function (event) {
        var selection = window.getSelection().toString();
        if (selection !== '') {
            return;
        }
        if ($.inArray(event.keyCode, [38, 40, 37, 39]) !== -1) {
            return;
        }
        var $this = $(this);
        var input = $this.val();
        var input = input.replace(/[\D\s\._\-]+/g, "");
        input = input ? parseInt(input, 10) : 0;
        $this.val(function () {
            return (input === 0) ? "0" : input.toLocaleString("en-US");
        });
    });
}

function formatMoney(n, c, d, t) {
    var
        c = isNaN(c = Math.abs(c)) ? 2 : c,
        d = d == undefined ? "." : d,
        t = t == undefined ? "," : t,
        s = n < 0 ? "-" : "",
        i = String(parseInt(n = Math.abs(Number(n) || 0).toFixed(c))),
        j = (j = i.length) > 3 ? j % 3 : 0;
    return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
};

function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();
    var hours = '' + d.getHours(),
        min = '' + d.getMinutes();
    if (month.length < 2)
        month = '0' + month;
    if (day.length < 2)
        day = '0' + day;
    if (hours.length < 2)
        hours = '0' + hours;
    if (min.length < 2)
        min = '0' + min;
    return [year, month, day].join('-') + " " + hours + ":" + min;
}

function reload() {
    setTimeout(function () {
        location.reload();
    }, 2000);
}

function goBack() {
    window.history.back();
}

function round(num, decimal) {
    var p = Math.pow(10, decimal);
    var a = Math.round(num * p) / p;
    return a;
}
var countFixKeyTinyMce = 0;

function fixKeyTinyMce() {
    if ($('.mce-close').length > 0) {
        $('.mce-close').click();
    } else {
        if (countFixKeyTinyMce < 50) {
            setTimeout(function () {
                countFixKeyTinyMce++;
                fixKeyTinyMce();
            }, 200);
        }
    }
}

function initTinyMce() {
    tinymce.init({
        selector: 'textarea',
        entity_encoding: "raw",
        forced_root_block: false,
        height: 400,
        theme: 'modern',
        plugins: 'code fullpage autolink fullscreen image link media table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists textcolor wordcount imagetools contextmenu colorpicker textpattern help',
        toolbar1: 'fullscreen | paste1 | code | fontsizeselect | bold italic strikethrough forecolor backcolor | imageupload link media | alignleft aligncenter alignright alignjustify  | numlist bullist outdent indent  | removeformat',
        image_advtab: true,
        setup: function (editor) {
            editor.on('change', function () {
                editor.save();
            });
            var inp = $('<input id="tinymce-uploader" type="file" name="pic" accept="image/*" style="display:none;">');
            $(editor.getElement()).parent().append(inp);
            inp.on("change", function () {
                var input = inp.get(0);
                var urlImg = uploadImg(input.files, editor);
            });
            editor.addButton('imageupload', {
                icon: "image",
                onclick: function (e) {
                    inp.trigger('click');
                }
            });
            editor.addButton('paste1', {
                icon: 'paste',
                onclick: function () {
                    handlePaste();
                }
            });
        }
    });
    fixKeyTinyMce();
}
$('.dateEvent').each(function () {
    var This = $(this);
    var x = setInterval(function () {
        var now = new Date().getTime();
        var countDownDate = new Date(This.attr('date')).getTime();
        var distance = countDownDate - now;
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        if (days < 10) {
            days = "0" + days;
        }
        if (hours < 10) {
            hours = '0' + hours;
        }
        if (minutes < 10) {
            minutes = '0' + minutes;
        }
        if (seconds < 10) {
            seconds = '0' + seconds;
        }
        if ($('.countdownTimer_14Q_').length) {
            This.find('.sd-day').text(days);
            This.find('.sd-hour').text(hours);
            This.find('.sd-minute').text(minutes);
            This.find('.sd-second').text(seconds);
        } else {
            This.html('<div class="time-event"><b>' + days + '</b><p>date</p></div>' + '<div class="time-event"><b>' + hours + '</b><p>hour</p></div>' +
                '<div class="time-event"><b>' + minutes + '</b><p>minute</p></div>' + '<div class="time-event"><b>' + seconds + '</b><p>second</p><div>');
        }
        if (distance < 0) {
            clearInterval(x);
            reload();
        }
    }, 1000);
});
$(document).on('click', '.user-icon-nav > li', function () {
    console.log($(this).text());
    $(this).parent().removeClass('show-menu');
    $(this).find('.fa-chevron-right').addClass('fa-chevron-down');
    $(this).find('.fa-chevron-right').removeClass('fa-chevron-right');
    $(this).addClass('show-menu');
})

function checkAirDrop() {
    var check = document.getElementById("checkaird");
    if (check.checked = true) {
        $('.markdown-desc').css('max-height', 'unset');
    } else if (check.checked = false) {
        $('.markdown-desc').css('max-height', '200px');
    }
}
$(document).on('click', '#checkairdrop', function () {
    checkAirDrop();
});
$().ready(function () {
    if ($('.footable').length) {
        $('.footable').footable();
    }
    new ClipboardJS('.copy', {
        text: function (trigger) {
            var targets = $(trigger).attr('text');
            toast('success', 'copied');
            return targets;
        },
    });
});