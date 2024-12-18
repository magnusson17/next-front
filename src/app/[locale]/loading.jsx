import LoadingSkeleton from "@/components/general/LoadingSkeleton";

export default function Loading() {
    return (
        <div className="
        absolute
        top-0
        left-0
        w-full
        h-lvh
        flex
        justify-center
        items-center
        ">
            <LoadingSkeleton />
        </div>
    )
}