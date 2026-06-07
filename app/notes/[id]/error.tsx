'use client';

interface NoteDetailsErrorProps {
  error: Error;
}

function NoteDetailsError({ error }: NoteDetailsErrorProps) {
  return <p>Could not fetch note details. {error.message}</p>;
}

export default NoteDetailsError;
