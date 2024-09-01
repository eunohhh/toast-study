import useToast from "../../hooks/useToast";
import ToastLi from "./ToastLi";

function ToastUl() {
    const { toasts } = useToast();

    // right-6 => right: 1.5rem
    // bottom-6 => bottom: 1.5rem
    return (
        <ul className="fixed bottom-6 right-6 grid grid-cols-1 gap-y-3">
            {toasts.map((toast) => (
                <ToastLi key={toast.id} toast={toast} />
            ))}
        </ul>
    );
}

export default ToastUl;
