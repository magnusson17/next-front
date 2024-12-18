export default function TitoloMain({children}) {
    const classesArr = [
        "text-3xl",
        "md:text-5xl",
        "font-medium",
        "text-center",
        "leading-[120%]"
    ]
    const classes = classesArr.join(" ")

    return (
        <h1 className={classes}>{children}</h1>
    )
}