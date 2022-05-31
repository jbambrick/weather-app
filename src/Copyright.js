import React from "react"


class Copyright extends React.Component {

    getYear() {
        return new Date().getFullYear()
    }

    render() {
        return (
            <div className="copyright">
                © {this.getYear()} Tŝilhqotin National Government
            </div>
        )
    }
}
export default Copyright
