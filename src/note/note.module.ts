import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { NoteSchema } from './note.schema';
import { NoteRepository } from './note.repository';
import { NoteService } from './note.service';
import { NoteResolver } from './note.resolver';

@Module({
  providers: [NoteService, NoteResolver, NoteRepository],
  imports: [MongooseModule.forFeature([{ name: 'Note', schema: NoteSchema }])],
})
export class NoteModule {}
