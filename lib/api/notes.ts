import type { AxiosResponse } from 'axios';
import { notehubApi } from './client';
import type { Note, NoteTag } from '@/types/note';

export interface FetchNotesParams {
  page: number;
  perPage: number;
  search?: string;
  tag?: NoteTag;
}

export interface FetchNotesResponse {
  notes: Note[];
  totalPages: number;
}

export interface CreateNotePayload {
  title: string;
  content: string;
  tag: NoteTag;
}

export const fetchNotes = async ({
  page,
  perPage,
  search = '',
  tag,
}: FetchNotesParams): Promise<FetchNotesResponse> => {
  const params = {
    page,
    perPage,
    ...(search.trim() !== '' && { search: search.trim() }),
    ...(tag && { tag }),
  };

  const response: AxiosResponse<FetchNotesResponse> = await notehubApi.get(
    '/notes',
    { params }
  );

  return response.data;
};

export const fetchNoteById = async (noteId: string): Promise<Note> => {
  const response: AxiosResponse<Note> = await notehubApi.get(
    `/notes/${noteId}`
  );

  return response.data;
};

export const createNote = async (
  newNote: CreateNotePayload
): Promise<Note> => {
  const response: AxiosResponse<Note> = await notehubApi.post(
    '/notes',
    newNote
  );

  return response.data;
};

export const deleteNote = async (noteId: string): Promise<Note> => {
  const response: AxiosResponse<Note> = await notehubApi.delete(
    `/notes/${noteId}`
  );

  return response.data;
};