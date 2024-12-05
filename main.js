console.log("Hello Sunshine! You are beautiful!");

function showPage(page) {
  // Get all pages
  document.querySelectorAll('div.doc').forEach(div => {
    // Check if it's the selected page
    if (div.id === page) {
      // Remove display: none (or apply display block if necessary)
      div.style.display = '';
      window.scrollTo({top: 0, behavior: 'smooth'});
    } else {
      // Hide all other pages
      div.style.display = 'none';
    }
  });
}


document.addEventListener('DOMContentLoaded', function () {
  // Set up button click handlers
  document.querySelectorAll('.nav-button').forEach(button => {
    button.onclick = function () {
      showPage(this.dataset.page);
    };
  });

    // Redirect to page5 when the "CONTACT US" button is clicked
    const contactButton = document.querySelector('.contact-button');
    contactButton.addEventListener('click', () => {
      showPage('page5');
    });

  //Set up card click handlers
  document.querySelectorAll('#page1 .subcard').forEach((subcard, index) => {
    const page = `page${index + 2}`;
    subcard.onclick = function () {
      showPage(page);
    };
  })

  document.querySelector('.discover-button').addEventListener('click', () => {
    document.getElementById('card2').scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  });


//   document.querySelectorAll('.expand-btn').forEach(button => {
//     button.addEventListener('click', function () {
//       const card = this.parentElement;

//       // Check if the card is already fullscreen
//       if (card.classList.contains('fullscreen')) {
//         card.classList.remove('fullscreen');
//         // Unlock background scrolling
//         document.body.style.overflow = '';
//       } else {
//         // Close other fullscreen cards
//         document.querySelectorAll('.intern-card.fullscreen').forEach(openCard => {
//           openCard.classList.remove('fullscreen');
//         });
//         // Lock background scrolling
//         document.body.style.overflow = 'hidden';

//         // Expand the clicked card
//         card.classList.add('fullscreen');
//       }
//     });
//   });

//   document.querySelectorAll('.expand-btn').forEach(button => {
//     button.addEventListener('click', function() {
//         const internCard = this.closest('.intern-card');
//         const isExpanded = internCard.classList.contains('expanded');

//         // Toggle the expanded class
//         internCard.classList.toggle('expanded');

//         // Change the button text
//         if (isExpanded) {
//             this.textContent = 'More';
//         } else {
//             this.textContent = 'Less';
//         }
//     });
// });

const backdrop = document.createElement('div');
backdrop.classList.add('backdrop');
document.body.appendChild(backdrop);

document.querySelectorAll('.expand-btn').forEach(button => {
  button.addEventListener('click', function () {
    const card = this.closest('.intern-card');
    const isFullscreen = card.classList.contains('fullscreen');

    // Toggle the fullscreen class
    card.classList.toggle('fullscreen');

    // Lock or unlock the background scrolling and toggle backdrop
    document.body.style.overflow = isFullscreen ? '' : 'hidden';
    backdrop.classList.toggle('active', !isFullscreen);

    // Optionally, change the button text
    this.textContent = isFullscreen ? 'More' : 'Less';

  });
});

// Close fullscreen when clicking the backdrop
backdrop.addEventListener('click', () => {
  document.querySelectorAll('.intern-card.fullscreen').forEach(card => {
    card.classList.remove('fullscreen');
  });
  document.body.style.overflow = '';
  backdrop.classList.remove('active');
});

  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('nav');

  // Toggle the navigation menu
  menuToggle.addEventListener('click', (e) => {
    nav.classList.toggle('expanded');
     menuToggle.textContent = nav.classList.contains('expanded') ? '×' : '☰';
    e.stopPropagation(); // Prevent the click event from propagating to the document
  });

  // Collapse the menu when clicking outside of it
  document.addEventListener('click', (e) => {
    if (!nav.contains(e.target)) {
      nav.classList.remove('expanded');
    }
  });



  // Show #page1 by default on load
  showPage('page1');
});
