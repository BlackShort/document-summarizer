"use client"
import { useState, useMemo, JSX, SVGProps } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Slider } from "@/components/ui/slider"
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable"
import Link from "next/link"
import { Navbar } from '@/components/navbar'
// import * as docx from 'html-docx-js/dist/html-docx'

export default function Component() {
    const [inputText, setInputText] = useState("")
    const [summaryLength, setSummaryLength] = useState(150)

    const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setInputText(e.target.value)
    }

    const handleSummaryLengthChange = (value: number[]) => {
        setSummaryLength(value[0]);
    };

    const handleClearInput = () => {
        setInputText("");
        setSummaryLength(150);
    };

    const handleCopyToClipboard = () => {
        navigator.clipboard.writeText(summary);
    }

    const handleExportToDoc = () => {
        // Implement DOCX export logic
    }

    const wordCount = inputText.trim().split(/\s+/).filter(Boolean).length
    const summary = useMemo(() => {
        return inputText.split("\n").slice(0, summaryLength).join("\n")
    }, [inputText, summaryLength])

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setInputText(reader.result as string);
            };
            reader.readAsText(file);
        }
    };

    return (
        <div className="flex flex-col min-h-[100dvh]">
            <Navbar />
            <main className="flex flex-col w-full h-[80vh] p-6">
                <ResizablePanelGroup direction="horizontal" className="w-full h-48 border rounded-t-lg border-neutral-900">
                    <ResizablePanel className="min-w-72">
                        <Textarea
                            value={inputText}
                            onChange={handleInputChange}
                            className="h-full resize-none rounded-none border-none"
                            placeholder="Paste or type your text here..."
                        />
                    </ResizablePanel>
                    <ResizableHandle className="bg-neutral-900" />
                    <ResizablePanel className="min-w-72">
                        <Textarea
                            value={summary}
                            readOnly className="h-full resize-none rounded-none border-none focus-visible:outline-none"
                            placeholder="Summary will be shown here..."
                        />
                    </ResizablePanel>
                </ResizablePanelGroup>
                <div className="flex items-center justify-between gap-2 border border-neutral-900 border-t-0 rounded-b-lg p-2">
                    <div className="w-full flex items-center justify-between gap-4">
                        <div className="flex items-center justify-evenly gap-2">
                            <input type="file" id="file-upload" className="hidden" accept=".docx,.pdf,.txt" onChange={handleFileChange} />
                            <label
                                htmlFor="file-upload"
                                className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 cursor-pointer"
                            >
                                <UploadIcon className="h-5 w-5 mr-2" />
                                Upload File
                            </label>
                        </div>
                        <div className="flex items-center gap-2">
                            <Slider
                                value={[summaryLength]}
                                onValueChange={handleSummaryLengthChange}
                                className="w-32 [&>span:first-child]:h-1 [&>span:first-child]:bg-primary [&_[role=slider]]:bg-primary [&_[role=slider]]:w-3 [&_[role=slider]]:h-3 [&_[role=slider]]:border-0 [&>span:first-child_span]:bg-primary [&_[role=slider]:focus-visible]:ring-0 [&_[role=slider]:focus-visible]:ring-offset-0 [&_[role=slider]:focus-visible]:scale-105 [&_[role=slider]:focus-visible]:transition-transform cursor-pointer"
                                max={250}
                                step={50}
                            />
                            <span className="text-sm font-medium">{summaryLength} words</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <FilePenIcon className="h-5 w-5 text-muted-foreground" />
                            <span className="text-sm font-medium text-muted-foreground">{wordCount} words</span>
                        </div>
                        <Button variant="outline" onClick={handleClearInput}>
                            Clear
                        </Button>
                    </div>
                    <div className="w-full flex items-center justify-end gap-4">
                        <div className={`${inputText.length > 100 ? 'cursor-pointer' : 'cursor-not-allowed'}`}>
                            <Button variant="outline" disabled={inputText.length > 100 ? false : true} className="border-neutral-500/50" onClick={() => { }}>
                                Generate
                            </Button>
                        </div>
                        <div className={`${inputText.length > 100 ? 'cursor-pointer' : 'cursor-not-allowed'}`}>
                            <Button variant="ghost" disabled={inputText.length > 100 ? false : true} size="icon" onClick={handleCopyToClipboard}>
                                <CopyIcon className="h-5 w-5 text-muted-foreground" />
                                <span className="sr-only">Copy Summary</span>
                            </Button>
                        </div>
                        <div className={`${inputText.length > 100 ? 'cursor-pointer' : 'cursor-not-allowed'}`}>
                            <Button variant="ghost" disabled={inputText.length > 100 ? false : true} size="icon" onClick={handleExportToDoc}>
                                <DownloadIcon className="h-5 w-5 text-muted-foreground" />
                                <span className="sr-only">Export to DOCX</span>
                            </Button>
                        </div>
                    </div>
                </div>
            </main>
            <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
                <p className="text-xs text-muted-foreground">&copy; 2024 DocSumm. All rights reserved.</p>
                <nav className="sm:ml-auto flex gap-4 sm:gap-6">
                    <Link href="#" className="text-xs hover:underline underline-offset-4 text-muted-foreground" prefetch={false}>
                        Privacy
                    </Link>
                    <Link href="#" className="text-xs hover:underline underline-offset-4 text-muted-foreground" prefetch={false}>
                        Terms of Service
                    </Link>
                </nav>
            </footer>
        </div>
    )
}


function UploadIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="17 8 12 3 7 8" />
            <line x1="12" x2="12" y1="3" y2="15" />
        </svg>
    )
}

function CopyIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
            <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
        </svg>
    )
}


function DownloadIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" x2="12" y1="15" y2="3" />
        </svg>
    )
}


function FilePenIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M12 22h6a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v10" />
            <path d="M14 2v4a2 2 0 0 0 2 2h4" />
            <path d="M10.4 12.6a2 2 0 1 1 3 3L8 21l-4 1 1-4Z" />
        </svg>
    )
}