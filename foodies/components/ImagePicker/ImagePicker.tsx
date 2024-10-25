"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Styles from "./ImagePicker.module.css";

export interface ImagePickerProps {
	label: string;
	name: string;
}
const ImagePicker = ({ label, name }: ImagePickerProps) => {
	const [pickedImage, setPickedImage] = useState(null);
	const imageInputRef = useRef<HTMLInputElement>(null);

	const handleInputChange = (event) => {
		const file = event.target.files[0];
		const fileReader = new FileReader();

		fileReader.onload = () => {
			setPickedImage(fileReader.result);
		};

		fileReader.readAsDataURL(file);
	};

	const handleClick = () => {
		imageInputRef.current?.click();
	};

	return (
		<div className={Styles.picker}>
			<label htmlFor={name}>{label}</label>
			<div className={Styles.controls}>
				<div className={Styles.preview}>
					{pickedImage ? (
						<Image src={pickedImage} alt="Meal preview" fill />
					) : (
						<p>No image picked yet</p>
					)}
				</div>
				<input
					ref={imageInputRef}
					id={name}
					name={name}
					type="file"
					className={Styles.input}
					accept="image/png, image/jpeg"
					onChange={handleInputChange}
				/>
				<button type="button" className={Styles.button} onClick={handleClick}>
					Pick an image
				</button>
			</div>
		</div>
	);
};

export default ImagePicker;
