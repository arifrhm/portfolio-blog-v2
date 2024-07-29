import React, { useEffect, useState, useRef } from "react";
import { Block, BlockNoteEditor, BlockNoteSchema, defaultBlockSpecs } from "@blocknote/core";
import "@blocknote/core/fonts/inter.css";
import { useCreateBlockNote } from "@blocknote/react";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/mantine/style.css";
import "./BlockNoteBlogView.css";
import { CodeBlock } from "@/lib/CodeBlock";

// Define the type for the fetched data
interface Content {
  type: string;
  text?: string;
  styles?: Record<any, any>;
  url?: string;
  name?: string;
  showPreview?: boolean;
  previewWidth?: number;
}
type ContentType = "audio" | "table" | "video" | "image" | "paragraph" | "heading" | "bulletListItem" | "numberedListItem" | "checkListItem" | "file";

interface UniquePost {
  id: number;
  unique_post_id: string;
  type: ContentType;
  props: Record<any, any>;
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
        content: post.content || [],
        props: post.props,
      };
      console.log("block", block);
      blocks.push(block);
    });
  });
  return blocks.length > 0 ? blocks : [{ type: "paragraph", content: [{ type: "text", text: "No content available." }] }];
};

export default function BlockNoteBlogView() {
  const editorRef = useRef<BlockNoteEditor | null>(null);
  const [blocks, setBlocks] = useState<Block[]>([{
    type: "paragraph",
    content: [{type:'text', text: "Loading...", styles:{}}],
  },]);

  // Fetch and set the initial content
  useEffect(() => {
    const getData = async () => {
      try {
        const fetchedData = await fetchData();
        const initialBlocks = convertToBlocks(fetchedData);
        setBlocks(initialBlocks);
        console.log("block set initial blocks", initialBlocks);
        if (editorRef.current) {
          editorRef.current.replaceBlocks(editor.document, initialBlocks);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    getData();
  }, []);
  
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

  // Assign editor instance to ref
  useEffect(() => {
    editorRef.current = editor;
  }, [editor]);

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
