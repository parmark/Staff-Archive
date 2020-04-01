import React from 'react';

function SearchBar() {
    return (
            <div class="row">
                <form class="col s12">
                    <div class="row">
                        <div class="input-field col s12">
                        <input id="email" type="email" class="validate" />
                        <label for="email">Name</label>
                        </div>
                    </div>
                </form>
            </div>
    )
}

export default SearchBar;