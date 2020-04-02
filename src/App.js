import React from "react";
import staff from "./staff.json"
import StaffEntry from "./components/StaffEntry"
import Header from "./components/Header"
import "./App.css"

class App extends React.Component {
    state = {
        staff: staff,
        filteredStaff: staff,
        ascendingOrder: true
    }

    handleInputChange = event => {
        const value = event.target.value;
        this.setState({
            filteredStaff: this.state.staff.filter(staff => `${staff.name.first} ${staff.name.last}`.toLowerCase().includes(value.toLowerCase()))
        })
    }

    handleOrderChange = event => {
        this.state.ascendingOrder ? this.setState({ascendingOrder: false}) : this.setState({ascendingOrder: true})
    }

    sortByNameAsc = (a, b) => {
            if (a.name.first < b.name.first) {
                return -1
            }
            if (b.name.first < a.name.first) {
                return 1
            }
    }

    sortByNameDes = (a, b) => {
            if (a.name.first < b.name.first) {
                return 1
            }
            if (b.name.first < a.name.first) {
                return -1
            }
    }

    render() {
        return (
            <div className="container">
                <Header />
                {/* Searchbar */}
                <div className="row">
                    <form className="col s4 offset-s3">
                        <div className="row">
                            <div className="input-field col s12">
                                <input 
                                    id="email" 
                                    type="text" 
                                    onChange={this.handleInputChange}
                                />
                                <label htmlFor="email">Name</label>
                            </div>
                        </div>
                    </form>
                    <button 
                        className="btn brown"
                        onClick={this.handleOrderChange}    
                    >Order by Name</button>
                </div>
                <table className="responsive-table highlight">
                    {/* Table Headers */}
                    <thead>
                        <tr>
                        <th>Picture</th>
                        <th>Name</th>
                        <th>Age</th>
                        </tr>
                    </thead>

                    {/* Table Entries */}
                    <tbody>
                        {this.state.ascendingOrder ? 
                            this.state.staff === this.state.filteredStaff ? 
                                this.state.staff.sort(this.sortByNameAsc).map(staff => 
                                    <StaffEntry
                                        name={`${staff.name.first} ${staff.name.last}`}
                                        age={staff.dob.age}
                                        picture={staff.picture.thumbnail}
                                        key={staff.login.uuid}
                                    />)
                                :this.state.filteredStaff.sort(this.sortByNameAsc).map(staff => 
                                    <StaffEntry
                                        name={`${staff.name.first} ${staff.name.last}`}
                                        age={staff.dob.age}
                                        picture={staff.picture.thumbnail}
                                        key={staff.login.uuid}
                                    />)
                        : 
                            this.state.staff === this.state.filteredStaff ? 
                                this.state.staff.sort(this.sortByNameDes).map(staff => 
                                    <StaffEntry
                                        name={`${staff.name.first} ${staff.name.last}`}
                                        age={staff.dob.age}
                                        picture={staff.picture.thumbnail}
                                        key={staff.login.uuid}
                                    />)
                                :this.state.filteredStaff.sort(this.sortByNameDes).map(staff => 
                                    <StaffEntry
                                        name={`${staff.name.first} ${staff.name.last}`}
                                        age={staff.dob.age}
                                        picture={staff.picture.thumbnail}
                                        key={staff.login.uuid}
                                    />)}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default App;