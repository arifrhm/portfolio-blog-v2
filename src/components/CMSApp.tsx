"use client";

import React, { useState } from 'react';
import "@blocknote/core/fonts/inter.css";
import {
  SuggestionMenuController,
  getDefaultReactSlashMenuItems,
  useCreateBlockNote,
  SuggestionMenuProps,
  DefaultReactSuggestionItem
} from "@blocknote/react";
import "@blocknote/mantine/style.css";
import { BlockNoteSchema, defaultBlockSpecs, filterSuggestionItems } from "@blocknote/core";
import { CodeBlock, insertCode } from "@/lib/CodeBlock";
import { BlockNoteView } from "@blocknote/mantine";
import TagModal from '@/components/TagModal'; // Adjust the import path as needed

interface CustomItem {
  title: string;
  group: string;
  onItemClick: (editor: any) => void;
}

const CustomSuggestionMenu: React.FC<SuggestionMenuProps<CustomItem>> = ({ items, onItemClick }) => {
  return (
    <div className="suggestion-menu">
      {items.map((item, index) => (
        <div
          key={index}
          className="suggestion-item"
          onClick={() => onItemClick(item)}
        >
          {item.title}
        </div>
      ))}
    </div>
  );
};

const schema = BlockNoteSchema.create({
  blockSpecs: {
    ...defaultBlockSpecs,
    procode: CodeBlock,
  },
});

async function uploadFile(file: File): Promise<string> {
  const body = new FormData();
  body.append("file", file);
 
  const ret = await fetch("https://tmpfiles.org/api/v1/upload", {
    method: "POST",
    body: body,
  });
  return (await ret.json()).data.url.replace(
    "tmpfiles.org/",
    "tmpfiles.org/dl/"
  );
}

const CMSApp: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false); // State for loading indicator
  const [successMessage, setSuccessMessage] = useState<string | null>(null); // State for success message
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false); // State for modal visibility
  const [postId, setPostId] = useState<number | null>(null); // State for storing postId

  const editor = useCreateBlockNote({
    schema: schema,
    initialContent: [
      {
        type: "heading",
        content: "Welcome to demo! You can change this title!",
      },
      {
        type: "paragraph",
        content: "Upload an image using the button below",
      },
      {
        type: "image",
      },
      {
        type: "paragraph",
      },
    ],
    uploadFile,
  });

  const handleSubmit = async () => {
    setLoading(true); // Show loading bar
    try {
      const response = await fetch('http://85.31.232.226:8000/api/data/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ data: editor.document }),
      });

      if (response.ok) {
        const result = await response.json();
        setPostId(result.id); // Capture the postId from the response
        setSuccessMessage('Submission successful');
        setIsModalOpen(true); // Open the tag modal after post submission
        setTimeout(() => setSuccessMessage(null), 3000); // Hide success message after 3 seconds
      } else {
        console.error('Submission failed');
      }
    } catch (error) {
      console.error('Error submitting:', error);
    } finally {
      setLoading(false); // Hide loading bar
    }
  };

  return (
    <div style={{ display: 'flex', height: "100vh", background: "#ffffff", padding: "20px", position: 'relative' }}>
      {loading && (
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          background: 'rgba(0, 0, 0, 0.5)',
          color: '#fff',
          textAlign: 'center',
          padding: '10px',
          zIndex: 1000
        }}>
          Loading...
        </div>
      )}
      {successMessage && (
        <div style={{
          position: 'absolute',
          top: '20px',
          left: '50%',
          transform: 'translateX(-50%)',
          background: '#28a745',
          color: '#fff',
          padding: '10px 20px',
          borderRadius: '5px',
          zIndex: 1000
        }}>
          {successMessage}
        </div>
      )}
      <div style={{ flex: 1 }}>
        <BlockNoteView
          onChange={() => console.log('editor.document', editor.document)}
          theme={"light"}
          editor={editor}
          slashMenu={true}
        >
          <SuggestionMenuController<CustomItem>
            triggerCharacter="/"
            getItems={async (query: any) =>
              filterSuggestionItems(
                [...getDefaultReactSlashMenuItems(editor), insertCode()],
                query
              ) as CustomItem[]
            }
            suggestionMenuComponent={CustomSuggestionMenu}
            onItemClick={(item) => item.onItemClick(editor)}
          />
        </BlockNoteView>
      </div>
      <button
        style={{
          background: "#000000",
          color: "#ffffff",
          padding: "10px 20px",
          border: "none",
          cursor: "pointer",
          position: "absolute",
          top: "20px",
          right: "20px",
        }}
        onClick={handleSubmit}
      >
        Submit
      </button>
      <TagModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} postId={postId ?? 0} />
    </div>
  );
};

export default CMSApp;
