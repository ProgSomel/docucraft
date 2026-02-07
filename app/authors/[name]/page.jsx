import ContentDisplay from "@/app/components/ContentDisplay";
import { getDocuments } from "@/app/lib/doc";
import { getDocumentsByAuthor } from "@/app/utils/doc-util";
import React from "react";

export default async function AuthorPage({ params }) {
  const { name } = await params;
  const docs = getDocuments();
  const matchedDocuments = getDocumentsByAuthor(docs, name);
  console.log(matchedDocuments);
  if (!matchedDocuments || matchedDocuments.length === 0) {
    return (
      <div className="p-8">
        <h1 className="text-2xl font-bold">No documents found</h1>
        <p className="mt-4">No documents by author {name} were found.</p>
      </div>
    );
  }

  return <ContentDisplay id={matchedDocuments[0].id} />;
}
