import React, { Component } from 'react'
// import { Link } from "react-router-dom"
import "./CollectionsList.css"
class CollectionsList extends Component {
    render() {
        // console.log("this.props.collections", this.props.collections)

        return (
            <React.Fragment>

                <br />
                <br />

                <br />

                <section className="collections">
                    <br />
                    {
                        this.props.collections.map(collection =>

                            <button key={collection.id} className="btn btn-primary" id={collection.id} onClick={() => {
                                this.props.history.push(`/collection/${collection.id}`)}}>
                                {collection.collectorsName}  </button>
                        )
                    }
                </section>
            </React.Fragment>
        )
    }
}

export default CollectionsList