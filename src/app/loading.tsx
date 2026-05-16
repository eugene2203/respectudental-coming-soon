import Loader from "@/components/common/Loader";

export default function Loading() {
    return (
        <div className="page-loader-mask fixed">
            <Loader size={80}/>
        </div>
    )
}