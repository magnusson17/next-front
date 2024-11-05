export default function SoprattitoloMain({children, textAlign}) {
    const classesArr = [
        "block",
        "mb-2.5",
        "uppercase",
        "text-sm",
        "md:text-base",
        "font-bold",
        `text-${textAlign}`
    ]
    const classes = classesArr.join(" ")

    return (
        <span className={classes}>
            {children}
        </span>
    )
}