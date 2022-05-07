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
            console.log('loading all adds');
        })
    }

    render() {
        // search results or all adds
        const adds = this.props.adds.length > 0 ? this.props.adds : this.state.adds
        return (
            <>
                {adds.map((a, i) => (<Add key={i} currentAdd={a}></Add>))}
            </>
        );
    }
}
