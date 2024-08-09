import IMAGES from "../assets/images"

export function Intro(){
    return (
        <div className="container mx-auto flex-col  bg-blue-950">
            <div className="flex justify-center">
                <img
                    className="object-contain size-1/3 pt-3 pb-0"
                    src={IMAGES.logoOuro}
                    alt="logoOuro"
                />
            </div>
            <p className="font-mono text-white text-xl font-extrabold">
                The first Jetton marketplace<br/>on TON
            </p>
            <div className="flex justify-center">
                <img
                    className="object-contain size-1/3 py-3"
                    src={IMAGES.logoView}
                    alt="logoView"
                />
            </div>
        </div>
    )
}