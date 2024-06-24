"use client";
import React, { useState, useCallback, useEffect } from 'react';
import "@blocknote/core/fonts/inter.css";
import { SuggestionMenuController, getDefaultReactSlashMenuItems, useCreateBlockNote } from "@blocknote/react";
import "@blocknote/mantine/style.css";
import { BlockNoteSchema, defaultBlockSpecs, filterSuggestionItems, Block } from "@blocknote/core";
import { CodeBlock, insertCode } from "@/lib/CodeBlock";
import { BlockNoteView } from "@blocknote/mantine";
import "./App.css";

const schema = BlockNoteSchema.create({
  blockSpecs: {
    ...defaultBlockSpecs,
    procode: CodeBlock,
  },
});

// Uploads a file to tmpfiles.org and returns the URL to the uploaded file.
async function uploadFile(file: File) {
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

const CMSApp = (props: React.PropsWithChildren) => {
  const [markdownContent, setMarkdownContent] = useState<string>(''); // State to hold Markdown content

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

  // Function to handle conversion to Markdown and save to state
  const convertToMarkdown = useCallback(async () => {
    const blocks = editor.document;
    let markdown = '';
    blocks.forEach((block: Block) => {
      switch (block.type) {
        case 'heading':
          markdown += `# ${block.content}\n\n`;
          break;
        case 'paragraph':
          markdown += `${block.content}\n\n`;
          break;
        case 'image':
          markdown += `![Image Description](url_to_image)\n\n`;
          break;
        default:
          break;
      }
    });
    setMarkdownContent(markdown);
  }, [editor.document]);

  // Handle submit logic
  const handleSubmit = async () => {
    try {
      const response = await fetch('endpoint-submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ data: editor.document }),
      });

      if (response.ok) {
        console.log('Submission successful');
      } else {
        console.error('Submission failed');
      }
    } catch (error) {
      console.error('Error submitting:', error);
    }
  };

  // Convert to Markdown on editor change
  useEffect(() => {
    convertToMarkdown();
  }, [editor.document, convertToMarkdown]);

  return (
    <div style={{ display: 'flex', height: "100vh", background: "#ffffff", padding: "20px" }}>
      <div style={{ flex: 1 }}>
        <BlockNoteView
          onChange={() => 
            console.log('editor.document',editor.document)}
          theme={"light"}
          editor={editor}
          slashMenu={true}
        //   editable={false}
        >
            
          <SuggestionMenuController
            triggerCharacter={"/"}
            getItems={async (query: any) =>
              filterSuggestionItems(
                [...getDefaultReactSlashMenuItems(editor), insertCode()],
                query
              )
            }
          />
        </BlockNoteView>
      </div>
      <div style={{ flex: 1, marginLeft: '20px' }}>
        <div>Markdown Output:</div>
        <textarea
          style={{ width: '100%', height: 'calc(100vh - 60px)', fontFamily: 'monospace', fontSize: '14px' }}
          value={markdownContent}
          readOnly
        />
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
    </div>
  );
};

export default CMSApp;
