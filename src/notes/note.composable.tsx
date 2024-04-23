import { useState } from "react"
import { TNote } from "./note.type"

export default function NoteComposable() {
    const tabletWidth = 800
    const desktopWidth = 1200

    const GetFromLocalStorage = (col: string): Array<TNote> => {
        if (localStorage[col]) return JSON.parse(localStorage[col])
        else return []
    }

    const SaveInLocalStorage = ({ col, note }: { col: string, note: TNote }) => {
        if (localStorage[col]) {
            const collection = GetFromLocalStorage(col) as Array<TNote>
            collection.unshift(note)
            localStorage[col] = JSON.stringify(collection)
        } else {
            localStorage[col] = JSON.stringify([note])
        }
    }

    const RemoveFromLocalStorage = ({ col, id }: { col: string, id: string }) => {
        const collection = GetFromLocalStorage(col) as Array<TNote>
        const result = collection.filter(f => f.id !== id)
        localStorage[col] = JSON.stringify(result)
    }

    const [currCol, setCurrCol] = useState(1)
    const [col1, setCol1] = useState<Array<TNote>>(GetFromLocalStorage('col1') ?? [])
    const [col2, setCol2] = useState<Array<TNote>>(GetFromLocalStorage('col2') ?? [])
    const [col3, setCol3] = useState<Array<TNote>>(GetFromLocalStorage('col3') ?? [])

    const AddNote = (title: string, content: string) => {

        const note = { id: crypto.randomUUID(), title: title, content: content }
        if (innerWidth >= tabletWidth && innerWidth < desktopWidth) {
            if (currCol === 1) {
                setCol1((old) => [note, ...old])
                SaveInLocalStorage({ col: 'col1', note })
                return setCurrCol(() => 2)
            }
            if (currCol === 2) {
                setCol2((old) => [note, ...old])
                SaveInLocalStorage({ col: 'col2', note })
                return setCurrCol(() => 1)
            }
        }
        if (innerWidth >= desktopWidth) {
            if (currCol === 1) {
                setCol1((old) => [note, ...old])
                SaveInLocalStorage({ col: 'col1', note })
                return setCurrCol(() => 2)
            }
            if (currCol === 2) {
                setCol2((old) => [note, ...old])
                SaveInLocalStorage({ col: 'col2', note })
                return setCurrCol(() => 3)
            }
            if (currCol === 3) {
                setCol3((old) => [note, ...old])
                SaveInLocalStorage({ col: 'col3', note })
                return setCurrCol(() => 1)
            }
        }

        if (innerWidth < tabletWidth) {
            SaveInLocalStorage({ col: 'col1', note })
            return setCol1((old) => [note, ...old])
        }
    }

    const EditNote = (note: TNote, col: string) => {
        const n = document.getElementById(note.id) as HTMLElement
        if (n.contentEditable === 'true') {
            const title = n.querySelector('.title') as HTMLElement
            const content = n.querySelector('.content') as HTMLElement
            note.title = title.innerHTML
            note.content = content.innerHTML
            n.contentEditable = 'false'
            if (col === 'col1') localStorage[col] = JSON.stringify(col1)
            if (col === 'col2') localStorage[col] = JSON.stringify(col2)
            if (col === 'col3') localStorage[col] = JSON.stringify(col3)
        } else {
            n.contentEditable = 'true'
        }
    }

    const DeleteNote = (id: string) => {
        const found1 = col1.find((f) => f.id === id)
        const found2 = col2.find((f) => f.id === id)
        const found3 = col3.find((f) => f.id === id)

        if (found1) {
            setCol1((old) => old.filter(f => f.id !== id))
            setCurrCol(() => 1)
            RemoveFromLocalStorage({ col: 'col1', id })
        }
        if (found2) {
            setCol2((old) => old.filter(f => f.id !== id))
            setCurrCol(() => 2)
            RemoveFromLocalStorage({ col: 'col2', id })
        }
        if (found3) {
            setCol3((old) => old.filter(f => f.id !== id))
            setCurrCol(() => 3)
            RemoveFromLocalStorage({ col: 'col3', id })
        }

    }

    return { tabletWidth, desktopWidth, col1, col2, col3, AddNote, EditNote, DeleteNote }
}