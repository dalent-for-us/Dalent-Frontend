import React from 'react';
import './CategoryList.css';

function CategoryList() {
    return (
        <div class="category-list">
            <div class="category-items">
                <div class="category-item active">디자인</div>
                <div class="category-item">음악</div>
                <div class="category-item">프로그래밍</div>
                <div class="category-item">패션</div>
            </div>
        </div>
    );
}

export default CategoryList;