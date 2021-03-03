import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

export default function PostBody({ content }) {
  return (
    <div className="max-w-2xl mx-auto">
      <div className={markdownStyles['markdown']}>
        {documentToReactComponents(content.json)}
      </div>
    </div>
  )
}
