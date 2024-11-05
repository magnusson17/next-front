export default function BloccoB({children, id, layout}) {
    const bgColor = layout == 'primary' ? "bg-same-as-header bg-primary-bg" : "bg-secondary-bg"

    const padreClassesArr = [
        // total custom
        "blocco-b",
        // normal
        "w-full",
        "px-8",
        "py-12",
        "md:px-0",
        "md:py-40", 
        `${bgColor}`
    ]
    const figlioClassesArr = [
        // custom config
        "text-secondary-text",
        // normal
        "w-full", 
        "md:w-1/2", 
        "m-auto"
    ]
    
    const padreClasses = padreClassesArr.join(" ")
    const figlioClasses = figlioClassesArr.join(" ")

    return (
        <div id={id} className={padreClasses}>
            <div className={figlioClasses}>
                {children}
            </div>
        </div>
    )
}