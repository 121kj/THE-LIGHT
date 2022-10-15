// Timer
$(document).ready(function () {
    //
    (function (e) {
        e.fn.countdown = function (t, n) {
            function i() {
                eventDate = Date.parse(r.date) / 1e3;
                currentDate = Math.floor(e.now() / 1e3);
                //
                if (eventDate <= currentDate) {
                    n.call(this);
                    clearInterval(interval)
                }
                //
                seconds = eventDate - currentDate;
                days = Math.floor(seconds / 86400);
                seconds -= days * 60 * 60 * 24;
                hours = Math.floor(seconds / 3600);
                seconds -= hours * 60 * 60;
                minutes = Math.floor(seconds / 60);
                seconds -= minutes * 60;
                //
                days == 1 ? thisEl.find(".timeRefDays").text("DAYS") : thisEl.find(".timeRefDays").text("DAYS");
                hours == 1 ? thisEl.find(".timeRefHours").text("HOURS") : thisEl.find(".timeRefHours").text("HOURS");
                minutes == 1 ? thisEl.find(".timeRefMinutes").text("MINUTES") : thisEl.find(".timeRefMinutes").text("MINUTES");
                seconds == 1 ? thisEl.find(".timeRefSeconds").text("SECONDS") : thisEl.find(".timeRefSeconds").text("SECONDS");
                //
                if (r["format"] == "on") {
                    days = String(days).length >= 2 ? days : "0" + days;
                    hours = String(hours).length >= 2 ? hours : "0" + hours;
                    minutes = String(minutes).length >= 2 ? minutes : "0" + minutes;
                    seconds = String(seconds).length >= 2 ? seconds : "0" + seconds
                }
                //
                if (!isNaN(eventDate)) {
                    thisEl.find(".days").text(days);
                    thisEl.find(".hours").text(hours);
                    thisEl.find(".minutes").text(minutes);
                    thisEl.find(".seconds").text(seconds)
                }
                else {
                    errorMessage = "Invalid date. Example: 27 March 2015 17:00:00";
                    alert(errorMessage);
                    console.log(errorMessage);
                    clearInterval(interval)
                }
            }
            //
            var thisEl = e(this);
            var r = {
                date: null,
                format: null
            };
            //
            t && e.extend(r, t);
            i();
            interval = setInterval(i, 1e3)
        }
    })(jQuery);
    //
    $(document).ready(function () {
        function e() {
            var e = new Date;
            e.setDate(e.getDate() + 60);
            dd = e.getDate();
            mm = e.getMonth() + 1;
            y = e.getFullYear();
            futureFormattedDate = mm + "/" + dd + "/" + y;
            return futureFormattedDate
        }
        //
        $("#countdown").countdown({
            date: "17 November 2022 19:00:00", // change date/time here - do not change the format!
            format: "on"
        });
    });
});

// Color Change
$(window).scroll(function () {
    var $window = $(window),
        $body1 = $('#team'),
        $body2 = $('#register'),
        $body3 = $('#schedule'),
        $panel = $('.panel');

    var scroll = $window.scrollTop() + ($window.height() / 2);
    $panel.each(function () {
        var $this = $(this);
        if ($this.position().top <= scroll &&
            $this.position().top + $this.height() > scroll) {
            $body1.removeClass(function (index, css) {
                return (css.match(/(^|\s)color-\S+/g) ||
                    []).join('');
            });
            $body2.removeClass(function (index, css) {
                return (css.match(/(^|\s)color-\S+/g) ||
                    []).join('');
            });
            $body3.removeClass(function (index, css) {
                return (css.match(/(^|\s)color-\S+/g) ||
                    []).join('');
            });
            $body1.addClass('color-' + $(this).data('color'));
            $body2.addClass('color-' + $(this).data('color'));
            $body3.addClass('color-' + $(this).data('color'));
        }
    }).scroll();
});

// Animation
const faders = document.querySelectorAll('.fade-in');
const appearOptions = {
    threshold: 0.5
};
const appearOnScroll = new IntersectionObserver(function(
    entries,
    appearOnScroll
) {
    entries.forEach(entry => {
        if(!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('appear');
            appearOnScroll.unobserve(entry.target);
        }
    });
}, appearOptions)

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});