import { Injectable, NotFoundException } from '@nestjs/common';
import { Note } from './note';
import { NoteRepository } from './note.repository';
import { NoteId } from './note-id';

@Injectable()
export class NoteService {
  constructor(private readonly repo: NoteRepository) {}

  getNotes(): Promise<Note[]> {
    return this.repo.findNotes();
  }

  createNote(
    content: string,
  ): Promise<NoteId> {
    return this.repo.createNote(
      content,
    );
  }

}
