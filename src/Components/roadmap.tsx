import IMAGES from "../assets/images.tsx";

export function RoadMap(){
    return (
        <div className="container mx-auto flex-col bg-yellow-300 py-4">
            <p className="font-mono text-white font-bold text-xl">OURO ROADMAP</p>
            <div className="flex justify-center">
                <img
                    className="object-contain size-2/3 pt-2"
                    src={IMAGES.roadMap}
                    alt="RoadMap"
                />
            </div>
        </div>
    )
}