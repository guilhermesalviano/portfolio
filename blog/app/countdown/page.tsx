"use client"
import { Countdown } from "app/components/countdown";
import { useState, useEffect } from "react";

function dateCalculator(date: Date): number[] {
    const now = new Date();

    const diffMs = date.getTime() - now.getTime();

    if (diffMs <= 0) return [0, 0, 0, 0];

    const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diffMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diffMs % (1000 * 60)) / 1000);

    return [days, hours, minutes, seconds];
}

export default function page() {
    const dateToJadeInSP = new Date('2025-03-27T00:00');

    const [timeLeft, setTimeLeft] = useState(() => dateCalculator(dateToJadeInSP));
    const [hasStarted, setHasStarted] = useState(false);

    useEffect(() => {
        const delay = 50;
        const timeoutId = setTimeout(() => {
            setHasStarted(true);

            const intervalId = setInterval(() => {
                setTimeLeft(dateCalculator(dateToJadeInSP));
            }, 1000);

            return () => clearInterval(intervalId);
        }, delay);
        return () => clearTimeout(timeoutId);
    }, []);

    return (
        <div className="w-screen h-screen flex flex-col justify-center items-center text-center">
            <h1 className="text-4xl"><span className="text-purple-600 font-extrabold">JADE</span> IN SP</h1>
            {hasStarted ? (
                <Countdown timeLeft={timeLeft.map((value) => String(value).padStart(2, '0'))} />
            ) : (
                <p>Jade, pq me odeias?</p>
            )}
        </div>
    )
}