import React from 'react';
import './CategoryContainer.css';
import CategoryList from '../CategoryList/CategoryList';
import CategoryThumbnail from '../CategoryThumbnail/CategoryThumbnail';

function CategoryContainer(props) {
    return (
        <div class="category-container">
            <div class="category-title">카테고리</div>
            <div class="cateogry-bottom">
                <CategoryList location={props.location}/>
                <CategoryThumbnail work={props.work}/>
            </div>
        </div>
    );
}

export default CategoryContainer;