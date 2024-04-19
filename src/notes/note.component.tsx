import { TNote } from "./note.type";

interface IProps {
    note: TNote
    Delete: () => void
}

export default function Note({ note, Delete }: IProps) {

    return (
        <label htmlFor={note.id} className='note'>
            <div className='header'>
                <h2 className='title'>{note.title}</h2>
                <button className='note-btn-open' type='button'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="m12 15.375l-6-6l1.4-1.4l4.6 4.6l4.6-4.6l1.4 1.4z" /></svg>
                </button>
                <div className="controls">
                    <button onClick={Delete} className='note-btn-delete' type='button'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M7 21q-.825 0-1.412-.587T5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .825-.587 1.413T17 21zM17 6H7v13h10zM9 17h2V8H9zm4 0h2V8h-2zM7 6v13z" /></svg>
                    </button>
                    <button className='note-btn-close' type='reset'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="m12 13.4l-4.9 4.9q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7l4.9-4.9l-4.9-4.9q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l4.9 4.9l4.9-4.9q.275-.275.7-.275t.7.275t.275.7t-.275.7L13.4 12l4.9 4.9q.275.275.275.7t-.275.7t-.7.275t-.7-.275z" /></svg>
                    </button>
                </div>
            </div>
            <div className='content'>
                {note.content}
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis voluptatibus culpa porro at fuga reprehenderit optio exercitationem doloribus veritatis minima inventore atque voluptate maiores dolore amet nostrum, repudiandae reiciendis pariatur?
            </div>
            <input type="radio" name="note-radio" id={note.id} hidden />
        </label>
    )
}