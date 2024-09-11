// import { useEffect } from 'react';

// const IS_PRODUCTION = true;

// const ScriptInjector = () => {
//     useEffect(() => {
//         // Create script element for the external script
//         const script = document.createElement('script');

//         if(IS_PRODUCTION) script.src = process.env.NEXT_PUBLIC_APP_DOMAIN! + '/popup-widgets/js/collector.js';
//         else script.src = 'https://widget.senja.io/js/collector.js';

//         script.async = true;
//         document.body.appendChild(script);

//         const inlineScript = document.createElement('script');
        
//         if(IS_PRODUCTION) {
//             inlineScript.innerHTML = `
//                 window.FeedbackCollectorConfig = {
//                     project: "projectIdHere",
//                     form: "formIdHere",
//                     trigger: {"type":"none"}
//                 }
//             `;
//         } else {
//             inlineScript.innerHTML = `
//                 window.SenjaCollectorConfig = {
//                     project: "Feedbackz",
//                     form: "xp9Ecq",
//                     trigger: {"type":"none"}
//                 }
//             `;
//         }

//         document.body.appendChild(inlineScript);

//         // Cleanup function to remove scripts when component unmounts
//         return () => {
//             document.body.removeChild(script);
//             document.body.removeChild(inlineScript);
//         };
//     }, []);

//     return null;
// };

// export default ScriptInjector;

import { useEffect } from 'react';

const IS_PRODUCTION = process.env.NODE_ENV === 'production';

const ScriptInjector = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = IS_PRODUCTION
      ? `${process.env.NEXT_PUBLIC_APP_DOMAIN}/feedbackWidget.js`
      : '/feedbackWidget.js';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      (window as any).MyReactApp.render('feedback-container');
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null;
};

export default ScriptInjector;


