import React, { useEffect, useState, useRef } from "react";
import { Block, BlockNoteEditor, BlockNoteSchema, defaultBlockSpecs } from "@blocknote/core";
import "@blocknote/core/fonts/inter.css";
import { useCreateBlockNote } from "@blocknote/react";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/mantine/style.css";
import "./BlockNoteBlogView.css";
import { CodeBlock } from "@/lib/CodeBlock";

/* eslint-disable */
// Define the type for the fetched data
interface Content {
  type: "text" | "link";
  text?: string;
  styles?: Record<string, any>;
  url?: string;
}

type ContentType = "audio" | "table" | "video" | "image" | "paragraph" | "heading" | "bulletListItem" | "numberedListItem" | "checkListItem" | "file";

interface UniquePost {
  id: number;
  unique_post_id: string;
  type: ContentType;
  props: Record<string, any>;
  content: Content[];
  children: any[];
}

interface PostData {
  id: number;
  uniquePosts: UniquePost[];
}

// Fetch data from the API
async function fetchData(): Promise<PostData[]> {
  const response = await fetch('http://127.0.0.1:8000/api/data/');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const data = await response.json();
  console.log("data :", data);
  return data;
}

// Convert API data to BlockNote blocks
const convertToBlocks = (data: PostData[]): Block[] => {
  const blocks: Block[] = [];
  data.forEach(postData => {
    postData.uniquePosts.forEach(post => {
      const block: Block = {
        id: post.unique_post_id,
        type: post.type,
        // eslint-disable-next-line
        content: post.content.map(c => {
          if (c.type === "text") {
            return {
              type: "text",
              text: c.text || "",
              styles: c.styles || {},
            };
          } else if (c.type === "link") {
            return {
              type: "link",
              url: c.url || "",
              text: c.text || "",
            };
          } else {
            throw new Error(`Unsupported content type: ${c.type}`);
          }
        }),
        // eslint-disable-next-line
        props: post.props,
      };
      console.log("block", block);
      blocks.push(block);
    });
  });
  // eslint-disable-next-line
  return blocks.length > 0 ? blocks : [{ type: "paragraph", content: [{ type: "text", text: "No content available.", styles: {} }] }];
};

export default function BlockNoteBlogView() {
  const editorRef = useRef<BlockNoteEditor | null>(null);
  // eslint-disable-next-line
  const [blocks, setBlocks] = useState<Block[]>([{
    type: "paragraph",
    content: [{ type: "text", text: "Loading...", styles: {} }],
  }]);

  const schema = BlockNoteSchema.create({
    blockSpecs: {
      ...defaultBlockSpecs,
      procode: CodeBlock,
    },
  });
  // Creates a new editor instance.
  const editor = useCreateBlockNote({
    schema: schema,
    initialContent: blocks,
  });

  // Fetch and set the initial content
  useEffect(() => {
    const getData = async () => {
      try {
        const fetchedData = await fetchData();
        const initialBlocks = convertToBlocks(fetchedData);
        setBlocks(initialBlocks);
        if (editorRef.current) {
          editorRef.current.replaceBlocks(editor.document, initialBlocks);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    getData();
  }, [editor.document]); // Add editor.document here


  return (
    <div className={"wrapper pt-20"}>
      <div className={"item"}>
        <BlockNoteView
          editor={editor}
          editable={false}
        />
      </div>
    </div>
  );
}
