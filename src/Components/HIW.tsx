import IMAGES from "../assets/images.tsx";

export function Hiw(){
    return(
        <div className="container mx-auto flex-col bg-black pt-10">
            <p className="font-roboto text-6xl font-bold text-white pt-14">How it works?</p>
            <p className="font-roboto text-5xl/[60px] py-7 text-white font-">
                We are using OTC exchange flow to make order book between all Jetton without TON as a bridge
            </p>
            <div className="flex justify-center">
                <img
                    className="object-contain w-full"
                    src={IMAGES.hiwSchema}
                />
            </div>
        </div>
    )
}