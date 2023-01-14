import GenrePiechart from "./GenrePiechart";

const GenreList = () => {
    return (
        <>
            <div className="max-w-screen-2xl mx-auto w-full">
                <div className="box-border bg-whith h-auto py-6 px-14 border-2 rounded-2xl my-2 flex items-center">
                    <div className="flex-auto h-auto">
                        <p className="font-bold mb-8 text-2xl">내가 많이 읽은 장르</p>
                        <p className="text-lg">1. 인문학</p>
                        <p className="text-lg">2. 자기계발</p>
                        <p className="text-lg">3. 힐링에세이</p>
                        <p className="text-lg">4. 추리소설</p>
                        <p className="text-lg">5. 로맨스</p>
                    </div>
                    <div className="flex-auto w-28">
                        <GenrePiechart />
                    </div>
                </div>
            </div>
        </>
    );
}

export default GenreList;
