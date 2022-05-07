import { useState } from "react";
import { searchAddsService } from "../services/add-service";
import { ListAdds } from "./list-adds";
import { SearchAdd } from "./search-add";

export function HomeAdd() {
    const [foundAdds, setfoundAdds] = useState([])

    const searchText = (search) => {
        searchAddsService(search).then(res => {
            setfoundAdds(res)
        })
    }
    return (
        <div className="container mx-auto">
            <SearchAdd search={searchText}></SearchAdd>
            <ListAdds adds={foundAdds}></ListAdds>
        </div>
    );
}
