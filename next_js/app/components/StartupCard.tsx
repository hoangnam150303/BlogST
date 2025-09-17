// components/StartupCard.tsx
import React from 'react';
import { formatViDateTime } from '@/utils/FormatDatetime';
import { EyeIcon } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
type StartupCardType = {
    _createdAt: string;
    _id: number | string;
    view: number;
    author: { id: number | string, name?: string, avatar: string };
    description: string;
    title: string;
    category: string;
    image: string;
};

const StartupCard = ({ post }: { post: StartupCardType }) => {
    const { _createdAt, _id, view, author: { id: authorId, name, avatar }, description, title, category, image } = post;
    return (
        <li className="startup-card group">
            <div className="flex-between">
                <p className="startup-card_date">{formatViDateTime(_createdAt)}</p>
                <div className='flex gap-1.5'>
                    <EyeIcon size={16} className='text-cyan-800' />
                    <span className='text-16-medium'>{view}</span>
                </div>
            </div>
            <div className='flex-between mt-5 gap-5'>
                <div className='flex-1'>
                    <Link href={`/user/${authorId}`} >
                        <p className='text-16-medium line-clamp-1'>
                            {name}
                        </p>
                    </Link>
                    <Link href={`/startup/${_id}`}>
                        <h3 className='text-26-semibold line-clamp-1'>
                            {title}
                        </h3>
                    </Link>
                </div>
                <Link href={`/user/${authorId}`}>
                    <Image src={avatar} alt={title} width={48} height={48} className='rounded-full' />
                </Link>
            </div>
            <Link href={`/startup/${_id}`}>
                <p className='startup-card_desc'>
                    {description}
                </p>
                <img src={image} alt="placeholder" className='startup-card_img' />
            </Link>
            <div className='flex-between gap-3 mt-5'>
                <Link href={`/?query=${category.toLowerCase()}`} >
                    <p className='text-16-medium'>
                        {category}
                    </p>
                </Link>
                <button className='startup-card_btn'>
                    <Link href={`/startup/${_id}`}>
                        Details
                    </Link>
                </button>
            </div>
        </li>
    );
};

export default StartupCard;
