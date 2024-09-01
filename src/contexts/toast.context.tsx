import { ReactNode, createContext, useState } from "react";
import { v4 as uuid } from "uuid";
import { Toast, ToastContextType } from "../types/d";

interface Props {
    children: ReactNode;
}

const initialValue: ToastContextType = {
    toasts: [],
    addToasts: () => {},
    delToasts: () => {},
};

const ToastContext = createContext(initialValue);

export const ToastProvider = ({ children }: Props) => {
    const [toasts, setToasts] = useState<Toast[]>([]);

    const value = {
        toasts,
        addToasts: (options: {
            title: string;
            content: string;
            duration: number;
        }) => {
            const test = {
                id: uuid(),
                title: options.title,
                contents: options.content,
                duration: options.duration,
            };
            setToasts((prev) => [...prev, test]);
        },
        delToasts: (id: string) => {
            const filtered = toasts.filter((toast) => toast.id !== id);
            setToasts(filtered);
        },
    };

    return (
        <ToastContext.Provider value={value}>{children}</ToastContext.Provider>
    );
};

export default ToastContext;
