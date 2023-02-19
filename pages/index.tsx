import React from 'react'
import { useEffect, useState } from 'react'
import { useMutation, useQuery } from '../convex/_generated/react'
import { Id } from "../convex/_generated/dataModel";
import styles from "../styles/Home.module.css";

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

  return (
    <main>
      <h1>Choose a Set to Study</h1>
      <ul>
        {notes.map((note:any) => (
          <li key={note._id.toString()}>
            <span>{note.title}</span>
            <span>{note.noteContent}</span>
            <span>{new Date(note._creationTime).toLocaleTimeString()}</span>
          </li>
        ))}
      </ul>
    </main>
  )
}
