import React,{useEffect, useState} from 'react';
import CategoryContainer from '../Components/Category/CategoryContainer/CategoryContainer';
import RankingContainer from '../Components/Ranking/RankingContainer/RankingContainer';
import axios from 'axios';
import queryString from 'query-string';

function Home({location}) {
    const [work, setWork] = useState({});
    const query = queryString.parse(location.search);
    useEffect(() => {
        setWork({})
        if(query.category === undefined) {
            console.log("디자인")
            axios.get("http://3.34.0.219/works?category=art")
            .then(response => setWork(response.data))
            .catch(err => console.log(err));
        } else if(query.category === "fashion") {
            console.log("패션")
            axios.get("http://3.34.0.219/works?category=FASHION")
            .then(response => setWork(response.data))
            .catch(err => console.log(err));
        } else if(query.category === "music") {
            console.log("음악")
            axios.get("http://3.34.0.219/works?category=MUSIC")
            .then(response => setWork(response.data))
            .catch(err => console.log(err));
        } else if(query.category === "programming") {
            console.log("프밍")
            axios.get("http://3.34.0.219/works?category=PROGRAMMING")
            .then(response => setWork(response.data))
            .catch(err => console.log(err));
        }
        console.log(work)
    }, [query.category])
    return(
        <>
            <div class="body">
                <div class="category-body">
                    <CategoryContainer location={location} work={work}/>
                </div>
                <div class="ranking-body">
                    <RankingContainer/>
                </div>
            </div>
        </>
    )
};

export default Home;