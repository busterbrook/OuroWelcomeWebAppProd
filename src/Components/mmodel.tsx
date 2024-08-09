import IMAGES from "../assets/images.tsx";

export function Mmodel(){
    return(
        <div className="container mx-auto aspect-auto bg-black pt-10">
            <p className="font-mono text-6xl font-bold text-white pt-10">Monetization model</p>
            <p className="font-mono text-5xl/[60px] py-7 text-white">
                In our scheme we want to share commision to jetton seller, which must help us to get more offer to our platform
            </p>
            <div className="flex justify-center">
                <img
                    className="object-contain w-full pt-4"
                    src={IMAGES.mmSchema}
                />
            </div>
        </div>
    )
}