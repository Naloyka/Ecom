
const FilterApiFetchFunction = ({
    type_of_view,
    api_id,
    brand_id,
    category_id,
    setState,
    name = 'main_pg_fullgraph'
}) => {

    const URL = `http://62.84.124.35:5051/api/v1/${type_of_view}/functions/${name}`
    const options = {
        headers: {
            api_id,
            brand_id,
            category_id
        }
    }

    fetch(URL,options)
        .then(res => res.json())
        .then(json => setState(json))
        .catch(err => console.log(err))
}

export {FilterApiFetchFunction}