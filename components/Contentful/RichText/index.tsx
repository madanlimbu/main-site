import { BLOCKS } from '@contentful/rich-text-types';
import {documentToReactComponents, Options } from '@contentful/rich-text-react-renderer';
import { ReactElement } from 'react';
import {ImageBlock, PostContentType} from "../../../lib/api/contentful/interface";
import "./RichText.scss";

export default function RichText(content: PostContentType['content']): ReactElement {
    console.log(`RirchText: `, content);
    console.log(`RirchText content: `, content.json.content);
    console.log(`Embed image: `, content.json.content[8]);
    console.log(`Links assets: `, content.links.assets.block);

    const { json, links } = content;
    const assetMap = new Map<string, ImageBlock>();
    links.assets.block.map(asset => assetMap.set(asset.sys.id, asset));
    const options: Options = {
        renderNode: {
          [BLOCKS.PARAGRAPH]: (node, children) => (
            <p>{children}</p>
          ),
          [BLOCKS.EMBEDDED_ASSET]: (node, children) => {
              const asset = assetMap.get(node.data.target.sys.id);
              return (<div className="rich-text__embed-image"><img src={asset.url} alt={asset.title} /></div>);
          },
        },
      };

    return (
        <>
        {documentToReactComponents(json, options)}
        </>
    );
}