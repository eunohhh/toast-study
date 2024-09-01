import { useContext } from "react";
import ToastContext from "../contexts/toast.context";

const useToast = () => {
    const context = useContext(ToastContext);
    if (!context) {
        throw new Error("오류 발생! Provider 안에서 사용해 주세요");
    }
    return context;
};

export default useToast;
