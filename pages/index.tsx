import React from 'react'
import { FormEvent, useEffect, useState } from 'react'
import { useMutation, useQuery } from '../convex/_generated/react'
import { Id } from "../convex/_generated/dataModel";
import Badge from '../components/Badge'

export default function App() {
  // test user
  const [userId, setUserId] = useState<Id<"users"> | null>(null);
  const storeUser = useMutation("storeUser");
  useEffect(() => {
    // Store the user in the database.
    // storeUser` gets the user information via the `auth` object on the server
    // so we don't need to pass anything manually here.
    async function createUser() {
      const id = await storeUser();
      setUserId(id);
    }
    createUser();
    return () => setUserId(null);
  }, [storeUser]);

  const notes = useQuery('getNotes') || []

  const [newNoteText, setNewNoteText] = useState('')
  const [newNoteTitle, setNewNoteTitle] = useState('')
  const addNote = useMutation('addNote')

  async function handleAddNote(event: FormEvent) {
    event.preventDefault()
    setNewNoteTitle('')
    setNewNoteText('')
    await addNote(newNoteTitle, newNoteText)
  }
  return (
    <main>
      <h1>Lasso</h1>
      <Badge />
      <ul>
        {notes.map((note:any) => (
          <li key={note._id.toString()}>
            <span>{note.title}:</span>
            <span>{note.noteContent}</span>
            <span>{new Date(note._creationTime).toLocaleTimeString()}</span>
          </li>
        ))}
      </ul>
      <form onSubmit={handleAddNote}>
        <input
          value={newNoteTitle}
          onChange={(event) => setNewNoteTitle(event.target.value)}
          placeholder="Write a title…"
        />
        <input
          value={newNoteText}
          onChange={(event) => setNewNoteText(event.target.value)}
          placeholder="Add your notes…"
        />
        <input type="submit" value="Send" disabled={!newNoteText} />
      </form>
    </main>
  )
}
