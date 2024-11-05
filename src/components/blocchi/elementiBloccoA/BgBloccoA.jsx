export default function BgBloccoA({img}) {
    return (
        <div className="absolute top-0 left-0 w-full h-full">
            <img src={process.env.BASE_API_URL + img} className="absolute w-full h-full object-cover" />
            <div className="absolute w-full h-full bg-black/[0.3]"></div>
        </div>
    )
}