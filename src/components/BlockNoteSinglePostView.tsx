import React, { useEffect, useState, useRef } from "react";
import { Block, BlockNoteEditor, BlockNoteSchema, defaultBlockSpecs } from "@blocknote/core";
import "@blocknote/core/fonts/inter.css";
import { useCreateBlockNote } from "@blocknote/react";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/mantine/style.css";
import "./BlockNoteBlogView.css";
import { CodeBlock } from "@/lib/CodeBlock";

// Define the type for the fetched data
type Content = {
  type: "text";
  text: string;
  styles: {}; // Ensure styles property is present
};

type PostData = {
  uniquePosts: {
    unique_post_id: string;
    type: "paragraph" | "heading" | "bulletListItem" | "numberedListItem" | "checkListItem" | "table" | "file" | "image" | "video" | "audio";
    content: Content[];
    props: any;
  }[];
};

const fetchData = async (id: string): Promise<PostData> => {
  const response = await fetch(`http://127.0.0.1:8000/api/data/${id}`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

const convertToBlocks = (data: PostData): Block[] => {
  // eslint-disable-next-line
  return data.uniquePosts.map(post => ({
    id: post.unique_post_id,
    type: post.type,
    content: post.content || [],
    props: post.props,
    children: []
  }));
};

const BlockNoteSinglePostView = ({ id }: { id: string }) => {
  const [blocks, setBlocks] = useState<Block[]>([]);
  const editorRef = useRef<BlockNoteEditor | null>(null);

  const editor = useCreateBlockNote({
    initialContent: [
      {
        id: "initial-loading-1",
        type: "paragraph",
        content: [{ type: "text", text: "Loading...", styles: {} }],
        props: {},
        children: []
      }
    ],
    schema: BlockNoteSchema.create({
      blockSpecs: {
        ...defaultBlockSpecs,
        procode: CodeBlock,
      },
    }),
  });

  useEffect(() => {
    // eslint-disable-next-line
    editorRef.current = editor;
  }, [editor]);

  useEffect(() => {
    const getData = async () => {
      try {
        const postData = await fetchData(id);
        const initialBlocks = convertToBlocks(postData);
        setBlocks(initialBlocks);
        if (editorRef.current) {
          editorRef.current.replaceBlocks(editorRef.current.document, initialBlocks);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    getData();
  }, [id]);

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
};

export default BlockNoteSinglePostView;
