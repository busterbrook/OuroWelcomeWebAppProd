import IMAGES from "../assets/images.tsx";

export function Hiw(){
    return(
        <div className="container bg-black py-4">
            <p className="font-mono text-xl font-bold text-white">How it works?</p>
            <p className="font-mono py-2 text-white">
                We are using OTC exchange flow to<br/>make order book between all Jetton<br/>without TON as a bridge
            </p>
            <div className="flex justify-center">
                <img
                    className="object-contain size-2/3 pt-2"
                    src={IMAGES.hiwSchema}
                />
            </div>
        </div>
    )
}