import React from "react";
import ReactDOM from "react-dom/client";
import EmbeddableWidget from "./EmbeddableWidget";

class FeedbackzWidget extends HTMLElement {
    connectedCallback() {
        const widgetId = this.getAttribute("data-widget-id");
        if (!widgetId) {
            console.error("Widget ID is missing!");
            return;
        }

        const mountPoint = document.createElement("div");
        this.appendChild(mountPoint);

        ReactDOM.createRoot(mountPoint).render(<EmbeddableWidget params={{ url: widgetId }} />);
    }
}

if (!customElements.get("feedbackz-widget")) {
    customElements.define("feedbackz-widget", FeedbackzWidget);
}
