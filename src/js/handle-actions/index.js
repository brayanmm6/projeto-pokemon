const handleSearchInputByKey = ({...action}, enter ) => {
    if (enter.key === "Enter"){
        action.setSearch &&  action.setSearch({data: enter.target.value})
        action.setFilter &&  action.setFilter({filter: "default"})
    } 
}

const handleSearchInputByChange = ({...action}, event) => {
    if(event.target.value.length === 0){
        action.setSearch && action.setSearch({data: "default"})
    }
}

const handleFilter = ({...action}, pokemonType, listDefaultValue) => {
    action.setFilter({filter: pokemonType})
    action.setInfos({data: []})
    action.setLimit({value: listDefaultValue})
    action.setSearch({data: "default"})
}

const handleShowMoreBtn = ({...action}, listLimit, moreToshow) => {
    action.setLimit && action.setLimit({value: listLimit.value + moreToshow })
    action.setLoading && action.setLoading(true)
}

export { handleSearchInputByKey, handleSearchInputByChange, handleFilter, handleShowMoreBtn }