const KeywordBox = ( {keyword} ) => {
    return (
          <div className="py-2 px-4 border rounded-3xl border-cyan-400 bg-sky-100">
             {keyword.contents}
          </div>
    );
 }

const MyKeywords = () => {
    const keywordArr = [
        {
            id: "keyword001",
            contents: "스릴러"
        },
        {
            id: "keyword002",
            contents: "자기계발"
        },
        {
            id: "keyword003",
            contents: "에세이"
        },
        {
            id: "keyword004",
            contents: "만화책"
        },
        {
            id: "keyword005",
            contents: "로맨스"
        },
        {
            id: "keyword006",
            contents: "인문학"
        },
        {
            id: "keyword007",
            contents: "제테크"
        }
    ];

    return (
        <>
            <div className="box-border bg-whith h-auto p-6 border-2 rounded-2xl my-2">
                <p className="font-bold mb-8 text-xl">내가 저장한 키워드</p>
                <div className="flex flex-wrap gap-2"> 
                    {keywordArr.map((keyword) => (
                        <KeywordBox keyword={keyword} key={keyword.id}/>
                    ))}
                </div>
            </div>
        </>
    );
};

export default MyKeywords;