import ContentDisplay from "@/app/components/ContentDisplay";
import React from "react";

export default async function DocContentPage({ params }) {
  const { docId } = await params;
  const slug = docId[docId.length - 1];
  return <ContentDisplay id={slug} />;
}
