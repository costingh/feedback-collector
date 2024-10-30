(function () {
    const collectorElements = document.querySelectorAll('div[data-widget="feedbackz-widget"]');

    // function getQueryParams() {
    //     const params = new URLSearchParams(window.location.search);
    //     return {
    //         width: params.get("width") || "100%",  // Default width
    //         height: params.get("height") || "600",  // Default height
    //         allow: params.get("allow") || "camera;microphone",  // Default permissions
    //     };
    // }

    // const { width, height, allow } = getQueryParams();

    collectorElements.forEach((element) => {
        const widgetId = element.getAttribute("data-widget-id");

        // const iframeUrl = `http://localhost:3000/w/${widgetId}`; // TEST URL
        const iframeUrl = `https://feedbackz.co/w/${widgetId}`; // PROD URL

        // Create the iframe element
        const iframe = document.createElement("iframe");
        iframe.src = iframeUrl;
        // iframe.allow = allow;
        iframe.style.border = "none";
        iframe.setAttribute("scrolling", "no");

        // iframe.width = width;
        // iframe.height = height;
        element.appendChild(iframe);
    });
})();
