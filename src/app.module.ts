import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { NoteModule } from './note/note.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      typePaths: ['./**/*.gql'],
      context: ({ req }) => ({ req }),
    }),
    MongooseModule.forRoot(process.env.DATABASE_URL),
    NoteModule
  ],
})
export class AppModule {}
