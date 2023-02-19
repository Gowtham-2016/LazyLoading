
export const LoadingCard = () => {
    return (
        <div class="flex w-full rounded-3xl overflow-hidden shadow-lg m-2 border-slate-800 border-[1px]">
            <div class="w-[455px] h-64 bg-gray-300 animate-pulse"></div>
            <div class="px-6 py-4 items-center">
                <div class="font-regular text-xl mb-2 w-20 h-4 bg-gray-300 animate-pulse"></div>
            </div>
        </div>
    );
}

export const LoadingPosts = () => {
    const loadPages = Array(20).fill("");
    return (
        <div className="grid grid-cols-1 gap-4 content-start">
        {loadPages.map(num => {return <LoadingCard />})}
        </div>
    );
}