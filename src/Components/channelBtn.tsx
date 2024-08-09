export function ChannelBtn() {
    return(
        <div className="container mx-auto flex-col bg-blue-400 py-2">
            <button
                className="bg-emerald-950 rounded-2xl text-white py-4 px-20 font-mono font-extrabold text-xl"
                onClick={() => {
                    window.open("https://t.me/ourosnake", '_blank')}
                }
            >
                Be first in OURO
            </button>
        </div>

    )
}