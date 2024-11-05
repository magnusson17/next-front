export default function TitoloSlideBloccoE({activeIndex, handlelick, elIndex, elTitolo}) {
    return (
        <div className='flex items-center cursor-pointer' onClick={() => handlelick(elIndex)}>
            <div className={`w-2 h-2 bg-black mr-2 rounded-full ${activeIndex == elIndex ? "opacity-100" : "opacity-0"}`}></div>
            <span>{elTitolo}</span>
        </div>
    )
}