"use client";
import React, { useState } from "react";
import Image from "next/image";
import mufasa from "../images/mufasa.jpg";
import Chhaava02 from "../images/Chhaava02.jpg";
import Endgame from "../images/endgame.jpg";
import deadpool from "../images/deadpool.jpg";

const Slider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const images = [mufasa, deadpool, Endgame];

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <div className="slider flex flex-col items-center justify-center gap-4 w-full max-w-4xl mx-auto my-10">
            {/* Image Container (Full-Width) */}
            <div className="relative w-full aspect-[16/9]">
                <Image
                    src={images[currentIndex]}
                    alt="slide"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                />
            </div>

            {/* Navigation Buttons */}
            <div className="flex flex-row items-center justify-center gap-4">
                <button
                    onClick={prevSlide}
                    className="p-2 px-4 bg-gray-300 rounded-lg shadow hover:bg-gray-400 transition"
                >
                    Previous
                </button>
                <button
                    onClick={nextSlide}
                    className="p-2 px-4 bg-gray-300 rounded-lg shadow hover:bg-gray-400 transition"
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default Slider;
