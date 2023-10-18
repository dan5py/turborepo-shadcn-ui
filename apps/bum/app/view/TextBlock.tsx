import { TextBlock } from '@ui/types'
import ReactMarkdown from 'react-markdown'
import Link from 'next/link'
import remarkBreaks from "remark-breaks";

const TextBlock = ({ text, type }: TextBlock) => {
    return (
        <div className="flex flex-col w-full max-w-2xl mx-auto h-fit">
            <ReactMarkdown
                remarkPlugins={[remarkBreaks]}
                components={{
                    h1: ({ node, children }) => <h1 className={`text-4xl font-bold capitalize text-neutral-200`}>{children}</h1>,
                    h2: ({ node, children }) => <h2 className={`text-3xl font-bold capitalize text-neutral-200`}>{children}</h2>,
                    h3: ({ node, children }) => <h3 className={`text-2xl font-bold capitalize text-neutral-200`}>{children}</h3>,
                    span: ({ node, children }) => <span className={`shrink-0 min-h-[20px] text-neutral-300`}>{children}</span>,
                    text: ({ node, children }) => <span className={`shrink-0 min-h-[20px] text-neutral-300`}>{children}</span>,
                    p: ({ node, children }) => <p className={`shrink-0 min-h-[20px] text-neutral-300`}>{children}</p>,
                    a: ({ node, href, children }) => <Link className='text-blue-500 underline' href={href || '/'}>{children}</Link>
                }}
            >{text.replace(/\n/gi, "&nbsp; \n")}</ReactMarkdown>
        </div>
    )
}

export default TextBlock