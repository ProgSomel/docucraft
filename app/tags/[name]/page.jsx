import ContentDisplay from "@/app/components/ContentDisplay";
import { getDocuments } from "@/app/lib/doc";
import { getDocumentsByTag } from "@/app/utils/doc-util";
import React from "react";

export default async function TagsPage({ params }) {
  const { name } = await params;
  const docs = getDocuments();
  const matchedDocuments = getDocumentsByTag(docs, name);
  return <ContentDisplay id={matchedDocuments[0].id} />;
}
