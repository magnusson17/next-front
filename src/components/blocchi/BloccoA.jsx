const classesArr = [
    // total custom
    "blocco-a",
    // custom config
    "text-primary-text",
    "h-el-below-header-mob",
    "md:h-el-below-header",
    // normal
    "relative",
    "flex",
    "justify-center",
    "items-center",
    "bg-center",
    "bg-cover",
]
const classes = classesArr.join(" ")

export default function BloccoA({children}) {
    return (
        <div className={classes}>
            {children}
        </div>
    )
}