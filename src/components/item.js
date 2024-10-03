import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
const Item = ({title, content, image, url=''}) => {
    return (
        



<Card  className="max-w-sm bg-white border border-zinc-200 rounded-lg shadow dark:bg-zinc-800 dark:border-zinc-700">
    <CardContent>
    <Link href={url}>
        <img  className="min-h-48 rounded-t-lg" src={image} alt={title} />
    </Link>
</CardContent>
    <div className="p-5">
        <Link href={url}>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-zinc-900 dark:text-white">{title}</h5>
        </Link>
        <p className="mb-3 font-normal text-zinc-700 dark:text-zinc-400">{content}</p>
        
        <Button >
        <Link href={url} className="flex gap-2 items-center">
            See more<svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </Link>
        </Button>
    </div>
    
</Card>


    );
}

export default Card;
