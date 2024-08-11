import React from 'react';
import Image from 'next/image';

interface Item {
    key: string;
    imageUrl: string;
    title: string;
    date: string;
    readTime: string;
    description: string;
}

const checkImageUrl = async (url: string): Promise<string> => {
    try {
        const response = await fetch(url, { method: 'HEAD' }); // Only fetch headers
        if (response.ok) {
            return url;
        } else {
            return "https://fakeimg.pl/400x300?text=Blog+Post";
        }
    } catch {
        return "https://fakeimg.pl/400x300?text=Blog+Post";
    }
};

// Function to transform data
export const transformData = async (data: any): Promise<Item[]> => {
    console.log("data to transform : ", data);
    const itemsPromises = data.map(async (post: any) => {
        const headingPost = post.uniquePosts.find((p: any) => p.type === 'heading');
        const paragraphPost = post.uniquePosts.find((p: any) => p.type === 'paragraph');
        const imagePost = post.uniquePosts.find((p: any) => p.type === 'image');
        // Define a default placeholder image URL
        const defaultImageUrl = "https://fakeimg.pl/400x300?text=Blog+Post";
        
        // Determine the image URL, defaulting to placeholder if no imagePost is found
        const imageUrl = imagePost && imagePost.props?.url
            ? await checkImageUrl(imagePost.props.url)
            : defaultImageUrl;
        return {
            key: post.id,
            imageUrl: imageUrl,
            title: headingPost ? headingPost.content?.find((content: any) => content.type === 'text')?.text || "No Text" : "No Title",
            date: "Date placeholder", // Replace with actual date if available
            readTime: "Read time placeholder", // Replace with actual read time if available
            description: paragraphPost ? paragraphPost.content?.find((content: any) => content.type === 'text')?.text || "No Description" : "No Description",
        };
    });
    // Wait for all promises to resolve
    return Promise.all(itemsPromises);
};

const BlogGrid = ({ items }: { items: Item[] }) => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.length === 0 ? (
          <p className="text-gray-300">No items found</p> // Display this message if no items
        ) : (
          items.map((item) => (
            <div
              key={item.key}
              className="bg-gray-800 rounded-lg shadow-lg overflow-hidden"
            >
              {item.imageUrl && (
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    width={416}
                    height={300}
                    className="object-cover"
                  />
              )}
              <div className="p-4">
                <a href={`/blog/${item.key}`} className="block text-xl font-semibold mb-2 text-gray-100">
                  {item.title}
                </a>
                <div className="flex justify-between items-center text-sm text-gray-400 mb-2">
                  <span>{item.date}</span>
                  <span>{item.readTime}</span>
                </div>
                <p className="text-gray-300">{item.description}</p>
              </div>
            </div>
          ))
        )}
      </div>
    );
  };

export default BlogGrid;
