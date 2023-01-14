import axios from 'axios';


let noteArr;
let title;
let content;

axios.get('fakeData.json').then((Response)=>{
    noteArr = Response.data.item;
}).catch((Error)=>{
    console.log(Error);
})

const NoteBox = ( {note} ) => {
    if (note.title.length > 25) {
        title = note.title.substr(0,25)+" ...";
    } else {
        title = note.title;
    }

    if (note.description.length > 150) {
        content = note.description.substr(0,150)+" ...";
    } else {
        content = note.description;
    }

    return (
          <div className="py-4 px-6 border rounded-lg bg-gray-100">
                <p className="font-bold mb-2">{title}</p>
                <p>{content}</p>
          </div>
    );
 }


const RecentNote = () => {
    return (
        <>
            <div className="box-border bg-whith h-auto p-6 border-2 rounded-2xl my-2">
                <p className="font-bold mb-8 text-xl">최근 작성한 기록</p>
                <div className="space-y-4">
                    <NoteBox note={noteArr[0]} />
                    <NoteBox note={noteArr[2]} />
                    <NoteBox note={noteArr[3]} />
                </div>
            </div>
        </>
    );
};

export default RecentNote;