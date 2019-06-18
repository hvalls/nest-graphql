import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Note } from './note';
import { NoteId } from './note-id';

@Injectable()
export class NoteRepository {
  constructor(@InjectModel('Note') private readonly noteModel: Model) {}

  async findNotes(): Promise<Note[]> {
    const notes = await this.noteModel.find();
    return notes.map(n => new Note(n._id, n.content));
  }

  async createNote(
    content: string,
  ): Promise<NoteId> {
    const note = await new this.noteModel({
      content,
    }).save();
    return new NoteId(note._id);
  }

}
