function SearchToken(tokens: any[], searchQuery: string) {
    return tokens?.filter((item: any) => {
        if (searchQuery === "") return item;
        else if (item.name.toLowerCase().includes(searchQuery.toLowerCase()) || item.name.toUpperCase().includes(searchQuery.toUpperCase())) {
            return item
        }
    })
}

export default SearchToken