import Image from 'next/image';

type LoaderProps = {
    size?: number;
};

export default function Loader({ size = 40 }: LoaderProps) {
    return (
        <div className={`loader-mask flex items-center justify-center`}>
            <Image src={`/images/loader.svg`}
                   width={size}
                   height={size}
                   alt="loader"
            />
        </div>
    )
}