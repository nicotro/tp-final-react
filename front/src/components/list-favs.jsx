import { PureComponent } from "react";
import { Add } from "./add";

export class ListFavs extends PureComponent {
    constructor(props) {
        super(props);
    }
    state = {}
    render() {
        return (
            <div className="container mx-auto">
                <p className="text-center mt-3">Favorites list placeholder</p>
            </div>
        );
    }
}
