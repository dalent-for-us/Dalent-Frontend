import React from 'react';
import './CategoryThumbnail.css';
import Thumbnail from '../../../Images/thumbnail.png';

function CategoryThumbnail() {
    return (
        <>
            <div class="category-thumbnail">
                <a href="#"><div class="category-more">더보기</div></a>
                <div class="thumbnail-items">
                    <div class="thumbnail-item"><img src={Thumbnail}/></div>
                    <div class="thumbnail-item"><img src={Thumbnail}/></div>
                    <div class="thumbnail-item"><img src={Thumbnail}/></div>
                    <div class="thumbnail-item"><img src={Thumbnail}/></div>
                    <div class="thumbnail-item"><img src={Thumbnail}/></div>
                    <div class="thumbnail-item"><img src={Thumbnail}/></div>
                    <div class="thumbnail-item"><img src={Thumbnail}/></div>
                    <div class="thumbnail-item"><img src={Thumbnail}/></div>
                    <div class="thumbnail-item"><img src={Thumbnail}/></div>
                </div>
            </div>
        </>
    );
}

export default CategoryThumbnail;