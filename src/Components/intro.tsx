import IMAGES from "../assets/images"

export function Intro(){
    return (
        <div className="container mx-auto flex-col bg-black">
            <div className="flex justify-center">
                <img
                    className="object-contain pt-3 pb"
                    src={IMAGES.logoOuro}
                    alt="logoOuro"
                />
            </div>
            <p className="text-white font-roboto text-6xl/[70px] font-extrabold">
                The first Jetton marketplace on TON
            </p>
            <div className="flex justify-center">
                <img
                    className="object-contain pt-10"
                    src={IMAGES.logoView}
                    alt="logoView"
                />
            </div>
        </div>
    )
}