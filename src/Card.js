
export const Card = ({ data }) => {
    return (
        <div class="flex w-full rounded-3xl overflow-hidden shadow-lg m-2 border-slate-800 border-[1px] eachFeed">
            <img class="h-64 object-center" src={data.field_photo_image_section} />
            <div class="px-6 py-4">
                <div class="font-regular text-xl text-[#c6c6c6] mb-2 text-white flex flex-col justify-between h-full">
                    <div>{data.title}</div>
                    <div className="text-xs flex justify-between">
                        <div> - {data.author_name}</div>
                        <div className="flex items-center">{data.views_count}<i className="gg-eye ml-1"></i></div>
                    </div>
                </div>
            </div>
            
        </div>
    );
}