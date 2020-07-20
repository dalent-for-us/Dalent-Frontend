import React, {useEffect, useState} from 'react';
import './CategoryList.css';
import {Link} from 'react-router-dom';
import axios from 'axios';
import queryString from 'query-string';

function CategoryList(props) {
    return (
        <div class="category-list">
            <div class="category-items">
                <Link to="/"><div class={`category-item`}>디자인</div></Link>
                <Link to="/?category=music"><div class="category-item">음악</div></Link>
                <Link to="/?category=programming"><div class="category-item">프로그래밍</div></Link>
                <Link to="/?category=fashion"><div class="category-item">패션</div></Link>
            </div>
        </div>
    );
}

export default CategoryList;