
export default function BloccoC({imgSx, imgCentro, imgDx, color}) {
    const bgColor = color == "primary" ? "bg-same-as-header bg-primary-bg" : "bg-secondary-bg"

    const classesArr = [
        // total custom
        "blocco-c",
        // total custom / custom config
        `${bgColor}`,
        // normal
        "flex",
        "flex-col",
        "justify-between",
        "w-full",
        "pb-12",
        "md:flex-row",
        "md:pb-40",
    ]
    const classes = classesArr.join(" ")

    return (
        <div className={classes}>
            <div className="w-full md:w-[34vw] md:h-[27vw]">
                <img src={imgSx} className="object-cover w-full h-full" />
            </div>
            <div className="w-5/6 aspect-square mx-auto my-20 md:w-[27vw] md:h-[27vw] md:my-0">
                <img src={imgCentro} className="object-cover w-full h-full rounded-full" />
            </div>
            <div className="w-full md:w-[34vw] md:h-[27vw]">
                <img src={imgDx} className="object-cover w-full h-full rounded-l-[500px]" />
            </div>
        </div>
    )
}