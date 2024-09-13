"use client";

import React, { useState, useRef, useEffect } from "react";
import { RgbaColorPicker } from "react-colorful";

function ColorPicker({inputValue, setInputValue} : {inputValue: string, setInputValue: any}) {
	const [color, setColor] = useState<{ r: number; g: number; b: number; a: number }>({ r: 255, g: 255, b: 255, a: 1 });
	const [isOpen, setIsOpen] = useState<boolean>(false);

	const pickerRef = useRef<HTMLDivElement>(null);
    const inputChangeRef = useRef(false);

    const isValidHex = (hex: string): boolean => {
        const hexRegex = /^#?([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6}|[0-9A-Fa-f]{8})$/;
        return hexRegex.test(hex);
    };

    const hexToRgba = (hex: string): { r: number, g: number, b: number, a: number } => {
        hex = hex.replace(/^#/, "");

        let r, g, b, a = 1;

        if (hex.length === 3) {
            r = parseInt(hex[0] + hex[0], 16);
            g = parseInt(hex[1] + hex[1], 16);
            b = parseInt(hex[2] + hex[2], 16);
        } else if (hex.length === 6) {
            r = parseInt(hex.substring(0, 2), 16);
            g = parseInt(hex.substring(2, 4), 16);
            b = parseInt(hex.substring(4, 6), 16);
        } else if (hex.length === 8) {
            r = parseInt(hex.substring(0, 2), 16);
            g = parseInt(hex.substring(2, 4), 16);
            b = parseInt(hex.substring(4, 6), 16);
            a = parseInt(hex.substring(6, 8), 16) / 255;
        } else {
            return { r: 0, g: 0, b: 0, a: 0 };
        }

        return { r, g, b, a };
    };

    function rgbaToHex(r: number, g: number, b: number, a: number) {
        const toHex = (n: number) => {
            if (!n) return "0";
            const hex = n.toString(16);
            return hex.length === 1 ? "0" + hex : hex;
        };

        const alpha = Math.round(a * 255);

        return `#${toHex(r)}${toHex(g)}${toHex(b)}${toHex(alpha)}`;
    }

    useEffect(() => {
        if (isValidHex(inputValue)) {
            inputChangeRef.current = true;
            setColor(hexToRgba(inputValue));
        }
    }, [inputValue]);

    useEffect(() => {
        if (!inputChangeRef.current) {
            setInputValue(rgbaToHex(color.r, color.g, color.b, color.a));
        } else {
            inputChangeRef.current = false;
        }
    }, [color]);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (pickerRef.current && !pickerRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [pickerRef]);

	const getColorAsString = (colorAsObject: { r: number; g: number; b: number; a: number }) => {
		return `rgba(${colorAsObject.r}, ${colorAsObject.g}, ${colorAsObject.b}, ${colorAsObject.a})`;
	};

	return (
		<div className="w-full relative z-100">
			<div className="flex items-center gap-4 px-[9px] py-[7px] border-[1px] border-gray-200 rounded-[8px] w-full">
				<div
					className="rounded-full h-[22px] w-[22px] cursor-pointer border-[1px] border-gray-100"
					style={{ background: getColorAsString(color) }}
					onClick={() => setIsOpen(!isOpen)}
				></div>
				<input
					type="text"
					placeholder="#26C969"
					value={inputValue}
					onChange={(e) => setInputValue(e.target.value)}
					className="h-full w-[calc(100%-35px)] outline-none text-[14px]"
				/>
			</div>

			{isOpen && (
				<div
					ref={pickerRef}
					className="absolute z-100 mt-2 bg-white rounded-lg shadow-lg border-[1px] border-gray-200"
				>
					<RgbaColorPicker
						color={color}
						onChange={setColor}
						className="w-full"
					/>

                    <div className="flex items-center gap-2 justify-between my-3 px-4">
                        <div className="flex flex-col items-center justify-center gap-2">
                            <input type="text" value={color.r} className="w-[30px] border-[1px] border-gray-200 rounded-[4px] px-[10px] py-[4px] text-gray-800 font-light text-[13px] outline-purple-600 outline-1"/>
                            <p className="text-[13px] text-gray-600">R</p>
                        </div>
                        <div className="flex flex-col items-center justify-center gap-2">
                            <input type="text" value={color.g} className="w-[30px] border-[1px] border-gray-200 rounded-[4px] px-[10px] py-[4px] text-gray-800 font-light text-[13px] outline-purple-600 outline-1"/>
                            <p className="text-[13px] text-gray-600">G</p>
                        </div>
                        <div className="flex flex-col items-center justify-center gap-2">
                            <input type="text" value={color.b} className="w-[30px] border-[1px] border-gray-200 rounded-[4px] px-[10px] py-[4px] text-gray-800 font-light text-[13px] outline-purple-600 outline-1"/>
                            <p className="text-[13px] text-gray-600">B</p>
                        </div>
                        <div className="flex flex-col items-center justify-center gap-2">
                            <input type="text" value={color.a} className="w-[30px] border-[1px] border-gray-200 rounded-[4px] px-[10px] py-[4px] text-gray-800 font-light text-[13px] outline-purple-600 outline-1"/>
                            <p className="text-[13px] text-gray-600">A</p>
                        </div>
                    </div>
				</div>
			)}
		</div>
	);
}

export default ColorPicker;
