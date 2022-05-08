import { PureComponent } from "react";
import { getAddsService } from "../services/add-service";
import { Add } from "./add";

export class ListAdds extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            adds: []
        }
    }

    componentDidMount() {
        getAddsService().then((res) => {
            this.setState({ adds: [...res.data] });
        })
    }

    render() {
        // search results or all ads
        const adds = this.props.adds.length > 0 ? this.props.adds : this.state.adds
        return (
            <>
                {adds.map((a, i) => (<Add key={i} currentAdd={a}> isFav={this.props.isFav} addToFav={this.props.addToFav} removeFromFav={this.props.removeFromFav}</Add>))}
            </>
        );
    }
}
