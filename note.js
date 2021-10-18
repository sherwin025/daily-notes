const notes = [
    {
        id: 1,
        subject: "math",
        date: "10-10-2021",
        feeling: "confident",
        timeSpent: 50
    },
    {
        id: 2,
        subject: "English",
        date: "3-1-2021",
        feeling: "Not good",
        timeSpent: 35
    }
]

// console.log(notes)

const accounting = {
    id: 3,
    subject: "accounting",
    date: "05-23-2021",
    feeling: "confident",
    timeSpent: 21
}

notes.push(accounting);

for (let note of notes) {
    console.log(
        `note ${note.id}
        ${note.date}
        I learned ${note.subject}.
        I spent ${note.timeSpent} working on it.
        I felt ${note.feeling}`
    )
}

const searchTerm = 50;

for (let thing of notes) {
    if (thing.timeSpent === searchTerm) {
        console.log(thing)
    }
}


const createNote = (note) => {
    const lastIndex = notes.length - 1;
    const currentLastNote = notes[lastIndex];
    const maxId = currentLastNote.id;
    const idForNewNote = maxId + 1;

    note.id = idForNewNote;
    notes.push(note);
}

const programming = {
    subject: "Js",
    date: "10-11-2021",
    feeling: "good",
    timeSpent: 1230
}

createNote(programming);

// console.log(notes)

const dateCreated = (note) => {
    const date = new Date()

    note.dateCreated = date

}

const computer = {
    subject: "CS",
    date: "10-11-2021",
    feeling: "good",
    timeSpent: 1230
}

createNote(computer);

for (note of notes) {
    dateCreated(note)
}

console.log(notes);
