import { Organization, WithContext } from 'schema-dts'

type SchemaType =
	| 'Organization'
	| 'WebSite'
	| 'BlogPosting'
	| 'BreadcrumbList'
	| 'CollectionPage'
	| 'Person'

interface StructuredDataProps {
	type: SchemaType
	data: WithContext<any>
}

export default function StructuredData({ type, data }: StructuredDataProps) {
	return (
		<script
			type="application/ld+json"
			dangerouslySetInnerHTML={{
				__html: JSON.stringify(data),
			}}
		/>
	)
}
