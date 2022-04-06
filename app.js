const sectionControls = document.querySelectorAll('.control');

function SectionControls() {
    // set up active button clicking to highlight which section we are on
    for (let i = 0; i < sectionControls.length; i++) {
        sectionControls[i].addEventListener('click', function() {
            let currentControl = document.querySelectorAll('.active-control');
            currentControl[0].className = currentControl[0].className.replace('active-control', '');
            this.className += ' active-control';
        })
    }
}

SectionControls()