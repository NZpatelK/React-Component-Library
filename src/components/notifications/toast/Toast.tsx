import toast, { Toaster } from 'react-hot-toast';

const Toast = () => {

    const notifySuccess = () => toast.success('Successfully toasted!');
    const notifyError = () => toast.error('Error while toasted!');
    const notifyPromise = () => toast.promise(
        new Promise((resolve) => setTimeout(resolve, 2000)),
        {
            loading: 'Loading',
            success: 'Done! 🎉',
            error: 'Error 😞',
        }
    )
    const notifyMultiLine = () => toast(
        () => (
            <div>
                <p>This is the first line.</p>
                <p>This is the second line.</p>
            </div>
        ),
        {
            duration: 3000,
        }
    );
    const notifyIcon = () => toast(
        "This is a toast with an icon",
        {
            icon: '👋',
        }
    );
    const notifyDarkMode = () => toast(
        "This is a toast with dark mode",
        {
            icon: '👋',
            style: {
                borderRadius: '10px',
                background: '#333',
                color: '#fff',
            },
        }
    );
    const notifyDismiss = () => toast((t) => (
        <span>
            Custom and <b>bold</b>
            <button onClick={() => toast.dismiss(t.id)}>
                Dismiss
            </button>
        </span>
    ));

    const notifyTheme = () => toast.success('Look at my styles.', {
        style: {
            border: '1px solid #713200',
            padding: '16px',
            color: '#713200',
        },
        iconTheme: {
            primary: '#713200',
            secondary: '#FFFAEE',
        },
    });

    const notifyPosition = () => {
        toast.success('I am on top!', {
            position: 'bottom-left',
        });
    };


    return (
        <div>
            <button onClick={notifySuccess}>Make me a toast</button>
            <button onClick={notifyError}>Make me an error</button>
            <button onClick={notifyPromise}>Make me a promise</button>
            <button onClick={notifyMultiLine}>Make me a multiline toast</button>
            <button onClick={notifyIcon}>Make me an icon toast</button>
            <button onClick={notifyDarkMode}>Make me a dark mode toast</button>
            <button onClick={notifyDismiss}>Make me a dismissable toast</button>
            <button onClick={notifyTheme}>Make me a theme toast</button>
            <button onClick={notifyPosition}>Make me a position toast</button>
            <Toaster />
        </div>
    );
};

export default Toast
