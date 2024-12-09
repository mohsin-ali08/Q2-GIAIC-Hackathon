'use client';
import React from 'react';
import Image from 'next/image';
import FilterSection from "@/components/FilterSection";
const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'Mauris at orci non vulputate diam tincidunt nec.',
      image: '/Blogs/blog4.jpg',
      excerpt: 'Mauris at orci non vulputate diam tincidunt nec.',
      date: 'October 15, 2024',
      author: 'John Doe',
    },
    {
      id: 2,
      title: 'Mauris at orci non vulputate diam tincidunt nec.',
      image: '/Blogs/blog5.jpg',
      excerpt: 'Sit nam congue feugiat nisl, mauris amet nisi. ',
      date: 'October 18, 2024',
      author: 'Jane Smith',
    },
    {
      id: 3,
      title: 'Mauris at orci non vulputate diam tincidunt nec.',
      image: '/Blogs/blog6.jpg',
      excerpt: 'JavaScript closures can be tricky, but this guide will help you understand them better...',
      date: 'October 20, 2024',
      author: 'Sarah Lee',
    },
    {
      id: 4,
      title: 'Why You Should Learn Tailwind CSS',
      image: '/Blogs/blog4.jpg',
      excerpt: 'Tailwind CSS is becoming one of the most popular CSS frameworks, and here’s why...',
      date: 'October 25, 2024',
      author: 'Michael Clark',
    },
    {
      id: 5,
      title: 'Why You Should Learn Tailwind CSS',
      image: '/Blogs/blog5.jpg',
      excerpt: 'Tailwind CSS is becoming one of the most popular CSS frameworks, and here’s why...',
      date: 'October 25, 2024',
      author: 'Michael Clark',
    },
    {
      id: 6,
      title: 'Why You Should Learn Tailwind CSS',
      image: '/Blogs/blog6.jpg',
      excerpt: 'Tailwind CSS is becoming one of the most popular CSS frameworks, and here’s why...',
      date: 'October 25, 2024',
      author: 'Michael Clark',
    },
  ];

  return (
    <section className="pt-2">
       <FilterSection
        textTitle={"Blog Page!"}
        textNavigation={"Home . Pages . "}
        pageName={"Blog Page..."}
      />
      <div className="container mx-auto py-5">
        <div className="space-y-12 md:w-1/2 mx-auto">
          {blogPosts.map((post) => (
            <div key={post.id} className="flex flex-col md:flex-row bg-white rounded-lg shadow-md overflow-hidden">
            
              <div className="md:w-1/3 w-full">
                <Image src={post.image} width={300} height={300} alt={post.title} className="w-full h-full object-cover" />
              </div>

             
              <div className="md:w-2/3 w-full p-6">
                <h3 className="text-2xl font-semibold text-[#0D0E43]">{post.title}</h3>
                <p className="text-sm text-gray-500 mt-2">{post.date} - {post.author}</p>
                <p className="text-base text-gray-700 mt-4">{post.excerpt}</p>
                <a href="#" className="text-[#FB2E86] hover:underline mt-4 inline-block">Read More</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
