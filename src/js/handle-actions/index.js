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
    action.setFilter && action.setFilter({filter: pokemonType})
    action.setInfos && action.setInfos({data: []})
    action.setLimit && action.setLimit({value: listDefaultValue})
    action.setSearch && action.setSearch({data: "default"})
}

const handlefilterDefault = ({...action}) => {
    action.setFilter && action.setFilter({filter: "default"})
    action.setLimit && action.setLimit({value: 0})
    action.setInfos && action.setInfos({data: []})
    action.setSearch && action.setSearch({data: "default"})
}

const handleShowMoreBtn = ({...action}, listLimit, moreToshow) => {
    action.setLimit && action.setLimit({value: listLimit.value + moreToshow})
    action.setLoading && action.setLoading(true)
}

const handleErrorBtn = ({...action}) => {
    action.setError && action.setError({state: false})
    action.setSearch && action.setSearch({data: "default"}) 
}

export { handleSearchInputByKey, handleSearchInputByChange, handleFilter, handlefilterDefault, handleShowMoreBtn, handleErrorBtn }