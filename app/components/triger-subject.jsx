'use client';
import {usePathname } from "next/navigation";
import { useEffect, useState } from 'react';
import Link from "next/link";
import {LinkIcon} from "@heroicons/react/16/solid";
import {CopyToClipboard} from "react-copy-to-clipboard";

export default function TrigerSubject({ triger, children }) {
    const pathname = usePathname();
    const [fullUrl, setFullUrl] = useState('');

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const domain = window.location.origin;
            setFullUrl(`${domain}${pathname}#${triger}`);
        }
    }, [pathname]);

    return (
        <CopyToClipboard text={fullUrl}>
            <div className="tips-title" id={triger}>
                <h2><Link href={`#${triger}`} className="triger-link"><LinkIcon className="size-6 text-violet-900 rounded dark:text-violet-200 active:border" /></Link>{children}</h2>
            </div>
        </CopyToClipboard>
    );
}