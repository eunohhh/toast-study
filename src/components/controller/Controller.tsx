import { ChangeEvent, useId, useState } from "react";
import useToast from "../../hooks/useToast";

function Controller() {
    const { addToasts } = useToast();
    const titleId = useId();
    const contentId = useId();
    const timeId = useId();

    const [input, setInput] = useState({
        title: "Scheduled: Catch up",
        content: "Friday, February 10, 2023 at 5:57 PM",
        duration: 2000,
    });

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const id = e.target.id;
        const value = e.target.value;

        switch (id) {
            case titleId:
                setInput({ ...input, title: value });
                break;
            case contentId:
                setInput({ ...input, content: value });
                break;
            case timeId:
                setInput({ ...input, duration: Number(value) });
                break;
        }
    };

    const handleClick = () => {
        addToasts(input);
    };

    // grid-cols-1 => grid-template-columns : repeat(1, minmax(0, 1fr))
    // gap-y-6 => row-gap : 1.5rem => 1 에 4px 씩임
    // text-2xl => font-size: 1.5rem; /* 24px */ line-height: 2rem; /* 32px */
    // flex-col => flex-direction : column
    // items-start => align-items : flex-start
    // py- => padding-top, bottom
    // px- => padding-left, right
    // transition => 기본 트랜지션
    // rounded-md => border-radius : 0.375rem 중간정도??
    // hover:bg-black/80 => 호버시 백그라운드 블랙에 알파 80
    // active:bg-black/70" => 액티브시 백그라운드 블랙에 알파 70 호버랑 약간 차이를 줘서 좀 더 알 수있게
    return (
        <div className="grid grid-cols-1 gap-y-6">
            <h1 className="text-2xl font-semibold text-center">
                토스트 컨트롤러
            </h1>
            <div className="flex flex-col gap-y-4">
                <div className="flex flex-col gap-y-1.5 items-start">
                    <label htmlFor={titleId} className="text-sm font-medium">
                        {"제목 (필수)"}
                    </label>
                    <input
                        id={titleId}
                        className="border px-4 py-2.5 rounded-md w-80"
                        value={input.title}
                        onChange={handleInputChange}
                    ></input>
                </div>
                <div className="flex flex-col gap-y-1.5 items-start">
                    <label htmlFor={contentId} className="text-sm font-medium">
                        {"내용 (필수)"}
                    </label>
                    <input
                        id={contentId}
                        className="border px-4 py-2.5 rounded-md w-80"
                        value={input.content}
                        onChange={handleInputChange}
                    ></input>
                </div>
                <div className="flex flex-col gap-y-1.5 items-start">
                    <label htmlFor={timeId} className="text-sm font-medium">
                        {"노출 시간(ms) (선택)"}
                    </label>
                    <input
                        id={timeId}
                        className="border px-4 py-2.5 rounded-md w-80"
                        type="number"
                        value={input.duration}
                        onChange={handleInputChange}
                    ></input>
                </div>
            </div>
            <button
                onClick={handleClick}
                className="bg-black text-white py-3 text-[15px] rounded-md font-medium hover:bg-black/80 transition active:bg-black/70"
            >
                토스트 띄우기
            </button>
        </div>
    );
}

export default Controller;
