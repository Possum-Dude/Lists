export const selectCustomStyles = {
    option: (provided, state) => ({
        ...provided,
        borderBottom: "1px solid green",
        color: state.isSelected ? "yellow" : "black",
        backgroundColor: state.isSelected? "green" : "white",
        padding: "0px",
        isSearchable: "true",
        isLoading: "true"
    })
}