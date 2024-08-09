import IMAGES from "../assets/images.tsx";

export function RoadMap(){
    return (
        <div className="container mx-auto bg-black py-10">
            <p className="font-roboto text-white font-bold text-6xl pt-10">OURO ROADMAP</p>
            <div className="flex justify-center">
                <img
                    className="object-contain w-full pt-10"
                    src={IMAGES.roadMap}
                    alt="RoadMap"
                />
            </div>
        </div>
    )
}