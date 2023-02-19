import React from 'react'
import { FormEvent, useEffect, useState } from 'react'
import { useMutation } from '../convex/_generated/react'
import { Id } from "../convex/_generated/dataModel";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import styles from '../styles/Add.module.css'

export default function Add() {
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
      <Form onSubmit={handleAddNote}>
        <Form.Group className="mb-3" controlId="noteTitle">
          <Form.Label>Notes Title</Form.Label>
          <Form.Control type="title" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Notes Content</Form.Label>
          <Form.Control as="textarea" type="content" rows={4} className={styles.content} />
        </Form.Group>
        <Button variant="primary" type="submit" value="Send" disabled={!newNoteText || !newNoteTitle}>
          Submit
        </Button>
      </Form>
    </main>
  )
}
