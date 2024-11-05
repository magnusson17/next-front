import HamburgerMenuSvg from "@/components/generals/svg/HamburgerMenuSvg"

const classesArr = [
    // total custom
    "header__toggle-btn",
    // normal
    "w-10",
    "cursor-pointer",
]
const classes = classesArr.join(" ")

export default function HeaderToggleIcon() {
    return (
        <div className={classes}>
            <HamburgerMenuSvg fill="fill-secondary-text" />
        </div>
    )
}