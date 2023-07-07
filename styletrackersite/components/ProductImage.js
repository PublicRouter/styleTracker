import { useState } from "react";


export default function ProductImages({ images }) {
    const [activeImage, setActiveImage] = useState(images?.[0]);
    return (
        <div className="">
            <div className="text-center">
                <img src={activeImage} className="max-w-[300px] min-w-[300px] max-h-[250px] min-h-[250px]" />
            </div>
            <div className="flex gap-2 grow-0 mt-2">
                {images.map(image => (
                    <div
                        className="border-[2px] active:border-[#ccc] h-[70px] p-1 cursor-pointer rounded-lg"
                        key={image}
                        active={image === activeImage}
                        onClick={() => setActiveImage(image)}>
                        <img className="max-w-full max-h-full" src={image} alt="" />
                    </div>
                ))}
            </div>
        </div>
    );
}