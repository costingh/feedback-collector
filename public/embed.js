(function () {
    // Helper function to parse query params
    function getQueryParams() {
        const params = new URLSearchParams(window.location.search);
        return {
            width: params.get("width") || "100%",  // Default width
            height: params.get("height") || "600",  // Default height
            allow: params.get("allow") || "camera;microphone",  // Default permissions
        };
    }

    const { width, height, allow } = getQueryParams();

    // Find all divs with the 'data-collector' attribute
    const collectorElements = document.querySelectorAll('div[data-collector="feedbackz-collector"]');

    collectorElements.forEach((element) => {
        // Retrieve the form ID and type from the 'data-*' attributes on the div
        const formId = element.getAttribute("data-form-id");
        const type = element.getAttribute("data-form-type");

        // let iframeUrl = `http://localhost:3000/p/${formId}?raw=true`; // TEST URL

        if (type === 'popup') iframeUrl += '&centered=true';
        const iframeUrl = `https://feedbackz.co/p/${formId}?raw=true`; // PROD URL

        // Create the iframe element
        const iframe = document.createElement("iframe");
        iframe.src = iframeUrl;
        iframe.allow = allow;
        iframe.style.border = "none";
        iframe.setAttribute("scrolling", "no");

        if (type === 'popup') {
            // Fullscreen popup logic
            iframe.style.position = "fixed";
            iframe.style.top = "50%";
            iframe.style.left = "50%";
            iframe.style.transform = "translate(-50%, -50%)";
            iframe.style.width = "100%";  // Full width
            iframe.style.height = "100%";  // Full height
            iframe.style.zIndex = "1001";  // High z-index

            // Create overlay background
            const overlay = document.createElement("div");
            overlay.style.position = "fixed";
            overlay.style.top = "0";
            overlay.style.left = "0";
            overlay.style.width = "100%";
            overlay.style.height = "100%";
            overlay.style.backgroundColor = "rgba(0, 0, 0, 0.5)";  // Transparent black
            overlay.style.zIndex = "1000";  // Lower z-index than iframe
            overlay.style.transition = "opacity 0.3s ease";

            // Close iframe on overlay click
            overlay.addEventListener("click", () => {
                document.body.removeChild(overlay);
                document.body.removeChild(iframe);
            });

            // Create the close button
            const closeButton = document.createElement("button");
            closeButton.innerHTML = "&#x2715;";
            closeButton.style.position = "absolute";
            closeButton.style.top = "-9px";
            closeButton.style.right = "-8px";
            closeButton.style.fontSize = "13px";
            closeButton.style.border = "none";
            closeButton.style.cursor = "pointer";
            closeButton.style.zIndex = "1002"; 
            closeButton.style.width = "20px"; 
            closeButton.style.height = "20px"; 
            closeButton.style.background = "#fff"; 
            closeButton.style.borderRadius = "50%"; 
            closeButton.style.border = "1px solid gray"; 


            // Close iframe and overlay on button click
            closeButton.addEventListener("click", () => {
                document.body.removeChild(overlay);
                document.body.removeChild(iframe);
            });

            // Wait until iframe loads, then add the close button to the .testimonial-modal
            iframe.onload = function () {
                setTimeout(() => {
                    try {
                        const iframeDocument = iframe.contentWindow.document;
                        const modalContainer = iframeDocument.querySelector('.testimonial-modal');
                        console.log(modalContainer)
                        if (modalContainer) {
                            console.log('Modal container found inside iframe');
                            modalContainer.style.position = "relative"; // Ensure relative positioning
                            modalContainer.appendChild(closeButton); // Add close button to the modal
                        } else {
                            console.error('Modal container not found inside iframe');
                        }
                    } catch (err) {
                        console.error('Error accessing iframe content:', err);
                    }
                }, 1300)
            };

            // Append overlay and iframe to the body
            document.body.appendChild(overlay);
            document.body.appendChild(iframe);
        } else {
            // Normal inline iframe logic
            iframe.width = width;
            iframe.height = height;
            element.appendChild(iframe);
        }
    });
})();
