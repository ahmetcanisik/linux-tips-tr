export default function NotFound() {
    return (
        <div className="w-full h-dvh">
            <div className="h-full flex justify-center items-center divide-gray-500 divide-x-[0.5px] gap-4">
                <h1 className="font-semibold">404</h1>
                <span className="pl-4 text-xs">This page could not be found</span>
            </div>
        </div>
    );
}