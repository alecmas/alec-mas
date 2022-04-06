const sectionControls = document.querySelectorAll('.control');
const sections = document.querySelectorAll('section');
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

        if (id) {
            // hide other sections
            sections.forEach((section) => {
                section.classList.remove('active-section');
            })

            // set clicked button's corresponding section to active
            const element = document.getElementById(id);
            element.classList.add('active-section');
        }
    })
}

SectionControls()