import React from 'react';
import './CategoryContainer.css';
import CategoryList from '../CategoryList/CategoryList';
import CategoryThumbnail from '../CategoryThumbnail/CategoryThumbnail';

function CategoryContainer() {
    return (
        <div class="category-container">
            <div class="category-title">카테고리</div>
            <CategoryList/>
            <CategoryThumbnail/>
        </div>
    );
}

export default CategoryContainer;