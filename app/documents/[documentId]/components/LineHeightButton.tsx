import { useEditorStore } from '@/store/use-editor-store'

// Be careful that if you import from radix-ui, it will result in transparent background
// import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu';
import { DropdownMenuContent, DropdownMenu, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';

import React from 'react'
import { ListCollapseIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

const LineHeightButton = () => {

    const { editor } = useEditorStore();

    const lineHeights = [
        {
            label: "Default",
            value: "normal",
        },
        {
            label: "Single",
            value: "1",
        },
        {
            label: "1.15",
            value: "1.15",
        },
        {
            label: "1.5",
            value: "1.5",
        },            {
            label: "Double",
            value: "2",
        },            
    ]
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <button
                    className="h-7 min-w-7 shrink-0 flex flex-col items-center justify-center rounded-sm hover:bg-neutral-200/80 px-1.5 overflow-hidden text-sm"
                    >
                    <ListCollapseIcon className='size-4' />
                </button>                
            </DropdownMenuTrigger>
            <DropdownMenuContent className='p-1 flex flex-col gap-y-1'>
                {lineHeights.map(({ label, value }) => (
                    <button
                        key={label}
                        onClick={()=> editor?.chain().focus().setLineHeight(value).run()}
                        className={cn(
                            "flex items-center gap-x-2 px-2 py-1 rounded-sm hover:bg-neutral-200/80",
                            editor?.getAttributes("paragraph").lineHeight === value && "bg-neutral-200/80"
                        )}
                    >
                        <span className='text-sm'>{label}</span>
                    </button>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default LineHeightButton
