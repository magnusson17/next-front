const classesArr = [
    "text-base",
]
const classes = classesArr.join(" ")

export default function HeaderLang({mob}) {
    return (
        <div className={classes}>
            <div>LANG</div>
        </div>
    )
}