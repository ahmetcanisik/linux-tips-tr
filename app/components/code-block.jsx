'use client';
import { useState } from 'react';
import React from 'react';
import hljs from "highlight.js";
import {CopyToClipboard} from "react-copy-to-clipboard";
import {Tooltip} from "react-tooltip";
import 'highlight.js/styles/gradient-dark.min.css';

export default function CodeBlock({id = 'codeBlock_default0', lang = 'html', copy = false, children}) {
    const [tooltipContent, setTooltipContent] = useState("Copy");

    const copiedActions = () => {
        if (copy) {
            setTooltipContent("Copied!");
            setTimeout(() => {
                setTooltipContent("Copy");
            }, 1000);
        }
        return null;
    };

    const formattedCode = hljs.highlight(children, {language: lang}).value;



    return (
        <div className="flex justify-start items-center my-10">
            <CopyToClipboard text={children} onCopy={copiedActions}>
                    <pre className="relative w-full">
                        <code data-tooltip-id={id} className={`hljs cursor-pointer rounded ${lang} p-0`} dangerouslySetInnerHTML={{__html: formattedCode}}></code>
                    </pre>
            </CopyToClipboard>
            {copy && <Tooltip id={id} content={tooltipContent} place="top-start" className="text-xs" variant={tooltipContent === 'Copy' ? 'dark' : "success"} />}
        </div>
    );
};