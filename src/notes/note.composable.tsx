import { useState } from "react"
import { TNote } from "./note.type"

export default function NoteComposable() {
    const tabletWidth = 800
    const desktopWidth = 1200
    const [currCol, setCurrCol] = useState(1)
    const [col1, setCol1] = useState<Array<TNote>>([])
    const [col2, setCol2] = useState<Array<TNote>>([])
    const [col3, setCol3] = useState<Array<TNote>>([])

    const AddNote = (title: string, content: string) => {
        const note = { id: crypto.randomUUID(), title: title, content: content }
        if (innerWidth >= tabletWidth && innerWidth < desktopWidth) {
            if (currCol === 1) {
                setCol1((old) => [note, ...old])
                return setCurrCol(() => 2)
            }
            if (currCol === 2) {
                setCol2((old) => [note, ...old])
                return setCurrCol(() => 1)
            }
        }
        if (innerWidth >= desktopWidth) {
            if (currCol === 1) {
                setCol1((old) => [note, ...old])
                return setCurrCol(() => 2)
            }
            if (currCol === 2) {
                setCol2((old) => [note, ...old])
                return setCurrCol(() => 3)
            }
            if (currCol === 3) {
                setCol3((old) => [note, ...old])
                return setCurrCol(() => 1)
            }
        }

        if (innerWidth < tabletWidth) return setCol1((old) => [note, ...old])
    }

    const EditNote = (id: string) => {
        const note = document.getElementById(id) as HTMLElement
        if (note.contentEditable === 'true')
            note.contentEditable = 'false'
        else
            note.contentEditable = 'true'
    }

    const DeleteNote = (id: string) => {
        const found1 = col1.find((f) => f.id === id)
        const found2 = col2.find((f) => f.id === id)
        const found3 = col3.find((f) => f.id === id)

        if (found1) {
            setCol1((old) => old.filter(f => f.id !== id))
            setCurrCol(() => 1)
        }
        if (found2) {
            setCol2((old) => old.filter(f => f.id !== id))
            setCurrCol(() => 2)
        }
        if (found3) {
            setCol3((old) => old.filter(f => f.id !== id))
            setCurrCol(() => 3)
        }

    }

    return { tabletWidth, desktopWidth, col1, col2, col3, AddNote, EditNote, DeleteNote }
}