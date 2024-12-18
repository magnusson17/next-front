const padreClassesArr = [
    "hidden",
    "md:block",
    "w-9",
    "h-14",
    "py-2",
    "mt-24",
    "border-solid",
    "border-2",
    "border-white",
    "rounded-3xl",
]
const figlioClassesArr = [
    // custom config
    "animate-moveDownAndFade",
    // normal
    "w-1.5",
    "h-1.5",
    "m-auto",
    "bg-white",
    "rounded-full",
]
const padreClasses = padreClassesArr.join(" ")
const figlioClasses = figlioClassesArr.join(" ")

export default function MouseEffect() {
    return (
        <div className={padreClasses}>
            <div className={figlioClasses}></div>
        </div>
    )
}