import IMAGES from "../assets/images.tsx";

export function RoadMap(){
    return (
        <div className="component bg-black py-2">
            <p className="font-mono text-white font-bold text-xl">OURO ROADMAP</p>
            <div className="flex justify-center">
                <img
                    className="py-2 size-1/2 rounded"
                    src={IMAGES.roadMap}
                    alt="RoadMap"
                />
            </div>
        </div>
    )
}