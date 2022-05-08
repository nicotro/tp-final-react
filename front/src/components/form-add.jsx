/* eslint-disable eqeqeq */
/* eslint-disable no-useless-constructor */
import { PureComponent } from "react";
import { createAddService } from './../services/add-service'

class FormAdd extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            add: {
                title: undefined,
                content: undefined,
                pictures: [],
            },
            picturesCount: 0,
            picturesUrl: ''
        }
    }

    fieldsOnChange = (e) => {
        const tmpAdd = this.state.add
        tmpAdd[e.target.getAttribute("name")] = e.target.value
        this.setState({ add: { ...tmpAdd } });
    }

    handlePicturesUrlChange = (e) => {
        this.setState({ picturesUrl: e.target.value });
    }

    addPicture = (e) => {
        if (this.state.picturesUrl.length > 0 && this.state.picturesCount < 4) {
            let newAddPicture = { ...this.state.add }
            newAddPicture.pictures.push(this.state.picturesUrl)
            this.setState({ newAddPicture })
            this.setState({ picturesCount: (this.state.picturesCount + 1) })
        }
    }

    confirm = (e) => {
        e.preventDefault()
        if (e.nativeEvent.submitter.name == 'createAddBtn') {
            if (this.state.add.title != undefined
                && this.state.add.content != undefined
                && this.state.add.pictures.length != 0) {
                createAddService ({ ...this.state.add }).then(res => {
                    if (res.data.error == false) {
                        this.props.navigate("/")
                    }
                    else {
                        alert(this.data.message)
                    }
                })
            }
            // temp message
            else alert("Empty/incomplete form\nNot submitted")
        }
    }

    render() {
        return (
            <div className="container col-8">
                <form onSubmit={this.confirm} className="mt-3">
                    <div className="form-group form-row">
                        <input type="text" className="form-control my-3" name="title" onChange={this.fieldsOnChange} placeholder="Add title" />
                        <textarea className="form-control" name="content" rows="5" onChange={this.fieldsOnChange} placeholder="Add description" />
                    </div>
                    <div className="form-group">
                        <div className="form-group form-row mt-3">
                            <input type="text" className="form-control col-9" name="pictures" placeholder="Add picture url" value={this.state.picturesUrl} onChange={this.handlePicturesUrlChange} />
                            <button className="btn btn-primary mb-0 col-3" name="picturesBtn" onClick={this.addPicture}>Add picture</button>
                            {this.state.picturesCount > 0
                                ?
                                (<div className="alert alert-success mt-2 col-12">{this.state.add.pictures.map((p, i) => (<div key={i}>{p}</div>))}</div>)
                                :
                                (<div className="alert alert-primary mt-2 col-9">Please enter 1 to 4 picture url</div>)
                            }
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary" name="createAddBtn">Create Add</button>
                </form>

            </div>


        );

    }
}

export default FormAdd