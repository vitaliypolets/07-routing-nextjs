'use client';

interface FilteredNotesErrorProps {
  error: Error;
}

function FilteredNotesError({ error }: FilteredNotesErrorProps) {
  return <p>Could not fetch the list of notes. {error.message}</p>;
}

export default FilteredNotesError;