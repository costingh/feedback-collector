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

        let iframeUrl = `http://localhost:3000/p/${formId}?raw=true`; // TEST

        if(type == 'popup') iframeUrl += '&centered=true'
        // const iframeUrl = `https://feedbackz.co/p/${formId}?raw=true`; // PROD

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
            iframe.style.width = "100%";  // Adjust the width of the form
            iframe.style.height = "100%";  // Adjust the height of the form
            iframe.style.zIndex = "1001";  // High z-index to make sure it covers the page

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
            overlay.addEventListener('click', () => {
                document.body.removeChild(overlay);
                document.body.removeChild(iframe);
            });

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
