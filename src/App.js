import React from "react";
import staff from "./staff.json"
import StaffEntry from "./components/StaffEntry"

class App extends React.Component {
    state = {
        staff: staff
    }

    render() {
        return (
            <div>
                <table>
                    {/* Table Headers */}
                    <thead>
                        <th>Picture</th>
                        <th>Name</th>
                        <th>Age</th>
                    </thead>

                    {/* Table Entries */}
                    <tbody>
                        {this.state.staff.map(staff => 
                            <StaffEntry
                                first={staff.name.first}
                                last={staff.name.last}
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