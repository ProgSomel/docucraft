export function getDocumentsByCategory(docs, category) {
  return docs.filter((doc) => doc.category === category);
}

export function getDocumentsByAuthor(docs, author) {
  const decodedAuthor = decodeURIComponent(author);
  return docs.filter((doc) => doc.author === decodedAuthor);
}

export function getDocumentsByTag(docs, tag) {
  return docs.filter((doc) => doc.tags.some((inputTag) => inputTag === tag));
}
