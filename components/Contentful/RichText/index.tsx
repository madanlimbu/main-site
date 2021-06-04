import { BLOCKS, Document, INLINES } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { ReactElement } from 'react';

export default function RichText(richTextDocument: Document): ReactElement {
    console.log(`RichText: `, richTextDocument);
    const options = {
        renderNode: {
          [BLOCKS.PARAGRAPH]: (node, children) => (
            <p>{children}</p>
          )
        }
      };

    return (
        <>
        {documentToReactComponents(richTextDocument, options)}
        </>
    );
}