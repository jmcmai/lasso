import { FormEvent, useEffect, useState } from 'react'
import { useMutation, useQuery } from '../convex/_generated/react'
import Badge from '../components/Badge'

export default function App() {
  const notes = useQuery('getNotes') || []

  const [newNoteText, setNewNoteText] = useState('')
  const [newNoteTitle, setNewNoteTitle] = useState('')
  const addNote = useMutation('addNote')

  const [name, setName] = useState('user')

  useEffect(() => {
    setName('User ' + Math.floor(Math.random() * 10000))
  }, [])

  async function handleAddNote(event: FormEvent) {
    event.preventDefault()
    setNewNoteText('')
    await addNote(newNoteText, name)
  }
  return (
    <main>
      <h1>Lasso</h1>
      <Badge />
      <ul>
        {notes.map((note:any) => (
          <li key={note._id.toString()}>
            <span>{note.title}:</span>
            <span>{note.body}</span>
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
