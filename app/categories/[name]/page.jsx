import React from "react";

export default async function CatoriesPage({ params }) {
  const { name } = await params;
  return (
    <div>{name}</div>
  );
}
