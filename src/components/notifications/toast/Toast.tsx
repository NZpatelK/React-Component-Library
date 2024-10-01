import React from 'react'
import toast, { Toaster } from 'react-hot-toast';
import './toast.css';

/**
 * Toast component that displays a toast message based on the button clicked.
 * 
 * This component renders a set of buttons that, when clicked, display a toast message with a specific configuration.
 * The buttons are:
 * - Make me a toast: displays a success toast with the message "Successfully toasted!"
 * - Make me an error: displays an error toast with the message "Error while toasted!"
 * - Make me a promise: displays a toast with the message "Loading" that resolves after 2 seconds to "Done! 🎉" or rejects to "Error 😞"
 * - Make me a multiline toast: displays a toast with two lines of text that disappears after 3 seconds
 * - Make me an icon toast: displays a toast with the message "This is a toast with an icon" and an icon
 * - Make me a dark mode toast: displays a toast with the message "This is a toast with dark mode" and a dark theme
 * - Make me a dismissable toast: displays a toast with the message "Custom and <b>bold</b>" that can be dismissed by clicking on the "Dismiss" button
 * - Make me a theme toast: displays a toast with the message "Look at my styles." and a custom theme
 * - Make me a position toast: displays a toast with the message "I am on top!" and positioned at the top-left of the screen
 * 
 * This component also renders a Toaster component that displays the toast messages.
 */
const Toast = () => {

    type ToastPosition = 'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right';
    const [position, setPosition] = React.useState<ToastPosition>('bottom-right')


    const notifySuccess = () => toast.success('Successfully toasted!', {
        position: position
    });


    const notifyError = () => toast.error('Error while toasted!',
        {
            position: position
        }
    );
    const notifyPromise = () => toast.promise(
        new Promise((resolve) => setTimeout(resolve, 2000)),
        {
            loading: 'Loading',
            success: 'Done! 🎉',
            error: 'Error 😞',
        },
        {
            position: position
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
            position: position
        }
    );
    const notifyIcon = () => toast(
        "This is a toast with an icon",
        {
            icon: '👋',
            position: position
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
            position: position
        }
    );
    const notifyDismiss = () => toast((t) => (
        <span>
            Custom and <b>bold</b>
            <button onClick={() => toast.dismiss(t.id)} className='toast-popup'>
                Dismiss
            </button>
        </span>
    ), {
        position: position
    });

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
        position: position
    });

    const notifyPosition = () => {
        toast.success('I am on top!', {
            position: 'bottom-left',
        });
    };


    return (
        <div className="toast-container">
            <div className='toast-position'>
                <h1>Choose position for toast</h1>
                <div className="position-buttons">
                    <button className='toast-btn' onClick={() => setPosition('top-left')}>Top Left</button>
                    <button className='toast-btn' onClick={() => setPosition('top-center')}>Top Center</button>
                    <button className='toast-btn' onClick={() => setPosition('top-right')}>Top Right</button>
                    <button className='toast-btn' onClick={() => setPosition('bottom-left')}>Bottom Left</button>
                    <button className='toast-btn' onClick={() => setPosition('bottom-center')}>Bottom Center</button>
                    <button className='toast-btn' onClick={() => setPosition('bottom-right')}>Bottom Right</button>
                </div>
            </div>

            <div className='toast'>
                <h1>Toast</h1>
                <div className="toast-buttons">
                    <button className='toast-btn' onClick={notifySuccess}>Make me a toast</button>
                    <button className='toast-btn' onClick={notifyError}>Make me an error</button>
                    <button className='toast-btn' onClick={notifyPromise}>Make me a promise</button>
                    <button className='toast-btn' onClick={notifyMultiLine}>Make me a multiline toast</button>
                    <button className='toast-btn' onClick={notifyIcon}>Make me an icon toast</button>
                    <button className='toast-btn' onClick={notifyDarkMode}>Make me a dark mode toast</button>
                    <button className='toast-btn' onClick={notifyDismiss}>Make me a dismissable toast</button>
                    <button className='toast-btn' onClick={notifyTheme}>Make me a theme toast</button>
                    <button className='toast-btn' onClick={notifyPosition}>Make me a position toast</button>
                </div>
            </div>
            <Toaster />
        </div>
    );
};

export default Toast
