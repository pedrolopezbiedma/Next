"use client";

import { useRef } from "react";
import Styles from "./ImagePicker.module.css";

export interface ImagePickerProps {
	label: string;
	name: string;
}
const ImagePicker = ({ label, name }: ImagePickerProps) => {
	const imageInputRef = useRef<HTMLInputElement>(null);

	const handleClick = () => {
		imageInputRef.current?.click();
	};

	return (
		<div className={Styles.picker}>
			<label htmlFor={name}>{label}</label>
			<div className={Styles.controls}>
				<input
					ref={imageInputRef}
					id={name}
					name={name}
					type="file"
					className={Styles.input}
					accept="image/png, image/jpeg"
				/>
				<button type="button" className={Styles.button} onClick={handleClick}>
					Pick an image
				</button>
			</div>
		</div>
	);
};

export default ImagePicker;
