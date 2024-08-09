import IMAGES from "../assets/images.tsx";

export function Mmodel(){
    return(
        <div className="container mx-auto w-100 aspect-auto bg-green-600 py-4">
            <p className="font-mono text-xl font-bold text-white">Monetization model</p>
            <p className="font-mono py-2 text-white">
                In our scheme we want to share<br/>commision to jetton seller, which must<br/>help us to get more offer to our platform
            </p>
            <div className="flex justify-center">
                <img
                    className="object-contain size-3/5 pt-4"
                    src={IMAGES.mmSchema}
                />
            </div>
        </div>
    )
}