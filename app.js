const sectionControls = document.querySelectorAll('.control');
const body = document.querySelector('body');
const sectionsMap = new Map();

function SectionControls() {
    // set up active button clicking to highlight which section we are on
    for (let i = 0; i < sectionControls.length; i++) {
        sectionControls[i].addEventListener('click', function() {
            let currentControl = document.querySelectorAll('.active-control');
            currentControl[0].className = currentControl[0].className.replace('active-control', '');
            this.className += ' active-control';
        })

        // add controls to map for determining animation direction later
        sectionsMap.set(sectionControls[i].dataset.id, i);
    }

    body.addEventListener('click', (e) => {
        const id = e.target.dataset.id;

        // make sure a button was clicked and not just anywhere in the body
        if (sectionsMap.get(id) != null) {
            // this id will be the section corresponding to whichever button was clicked
            const activeSection = document.querySelector('.active-section');
            const sections = document.querySelectorAll('section');
            
            // reset section classes to prepare to set new active/inactive sections and animations
            sections.forEach((section) => {
                section.className = "";
            })

            // set previous section as inactive to move it to the back
            activeSection.classList.add('inactive-section');

            // find whatever corresponding section was clicked for
            const element = document.getElementById(id);

            // if next section is to the right of the old section, animate from the right, else animate from left
            if (sectionsMap.get(activeSection.id) < sectionsMap.get(element.id)) {
                activeSection.classList.add('slideout-to-left');
                element.classList.add('slidein-from-right');
            } else {
                activeSection.classList.add('slideout-to-right');
                element.classList.add('slidein-from-left');
            }
            
            element.classList.add('active-section');
        }
    })
}

SectionControls()