import React from 'react'
import Head from 'next/head'

interface SchemaOrgProps {
    schema: Record<string, any>
}

export const SchemaOrg: React.FC<SchemaOrgProps> = ({ schema }) => {
    return (
        <Head>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
            />
        </Head>
    )
}
