import React, { useEffect, useRef } from "react";
import hljs from 'highlight.js';
import "highlight.js/styles/monokai.css";
import { Copy } from "lucide-react";

const CodeSnippet = ({handleCopy, code}: {handleCopy: any, code: string}) => {
    const codeRef = useRef<HTMLElement | null>(null);

    useEffect(() => {
        const codeElement = codeRef.current;
        
        if (codeElement) {
            // Unset previous highlighting and reset code content
            if (codeElement.dataset.highlighted) {
                codeElement.textContent = code; // Reset content
                delete codeElement.dataset.highlighted;
            }
            
            // Apply highlighting
            hljs.highlightElement(codeElement);
            codeElement.dataset.highlighted = "yes"; // Mark as highlighted
        }
    }, [code]);

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
