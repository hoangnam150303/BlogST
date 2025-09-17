import Image from 'next/image'
import Link from 'next/link'
import React, { Suspense } from 'react'
import markdownit from 'markdown-it'
import View from '@/app/components/View'
const page = async ({ params }: { params: { id: string } }) => {
  const id = (await params).id
  const md = new markdownit()
  const post =
  {
    _createdAt: "2024-06-18T10:00:00Z",
    _id: 1,
    view: 5,
    author: { id: 1, name: "John Doe", avatar: "https://cdn-icons-png.flaticon.com/512/6596/6596121.png" },
    description: "This is a sample description for the first post.",
    title: "First Post",
    category: "Tech",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT77_GpCChuxQCCjU9EmSn9hyf6kXchGq99wA&ss",
  }
  const parsedContent = md.render(post?.description || '')
  return (
    <>
      <section className='red-container !min-h-[230px]'>
        <p className='tag'>
          {post._createdAt}
        </p>
        <h1 className='heading'>{post.title}</h1>
        <p className='sub_heading !max-w-5xl'>{post.description}</p>
      </section>
      <section className='section_container'>
        <img src={post.image} alt="thumbail" className='w-full h-auto rounded-xl' />
        <div className='space-y-5 mt-10 max-w-4xl mx-auto'>
          <div className='flex-between gap-5'>
            <Link href={`/user/${post.author.id}`} className='flex items-center gap-2 mb-3 '>
              <Image src={post.author.avatar} alt="avatar" width={64} height={64} className='rounded-full drop-shadow-lg' />
              <div>
                <p className='text-20-medium'>{post.author.name}</p>
                <p className='text-16-medium !text-black-300'>@hoangnam</p>
              </div>
            </Link>
            <p className='category-tag'>{post.category}</p>
          </div>
          <h3 className='text-30-bold'>Pitch Details</h3>
          {parsedContent ? (
            <article
              className='prose max-w-4xl font-mono break-all'
              dangerouslySetInnerHTML={{ __html: parsedContent }} />
          ) : (
            <p className='no-result'></p>
          )}
        </div>
        <hr className='divider' />
        <Suspense>
          <View id={id}/>
        </Suspense>
      </section>
    </>
  )
}

export default page