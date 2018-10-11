
$(document).ready(function () {
    if (localStorage.getItem('ishct')) {
        $("#toggleHCT").css('color', 'yellow')
        for (let i = 1; i <= 26; i++)
            $(`#hctComponent${i}`).addClass('hct')
    }
    $("#toggleHCT").click(function () {
        if (localStorage.getItem('ishct')) {
            localStorage.setItem('ishct', '')
            $("#toggleHCT").css('color', 'white')
            for (let i = 1; i <= 26; i++)
                $(`#hctComponent${i}`).removeClass('hct')
        }
        else {
            localStorage.setItem('ishct', 'true')
            for (let i = 1; i <= 26; i++)
                $(`#hctComponent${i}`).addClass('hct')
            $("#toggleHCT").css('color', 'yellow')

        }
    });
});

function voice(num) {
    if (localStorage.getItem('isvoice') == 'true') {
        if (num == 1) {
            responsiveVoice.speak("Research Institute for Languages and Cultures of Asia, or RILCA, was firstly established in a name of Research Center for Languages and Cultures of Southeast Asia in 1974 to produce Linguistic academicians that are advantage in communicating with people on diversity race, languages and cultures. In 1981, was changed to Research Institute for Languages and Cultures for Rural Development and lastly became Research Institute for Languages and Cultures of Asia in 2009.");
        }
        else if (num == 2) {
            responsiveVoice.speak("The history of the museum");
        }
        else if (num == 3) {
            responsiveVoice.speak("Scroll down for the details");
        }
    }
}
function largeText() {
    document.getElementById('nav').classList.add('text-lg')
}
function setVoice() {
    if (localStorage.getItem('isvoice')) {
        localStorage.setItem('isvoice', '')
        document.getElementById('toggleTTS').style.color = 'white'
        var context = new AudioContext()
        var o = context.createOscillator()
        o.frequency.value = 350
        var g = context.createGain()
        o.connect(g)
        g.connect(context.destination)
        o.start(0)
        g.gain.exponentialRampToValueAtTime(
            0.00001, context.currentTime + 3
        )
        responsiveVoice.speak('text to speech off')
    }
    else {
        localStorage.setItem('isvoice', 'true')
        document.getElementById('toggleTTS').style.color = 'red'
        var context = new AudioContext()
        var o = context.createOscillator()
        var g = context.createGain()
        o.connect(g)
        g.connect(context.destination)
        o.start(0)
        g.gain.exponentialRampToValueAtTime(
            0.00001, context.currentTime + 3
        )
        responsiveVoice.speak('text to speech on')
    }
}