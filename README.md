## Start server

`$ DATABASE_URL={mongoUrl} npm start`

## API

Endpoint: `http://localhost:3000/graphql`

### Fetch notes

```
query {
    notes {
        id
        content
    }
}
```

### Create note
```
mutation {
    createNote(content: "This is a note") {
        id
    }
}
```

## IDE

Open `http://localhost:3000/graphql` in your browser