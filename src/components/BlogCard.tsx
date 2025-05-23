
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CardSpotlight } from "@/components/ui/aceternity/card-spotlight";
import { Link } from "react-router-dom";

export interface BlogPost {
  id: number;
  title: string;
  summary: string;
  date: string;
  readTime: string;
  tags: string[];
  thumbnail: string;
  content: string;
}

interface BlogCardProps {
  post: BlogPost;
}

export const BlogCard = ({ post }: BlogCardProps) => {
  return (
    <CardSpotlight className="max-w-md mx-auto md:mx-0 mb-4 overflow-hidden bg-card hover:bg-card/80 transition-colors duration-300 group">
      <div className="aspect-video w-full overflow-hidden rounded-t-lg mb-4">
        <img 
          src={post.thumbnail} 
          alt={post.title} 
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-wrap gap-1 mb-3">
        {post.tags.map((tag) => (
          <Badge key={tag} variant="secondary" className="text-xs">
            {tag}
          </Badge>
        ))}
      </div>
      <h3 className="font-bold text-xl mb-2 line-clamp-2">{post.title}</h3>
      <p className="text-muted-foreground text-sm mb-3">
        {new Date(post.date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
        {" · "}
        {post.readTime}
      </p>
      <p className="text-muted-foreground mb-4 line-clamp-3">{post.summary}</p>
      <Button size="sm" variant="default" asChild>
        <Link to={`/blog/${post.id}`}>
          Read More
        </Link>
      </Button>
    </CardSpotlight>
  );
};
