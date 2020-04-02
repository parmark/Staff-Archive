import React from "react";
import staff from "./staff.json"
import StaffEntry from "./components/StaffEntry"
import Header from "./components/Header"
import "./App.css"

class App extends React.Component {
    state = {
        staff: staff,
        filteredStaff: staff
    }

    handleInputChange = event => {
        const value = event.target.value;
        this.setState({
            filteredStaff: this.state.staff.filter(staff => `${staff.name.first} ${staff.name.last}`.toLowerCase().includes(value))
        })
    }


    render() {
        return (
            <div className="container">
                <Header />
                <div className="row">
                    <form className="col s4 offset-s4">
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
                        {this.state.staff === this.state.filteredStaff ? 
                        this.state.staff.map(staff => 
                            <StaffEntry
                                name={`${staff.name.first} ${staff.name.last}`}
                                age={staff.dob.age}
                                picture={staff.picture.thumbnail}
                                key={staff.login.uuid}
                            />)
                        :this.state.filteredStaff.map(staff => 
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