export function ChannelBtn() {
    return(
        <div className="container mx-auto flex-col bg-black pb-10">
            <button
                className="bg-emerald-950 rounded-3xl text-white py-10 px-20 font-mono font-extrabold text-6xl"
                onClick={() => {
                    window.open("https://t.me/ourosnake", '_blank')}
                }
            >
                Be first in OURO
            </button>
        </div>

    )
}