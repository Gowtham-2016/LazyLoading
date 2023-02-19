import { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import useLazyLoad from "./useLazyLoad";
import { Card } from './Card';
import { LoadingPosts } from './LoadingPosts';

export const Posts = () => {
    const triggerRef = useRef(null);
    const onLoadData = async () => {
        setCurrentPage(currentPage + 1);
        const data = await fetchData();
        return data;
    };
    const { data, loading } = useLazyLoad({ triggerRef, onLoadData });
    const [currentPage, setCurrentPage] = useState(1);
    
    const fetchData = async () => {
        return fetch(`https://corsanywhere.herokuapp.com/https://englishapi.pinkvilla.com/app-api/v1/photo-gallery-feed-page/page/${currentPage}`).then((res) => {
            return res.json();
        }).then((data) => {
            console.log(data.nodes[0]);
            return data.nodes;
        }).catch((err) => {
            console.log(err);
        })
    }

    useEffect(() => {
        const interSection = () => {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('show');
                    }
                    else {
                        entry.target.classList.remove('show');
                    }
                });
            });
            let elements = document.querySelectorAll('.eachFeed');
            elements.forEach((element) => observer.observe(element));
            console.log({ elements })
        }
        interSection();
    }, [data])


    return (
        <>
        <div className="grid grid-cols-1 gap-4 content-start feed">
        {data.map(item => {
            return <Card data={item.node} />
        })}
        </div>
        <div ref={triggerRef} className={clsx("trigger", { visible: loading })}>
            <LoadingPosts />
        </div>
        </>
    );
}