import axios from "axios";

let noteArr = [];

axios
  .get("/dummy/myNote.json")
  .then((Response) => {
    noteArr = Response.data.map((note) => {
      if (note.title.length > 25) {
        note.title = note.title.substr(0, 25) + " ...";
      }

      if (note.contents.length > 150) {
        note.contents = note.contents.substr(0, 150) + " ...";
      }
      return note;
    });
  })
  .catch((Error) => {});

const NoteBox = ({ note }) => {
  return (
    <div className="py-4 px-6 border rounded-lg bg-gray-100">
      <p className="font-bold mb-2">{note.title}</p>
      <p>{note.contents}</p>
    </div>
  );
};

const RecentNote = () => {
  return (
    <>
      <div className="box-border bg-whith h-auto p-6 border-2 rounded-2xl my-2">
        <p className="font-bold mb-8 text-xl">최근 작성한 기록</p>
        <div className="space-y-4">
          {noteArr.map((note) => (
            <NoteBox key={note.id} note={note} />
          ))}
        </div>
      </div>
    </>
  );
};

export default RecentNote;
