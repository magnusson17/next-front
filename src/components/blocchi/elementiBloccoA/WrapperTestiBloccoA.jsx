const classesArr = [
    "flex",
    "flex-col",
    "items-center",
    "w-full",
    "md:w-[700px]",
    "px-6",
    "md:px-0",
    "backdrop-brightness-100",
]
const classes = classesArr.join(" ")

export default function WrapperTestiBloccoA({children}) {
    return (
        <div className={classes}>
            {children}
        </div>
    )
}