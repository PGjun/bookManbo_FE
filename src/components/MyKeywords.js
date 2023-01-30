import axios from "axios";

let keywordArr;

axios
  .get("/dummy/myKeyword.json")
  .then((Response) => {
    keywordArr = Response.data;
  })
  .catch((Error) => {
    console.log(Error);
  });

const KeywordBox = ({ keyword }) => {
  return (
    <div className="py-2 px-4 border rounded-3xl border-cyan-400 bg-sky-100">
      {keyword.keyword}
    </div>
  );
};

const MyKeywords = () => {
  return (
    <>
      <div className="box-border bg-whith h-auto p-6 border-2 rounded-2xl my-2">
        <p className="font-bold mb-8 text-xl">내가 저장한 키워드</p>
        <div className="flex flex-wrap gap-2">
          {keywordArr.map((keyword) => (
            <KeywordBox keyword={keyword} key={keyword.id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default MyKeywords;
