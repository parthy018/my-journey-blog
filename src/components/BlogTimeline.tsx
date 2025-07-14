
// import { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Badge } from "@/components/ui/badge";
// import { Link } from "react-router-dom";
// import { StickyScrollReveal } from "@/components/ui/aceternity/sticky-scroll-reveal";
// import { BlogCard } from "./BlogCard";
// import { 
//   Pagination, 
//   PaginationContent, 
//   PaginationItem, 
//   PaginationLink, 
//   PaginationNext, 
//   PaginationPrevious 
// } from "@/components/ui/pagination";

// const blogPosts = [
//   {
//     id: 1,
//     title: "Building My First React Native App",
//     summary: "Journey through mobile development challenges and lessons learned while creating my first cross-platform application.",
//     date: "2024-01-15",
//     readTime: "8 min read",
//     tags: ["React Native", "Mobile Development", "JavaScript"],
//     thumbnail: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=200&fit=crop",
//     content: "Full blog post content would go here..."
//   },
//   {
//     id: 2,
//     title: "Mastering TypeScript: From Beginner to Advanced",
//     summary: "A comprehensive guide covering TypeScript fundamentals, advanced patterns, and real-world applications.",
//     date: "2024-01-10",
//     readTime: "12 min read",
//     tags: ["TypeScript", "JavaScript", "Development"],
//     thumbnail: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=200&fit=crop",
//     content: "Full blog post content would go here..."
//   },
//   {
//     id: 3,
//     title: "Database Design Patterns That Changed My Perspective",
//     summary: "Exploring advanced database design patterns and their impact on application performance and scalability.",
//     date: "2024-01-05",
//     readTime: "10 min read",
//     tags: ["Database", "SQL", "Architecture"],
//     thumbnail: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=200&fit=crop",
//     content: "Full blog post content would go here..."
//   },
//   {
//     id: 4,
//     title: "The Art of Code Reviews: Best Practices",
//     summary: "How effective code reviews can improve team collaboration and code quality in any development environment.",
//     date: "2023-12-28",
//     readTime: "6 min read",
//     tags: ["Code Review", "Team Work", "Best Practices"],
//     thumbnail: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=200&fit=crop",
//     content: "Full blog post content would go here..."
//   },
//   {
//     id: 5,
//     title: "Understanding Web Performance Optimization",
//     summary: "Deep dive into web performance optimization techniques to make your applications blazing fast.",
//     date: "2023-12-20",
//     readTime: "9 min read",
//     tags: ["Performance", "Web Development", "Optimization"],
//     thumbnail: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=200&fit=crop",
//     content: "Full blog post content would go here..."
//   },
//   {
//     id: 6,
//     title: "Server-Side Rendering vs. Static Site Generation",
//     summary: "Comparing different rendering strategies for modern web applications and when to use each approach.",
//     date: "2023-12-15",
//     readTime: "7 min read",
//     tags: ["SSR", "SSG", "Web Development"],
//     thumbnail: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=200&fit=crop",
//     content: "Full blog post content would go here..."
//   },
//   {
//     id: 7,
//     title: "Building Accessible Web Applications",
//     summary: "Best practices and techniques for making your web applications accessible to everyone.",
//     date: "2023-12-10",
//     readTime: "11 min read",
//     tags: ["Accessibility", "Web Development", "UI/UX"],
//     thumbnail: "https://images.unsplash.com/photo-1503437313881-503a91226402?w=400&h=200&fit=crop",
//     content: "Full blog post content would go here..."
//   },
//   {
//     id: 8,
//     title: "Introduction to WebAssembly",
//     summary: "Exploring how WebAssembly is changing the landscape of web application performance and capabilities.",
//     date: "2023-12-05",
//     readTime: "10 min read",
//     tags: ["WebAssembly", "Performance", "JavaScript"],
//     thumbnail: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&h=200&fit=crop",
//     content: "Full blog post content would go here..."
//   }
// ];

// const allTags = Array.from(new Set(blogPosts.flatMap(post => post.tags)));

// export const BlogTimeline = () => {
//   const [selectedTags, setSelectedTags] = useState<string[]>([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const POSTS_PER_PAGE = 4;

//   // Map blog posts to format needed for StickyScrollReveal
//   const timelineContent = blogPosts.map(post => ({
//     id: post.id,
//     title: post.title,
//     description: post.summary,
//     image: post.thumbnail,
//     date: new Date(post.date).toLocaleDateString("en-US", { 
//       year: 'numeric', 
//       month: 'long', 
//       day: 'numeric' 
//     }),
//     badges: post.tags,
//   }));

//   const filteredPosts = blogPosts
//     .filter(post => 
//       selectedTags.length === 0 || 
//       selectedTags.some(tag => post.tags.includes(tag))
//     );

//   // Calculate pagination for featured posts
//   const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
//   const paginatedPosts = filteredPosts.slice(
//     (currentPage - 1) * POSTS_PER_PAGE, 
//     currentPage * POSTS_PER_PAGE
//   );

//   const toggleTag = (tag: string) => {
//     setSelectedTags(prev => 
//       prev.includes(tag) 
//         ? prev.filter(t => t !== tag)
//         : [...prev, tag]
//     );
//     setCurrentPage(1); // Reset to first page when filters change
//   };

//   return (
//     <section id="blog" className="py-20 bg-background">
//       <div className="container px-4">
//         <div className="text-center mb-16">
//           <h2 className="text-3xl md:text-4xl font-bold mb-4">
//             My Learning Timeline
//           </h2>
//           <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
//             A chronological journey through my development experiences, challenges, and discoveries.
//           </p>
//         </div>

//         {/* Filters */}
//         <div className="mb-8 space-y-4">
//           <div className="flex flex-wrap gap-2 justify-center">
//             {allTags.map(tag => (
//               <Badge
//                 key={tag}
//                 variant={selectedTags.includes(tag) ? "default" : "outline"}
//                 className="cursor-pointer transition-all hover:scale-105"
//                 onClick={() => toggleTag(tag)}
//               >
//                 {tag}
//               </Badge>
//             ))}
//           </div>
//         </div>

//         {/* Sticky Scroll Timeline */}
//         <div className="mb-16 display-none md:display">
//           <StickyScrollReveal 
//             content={timelineContent} 
//             stickyClassName="top-24"
//           />
//         </div>

//       </div>
//     </section>
//   );
// };



import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { StickyScrollReveal } from "@/components/ui/aceternity/sticky-scroll-reveal";
import { BlogCard } from "./BlogCard"; // Assuming BlogCard is a separate component you have
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious
} from "@/components/ui/pagination";

const blogPosts = [
  {
    id: 1,
    title: "Building My First React Native App",
    summary: "Journey through mobile development challenges and lessons learned while creating my first cross-platform application.",
    date: "2024-01-15",
    readTime: "8 min read",
    tags: ["React Native", "Mobile Development", "JavaScript"],
    thumbnail: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=200&fit=crop",
    content: "Full blog post content would go here..."
  },
  {
    id: 2,
    title: "Mastering TypeScript: From Beginner to Advanced",
    summary: "A comprehensive guide covering TypeScript fundamentals, advanced patterns, and real-world applications.",
    date: "2024-01-10",
    readTime: "12 min read",
    tags: ["TypeScript", "JavaScript", "Development"],
    thumbnail: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=200&fit=crop",
    content: "Full blog post content would go here..."
  },
  {
    id: 3,
    title: "Database Design Patterns That Changed My Perspective",
    summary: "Exploring advanced database design patterns and their impact on application performance and scalability.",
    date: "2024-01-05",
    readTime: "10 min read",
    tags: ["Database", "SQL", "Architecture"],
    thumbnail: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=200&fit=crop",
    content: "Full blog post content would go here..."
  },
  {
    id: 4,
    title: "The Art of Code Reviews: Best Practices",
    summary: "How effective code reviews can improve team collaboration and code quality in any development environment.",
    date: "2023-12-28",
    readTime: "6 min read",
    tags: ["Code Review", "Team Work", "Best Practices"],
    thumbnail: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=200&fit=crop",
    content: "Full blog post content would go here..."
  },
  {
    id: 5,
    title: "Understanding Web Performance Optimization",
    summary: "Deep dive into web performance optimization techniques to make your applications blazing fast.",
    date: "2023-12-20",
    readTime: "9 min read",
    tags: ["Performance", "Web Development", "Optimization"],
    thumbnail: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=200&fit=crop",
    content: "Full blog post content would go here..."
  },
  {
    id: 6,
    title: "Server-Side Rendering vs. Static Site Generation",
    summary: "Comparing different rendering strategies for modern web applications and when to use each approach.",
    date: "2023-12-15",
    readTime: "7 min read",
    tags: ["SSR", "SSG", "Web Development"],
    thumbnail: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=200&fit=crop",
    content: "Full blog post content would go here..."
  },
  {
    id: 7,
    title: "Building Accessible Web Applications",
    summary: "Best practices and techniques for making your web applications accessible to everyone.",
    date: "2023-12-10",
    readTime: "11 min read",
    tags: ["Accessibility", "Web Development", "UI/UX"],
    thumbnail: "https://images.unsplash.com/photo-1503437313881-503a91226402?w=400&h=200&fit=crop",
    content: "Full blog post content would go here..."
  },
 
];

const allTags = Array.from(new Set(blogPosts.flatMap(post => post.tags)));

export const BlogTimeline = () => {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isMobile, setIsMobile] = useState(false); // New state to track mobile view
  const POSTS_PER_PAGE = 4;

  useEffect(() => {
    // Function to check if the screen is mobile
    const checkIsMobile = () => {
      // You can define your mobile breakpoint here. Common breakpoints are 640px, 768px.
      // Tailwind CSS 'md' breakpoint is 768px.
      setIsMobile(window.innerWidth < 768);
    };

    // Set initial value
    checkIsMobile();

    // Add event listener for window resize
    window.addEventListener("resize", checkIsMobile);

    // Clean up event listener on component unmount
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  // Map blog posts to format needed for StickyScrollReveal
  const timelineContent = blogPosts.map(post => ({
    id: post.id,
    title: post.title,
    description: post.summary,
    image: post.thumbnail,
    date: new Date(post.date).toLocaleDateString("en-US", {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }),
    badges: post.tags,
  }));

  const filteredPosts = blogPosts
    .filter(post =>
      selectedTags.length === 0 ||
      selectedTags.some(tag => post.tags.includes(tag))
    );

  // Calculate pagination for featured posts
  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  const toggleTag = (tag: string) => {
    setSelectedTags(prev =>
      prev.includes(tag)
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
    setCurrentPage(1); // Reset to first page when filters change
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <section id="blog" className="py-20 bg-background">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My Learning Timeline
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A chronological journey through my development experiences, challenges, and discoveries.
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {allTags.map(tag => (
              <Badge
                key={tag}
                variant={selectedTags.includes(tag) ? "default" : "outline"}
                className="cursor-pointer transition-all hover:scale-105"
                onClick={() => toggleTag(tag)}
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        {/* Conditional Rendering based on isMobile */}
        {isMobile ? (
          <>
            {/* Display BlogCard components in a grid for mobile */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 mb-8">
              {paginatedPosts.map(post => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
            {/* Pagination for mobile view */}
            <div className="flex justify-center mt-8">
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious
                      href="#"
                      onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                      aria-disabled={currentPage === 1}
                      tabIndex={currentPage === 1 ? -1 : undefined}
                      className={currentPage === 1 ? "pointer-events-none opacity-50" : undefined}
                    />
                  </PaginationItem>
                  {Array.from({ length: totalPages }, (_, i) => (
                    <PaginationItem key={i}>
                      <PaginationLink
                        href="#"
                        isActive={currentPage === i + 1}
                        onClick={() => handlePageChange(i + 1)}
                      >
                        {i + 1}
                      </PaginationLink>
                    </PaginationItem>
                  ))}
                  <PaginationItem>
                    <PaginationNext
                      href="#"
                      onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                      aria-disabled={currentPage === totalPages}
                      tabIndex={currentPage === totalPages ? -1 : undefined}
                      className={currentPage === totalPages ? "pointer-events-none opacity-50" : undefined}
                    />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          </>
        ) : (
          /* Sticky Scroll Timeline for larger screens */
          <div className="mb-16">
            <StickyScrollReveal
              content={timelineContent}
              stickyClassName="top-24"
            />
          </div>
        )}
      </div>
    </section>
  );
};