import { PureComponent } from "react";

export class SearchAdd extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            searchText: ''
        }
    }

    searchFieldChange = (e) => {
        this.setState({ searchText: e.target.value })
    }

    onSearch = (e) => {
        e.preventDefault()
        this.props.searchText(this.state.searchText)
    }

    render() {
        return (
            <div className="col-10 mx-auto">
                <form className="form-row m-3" onSubmit={this.onSearch}>
                    <input type="text" className="form-control col-10" onChange={this.searchFieldChange} placeholder="search in ad title" />
                    <button className="btn btn-primary col-2" type="submit">search</button>
                </form>
            </div>
        );
    }
}

