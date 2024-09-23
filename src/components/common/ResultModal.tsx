
interface ResultModalProps {
    msg:string,
    callback:() => void, // callback이 될때 어떤종류의 타입을 사용한다는 의미로 any를 사용한다.
}


function ResultModal({msg, callback}: ResultModalProps) {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
            <div className="bg-orange-500-600 p-8 rounded-lg shadow-lg w-96">
                <h2 className="text-xl font-semibold mb-4">Result</h2>
                <p className="mb-6">{msg}</p>

                <button className='bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-500'
                onClick={() => callback()}
                >
                    닫기
                </button>
            </div>
        </div>
    );
}

export default ResultModal;