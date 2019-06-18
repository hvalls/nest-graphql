import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { Note } from './note';
import { NoteService } from './note.service';
import { NoteId } from './note-id';

@Resolver()
export class NoteResolver {
  constructor(private readonly service: NoteService) {}

  @Query()
  async notes(): Promise<Note[]> {
    return this.service.getNotes();
  }

  @Mutation()
  async createNote(
    @Args('content') content: string,
  ): Promise<NoteId> {
    return this.service.createNote(content);
  }

}
