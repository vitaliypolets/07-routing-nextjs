import axios, { type AxiosResponse } from 'axios';
import type { Note, NoteTag } from '@/types/note';

const BASE_URL = 'https://notehub-public.goit.study/api';

const notehubApi = axios.create({
  baseURL: BASE_URL,
});

notehubApi.interceptors.request.use(config => {
  const token = process.env.NEXT_PUBLIC_NOTEHUB_TOKEN;

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

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

  const response: AxiosResponse<FetchNotesResponse> = await notehubApi.get<
    FetchNotesResponse
  >('/notes', { params });

  return response.data;
};

export const fetchNoteById = async (noteId: string): Promise<Note> => {
  const response: AxiosResponse<Note> = await notehubApi.get<Note>(
    `/notes/${noteId}`
  );

  return response.data;
};

export const createNote = async (
  newNote: CreateNotePayload
): Promise<Note> => {
  const response: AxiosResponse<Note> = await notehubApi.post<Note>(
    '/notes',
    newNote
  );

  return response.data;
};

export const deleteNote = async (noteId: string): Promise<Note> => {
  const response: AxiosResponse<Note> = await notehubApi.delete<Note>(
    `/notes/${noteId}`
  );

  return response.data;
};