function resize(elementId) {
    let width = document.getElementById(elementId).offsetWidth;
    console.log(width);
    document.documentElement.style.setProperty(`--${elementId}`, width + 'px');
}
resize('page_1');
resize('page_2');
resize('page_3');
window.addEventListener('resize', function() {
    resize('page_1');
    resize('page_2');
    resize('page_3');
});

function running(){
    let run = document.getElementById('sport-1') 
    let hockey = document.getElementById('sport-2') 
    let sailing = document.getElementById('sport-3')
    let run_text = document.getElementById('sport_name_1')
    let hockey_text = document.getElementById('sport_name_2')
    let sailing_text = document.getElementById('sport_name_3')
    if (sessionStorage.getItem(`sailing`) == `true`){
        console.log('true')
        hockey.style.opacity = '0%'
        hockey.style.left = '100svw'
        hockey.style.top = '20svh'
        setTimeout(function(){hockey.style.opacity = '100%'},3000)
        sessionStorage.setItem('running', `true`)
        sessionStorage.setItem('hockey', `false`)
        sessionStorage.setItem('sailing', `false`)
        run.style.left = '0svw'
        run.style.top = '1svh'
        sailing.style.left = '100svw'
        sailing.style.top = '20svh'
        hockey_text.style.color = "#D9D9D9"
        run_text.style.color = "#ff924d"
        sailing_text.style.color = "#D9D9D9"
    }else{
        sessionStorage.setItem('running', `true`)
        sessionStorage.setItem('hockey', `false`)
        sessionStorage.setItem('sailing', `false`)
        hockey.style.left = '100svw'
        hockey.style.top = '20svh'
        run.style.left = '0svw'
        run.style.top = '1svh'
        sailing.style.left = '100svw'
        sailing.style.top = '20svh'
        hockey_text.style.color = "#D9D9D9"
        run_text.style.color = "#ff924d"
        sailing_text.style.color = "#D9D9D9"
    }
}
function hockey(){
    let run = document.getElementById('sport-1') 
    let hockey = document.getElementById('sport-2') 
    let sailing = document.getElementById('sport-3')
    let run_text = document.getElementById('sport_name_1')
    let hockey_text = document.getElementById('sport_name_2')
    let sailing_text = document.getElementById('sport_name_3')
    sessionStorage.setItem('running', `false`)
    sessionStorage.setItem('hockey', `true`)
    sessionStorage.setItem('sailing', `false`)
    hockey.style.left = '0svw'
    hockey.style.top = '1svh'
    run.style.left = '-100svw'
    run.style.top = '20svh'
    sailing.style.left = '100svw'
    sailing.style.top = '20svh'
    hockey_text.style.color = "#7ed957"
    run_text.style.color = "#D9D9D9"
    sailing_text.style.color = "#D9D9D9"
}
function sailing(){
    console.log(sessionStorage.getItem('sailing'))
    let run = document.getElementById('sport-1') 
    let hockey = document.getElementById('sport-2') 
    let sailing = document.getElementById('sport-3')
    let run_text = document.getElementById('sport_name_1')
    let hockey_text = document.getElementById('sport_name_2')
    let sailing_text = document.getElementById('sport_name_3')
    if (sessionStorage.getItem(`running`) == `true`){
        hockey.style.opacity = '0%'
        hockey.style.left = '-100svw'
        hockey.style.top = '20svh'
        setTimeout(function(){hockey.style.opacity = '100%'},3000)
        sessionStorage.setItem('running', `false`)
        sessionStorage.setItem('hockey', `false`)
        sessionStorage.setItem('sailing', `true`)
        run.style.left = '-100svw'
        run.style.top = '20svh'
        sailing.style.left = '0svw'
        sailing.style.top = '1svh'
        hockey_text.style.color = "#D9D9D9"
        run_text.style.color = "#D9D9D9"
        sailing_text.style.color = "#FFFFFF"
    }else{
        sessionStorage.setItem('running', `false`)
        sessionStorage.setItem('hockey', `false`)
        sessionStorage.setItem('sailing', `true`)
        hockey.style.left = '-100svw'
        hockey.style.top = '20svh'
        run.style.left = '-100svw'
        run.style.top = '20svh'
        sailing.style.left = '0svw'
        sailing.style.top = '1svh'
        hockey_text.style.color = "#D9D9D9"
        run_text.style.color = "#D9D9D9"
        sailing_text.style.color = "#FFFFFF"
    }
}
sessionStorage.setItem('running', `false`)
sessionStorage.setItem('hockey', `true`)
sessionStorage.setItem('sailing', `false`)

document.getElementById(`page_1`).addEventListener('click', function(){
    running()
})
document.getElementById(`page_2`).addEventListener('click', function(){
    hockey()
})
document.getElementById(`page_3`).addEventListener('click', function(){
    sailing()
})