const classesArr = [
    // custom @layer
    "header__mob-head",
    // custom config
    "h-header-mob-custom",
    "bg-primary-bg",
    // normal
    "relative",
    "flex",
    "md:hidden",
    "justify-between",
    "items-center",
    "w-full",
    "px-10",
    "shadow-xl",
    "z-10"
]
const classes = classesArr.join(" ")

export default function HeaderHeadMob({children}) {
    return (
        <div className={classes}>
            {children}
        </div>
    )
}