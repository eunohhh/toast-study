import clsx from "clsx";
import { useEffect, useState } from "react";
import useToast from "../../../hooks/useToast";
import { Toast } from "../../../types/d";

function ToastLi({ toast }: { toast: Toast }) {
    const [isOpen, setIsOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(true);

    const { delToasts } = useToast();

    useEffect(() => {
        let timeoutId01: number;
        let timeoutId02: number;

        setIsOpen(true);

        const promise = new Promise((resolve) => {
            timeoutId01 = setTimeout(() => {
                setIsOpen(false);
                resolve("");
            }, toast.duration);
        });
        promise.then(() => {
            timeoutId02 = setTimeout(() => {
                setIsVisible(false);
            }, 500);
        });

        return () => {
            clearTimeout(timeoutId01);
            clearTimeout(timeoutId02);
        };
    }, [toast.duration]);

    useEffect(() => {
        if (!isVisible) delToasts(toast.id);
    }, [isVisible, delToasts, toast.id]);

    // shadow-lg => 기본 그림자
    // p-6 => 패딩 1.5rem
    // w-[320px] => width : 320px
    // items-center => align-items : center
    // !translate-x-0 => translate-x : 0px !important
    // translate-x-[calc(100%+24px)] => calc 로 100% 보내고 p-6 이므로 1.5rem(24px) 만큼 더 보냄
    return (
        <>
            {isVisible && (
                <li>
                    <div
                        className={clsx(
                            "shadow-lg bg-white p-6 border rounded-lg w-[320px] transition transform flex items-center duration-500 text-sm",
                            {
                                "translate-x-[calc(100%+24px)]": !isOpen,
                                "!translate-x-0": isOpen,
                            }
                        )}
                    >
                        <div className="grow flex flex-col">
                            <h6 className="font-semibold">{toast.title}</h6>
                            <p>{toast.contents}</p>
                        </div>
                    </div>
                </li>
            )}
        </>
    );
}

export default ToastLi;
