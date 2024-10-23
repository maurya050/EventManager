import { useRouter } from "next/router";

function FilteredEventPage(){

    const router = useRouter();

    const filterData = router.query.slug;
    
    if(!filterData){
        return <p className = "center">Loading ...</p>
    }

    const filteredyear = filterData[0];
    const filteredmonth = filterData[1];

    const numYear = +filteredyear;
    const numMonth = +filteredmonth;

    if(isNaN(numYear) ||
        isNaN(numMonth) ||
        numYear > 2030 ||
        numMonth < 2021 ||
        numMonth < 1 || 
        numMonth >12
    ){
        return <p>Invalid Filter !!!</p>
    }

    return(
        <div>
            <h1>All Event page based on Filter...</h1>
        </div>
    )
}

export default FilteredEventPage;