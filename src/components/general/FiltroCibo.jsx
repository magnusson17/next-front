"use client"

const classesArr = [
    // total custom
    "filtro-cibo",
    // normal
    "fixed",
    "left-0",
    "h-header-mob-custom",
    "flex",
    "justify-center",
    "items-center",
    "gap-8",
    "w-full",
    "bg-red-700",
    "text-white",
    "cursor-pointer"
]
const classes = classesArr.join(" ")

export default function FiltroCibo({titoliCat}) {

    const scrollToEl = (cat) => {
        const el = document.getElementById(cat.toLowerCase())

        if (el) {
            window.scrollTo({
                top: el.offsetTop - 56*2,
                behavior: "smooth"
            })
        }
    }

    return (
        <>
            <ul className={classes}>
                {titoliCat.map(categoria => (
                    <li key={categoria.name} onClick={() => scrollToEl(categoria.name)}>{categoria.name}</li>
                ))}
            </ul>

            <div className="h-header-mob-custom md:h-header-custom"></div>
        </>
    )
}