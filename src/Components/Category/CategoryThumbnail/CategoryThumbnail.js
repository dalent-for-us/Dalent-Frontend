import React from 'react';
import './CategoryThumbnail.css';
import Thumbnail from '../../../Images/thumbnail.png';
import {Link} from 'react-router-dom';
function CategoryThumbnail(props) {
    var workItem = Array.from(props.work);
    
    return (
        <>
            <div class="category-thumbnail">
                <a href="#"><div class="category-more">더보기</div></a>
                <div class="thumbnail-items">
                    {
                        workItem.map((work) => {
                            console.log("썸네일 :" + work)
                            return (
                                <Link key={work.work_id} to={`/viewpage?id=${work.work_id}`}><div class="thumbnail-item"><img src={work.thumbnail_image}/></div></Link>
                            )
                        })
                    }
                </div>
            </div>
        </>
    );
}

export default CategoryThumbnail;