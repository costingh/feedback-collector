import React, { useEffect, useRef } from "react";
import hljs from 'highlight.js';
import "highlight.js/styles/monokai.css";
import { Copy } from "lucide-react";

const CodeSnippet = ({handleCopy}: {handleCopy: any}) => {
    const codeRef = useRef(null);

    const code = `<script type="text/javascript" src="https://widget.senja.io/js/iframeResizer.min.js"></script>
<iframe id="senja-collector-iframe" src="https://senja.io/p/feedbackr/r/xp9Ecq?mode=embed&nostyle=true" allow="camera;microphone" title="Senja form" frameborder="0" scrolling="no" width="100%" height="700"></iframe>
<script type="text/javascript">iFrameResize({log: false, checkOrigin: false}, "#senja-collector-iframe");</script>`;

    useEffect(() => {
        //@ts-ignore
        hljs.highlightElement(codeRef.current);
    }, []);

    return (
        <div className='relative'>
            <pre>
                <code ref={codeRef} className="xml text-[14px] rounded-[10px] py-2 px-3 hide-scrollbar mt-2">
                    {code}
                </code>
            </pre>
            <div className="absolute cursor-pointer bg-gray-200 rounded-[6px] p-[5px] right-2 top-2" onClick={() => handleCopy(code)}>
                <Copy className='text-gray-800' size={14}/>
            </div>
        </div>
    );
};

export default CodeSnippet;
