import Link from "next/link";

export default function ElementoBloccoD({idEl, img, position, titolo, metratura, ospiti}) {
    return (
        <Link href={`/appartamenti/${idEl}`} className="
            group
            relative
            flex 
            flex-col 
            justify-end 
            w-5/6
            md:w-1/3
            aspect-square
            m-auto
        ">
            <div className="absolute w-full h-full">
                <div className="absolute w-full h-full md:group-hover:backdrop-brightness-75 transition-all duration-300"></div>
                <img className="object-cover w-full h-full" src={img}/>
            </div>

            <div className="relative flex flex-col justify-end w-full h-full p-10">
                <div className="
                    hidden
                    md:block
                    w-fit
                    text-primary-text
                    px-4
                    py-2
                    mb-10
                    border-solid 
                    border-2
                    border-primary-text 
                    rounded-3xl
                    bg-transparent
                    opacity-0
                    md:group-hover:opacity-100
                    transition-opacity
                    duration-300
                ">
                    <p>explore the apartment</p>
                </div>

                <div className="flex justify-between items-end">
                    <div>
                        <span className="text-xs">{position}</span>
                        <h3 className="text-2xl">{titolo}</h3>
                    </div>

                    <div>
                        <span className="text-xs">{metratura}</span>
                        <div>{ospiti} people</div>
                    </div>
                </div>
            </div>
        </Link>
    )
}