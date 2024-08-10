(function() {
    // Create the popup form
    const popup = document.createElement('div');
    popup.id = 'testimonial-popup';
    popup.style.position = 'fixed';
    popup.style.top = '0';
    popup.style.right = '0';
    popup.style.bottom = '0';
    popup.style.left = '0';
    popup.style.display = 'flex';
    popup.style.alignItems = 'center';
    popup.style.justifyContent = 'center';
    popup.style.padding = '20px';
    popup.style.borderRadius = '10px';
    // popup.style.backgroundColor = '#fff';
    // popup.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.1)';

    
    
    

    popup.innerHTML = `
        <div style="padding: 20px; background-color: #fff; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); border-radius: 5px; min-width: 500px; max-width: 100%;">
            <h2 style="font-size: 24px; font-weight: 500;">Leave a Testimonial</h2>
            <ul>
                <li style="margin-top: .25rem; margin-bottom: .25rem; padding-top: 0; padding-bottom: 0;">What do you like best about our service?</li>
                <li>Would you suggest us to a friend?</li>
            </ul>

            <div data-testid="star-btn-4" class="cursor-pointer" style="padding-right: 1.4px;"><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" stroke="currentColor" fill="currentColor" style="" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-gray-200
          duration-200 hover:scale-110
          "><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg> </div>

            <textarea style="padding: 10px; border-radius: 10px; border: 1px solid rgb(229 231 235); color: rgb(75 85 99); min-height: 120px; width: 100%;">
                Write a nice message here ✨
            </textarea>
        </div>
    `;

    document.body.appendChild(popup);

    // Handle form submission
    document.getElementById('testimonial-form').addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const message = document.getElementById('message').value;

        fetch('https://your-api-endpoint.com/api/testimonials', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, message, projectId: window.FeedbackCollectorConfig.project })
        }).then(response => response.json())
          .then(data => {
              alert('Thank you for your feedback!');
              document.getElementById('testimonial-form').reset();
          }).catch(error => {
              console.error('Error:', error);
          });
    });
})();
