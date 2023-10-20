import React, {useState} from 'react'
import SuperButton from '../hw04/common/c2-SuperButton/SuperButton'
import {restoreState, saveState} from '../hw06/localStorage/localStorage'
import s from './Clock.module.css'

function Clock() {
    const [timerId, setTimerId] = useState<number | undefined>(undefined);
    const [date, setDate] = useState<Date>(new Date(restoreState('hw9-date', Date.now())));
    const [show, setShow] = useState<boolean>(false);
    const [timerStatus, setTimerStatus] = useState<'play' | 'stop'>('stop');

    const start = () => {
        setTimerStatus('play');
        let timer = setInterval(() => setDate(new Date()), 1000);
        setTimerId(+timer);
    }

    const stop = () => {
        setTimerStatus('stop');
        saveState('hw9-date', Date.now());

        if (timerId) {
            clearInterval(timerId);
            setTimerId(undefined);
        }
    }


    const onMouseEnter = () => setShow(true);
    const onMouseLeave = () => setShow(false);

    const formatDate = (date:number) => date.toString().padStart(2, '0');

    const stringTime = `${formatDate(date.getHours())} : ${formatDate(date.getMinutes())} : ${formatDate(date.getSeconds())}` || <br/>;
    const stringDate = `${formatDate(date.getDate())} : ${formatDate(date.getMonth() + 1)} : ${formatDate(date.getFullYear())}`|| <br/>;

    let dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const stringDay = `${dayNames[date.getDay()]}` || <br/>;
    const stringMonth = `${monthNames[date.getMonth()]}` || <br/>;

    return (
        <div className={s.clock}>
            <div
                id={'hw9-watch'}
                className={s.watch}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                <span id={'hw9-day'}>{stringDay}</span>,{' '}
                <span id={'hw9-time'}>
                    <strong>{stringTime}</strong>
                </span>
            </div>

            <div id={'hw9-more'}>
                <div className={s.more}>
                    {show ? (
                        <>
                            <span id={'hw9-month'}>{stringMonth}</span>,{' '}
                            <span id={'hw9-date'}>{stringDate}</span>
                        </>
                    ) : (
                        <>
                            <br/>
                        </>
                    )}
                </div>
            </div>

            <div className={s.buttonsContainer}>
                <SuperButton
                    id={'hw9-button-start'}
                    disabled={timerStatus === 'play'}
                    onClick={start}
                >
                    start
                </SuperButton>
                <SuperButton
                    id={'hw9-button-stop'}
                    disabled={timerStatus === 'stop'}
                    onClick={stop}
                >
                    stop
                </SuperButton>
            </div>
        </div>
    )
}

export default Clock
