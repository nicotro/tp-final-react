import { useState } from "react";
import { searchAddsService } from "../services/add-service";
import { ListAdds } from "./list-adds";
import { SearchAdd } from "./search-add";

export function HomeAdd(props) {
    const [foundAdds, setfoundAdds] = useState([])
    const noAddFound = { "id": 0, "title": "not found", "content": "No ad found with this search, please update your search criteria", "pictures": ["https://picsum.photos/200/300?grayscale&blur=4"] }

    const searchText = (search) => {
        if (search != '') {
            searchAddsService(search).then(res => {
                if (res.data.length > 0) {
                    setfoundAdds(res.data)
                } else
                    setfoundAdds([noAddFound])
            })
        }
        else setfoundAdds([])
    }

    return (
        <div className="container mx-auto">
            <SearchAdd searchText={searchText}></SearchAdd>
            <ListAdds adds={foundAdds} isFav={props.isFav} addToFav={props.addToFav} removeFromFav={props.removeFromFav}></ListAdds>
        </div>
    );
}
