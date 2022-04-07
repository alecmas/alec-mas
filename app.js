const sectionControls = document.querySelectorAll('.control');
const body = document.querySelector('body');

function SectionControls() {
    // set up active button clicking to highlight which section we are on
    for (let i = 0; i < sectionControls.length; i++) {
        sectionControls[i].addEventListener('click', function() {
            let currentControl = document.querySelectorAll('.active-control');
            currentControl[0].className = currentControl[0].className.replace('active-control', '');
            this.className += ' active-control';
        })
    }

    body.addEventListener('click', (e) => {
        // this id will be the section corresponding to whichever button was clicked
        const id = e.target.dataset.id;
        const activeSection = document.querySelector('.active-section');
        const inactiveSections = document.querySelectorAll('.inactive-section');

        // clear all inactive sections
        inactiveSections.forEach((section) => {
            section.classList.remove('inactive-section');
        })

        if (id) {
            // hide other sections
            activeSection.classList.remove('active-section');
            activeSection.classList.add('inactive-section');

            // set clicked button's corresponding section to active
            const element = document.getElementById(id);
            element.classList.add('active-section');
            element.classList.remove('inactive-section');
        }
    })
}

SectionControls()