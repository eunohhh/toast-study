import Layout from "./components/Layout";
import Controller from "./components/controller";
import ToastUl from "./components/toast/ToastUl";
import useToast from "./hooks/useToast";

// ToastUl 을 contextApi 로 통제해서 클릭시에 띄운다
// 토스트 배열을 콘텍스트 api 에서 관리

function App() {
    const { toasts } = useToast();

    console.log(toasts);

    return (
        <>
            <Layout>
                <Controller />
            </Layout>
            {toasts.length > 0 && <ToastUl />}
        </>
    );
}

export default App;
